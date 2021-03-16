import Container from '@vtex/gatsby-theme-store/src/components/Container'
import type { PageProps } from 'gatsby'
import { FC } from 'react'
import React from 'react'

import type { HomePageQueryQuery } from '../../pages/__generated__/HomePageQuery.graphql'
import RichTextRow from './RichTextRow'
import ContainerExplore from './Explore/ContainerExplore'

type Props = PageProps<HomePageQueryQuery>

const BelowTheFold: FC<Props> = (props) => (
  <>
    <Container sx={{ width: ['100%', '99%', '54rem'] }}>
      <ContainerExplore {...props} />
    </Container>
    <RichTextRow />
  </>
)

export default BelowTheFold
