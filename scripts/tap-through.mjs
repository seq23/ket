import assert from 'node:assert/strict';
import { mkdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { chromium } from 'playwright';

const origin = 'http://127.0.0.1:4173';
const output = 'tap-artifacts';
const flow = JSON.parse(await readFile(new URL('../tap-through.json', import.meta.url), 'utf8'));

assert.ok(flow.journeys.length, 'Configure at least one tap-through journey');

const browser = await chromium.launch();
try {
  for (const width of [320, 390]) {
    for (const colorScheme of ['light', 'dark']) {
      for (const journey of flow.journeys) {
        assert.ok(journey.steps.length, `Journey has no steps: ${journey.name}`);
        const path = join(output, `${width}-${colorScheme}`, journey.name);
        await mkdir(path, { recursive: true });

        const viewport = { width, height: width === 320 ? 640 : 844 };
        const context = await browser.newContext({
          viewport,
          colorScheme,
          locale: journey.locale ?? 'en-US',
          isMobile: true,
          hasTouch: true,
          serviceWorkers: 'block',
          recordVideo: { dir: path, size: viewport },
        });
        const errors = [];
        try {
          const page = await context.newPage();
          page.on('pageerror', (error) => errors.push(error.message));
          page.on('console', (message) => {
            if (message.type() === 'error') errors.push(message.text());
          });
          await context.route('**/*', (route) => {
            if (new URL(route.request().url()).origin === origin) return route.continue();
            return route.abort();
          });

          const response = await page.goto(new URL(journey.start, origin).href);
          assert.ok(response?.ok(), `Failed to load ${journey.start}`);
          for (const step of journey.steps) {
            if (step.tap) await page.getByText(step.tap, { exact: true }).tap({ timeout: 5_000 });
            const expected = step.see ?? step.then;
            assert.ok(expected, `Step ${step.id} must assert what appears on screen`);
            await page.getByText(expected, { exact: true }).waitFor({ state: 'visible', timeout: 5_000 });
            const fits = await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth);
            assert.ok(fits, `Horizontal overflow after ${step.id} at ${width}px`);
            assert.deepEqual(errors, [], `Browser errors after ${step.id}`);
            await page.screenshot({ path: join(path, `${step.id}.png`) });
          }
          console.log(`PASS ${journey.name} at ${width}px ${colorScheme}`);
        } finally {
          await context.close();
        }
      }
    }
  }
} finally {
  await browser.close();
}
