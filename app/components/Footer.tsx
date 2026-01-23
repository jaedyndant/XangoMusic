import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-xango-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-xango-red mb-4">Xango Music</h3>
            <p className="text-gray-400">
              World music specialist since 2012. Record store, distribution, and magazine.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/catalogue" className="hover:text-white">Catalogue</Link></li>
              <li><Link href="/news" className="hover:text-white">News</Link></li>
              <li><Link href="/xangoma" className="hover:text-white">Xangoma Magazine</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white">About & Contact</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-white">Shipping Info</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-400">
              Email: info@xangomusic.com<br />
              Follow us on social media
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Xango Music. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
