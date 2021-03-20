import { createTheme, searchBarTheme, SxStyleProp } from '@vtex/store-ui'

const theme: SxStyleProp = createTheme(searchBarTheme, {
  searchbar: {
    textInput: {
      width: '100%',

      input: {
        pl: 3,
        pr: 48,
        border: 'none',
        width: '90%',
        minHeight: '40px',
        fontSize: 'inherit',
        background: '#F2F4F5'
      },

      button: {
        width: '100%',
        padding: 0,
        border: 'none',
        backgroundColor: 'transparent',
      },
    },

    container: {
      maxWidth: 540,
      width: '540px',
      marginTop: '8px',
      minHeight: '48px',
      bg: '#F2F4F5',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: '#F2F4F5',
      alignItems: 'center',
      position: 'relative',
      fontStyle: 'normal',
      fontSize: '1rem',
      color: '#979899',
     
    },

    button: {
      backgroundColor: 'transparent',
      color: '#CACBCC',
      px: 3,
      position: 'absolute',
      right: 0,
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',

      '&:disabled': {
        color: '#F2F4F5',
      },
    },
  },
})

export default theme
