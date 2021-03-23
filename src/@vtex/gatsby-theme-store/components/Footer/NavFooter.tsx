import { Flex, Grid, Heading, Text, Link, Button, Input } from '@vtex/store-ui'
import React from 'react'
import type { FC } from 'react'

const NavFooter: FC<{ variant?: string }> = ({ variant }) => (
  <Grid columns={[4]}>
    <Flex
      sx={{
        gap: 2,
        height: '260px',
        width: '186px',
        left: '72px',
        top: '120px',
        borderRadius: '0px',
        flexDirection: 'column',
        marginLeft: 70,
        marginTop: 50,
      }}
      variant={variant}
    >
      <Text sx={{ color: '#979899', textAlign: 'left', fontSize: '16px' }}>
        <Heading
          as="h5"
          sx={{
            fontSize: '20px',
            lineHeight: '24px',
            fontStyle: 'normal',
            fontWeight: 'normal',
            marginBottom: '20px',
            color: '#3f3f40',
          }}
        >
          Sobre a loja{' '}
        </Heading>
        Pretium tellus turpis facilisis cras. Et id tristique a cras at. A nibh
        in auctor duis nulla condimentum enim vitae. Morbi pharetra dictum sed
        ridiculus lectus maecenas donec neque sapien. Dignissim sollicitudin
        neque porttitor eget id faucibus in in.
      </Text>
    </Flex>

    <Flex
      sx={{
        gap: 2,
        height: '260px',
        width: '186px',
        left: '72px',
        top: '120px',
        borderRadius: '0px',
        flexDirection: 'column',
        marginLeft: 50,
        marginTop: 50,
      }}
      variant={variant}
    >
      <Heading
        as="h5"
        sx={{
          fontSize: '20px',
          lineHeight: '24px',
          fontStyle: 'normal',
          fontWeight: 'normal',
          marginBottom: '20px',
        }}
      >
        Informações
      </Heading>

      <Link
        sx={{ textDecoration: 'none', color: '#979899' }}
        href="https://theme-ui.com/recipes/footer-a4"
      >
        {' '}
        Contato{' '}
      </Link>
      <Link
        sx={{ textDecoration: 'none', color: '#979899' }}
        href="https://www.google.com"
      >
        {' '}
        Politica de trocas
      </Link>
      <Link
        sx={{ textDecoration: 'none', color: '#979899' }}
        href="https://www.facebook.com"
      >
        FAQ
      </Link>
    </Flex>

    <Flex
      sx={{
        gap: 2,
        height: '260px',
        width: '186px',
        left: '72px',
        top: '120px',
        borderRadius: '0px',
        flexDirection: 'column',
        marginLeft: 50,
        marginTop: 50,
      }}
      variant={variant}
    >
      <Heading
        as="h5"
        sx={{
          fontSize: '20px',
          lineHeight: '24px',
          fontStyle: 'normal',
          fontWeight: 'normal',
          marginBottom: '20px',
        }}
      >
        Marcas
      </Heading>
      <Link
        sx={{ textDecoration: 'none', color: '#979899' }}
        href="https://www.farmrio.com.br/"
      >
        Farm
      </Link>
      <Link
        sx={{ textDecoration: 'none', color: '#979899' }}
        href="https://www.animale.com.br/"
      >
        Animale
      </Link>
      <Link
        sx={{ textDecoration: 'none', color: '#979899' }}
        href="https://www.abrand.com.br//"
      >
        A.Brand
      </Link>
    </Flex>
    <Flex
      sx={{
        gap: 2,
        height: '149px',
        width: '322px',
        top: '120px',
        marginTop: 50,
        marginRight: 70,
      }}
      variant={variant}
    >
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
      <Input
        sx={{ width: 360, height: 48, top: 37, color: '#979899' }}
        placeholder="E-mail"
      />
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
