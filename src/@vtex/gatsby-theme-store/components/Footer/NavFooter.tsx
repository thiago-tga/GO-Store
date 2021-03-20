import { Flex, Grid, Heading, Text, Link, Button, Input } from '@vtex/store-ui'
import React from 'react'
import type { FC } from 'react'

const NavFooter: FC<{ variant?: string }> = ({ variant }) => (
  <Grid gap={2} columns={[4]}>
    <Flex variant={variant}>
      <Heading
        as="h5"
        sx={{
          fontSize: '20px',
          lineHeight: '24px',
          fontStyle: 'normal',
          fontWeight: 'normal',
        }}
      >
        Sobre a loja{' '}
      </Heading>
      <Text>
        Pretium tellus turpis facilisis cras. Et id tristique a cras at. A nibh
        in auctor duis nulla condimentum enim vitae. Morbi pharetra dictum sed
        ridiculus lectus maecenas donec neque sapien. Dignissim sollicitudin
        neque porttitor eget id faucibus in in.
      </Text>
    </Flex>
    <Flex variant={variant}>
      <Heading
        as="h5"
        sx={{
          fontSize: '20px',
          lineHeight: '24px',
          fontStyle: 'normal',
          fontWeight: 'normal',
          //hehehe
        }}
      >
        Informações
      </Heading>
      <Link href="https://theme-ui.com/recipes/footer-a4"> Contato </Link>
      <Link href="https://www.google.com"> Politica de trocas</Link>
      <Link href="https://www.facebook.com">FAQ</Link>
    </Flex>
    <Flex variant={variant}>
      <Heading
        as="h5"
        sx={{
          fontSize: '20px',
          lineHeight: '24px',
          fontStyle: 'normal',
          fontWeight: 'normal',
        }}
      >
        Marcas
      </Heading>
      <Link href="https://www.farmrio.com.br/">Farm</Link>
      <Link href="https://www.animale.com.br/">Animale</Link>
      <Link href="https://www.abrand.com.br//">A.Brand</Link>
    </Flex>
    <Flex variant={variant}>
      <Heading
        as="h5"
        sx={{
          fontSize: '18px',
          lineHeight: '21px',
          fontStyle: 'normal',
          fontWeight: 'normal',
        }}
      >
        Inscreva-se na nossa newsletter
      </Heading>
      <Input placeholder="E-email" />
      <Button
        sx={{
          bg: '#70BB44',
          borderRadius: '4px',
          width: '99px',
          height: '36px',
          left: '0px',
          top: '109px',
        }}
      >
        Enviar
      </Button>
    </Flex>
  </Grid>
)

export default NavFooter
