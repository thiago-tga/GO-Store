import { Flex, Link, Image, Text, Heading } from '@vtex/store-ui'
import React from 'react'
import type { FC } from 'react'

const SocialMedias: FC<{ variant?: string }> = ({ variant }) => (
  <Flex variant={variant}>
    <Flex
      sx={{
        width: 540,
        height: 28,
        position: 'absolute',
        marginLeft: 85,
        // left: 72,
      }}
    >
      <Text sx={{ color: '#3F3F40', fontSize: '12px', textAlign: 'left' }}>
        Todas as regras e promoções são válidas apenas para produtos vendidos e
        entregues pela nossa Loja. O valor de oferta do produto será garantido
        após a finalização da compra. Havendo divergência, prevalecerá o menor
        preço ofertado.
      </Text>
    </Flex>

    <Flex
      sx={{
        width: 150,
        height: 16,
        position: 'absolute',
        marginLeft: 800,
        // left: 70,
        gap: 3,
      }}
    >
      <Link
        href="https://www.facebook.com/vtexonline/"
        target="_blank"
        rel="noreferrer"
        // sx={{
        //   height: '48px',
        //   width: '48px',
        //   alignItems: 'center',
        //   justifyContent: 'center',
        // }}
      >
        <Image
          // sx={{ height: 32, width: 32, mr: 1 }}
          height="48px"
          width="48px"
          loading="lazy"
          alt="Facebook"
          src="https://storecomponents.vtexassets.com/_v/public/assets/v1/published/vtex.store-footer@2.20.1/public/react/ebd4bd10e66138168eb6a582e00790ea.svg"
        />
      </Link>
      <Link
        href="https://www.instagram.com/vtextruecloud/"
        target="_blank"
        rel="noreferrer"
        // sx={{
        //   height: '48px',
        //   width: '48px',
        //   alignItems: 'center',
        //   justifyContent: 'center',
        // }}
      >
        <Image
          // sx={{ height: 32, width: 32, mr: 1 }}
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
        // sx={{
        //   height: '48px',
        //   width: '48px',
        //   alignItems: 'center',
        //   justifyContent: 'center',
        // }}
      >
        <Image
          // sx={{ height: 32, width: 32, mr: 1 }}
          height="48px"
          width="48px"
          loading="lazy"
          alt="Twitter"
          src="https://storecomponents.vtexassets.com/_v/public/assets/v1/published/vtex.store-footer@2.20.1/public/react/5f12d2a63f43d3a243550ff6400b4870.svg"
        />
      </Link>
      <Link
        href="https://www.youtube.com/user/VTEXTV"
        target="_blank"
        rel="noreferrer"
        // sx={{
        //   height: '48px',
        //   width: '48px',
        //   alignItems: 'center',
        //   justifyContent: 'center',
        // }}
      >
        <Image
          height="48px"
          width="48px"
          loading="lazy"
          alt="Youtube"
          src="https://storecomponents.vtexassets.com/_v/public/assets/v1/published/vtex.store-footer@2.20.1/public/react/20a214b4866fd6d42a6dfed070c0057b.svg"
        />
      </Link>
    </Flex>
    <Flex
      sx={{
        marginLeft: 1200,
        marginRight: 86,
        flexDirection: 'column',
        position: 'absolute',
        width: '95px',
        height: '51,67px',
        // left: 864,
        // top: 470,
      }}
    >
      <Flex
        sx={{
          position: 'absolute',
          width: '110px',
          height: '14px',
          right: '10px',
          bottom: '50px',
        }}
      >
        <Heading
          as="h3"
          sx={{
            color: '#979899',
            fontSize: '14px',
            lineHeight: '14px',
            fontWeight: 'normal',
            // marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Powered by
        </Heading>
      </Flex>
      <Image
        height="140px"
        width="140px"
        loading="lazy"
        alt="logo_vtex"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/VTEX_Logo.svg/1280px-VTEX_Logo.svg.png"
      />
    </Flex>
  </Flex>
)

export default SocialMedias
