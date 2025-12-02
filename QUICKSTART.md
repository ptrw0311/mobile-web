# MobileWeb 快速開始指南

## 5 分鐘快速設定

### 1️⃣ 安裝依賴

```bash
npm install
```

### 2️⃣ 設定環境變數

複製 `.env.local.example` 為 `.env.local`：

```bash
cp .env.local.example .env.local
```

編輯 `.env.local` 填入你的資料庫連接：

```
POSTGRES_URL=postgresql://user:password@host/database
```

### 3️⃣ 初始化資料庫 (如果已有 Neon 資料庫)

```bash
npm run db:push
```

### 4️⃣ 啟動開發服務器

```bash
npm run dev
```

訪問 [http://localhost:3000](http://localhost:3000)

---

## 📋 快速命令參考

| 命令 | 用途 |
|------|------|
| `npm run dev` | 啟動開發服務器 |
| `npm run build` | 構建生產版本 |
| `npm start` | 運行生產版本 |
| `npm run type-check` | 檢查 TypeScript 類型 |
| `npm run db:push` | 推送資料庫遷移 |
| `npm run db:studio` | 打開 Drizzle Studio |

---

## 🗂️ 重要檔案位置

- **首頁**: `src/app/page.tsx`
- **詳細頁**: `src/app/phone/[id]/page.tsx`
- **資料庫 Schema**: `src/db/schema.ts`
- **資料庫查詢**: `src/db/queries.ts`
- **API 端點**: `src/app/api/`
- **樣式設定**: `tailwind.config.ts`

---

## 🚀 部署到 Vercel

1. 推送代碼到 GitHub
2. 在 vercel.com 連接倉庫
3. 設定環境變數 `POSTGRES_URL`
4. 點擊部署

---

## ❓ 常見問題

**Q: 如何新增新手機?**
A: 連接資料庫後，在 `brands` 表新增品牌，在 `phones` 表新增手機記錄。

**Q: 如何修改首頁排序?**
A: 編輯 `src/db/queries.ts` 中的 `getTopPhones()` 函數，改變排序條件。

**Q: 如何新增新品牌?**
A: 在 `src/app/page.tsx` 中的 `brands` 陣列新增品牌名稱，同時在資料庫中新增對應記錄。

---

**📚 詳見**: [README.md](README.md) | [CLAUDE.md](CLAUDE.md)
