import { Flex } from '@vtex/store-ui'
import React, { FC } from 'react'
import CardExplore from './CardExplore'

const ContainerExplore: FC = () => (
  <Flex
    sx={{
      margin: 'auto',
      justifyContent: ['center', 'center', 'space-between'],
      gap: 2,
    }}
    css={() => ({
      [`@media (max-width: 647px)`]: {
        flexWrap: 'wrap',
      },
    })}
  >
    <CardExplore
      href="/vintage-phone/p"
      src="https://s3-alpha-sig.figma.com/img/0060/d7d3/b8a6abdcc82a2fca183a8417c6df5347?Expires=1616371200&Signature=BBztaIGH7Q8lO9W3LcLWV~DwSggjByyPTCvHCGtF3m6GcK-M01swrvUyUcUuJMhh-nOskHeTm7H3DU8CCQHjSkPfTX6JZw0SyZ7xV8v~Kn3ZNR~HYu97ZWKauzWMIvdQXv5A6GbhXw0t7yRcHpCn9bp26iy1hhhqEuqjnGvue4~G2FQf~M3cjdnj-TpRGyCYzTZtYS0hUAx8nn99DsUaRsd0jeum5ErT6CwHP3dzQS-NhdkS-MUVk3PKAEdRSD5fNqD7hu046jI~ot8gjFmGMeVpGFz2OWfWu-3CLlxibzHKoh5QfGRW6-jcJaB7~xmmRsoGjQ-nGP3A7x2Hnkb27A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      title="Tshirt"
    />
    <CardExplore
      href="/vintage-phone/p"
      src="https://s3-alpha-sig.figma.com/img/73ba/6fb5/38c736539225aefbe05cb0691e73a6cd?Expires=1616371200&Signature=e~fIf3ClLDyg4~5nFEn7aSQ1~kwhLA8b~JK07aBE~oUD4Io2OQzqHNSWFf3HVgNgkjfZz4XoeieRjJZDogoObm~qXfrzmleuUlEwrHF24KznTJTBvxijhr-92TJELkkWKzS0TWP2vseyi8tK-nlh-1KYkd3f4k11J1poG9~SXxqRydBIMeYnLRPiUn-JRV9mnRUdjXSR5U-Y1me2U3GEd1DiKg6XkyZPO53ZNXNVVwGUG3DtsbHm~AWr6pES~VvQx8VjksGyNS6~8QuF4MIKTM71Y1kmaRzX0Qwlq2dkB70zj0oZt4IIMe8JFaUSskxlulYvUG195NwQegrzHg-IAA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      title="Óculos e Acessórios"
    />
  </Flex>
)

export default ContainerExplore
