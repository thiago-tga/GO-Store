import React, { FC } from 'react'
import { useAsyncProduct } from '@vtex/gatsby-theme-store/src/components/ProductPage/useAsyncProduct'
import { useBestSeller } from '@vtex/gatsby-theme-store/src/sdk/product/useBestSeller'
import { useSku } from '@vtex/gatsby-theme-store/src/sdk/product/useSku'
import { Flex, Button, Box } from '@vtex/store-ui'
import type { OrderFormContext } from '@vtex/gatsby-theme-store/src/sdk/orderForm/Provider'
import { NumericStepper } from './Quantity'
import BuyButton from '../../../BuyButton'
import Offer from './Offer'
import Color from './Color'
import Size from './Size'
import SearchCEP from './SearchCEP'

type Item = {
  itemId: string
  sellers: Array<{
    sellerId: string
    commercialOffer: {
      availableQuantity: number
      price: number
    }
  }>
}

interface Props {
  slug?: string
  data: NonNullable<OrderFormContext['value']>['items']
  varian: string
}

type Product = {
  product: {
    productReference: string
    items: Item[]
  }
}

const Async: FC<Props> = ({ slug, data }) => {
  const { product } = (useAsyncProduct({ slug }) as unknown) as Product
  const [sku] = useSku<Item>(product)
  const { commercialOffer } = useBestSeller(sku)

  if (product === null || sku === null) {
    return null
  }
  console.log(data)

  return (
    <>
      <Box>
        <Offer variant="productDetails" commercialOffer={commercialOffer} />
        <Color />
        <Size />

        <Flex
          sx={{
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 2,
            mt: '1rem',
            alignItems: 'center',
          }}
        >
          <Button
            sx={{
              width: ['100%', '70%', '37%'],
              fontSize: '14px',
              minWidth: '160px',
            }}
          >
            COMPRAR AGORA
          </Button>
          <BuyButton sku={sku} />
        </Flex>
        <Flex>
          <NumericStepper />
        </Flex>
        <SearchCEP />
      </Box>
    </>
  )
}

export default Async
