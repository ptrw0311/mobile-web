# MobileWeb - 手機選購指南

全台灣最完整的手機產品資訊和比較平台。這個專案提供了一個手機電商瀏覽網站，列出全台灣市面上所有手機的產品資料、規格參數、售價等資訊。

## 功能特色

- 📱 本月熱門手機 Top 20 展示
- 🔍 按品牌篩選手機
- 📊 完整的手機規格參數
- 💰 官方價格與本站售價對比
- 📹 網路評測影片連結
- 🌐 響應式設計，支持各種設備

## 技術堆疊

- **前端框架**: Next.js 15 + React 19
- **樣式**: Tailwind CSS
- **資料庫**: PostgreSQL (Neon)
- **ORM**: Drizzle ORM
- **部署**: Vercel
- **版本控制**: GitHub

## 快速開始

### 環境需求

- Node.js 18+ (建議使用 `uv` 管理 Python 環境相關工具)
- npm/yarn/pnpm

### 安裝依賴

```bash
npm install
# 或
pnpm install
```

### 環境變數設定

複製 `.env.local.example` 為 `.env.local` 並填入你的配置：

```bash
# PostgreSQL 資料庫連接字符串 (Neon)
POSTGRES_URL=postgresql://user:password@host/database

# Vercel 部署
VERCEL_URL=

# API 端點
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 資料庫遷移

首次使用需要執行資料庫遷移：

```bash
npm run db:push
```

### 開發模式

```bash
npm run dev
```

開啟瀏覽器訪問 [http://localhost:3000](http://localhost:3000)

### 構建和部署

```bash
# 構建生產版本
npm run build

# 本地測試生產版本
npm start
```

## 常用命令

| 命令 | 說明 |
|------|------|
| `npm run dev` | 啟動開發服務器 |
| `npm run build` | 構建生產版本 |
| `npm start` | 啟動生產服務器 |
| `npm run type-check` | TypeScript 類型檢查 |
| `npm run db:push` | 推送資料庫遷移 |
| `npm run db:studio` | 打開 Drizzle Studio 資料庫管理介面 |

## 項目結構

```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # 根佈局
│   ├── page.tsx             # 首頁
│   ├── globals.css          # 全局樣式
│   ├── api/                 # API 路由
│   │   ├── phones/          # 手機相關 API
│   │   └── brands/          # 品牌相關 API
│   └── phone/
│       └── [id]/            # 手機詳細頁
└── db/                       # 資料庫相關
    ├── index.ts             # 資料庫連接
    ├── schema.ts            # 資料庫 schema
    └── queries.ts           # 資料庫查詢函數
```

## API 端點

### 手機相關

- `GET /api/phones` - 取得熱門手機列表（支持 `brand` 篩選參數）
- `GET /api/phones/[id]` - 取得手機詳細資訊

### 品牌相關

- `GET /api/brands` - 取得所有品牌列表

## 資料來源

所有手機資料參考自台灣知名手機網站：

- [手機王 (SOGI)](https://www.sogi.com.tw/)
- [手機市集](https://www.jyes.com.tw/)

## 部署指南

### 在 Vercel 上部署

1. 將專案推送到 GitHub (Public Repo)
2. 在 [Vercel 官網](https://vercel.com) 連接你的 GitHub 帳號
3. 選擇此倉庫並部署
4. 配置環境變數：`POSTGRES_URL`（Neon 資料庫連接字符串）
5. 部署完成！

### 資料庫設定 (Neon)

1. 在 [Neon 官網](https://neon.tech) 創建帳號
2. 創建新的資料庫專案
3. 複製連接字符串到 `.env.local` 的 `POSTGRES_URL`
4. 運行 `npm run db:push` 初始化資料表

## 開發注意事項

### 資料庫查詢

所有資料庫查詢都應在 `src/db/queries.ts` 中定義，然後在 API 路由或 Server Components 中使用。

### 組件開發

- 在首頁等需要交互的組件中使用 `'use client'`
- 優先使用 Server Components 來改善性能

### 樣式

使用 Tailwind CSS 編寫樣式，保持命名和結構的一致性。

## 貢獻指南

1. Fork 此倉庫
2. 創建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 授權

MIT License - 詳見 [LICENSE](LICENSE) 文件

## 聯絡方式

如有任何問題或建議，歡迎提出 Issue 或 Pull Request！

---

**最後更新**: 2024 年 12 月
