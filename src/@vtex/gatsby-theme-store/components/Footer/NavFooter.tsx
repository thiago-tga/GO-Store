import { Flex, Heading, Text, Link, Button, Input } from '@vtex/store-ui'
import React from 'react'
import type { FC } from 'react'

const NavFooter: FC<{ variant?: string }> = ({ variant }) => {
  variant = 'footer'

  return (
    <Flex variant={`${variant}.containerTextos`}>
      <Flex variant={`${variant}.textos`}>
        <Text sx={{ color: '#979899', textAlign: 'left', fontSize: '16px' }}>
          <Heading as="h5" variant={`${variant}.titulo`}>
            Sobre a loja
          </Heading>
          Pretium tellus turpis facilisis cras. Et id tristique a cras at. A
          nibh in auctor duis nulla condimentum enim vitae. Morbi pharetra
          dictum sed ridiculus lectus maecenas donec neque sapien. Dignissim
          sollicitudin neque porttitor eget id faucibus in in.
        </Text>
      </Flex>

      {/* informacoes acaba aqui */}
      <Flex variant={`${variant}.textos`}>
        <Heading variant={`${variant}.titulo`}>Informações</Heading>

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

      {/* marcas */}
      <Flex variant={`${variant}.textos`}>
        <Heading as="h5" variant={`${variant}.titulo`}>
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

      {/* inscreva */}
      <Flex variant={`${variant}.textoInput`}>
        <Heading
          as="h5"
          variant={`${variant}.titulo`}
          sx={{ marginBottom: '15px' }}
        >
          Inscreva-se na nossa newsletter
        </Heading>
        <Input
          sx={{ width: '100%', height: 48, color: '#979899' }}
          placeholder="E-mail"
        />
        <Button
          sx={{
            bg: '#70BB44',
            borderRadius: '4px',
            width: '99px',
            height: '36px',
          }}
        >
          Enviar
        </Button>
      </Flex>
    </Flex>
  )
}

export default NavFooter
