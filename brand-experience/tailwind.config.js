/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#2A0C72',
          100: '#1A0750',
          60: '#5B3B9B',
          20: '#DCD3F0',
          8: '#F0ECFB',
        },
        coral: {
          DEFAULT: '#F95A60',
          60: '#FB8B90',
          20: '#FFDCDE',
          8: '#FFF0F0',
        },
        ink: '#1A0E35',
        muted: '#6B5F8A',
        border: '#E5DFF5',
        surface: '#FFFFFF',
        canvas: '#F7F5FC',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'Almarai', '-apple-system', 'sans-serif'],
        arabic: ['Almarai', '"Plus Jakarta Sans"', 'Tahoma', 'sans-serif'],
      },
      spacing: {
        4.5: '18px',
      },
      borderRadius: {
        card: '20px',
        btn: '12px',
        modal: '24px',
      },
      boxShadow: {
        sm2: '0 2px 16px rgba(42,12,114,.09)',
        md2: '0 8px 36px rgba(42,12,114,.15)',
        lg2: '0 20px 60px rgba(42,12,114,.20)',
      },
      transitionTimingFunction: {
        tuba: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backgroundImage: {
        'tuba-gradient': 'linear-gradient(135deg, #2A0C72 0%, #F95A60 100%)',
      },
      letterSpacing: {
        eyebrow: '0.06em',
      },
    },
  },
  plugins: [],
}
