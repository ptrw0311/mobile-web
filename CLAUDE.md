# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 專案概述

**MobileWeb** 是一個手機電商瀏覽網站，提供全台灣市面上所有手機的產品資料、規格參數、售價對比和網路評測資訊。

### 核心功能

1. **首頁**：展示本月熱門手機 Top 20
2. **品牌頁面**：按品牌篩選展示手機列表
3. **手機詳細頁**：顯示完整規格參數、價格對比、評測影片連結

## 技術堆疊

- **框架**: Next.js 15 (App Router) + React 19 + TypeScript
- **樣式**: Tailwind CSS + PostCSS
- **資料庫**: PostgreSQL on Neon + Drizzle ORM
- **部署**: Vercel + Neon
- **版本控制**: GitHub (Public Repo)

## 開發指南

### 常用命令

```bash
npm install                    # 安裝依賴
npm run dev                    # 啟動開發服務器 (http://localhost:3000)
npm run build                  # 構建生產版本
npm start                      # 運行生產版本
npm run type-check             # TypeScript 類型檢查
npm run db:push               # 推送資料庫遷移到 Neon
npm run db:studio             # 打開 Drizzle Studio 管理資料庫
```

### 環境變數

在 `.env.local` 中配置（參考 `.env.local.example`）：

```
POSTGRES_URL=postgresql://...    # Neon 資料庫連接字符串 (必需)
VERCEL_URL=...                   # Vercel 部署 URL
NEXT_PUBLIC_API_URL=...          # 前端 API 基址
```

## 代碼架構

### 目錄結構

```
MobileWeb/
├── src/
│   ├── app/                           # Next.js App Router (13+)
│   │   ├── layout.tsx                 # 根佈局，包含 metadata
│   │   ├── page.tsx                   # 首頁 (ClientComponent)
│   │   │                              # - 列出本月熱門 20 手機
│   │   │                              # - 品牌導航和篩選
│   │   ├── globals.css                # Tailwind 全局樣式
│   │   ├── phone/
│   │   │   └── [id]/
│   │   │       └── page.tsx           # 手機詳細頁 (ClientComponent)
│   │   │                              # - 顯示規格、價格、評測
│   │   └── api/
│   │       ├── phones/
│   │       │   ├── route.ts           # GET /api/phones
│   │       │   │                      # - ?brand=xxx 品牌篩選
│   │       │   └── [id]/route.ts      # GET /api/phones/[id]
│   │       └── brands/route.ts        # GET /api/brands
│   │
│   └── db/
│       ├── index.ts                   # Drizzle DB 連接實例
│       ├── schema.ts                  # Drizzle ORM schema 定義
│       │                              # - brands 表：品牌資訊
│       │                              # - phones 表：手機型號、規格、價格
│       │                              # - reviews 表：評測影片連結
│       ├── queries.ts                 # 資料庫查詢函數
│       │                              # - getTopPhones(count)
│       │                              # - getPhonesByBrand(name)
│       │                              # - getPhoneDetails(id)
│       │                              # - getAllBrands()
│       └── migrations/                # Drizzle 自動生成的遷移檔案
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── drizzle.config.ts
├── next.config.js
├── .env.local.example
├── .gitignore
├── README.md                          # 專案文檔
└── CLAUDE.md                          # 本檔案
```

### 關鍵檔案說明

#### 資料庫層 (`src/db/`)

**schema.ts (src/db/schema.ts:1-66)**
- 定義三個 PostgreSQL 表：brands、phones、reviews
- 使用 Drizzle ORM 的 `pgTable` 定義表結構
- `phones` 表包含規格、價格、圖片、熱度等欄位
- `specs` 欄位使用 JSONB 存儲靈活的規格數據

**queries.ts (src/db/queries.ts)**
- 所有資料庫查詢邏輯在此集中定義
- 提供高層次的查詢函數供 API 和 Server Components 使用
- 使用 Drizzle ORM 的 `eq`, `desc` 等操作符

