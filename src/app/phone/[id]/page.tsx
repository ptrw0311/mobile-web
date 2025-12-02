'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

interface PhoneDetails {
  id: string
  name: string
  brand: string
  price: number
  officialPrice: number
  image: string
  specs: {
    size: string
    weight: string
    cpu: string
    memory: string
    storage: string
    display: string
    camera: string
    battery: string
  }
  reviews: Array<{
    platform: string
    title: string
    url: string
  }>
}

// 暫時的模擬資料
const mockPhoneDetails: Record<string, PhoneDetails> = {
  '1': {
    id: '1',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    price: 35990,
    officialPrice: 36990,
    image: 'https://via.placeholder.com/400x400?text=iPhone+15+Pro',
    specs: {
      size: '159.9 x 77.8 x 8.25 mm',
      weight: '240g',
      cpu: 'Apple A17 Pro',
      memory: '8GB LPDDR5X',
      storage: '256GB / 512GB / 1TB',
      display: '6.7 吋 Super Retina XDR',
      camera: '主相機 48MP, 超廣角 12MP, 長焦 12MP',
      battery: '4,323 mAh',
    },
    reviews: [
      {
        platform: 'YouTube',
        title: 'iPhone 15 Pro Max 完整評測',
        url: '#',
      },
      {
        platform: 'Facebook',
        title: 'iPhone 15 Pro Max 開箱',
        url: '#',
      },
    ],
  },
}

export default function PhonePage() {
  const params = useParams()
  const id = params.id as string
  const phone = mockPhoneDetails[id]

  if (!phone) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">手機未找到</h1>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            返回首頁
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-blue-600 hover:text-blue-700 mb-4">
            ← 返回首頁
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">{phone.name}</h1>
          <p className="text-gray-600">{phone.brand}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image and Price */}
          <div>
            <div className="bg-white rounded-lg shadow p-8 mb-6">
              <img
                src={phone.image}
                alt={phone.name}
                className="w-full h-auto mb-6"
              />
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 text-sm">官方建議售價</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ${phone.officialPrice.toLocaleString()}
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded">
                  <p className="text-gray-600 text-sm">本站售價</p>
                  <p className="text-3xl font-bold text-blue-600">
                    ${phone.price.toLocaleString()}
                  </p>
                  <p className="text-green-600 text-sm mt-2">
                    省 ${(phone.officialPrice - phone.price).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Specs */}
          <div>
            <div className="bg-white rounded-lg shadow p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">規格參數</h2>
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <p className="text-gray-600 text-sm">尺寸</p>
                  <p className="text-gray-900 font-semibold">
                    {phone.specs.size}
                  </p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-gray-600 text-sm">重量</p>
                  <p className="text-gray-900 font-semibold">
                    {phone.specs.weight}
                  </p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-gray-600 text-sm">處理器</p>
                  <p className="text-gray-900 font-semibold">
                    {phone.specs.cpu}
                  </p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-gray-600 text-sm">記憶體</p>
                  <p className="text-gray-900 font-semibold">
                    {phone.specs.memory}
                  </p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-gray-600 text-sm">儲存空間</p>
                  <p className="text-gray-900 font-semibold">
                    {phone.specs.storage}
                  </p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-gray-600 text-sm">顯示屏</p>
                  <p className="text-gray-900 font-semibold">
                    {phone.specs.display}
                  </p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-gray-600 text-sm">相機</p>
                  <p className="text-gray-900 font-semibold">
                    {phone.specs.camera}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">電池容量</p>
                  <p className="text-gray-900 font-semibold">
                    {phone.specs.battery}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">網路評測</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {phone.reviews.map((review, index) => (
              <a
                key={index}
                href={review.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border rounded-lg hover:bg-gray-50 transition"
              >
                <p className="text-sm font-semibold text-gray-600">
                  {review.platform}
                </p>
                <p className="text-lg font-semibold text-gray-900 mt-2">
                  {review.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-400">
            &copy; 2024 MobileWeb. 所有權利保留。
          </p>
        </div>
      </footer>
    </div>
  )
}
