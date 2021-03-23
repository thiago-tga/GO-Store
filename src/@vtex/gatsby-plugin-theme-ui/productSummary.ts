import { SxStyleProp } from '@vtex/store-ui'

const productSummary: SxStyleProp = {
  container: {  
    textDecoration: 'none',
  //  color: 'text',
   // flexGrow: 1,
   // justifySelf: 'center',
  
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
   position: 'relative',
   
  },
}

export default { productSummary: { default: productSummary } }
