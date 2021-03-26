import type { FC } from 'react'
import React from 'react'
import { Container, Box } from '@vtex/store-ui'

import NavFooter from './NavFooter'
import SocialMedias from './SocialMedias'

const StoreFooter: FC = () => {
  const variant = 'footer'

  return (
    <Box
      sx={{ flexWrap: 'wrap', position: 'relative', bg: '#F7F9FA', pt: '4rem' }}
    >
      <Container variant={`${variant}.FooterBox`} sx={{ bg: '#FFFFFF' }}>
        <NavFooter variant={`${variant}.NavFooter`} />
        <SocialMedias variant={`${variant}.SocialMedias`} />
      </Container>
    </Box>
  )
}

export default StoreFooter
