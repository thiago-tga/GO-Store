import { Flex, Box, OfferDiscountBadge } from '@vtex/store-ui'
import React, { FC } from 'react'

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
  const v = 'offer'
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        pl: ['15px', '20px', '30px'],
        pr: ['15px', '20px', '30px'],
        pb: ['15px', '20px', '30px'],
        color: '#3F3F40',
      }}
    >
      <Box variant={`${variant}.top`}>30% OFF</Box>
      <Box sx={{ pb: '0.5rem' }}>{title}</Box>
      <Box sx={{ fontSize: '0.8rem', color: '#979899' }}>{OfferDiscount}</Box>
      <Box sx={{ fontSize: '1.3rem' }}>{offer}</Box>
    </Flex>
  )
}
export default CardExplore
