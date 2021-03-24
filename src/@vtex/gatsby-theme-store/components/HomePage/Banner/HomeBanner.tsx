import { Banner, Flex } from '@vtex/store-ui'
import React, { FC } from 'react'

const Banne: FC = () => (
  <Flex
    sx={{
      overflow: 'hidden',
      height: ['auto', 'auto', '350px', '500px'],
      width: '100%',
      bg: '#F7F9FA',
    }}
  >
    <Banner
      src="https://s3-alpha-sig.figma.com/img/cf9a/6c3a/ebeb551e3783f95558a6f0c8257b9e5f?Expires=1616976000&Signature=C8qVauz~ZLdl9oY8zzpj5q-X-0hQzQB6aL5~ymnzk4qbnA7yo-Sz18FfQe7ye-dVqy~ENejpVf2zTVqyE0r-HZHnpMyExp5lcZSGg7Cjvfl22DuPqaRYP0Weyd~TM1uE2Yh9GejYQfbHtUXUO-bMID0lFwJEXjqhaLavr5a~~dc9CP2HcI-OJ6g7NJvdBMmG~C4R7ofEqwguQQm0l26oQAzFzQ0KQ4LCQW1uRREC3CkMcjv3lz5NdTbeZXAixo9rr1Wim8dujo7nhUI0WvdbG7rNKQXw2owHdYQqdiiLWMGVe7WuIZnvZrJwUy5JktxxckG-l0WiJuA67XgvGh8NKQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      href="/"
      alt="k"
      width="100%"
      height="100%"
    />
  </Flex>
)

export default Banne
