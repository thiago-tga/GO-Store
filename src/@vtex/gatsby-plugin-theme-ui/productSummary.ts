import type { SxStyleProp } from '@vtex/store-ui'

const productSummary: SxStyleProp = {
<<<<<<< HEAD
  container: {
    textDecoration: 'none',
    bg: '#FFFFFF',
    minWidth: '160px',
    width: '33%',
    position: 'relative',

    [`@media (min-width: 767px)`]: {
      width: '32.9%',
    },

    [`@media (max-width: 766px)`]: {
      width: '49.3%',
    },
  },

  title: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    color: '#3F3F40',
    lineHeight: '20px',
  },

  image: {
    width: '100%',
    padding: ['15px', '20px', '30px'],
  },
}
=======
  container: {  
       textDecoration: 'none',
       bg: '#FFFFFF',
        minWidth: '160px',
        width: '33%',
        position: 'relative',
   
    
        [`@media (min-width: 767px)`]: {
          width: '32.9%',
        },

        [`@media (max-width: 766px)`]: {
          width: '49.3%',
        },
        },

        title: {
          fontFamily: 'Rubik',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '14px',
          color: '#3F3F40',
          lineHeight: '20px',
        },

        image: {
          width:'100%',
          padding: ['15px', '20px', '30px'],

          
        },
        }
>>>>>>> b9550ca513a5c720a8a660f2f756a80ff9ddd517

export default { productSummary: { default: productSummary } }
