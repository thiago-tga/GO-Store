import type { SxStyleProp } from '@vtex/store-ui'

const descriptionTheme: SxStyleProp = {
  description: {
    contentContainer: {
      width: '100%',
      height: '100%',
      justifyContent: 'space-between',
      gap: 1,
      flexWrap:'wrap',
    },
    containerDescr: {
      width: '65%',
      '@media screen and (max-width: 1024px)': {
        width: '64%',
         '@media screen and (max-width: 768px)': {
           width: '100%',
         },
         '@media screen and (max-width: 320px)': {
          width: '100%',
        }
      },
     
      height:'390px',
      padding:'48px',
      alignItems:'center',
      mt: 20,
      background:'#FFFFFF',
      // minWidth: '540px',
    },
    
    textoDescricao: {
      fontFamily: 'Rubik',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '16px',
      '@media screen and (min-width: 280px)': {
        fontSize: '14px',
      },
      color: '#3F3F4',
      lineHeight: '24px',
      textAlign: 'justify',
      mb: '20px'
      
      
    },
    contentCaract: {
      width:'34%',
      '@media screen and (max-width: 1024px)': {
        width: '34%',
         '@media screen and (max-width: 768px)': {
           width: '100%',
         },
         '@media screen and (max-width: 320px)': {
          width: '100%',
        }
      },
      height:'390px',
      padding:'48px',
      alignItems:'center',
      mt: 20,
      background:'#FFFFFF',    
    },
    textoCaracteristica: {
      width: '100%',
      fontFamily: 'Rubik',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '14px',
      '@media screen and (min-width: 280px)': {
        fontSize: '14px',
      },
      color: '#3F3F4',
      lineHeight: '24px',
      textAlign: 'justify',
      background:'#FFFFFF',
    },
  },
}

export default descriptionTheme
