import Shelf from './ShelfFarm'
import React, { ComponentPropsWithoutRef, FC } from 'react'
type Props = ComponentPropsWithoutRef<typeof Shelf>

const pageSizes = [6]
//modificacoes da coluna aqui
const ShelfProducts: FC<Props> = (props) => (
  <Shelf {...props} pageSizes={pageSizes} title={'FARM'} />
)

export default ShelfProducts
