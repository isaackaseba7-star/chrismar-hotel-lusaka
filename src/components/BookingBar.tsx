import React, { useState } from 'react';
import { Calendar, Users, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function BookingBar() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="booking-bar" className="relative z-20 -mt-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl shadow-black/50 backdrop-blur-md"
      >
        <form onSubmit={handleBooking} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-end">
          
          {/* Check-in */}
          <div className="flex flex-col">
            <label className="text-xs uppercase tracking-widest text-zinc-400 mb-2 font-medium">Check-in</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar size={18} className="text-gold-500" />
              </div>
              <input
                type="date"
                required
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                style={{ colorScheme: 'dark' }}
              />
            </div>
          </div>

          {/* Check-out */}
          <div className="flex flex-col">
            <label className="text-xs uppercase tracking-widest text-zinc-400 mb-2 font-medium">Check-out</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar size={18} className="text-gold-500" />
              </div>
              <input
                type="date"
                required
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                style={{ colorScheme: 'dark' }}
              />
            </div>
          </div>

          {/* Guests */}
          <div className="flex flex-col">
            <label className="text-xs uppercase tracking-widest text-zinc-400 mb-2 font-medium">Guests</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Users size={18} className="text-gold-500" />
              </div>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg pl-10 pr-8 py-3 appearance-none focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors cursor-pointer"
              >
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
                <option value="3">3 Adults</option>
                <option value="4">4 Adults</option>
                <option value="family">Family (2 Adults, 2 Kids)</option>
              </select>
            </div>
          </div>

          {/* Button */}
          <div className="flex flex-col h-full justify-end">
            <button
              type="submit"
              className="w-full bg-gold-500 hover:bg-gold-400 text-zinc-950 rounded-lg py-3 px-4 font-semibold tracking-wide transition-colors flex items-center justify-center space-x-2"
            >
              <span>CHECK AVAILABILITY</span>
              <ArrowRight size={18} />
            </button>
          </div>
          
        </form>
      </motion.div>
    </section>
  );
}
