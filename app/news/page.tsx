'use client'

import React, { useState } from 'react';
import Link from 'next/link';

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const newsItems = [
    {
      id: 1,
      author: 'Xango Music',
      date: 'Jan 15, 2024',
      title: 'Tinariwen - Amatssou: Desert Blues at Its Finest',
      excerpt: "The Tuareg masters return with another mesmerizing collection of desert blues that transports listeners to the vast Sahara. Amatssou showcases the band's evolution while staying true to their roots...",
      image: '/images/albums/101068.jpg',
      tags: ['Review', 'Desert Blues', 'Mali'],
      likes: 24,
      comments: 8
    },
    {
      id: 2,
      author: 'Xango Music',
      date: 'Jan 12, 2024',
      title: 'New Arrivals: Rare Vinyl from Madagascar',
      excerpt: "We're excited to announce a special shipment of rare vinyl records from Madagascar, featuring traditional Malagasy music from the 1970s and 80s. These limited editions...",
      image: '/images/albums/102179.jpg',
      tags: ['New Arrivals', 'Vinyl', 'Madagascar'],
      likes: 18,
      comments: 5
    }
  ];

  const categories = ['All', 'Reviews', 'News', 'Artist Features', 'New Releases'];

  const filteredNews = activeCategory === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.tags.includes(activeCategory.replace('Reviews', 'Review')));

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">News & Reviews</h1>
          <p className="text-gray-500">Stay updated with the latest world music news, album reviews, and artist features</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat ? 'bg-xango-red text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-12">
          {filteredNews.map((item) => (
            <article key={item.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-xango-red flex items-center justify-center text-white text-[10px] font-bold">X</div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{item.author}</p>
                      <p className="text-xs text-gray-400">{item.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-500 text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-xango-red transition-colors cursor-pointer">
                  {item.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.excerpt}
                </p>

                <div className="relative aspect-video bg-gray-100 rounded-xl mb-6 overflow-hidden flex items-center justify-center text-gray-400 italic text-sm">
                  Image: /images/news-item-{item.id}.jpg
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-gray-400 hover:text-xango-red transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span className="text-sm">{item.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-xango-red transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span className="text-sm">{item.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-xango-red transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      <span className="text-sm">Share</span>
                    </button>
                  </div>
                  <Link href={`/news/${item.id}`} className="text-xango-red font-bold text-sm hover:underline">
                    Read Full Review →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
