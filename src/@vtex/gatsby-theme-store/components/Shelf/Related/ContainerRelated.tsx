import { Flex } from '@vtex/store-ui'
import type { FC } from 'react'
import React from 'react'

import CardExplore from '../New/ShelfNovidades'

const ContainerExplore: FC = () => {
  const variant = 'shelfNew'
  return (
    <Flex
      sx={{
        m: 'auto',
        height: '100%',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Flex
        sx={{
          justifyContent: ['center', 'space-between', 'space-between'],
          alignItems: 'stretch',
          gap: 1,
        }}
      >
        <CardExplore
          href="/vintage-phone/p"
          src="https://i.imgur.com/X4ljn2H.png"
          title="Vestido cropped sonho do pantanal"
          offer="$18,90"
          OfferDiscount="$28,90"
          alt="w"
        />

        <CardExplore
          href="/vintage-phone/p"
          src="https://i.imgur.com/1O0geCx.png"
          title="Vestido cropped sonho do pantanal"
          OfferDiscount="$288,90"
          offer="$108,90"
          alt="w"
        />

        <CardExplore
          href="/vintage-phone/p"
          src="https://i.imgur.com/Wrxp8MF.png"
          title="Vestido cropped sonho do pantanal"
          OfferDiscount="R$87,90"
          offer="28,90"
          alt="w"
        />
        <CardExplore
          href="/vintage-phone/p"
          src="https://i.imgur.com/HDmw1Fr.png"
          title="Vestido cropped sonho do pantanal"
          OfferDiscount="R$87,90"
          offer="28,90" 
          alt="w"
        />
      </Flex>
    </Flex>
  )
}

export default ContainerExplore
