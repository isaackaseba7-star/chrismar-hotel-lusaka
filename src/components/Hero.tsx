import React from 'react';
import { motion } from 'motion/react';
import { Wifi, Car, Waves, Wind } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.trvl-media.com/lodging/2000000/1860000/1856100/1856066/9ae7df34_z.jpg"
          alt="Luxury Hotel Room"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover scale-105 transform origin-center animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/40 to-zinc-950 text-zinc-950"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <p className="text-gold-500 uppercase tracking-[0.3em] text-sm md:text-md mb-4 font-semibold">
            Welcome to
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-6 text-white leading-tight">
            Chrismar Hotel <br />
            <span className="text-3xl md:text-5xl italic text-zinc-300">| Lusaka</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-zinc-200 text-lg md:text-xl font-light mb-10 leading-relaxed">
            Comfort, Convenience & Affordable Luxury in Lusaka. Experience the perfect blend of central location, top-tier comfort, and local warmth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a
            href="#booking"
            className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-zinc-950 px-8 py-4 rounded-full font-semibold tracking-wider transition-all transform hover:-translate-y-1"
          >
            CHECK AVAILABILITY
          </a>
          <a
            href="#rooms"
            className="w-full sm:w-auto border border-zinc-400 hover:border-white text-white px-8 py-4 rounded-full font-medium tracking-wider transition-all hover:bg-white/10"
          >
            DISCOVER ROOMS
          </a>
        </motion.div>
        
        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12 text-zinc-300 text-sm tracking-widest uppercase font-medium"
        >
          <div className="flex items-center space-x-2"><Wifi size={16} className="text-gold-500"/> <span>Free WiFi</span></div>
          <div className="flex items-center space-x-2"><Waves size={16} className="text-gold-500"/> <span>Pool</span></div>
          <div className="flex items-center space-x-2"><Car size={16} className="text-gold-500"/> <span>Parking</span></div>
          <div className="flex items-center space-x-2"><Wind size={16} className="text-gold-500"/> <span>Air Con</span></div>
        </motion.div>
      </div>

      {/* Down arrow indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
      >
        <a href="#booking-bar" className="text-zinc-400 hover:text-gold-500 transition-colors">
          <ChevronDownIcon className="w-8 h-8" />
        </a>
      </motion.div>
    </section>
  );
}

function ChevronDownIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}
