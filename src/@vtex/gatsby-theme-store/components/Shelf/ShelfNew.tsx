import { Flex, ShelfTitle, useResponsiveSlider } from '@vtex/store-ui'
import React from 'react'
import type { FC } from 'react'
import Traco from './Traco'
import Shelf from './New/ContainerNew'

export interface Props {
  title?: JSX.Element | string
  variant?: string
}
const Shelf1: FC<Props> = ({ title, variant = 'default' }) => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        width: ['100%', '90%', '85%'],
        margin: 'auto',
        padding: 0,
        paddingTop: '3rem',
      }}
      css={() => ({
        [`@media (max-width: 766px)`]: {
          alignItems: 'center',
        },
      })}
    >
      {title && <ShelfTitle variant={variant}>{title}</ShelfTitle>}
      <Traco />
      <Shelf />
    </Flex>
  )
}

export default Shelf1
