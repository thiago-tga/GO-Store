import { Flex, Box } from '@vtex/store-ui'
import ShelfImage from './ShelfImage'
import Resumo from './resumo'

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

const CardExplore: FC<Props> = ({ href, src, title, offer, OfferDiscount }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      width: '33%',
      minHeight: '276px',
      bg: '#ffffff',
    }}
    css={() => ({
      [`@media (min-width: 767px)`]: {
        width: '32.9%',
      },

      [`@media (max-width: 766px)`]: {
        width: '49.3%',
        alignItems: 'stretch',
      },
    })}
  >
    <Flex
      sx={{
        padding: ['15px', '20px', '30px'],
      }}
    >
      <ShelfImage src={src} href={href} alt={''} />
    </Flex>
    <Box sx={{ fontSize: '1rem' }}>
      <Resumo title={title} offer={offer} OfferDiscount={OfferDiscount} />
    </Box>
  </Flex>
)

export default CardExplore
