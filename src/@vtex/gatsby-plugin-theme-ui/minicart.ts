import { createTheme, minicartTheme, SxStyleProp } from '@vtex/store-ui'

const btn = {
  padding: 0,
  maxWidth: 40,
  minWidth: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'transparent',
  cursor: 'pointer',
}

const custom: SxStyleProp = {
  minicart: {
    borderRadius: '30px',
  },
    drawer: {
      footer: {
        button: {
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#072c75',
          },
        },
      
      content: {
        quantity: {
          width: 100,
          border: '2px solid red',
bg: 'red',
          wrapper: {
            marginTop: 3,
            alignItems: 'center',

            spinner: {
              marginLeft: 2,
              
            },
          },
        },
        delete: {
          marginLeft: 2,
          ...btn,
        },
      },
    },
  },
}

export const minicart = createTheme(minicartTheme, custom)
