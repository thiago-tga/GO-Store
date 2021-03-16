import { Flex, LocalizedLink, MenuButton } from '@vtex/store-ui'
import React, { useState } from 'react'
import type { FC } from 'react'

const CustomMenu: FC<{ variant?: string }> = ({ variant }) => {
  const [mostra, setMostra] = useState(0)
  const [visivel, setVisivel] = useState('-300px')

  function click() {
    if (mostra == 1) {
      setMostra(0)
      setVisivel('-300px')
    } else {
      setMostra(1)
      setVisivel('49.4px')
    }
  }

  return (
    <>
      <MenuButton
        aria-label="Toggle Menu"
        css={() => ({
          [`@media (min-width: 600px)`]: {
            display: 'none',
          },
          [`@media (max-width: 600px)`]: {
            display: 'block',
            position: 'absolute',
            top: '10px',
            left: '89%',
          },
        })}
        onClick={click}
      />
      <Flex
        as="nav"
        variant={variant}
        css={() => ({
          [`@media (max-width: 768px)`]: {},
          [`@media (max-width: 600px)`]: {
            flexDirection: 'column',
            width: '100%',
            height: '150px',
            position: 'absolute',
            top: visivel,
            zIndex: mostra,

            borderRadius: '4px',
            background: 'white',
            textAlign: 'center',
            boxShadow: '5px 3px 3px rgba(0, 0, 0, 0.3);',
          },
        })}
      >
        <LocalizedLink to="/ Vestidos " activeClassName="active">
          VESTIDO
        </LocalizedLink>
        <LocalizedLink to="Fitness" activeClassName="active">
          FITNESS
        </LocalizedLink>
        <LocalizedLink to="/Camisetas" activeClassName="active">
          CAMISETAS
        </LocalizedLink>
        <LocalizedLink to="/Calças" activeClassName="active">
          CALÇAS
        </LocalizedLink>
        <LocalizedLink to="/Acessórios" activeClassName="active">
          ACESSÓRIOS
        </LocalizedLink>
        <LocalizedLink to="Calçados" activeClassName="active">
          CALÇADOS
        </LocalizedLink>
      </Flex>
    </>
  )
}

export default CustomMenu
