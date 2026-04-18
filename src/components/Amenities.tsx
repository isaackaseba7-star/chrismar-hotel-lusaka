import { motion } from 'motion/react';
import { Wifi, Car, Waves, Wind, Accessibility, Coffee } from 'lucide-react';

const AMENITIES = [
  { icon: Wifi, title: 'Free Wi-Fi', desc: 'High-speed internet access throughout the hotel.' },
  { icon: Waves, title: 'Outdoor Pool', desc: 'Relax and unwind in our pristine outdoor swimming pool.' },
  { icon: Car, title: 'Free Parking', desc: 'Secure, complimentary parking for all our guests.' },
  { icon: Wind, title: 'Air Conditioning', desc: 'Climate-controlled comfort in every room.' },
  { icon: Accessibility, title: 'Accessible Facilities', desc: 'Designed to accommodate all guests comfortably.' },
  { icon: Coffee, title: 'Breakfast Available', desc: 'Start your day with our delightful morning selection.' }
];

export function Amenities() {
  return (
    <section id="amenities" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gold-500 text-sm tracking-[0.2em] uppercase font-semibold mb-4">
              Facilities
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light">
              Hotel Amenities
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:max-w-md"
          >
            <p className="text-zinc-400 font-light">
              Everything you need for a perfect stay. We've thoughtfully curated our facilities to ensure your absolute comfort and convenience.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMENITIES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-800/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-gold-500/50 transition-colors">
                  <Icon className="text-gold-500" size={24} />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
