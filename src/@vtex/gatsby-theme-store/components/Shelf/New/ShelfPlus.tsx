import { Flex, Box, InfoCardImage, InfoCardInfo } from '@vtex/store-ui'
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

const CardExplore: FC<Props> = ({ href, src, title, offer, OfferDiscount }) => (
  <Flex
    sx={{ width: '66.3%', bg: '#ffffff' }}
    css={() => ({
      [`@media (max-width: 766px)`]: {
        width: '100%',
      },
    })}
  >
    <Flex
      sx={{
        padding: ['15px', '20px', '30px'],
        width: '65%',
        objectPosition: 'center',
        objectFit: 'cover',
        overflow: 'hidden',
        height: ['28rem', '25rem', '30.5rem'],
      }}
    >
      <ShelfImage src={src} href={href} alt={''} />
    </Flex>
    <Box sx={{ fontSize: '1.3rem', pt: '3rem' }}>
      <Resumo
        title={title}
        offer={offer}
        OfferDiscount={OfferDiscount}
        sx={{ bg: 'greenyellow' }}
      />
    </Box>
  </Flex>
)

export default CardExplore
