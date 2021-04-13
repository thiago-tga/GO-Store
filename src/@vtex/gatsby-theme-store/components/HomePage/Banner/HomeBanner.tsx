import { Banner, Flex } from '@vtex/store-ui'
import React, { FC } from 'react'

const Banne: FC = () => (
  <Flex
    sx={{
      overflow: 'hidden',
      height: '100%',
      width: '100%',
      bg: '#F7F9FA',
    }}
  >
    <Banner
      src="https://i.imgur.com/c2y4a2m.png"
      href="/"
      alt="k"
      width="100%"
      height="100%"
    />
  </Flex>
)

export default Banne
