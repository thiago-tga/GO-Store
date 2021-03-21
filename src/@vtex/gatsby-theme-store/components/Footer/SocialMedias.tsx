import { Flex, Grid, Link, Image, Text } from '@vtex/store-ui'
import React from 'react'
import type { FC } from 'react'

const SocialMedias: FC<{ variant?: string }> = ({ variant }) => (
  <Grid gap={2} columns={[3]}>
    <Flex variant={variant}>
      <Text>
        Todas as regras e promoções são válidas apenas para produtos vendidos e
        entregues pela nossa Loja. O valor de oferta do produto será garantido
        após a finalização da compra. Havendo divergência, prevalecerá o menor
        preço ofertado.
      </Text>
    </Flex>

    <Flex sx={{ marginLeft: '200px' }}>
      <Link
        href="https://www.facebook.com/vtexonline/"
        target="_blank"
        rel="noreferrer"
        sx={{
          height: '48px',
          width: '48px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          sx={{ height: 32, width: 32, mr: 1 }}
          height="32px"
          width="32px"
          loading="lazy"
          alt="Facebook"
          src="https://storecomponents.vtexassets.com/_v/public/assets/v1/published/vtex.store-footer@2.20.1/public/react/ebd4bd10e66138168eb6a582e00790ea.svg"
        />
      </Link>
      <Link
        href="https://www.instagram.com/vtextruecloud/"
        target="_blank"
        rel="noreferrer"
        sx={{
          height: '48px',
          width: '48px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          sx={{ height: 32, width: 32, mr: 1 }}
          height="48px"
          width="48px"
          loading="lazy"
          alt="Instagram"
          src="https://storecomponents.vtexassets.com/_v/public/assets/v1/published/vtex.store-footer@2.20.1/public/react/6a61a302319c062aceb9562a66381a63.svg"
        />
      </Link>
      <Link
        href="https://twitter.com/vtexonline"
        target="_blank"
        rel="noreferrer"
        sx={{
          height: '48px',
          width: '48px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          sx={{ height: 32, width: 32, mr: 1 }}
          height="32px"
          width="32px"
          loading="lazy"
          alt="Twitter"
          src="https://storecomponents.vtexassets.com/_v/public/assets/v1/published/vtex.store-footer@2.20.1/public/react/5f12d2a63f43d3a243550ff6400b4870.svg"
        />
      </Link>
      <Link
        href="https://www.youtube.com/user/VTEXTV"
        target="_blank"
        rel="noreferrer"
        sx={{
          height: '48px',
          width: '48px',
          alignItems: 'center',
          justifyContent: 'center',
          // hehehe perdeu o footer
        }}
      >
        <Image
          sx={{ height: 32, width: 32 }}
          height="32px"
          width="32px"
          loading="lazy"
          alt="Youtube"
          src="https://storecomponents.vtexassets.com/_v/public/assets/v1/published/vtex.store-footer@2.20.1/public/react/20a214b4866fd6d42a6dfed070c0057b.svg"
        />
      </Link>
    </Flex>
  </Grid>
)

export default SocialMedias
