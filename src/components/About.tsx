import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-zinc-950 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-900/30 -skew-x-12 transform origin-top right-[-10%] z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Images */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden relative border border-zinc-800 p-2">
              <img
                src="https://picsum.photos/seed/hotelreception_lusaka/800/1000"
                alt="Hotel Reception and Lounge"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-tl-[90px] rounded-br-[90px]"
              />
              <div className="absolute inset-0 bg-gold-500/10 rounded-tl-[90px] rounded-br-[90px]"></div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-1/2 aspect-square rounded-full overflow-hidden border-4 border-zinc-950 shadow-2xl">
              <img
                src="https://picsum.photos/seed/zambia_culture/400/400"
                alt="Local Zambian Details"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gold-500 text-sm tracking-[0.2em] uppercase font-semibold mb-4">
              The Hotel Experience
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-8">
              Affordable Comfort in the <br />
              <span className="italic text-zinc-400">Heart of Lusaka</span>
            </h2>
            
            <div className="space-y-6 text-zinc-300 font-light leading-relaxed mb-10">
              <p>
                Set in a lush, leafy area in Sunningdale, Chrismar Hotel offers an oasis of tranquility just minutes from the vibrant energy of the city. We pride ourselves on delivering a warm, welcoming experience where modern luxury meets Zambian hospitality.
              </p>
              <p>
                Whether you are visiting for business or leisure, our prime location ensures you are never far from what matters most. Enjoy peaceful surroundings while remaining exceptionally connected to Lusaka's top destinations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-zinc-800/50">
              <div className="flex items-start space-x-3">
                <MapPin className="text-gold-500 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-medium mb-1">Culinary Delights</h4>
                  <p className="text-sm text-zinc-400">Within a 10-minute walk to top local restaurants and eateries.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-gold-500 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-medium mb-1">Cultural Heritage</h4>
                  <p className="text-sm text-zinc-400">Only 3 km from the famous Kabwata Cultural Village.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-gold-500 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-white font-medium mb-1">Airport Access</h4>
                  <p className="text-sm text-zinc-400">Conveniently located 24 km from Kenneth Kaunda Int. Airport.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <a href="#location" className="inline-flex items-center space-x-2 text-gold-500 hover:text-gold-400 font-medium tracking-wide transition-colors uppercase text-sm group">
                <span>View Full Location</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
