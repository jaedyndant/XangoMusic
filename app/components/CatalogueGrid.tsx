'use client'

import Image from 'next/image'
import { useState } from 'react'

const albums = [
  {
    id: '101068',
    artist: 'Tammela 33100',
    title: 'Muistan Vain Astuneeni Sumuun',
    price: 14,
    type: 'CD',
    image: '/images/albums/101068.jpg'
  },
  {
    id: '102179',
    artist: 'Tammela 33100',
    title: 'Muistan Vain Astuneeni Sumuun (LP)',
    price: 20,
    type: 'VINYL',
    image: '/images/albums/102179.jpg'
  },
  {
    id: '108761',
    artist: 'Tomi Salesvuo East Funk Attack',
    title: "Nothing's Enough",
    price: 14,
    type: 'CD',
    image: '/images/albums/108761.jpg'
  },
  {
    id: '109872',
    artist: 'Tomi Salesvuo East Funk Attack',
    title: "Nothing's Enough (LP)",
    price: 20,
    type: 'VINYL',
    image: '/images/albums/109872.jpg'
  },
  {
    id: '107650',
    artist: 'Osa7029',
    title: 'Roots/Branches/Cones',
    price: 14,
    type: 'CD',
    image: '/images/albums/107650.jpg'
  },
  {
    id: '106549',
    artist: 'Ouden',
    title: 'Nothing Left But Sea',
    price: 14,
    type: 'CD',
    image: '/images/albums/106549.jpg'
  },
  {
    id: '105438',
    artist: 'Schiavone, Sonia',
    title: 'Come - Eden!',
    price: 13,
    type: 'CD',
    image: '/images/albums/105438.jpg'
  },
  {
    id: '104327',
    artist: 'Del Barba, Oscar',
    title: 'Giuseppe Verdi Entangled',
    price: 13,
    type: 'CD',
    image: '/images/albums/104327.jpg'
  },
  {
    id: '103216',
    artist: 'Cosentino, Filippo',
    title: 'Leave The Thorne, Take The Rose…',
    price: 13,
    type: 'CD',
    image: '/images/albums/103216.jpg'
  },
  {
    id: '102105',
    artist: 'Himla',
    title: 'Himla',
    price: 17,
    type: 'CD',
    image: '/images/albums/102105.jpg'
  },
  {
    id: '101094',
    artist: 'Vaev',
    title: 'Vaev',
    price: 17,
    type: 'CD',
    image: '/images/albums/101094.jpg'
  },
  {
    id: '100961',
    artist: 'Perier, Lucie & Orwin Hebert',
    title: 'Apples In Winter',
    price: 13.5,
    type: 'CD',
    image: '/images/albums/100961.jpg'
  },
  {
    id: '109850',
    artist: 'MacIver, Norrie and The Glasgow Barons',
    title: 'Songs Of Govan Old',
    price: 14,
    type: 'CD',
    image: '/images/albums/109850.jpg'
  },
  {
    id: '108749',
    artist: 'Couper, Ross & Ryan',
    title: 'An Den Dey Made Tae',
    price: 14,
    type: 'CD',
    image: '/images/albums/108749.jpg'
  },
  {
    id: '106527',
    artist: 'Ska-P',
    title: 'Game Over',
    price: 18,
    type: 'CD',
    image: '/images/albums/106527.jpg'
  },
  {
    id: '107638',
    artist: 'Ska-P',
    title: 'Game Over (2LP)',
    price: 24.5,
    type: 'VINYL',
    image: '/images/albums/107638.jpg'
  },
  {
    id: '104305',
    artist: 'Roy & Yvonne',
    title: 'Believe In Yourself',
    price: 16.5,
    type: 'CD',
    image: '/images/albums/104305.jpg'
  },
  {
    id: '105416',
    artist: 'Roy & Yvonne',
    title: 'Believe In Yourself (LP)',
    price: 21.5,
    type: 'VINYL',
    image: '/images/albums/105416.jpg'
  },
  {
    id: '103294',
    artist: "Spain/Catalunya-Various Artists",
    title: "Soul, R'N'B, Funk",
    price: 16.5,
    type: 'CD',
    image: '/images/albums/103294.jpg'
  },
  {
    id: '102183',
    artist: 'Galoic, Branko',
    title: 'Ples Slobode - Danse de la Liberte',
    price: 14.5,
    type: 'CD',
    image: '/images/albums/102183.jpg'
  },
  {
    id: '100295',
    artist: 'Amparanoia',
    title: 'Himnopsis Colectiva',
    price: 16.5,
    type: 'CD',
    image: '/images/albums/100295.jpg'
  },
  {
    id: '101072',
    artist: 'Baro drom Orkestar',
    title: 'Genau!',
    price: 14,
    type: 'CD',
    image: '/images/albums/101072.jpg'
  },
  {
    id: '104318',
    artist: 'Fanfara Station',
    title: 'Tebourba',
    price: 14,
    type: 'CD',
    image: '/images/albums/104318.jpg'
  },
  {
    id: '103207',
    artist: 'Kerkim',
    title: 'La Giostra',
    price: 14,
    type: 'CD',
    image: '/images/albums/103207.jpg'
  },
  {
    id: '105429',
    artist: "L'Alba",
    title: 'A Princpiu',
    price: 16.5,
    type: 'CD',
    image: '/images/albums/105429.jpg'
  }
]

export default function CatalogueGrid() {
  const [filter, setFilter] = useState('ALL')

  const filteredAlbums = filter === 'ALL' 
    ? albums 
    : albums.filter(album => album.type === filter)

  return (
    <div className="space-y-8">
      <div className="flex justify-center space-x-4 mb-8">
        <button 
          onClick={() => setFilter('ALL')}
          className={`px-4 py-2 rounded-full border ${filter === 'ALL' ? 'bg-xango-red text-white' : 'bg-white text-xango-dark'}`}
        >
          Allemaal
        </button>
        <button 
          onClick={() => setFilter('CD')}
          className={`px-4 py-2 rounded-full border ${filter === 'CD' ? 'bg-xango-red text-white' : 'bg-white text-xango-dark'}`}
        >
          CD's
        </button>
        <button 
          onClick={() => setFilter('VINYL')}
          className={`px-4 py-2 rounded-full border ${filter === 'VINYL' ? 'bg-xango-red text-white' : 'bg-white text-xango-dark'}`}
        >
          Platen
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredAlbums.map((album) => (
          <div key={album.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative aspect-square">
              <Image
                src={album.image}
                alt={album.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-xango-dark truncate">{album.artist}</h3>
              <p className="text-gray-600 text-sm truncate">{album.title}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xango-red font-bold">€{album.price.toFixed(2)}</span>
                <span className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-500 uppercase">{album.type}</span>
              </div>
              <button className="w-full mt-4 bg-xango-dark text-white py-2 rounded hover:bg-opacity-90 transition-opacity text-sm">
                In winkelwagen leggen
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
