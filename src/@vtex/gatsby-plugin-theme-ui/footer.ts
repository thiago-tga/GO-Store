//import '@fontsource/rubik'

export default {
  footer: {
    FooterBox: {
      fontFamily: 'Rubik',
      fontWeight: 'normal',
      width: '100%',
      flexWrap: 'wrap',
    },
    NavFooter: {
      fontFamily: 'Rubik',
      fontWeight: 'normal',
      flexDirection: 'column',
      flexWrap: 'wrap',
      textDecoration: 'none',
    },
    SocialMedias: {
      mt: '4rem',
      alignItems: 'center',
      fontFamily: 'Rubik',
      fontWeight: 400,
      textDecoration: 'none',
      justifyContent: 'space-between',
      innerWidth: '100%',
      
    },
    containerTextos:{
      justifyContent: 'space-between',
      alignItems: 'self-start',
      gap: 2,
      width: '90%',
      m: 'auto',
      p: '3rem 0',
      [`@media (max-width: 832px)`]: {
        flexWrap: 'wrap-reverse',
        gap: 4,
      },
    },

    titulo:{
      fontSize: '20px',
      lineHeight: '24px',
      fontStyle: 'normal',
      fontWeight: 'normal',
       marginBottom: '20px',
      color: '#3f3f40',
    },
    textos: {
      gap: 2,
      width: ['100%', '100%', '15%'],
      flexDirection: 'column',
      minWidth: '146px',
    },

    textoInput:{
      gap: 3,
      width: ['100%', '100%', '35%'],
      minWidth: '245px',
      flexDirection: 'column',
    }
  },
}