**index.ts (src/db/index.ts)**
- 初始化 Drizzle ORM 連接
- 使用 Vercel Postgres 驅動連接 Neon 資料庫

#### 前端頁面

**首頁 (src/app/page.tsx)**
- Client Component (`'use client'`)
- 顯示熱門手機卡片網格 (Tailwind Grid)
- 品牌導航選項卡
- 根據選擇的品牌篩選顯示內容

**詳細頁 (src/app/phone/[id]/page.tsx)**
- Client Component，使用 `useParams()` 獲取手機 ID
- 展示完整規格參數、價格對比
- 列出評測影片連結

#### API 路由

**GET /api/phones**
- 可選查詢參數：`brand`（品牌名稱篩選）
- 返回手機列表，按熱度排序

**GET /api/phones/[id]**
- 動態路由，返回單個手機的詳細資訊
- 包含關聯的評測影片

**GET /api/brands**
- 返回所有品牌列表

## 常見開發任務

### 新增手機資料

1. 連接 Neon 資料庫後，在 Drizzle Studio 中或通過 API 新增資料
2. 在 `brands` 表中確保品牌存在
3. 在 `phones` 表中新增手機記錄，包含規格 (JSON)
4. 在 `reviews` 表中關聯評測影片連結

### 修改規格字段

1. 編輯 `src/db/schema.ts` 中的 `specs` JSONB 定義
2. 運行 `npm run db:push` 推送遷移
3. 更新顯示規格的組件 (詳細頁面)

### 新增頁面

1. 在 `src/app/` 中創建新的路由文件夾和 `page.tsx`
2. 如需資料庫查詢，在 `src/db/queries.ts` 添加查詢函數
3. 如需 API，在 `src/app/api/` 中創建相應的 route 檔案

### 樣式調整

- 使用 Tailwind CSS 的 utility classes
- 編輯 `tailwind.config.ts` 以自定義設計 tokens
- 全局樣式在 `src/app/globals.css` 中

## 部署流程

### 前置條件

1. GitHub 帳號 (Public Repo)
2. Vercel 帳號 (連接 GitHub)
3. Neon 帳號 (PostgreSQL 服務)

### 部署步驟

1. **將代碼推送到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/MobileWeb
   git push -u origin main
   ```

2. **在 Vercel 部署**
   - 訪問 vercel.com，連接 GitHub 帳號
   - 選擇 MobileWeb 倉庫導入
   - 配置環境變數 `POSTGRES_URL`
   - 點擊 Deploy

3. **初始化資料庫**
   - 在 Neon 創建 PostgreSQL 資料庫
   - 複製連接字符串到 `.env.local`
   - 運行 `npm run db:push` 初始化表結構
   - 導入手機資料

4. **驗證部署**
   - 訪問 Vercel 提供的 URL
   - 檢查首頁、詳細頁、API 端點是否正常

## 資料來源

參考台灣知名手機資訊網站：
- https://www.sogi.com.tw/
- https://www.jyes.com.tw/

## 注意事項

### 安全性

- `.env.local` 包含敏感信息 (資料庫連接字符串)，禁止提交到 Git
- API 路由返回的資料應經過驗證和清理
- 部署時確保使用 HTTPS

### 性能

- 首頁和品牌頁使用 Client Component 以支持交互篩選
- 詳細頁可考慮使用 Server Component + Suspense 改善載入
- 使用圖片最佳化 (Next.js Image component)

### 資料庫

- 使用 Drizzle ORM 進行所有資料庫操作，避免 SQL 注入
- `specs` 欄位使用 JSONB，確保資料結構一致性
- 定期檢查資料庫備份 (Neon 自動備份)

## 參考文檔

- [Next.js 官方文檔](https://nextjs.org/docs)
- [Drizzle ORM 文檔](https://orm.drizzle.team/)
- [Tailwind CSS 文檔](https://tailwindcss.com/docs)
- [Neon 文檔](https://neon.tech/docs)
- [Vercel 部署指南](https://vercel.com/docs)

---

**最後更新**: 2024-12-02
