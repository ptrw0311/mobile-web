import { NextResponse } from 'next/server'

/**
 * 健康檢查端點
 * 用於測試應用程式是否正常運行
 */
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    message: 'MobileWeb API 運行正常',
    env: {
      nodeEnv: process.env.NODE_ENV,
      hasPostgresUrl: !!process.env.POSTGRES_URL,
    }
  })
}
