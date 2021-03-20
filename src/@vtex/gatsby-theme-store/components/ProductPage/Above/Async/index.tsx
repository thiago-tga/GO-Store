import React, { FC } from 'react'
import { useAsyncProduct } from '@vtex/gatsby-theme-store/src/components/ProductPage/useAsyncProduct'
import { useBestSeller } from '@vtex/gatsby-theme-store/src/sdk/product/useBestSeller'
import { useSku } from '@vtex/gatsby-theme-store/src/sdk/product/useSku'
import { Flex, ProductDetailsReference, Button } from '@vtex/store-ui'
import { useIntl } from '@vtex/gatsby-plugin-i18n'

import BuyButton from '../../../BuyButton'
import Offer from './Offer'
import Color from './Color'
import Size from './Size'
import Amount from './Amount'
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
}

type Product = {
  product: {
    productReference: string
    items: Item[]
  }
}

const variant = 'default'

const Async: FC<Props> = ({ slug }) => {
  const { product } = (useAsyncProduct({ slug }) as unknown) as Product
  const [sku] = useSku<Item>(product)
  const { commercialOffer } = useBestSeller(sku)
  const { formatMessage } = useIntl()
  const { productReference } = product

  if (product === null || sku === null) {
    return null
  }

  return (
    <>
      <Offer variant="productDetails" commercialOffer={commercialOffer} />
      <Color />
      <Size />
      <ProductDetailsReference variant={variant}>
        {formatMessage({ id: 'productDetails.reference' })}: {productReference}
      </ProductDetailsReference>
      <Flex
        sx={{
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <Button>COMPRAR AGORA</Button>
        <BuyButton sku={sku} />
      </Flex>
      <Amount />
    </>
  )
}

export default Async
