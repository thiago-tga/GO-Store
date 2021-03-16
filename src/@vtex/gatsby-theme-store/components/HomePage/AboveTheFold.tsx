import { Carousel, LocalizedLink } from '@vtex/store-ui'
import Container from '@vtex/gatsby-theme-store/src/components/Container'
import type { PageProps } from 'gatsby'
import { FC } from 'react'
import React from 'react'

import type { HomePageQueryQuery } from '../../pages/__generated__/HomePageQuery.graphql'
import ShelfProducts from '../Shelf/ShelfProducts'

type Props = PageProps<HomePageQueryQuery>

const Fold: FC<Props> = ({ data: { content, vtex } }) => (
  <>
    <Carousel
      {...content?.blocks[0]?.props}
      height="200px"
      width="360px"
      link={LocalizedLink}
    />
    <Container sx={{ width: ['100%', '99%', '54rem'] }}>
      <ShelfProducts {...content?.blocks[1]?.props} products={vtex.products} />
    </Container>
  </>
)
export default Fold
