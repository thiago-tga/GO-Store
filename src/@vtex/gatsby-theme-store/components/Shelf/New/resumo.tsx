import { Flex, Box } from '@vtex/store-ui'
import type { FC } from 'react'
import React from 'react'

interface Props {
  title: string
  offer: string
  OfferDiscount: string
  variant?: string
}

const CardExplore: FC<Props> = ({
  title,
  offer,
  OfferDiscount,
  variant = 'shelfNew',
}) => {
  return (
    <Flex variant={`${variant}.containerResumo`} sx={{}}>
      <Box variant={`${variant}.off`}>30% OFF</Box>
      <Box sx={{ pb: '0.5rem' }}>{title}</Box>
      <Box
        sx={{
          fontSize: '0.8rem',
          color: '#979899',
          textDecoration: 'line-through',
        }}
      >
        {OfferDiscount}
      </Box>
      <Box sx={{ fontSize: '20px' }}>{offer}</Box>
    </Flex>
  )
}

export default CardExplore
