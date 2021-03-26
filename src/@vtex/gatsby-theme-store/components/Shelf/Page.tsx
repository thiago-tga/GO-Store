/** @jsx jsx */
import { jsx, Flex } from '@vtex/store-ui'
import type { ComponentPropsWithoutRef, FC } from 'react'

import ProductSummary from '@vtex/gatsby-theme-store/src/components/ProductSummary'
import type { ProductSummary_ProductFragment } from '@vtex/gatsby-theme-store/src/components/ProductSummary/__generated__/ProductSummary_product.graphql'

interface Props extends ComponentPropsWithoutRef<typeof Flex> {
  items: Array<ProductSummary_ProductFragment | undefined | null>
  variant: string
  pageSizes?: number[]
}

const ShelfPage: FC<Props> = ({ items, pageSizes, variant, ...props }) => (
  <Flex {...props}>
    {items.map((item) => (
      <ProductSummary key={item!.productId!} product={item!} />
    ))}
  </Flex>
)

export default ShelfPage
