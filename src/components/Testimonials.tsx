import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    text: "Comfortable stay, great location and friendly staff. Will definitely come back on my next business trip to Lusaka.",
    author: "Michael T.",
    type: "Business Traveler"
  },
  {
    id: 2,
    text: "The pool area is fantastic and the rooms are very well kept. Excellent value for money in a safe, central neighborhood.",
    author: "Sarah J.",
    type: "Holiday Maker"
  },
  {
    id: 3,
    text: "A hidden gem. The proximity to local dining and cultural spots made our stay memorable. Highly recommended.",
    author: "David & Emma",
    type: "Couple"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-900 opacity-20 pointer-events-none">
        <Quote size={400} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <p className="text-gold-500 text-sm tracking-[0.2em] uppercase font-semibold mb-4">
              Guest Feedback
            </p>
            <h2 className="font-serif text-4xl mb-6 leading-tight">
              What Our <br />
              <span className="italic text-zinc-400">Guests Say</span>
            </h2>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-5xl font-mono text-white font-light">3.7</div>
              <div className="flex flex-col">
                <div className="flex text-gold-500 mb-1">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" opacity={0.7} />
                  <Star size={18} className="text-zinc-700" />
                </div>
                <span className="text-sm text-zinc-400">Based on 815 reviews</span>
              </div>
            </div>
            
            <p className="text-zinc-500 text-sm mb-8">
              Verified reviews from our recent guests on major booking platforms.
            </p>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className={`bg-zinc-900 border border-zinc-800 rounded-2xl p-8 relative ${i === 2 ? 'sm:col-span-2 sm:w-1/2 sm:justify-self-center' : ''}`}
              >
                <div className="flex text-gold-500 mb-6 space-x-1">
                  {[1,2,3,4,5].map(star => <Star key={star} size={14} fill="currentColor" />)}
                </div>
                <p className="text-zinc-300 font-light italic leading-relaxed mb-6">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between border-t border-zinc-800/50 pt-4">
                  <span className="text-white font-medium">{review.author}</span>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider">{review.type}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
