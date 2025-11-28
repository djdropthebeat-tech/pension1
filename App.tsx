import React from 'react';
import { Hero } from './components/Hero';
import { Rooms } from './components/Rooms';
import { Amenities } from './components/Amenities';
import { Footer } from './components/Footer';
import { ConciergeBot } from './components/ConciergeBot';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-[2px]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="text-white font-serif text-2xl tracking-wide">
          The Joeun
        </div>
        <div className="hidden md:flex gap-8 text-white/90 text-sm font-medium tracking-widest uppercase">
          <a href="#" className="hover:text-amber-400 transition-colors">About</a>
          <a href="#rooms" className="hover:text-amber-400 transition-colors">Rooms</a>
          <a href="#" className="hover:text-amber-400 transition-colors">Dining</a>
          <a href="#" className="hover:text-amber-400 transition-colors">Contact</a>
        </div>
        <div className="md:hidden text-white">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-slate-800 selection:bg-amber-200 selection:text-amber-900">
      <Navbar />
      <main>
        <Hero />
        <Rooms />
        <Amenities />
      </main>
      <Footer />
      <ConciergeBot />
    </div>
  );
}

export default App;