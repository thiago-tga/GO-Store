import Container from '@vtex/gatsby-theme-store/src/components/Container'
import type { PageProps } from 'gatsby'
import type { FC } from 'react'
import React from 'react'
import { Box } from '@vtex/store-ui'

import type { HomePageQueryQuery } from '../../pages/__generated__/HomePageQuery.graphql'
import RichTextRow from './RichTextRow'
import ContainerExplore from './Explore/ContainerExplore'
import ShelfProducts from '../Shelf/ShelfFarm'

type Props = PageProps<HomePageQueryQuery>

const pageSizes = [6]
const BelowTheFold: FC<Props> = ({ data: { content, vtex } }, props) => (
  <>
    <Container>
      <Box sx={{ width: ['100%', '90%', '85%'], margin: 'auto' }}>
        <ContainerExplore {...props} />
      </Box>
      <ShelfProducts
        {...content?.blocks[1]?.props}
        products={vtex.products}
        pageSizes={pageSizes}
        title="FARM"
      />
    </Container>
    <RichTextRow />
  </>
)

export default BelowTheFold
