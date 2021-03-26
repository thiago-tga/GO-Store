import { baseTheme, createTheme } from '@vtex/store-ui'
import '@fontsource/rubik'
type Custom = {
  sizes: {
    container: string
  }
}

const custom: Custom = {
  sizes: {
    container: '98rem',
  },
}

const customBase = {
  useCustomProperties: false,
  initialColorModeName: false,
  initialColorMode: false,
  useLocalStorage: false,
  fontFamily: 'Rubik',
  colors: {
    text: '#3f3f40',
    textMuted: '#979899',
    textBold: '#03003d',
    background: '#fff',
    primary: '#70BB44',
    secondary: '#f71963',
    muted: '#f0f0f0',
    gray: '#e3e4e6',
    fontFamily: 'Rubik',
 
  },
  sizes: {
    container: '96rem',
    
  },
  
  layout: {
    container: {
      bg: '#F7F9FA',
      fontFamily: 'Rubik',
    },

  },
}

export const base = createTheme(baseTheme, custom, customBase)
