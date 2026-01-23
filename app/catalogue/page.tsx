import CatalogueGrid from '../components/CatalogueGrid'
import { Suspense } from 'react'

export default function CataloguePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Catalogue</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Explore the finest world music on vinyl and CD. We have curated a special selection just for you.
        </p>
      </div>
      
      <Suspense fallback={<div className="text-center py-12">Loading catalogue...</div>}>
        <CatalogueGrid />
      </Suspense>
    </div>
  )
}
