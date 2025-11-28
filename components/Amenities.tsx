import React from 'react';
import { Amenity } from '../types';
import { Utensils, Waves, Moon, Camera, Sun, Coffee } from 'lucide-react';

const amenities: Amenity[] = [
  {
    id: 'a1',
    title: 'Infinity Pool',
    description: '전 객실 프라이빗 인피니티 풀에서 즐기는 바다와의 물아일체.',
    icon: 'Waves'
  },
  {
    id: 'a2',
    title: 'Chef\'s Welcome Dinner',
    description: '특급 호텔 출신 셰프가 제철 식재료로 준비한 로맨틱 코스 요리.',
    icon: 'Utensils'
  },
  {
    id: 'a3',
    title: 'Premium Bedding',
    description: '구름 위에 누운 듯한 최상급 구스 침구로 경험하는 완벽한 숙면.',
    icon: 'Moon'
  },
  {
    id: 'a4',
    title: 'Floating Breakfast',
    description: '아침 햇살 아래 수영장 위에서 즐기는 특별한 조식 (사전 예약 필수).',
    icon: 'Coffee'
  },
  {
    id: 'a5',
    title: 'Private Aroma Spa',
    description: '천연 아로마 오일과 입욕제가 포함된 스파 키트로 여행의 피로를 푸세요.',
    icon: 'Sun'
  },
  {
    id: 'a6',
    title: 'Starlight Cinema',
    description: '테라스에서 밤하늘의 별과 함께 즐기는 우리만의 야외 영화관.',
    icon: 'Camera'
  }
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Waves': return <Waves className="w-8 h-8" />;
    case 'Utensils': return <Utensils className="w-8 h-8" />;
    case 'Moon': return <Moon className="w-8 h-8" />;
    case 'Coffee': return <Coffee className="w-8 h-8" />;
    case 'Sun': return <Sun className="w-8 h-8" />;
    case 'Camera': return <Camera className="w-8 h-8" />;
    default: return <Waves className="w-8 h-8" />;
  }
};

export const Amenities: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Header Area */}
          <div className="lg:col-span-1">
            <span className="text-amber-500 font-medium tracking-wider uppercase text-sm">Signature Services</span>
            <h2 className="text-4xl font-serif mt-3 mb-6 leading-tight">
              Exclusive <br/> Experiences
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              더조은 펜션은 단순히 잠을 자는 곳이 아닙니다. <br/>
              미식, 휴식, 그리고 잊지 못할 추억을 위한 <br/>
              세심한 큐레이션을 경험해보세요.
            </p>
            <div className="w-16 h-1 bg-amber-500 mb-8"></div>
          </div>

          {/* Grid Area */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {amenities.map((item) => (
              <div key={item.id} className="flex gap-4 p-6 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors border border-slate-700/50">
                <div className="text-amber-500 shrink-0 mt-1">
                  {getIcon(item.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2 font-serif">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};