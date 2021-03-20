import React, { FC } from 'react'
import { Box, Flex, Grid } from '@vtex/store-ui'

import BoxImg from './Box'
import DeliveryImg from './Delivery'
import StoreImg from './Store'
import CouponImg from './Coupon'

const FullWidthContainer: FC = ({ children }) => (
  <Box sx={{ width: '100%', padding: '2.5rem' }}>{children}</Box>
)

const RowItemContainer: FC = ({ children }) => (
  <Flex
    variant="deal-row-item-container"
    sx={{
      alignItems: 'center',
      flexDirection: 'column',
      paddingTop: '1rem',
    }}
  >
    {children}
  </Flex>
)

const MAX_ITEMS = [1, 4]

const RichTextRow: FC = () => (
  <FullWidthContainer>
    <Box backgroundColor="#FFFFFF">
      <Box
        sx={{
          color: '#CACBCC',
          fontSize: '20px',
          textAlign: 'center',
        }}
      >
        MARCAS
      </Box>
      <Grid gap={2} columns={MAX_ITEMS}>
        <RowItemContainer>
          <BoxImg />
        </RowItemContainer>
        <RowItemContainer>
          <DeliveryImg />
        </RowItemContainer>
        <RowItemContainer>
          <StoreImg />
        </RowItemContainer>
        <RowItemContainer>
          <CouponImg />
        </RowItemContainer>
      </Grid>
    </Box>
  </FullWidthContainer>
)

export default RichTextRow
