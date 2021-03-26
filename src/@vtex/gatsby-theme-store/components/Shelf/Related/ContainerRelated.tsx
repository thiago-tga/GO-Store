import { Flex } from '@vtex/store-ui'
import React, { FC } from 'react'
import CardExplore from '../New/ShelfNovidades'

const ContainerExplore: FC = () => {
  const variant = 'shelfNew'
  return (
    <Flex
      sx={{
        m: 'auto',
        height: '100%',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Flex
        sx={{
          justifyContent: ['center', 'space-between', 'space-between'],
          alignItems: 'stretch',
          gap: 1,
        }}
      >
        <CardExplore
          href="/vintage-phone/p"
          src="https://s3-alpha-sig.figma.com/img/d4d9/c577/35f9fb5e8aa91bd4b9f008b643941edc?Expires=1617580800&Signature=XZu0Df1Qk3RrNLgAfapaXMSDJHalMllBp0dLQRxesV-boh9vb-sfCChogCwwKPGHJg1zZB8JX0l74YuImTCQ3AH7ItVs5Xjn-HCvlMtuCz3tNuV~sCkm0u-98s80kpaedGTD-ipt88cltfBbCAZPNXulEGCUXPMMaG052P3hjJwLKkr1sVEFkdxNSQvq356SHk3emJqtXif4~k6LIKFCGH4Tjs79Ac5sIomLYlel2aBN-p5bzjTfewLIAps~hR82~58BZwsRwio3iqheEamKFfGIusKcWt3MUUw9n6O9YY15BtBn5J7k9yoZfuiM8cVbnjArIloTz1MeBw5kxa-QVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          title="Vestido cropped sonho do pantanal"
          offer="$28,90"
          OfferDiscount="$18,90"
          alt="w"
        />

        <CardExplore
          href="/vintage-phone/p"
          src="https://s3-alpha-sig.figma.com/img/f94a/cff9/8f20b3da633e8f41a1e876383f48ff59?Expires=1617580800&Signature=F6-ISEuYJOVBH99dsV57vuhb3gUGtzgEF4XKsms6j7bY760VhjuVvfnOgOlPT3jwwvrHcDYIsAdA~YS~F-wgZVA9YJ1anHmpTiYF5Cup81L47BgMLLJsUWON~BYJr5WZr3M4nDtdWFRXUtrUh3E00vzefKWGKnQ1HDN8weKOon7EgAL9nalk8rlQb9u9PZtkJ~Dcl2mVbxUKh1eTgqVOr8sX4cB07Jf9~ZanWBlbQyOWIaMqPiQYJMMcLl8ulQ8uNMvOGFQxJHTV3Uvhl8avW1MZsorFxArELcuCG9VjGx1N0DSRFCpVRt9TdqFh9iqrULekcGBKAyENea-nnD-PCQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          title="Vestido cropped sonho do pantanal"
          OfferDiscount="$28,90"
          offer="$108,90"
          alt="w"
        />

        <CardExplore
          href="/vintage-phone/p"
          src="https://s3-alpha-sig.figma.com/img/7724/ff2d/904bdb5d3fbf861b594a11fa2e10905b?Expires=1617580800&Signature=AWexMIRSnbAUdJdnZy5RDSMVXZo47gADf-9mdwGeNN3hQPvUakQq7gSfXCrIthhPtlS4YNj4LOcj64Q44AKZLGHMZJRVDquUK2tq3eFwek1WGZEP5nYIyecCDaWYQP8ZOcFqiPMeCViWTm3Y79qdpUjbArdTzYsPAVD-FCAHQnvwf9G1~77H7vCD9iAmECNcF8wEADr0sXfnp0ziX8lw2hOkxWDrIgAGsi6dU5VHyn1Yvrb4ZPYBHNT4wlMUDSTC-Z0b8Gk~MkYcudYiunxFEAuYp4NRHUtmplJXHKB30JicmrjJo3neEFu3oSqHo5Rk4AnbHueU2~SmP9OUrGsJdg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          title="Vestido cropped sonho do pantanal"
          offer="$87,90"
          OfferDiscount="$28,90"
          alt="w"
        />
        <CardExplore
          href="/vintage-phone/p"
          src="https://s3-alpha-sig.figma.com/img/0d10/fccc/1149b89cdd2f5c0826f3599664a700da?Expires=1617580800&Signature=L5Yn30b1~e2XDBBOHM2La0G~Fjx7~kwg7sj-3-Y1k-BnRoU5fXrtnX4VkgRgjfjQGjbM4nYAdEwiD~wgrBaO-T31TPn7tOFjpxS3vNECGR0BjB9BhL27HKS6kQeonxPTX~KHhelR3qZKAeBN4NYSujxvDmOJwm6IPrP-nNdQoH4L4o9KF144bVYiPk~nIPA0blUgpywmBypcO8Ea~aUh6-k7ZwBR8KzAh0hTIcfm9LrrStNq~0Z-bgrrZD3U-gCEzoUQMqCiQzpdyBYZMnyj1kT68xn2LaZ9ZIiyldkIb8sjQ3kFBndnC49E-rmge~lVM0NRe6OicJbyWIm6kDIpJQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          title="Vestido cropped sonho do pantanal"
          OfferDiscount="28,90"
          offer="R$87,90"
          alt="w"
        />
      </Flex>
    </Flex>
  )
}

export default ContainerExplore
