import { Box, Button, Flex, Heading, Input, Link } from '@vtex/store-ui'
<<<<<<< HEAD
import type { FC } from 'react'
import React from 'react'
=======
import React from 'react'
import { FC } from 'react'
>>>>>>> b9550ca513a5c720a8a660f2f756a80ff9ddd517

const SearchCEP: FC<{ variant?: string }> = () => (
  <Box sx={{ paddingBottom: '2rem' }}>
    <Heading
      sx={{
        color: '#727273',
        fontSize: '14px',
        paddingBottom: '0.5rem',
        fontWeight: 300,
      }}
    >
      Código postal
    </Heading>
    <Flex
      css={() => ({
        paddingBottom: '0.9rem',
        [`@media (min-width: 1024px)`]: {
          alignItems: 'center',
        },
        [`@media (max-width: 1024px)`]: {
          flexDirection: 'column',
        },
      })}
    >
      <Input
        sx={{ width: '50%', borderColor: '#E3E4E6' }}
        placeholder="Código postal"
<<<<<<< HEAD
      />
=======
      ></Input>
>>>>>>> b9550ca513a5c720a8a660f2f756a80ff9ddd517
      <Link
        sx={{
          width: '50%',
          fontSize: '12px',
          textDecoration: 'none',
          color: '#70BB44',
        }}
        target="blank"
        href="https://buscacepinter.correios.com.br/app/endereco/index.php?t"
      >
        NÃO SEI MEU CEP
      </Link>
    </Flex>
    <Button
      sx={{
        fontWeight: 500,
        minHeight: '30px',
        textTransform: 'uppercase',
        backgroundColor: 'white',
        color: '#70BB44',
        borderColor: '#70BB44',
        borderWidth: '2px',
        borderStyle: 'solid',
        fontSize: '14px',
        minWidth: '170px',
      }}
    >
      CALCULAR FRETE
    </Button>
  </Box>
)

export default SearchCEP
