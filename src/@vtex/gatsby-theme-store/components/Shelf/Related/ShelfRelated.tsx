import { Flex, ShelfTitle } from '@vtex/store-ui'
import React from 'react'
import type { FC } from 'react'
<<<<<<< HEAD

=======
>>>>>>> b9550ca513a5c720a8a660f2f756a80ff9ddd517
import Traco from '../Traco'
import Shelf from './ContainerRelated'

export interface Props {
  title?: JSX.Element | string
  variant?: string
  v?: string
}
const Shelf1: FC<Props> = ({ title, variant = 'default', v = 'shelfNew' }) => {
  return (
    <Flex variant={`${v}.containerSize`}>
      {title && <ShelfTitle variant={variant}>{title}</ShelfTitle>}
      <Traco />
      <Shelf />
    </Flex>
  )
}

export default Shelf1
