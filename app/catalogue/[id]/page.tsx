'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useCart } from '../../components/CartContext'
import { albums } from '../../data/albums'

/**
 * Deetaals van het produckt
 */
export default function ProductDetailsPage() {
  const { id } = useParams()
  const { addToCart } = useCart()
  
  const album = albums.find(a => a.id === id)

  if (!album) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Album not found</h1>
        <Link href="/catalogue" className="text-xango-red font-bold hover:underline">
          Return to Catalogue
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link href="/catalogue" className="text-gray-500 hover:text-xango-red transition-colors mb-8 inline-flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Catalogue
        </Link>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8 md:p-12">
            {/* album foto  */}
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              {album.isNew && (
                <span className="absolute top-6 left-6 z-10 bg-xango-red text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg uppercase tracking-widest">New</span>
              )}
              <Image 
                src={album.image} 
                alt={album.title} 
                fill 
                className="object-cover"
              />
            </div>

            <div className="flex flex-col">
              <div className="mb-6">
                <span className="text-xango-red font-bold text-sm uppercase tracking-widest">{album.genre} • {album.country}</span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">{album.artist}</h1>
                <h2 className="text-2xl text-gray-500 font-medium italic">{album.title}</h2>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-bold text-gray-900">${album.price.toFixed(2)}</span>
                <span className="px-3 py-1 bg-gray-100 rounded-lg text-gray-500 font-bold text-sm uppercase">{album.type}</span>
                {album.inStock ? (
                  <span className="text-green-600 font-bold text-sm flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                    In Stock
                  </span>
                ) : (
                  <span className="text-red-500 font-bold text-sm flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Out of Stock
                  </span>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed text-lg mb-10">
                {album.description}
              </p>

              <div className="mt-auto flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => album.inStock && addToCart(album)}
                  disabled={!album.inStock}
                  className={`flex-grow py-4 px-8 rounded-xl font-bold text-lg shadow-lg transition-all ${
                    album.inStock 
                    ? 'bg-xango-red text-white hover:bg-red-700 shadow-red-200' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {album.inStock ? 'Add to Shopping Cart' : 'Currently Unavailable'}
                </button>
                <button className="p-4 rounded-xl border-2 border-gray-100 hover:bg-gray-50 transition-colors">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold mb-2">Secure Shipping</h3>
            <p className="text-sm text-gray-500">Fast and safe delivery worldwide in specialized record mailers.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold mb-2">Authentic Sound</h3>
            <p className="text-sm text-gray-500">100% authentic local music sourced directly from the artists and labels.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="font-bold mb-2">Expert Curation</h3>
            <p className="text-sm text-gray-500">Every record in our catalogue is hand-picked by world music specialists.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
