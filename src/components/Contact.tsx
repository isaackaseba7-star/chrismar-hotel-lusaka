import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PhoneCall, Mail, MessageSquare } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: 'double',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Booking inquiry sent successfully! We will contact you shortly.");
    setFormData({name: '', email: '', phone: '', checkIn: '', checkOut: '', roomType: 'double', message: ''});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <section id="booking" className="py-24 bg-zinc-950 relative overflow-hidden">
      
      {/* Decorative large text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-24 text-[15vw] font-serif font-bold text-zinc-900/30 whitespace-nowrap pointer-events-none select-none z-0">
        RESERVE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            
            {/* Contact Info Panel */}
            <div className="lg:col-span-2 bg-zinc-800 p-10 md:p-14 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-gold-500/5 mix-blend-overlay"></div>
              
              <div className="relative z-10">
                <h3 className="font-serif text-3xl text-white mb-2">Get in Touch</h3>
                <p className="text-zinc-400 font-light mb-12">
                  Have a question or prefer to book directly? Our reservations team is ready to assist you.
                </p>

                <div className="space-y-8">
                  <a href="tel:0779959121" className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 transition-colors">
                      <PhoneCall className="text-gold-500 group-hover:text-zinc-950 transition-colors" size={20} />
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Call Us Directly</p>
                      <p className="text-white font-mono text-lg group-hover:text-gold-500 transition-colors">077 9959121</p>
                    </div>
                  </a>

                  <a href="mailto:reservations@chrismarhotel.com" className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 transition-colors">
                      <Mail className="text-gold-500 group-hover:text-zinc-950 transition-colors" size={20} />
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Email Reservations</p>
                      <p className="text-white text-md group-hover:text-gold-500 transition-colors">book@chrismarhotel.com</p>
                    </div>
                  </a>

                  <a href="https://wa.me/260779959121" target="_blank" rel="noreferrer" className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 transition-colors">
                      <MessageSquare className="text-gold-500 group-hover:text-zinc-950 transition-colors" size={20} />
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">WhatsApp Fast Reply</p>
                      <p className="text-white text-md group-hover:text-gold-500 transition-colors">+260 77 9959121</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="relative z-10 mt-16 pt-8 border-t border-zinc-700/50 flex space-x-4">
                <p className="text-gold-500 text-sm font-medium animate-pulse">
                  Limited rooms available this week!
                </p>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-3 p-10 md:p-14">
              <h3 className="font-serif text-3xl text-white mb-8">Book Your Stay</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium">Full Name</label>
                    <input 
                      type="text" required name="name" value={formData.name} onChange={handleChange}
                      className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium">Phone Number</label>
                    <input 
                      type="tel" required name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" 
                      placeholder="+260..." 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium">Email Address</label>
                  <input 
                    type="email" required name="email" value={formData.email} onChange={handleChange}
                    className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" 
                    placeholder="john@example.com" 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium">Check-in Date</label>
                    <input 
                      type="date" required name="checkIn" value={formData.checkIn} onChange={handleChange}
                      style={{ colorScheme: 'dark' }}
                      className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium">Check-out Date</label>
                    <input 
                      type="date" required name="checkOut" value={formData.checkOut} onChange={handleChange}
                      style={{ colorScheme: 'dark' }}
                      className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium">Room Preference</label>
                  <select 
                    name="roomType" value={formData.roomType} onChange={handleChange}
                    className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-lg px-4 py-3 appearance-none focus:outline-none focus:border-gold-500 transition-colors"
                  >
                    <option value="double">Double Room (From K 1,451)</option>
                    <option value="twin">Twin Room (From K 1,650)</option>
                    <option value="deluxe">Deluxe Suite (From K 2,200)</option>
                  </select>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <button type="submit" className="flex-1 bg-gold-500 hover:bg-gold-400 text-zinc-950 py-4 rounded-xl font-bold tracking-wider transition-colors">
                    BOOK NOW
                  </button>
                  <a href="tel:0779959121" className="flex-1 border border-zinc-700 hover:border-white text-white py-4 rounded-xl font-medium tracking-wider transition-colors flex items-center justify-center">
                    CALL TO BOOK
                  </a>
                </div>
              </form>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
