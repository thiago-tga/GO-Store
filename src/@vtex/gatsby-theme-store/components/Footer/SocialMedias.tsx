import { Flex, Link, Image, Text, Heading } from '@vtex/store-ui'
import React from 'react'
import type { FC } from 'react'

const SocialMedias: FC<{ variant?: string }> = ({ variant }) => (
  <Flex
    variant={variant}
    sx={{
      width: '90%',
      m: 'auto',
      [`@media (max-width: 539px)`]: {
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 3,
        width: '100%',
      },
    }}
  >
    <Flex
      sx={{
        width: '60%',
        minWidth: '475px',
        [`@media (max-width: 539px)`]: {
          width: '100%',
          minWidth: '100%',
          textAlign: 'center',
        },
      }}
    >
      <Text
        sx={{
          color: '#3F3F40',
          fontSize: '12px',
          textAlign: 'left',
          [`@media (max-width: 539px)`]: {
            textAlign: 'center',
          },
        }}
      >
        Todas as regras e promoções são válidas apenas para produtos vendidos e
        entregues pela nossa Loja. O valor de oferta do produto será garantido
        após a finalização da compra. Havendo divergência, prevalecerá o menor
        preço ofertado.
      </Text>
    </Flex>
    <Flex
      sx={{
        alignItems: 'center',
        width: '38%',
        justifyContent: 'space-between',
        [`@media (max-width: 862px)`]: {
          justifyContent: 'flex-end',
        },
        [`@media (max-width: 539px)`]: {
          justifyContent: 'center',
        },
      }}
    >
      <Flex
        sx={{
          minWidth: '150px',
          [`@media (max-width: 837px)`]: {
            position: 'absolute',
            top: '83%',
          },
          [`@media (max-width: 539px)`]: {
            top: '78%',
          },
        }}
      >
        <Flex
          sx={{
            width: 160,
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
      </Flex>
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: '132px',
          [`@media (max-width: 539px)`]: {},
        }}
      >
        <Heading
          as="h3"
          sx={{
            color: '#979899',
            fontSize: '14px',
            lineHeight: '14px',
            fontWeight: 'normal',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Powered by
        </Heading>
        <Image
          height="140px"
          width="140px"
          loading="lazy"
          alt="logo_vtex"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/VTEX_Logo.svg/1280px-VTEX_Logo.svg.png"
        />
      </Flex>
    </Flex>
  </Flex>
)

export default SocialMedias
