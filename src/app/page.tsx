'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Phone {
  id: number
  name: string
  brand: string
  sitePrice: string
  imageUrl: string
  popularity: number
}

const brands = ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'ASUS', '其他']

// 為每個品牌映射到 Unsplash 圖片
const brandImageMap: { [key: string]: string } = {
  Apple: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=500&h=500&fit=crop&q=80',
  Samsung: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop&q=80',
  Google: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop&q=80',
  OnePlus: 'https://images.unsplash.com/photo-1511240992697-4f88f8c7c1a8?w=500&h=500&fit=crop&q=80',
  Xiaomi: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=500&fit=crop&q=80',
  ASUS: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=500&fit=crop&q=80',
}

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
  const [phones, setPhones] = useState<Phone[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPhones() {
      try {
        const url = selectedBrand
          ? `/api/phones?brand=${encodeURIComponent(selectedBrand)}`
          : '/api/phones'
        const response = await fetch(url)
        const data = await response.json()
        setPhones(data)
      } catch (error) {
        console.error('載入手機資料失敗:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPhones()
  }, [selectedBrand])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-3xl font-bold text-gray-900">MobileWeb</h1>
          <p className="text-gray-600">全台灣最完整的手機產品資訊和比較平台</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-4 py-4">
            <button
              onClick={() => setSelectedBrand(null)}
              className={`px-4 py-2 font-medium whitespace-nowrap rounded ${
                selectedBrand === null
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              首頁
            </button>
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-4 py-2 font-medium whitespace-nowrap rounded ${
                  selectedBrand === brand
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          {selectedBrand ? `${selectedBrand} 手機` : '本月熱門手機 Top 20'}
        </h2>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">載入中...</p>
          </div>
        ) : phones.length === 0 ? (
          <p className="text-gray-600 text-center py-12">
            {selectedBrand ? `暫無 ${selectedBrand} 的手機資訊` : '暫無手機資訊'}
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {phones.map((phone, index) => (
              <Link
                key={phone.id}
                href={`/phone/${phone.id}`}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square relative bg-gray-100 overflow-hidden group">
                  <img
                    src={brandImageMap[phone.brand] || 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=500&fit=crop&q=80'}
                    alt={phone.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  {!selectedBrand && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      #{index + 1}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {phone.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{phone.brand}</p>
                  <p className="text-2xl font-bold text-blue-600">
                    ${parseFloat(phone.sitePrice).toLocaleString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
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
