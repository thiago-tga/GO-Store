/** @jsx jsx */
import { FC, Fragment } from 'react'
import { jsx, SxStyleProp } from '@vtex/store-ui'

const styles: SxStyleProp = {
  padding: '0px',
  width: 36,
  height: 40,
  fontWeight: 500,
  fontSize: '16px',
  border: 'solid',
  borderColor: '#CACBCC',
  '&:hover': {
    opacity: '0.7',
    borderColor: '#71985A',
  },
  ':not': {
    borderColor: 'red',
  },
}

const Amount: FC = () => {
  return (
    <Fragment>
      <div sx={{ color: '#727273', fontSize: '14px', margin: '4px' }}>
        Tamanho:
      </div>
      <div sx={{ display: 'flex', width: '100%' }}>
        <div>
          <button sx={styles}>
            <span>+</span>
          </button>
          <input
            type="text"
            sx={styles}
            css={{ m: '0', padding: '0px', width: '64px', color: '#CACBCC' }}
          />
          <button sx={styles}>
            <span>-</span>
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default Amount
