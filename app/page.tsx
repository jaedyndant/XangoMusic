import Link from 'next/link'
import Image from 'next/image'

/**
 * Hoofdpagina component
 * 
 * Rekreatie van de hoompage gebaseert op de screenschots, inklusief hero sektie en statistieken.
 */
export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero sectie met donkere achtergrond */}
      <section className="bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] text-white py-20 px-4">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Since 2012</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
              Local music from <br />
              <span className="text-xango-red">all over the world</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              We specialize in world music that you won't find anywhere else. From the deserts of Mali to the streets of Dakar, we bring you authentic sounds directly from the source.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/catalogue" className="bg-xango-red text-white px-8 py-3 rounded-md font-bold hover:bg-red-700 transition-colors">
                Explore Catalogue
              </Link>
              <Link href="/xmd" className="border border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-black transition-all">
                Artist Services
              </Link>
            </div>
            
            <div className="flex gap-12 mt-12">
              <div>
                <span className="block text-3xl font-bold">500+</span>
                <span className="text-sm text-gray-400">Rare Records</span>
              </div>
              <div>
                <span className="block text-3xl font-bold">50+</span>
                <span className="text-sm text-gray-400">Countries</span>
              </div>
              <div>
                <span className="block text-3xl font-bold">15+</span>
                <span className="text-sm text-gray-400">Years Experience</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="bg-[#333]/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl">
              <div className="flex gap-4 items-center">
                <div className="w-20 h-20 bg-gray-700 rounded-lg animate-pulse"></div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xango-red text-xs font-bold uppercase tracking-widest">Now Playing</span>
                  </div>
                  <h3 className="font-bold text-xl">Tinariwen - Amatssou</h3>
                  <p className="text-gray-400">Desert Blues • Mali</p>
                </div>
              </div>
              <div className="mt-6">
                <div className="h-1.5 w-full bg-gray-600 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-xango-red rounded-full"></div>
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-400 font-mono">
                  <span>02:45</span>
                  <span>04:12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white px-4">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Three Ways We Serve Music</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From discovering rare records to distributing new artists, we're your complete world music ecosystem.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-xango-red text-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="mb-6">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Record Store</h3>
            <p className="mb-8 opacity-90">
              Handpicked vinyl and CDs from Mali, Senegal, Niger, and beyond. Each record tells a story of cultural heritage and musical innovation.
            </p>
            <Link href="/catalogue" className="font-bold flex items-center group">
              Browse Collection <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>

          <div className="bg-[#374151] text-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="mb-6 text-xango-red">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9-9H3m9 9L3 12m0 0l9-9m-9 9l9 9" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">XMD Distribution</h3>
            <p className="mb-8 opacity-90">
              We help world music artists reach global audiences through our specialized distribution network across the Benelux and beyond.
            </p>
            <Link href="/xmd" className="font-bold flex items-center group">
              Learn More <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>

          <div className="bg-[#111827] text-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <div className="mb-6 text-xango-red">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Xangoma Magazine</h3>
            <p className="mb-8 opacity-90">
              Deep dives into world music culture, artist interviews, and stories behind the music that moves the world.
            </p>
            <Link href="/xangoma" className="font-bold flex items-center group">
              Read Stories <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
