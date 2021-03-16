import type { FC } from 'react'
import React, { Fragment } from 'react'
import { Container } from '@vtex/store-ui'

import NavFooter from './NavFooter'
import SocialMedias from './SocialMedias'

const StoreFooter: FC = () => {
  const variant = 'footer'

  return (
    <Fragment>
      <Container variant={`${variant}.FooterBox`}>
        <NavFooter variant={`${variant}.NavFooter`} />
        <SocialMedias variant={`${variant}`} />
      </Container>
    </Fragment>
  )
}

export default StoreFooter
