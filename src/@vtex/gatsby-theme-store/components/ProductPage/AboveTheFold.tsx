import Container from '@vtex/gatsby-theme-store/src/components/Container'
import ProductImageGallery from '@vtex/gatsby-theme-store/src/components/ProductImageGallery'
import { useDetailsImages } from '@vtex/gatsby-theme-store/src/sdk/product/useDetailsImages'
import { useDetailsVideos } from '@vtex/gatsby-theme-store/src/sdk/product/useDetailsVideos'
import {
  Card,
  Flex,
  Grid,
  Breadcrumb,
  ProductDetailsTitle,
  Box,
} from '@vtex/store-ui'
import type { FC } from 'react'
import React, { Suspense } from 'react'
import { isServer } from '@vtex/gatsby-theme-store/src/utils/env'
import { useOrderForm } from '@vtex/gatsby-theme-store/src/sdk/orderForm/useOrderForm'

import AsyncInfoContainer from './Above/Async/Container'
import AsyncInfoPreview from './Above/Async/Preview'
import AsyncInfo from './Above/Async'
import Description from './Description.tsx/Description'

const variant = 'default'

type Props = {
  data: {
    vtex: {
      product: {
        productName: string
        categoryTree: Array<{ name: string; href: string }>
        items: Array<{
          images: Array<{ imageUrl: string; imageText: string }>

          videos: Array<{ videoUrl: string }>
        }>
      }
    }
  }
  slug: string
}

const AboveTheFold: FC<Props> = ({
  data: {
    vtex: { product },
  },
  slug,
}) => {
  const {
    productName,
    categoryTree: breadcrumb = [],
    items: [{ images, videos }],
  } = product

  const imageItems = useDetailsImages(images)
  const videoItems = useDetailsVideos(videos, productName)
  const galleryItems = [...imageItems, ...videoItems]

  const orderForm = useOrderForm()
  const customVariant = `${variant}.drawer`

  return (
    <>
      <Flex variant="productPage.container">
        <Container>
          <Breadcrumb breadcrumb={breadcrumb} type="PRODUCT" />

          <Grid
            mx="auto"
            columns={[1, '60% 38%']}
            sx={{ width: ['100%', '90%', '85%'], bg: '#FFFFFF', pt: '2rem' }}
          >
            <ProductImageGallery allItems={galleryItems} />
            <Card>
              <ProductDetailsTitle variant={variant}>
                {productName}
              </ProductDetailsTitle>

              <AsyncInfoContainer>
                {isServer ? null : (
                  <Suspense fallback={<AsyncInfoPreview />}>
                    <AsyncInfo
                      slug={slug}
                      data={orderForm.value?.items ?? []}
                      varian={customVariant}
                    />
                  </Suspense>
                )}
              </AsyncInfoContainer>
            </Card>
          </Grid>
        </Container>
      </Flex>
      <Container sx={{ pb: '35px' }}>
        <Box sx={{ width: ['100%', '90%', '85%'], margin: 'auto' }}>
          <Description />
        </Box>
      </Container>
    </>
  )
}

// export { fragment } from '@vtex/gatsby-theme-store/src/components/ProductPage/AboveTheFold'

export default AboveTheFold
