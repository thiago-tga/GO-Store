import React from 'react'
import { Button, Flex, Input, Box } from 'theme-ui'
import type { FC } from 'react'

export interface NumericStepperProps {
  id?: string
  variant?: string
}

export const NumericStepper: FC<NumericStepperProps> = ({
  variant = 'productQuantity',
}) => {
  return (
    <Box sx={{ m: '1rem 0' }}>
      <Box sx={{ color: '#727273', fontSize: '14px', margin: '4px' }}>
        Quantidade
      </Box>
      <Flex variant={`${variant}.numericStepper`}>
        <Button variant={`${variant}.numericStepper.button.minus`}>-</Button>
        <Input variant={`${variant}.numericStepper.input`} />
        <Button variant={`${variant}.numericStepper.button.plus`}>+</Button>
      </Flex>
    </Box>
  )
}
