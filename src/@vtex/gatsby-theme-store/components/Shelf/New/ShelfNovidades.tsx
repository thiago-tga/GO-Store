import { Flex, Box } from '@vtex/store-ui'
import ShelfImage from './ShelfImage'
import Resumo from './resumo'

import React, { FC } from 'react'

interface Props {
  href: string
  src: string
  title: string
  offer: string
  OfferDiscount: string
  alt: string
  variant?: string
}

const CardExplore: FC<Props> = ({
  href,
  src,
  title,
  offer,
  OfferDiscount,
  variant = 'shelfNew',
}) => (
  <Flex variant={`${variant}.container`}>
    <Flex
      sx={{
        padding: ['15px', '20px', '30px'],
      }}
    >
      <ShelfImage src={src} href={href} alt={''} />
    </Flex>
    <Box sx={{ fontSize: '14px' }}>
      <Resumo title={title} offer={offer} OfferDiscount={OfferDiscount} />
    </Box>
  </Flex>
)

export default CardExplore
