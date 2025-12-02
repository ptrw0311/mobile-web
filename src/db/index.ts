import { drizzle } from 'drizzle-orm/vercel-postgres'
import { sql } from '@vercel/postgres'

/**
 * 資料庫連接 - 使用 Vercel Postgres (Neon)
 */
export const db = drizzle(sql)
