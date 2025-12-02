import { NextResponse } from 'next/server'
import { getAllBrands } from '@/db/queries'

/**
 * GET /api/brands
 * 取得所有品牌列表
 */
export async function GET() {
  try {
    const brands = await getAllBrands()

    return NextResponse.json({
      success: true,
      data: brands,
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      {
        success: false,
        error: '取得品牌列表失敗',
      },
      { status: 500 }
    )
  }
}
