/** @jsx jsx */
import { FC, Fragment } from 'react'
import { jsx, SxStyleProp } from '@vtex/store-ui'

const styles: SxStyleProp = {
  mx: '2px',
  border: 'solid',
  borderColor: '#E3E4E6',
  padding: '0px',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  width: 56,
  height: 56,
  borderRadius: 4,
  color: '#979899',
  fontWeight: 500,
  fontSize: '16px',
  '&:hover': {
    opacity: '0.7',
    borderColor: '#71985A',
  },
  ':not': {
    borderColor: 'red',
  },
}

const Size: FC = () => {
  return (
    <Fragment>
      <div sx={{ color: '#727273', fontSize: '14px', margin: '4px' }}>
        Tamanho:
      </div>
      <div sx={{ display: 'flex' }}>
        <div className="vtex-store-components-3-x-shareButtons flex flex-row">
          <button sx={styles}>P</button>
          <button sx={styles}>M</button>
          <button sx={styles}>G</button>
          <button sx={styles}>GG</button>
        </div>
      </div>
    </Fragment>
  )
}

export default Size
