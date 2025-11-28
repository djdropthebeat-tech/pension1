import React from 'react';
import { Button } from './Button';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToRooms = () => {
    document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/id/16/2500/1667" 
          alt="Ocean View Infinity Pool" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-7xl mx-auto">
        <h2 className="text-amber-400 tracking-[0.2em] text-sm md:text-base mb-6 font-medium uppercase animate-fade-in">
          Private Ocean Sanctuary
        </h2>
        
        <div className="space-y-4 mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
            산과 바다가 만나는 곳,<br />
            <span className="italic font-light">당신만의 완벽한 쉼표</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-light mt-4">
            오직 두 사람만을 위한 프라이빗 오션 럭셔리, 더조은 펜션
          </p>
        </div>

        <div className="animate-fade-in-up delay-200">
          <Button variant="secondary" size="lg" onClick={scrollToRooms}>
            나만의 힐링 예약하기
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50 cursor-pointer" onClick={scrollToRooms}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
};