'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Phone {
  id: string
  name: string
  brand: string
  price: number
  image: string
  popularity: number
}

// 暫時的模擬資料
const mockPhones: Phone[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    price: 35990,
    image: 'https://via.placeholder.com/300x300?text=iPhone+15+Pro',
    popularity: 1,
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 31990,
    image: 'https://via.placeholder.com/300x300?text=Galaxy+S24',
    popularity: 2,
  },
  {
    id: '3',
    name: 'Google Pixel 8 Pro',
    brand: 'Google',
    price: 26990,
    image: 'https://via.placeholder.com/300x300?text=Pixel+8+Pro',
    popularity: 3,
  },
]

const brands = ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'ASUS', '其他']

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null)

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
        {selectedBrand === null ? (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              本月熱門手機 Top 20
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockPhones.map((phone) => (
                <Link
                  key={phone.id}
                  href={`/phone/${phone.id}`}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square relative bg-gray-200">
                    <img
                      src={phone.image}
                      alt={phone.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      #{phone.popularity}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {phone.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{phone.brand}</p>
                    <p className="text-2xl font-bold text-blue-600">
                      ${phone.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {selectedBrand} 手機
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockPhones
                .filter((phone) => phone.brand === selectedBrand)
                .map((phone) => (
                  <Link
                    key={phone.id}
                    href={`/phone/${phone.id}`}
                    className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-square relative bg-gray-200">
                      <img
                        src={phone.image}
                        alt={phone.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {phone.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {phone.brand}
                      </p>
                      <p className="text-2xl font-bold text-blue-600">
                        ${phone.price.toLocaleString()}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
            {mockPhones.filter((phone) => phone.brand === selectedBrand)
              .length === 0 && (
              <p className="text-gray-600 text-center py-12">
                暫無 {selectedBrand} 的手機資訊
              </p>
            )}
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
