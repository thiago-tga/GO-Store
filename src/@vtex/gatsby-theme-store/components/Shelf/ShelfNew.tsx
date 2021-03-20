import { Flex, ShelfTitle, useResponsiveSlider } from '@vtex/store-ui'
import React from 'react'
import type { FC } from 'react'

import ShelfPage from './Page'
import type { ProductSummary_ProductFragment } from '@vtex/gatsby-theme-store/src/components/ProductSummary/__generated__/ProductSummary_product.graphql'

type Product = Maybe<ProductSummary_ProductFragment>

export interface Props {
  products: Maybe<Product[]>
  pageSizes?: number[]
  title?: JSX.Element | string
  variant?: string
}

const PAGE_SIZES = [6]

const Shelf1: FC<Props> = ({
  products,
  title,
  variant = 'default',
  pageSizes = PAGE_SIZES,
}) => {
  const { items } = useResponsiveSlider<Product>({
    pageSizes,
    defaultIndex: pageSizes.length - 1,
    allItems: products as Product[],
  })

  return (
    <Flex
      variant={`shelf.${variant}.page.container`}
      sx={{
        flexDirection: 'column',
        width: '909px',
        margin: 'auto',
        paddingLeft: 1,
      }}
    >
      {title && <ShelfTitle variant={variant}>{title}</ShelfTitle>}
      <ShelfPage
        variant={variant}
        items={items}
        sx={{
          flexWrap: 'wrap',
          columns: '3',
          gap: 0.9,
        }}
      />
    </Flex>
  )
}

export default Shelf1
