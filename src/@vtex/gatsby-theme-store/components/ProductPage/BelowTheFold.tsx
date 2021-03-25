import type { PageProps } from 'gatsby'
import { FC } from 'react'
import React from 'react'
import { Box } from '@vtex/store-ui'
import type { HomePageQueryQuery } from '../../pages/__generated__/HomePageQuery.graphql'

type Props = PageProps<HomePageQueryQuery>

const BelowTheFold: FC<Props> = () => (
  <>
    <Box sx={{ width: ['100%', '90%', '85%'], margin: 'auto' }}>ooooooo</Box>
  </>
)

export default BelowTheFold
