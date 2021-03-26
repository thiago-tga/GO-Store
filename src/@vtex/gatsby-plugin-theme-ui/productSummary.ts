import { SxStyleProp } from '@vtex/store-ui'

const productSummary: SxStyleProp = {
  container: {  
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
    fontWeight: 400,
    fontSize: '14px',
    height: '20px',
    color: '#071923',

  },

  image: {
   width:'100%',
   padding: ['15px', '20px', '30px'],
  //  position: 'relative',
   
  },
}

export default { productSummary: { default: productSummary } }
