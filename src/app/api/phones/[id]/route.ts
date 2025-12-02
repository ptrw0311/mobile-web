import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getPhoneDetails } from '@/db/queries'

/**
 * GET /api/phones/[id]
 * 取得手機詳細資訊
 */
export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params
    const phoneId = parseInt(params.id)

    if (isNaN(phoneId)) {
      return NextResponse.json(
        {
          success: false,
          error: '無效的手機 ID',
        },
        { status: 400 }
      )
    }

    const phone = await getPhoneDetails(phoneId)

    if (!phone) {
      return NextResponse.json(
        {
          success: false,
          error: '手機未找到',
        },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: phone,
    })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      {
        success: false,
        error: '取得手機詳細資訊失敗',
      },
      { status: 500 }
    )
  }
}
