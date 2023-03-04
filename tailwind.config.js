/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grayBorder: '#D1D1D1',
        titleGray: '#8D8D8D',
        pgPlaceholder: '#B5B5B5',
        primary: '#4f46e5',
        lightDark: '#f2f1ee99'
      },
      fontSize: {
        qrTitle: [
          '1.875rem',
          {
            lineHeight: '2.2375rem',
            fontWeight: '600'
          }
        ],
        mdTitle: [
          '1.125rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '600',
            letterSpacing: '-0.02em'
          }
        ],
        qrSubTitle: [
          '1rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '400',
            letterSpacing: '-0.02em'
          }
        ],
        qrMenuItem: [
          '1rem',
          {
            lineHeight: '24px',
            fontWeight: '600',
            color: '#101828'
          }
        ],
        qrLabel: [
          '0.875rem',
          {
            lineHeight: '1.25rem',
            fontWeight: '600'
          }
        ]
      },
      boxShadow: {
        custom: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        lgCustom:
          '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
        prCustom:
          '0px 1px 2px rgba(15, 15, 15, 0.05), rgb(79 70 229 / 30%) 0px 0px 0px 1px inset;'
      },
      width: {
        inherit: 'inherit'
      }
    }
  },
  plugins: []
}
