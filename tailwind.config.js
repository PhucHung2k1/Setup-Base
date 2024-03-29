/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1520px',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '13xl': '2rem',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
    extend: {
      boxShadow: {
        'mango-shadow-1': 'inset 0px 0px 2px rgba(0, 0, 0, 0.16)',
      },
      colors: {
        'mango-primary-blue': '#00BED6',
        'mango-text-black-1': '#262626',
        'mango-text-blue-1': '#2F54EB',
        'mango-text-blue-2': '#0288D1',
        'mango-text-gray-1': '#A7A7A7',
        'mango-text-gray-2': '#737277',
        'mango-gray-light-1': '#D5D7DA',
        'mango-gray-light-3': '#B0B2C6',
        'mango-gray-light-2': '#F5F5F5',
        'mango-gray-light-4': '#DEDEDE',
        'mango-gray-light-5': '#F3F4F6',
        'mango-gray-light-6': '#9B9BA0',
        'mango-blue-light-1': '#E0F7FA',
        'text-title': '#1F1F23',
        'text-error': '#DA2036',
        'text-secondary': '#737277',
        'text-disable': '#C5C4C9',
        'text-primary-dark': '#00ADC3',
        'icon-color': '#5C5D6A',
        'icon-color-2': '#7E8091',
        'icon-delete': '#F28500',
        'primary-dark': '#404044',
        'border-secondary': '#7E8091',
        'border-light': '#CBCBDB',
        'blue-gray': '#F9F9FA',
        'blue-gray-900': '#75778F',
        'line-main': '#DEDEE8',

        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          50: '#E3F2FD',
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#0057B2',
          800: '#2c5282',
          900: '#2a4365',
        },
        pink: {
          50: '#FDE5ED',
          600: '#E12F65',
          700: '#CA2B60',
        },
        cyan: {
          50: '#E0F7FA',
          700: '#0098A9',
          800: '#008491',
        },
        'background-paper-elevation-1': '#ecedee',
        'button-hover-cyan': '#00ADC3',
        'primary-states-hover': 'rgba(0, 189, 214, 0.08)',
        'text-primary': '#404044',
        'switch-knobfill': '#fafafa',
        'switch-slidefill': '#000',
        'line-light': '#eaeaf0',
        'primary-main': '#00bdd6',
        'primary-contrast': '#fff',
        'bg-disable': '#5c5d6a1f',
        'bg-light': '#F3F4F6',
        'green-light': 'rgba(105, 176, 0, 0.16)',
        'gray-light': 'rgba(92, 93, 106, 0.08)',
        'success-dark': '#1C7A00',
        tertiary: '#9B9BA0',
        'disable-input': '#F2F2F2',
        'primary-gradient': '#4DD1E3',
      },
    },
  },
  plugins: [],
};
