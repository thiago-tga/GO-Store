export default {
  shelfNew: {
    containerSize:{
      flexDirection: 'column',
        width: ['100%', '90%', '85%'],
        margin: 'auto',
        padding: 0,
        pb: '4rem',
        paddingTop: '3rem',
        [`@media (max-width: 766px)`]: {
          alignItems: 'center',
        },

    },
    containerResumo:{
      flexDirection: 'column',
      pl: ['15px', '20px', '30px'],
      pr: ['15px', '20px', '30px'],
      pb: ['15px', '20px', '30px'],
      color: '#3F3F40',
    },

   off: {
    fontSize: '1rem',
    fontWeight: 600,
    backgroundColor: '#71985A',
    color: 'white',
    position: 'absolute',
    top: ['15px','20px', '30px'],
    left: ['15px', '20px', '30px'],
    padding: ['0.1rem', '0.2rem', '0.3rem'],
    },

  containerImage: {
    objectPosition: 'center',
     objectFit: 'cover',
     overflow: 'hidden' 
  },
   
  container: {
    flexDirection: 'column',
      width: '33%',
      minHeight: '276px',
      bg: '#ffffff',
      position: 'relative',

      [`@media (min-width: 767px)`]: {
        width: '32.9%',
      },

      [`@media (max-width: 766px)`]: {
        width: '49.3%',
        alignItems: 'stretch',
      },
  },

  containerPlus:{
    width: '66.3%',
    bg: '#ffffff',
    position: 'relative',
    [`@media (max-width: 766px)`]: {
      width: '100%',
    },
  },

  containerPlusImage:{
    padding: ['15px', '20px', '30px'],
    width: '65%',
    objectPosition: 'center',
    objectFit: 'cover',
    overflow: 'hidden',
    height: ['28rem', '25rem', '30.5rem'],
  }
}
}