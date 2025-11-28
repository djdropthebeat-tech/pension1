import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12 border-b border-stone-800 pb-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl text-white font-serif mb-6">The Joeun</h3>
            <p className="text-sm leading-relaxed mb-6">
              산과 바다가 빚어낸 천혜의 요새.<br/>
              오직 당신을 위한 프라이빗 럭셔리 스테이.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-amber-500 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-600 mt-0.5" />
                <span>강원도 어느 깊은 산속, <br/>바다가 보이는 언덕 123번지</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-600" />
                <span>010-1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-600" />
                <span>reservation@thejoeun.com</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
             <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Menu</h4>
             <ul className="space-y-2 text-sm">
               <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Rooms & Suites</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Special Offers</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Location</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
             </ul>
          </div>
        </div>

        <div className="text-center text-xs text-stone-600">
          © {new Date().getFullYear()} The Joeun Pension. All rights reserved. Designed for Luxury.
        </div>
      </div>
    </footer>
  );
};