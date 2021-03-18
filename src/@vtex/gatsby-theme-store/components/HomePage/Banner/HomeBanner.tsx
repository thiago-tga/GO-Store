import { Banner, Box, Container, Flex } from '@vtex/store-ui'
import React, { FC } from 'react'

const Banne: FC = () => (
  <Flex
    sx={{
      overflow: 'hidden',
      height: ['auto', 'auto', '250px', '300px'],
      width: '100%',
    }}
  >
    <Banner src="img/banner.jpg" href="/" alt="k" width="100%" height="100%" />
  </Flex>
)

export default Banne
