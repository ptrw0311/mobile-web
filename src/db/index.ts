import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'

/**
 * 資料庫連接 - 使用 Postgres.js
 */
if (!process.env.POSTGRES_URL) {
  throw new Error('POSTGRES_URL 環境變數未設定')
}

const queryClient = postgres(process.env.POSTGRES_URL)
export const db = drizzle(queryClient)
