import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  theme: {
    backgroundColor: {
      interactive: {
        success: '#d4edda',
        danger: '#f8d7da',
        warning: '#fff3cd',
        info: '#d1ecf1',
      },
      black: {
        '100': '#383838',
        '200': '#646464',
        '300': '#1f1f1f',
        '400': '#1b1b1b',
        default: '#222222',
      },
      white: {
        '100': '#e4e6e3',
        '200': '#caccca',
        '300': '#fdfffc',
        '400': '#fdfffd',
        default: '#fdfffc',
      },
      primary: {
        '100': '#ff581a',
        '200': '#ff6a33',
        '300': '#e63e00',
        '400': '#cc3700',
        default: '#ff4500',
        'hover-secondary': '#FF581A4D',
      },
    },
    'text-color': {
      interactive: {
        success: '#28a745',
        warning: '#ffc107',
        danger: '#dc3545',
        info: '#17a2b8',
      },
      white: {
        '100': '#e4e6e3',
        '200': '#caccca',
        '300': '#fdfffc',
        '400': '#fdfffd',
        default: '#fdfffc',
      },
      black: {
        '100': '#383838',
        '200': '#646464',
        '300': '#1f1f1f',
        '400': '#1b1b1b',
        default: '#222222',
      },
      primary: {
        '100': '#ff6a33',
        '200': '#ff581a',
        '300': '#e63e00',
        '400': '#cc3700',
        default: '#ff4500',
      },
    },
    colors: {
      white: {
        '100': '#e4e6e3',
        '200': '#caccca',
        '300': '#fdfffc',
        '400': '#fdfffd',
        default: '#fdfffc',
      },
      black: {
        '100': '#383838',
        '200': '#646464',
        '300': '#1f1f1f',
        '400': '#1b1b1b',
        default: '#222222',
      },
      primary: {
        '100': '#ff6a33',
        '200': '#ff581a',
        '300': '#e63e00',
        '400': '#cc3700',
        default: '#ff4500',
      },
    },

    typography: {
      'Display-60px': {
        css: {
          fontFamily: 'Poppins',
          fontSize: '60px',
          fontWeight: 800,
          letterSpacing: '0%',
          lineHeight: '72px',
          textTransform: 'none',
          textDecoration: 'none',
        },
      },
      'Heading-H1-Large': {
        css: {
          fontFamily: 'Poppins',
          fontSize: '48px',
          fontWeight: 800,
          letterSpacing: '0%',
          lineHeight: '50px',
          textTransform: 'none',
          textDecoration: 'none',
        },
      },
      'Heading-H1-Small': {
        css: {
          fontFamily: 'Poppins',
          fontSize: '36px',
          fontWeight: 800,
          letterSpacing: '0%',
          lineHeight: '40px',
          textTransform: 'none',
          textDecoration: 'none',
        },
      },
      'Heading-H2-Large': {
        css: {
          fontFamily: 'Poppins',
          fontSize: '36px',
          fontWeight: 700,
          letterSpacing: '0%',
          lineHeight: '40px',
          textTransform: 'none',
          textDecoration: 'none',
        },
      },
      'Heading-H2-Small': {
        css: {
          fontFamily: 'Poppins',
          fontSize: '24px',
          fontWeight: 700,
          letterSpacing: '0%',
          lineHeight: '28px',
          textTransform: 'none',
          textDecoration: 'none',
        },
      },
      'Heading-H3-Large': {
        css: {
          fontFamily: 'Poppins',
          fontSize: '24px',
          fontWeight: 700,
          letterSpacing: '0%',
          lineHeight: '28px',
          textTransform: 'none',
          textDecoration: 'none',
        },
      },
      'Heading-H3-Small': {
        css: {
          fontFamily: 'Poppins',
          fontSize: '20px',
          fontWeight: 700,
          letterSpacing: '0%',
          lineHeight: '24px',
          textTransform: 'none',
          textDecoration: 'none',
        },
      },
      'Heading-H4-Large': {
        css: {
          fontFamily: 'Poppins',
          fontSize: '20px',
          fontWeight: 700,
          letterSpacing: '0%',
          lineHeight: '20px',
          textTransform: 'none',
          textDecoration: 'none',
        },
      },
      'Heading-H4-Small': {
        css: {
          fontFamily: 'Poppins',
          fontSize: '16px',
          fontWeight: 700,
          letterSpacing: '0%',
          lineHeight: '20px',
          textTransform: 'none',
          textDecoration: 'none',
        },
      },
      'Heading-H5-Large': {
        css: {
          fontFamily: 'Poppins',
          fontSize: '16px',
          fontWeight: 700,
          letterSpacing: '0%',
          lineHeight: '20px',
          textTransform: 'none',
          textDecoration: 'none',
        },
      },
      'Heading-H5-Small': {
        css: {
          fontFamily: 'Poppins',
          fontSize: '14px',
          fontWeight: 700,
          letterSpacing: '0%',
          lineHeight: '20px',
          textTransform: 'none',
          textDecoration: 'none',
        },
      },
      'Heading-H6-Large': {
        css: {
          fontFamily: 'Poppins',
          fontSize: '14px',
          fontWeight: 700,
          letterSpacing: '0%',
          lineHeight: '16px',
          textTransform: 'none',
          textDecoration: 'none',
        },
      },
      'Heading-H6-Small': {
        css: {
          fontFamily: 'Poppins',
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '0%',
          lineHeight: '16px',
          textTransform: 'none',
          textDecoration: 'none',
        },
      },
      'Body-Regular-Large': {
        css: {
          fontFamily: 'var(--font-rubik)',
          fontSize: '16px',
          fontWeight: 400,
          letterSpacing: '0%',
          lineHeight: '18px',
          textTransform: 'none',
          textDecoration: 'none',
        },
      },
      'Body-Regular-Small': {
        css: {
          fontFamily: 'var(--font-rubik)',
          fontSize: '14px',
          fontWeight: 400,
          letterSpacing: '0%',
          lineHeight: '16px',
          textTransform: 'none',
          textDecoration: 'none',
        },
      },
      'Body-Semibold-Large': {
        css: {
          fontFamily: 'var(--font-rubik)',
          fontSize: '16px',
          fontWeight: 600,
          letterSpacing: '0%',
          lineHeight: '18px',
          textTransform: 'none',
          textDecoration: 'none',
        },
      },
      'Body-Semibold-Small': {
        css: {
          fontFamily: 'var(--font-rubik)',
          fontSize: '14px',
          fontWeight: 600,
          letterSpacing: '0%',
          lineHeight: '16px',
          textTransform: 'none',
          textDecoration: 'none',
        },
      },
      'Caption-Regular-Large': {
        css: {
          fontFamily: 'var(--font-rubik)',
          fontSize: '12px',
          fontWeight: 400,
          letterSpacing: '0%',
          lineHeight: '14px',
          textTransform: 'none',
          textDecoration: 'none',
        },
      },
      'Caption-Regular-Small': {
        css: {
          fontFamily: 'var(--font-rubik)',
          fontSize: '12px',
          fontWeight: 400,
          letterSpacing: '0%',
          lineHeight: '14px',
          textTransform: 'none',
          textDecoration: 'none',
        },
      },
      'Caption-Semibold-Large': {
        css: {
          fontFamily: 'var(--font-rubik)',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0%',
          lineHeight: '14px',
          textTransform: 'none',
          textDecoration: 'none',
        },
      },
      'Caption-Semibold-Small': {
        css: {
          fontFamily: 'var(--font-rubik)',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0%',
          lineHeight: '14px',
          textTransform: 'none',
          textDecoration: 'none',
        },
      },
      'Caption-Uppercase-Bold-Large': {
        css: {
          fontFamily: 'var(--font-rubik)',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0%',
          lineHeight: '14px',
          textTransform: 'uppercase',
          textDecoration: 'none',
        },
      },
      'Caption-Uppercase-Bold-Small': {
        css: {
          fontFamily: 'var(--font-rubik)',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0%',
          lineHeight: '14px',
          textTransform: 'uppercase',
          textDecoration: 'none',
        },
      },
      'Footer-Regular': {
        css: {
          fontFamily: 'var(--font-rubik)',
          fontSize: '10px',
          fontWeight: 400,
          letterSpacing: '0%',
          lineHeight: '12px',
          textTransform: 'none',
          textDecoration: 'none',
        },
      },
      'Footer-Semibold': {
        css: {
          fontFamily: 'var(--font-rubik)',
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '0%',
          lineHeight: '12px',
          textTransform: 'none',
          textDecoration: 'none',
        },
      },
      'Footer-Semibold-Uppercase': {
        css: {
          fontFamily: 'var(--font-rubik)',
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '0%',
          lineHeight: '12px',
          textTransform: 'uppercase',
          textDecoration: 'none',
        },
      },
    },

    // },
    extend: {
      screens: {
        sm: '250px',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        inter: ['var(--font-inter)'],
        rubik: ['var(--font-rubik)'],
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  plugins: [require('@tailwindcss/typography')({ className: 'typography' })],
};
export default config;
