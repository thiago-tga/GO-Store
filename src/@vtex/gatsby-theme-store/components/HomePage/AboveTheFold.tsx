import Container from '@vtex/gatsby-theme-store/src/components/Container'
import type { PageProps } from 'gatsby'
import { FC } from 'react'
import React from 'react'
import type { HomePageQueryQuery } from '../../pages/__generated__/HomePageQuery.graphql'
import Shelf from '../Shelf/ShelfNew'
import Banner from './Banner/HomeBanner'
type Props = PageProps<HomePageQueryQuery>
//const pageSizes = [6]

const Fold: FC<Props> = (props) => (
  <>
    <Banner {...props} />
    <Container>
      <Shelf title={'Novidades'} />
    </Container>
  </>
)
export default Fold
