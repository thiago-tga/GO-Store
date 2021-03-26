import type { PageProps } from 'gatsby'
import { FC } from 'react'
import React from 'react'
import { Container } from '@vtex/store-ui'
import type { HomePageQueryQuery } from '../../pages/__generated__/HomePageQuery.graphql'
import Shelf from '../Shelf/Related/ShelfRelated'
type Props = PageProps<HomePageQueryQuery>

const BelowTheFold: FC<Props> = () => (
  <>
    <Container>
      <Shelf title={'Relacionados'} />
    </Container>
  </>
)

export default  BelowTheFold
