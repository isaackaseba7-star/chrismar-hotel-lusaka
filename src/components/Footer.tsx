export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <span className="font-serif text-2xl font-bold tracking-wider text-white mb-6 inline-block">
              CHR<span className="text-gold-500">I</span>SMAR
            </span>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              Your preferred destination for comfort, convenience & affordable luxury in the heart of Lusaka.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase text-sm tracking-widest">Contact Info</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li>Plot 6892/3, Los Angeles Blvd</li>
              <li>Sunningdale, Lusaka 10101</li>
              <li>Zambia</li>
              <li className="pt-2">
                <a href="tel:0779959121" className="text-gold-500 hover:text-white transition-colors">077 9959121</a>
              </li>
              <li>
                <a href="mailto:info@chrismarhotel.com" className="hover:text-white transition-colors">info@chrismarhotel.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase text-sm tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#about" className="hover:text-gold-500 transition-colors">The Hotel</a></li>
              <li><a href="#rooms" className="hover:text-gold-500 transition-colors">Rooms & Suites</a></li>
              <li><a href="#amenities" className="hover:text-gold-500 transition-colors">Amenities</a></li>
              <li><a href="#gallery" className="hover:text-gold-500 transition-colors">Gallery</a></li>
              <li><a href="#location" className="hover:text-gold-500 transition-colors">Location</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase text-sm tracking-widest">Policies</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li>Check-in: 12:00 PM</li>
              <li>Check-out: 11:00 AM</li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
          <p>&copy; {new Date().getFullYear()} Chrismar Hotel Lusaka. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for luxury & comfort.</p>
        </div>
      </div>
    </footer>
  );
}
