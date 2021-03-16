import type { SxStyleProp } from '@vtex/store-ui'

import { createTheme } from '@vtex/store-ui'


import { menuTheme } from './menu'
 const headerTheme: SxStyleProp = {
  header: createTheme(
    {
      flexDirection: 'column',
      fontFamily: 'Rubik, sans-serif',
      color: '#727273',
    fontSize: '0.9rem'
     
    },
  
    menuTheme,
    {
      left: {
       m:'1rem',
        
      
      },
      right: {
        alignItems: 'center',
        justifyContent: 'space-between',
       
    
      },

      top: {
      px: [1, 2, 3],
      justifyContent: ['space-around', 'space-between', 'space-around'],
      alignItems: 'center',
      py: '3',
      },

      botoom:{
        justifyContent: 'center',
       marginTop: '1rem',
       marginBottom: '1rem',
       width: "100%",

      }
    }
  ),
}

 export default headerTheme