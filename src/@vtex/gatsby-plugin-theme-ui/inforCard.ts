import type { SxStyleProp } from '@vtex/store-ui'

const CardTheme: SxStyleProp = {
  card: {
    flexDirection: 'column',
    width: ['100%', '98%', '100%'],
  
    image: {
      display: 'inline',
      height: '256px',
      maxWidth: '403px',

      link: {
        flex: 1,
        
      },
      content: {
        width: '100%',
        objectPosition: 'center',
        objectFit: 'cover',
       
      },
    },

    info: {
      flexDirection: 'column',
      height: '152px',
      width: ['100%', '98%', '100%'],
      background:'#F2F4F5',
      color: '#3F3F40',
      fontWeight: 400,
      fontSize: '20px',
      paddingTop: '1.6rem',
      gap: 3,
      paddingLeft: '1.5rem',
      paddingRight: '0.5rem',

      action: {
        display: 'flex',
        background:'#70BB44',
        width: '148px',
        height: '40px',
       alignItems: 'center',
        justifyContent: 'space-around',
        fontSize: '12px',
        fontWeight: 500, 
        
      },
    },
  },
}

export default CardTheme
