'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useCart } from './CartContext'

export default function Header() {
  const { totalItems } = useCart()
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/catalogue?search=${encodeURIComponent(searchTerm.trim())}`)
      setSearchTerm('')
    }
  }

  return (
    <header className="w-full bg-[#333] text-white py-2 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-600">
            <Image 
              src="/images/logo/xango logo 2012.png" 
              alt="Xango Music Logo" 
              fill
              className="object-cover"
            />
          </div>
          <span className="text-sm font-medium italic text-gray-300 hidden sm:block">
            Local music from all over the world
          </span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="/catalogue" className="text-sm font-medium hover:text-xango-red transition-colors">Catalogue</Link>
          <Link href="/news" className="text-sm font-medium hover:text-xango-red transition-colors">News</Link>
          <Link href="/xangoma" className="text-sm font-medium hover:text-xango-red transition-colors">Xangoma</Link>
          <Link href="/about" className="text-sm font-medium hover:text-xango-red transition-colors">About</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="Search music..." 
              aria-label="Search music"
              className="bg-white text-gray-800 text-sm px-4 py-1.5 pr-10 rounded-md w-64 focus:outline-none focus:ring-1 focus:ring-xango-red"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" aria-label="Submit search" className="absolute right-3 top-2 text-gray-400 hover:text-xango-red transition-colors">
              <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7s-14 0-7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
          
          <Link href="/cart" className="relative p-2 hover:bg-gray-700 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-xango-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                {totalItems}
              </span>
            )}
          </Link>
          
          <button className="lg:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
