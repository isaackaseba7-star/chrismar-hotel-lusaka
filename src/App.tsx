import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookingBar } from './components/BookingBar';
import { About } from './components/About';
import { Rooms } from './components/Rooms';
import { Amenities } from './components/Amenities';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-gold-500 selection:text-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <BookingBar />
        <About />
        <Rooms />
        <Amenities />
        <Gallery />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
