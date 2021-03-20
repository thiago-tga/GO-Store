/** @jsx jsx */
import type { FC } from 'react'
import type { SKU } from '@vtex/gatsby-theme-store/src/sdk/buyButton/useBuyButton'
import { useBuyButton } from '@vtex/gatsby-theme-store/src/sdk/buyButton/useBuyButton'
import type { SxStyleProp } from '@vtex/store-ui'
import { Button, jsx, Spinner } from '@vtex/store-ui'
import { useIntl } from '@vtex/gatsby-plugin-i18n'

interface Props {
  sku: SKU | undefined | null
}

const styles: SxStyleProp = {
  px: '24px',
  minWidth: '270px',
  width: ['100%', '70%', '17rem'],
  fontWeight: 500,
  minHeight: '40px',
  textTransform: 'uppercase',
  backgroundColor: 'white',
  color: '#70BB44',
  borderColor: '#70BB44',
  borderWidth: '2px',
  borderStyle: 'solid',
  '&:hover': {
    opacity: '0.95',
  },

  '&:disabled': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
    color: 'text',
  },
}

const BuyButton: FC<Props> = ({ sku }) => {
  const { formatMessage } = useIntl()
  const { loading, ...props } = useBuyButton({ sku, quantity: 1 })

  return (
    <Button sx={styles} {...props}>
      {loading ? (
        <Spinner size="10px" />
      ) : (
        formatMessage({ id: 'Adicionar ao carrinho' })
      )}
    </Button>
  )
}

export default BuyButton
