-- MobileWeb 資料庫初始化 SQL
-- 在 Neon SQL 編輯器中執行此文件中的所有 SQL 命令

-- 1. 創建 brands 表（手機品牌）
CREATE TABLE IF NOT EXISTS brands (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  logo TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. 創建 phones 表（手機型號）
CREATE TABLE IF NOT EXISTS phones (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  brand_id INTEGER NOT NULL REFERENCES brands(id),
  official_price NUMERIC(10, 2),
  site_price NUMERIC(10, 2) NOT NULL,
  image_url TEXT,
  specs JSONB,
  popularity INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. 創建 reviews 表（評測影片）
CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  phone_id INTEGER NOT NULL REFERENCES phones(id),
  platform VARCHAR(50) NOT NULL,
  title VARCHAR(255) NOT NULL,
  url TEXT NOT NULL,
  thumbnail TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. 創建索引以提高查詢性能
CREATE INDEX IF NOT EXISTS idx_phones_brand_id ON phones(brand_id);
CREATE INDEX IF NOT EXISTS idx_phones_popularity ON phones(popularity DESC);
CREATE INDEX IF NOT EXISTS idx_phones_is_active ON phones(is_active);
CREATE INDEX IF NOT EXISTS idx_reviews_phone_id ON reviews(phone_id);

-- 完成！三個表已創建
