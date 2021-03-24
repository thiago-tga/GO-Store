import React from 'react'
import { Image } from 'theme-ui'
import type { FC } from 'react'

import { LocalizedLink, Flex } from '@vtex/store-ui'

interface Props {
  href: string
  alt: string
  src: string
  height?: string
  width?: string
  variant?: string
}

const InfoCardImage: FC<Props> = ({ alt, src, href }) => {
  const linkProps = {
    as: LocalizedLink,
    to: href,
  }

  return (
    <Flex
      {...linkProps}
      sx={{ objectPosition: 'center', objectFit: 'cover', overflow: 'hidden' }}
    >
      <Image
        height={''}
        width={'100%'}
        alt={alt}
        src={src}
        loading="lazy"
        sx={{
          objectPosition: 'center',
          objectFit: 'cover',
          overflow: 'hidden',
        }}
      />
    </Flex>
  )
}

export default InfoCardImage
