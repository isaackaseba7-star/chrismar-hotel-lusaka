import { motion } from 'motion/react';
import { MapPin, Plane, Utensils, Landmark } from 'lucide-react';

export function Location() {
  return (
    <section id="location" className="py-24 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-light mb-6"
          >
            Perfectly <span className="italic text-zinc-400">Positioned</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-px w-24 bg-gold-500 mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Map Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 aspect-video lg:aspect-auto rounded-3xl overflow-hidden border border-zinc-800 shadow-xl relative bg-zinc-800"
          >
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/lusaka_city_map/800/600?blur=4')] bg-cover bg-center">
              {/* Overlay with address info */}
              <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm flex flex-col items-center justify-center text-zinc-500 p-8 text-center border-dashed border border-zinc-700 m-6 rounded-2xl">
                 <MapPin className="text-gold-500 mb-4" size={48} />
                 <p className="text-white font-medium mb-2">Plot 6892/3, Los Angeles Blvd</p>
                 <p className="text-zinc-400 text-sm">Sunningdale, Lusaka 10101, Zambia</p>
                 <a href="https://maps.google.com/?q=Chrismar+Hotel+Lusaka" target="_blank" rel="noreferrer" className="mt-6 px-6 py-2 bg-gold-500 text-zinc-950 rounded-full font-medium text-sm hover:bg-gold-400 transition-colors">
                   Open in Maps
                 </a>
              </div>
            </div>
          </motion.div>

          {/* Details Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-4"
          >
            {/* Address Card */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-white font-medium text-lg mb-2">Chrismar Hotel</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Plot 6892/3, Los Angeles Blvd<br />
                Sunningdale, Lusaka 10101<br />
                Zambia
              </p>
              <a href="tel:0779959121" className="text-gold-500 font-medium font-mono text-lg hover:text-gold-400 transition-colors">
                077 9959121
              </a>
            </div>

            {/* Distances */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 flex-1 flex flex-col justify-center space-y-6">
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800">
                  <Utensils size={18} className="text-gold-500" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">Dining & Eateries</h4>
                  <p className="text-zinc-500 text-sm mt-1">10 mins walk to top restaurants</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800">
                  <Landmark size={18} className="text-gold-500" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">Kabwata Cultural Village</h4>
                  <p className="text-zinc-500 text-sm mt-1">3 km away (Approx. 8 mins drive)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800">
                  <Plane size={18} className="text-gold-500" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">Kenneth Kaunda Airport</h4>
                  <p className="text-zinc-500 text-sm mt-1">24 km away (Approx. 35 mins drive)</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
