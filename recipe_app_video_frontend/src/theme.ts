export const Theme = {
  name: 'Ocean Professional',
  colors: {
    primary: '#2563EB',
    secondary: '#F59E0B',
    success: '#F59E0B',
    error: '#EF4444',
    background: '#f9fafb',
    surface: '#ffffff',
    text: '#111827',
  },
  radius: {
    sm: 8,
    md: 16,
    lg: 24,
  },
  shadow: {
    sm: '0 2px 10px rgba(0,0,0,0.06)',
    md: '0 8px 24px rgba(0,0,0,0.08)',
  },
};

export const gradients = {
  subtle: `linear-gradient(180deg, rgba(37,99,235,0.06) 0%, rgba(249,250,251,0.6) 100%)`,
  surface: `linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,1) 100%)`,
};

export const fonts = {
  sans: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
};

export const device = {
  // 19.5:9-ish mobile frame within 1920x1080 canvas
  width: 720,
  height: 1520,
  topOffset: 100,
  borderRadius: 40,
  bezel: 20,
};
