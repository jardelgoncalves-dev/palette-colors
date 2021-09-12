const fallback = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`

export const typography = {
  family: {
    primary: `Inter, ${fallback}`,
    secondary: `Roboto, ${fallback}`,
  },
  sizes: {
    '2xs': '10px',
    xs: '12px',
    sm: '14px',
    base: '16px',
    md: '18px',
    lg: '24px',
    xl: '32px',
    '2xl': '40px',
    '3xl': '56px',
    '4xl': '64px',
  },
  lineHeight: {
    sm: '16px',
    base: '24px',
    md: '32px',
  },
} as const
