import React from 'react'
import { Button, Flex, Input, Box } from 'theme-ui'
import type { FC } from 'react'

import { useNumericStepper } from '@vtex/store-ui'

export interface NumericStepperProps {
  id?: string
  variant?: string
  // min?: number
  // max?: number
  // value?: number
  // disabled?: boolean
  //  onChange: (quantity: number) => void
}

export const NumericStepper: FC<NumericStepperProps> = ({
  variant = 'productQuantity',
  id = 'product-quantity',
  // value = 1,
  // min = 1,
  // max = Infinity,
  // disabled = false,
  // // onChange= '',
  // children,
}) => {
  // const { setValue, ...rest } = useNumericStepper({
  //   value,
  //   min,
  //   max,
  //   onChange,
  // })

  // const quantity = Number(rest.value)
  // const isMax = quantity >= max
  // const isMin = quantity <= min

  return (
    <Box sx={{ m: '1rem 0' }}>
      <Box sx={{ color: '#727273', fontSize: '14px', margin: '4px' }}>
        Quantidade
      </Box>
      <Flex variant={`${variant}.numericStepper`}>
        <Button
          variant={`${variant}.numericStepper.button.minus`}
          // onDoubleClick={(e) => e.preventDefault()}
          // onClick={() => !disabled && setValue(quantity - 1)}
          // disabled={isMin}
        >
          -
        </Button>
        <Input variant={`${variant}.numericStepper.input`} />
        <Button
          variant={`${variant}.numericStepper.button.plus`}
          // onDoubleClick={(e) => e.preventDefault()}
          // onClick={() => !disabled && setValue(quantity + 1)}
          // disabled={isMax}
        >
          +
        </Button>
        {/* {children} */}
      </Flex>
    </Box>
  )
}
