import CatalogueGrid from '../components/CatalogueGrid'

export default function CataloguePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-xango-dark mb-4">Onze Catalogus</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Ontdek de mooiste wereldmuziek op vinyl en cd. Wij hebben een speciaale selectie voor jou samengesteld.
        </p>
      </div>
      
      <CatalogueGrid />
    </div>
  )
}
