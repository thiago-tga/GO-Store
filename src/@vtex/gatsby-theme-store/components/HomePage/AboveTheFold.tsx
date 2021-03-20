import Container from '@vtex/gatsby-theme-store/src/components/Container'
import type { PageProps } from 'gatsby'
import { FC } from 'react'
import React from 'react'
import { Box } from '@vtex/store-ui'
import type { HomePageQueryQuery } from '../../pages/__generated__/HomePageQuery.graphql'
import ShelfProducts from '../Shelf/ShelfNew'
import Banner from './Banner/HomeBanner'
type Props = PageProps<HomePageQueryQuery>
const pageSizes = [6]

const Fold: FC<Props> = ({ data: { content, vtex } }, props) => (
  <>
    <Banner {...props} />
    <Container>
      <ShelfProducts
        {...content?.blocks[1]?.props}
        products={vtex.products}
        pageSizes={pageSizes}
        title={'NOVIDADES'}
      />
    </Container>
  </>
)
export default Fold
