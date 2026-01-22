import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-xango-grey text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-xango-red">XANGO</span>
          <span className="hidden md:inline font-medium">MUSIC</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/catalogue" className="hover:text-xango-red transition-colors">Catalogus</Link>
          <Link href="/news" className="hover:text-xango-red transition-colors">Nieuws</Link>
          <Link href="/distribution" className="hover:text-xango-red transition-colors">Distributie</Link>
          <Link href="/magazine" className="hover:text-xango-red transition-colors">Magazine</Link>
          <Link href="/contact" className="hover:text-xango-red transition-colors">Kontact</Link>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button could go here */}
          <button className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
