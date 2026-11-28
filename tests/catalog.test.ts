import assert from 'node:assert/strict';
import test from 'node:test';
import {
  ENDINGS_PER_SERIES, EPISODES_PER_SERIES, FREE_EPISODES, LANES, LANE_SHELVES, LOCALES, MAX_EPISODES, SERIES,
} from '../src/catalog';

test('launch slate has six complete stories in display order', () => {
  assert.deepEqual(SERIES.map(({ title }) => title), [
    'Lagos to Houston',
    'The Heir from Accra',
    'The Reading of the Will',
    'Luanda to Salvador',
    'Guangzhou',
    'First Lady',
  ]);
  assert.deepEqual(SERIES.map(({ language }) => language), ['en', 'en', 'en', 'pt', 'en', 'fr']);
  assert.equal(FREE_EPISODES, 6);
  assert.equal(EPISODES_PER_SERIES, 20);
  assert.equal(MAX_EPISODES, 25);

  const paths = new Set<string>();
  for (const { episodes, endings, lane, pairing } of SERIES) {
    assert.equal(episodes.length, EPISODES_PER_SERIES);
    assert.equal(endings.length, ENDINGS_PER_SERIES);
    assert.ok(LANES.includes(lane));
    assert.ok(pairing);
    for (const item of [...episodes, ...endings]) {
      assert.equal(item.synopsis.length, 2);
      assert.ok(item.synopsis.every((line) => line.trim().length > 0));
      assert.equal(item.durationSeconds, 60);
      assert.deepEqual(Object.keys(item.subtitles), LOCALES);
      assert.ok(!paths.has(item.mediaPath), item.mediaPath);
      paths.add(item.mediaPath);
    }
  }
});

test('lane shelves omit empty categories', () => {
  assert.ok(!LANE_SHELVES.some(({ lane }) => lane === 'Faith' || lane === 'Black Joy'));
  assert.deepEqual(
    LANE_SHELVES.flatMap(({ series }) => series.map(({ id }) => id)).sort(),
    SERIES.map(({ id }) => id).sort(),
  );
});
