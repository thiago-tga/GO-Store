import { SxStyleProp } from '@vtex/store-ui'

const productDetails: SxStyleProp = {
  reference: {
    fontSize: '16px',
    fontWeight: 400,
    color: '#727273',
  },

  title: {
    color: '#3f3f40',
    fontSize: '24px',
    fontFamily: 'Rubik, sans-serif',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '32px',
  
  },

  container: {
    // px: [0, 5, 6],
 
  },
}

export default {
  productDetails: { default: productDetails },
}
