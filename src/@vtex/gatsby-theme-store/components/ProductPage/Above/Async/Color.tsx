/** @jsx jsx */
import { FC, Fragment } from 'react'
import { jsx, SxStyleProp } from '@vtex/store-ui'

const styles: SxStyleProp = {
  mx: '2px',
  border: 'none',
  padding: '0px',
  font: 'inherit',
  color: 'inherit',
  cursor: 'pointer',
  backgroundColor: 'transparent',

  '&:hover': {
    opacity: '0.5',
  },
}

const Cor: FC = () => {
  return (
    <Fragment>
      <div sx={{ color: '#727273', fontSize: '14px', margin: '4px' }}>
        Cor:{' '}
      </div>
      <div sx={{ display: 'flex' }}>
        <div className="vtex-store-components-3-x-shareButtons flex flex-row">
          <button sx={styles}>
            <svg viewBox="0 0 64 64" width="32" height="32">
              <circle cx="32" cy="32" r="31" fill="#3b5998" />
            </svg>
          </button>
          <button sx={styles}>
            <svg viewBox="0 0 64 64" width="32" height="32">
              <circle cx="32" cy="32" r="31" fill="#25D366" />
            </svg>
          </button>
          <button
            sx={styles}
            title="Top Fashion Eyeglasses 1 at storecomponents: "
          >
            <svg viewBox="0 0 64 64" width="32" height="32">
              <circle cx="32" cy="32" r="31" fill="#FFB100" />
            </svg>
          </button>
          <button sx={styles}>
            <svg viewBox="0 0 64 64" width="32" height="32">
              <circle cx="32" cy="32" r="31" fill="black" />
            </svg>
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default Cor
