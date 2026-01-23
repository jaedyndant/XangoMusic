import React from 'react';
import Link from 'next/link';

/**
 * XMD Distributie pagina
 * 
 * Rekreatie van de distriboetie pachina met diennsten.
 */
export default function XMDPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-xango-dark text-white py-24 text-center px-4">
        <div className="container mx-auto max-w-4xl">
          <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4 block">XMD Services</span>
          <h1 className="text-5xl font-bold mb-8 leading-tight">
            Global Distribution for <br /> World Music Artists
          </h1>
          <p className="text-xl text-gray-300 mb-10">
            Connect your authentic world music with global audiences through our specialized distribution network across the Benelux and beyond.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-xango-red text-white px-8 py-3 rounded-md font-bold hover:bg-red-700 transition-colors">
              Get Started
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-black transition-all">
              View Our Releases
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white px-4">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Complete Distribution Services</h2>
          <p className="text-gray-600">From digital platforms to physical retail, we provide comprehensive distribution solutions for world music artists.</p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-xango-red text-white p-10 rounded-2xl shadow-xl">
            <div className="mb-6">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9-9H3m9 9L3 12m0 0l9-9m-9 9l9 9" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Digital Distribution</h3>
            <p className="mb-6 opacity-90">
              Get your music on Spotify, Apple Music, Bandcamp, and 150+ digital platforms worldwide. Full metadata management and royalty collection.
            </p>
            <ul className="text-sm space-y-2 opacity-80">
              <li>• Streaming platforms</li>
              <li>• Download stores</li>
              <li>• Social media platforms</li>
            </ul>
          </div>

          <div className="bg-[#374151] text-white p-10 rounded-2xl shadow-xl">
            <div className="mb-6">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Physical Distribution</h3>
            <p className="mb-6 opacity-90">
              Vinyl and CD distribution to record stores across the Benelux region. Specialized world music retail network.
            </p>
            <ul className="text-sm space-y-2 opacity-80">
              <li>• Record store network</li>
              <li>• Vinyl pressing coordination</li>
              <li>• Inventory management</li>
            </ul>
          </div>

          <div className="bg-[#111827] text-white p-10 rounded-2xl shadow-xl">
            <div className="mb-6 text-xango-red">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Marketing & Promotion</h3>
            <p className="mb-6 opacity-90">
              Targeted promotion campaigns, playlist pitching, and press coverage for world music audiences.
            </p>
            <ul className="text-sm space-y-2 opacity-80">
              <li>• Playlist placement</li>
              <li>• Press campaigns</li>
              <li>• Social media promotion</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16">Why Artists Choose XMD</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-4">
              <span className="block text-4xl font-bold text-xango-red mb-2">100%</span>
              <p className="text-gray-600 font-medium">Focused on World Music</p>
            </div>
            <div className="p-4">
              <span className="block text-4xl font-bold text-xango-red mb-2">200+</span>
              <p className="text-gray-600 font-medium">Partner Stores</p>
            </div>
            <div className="p-4">
              <span className="block text-4xl font-bold text-xango-red mb-2">Global</span>
              <p className="text-gray-600 font-medium">Digital Reach</p>
            </div>
            <div className="p-4">
              <span className="block text-4xl font-bold text-xango-red mb-2">Expert</span>
              <p className="text-gray-600 font-medium">Label Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
