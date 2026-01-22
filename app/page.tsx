import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-5xl font-bold text-xango-dark mb-6">
        Ontdek <span className="text-xango-red">Wêreldmuziek</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
        Een zorgvuldig gekozen selectie van wereldmuziek platen, distributie en het Xangoma Tijdschrift.
      </p>
      <div className="flex justify-center space-x-4">
        <Link href="/catalogue" className="bg-xango-red text-white px-8 py-3 rounded-md font-bold hover:bg-red-700 transition-colors">
          Catalogus bekijken
        </Link>
        <Link href="/magazine" className="border-2 border-xango-dark text-xango-dark px-8 py-3 rounded-md font-bold hover:bg-xango-dark hover:text-white transition-colors">
          Magazine leze
        </Link>
      </div>
    </div>
  )
}
