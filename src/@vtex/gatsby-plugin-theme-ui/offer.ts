export default {
  offer: {
    productSummary: {
      listPrice: {
        textDecoration: 'line-through',
        fontSize: '14px',
        color: '#727273',
        // minHeight: '25px',
        lineHeight: '20px',
      },

      // preço da pagina principal
      price: {
        textDecoration: 'none',
        fontSize: '20px',
        fontWeight: 'normal',
        color: '#3F3F40',
        // height: '25px',
        marginBottom: '0px',
        //   textDecoration: 'none',
      },

      // estilo do botao verde de desconto
      discountBadge: {
        textDecoration: 'none',
        fontSize: '1rem',
        fontWeight: 500,
        backgroundColor: '#71985A',
        color: 'white',
        position: 'absolute',
        top: ['15px', '20px', '30px'],
        left: ['15px', '20px', '30px'],
        padding: ['0.1rem', '0.2rem', '0.3rem'],
      },

      // container do productsummary/card
      container: {
        minHeight: '130px',
      },

      // calculo do desconto da pagina
      installments: {
        textDecoration: 'none',
        fontSize: '12px',
        fontWeight: 400,
        color: '#727273',
      },
    },

    productDetails: {
      listPrice: {
        textDecoration: ' line-through',
        fontSize: '16px',
        color: '#979899',
        minHeight: '25px',
      },

      discountBadge: {
        fontSize: '16px',
        color: '#417a00',
      },

      price: {
        fontSize: '36px',
        fontWeight: 'normal',
        color: '3F3F40',
        height: '36px',
        marginBottom: '12px',
        fontStyle: 'normal',
        lineHeight: '36px',
      },

      installments: {
        fontSize: '16px',
        fontWeight: 400,
        color: '#727273',
        fontFamily: 'Rubik, sans-serif',
      },
    },
  },
}
