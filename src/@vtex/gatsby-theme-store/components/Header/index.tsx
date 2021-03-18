import Minicart from '@vtex/gatsby-theme-store/src/components/Minicart'
import SearchBar from '@vtex/gatsby-theme-store/src/components/SearchBar'
import { Box, Flex, Header } from '@vtex/store-ui'
import type { FC } from 'react'
import React, { Fragment } from 'react'

import Login from '../../../../components/Login'
import Menu from './Menu'
import Logo from './Logo'

const StoreHeader: FC = () => {
  const variant = 'header'
  return (
    <Fragment>
      <Header variant={variant}>
        <Flex variant={`${variant}.top`}>
          <Flex variant={`${variant}.left`}>
            <Logo />
          </Flex>
          <Flex
            css={() => ({
              [`@media (max-width: 930px)`]: {
                width: '40%',
              },
              [`@media (max-width: 600px)`]: {
                position: 'absolute',
                top: '89px',
                width: '240px',
                zIndex: 1,
                left: '4%',
              },
            })}
          >
            <SearchBar placeholder="Buscar por produtos" aria-label="Search" />
          </Flex>
          <Flex variant={`${variant}.right`}>
            <Login />
            <Minicart />
          </Flex>
        </Flex>
        <Box sx={{ background: '#F2F4F5', height: '1px' }} />
        <Flex
          variant={`${variant}.botoom`}
          css={() => ({
            [`@media (max-width: 600px)`]: {
              position: 'relative',
              height: '49px',
            },
          })}
        >
          <Menu variant={`${variant}.menu`} />
        </Flex>
      </Header>
    </Fragment>
  )
}

export default StoreHeader
