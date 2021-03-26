import { Box, Button, Flex, Heading, Input , Link} from "@vtex/store-ui"
import React from 'react'
import { FC } from 'react'

const SearchCEP: FC<{ variant?: string }> = ({variant}) =>(
    <Box>
        <Heading sx={{color:'#979899',fontSize:'14px'}} >Código postal</Heading>
        <Flex css={() => ({
              [`@media (max-width: 1024px)`]: {
               flexDirection:'column',
              }
            })}>
            <Input sx={{width:"50%"}} placeholder="Código postal"></Input>
            <Link sx={{width:"50%", fontSize:'12px', textDecoration:'none', color:'#70BB44'}} target="blank" href="https://buscacepinter.correios.com.br/app/endereco/index.php?t">NÃO SEI MEU CEP</Link>
        </Flex>
        <Button >CALCULAR FRETE</Button>
    </Box>
)



export default SearchCEP