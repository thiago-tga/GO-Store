import {
  Box,
  InfoCard,
  InfoCardImage,
  InfoCardInfo,
  InfoCardInfoAction,
} from '@vtex/store-ui'
/** @jsx jsx */
import { jsx } from 'theme-ui'

import React, { FC } from 'react'
const Block: FC = ({ children }) => <Box>{children}</Box>
interface Props {
  href: string
  src: string
  title: string
}
const CardExplore: FC<Props> = ({ href, src, title }) => (
  <>
    <Block sx={{ width: ['100%', '50%', '25%'] }}>
      <InfoCard>
        <InfoCardImage href={href} src={src} alt="infocard-banner" />
      </InfoCard>
      <InfoCardInfo title={title}>
        <InfoCardInfoAction href="/vintage-phone/p" label="EXPLORAR" />
      </InfoCardInfo>
    </Block>
  </>
)

export default CardExplore
