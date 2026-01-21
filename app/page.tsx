export default function Home() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-5xl font-bold text-xango-dark mb-6">
        Discover <span className="text-xango-red">World Music</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
        A curated selection of world music record store, distribution services, and Xangoma Magazine.
      </p>
      <div className="flex justify-center space-x-4">
        <button className="bg-xango-red text-white px-8 py-3 rounded-md font-bold hover:bg-red-700 transition-colors">
          Browse Catalogue
        </button>
        <button className="border-2 border-xango-dark text-xango-dark px-8 py-3 rounded-md font-bold hover:bg-xango-dark hover:text-white transition-colors">
          Read Magazine
        </button>
      </div>
    </div>
  )
}
