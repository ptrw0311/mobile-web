import {
  pgTable,
  serial,
  text,
  varchar,
  numeric,
  integer,
  timestamp,
  jsonb,
  boolean,
} from 'drizzle-orm/pg-core'

/**
 * 手機品牌表
 */
export const brands = pgTable('brands', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique(),
  description: text('description'),
  logo: text('logo'),
  createdAt: timestamp('created_at').defaultNow(),
})

/**
 * 手機型號表
 */
export const phones = pgTable('phones', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  brandId: integer('brand_id')
    .notNull()
    .references(() => brands.id),
  // 價格
  officialPrice: numeric('official_price', { precision: 10, scale: 2 }),
  sitePrice: numeric('site_price', { precision: 10, scale: 2 }).notNull(),
  // 圖片
  imageUrl: text('image_url'),
  // 規格參數
  specs: jsonb('specs').$type<{
    size?: string
    weight?: string
    cpu?: string
    memory?: string
    storage?: string
    display?: string
    camera?: string
    battery?: string
    colors?: string[]
  }>(),
  // 熱度排名（用於首頁展示）
  popularity: integer('popularity').default(0),
  // 狀態
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

/**
 * 評測影片表
 */
export const reviews = pgTable('reviews', {
  id: serial('id').primaryKey(),
  phoneId: integer('phone_id')
    .notNull()
    .references(() => phones.id),
  platform: varchar('platform', { length: 50 }).notNull(), // YouTube, Facebook, Instagram
  title: varchar('title', { length: 255 }).notNull(),
  url: text('url').notNull(),
  thumbnail: text('thumbnail'),
  createdAt: timestamp('created_at').defaultNow(),
})
