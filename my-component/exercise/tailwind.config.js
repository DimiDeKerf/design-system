module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      connection: {
        500: '#F58220',
      },
      reliable: {
        100: '#C9C9C9',
        200: '#ACADAD',
        300: '#919193',
        400: '#747577',
        500: '#58595B',
        600: '#464749',
        700: '#353537',
        800: '#232424',
        900: '#121212',
      },
    },
    extend: {
      spacing: {
        px: '1px',
        4: '4px',
        8: '8px',
        12: '12px',
        16: '16px',
        20: '20px',
        24: '24px',
        28: '28px',
        32: '32px',
        36: '36px',
        40: '40px',
      },
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'disabled', 'active'],
    borderColor: ['responsive', 'hover', 'focus', 'disabled'],
    textColor: ['responsive', 'disabled'],
  },
  plugins: [],
}
