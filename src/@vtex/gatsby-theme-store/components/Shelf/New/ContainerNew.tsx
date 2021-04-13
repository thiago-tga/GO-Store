import { Flex } from '@vtex/store-ui'
import React, { FC } from 'react'
import CardExplore from './ShelfNovidades'
import CardPlus from './ShelfPlus'

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
          flexWrap: 'wrap',
          justifyContent: ['center', 'space-between', 'space-between'],
          alignItems: ['stretch', 'stretch', 'center'],
          gap: 1,
        }}
      >
        <CardPlus
          href="/vintage-phone/p"
          src="https://i.imgur.com/Kw7X7Vj.png"
          title="Vestido longo sonho do pantanal"
          OfferDiscount="$28,90"
          offer="$108,90"
          alt="w"
        />

        <CardExplore
          href="/vintage-phone/p"
          src="https://i.imgur.com/HDmw1Fr.png"
          title="Vestido cropped sonho do pantanal"
          offer="$28,90"
          OfferDiscount="$18,90"
          alt="w"
        />

        <CardExplore
          href="/vintage-phone/p"
          src="https://i.imgur.com/Wrxp8MF.png"
          title="Vestido cropped sonho do pantanal"
          OfferDiscount="$28,90"
          offer="$108,90"
          alt="w"
        />

        <CardExplore
          href="/vintage-phone/p"
          src="https://i.imgur.com/1O0geCx.png"
          title="Vestido cropped sonho do pantanal"
          offer="$87,90"
          OfferDiscount="$28,90"
          alt="w"
        />
        <CardExplore
          href="/vintage-phone/p"
          src="https://i.imgur.com/X4ljn2H.png"
          title="Vestido cropped sonho do pantanal"
          OfferDiscount="28,90"
          offer="R$87,90"
          alt="w"
        />
      </Flex>
      <CardPlus
        href="/vintage-phone/p"
        src="https://i.imgur.com/miiF6PN.png"
        title="Vestido cropped sonho do pantanal"
        offer="$87,90"
        OfferDiscount="$28,90"
        alt="w"
      />
    </Flex>
  )
}

export default ContainerExplore
