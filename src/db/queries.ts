import { db } from './index'
import { phones, brands, reviews } from './schema'
import { eq, desc } from 'drizzle-orm'

/**
 * 取得本月熱門手機 Top N
 */
export async function getTopPhones(count: number = 20) {
  return await db
    .select({
      id: phones.id,
      name: phones.name,
      brand: brands.name,
      sitePrice: phones.sitePrice,
      imageUrl: phones.imageUrl,
      popularity: phones.popularity,
    })
    .from(phones)
    .innerJoin(brands, eq(phones.brandId, brands.id))
    .where(eq(phones.isActive, true))
    .orderBy(desc(phones.popularity))
    .limit(count)
}

/**
 * 根據品牌取得所有手機
 */
export async function getPhonesByBrand(brandName: string) {
  return await db
    .select({
      id: phones.id,
      name: phones.name,
      brand: brands.name,
      sitePrice: phones.sitePrice,
      imageUrl: phones.imageUrl,
      popularity: phones.popularity,
    })
    .from(phones)
    .innerJoin(brands, eq(phones.brandId, brands.id))
    .where(eq(brands.name, brandName))
    .orderBy(desc(phones.popularity))
}

/**
 * 取得單個手機的詳細資訊
 */
export async function getPhoneDetails(phoneId: number) {
  const phoneData = await db
    .select({
      id: phones.id,
      name: phones.name,
      brandName: brands.name,
      officialPrice: phones.officialPrice,
      sitePrice: phones.sitePrice,
      imageUrl: phones.imageUrl,
      specs: phones.specs,
    })
    .from(phones)
    .innerJoin(brands, eq(phones.brandId, brands.id))
    .where(eq(phones.id, phoneId))

  if (!phoneData.length) return null

  const phoneReviews = await db
    .select({
      platform: reviews.platform,
      title: reviews.title,
      url: reviews.url,
      thumbnail: reviews.thumbnail,
    })
    .from(reviews)
    .where(eq(reviews.phoneId, phoneId))

  return {
    ...phoneData[0],
    reviews: phoneReviews,
  }
}

/**
 * 取得所有品牌
 */
export async function getAllBrands() {
  return await db.select({ name: brands.name }).from(brands)
}
