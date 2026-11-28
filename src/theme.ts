const common = {
  spacing: { small: 8, medium: 16, large: 24, wide: 32 },
  type: { caption: 14, body: 17, title: 40, captionLeading: 20, bodyLeading: 24, titleLeading: 44 },
  weight: { medium: '500', bold: '700' },
  playerRatio: 9 / 16,
} as const;

export const themes = {
  light: {
    ...common,
    color: { backdrop: '#E7E5E1', surface: '#F5F3EF', text: '#202221', muted: '#545652' },
  },
  dark: {
    ...common,
    color: { backdrop: '#141514', surface: '#202220', text: '#F4F1EB', muted: '#C3C3BC' },
  },
} as const;
