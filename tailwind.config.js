/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#eeecff',
            100: '#d8d4ff',
            200: '#b3aaff',
            300: '#8e7fff',
            400: '#6a54ff',
            500: '#5B52F3', // Main primary color
            600: '#4A43D9',
            700: '#3c36bd',
            800: '#2e2a8e',
            900: '#1f1d5f',
          },
          secondary: {
            50: '#eef1ff',
            100: '#dce3ff',
            200: '#bbc7ff',
            300: '#99aaff',
            400: '#778dfe',
            500: '#6366F1', // Main secondary color
            600: '#4F46E5',
            700: '#4338ca',
            800: '#3730a3',
            900: '#312e81',
          },
          tertiary: {
            50: '#fce7f3',
            100: '#fbcfe8',
            200: '#f9a8d4',
            300: '#f472b6',
            400: '#ec4899', // Main tertiary color
            500: '#DB2777',
            600: '#be185d',
            700: '#9d174d',
            800: '#831843',
            900: '#500724',
          },
          accent: {
            50: '#ecfdf5',
            100: '#d1fae5',
            200: '#a7f3d0',
            300: '#6ee7b7',
            400: '#34d399',
            500: '#10b981', // Main accent color
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b',
          },
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        },
        boxShadow: {
          'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        },
        typography: (theme) => ({
          DEFAULT: {
            css: {
              color: theme('colors.gray.700'),
              a: {
                color: theme('colors.primary.500'),
                '&:hover': {
                  color: theme('colors.primary.600'),
                },
              },
              h1: {
                color: theme('colors.gray.900'),
              },
              h2: {
                color: theme('colors.gray.900'),
              },
              h3: {
                color: theme('colors.gray.900'),
              },
              h4: {
                color: theme('colors.gray.900'),
              },
            },
          },
        }),
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  };