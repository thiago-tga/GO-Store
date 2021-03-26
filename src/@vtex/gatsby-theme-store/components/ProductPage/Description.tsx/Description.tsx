import React from 'react'
import { Flex, Heading, Text, Divider } from '@vtex/store-ui'

function Description() {
  const variant = 'description'
  return (
    <Flex variant={`${variant}.contentContainer`}>
      <Flex variant={`${variant}.containerDescr`}>
        <Text variant={`${variant}.textoDescricao`}>
          <Heading sx={{ marginBottom: '30px' }} as="h3">
            {' '}
            Descrição do produto{' '}
          </Heading>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          eget dui turpis. Proin at libero massa. Donec nisi ante, gravida id
          dictum et, convallis sit amet eros. Nunc mollis neque laoreet eros
          mattis, lacinia pharetra nisl gravida. Praesent pretium fringilla dui
          nec interdum. Sed quis quam facilisis, cursus lorem sit amet, vehicula
          nibh.
          {/* Sed porttitor tempor urna, sed accumsan nibh ultrices non.
          Curabitur blandit tincidunt dolor, vitae efficitur justo pretium sed.
          Vestibulum porta dui et justo iaculis facilisis a ac elit. Nam nibh
          dolor, facilisis ac ipsum vel, faucibus gravida quam. Morbi tempor
          nisi ipsum, quis mattis lectus dictum vel. Vivamus suscipit lacus
          diam, at porta metus dapibus vel. Morbi in erat urna. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. */}
        </Text>
      </Flex>

      <Flex variant={`${variant}.contentCaract`}>
        <Text variant={`${variant}.textoCaracteristica`}>
          <Heading as="h3" sx={{ marginBottom: '30px' }}>
            {' '}
            Características
          </Heading>
          <Flex>
            <Heading
              as="h5"
              sx={{ color: '#979899', fontWeight: 400, fontSize: '16px' }}
            >
              Marca
            </Heading>
          </Flex>
          Farm
          <Divider />
          <Flex>
            <Heading
              as="h5"
              sx={{ color: '#979899', fontWeight: 400, fontSize: '16px' }}
            >
              Matéria-prima
            </Heading>
          </Flex>
          Algodão
          <Divider />
          <Flex>
            <Heading
              as="h5"
              sx={{ color: '#979899', fontWeight: 400, fontSize: '16px' }}
            >
              Gênero
            </Heading>
          </Flex>
          Feminino
          <Divider />
          <Flex>
            <Heading
              as="h5"
              sx={{ color: '#979899', fontWeight: 400, fontSize: '16px' }}
            >
              {' '}
              Coleção
            </Heading>
          </Flex>
          Outono-inverno 2018
        </Text>
      </Flex>
    </Flex>
  )
}

export default Description
