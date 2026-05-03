import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import { COLLECTIONS } from '@/lib/products';

export const metadata: Metadata = {
  title: 'LME Rentals LA — Event Furniture & Tent Rentals in Los Angeles',
  description: 'Premium event rental company in Los Angeles. Chairs, tables, tents, linens & more for weddings, birthdays, corporate events and more.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-2xl font-serif font-bold text-gray-900 tracking-tight">
                LME <span className="text-yellow-600">Rentals</span> LA
              </Link>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                {COLLECTIONS.map(c => (
                  <Link key={c.handle} href={`/collection/${c.handle}`} className="hover:text-yellow-600 transition-colors">
                    {c.title}
                  </Link>
                ))}
              </nav>
              <Link href="/book" className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors">
                Book Now
              </Link>
            </div>
          </div>
          {/* Mobile nav */}
          <div className="md:hidden overflow-x-auto flex gap-4 px-4 pb-2 text-sm font-medium text-gray-600">
            {COLLECTIONS.map(c => (
              <Link key={c.handle} href={`/collection/${c.handle}`} className="whitespace-nowrap hover:text-yellow-600">
                {c.title}
              </Link>
            ))}
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-gray-900 text-gray-300 mt-20">
          <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-xl font-serif font-bold mb-3">LME Rentals LA</h3>
              <p className="text-sm leading-relaxed">Premium event furniture & tent rentals in Los Angeles. Making every event unforgettable.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Collections</h4>
              <ul className="space-y-1 text-sm">
                {COLLECTIONS.map(c => (
                  <li key={c.handle}><Link href={`/collection/${c.handle}`} className="hover:text-yellow-400 transition-colors">{c.title}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Contact</h4>
              <div className="text-sm space-y-2">
                <p>📱 <a href="tel:+18189611171" className="hover:text-yellow-400">(818) 961-1171</a></p>
                <p>📧 <a href="mailto:lmerentalsla@gmail.com" className="hover:text-yellow-400">lmerentalsla@gmail.com</a></p>
                <p>📍 Los Angeles, CA</p>
                <Link href="/book" className="inline-block mt-3 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors">
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 text-center text-xs text-gray-500 py-4">
            © {new Date().getFullYear()} LME Rentals LA. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
