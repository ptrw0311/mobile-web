import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MobileWeb - 手機選購指南',
  description: '全台灣最完整的手機產品資訊和比較平台',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-Hant">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  )
}
