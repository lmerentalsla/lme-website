export const metadata = {
  title: 'Book Your Event — LME Rentals LA',
  description: 'Request a quote for your event rental needs in Los Angeles.',
};

export default function BookPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Request a Quote</h1>
        <p className="text-gray-500 text-lg">Tell us about your event and we'll get back to you within 24 hours with pricing and availability.</p>
      </div>

      <form
        action="https://formspree.io/f/lmerentalsla"
        method="POST"
        className="bg-white border border-gray-100 rounded-3xl shadow-sm p-8 space-y-6"
      >
        {/* Hidden redirect */}
        <input type="hidden" name="_next" value="https://lme-rentals.vercel.app/book?sent=true" />
        <input type="hidden" name="_subject" value="New Event Booking Request — LME Rentals LA" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
            <input name="first_name" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Jane" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
            <input name="last_name" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Smith" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
            <input name="phone" type="tel" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="(818) 555-0100" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
            <input name="email" type="email" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="jane@email.com" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Event Date *</label>
            <input name="event_date" type="date" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Event Type *</label>
            <select name="event_type" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400">
              <option value="">Select event type...</option>
              <option>Wedding</option>
              <option>Quinceañera</option>
              <option>Birthday Party</option>
              <option>Corporate Event</option>
              <option>Baby Shower</option>
              <option>Graduation Party</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Guests</label>
            <select name="guest_count" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400">
              <option value="">Select...</option>
              <option>Under 50</option>
              <option>50–100</option>
              <option>100–200</option>
              <option>200–300</option>
              <option>300+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Event Location (City)</label>
            <input name="location" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="e.g. Burbank, CA" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">What items are you interested in?</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['Chairs', 'Barstools', 'Tables', 'Tents', 'Linens', 'Heaters', 'Umbrellas', 'Kids Furniture', 'Equipment & Décor'].map(item => (
              <label key={item} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" name="items" value={item} className="accent-yellow-500 w-4 h-4" />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Details</label>
          <textarea name="message" rows={4} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none" placeholder="Tell us more — specific items, quantities, any special requests..." />
        </div>

        <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 rounded-xl text-lg transition-colors">
          Send Booking Request →
        </button>

        <p className="text-center text-xs text-gray-400">We'll respond within 24 hours. You can also reach us at <a href="tel:+18189611171" className="text-yellow-600 hover:underline">(818) 961-1171</a></p>
      </form>
    </div>
  );
}
