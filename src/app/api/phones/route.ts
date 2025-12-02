import { NextRequest, NextResponse } from 'next/server'
import { getTopPhones, getPhonesByBrand } from '@/db/queries'

/**
 * GET /api/phones
 * 取得手機列表
 * query: brand? - 品牌篩選
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const brand = searchParams.get('brand')

    let phones

    if (brand) {
      phones = await getPhonesByBrand(brand)
    } else {
      phones = await getTopPhones(20)
    }

    return NextResponse.json({
      success: true,
      data: phones,
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      {
        success: false,
        error: '取得手機列表失敗',
      },
      { status: 500 }
    )
  }
}
