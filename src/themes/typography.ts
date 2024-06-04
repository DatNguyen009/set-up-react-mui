declare module '@mui/material/styles' {
  interface TypographyVariants {
    caption1: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    caption1?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    caption1: true
  }
}

const DEFAULT_TEXT_COLOR = '#111827'

const Typography = () => {
  return {
    fontFamily: 'Public Sans, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,

    h1: {
      fontWeight: 700,
      fontSize: '48px',
      lineHeight: '48px',
      color: DEFAULT_TEXT_COLOR
    },
    h2: {
      fontWeight: 700,
      fontSize: '36px',
      lineHeight: '40px',
      color: DEFAULT_TEXT_COLOR
    },
    h3: {
      fontWeight: 600,
      fontSize: '30px',
      lineHeight: '36px',
      color: DEFAULT_TEXT_COLOR
    },
    h4: {
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '32px',
      color: DEFAULT_TEXT_COLOR
    },
    h5: {
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: '28px',
      color: DEFAULT_TEXT_COLOR
    },
    h6: {
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '28px',
      color: DEFAULT_TEXT_COLOR
    },
    body1: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
      color: DEFAULT_TEXT_COLOR
    },
    body2: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 400,
      color: DEFAULT_TEXT_COLOR
    },
    caption: {
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: 400,
      color: DEFAULT_TEXT_COLOR
    },
    caption1: {
      fontWeight: 400,
      fontSize: '10px',
      lineHeight: '14px',
      color: DEFAULT_TEXT_COLOR
    }
  }
}

export default Typography
