import { Flex, Box } from '@vtex/store-ui'
import ShelfImage from './ShelfImage'
import Resumo from './resumo'
/** @jsx jsx */
import { jsx } from 'theme-ui'

import React, { FC } from 'react'

interface Props {
  variant?: string
  href: string
  src: string
  title: string
  offer: string
  OfferDiscount: string
  alt: string
}

const CardExplore: FC<Props> = ({
  variant = 'shelfNew',
  href,
  src,
  title,
  offer,
  OfferDiscount,
}) => (
  <Flex variant={`${variant}.containerPlus`}>
    <Flex variant={`${variant}.containerPlusImage`} sx={{}}>
      <ShelfImage src={src} href={href} alt={''} />
    </Flex>
    <Box sx={{ fontSize: '1.3rem', pt: '3rem' }}>
      <Resumo title={title} offer={offer} OfferDiscount={OfferDiscount} />
    </Box>
  </Flex>
)

export default CardExplore
