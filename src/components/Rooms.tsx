import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';

const ROOMS = [
  {
    id: 'double',
    name: 'Double Room',
    price: '1,451',
    image: 'https://picsum.photos/seed/lux_double_room/800/600',
    description: 'Perfect for solo travelers or couples seeking a cozy, comfortable retreat after a day in the city.',
    features: ['1 Queen Bed', 'En-suite Bathroom', 'Work Desk', 'City View']
  },
  {
    id: 'twin',
    name: 'Twin Room',
    price: '1,650',
    image: 'https://picsum.photos/seed/lux_twin_room/800/600',
    description: 'Ideal for friends or colleagues, featuring separate beds with uncompromised comfort and space.',
    features: ['2 Single Beds', 'Spacious Area', 'Lounge Seating', 'Pool View']
  },
  {
    id: 'deluxe',
    name: 'Deluxe Suite',
    price: '2,200',
    image: 'https://picsum.photos/seed/lux_deluxe_room/800/600',
    description: 'Experience elevated luxury with our premium suite, offering expansive space and upgraded amenities.',
    features: ['1 King Bed', 'Living Area', 'Premium Bath', 'Balcony']
  }
];

export function Rooms() {
  return (
    <section id="rooms" className="py-24 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 text-sm tracking-[0.2em] uppercase font-semibold mb-4"
          >
            Accommodations
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-light mb-6"
          >
            Rooms & Suites
          </motion.h2>
          <div className="h-px w-24 bg-gold-500/50 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800/50 group hover:border-gold-500/30 transition-colors"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                <img
                  src={room.image}
                  alt={room.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs uppercase tracking-widest text-zinc-300 font-medium mb-1">From</p>
                  <p className="text-2xl font-serif text-white">
                    K {room.price} <span className="text-sm text-zinc-400 font-sans font-normal">/ night</span>
                  </p>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-3 text-white group-hover:text-gold-500 transition-colors">{room.name}</h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
                  {room.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {room.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-zinc-300 font-light">
                      <Check className="text-gold-500 mr-3" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-4 border border-zinc-700 rounded-xl text-xs uppercase tracking-widest font-medium hover:bg-gold-500 hover:text-zinc-950 hover:border-gold-500 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Book {room.name}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
