import { SxStyleProp } from '@vtex/store-ui'

const productSummary: SxStyleProp = {
  container: {  
    bg: 'red'
  
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
   position: 'relative',
   
  },
}

export default { productSummary: { default: productSummary } }
