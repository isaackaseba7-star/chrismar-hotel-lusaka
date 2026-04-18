import { MessageCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export function FloatingCTA() {
  const { scrollYProgress } = useScroll();
  // Hide the floating button near the top of the page (hero section)
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [0, 0, 1]);
  const pointerEvents = useTransform(scrollYProgress, (pos) => (pos > 0.1 ? 'auto' : 'none'));

  return (
    <motion.div 
      style={{ opacity, pointerEvents: pointerEvents as any }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4"
    >
      {/* Floating Book Now */}
      <a 
        href="#booking"
        className="bg-zinc-100 text-zinc-950 px-6 py-3 rounded-full font-bold shadow-[0_8px_30px_rgb(0,0,0,0.4)] shadow-black/50 hover:bg-white hover:scale-105 transition-all outline outline-1 outline-white/20 whitespace-nowrap text-sm tracking-wide flex items-center space-x-2"
      >
        <span className="relative flex h-3 w-3 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-gold-500"></span>
        </span>
        BOOK NOW
      </a>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/260779959121"
        target="_blank"
        rel="noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:bg-[#22bf5b] hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-zinc-950 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="drop-shadow-lg" />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-zinc-800 text-white text-xs px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-zinc-700">
          Chat with us!
        </span>
      </a>
    </motion.div>
  );
}
