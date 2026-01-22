import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-xango-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-xango-red mb-4">Xango Music</h3>
            <p className="text-gray-400">
              Wêreldmuziek specialist sinds 2012. Platenzaak, distributie, en tijdschrift.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Snel Koppelingen</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/catalogue" className="hover:text-white">Catalogus</Link></li>
              <li><Link href="/news" className="hover:text-white">Nieuws</Link></li>
              <li><Link href="/distribution" className="hover:text-white">Distributie</Link></li>
              <li><Link href="/magazine" className="hover:text-white">Magazine</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Hulp</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/contact" className="hover:text-white">Kontact opnemen</Link></li>
              <li><Link href="/faq" className="hover:text-white">Veel gestelde vraagen</Link></li>
              <li><Link href="/shipping" className="hover:text-white">Verzend informatie</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Kontact</h4>
            <p className="text-gray-400">
              Email: info@xangomusic.com<br />
              Volg ons op de socials
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Xango Music. Alle reghten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}
