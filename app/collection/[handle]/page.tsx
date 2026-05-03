import { COLLECTIONS, getCollectionProducts } from '@/lib/products';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return COLLECTIONS.map(c => ({ handle: c.handle }));
}

export async function generateMetadata({ params }: { params: { handle: string } }) {
  const col = COLLECTIONS.find(c => c.handle === params.handle);
  return { title: `${col?.title || 'Collection'} — LME Rentals LA` };
}

export default async function CollectionPage({ params }: { params: { handle: string } }) {
  const col = COLLECTIONS.find(c => c.handle === params.handle);
  if (!col) notFound();

  const products = await getCollectionProducts(params.handle);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-yellow-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{col.title}</span>
      </div>

      {/* Header */}
      <div className="mb-10">
        <div className="text-5xl mb-3">{col.emoji}</div>
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">{col.title}</h1>
        <p className="text-gray-500 text-lg">{col.description}</p>
      </div>

      {/* Products Grid */}
      {products.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-xl">No items found in this collection.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(p => (
            <div key={p.id} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-gray-50 overflow-hidden">
                {p.image ? (
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-300 text-5xl">{col.emoji}</div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-2 leading-tight">{p.title}</h3>
                {p.description && <p className="text-xs text-gray-400 mb-3 line-clamp-2">{p.description}</p>}
                <div className="flex items-center justify-between">
                  <span className="text-yellow-600 font-bold text-lg">${p.price}</span>
                  <span className="text-gray-400 text-xs">per item</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="mt-16 bg-gray-900 rounded-3xl p-10 text-center text-white">
        <h2 className="text-2xl font-serif font-bold mb-3">Ready to book {col.title.toLowerCase()}?</h2>
        <p className="text-gray-300 mb-6">Fill out our quick form and we'll send you a custom quote within 24 hours.</p>
        <Link href="/book" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-8 py-3 rounded-full transition-colors inline-block">
          Request a Quote →
        </Link>
      </div>
    </div>
  );
}
