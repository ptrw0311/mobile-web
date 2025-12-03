/**
 * 手機資料庫初始化腳本
 * 包含 2024-2025 年台灣熱門手機資料
 */

import 'dotenv/config'
import { db } from '../src/db'
import { brands, phones, reviews } from '../src/db/schema'

async function seedDatabase() {
  console.log('開始初始化資料庫...')

  // 1. 清空現有資料
  console.log('清空現有資料...')
  await db.delete(reviews)
  await db.delete(phones)
  await db.delete(brands)

  // 2. 新增品牌資料
  console.log('新增品牌資料...')
  const brandData = await db.insert(brands).values([
    {
      name: 'Apple',
      description: '美國科技巨頭，iPhone 系列引領智慧型手機潮流',
      logo: 'https://www.apple.com/v/home/takeover/k/images/meta/apple-logo__6e8295fr3ecy_og.png',
    },
    {
      name: 'Samsung',
      description: '韓國電子大廠，Galaxy 系列旗艦機領導者',
      logo: 'https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/mo/360_197_1.png',
    },
    {
      name: 'Google',
      description: 'Google Pixel 系列，AI 功能領先的 Android 手機',
      logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    },
    {
      name: 'Xiaomi',
      description: '小米科技，高性價比智慧型手機品牌',
      logo: 'https://s02.mifile.cn/assets/static/image/logo-mi2.png',
    },
    {
      name: 'OnePlus',
      description: '一加手機，Never Settle 的性能旗艦',
      logo: 'https://oasis.opstatics.com/content/dam/oasis/page/logo/logo.png',
    },
    {
      name: 'OPPO',
      description: 'OPPO 手機，影像與快充技術領先',
      logo: 'https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/navigation-logo-v2-2-oppo.svg',
    },
    {
      name: 'ASUS',
      description: '華碩 ROG Phone 與 Zenfone 系列',
      logo: 'https://www.asus.com/media/Odin/images/header/ROG_logo.svg',
    },
  ]).returning()

  const brandMap = Object.fromEntries(
    brandData.map((b) => [b.name, b.id])
  )

  // 3. 新增手機資料（2024-2025 年台灣熱門機型）
  console.log('新增手機資料...')
  const phoneData = await db.insert(phones).values([
    // Apple iPhone 系列 (Top 1-8)
    {
      name: 'iPhone 16 Pro Max',
      brandId: brandMap['Apple'],
      officialPrice: '47900',
      sitePrice: '45900',
      imageUrl: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-16-pro-max-finish-select-202409-6-9inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1725502775991',
      popularity: 100,
      specs: {
        size: '6.9 吋',
        weight: '227g',
        cpu: 'Apple A18 Pro',
        memory: '8GB',
        storage: '256GB / 512GB / 1TB',
        display: 'Super Retina XDR OLED, 120Hz',
        camera: '主相機 48MP + 超廣角 48MP + 長焦 12MP (5x)',
        battery: '4685mAh',
        colors: ['自然鈦金屬', '黑鈦金屬', '白鈦金屬', '沙漠鈦金屬'],
      },
      isActive: true,
    },
    {
      name: 'iPhone 16 Pro',
      brandId: brandMap['Apple'],
      officialPrice: '36900',
      sitePrice: '35900',
      imageUrl: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1725502773517',
      popularity: 99,
      specs: {
        size: '6.3 吋',
        weight: '199g',
        cpu: 'Apple A18 Pro',
        memory: '8GB',
        storage: '128GB / 256GB / 512GB / 1TB',
        display: 'Super Retina XDR OLED, 120Hz',
        camera: '主相機 48MP + 超廣角 48MP + 長焦 12MP (5x)',
        battery: '3582mAh',
        colors: ['自然鈦金屬', '黑鈦金屬', '白鈦金屬', '沙漠鈦金屬'],
      },
      isActive: true,
    },
    {
      name: 'iPhone 16 Plus',
      brandId: brandMap['Apple'],
      officialPrice: '30900',
      sitePrice: '29900',
      imageUrl: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-16-finish-select-202409-6-7inch-ultramarine?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1725502771820',
      popularity: 95,
      specs: {
        size: '6.7 吋',
        weight: '199g',
        cpu: 'Apple A18',
        memory: '8GB',
        storage: '128GB / 256GB / 512GB',
        display: 'Super Retina XDR OLED',
        camera: '主相機 48MP + 超廣角 12MP',
        battery: '4674mAh',
        colors: ['超海洋藍', '粉紅色', '白色', '黑色', '靛藍'],
      },
      isActive: true,
    },
    {
      name: 'iPhone 16',
      brandId: brandMap['Apple'],
      officialPrice: '26900',
      sitePrice: '25900',
      imageUrl: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-ultramarine?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1725502771820',
      popularity: 98,
      specs: {
        size: '6.1 吋',
        weight: '170g',
        cpu: 'Apple A18',
        memory: '8GB',
        storage: '128GB / 256GB / 512GB',
        display: 'Super Retina XDR OLED',
        camera: '主相機 48MP + 超廣角 12MP',
        battery: '3561mAh',
        colors: ['超海洋藍', '粉紅色', '白色', '黑色', '靛藍'],
      },
      isActive: true,
    },
    {
      name: 'iPhone 15 Pro Max',
      brandId: brandMap['Apple'],
      officialPrice: '42900',
      sitePrice: '39900',
      imageUrl: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692846702945',
      popularity: 92,
      specs: {
        size: '6.7 吋',
        weight: '221g',
        cpu: 'Apple A17 Pro',
        memory: '8GB',
        storage: '256GB / 512GB / 1TB',
        display: 'Super Retina XDR OLED, 120Hz',
        camera: '主相機 48MP + 超廣角 12MP + 長焦 12MP (5x)',
        battery: '4441mAh',
        colors: ['自然鈦金屬', '黑鈦金屬', '白鈦金屬', '藍鈦金屬'],
      },
      isActive: true,
    },
    {
      name: 'iPhone 15 Pro',
      brandId: brandMap['Apple'],
      officialPrice: '33900',
      sitePrice: '31900',
      imageUrl: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692846699311',
      popularity: 90,
      specs: {
        size: '6.1 吋',
        weight: '187g',
        cpu: 'Apple A17 Pro',
        memory: '8GB',
        storage: '128GB / 256GB / 512GB / 1TB',
        display: 'Super Retina XDR OLED, 120Hz',
        camera: '主相機 48MP + 超廣角 12MP + 長焦 12MP (3x)',
        battery: '3274mAh',
        colors: ['自然鈦金屬', '黑鈦金屬', '白鈦金屬', '藍鈦金屬'],
      },
      isActive: true,
    },
    {
      name: 'iPhone 15',
      brandId: brandMap['Apple'],
      officialPrice: '24900',
      sitePrice: '22900',
      imageUrl: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923774490',
      popularity: 88,
      specs: {
        size: '6.1 吋',
        weight: '171g',
        cpu: 'Apple A16 Bionic',
        memory: '6GB',
        storage: '128GB / 256GB / 512GB',
        display: 'Super Retina XDR OLED',
        camera: '主相機 48MP + 超廣角 12MP',
        battery: '3349mAh',
        colors: ['藍色', '粉紅色', '黃色', '綠色', '黑色'],
      },
      isActive: true,
    },
    {
      name: 'iPhone 14',
      brandId: brandMap['Apple'],
      officialPrice: '21900',
      sitePrice: '19900',
      imageUrl: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027931771',
      popularity: 82,
      specs: {
        size: '6.1 吋',
        weight: '172g',
        cpu: 'Apple A15 Bionic',
        memory: '6GB',
        storage: '128GB / 256GB / 512GB',
        display: 'Super Retina XDR OLED',
        camera: '主相機 12MP + 超廣角 12MP',
        battery: '3279mAh',
        colors: ['藍色', '紫色', '午夜色', '星光色', '紅色'],
      },
      isActive: true,
    },

    // Samsung Galaxy 系列 (Top 9-15)
    {
      name: 'Samsung Galaxy S25 Ultra',
      brandId: brandMap['Samsung'],
      officialPrice: '42900',
      sitePrice: '40900',
      imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/tw/2501/gallery/tw-galaxy-s25-ultra-sm-s938-sm-s9380tkabri-thumb-551534992',
      popularity: 97,
      specs: {
        size: '6.9 吋',
        weight: '233g',
        cpu: 'Snapdragon 8 Gen 4',
        memory: '12GB / 16GB',
        storage: '256GB / 512GB / 1TB',
        display: 'Dynamic AMOLED 2X, 120Hz',
        camera: '主相機 200MP + 超廣角 12MP + 長焦 50MP (5x) + 長焦 10MP (3x)',
        battery: '5000mAh',
        colors: ['鈦金灰', '鈦金黑', '鈦金紫', '鈦金黃'],
      },
      isActive: true,
    },
    {
      name: 'Samsung Galaxy S24 Ultra',
      brandId: brandMap['Samsung'],
      officialPrice: '41900',
      sitePrice: '38900',
      imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/tw/2401/gallery/tw-galaxy-s24-s928-sm-s928bzkgtgy-thumb-539461246',
      popularity: 96,
      specs: {
        size: '6.8 吋',
        weight: '232g',
        cpu: 'Snapdragon 8 Gen 3',
        memory: '12GB',
        storage: '256GB / 512GB / 1TB',
        display: 'Dynamic AMOLED 2X, 120Hz',
        camera: '主相機 200MP + 超廣角 12MP + 長焦 50MP (5x) + 長焦 10MP (3x)',
        battery: '5000mAh',
        colors: ['鈦金灰', '鈦金黑', '鈦金紫', '鈦金黃'],
      },
      isActive: true,
    },
    {
      name: 'Samsung Galaxy S24',
      brandId: brandMap['Samsung'],
      officialPrice: '26900',
      sitePrice: '24900',
      imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/tw/2401/gallery/tw-galaxy-s24-s921-sm-s921blbctgy-thumb-539458581',
      popularity: 89,
      specs: {
        size: '6.2 吋',
        weight: '167g',
        cpu: 'Exynos 2400 / Snapdragon 8 Gen 3',
        memory: '8GB',
        storage: '128GB / 256GB',
        display: 'Dynamic AMOLED 2X, 120Hz',
        camera: '主相機 50MP + 超廣角 12MP + 長焦 10MP (3x)',
        battery: '4000mAh',
        colors: ['琥珀黃', '曜岩黑', '大理紫', '鈷藍'],
      },
      isActive: true,
    },
    {
      name: 'Samsung Galaxy A55 5G',
      brandId: brandMap['Samsung'],
      officialPrice: '13990',
      sitePrice: '12990',
      imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/tw/2403/gallery/tw-galaxy-a55-5g-sm-a556-sm-a5560zlgtgy-thumb-540802829',
      popularity: 93,
      specs: {
        size: '6.6 吋',
        weight: '213g',
        cpu: 'Exynos 1480',
        memory: '8GB / 12GB',
        storage: '128GB / 256GB',
        display: 'Super AMOLED, 120Hz',
        camera: '主相機 50MP + 超廣角 12MP + 微距 5MP',
        battery: '5000mAh',
        colors: ['冰藍', '深藍', '淺紫'],
      },
      isActive: true,
    },
    {
      name: 'Samsung Galaxy A56 5G',
      brandId: brandMap['Samsung'],
      officialPrice: '14990',
      sitePrice: '13990',
      imageUrl: 'https://images.samsung.com/is/image/samsung/assets/tw/smartphones/galaxy-a56-5g/buy/product_color_icy_blue.png',
      popularity: 91,
      specs: {
        size: '6.7 吋',
        weight: '192g',
        cpu: 'Exynos 1580',
        memory: '8GB / 12GB',
        storage: '128GB / 256GB',
        display: 'Super AMOLED, 120Hz',
        camera: '主相機 50MP + 超廣角 12MP + 微距 5MP',
        battery: '5000mAh',
        colors: ['冰藍', '深藍', '淺紫'],
      },
      isActive: true,
    },
    {
      name: 'Samsung Galaxy A16 5G',
      brandId: brandMap['Samsung'],
      officialPrice: '6990',
      sitePrice: '6490',
      imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/tw/2410/gallery/tw-galaxy-a16-5g-sm-a166-sm-a166elbgtgy-thumb-543747124',
      popularity: 85,
      specs: {
        size: '6.7 吋',
        weight: '192g',
        cpu: 'MediaTek Dimensity 6300',
        memory: '8GB',
        storage: '128GB / 256GB',
        display: 'Super AMOLED, 90Hz',
        camera: '主相機 50MP + 超廣角 5MP + 微距 2MP',
        battery: '5000mAh',
        colors: ['金', '淺綠', '深藍'],
      },
      isActive: true,
    },

    // Google Pixel 系列 (Top 16-18)
    {
      name: 'Google Pixel 9 Pro',
      brandId: brandMap['Google'],
      officialPrice: '33900',
      sitePrice: '31900',
      imageUrl: 'https://lh3.googleusercontent.com/YJFhpDLbYIuTp17wURqS2Ny6_KREr_9yy0eqh9O5xEBXOiSBZRwuTz8MZcTlcKxnRDl4_nSxYJKCdNz5J0KqwXR8eOTqpbJrQmQbpw',
      popularity: 87,
      specs: {
        size: '6.3 吋',
        weight: '199g',
        cpu: 'Google Tensor G4',
        memory: '16GB',
        storage: '128GB / 256GB / 512GB',
        display: 'LTPO OLED, 120Hz',
        camera: '主相機 50MP + 超廣角 48MP + 長焦 48MP (5x)',
        battery: '4700mAh',
        colors: ['曜石黑', '瓷白', '榛果棕', '玫瑰粉'],
      },
      isActive: true,
    },
    {
      name: 'Google Pixel 9',
      brandId: brandMap['Google'],
      officialPrice: '26900',
      sitePrice: '24900',
      imageUrl: 'https://lh3.googleusercontent.com/P_cL4vPWz28ZIr5b8RjOw8FiRKqXJfWKABnECXb7Ea8aZ0G6p4mNkXvvUXYOBJlWR4_DWHpXMPzYg04pKmKYpyTCCkBvP3MKjw',
      popularity: 84,
      specs: {
        size: '6.3 吋',
        weight: '198g',
        cpu: 'Google Tensor G4',
        memory: '12GB',
        storage: '128GB / 256GB',
        display: 'OLED, 120Hz',
        camera: '主相機 50MP + 超廣角 48MP',
        battery: '4700mAh',
        colors: ['曜石黑', '瓷白', '榛果棕', '冬青綠'],
      },
      isActive: true,
    },
    {
      name: 'Google Pixel 8 Pro',
      brandId: brandMap['Google'],
      officialPrice: '31900',
      sitePrice: '28900',
      imageUrl: 'https://lh3.googleusercontent.com/2CwFgXg7H2mVDqMQqrPpEfKOYrWBDK2LhJKO3yXgQJPE2LIQmqG84JFWZ9hZ8JOXpGCGH9Ww3cCp1RK8kS8BnFZVxZ6j6wQKCg',
      popularity: 80,
      specs: {
        size: '6.7 吋',
        weight: '213g',
        cpu: 'Google Tensor G3',
        memory: '12GB',
        storage: '128GB / 256GB / 512GB',
        display: 'LTPO OLED, 120Hz',
        camera: '主相機 50MP + 超廣角 48MP + 長焦 48MP (5x)',
        battery: '5050mAh',
        colors: ['曜石黑', '瓷白', '天空藍'],
      },
      isActive: true,
    },

    // Xiaomi 小米系列 (Top 19-20)
    {
      name: 'Xiaomi 14 Ultra',
      brandId: brandMap['Xiaomi'],
      officialPrice: '36999',
      sitePrice: '34999',
      imageUrl: 'https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-14-ultra/pc/black.png',
      popularity: 78,
      specs: {
        size: '6.73 吋',
        weight: '219.8g',
        cpu: 'Snapdragon 8 Gen 3',
        memory: '16GB',
        storage: '512GB / 1TB',
        display: 'AMOLED, 120Hz',
        camera: 'Leica 四鏡頭 50MP (主) + 50MP (超廣角) + 50MP (3.2x) + 50MP (5x)',
        battery: '5000mAh',
        colors: ['黑色', '白色', '藍色'],
      },
      isActive: true,
    },
    {
      name: 'Xiaomi 14',
      brandId: brandMap['Xiaomi'],
      officialPrice: '24999',
      sitePrice: '22999',
      imageUrl: 'https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-14/pc/black.png',
      popularity: 75,
      specs: {
        size: '6.36 吋',
        weight: '193g',
        cpu: 'Snapdragon 8 Gen 3',
        memory: '12GB',
        storage: '256GB / 512GB',
        display: 'AMOLED, 120Hz',
        camera: 'Leica 三鏡頭 50MP (主) + 50MP (超廣角) + 50MP (3.2x)',
        battery: '4610mAh',
        colors: ['黑色', '白色', '綠色'],
      },
      isActive: true,
    },
  ]).returning()

  console.log(`已新增 ${phoneData.length} 支手機`)

  // 4. 新增評測影片資料（為前 10 名手機新增評測）
  console.log('新增評測影片資料...')
  const reviewsData = [
    // iPhone 16 Pro Max
    {
      phoneId: phoneData[0].id,
      platform: 'YouTube',
      title: 'iPhone 16 Pro Max 完整評測！最強旗艦機？',
      url: 'https://www.youtube.com/watch?v=example1',
      thumbnail: 'https://i.ytimg.com/vi/example1/maxresdefault.jpg',
    },
    {
      phoneId: phoneData[0].id,
      platform: 'YouTube',
      title: 'iPhone 16 Pro Max vs Samsung S24 Ultra 拍照對決',
      url: 'https://www.youtube.com/watch?v=example2',
      thumbnail: 'https://i.ytimg.com/vi/example2/maxresdefault.jpg',
    },
    // iPhone 16 Pro
    {
      phoneId: phoneData[1].id,
      platform: 'YouTube',
      title: 'iPhone 16 Pro 開箱！A18 Pro 性能測試',
      url: 'https://www.youtube.com/watch?v=example3',
      thumbnail: 'https://i.ytimg.com/vi/example3/maxresdefault.jpg',
    },
    // Samsung Galaxy S25 Ultra
    {
      phoneId: phoneData[8].id,
      platform: 'YouTube',
      title: 'Galaxy S25 Ultra 完整評測！200MP 相機實測',
      url: 'https://www.youtube.com/watch?v=example4',
      thumbnail: 'https://i.ytimg.com/vi/example4/maxresdefault.jpg',
    },
    {
      phoneId: phoneData[8].id,
      platform: 'YouTube',
      title: 'S25 Ultra S Pen 功能全解析',
      url: 'https://www.youtube.com/watch?v=example5',
      thumbnail: 'https://i.ytimg.com/vi/example5/maxresdefault.jpg',
    },
    // Samsung Galaxy S24 Ultra
    {
      phoneId: phoneData[9].id,
      platform: 'YouTube',
      title: 'Galaxy S24 Ultra AI 功能深度體驗',
      url: 'https://www.youtube.com/watch?v=example6',
      thumbnail: 'https://i.ytimg.com/vi/example6/maxresdefault.jpg',
    },
    // Google Pixel 9 Pro
    {
      phoneId: phoneData[16].id,
      platform: 'YouTube',
      title: 'Pixel 9 Pro AI 拍照實測！夜拍無敵',
      url: 'https://www.youtube.com/watch?v=example7',
      thumbnail: 'https://i.ytimg.com/vi/example7/maxresdefault.jpg',
    },
  ]

  await db.insert(reviews).values(reviewsData)
  console.log(`已新增 ${reviewsData.length} 則評測影片`)

  console.log('✅ 資料庫初始化完成！')
  console.log(`\n統計資訊：`)
  console.log(`- 品牌數：${brandData.length}`)
  console.log(`- 手機數：${phoneData.length}`)
  console.log(`- 評測數：${reviewsData.length}`)
}

// 執行初始化
seedDatabase()
  .then(() => {
    console.log('\n🎉 資料庫初始化成功！')
    process.exit(0)
  })
  .catch((error) => {
    console.error('❌ 資料庫初始化失敗：', error)
    process.exit(1)
  })
