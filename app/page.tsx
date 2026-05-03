import Link from 'next/link';
import Image from 'next/image';
import { COLLECTIONS, getCollectionProducts } from '@/lib/products';

export default async function HomePage() {
  const featuredProducts = await getCollectionProducts('chairs');
  const showcaseProducts = featuredProducts.filter(p => p.image).slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-900 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 py-28 md:py-40 text-center">
          <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-4">Los Angeles Event Rentals</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
            Make Every Event<br />
            <span className="text-yellow-400">Unforgettable</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Premium chairs, tables, tents, linens & more for weddings, birthdays, quinceañeras, corporate events and every celebration in between.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors">
              Book Your Event →
            </Link>
            <Link href="#collections" className="border border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-full text-lg transition-colors">
              Browse Rentals
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-yellow-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 gap-4 text-center">
          <div><div className="text-3xl font-bold">500+</div><div className="text-sm font-medium opacity-90">Events Served</div></div>
          <div><div className="text-3xl font-bold">LA</div><div className="text-sm font-medium opacity-90">Based & Delivered</div></div>
          <div><div className="text-3xl font-bold">100+</div><div className="text-sm font-medium opacity-90">Items Available</div></div>
        </div>
      </section>

      {/* Collections Grid */}
      <section id="collections" className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Browse Our Rentals</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">Everything you need to create the perfect event setup, delivered to your door.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {COLLECTIONS.map(c => (
            <Link key={c.handle} href={`/collection/${c.handle}`}
              className="group bg-gray-50 hover:bg-yellow-50 border border-gray-100 hover:border-yellow-300 rounded-2xl p-6 text-center transition-all hover:shadow-md">
              <div className="text-4xl mb-3">{c.emoji}</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-yellow-700 mb-1">{c.title}</h3>
              <p className="text-xs text-gray-500">{c.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      {showcaseProducts.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Popular Chairs</h2>
              <p className="text-gray-500 text-lg">Our most-loved seating for any occasion</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {showcaseProducts.map(p => (
                <div key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    {p.image && (
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{p.title}</h3>
                    <p className="text-yellow-600 font-bold">${p.price}<span className="text-gray-400 text-xs font-normal"> / per item</span></p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/collection/chairs" className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-full transition-colors">
                View All Chairs →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Why LME */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Why Choose LME Rentals?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '🚚', title: 'LA Delivery', desc: 'We deliver and pick up throughout the Los Angeles area so you can focus on enjoying your event.' },
            { icon: '✨', title: 'Premium Quality', desc: 'All our inventory is clean, well-maintained, and event-ready. We take pride in every item we rent.' },
            { icon: '💬', title: 'Personal Service', desc: 'We work with you one-on-one to make sure your event setup is exactly what you envisioned.' },
          ].map(f => (
            <div key={f.title} className="text-center p-8 bg-cream-50 rounded-2xl">
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Plan Your Event?</h2>
          <p className="text-gray-300 text-lg mb-8">Fill out our quick booking form and we'll get back to you within 24 hours with a custom quote.</p>
          <Link href="/book" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-10 py-4 rounded-full text-lg transition-colors inline-block">
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
