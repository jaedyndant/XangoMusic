'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useCart } from './CartContext'
import { albums } from '../data/albums'

export default function CatalogueGrid() {
  const searchParams = useSearchParams()
  const initialSearch = searchParams.get('search') || ''
  
  const [searchTerm, setSearchTerm] = useState(initialSearch)
  const [activeType, setActiveType] = useState('All')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const { addToCart } = useCart()

  useEffect(() => {
    const query = searchParams.get('search')
    if (query !== null) {
      setSearchTerm(query)
    }
  }, [searchParams])

  const filteredAlbums = albums.filter(album => {
    const matchesSearch = album.artist.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         album.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = activeType === 'All' || album.type === activeType
    return matchesSearch && matchesType
  })

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="relative w-full md:w-2/3">
          <input 
            type="text" 
            placeholder="Search by artist, title, country, or style..." 
            aria-label="Search catalogue"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-xango-red/20 focus:border-xango-red outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7s-14 0-7 7 0 0114 0z" />
          </svg>
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors ${activeType !== 'All' ? 'bg-xango-red text-white border-xango-red' : 'border-gray-200 hover:bg-gray-50'}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              {activeType === 'All' ? 'Filters' : activeType}
            </button>
            
            {isFilterOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 z-50 py-2">
                {['All', 'Vinyl', 'CD'].map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setActiveType(type)
                      setIsFilterOpen(false)
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${activeType === type ? 'text-xango-red font-bold' : 'text-gray-700'}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex border border-gray-200 rounded-lg overflow-hidden">
            <button className="p-2 bg-xango-red text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button className="p-2 bg-white text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-500 flex justify-between items-center">
        <span>Showing {filteredAlbums.length} of {albums.length} items</span>
        {(searchTerm !== '' || activeType !== 'All') && (
          <button 
            onClick={() => {
              setSearchTerm('')
              setActiveType('All')
            }}
            className="text-xango-red font-medium hover:underline flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Reset Filters
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredAlbums.map((album) => (
          <div key={album.id} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <Link href={`/catalogue/${album.id}`} className="block relative aspect-square bg-gray-100">
              {album.isNew && (
                <span className="absolute top-3 left-3 z-10 bg-xango-red text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wider">New</span>
              )}
              {!album.inStock && (
                <span className="absolute top-3 left-3 z-10 bg-gray-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wider">Out of Stock</span>
              )}
              <Image
                src={album.image}
                alt={album.title}
                fill
                className={`object-cover transition-transform duration-500 group-hover:scale-105 ${!album.inStock ? 'grayscale opacity-60' : ''}`}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <p className="text-sm italic">{album.artist}</p>
                  <p className="font-bold">{album.title}</p>
                </div>
              </div>
            </Link>
            
            <div className="p-5 flex flex-col flex-grow">
              <Link href={`/catalogue/${album.id}`} className="mb-2 block group-hover:text-xango-red transition-colors">
                <h3 className="font-bold text-gray-900 truncate">{album.artist}</h3>
                <p className="text-gray-600 text-sm truncate">{album.title}</p>
              </Link>
              
              <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                <span>{album.type}</span>
                <span>{album.country}</span>
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded uppercase tracking-tighter">
                  {album.genre}
                </span>
              </div>
              
              <div className="mt-auto flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">${album.price.toFixed(2)}</span>
                <button 
                  onClick={() => album.inStock && addToCart(album)}
                  disabled={!album.inStock}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg font-bold text-sm transition-all ${
                    album.inStock 
                    ? 'bg-xango-red text-white hover:bg-red-700 shadow-md shadow-red-200' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  {album.inStock ? 'Add' : 'N/A'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
