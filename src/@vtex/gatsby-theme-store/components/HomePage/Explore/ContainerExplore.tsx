import { Flex } from '@vtex/store-ui'
import type { FC } from 'react'
import React from 'react'

import CardExplore from './CardExplore'

const ContainerExplore: FC = () => (
  <Flex
    sx={{
      margin: 'auto',
      justifyContent: ['center', 'center', 'space-between'],
      gap: 2,
      paddingBottom: '3rem',
    }}
    css={() => ({
      [`@media (max-width: 647px)`]: {
        flexWrap: 'wrap',
      },
    })}
  >
    <CardExplore
      href="/vintage-phone/p"
      src="https://i.imgur.com/pNnw1jP.png"
      title="Tshirt"
    />
    <CardExplore
      href="/vintage-phone/p"
      src="https://i.imgur.com/tWLkhEm.png"
      title="Óculos e Acessórios"
    />
  </Flex>
)

export default ContainerExplore
