import { Flex } from '@vtex/store-ui'
import React, { FC } from 'react'
import CardExplore from './CardExplore'

const ContainerExplore: FC = () => (
  <Flex
    sx={{
      margin: 'auto',
      justifyContent: ['center', 'center', 'space-between'],
      gap: 2,
      paddingBottom: '3rem',
    }}
    css={() => ({
      [`@media (max-width: 647px)`]: {
        flexWrap: 'wrap',
      },
    })}
  >
    <CardExplore
      href="/vintage-phone/p"
      src="https://s3-alpha-sig.figma.com/img/0060/d7d3/b8a6abdcc82a2fca183a8417c6df5347?Expires=1617580800&Signature=C5UG9Tt2nLpLv8Njld7P8hxs0Ydyecsl29PYwH2mJYpgP2cn1xnsD7bCtUr0zxr-RkMwB12Ic2FbNQ~hSqg9ireVcMrKyYqvmLLkVNssI0UmxoNaKpy-JmYLH2WQDCOewGqWPuEdyI2QhLQUifvqBGro7h1IwwH4cqGJaP8Y4v4FnG6wv299DajVBKU8Y2-AAJGSbAmQSdgLFRISAaJ2jvXH8Ks9rMXBw~DJGEaf25~Qi5aVUBl7nQwfEQ7lCt9WooXdcmQPd~if2V~6nHxAov152tXNuDgLoOibI-WM4vpV6H4aPCrw1hXeNYEL1SEO~YFbeFMGyvVVSTf9i4wPIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      title="Tshirt"
    />
    <CardExplore
      href="/vintage-phone/p"
      src="https://s3-alpha-sig.figma.com/img/73ba/6fb5/38c736539225aefbe05cb0691e73a6cd?Expires=1617580800&Signature=BZAluAkvLc2M4KGPoaRG54BcFcXXDK-aRw3oDtfjatK7IlMaZFJcFYlTrgzFEgG35ETLTAJyjDScNaQWDeOBX6quzl~DHoJkP7EWMrmB3~LYAhKAqLQc7RvzMWEEDnUIWhw5HxiC3PldVS0p8T4GpdDoFexEqofIGN9~jweBhFoMWu0zedqz1duK1BFplNH4WXcmlSN-qCtnkSzHQLmCl9cXeMPynON0m79zcCDVbojBJZarOWKz~B5xxxbq6BKI0W1w7kurd3uQpaPactYwjiRNuJELk~m8X8DjCE~buAv3fzDdLSQa8RAxCRYb~CDCZBhA1L1m7ReKWwjkDDEfTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      title="Óculos e Acessórios"
    />
  </Flex>
)

export default ContainerExplore
