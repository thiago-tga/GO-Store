import Container from '@vtex/gatsby-theme-store/src/components/Container'
import type { PageProps } from 'gatsby'
import { FC } from 'react'
import React from 'react'

import type { HomePageQueryQuery } from '../../pages/__generated__/HomePageQuery.graphql'
import ShelfProducts from '../Shelf/ShelfProducts'
import Banner from './Banner/HomeBanner'
type Props = PageProps<HomePageQueryQuery>

const Fold: FC<Props> = ({ data: { content, vtex } }, props) => (
  <>
    <Banner {...props} />
    <Container>
      <ShelfProducts
        {...content?.blocks[1]?.props}
        products={vtex.products}
        pageSizes={3}
      />
    </Container>
  </>
)
export default Fold
