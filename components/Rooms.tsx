import React from 'react';
import { Room } from '../types';
import { Button } from './Button';
import { Maximize2, Users, Wifi } from 'lucide-react';

const rooms: Room[] = [
  {
    id: 'room-a',
    name: 'The Horizon',
    type: 'Sunrise Suite (A타입)',
    description: '눈을 뜨는 순간, 침대 너머로 펼쳐지는 끝없는 수평선을 마주하세요. 더 호라이즌은 "바다와의 완전한 일체감"을 테마로 설계되었습니다. 전면 통유리창을 통해 쏟아지는 아침 햇살과 함께, 누구의 방해도 없는 인피니티 풀에서 황홀한 일출을 감상하실 수 있습니다. 오직 쉼에 집중할 수 있는 미니멀한 인테리어와 개방감 넘치는 구조가 당신의 마음을 씻어내립니다.',
    imageUrl: 'https://picsum.photos/id/1036/800/600',
    price: '₩450,000 / night',
    features: ['오션뷰 인피니티풀', '킹사이즈 구스 침구', '65인치 스마트 TV']
  },
  {
    id: 'room-b',
    name: 'The Serenity',
    type: 'Moonlight Villa (B타입)',
    description: '깊은 숲의 고요함 속에 은은하게 반짝이는 바다를 품었습니다. 더 세레니티는 "숲 속의 비밀스러운 안식처"입니다. 해가 지면 들려오는 파도 소리와 숲의 향기가 어우러져 깊은 숙면을 선물합니다. 따뜻한 우드 톤의 인테리어와 프라이빗 테라스에서의 와인 한 잔은 두 사람만의 로맨틱한 밤을 완성합니다. 달빛 아래 즐기는 웰컴 디너는 이 객실만의 특권입니다.',
    imageUrl: 'https://picsum.photos/id/238/800/600',
    price: '₩420,000 / night',
    features: ['포레스트 & 오션 뷰', '히노끼 욕조', '프라이빗 테라스']
  }
];

export const Rooms: React.FC = () => {
  return (
    <section id="rooms" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-medium tracking-wider uppercase text-sm">Accommodations</span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mt-3 mb-6">Suites & Villas</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            최고급 소재와 자연이 어우러진 공간. <br/>
            머무는 것만으로도 치유가 되는 특별한 하루를 선사합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {rooms.map((room) => (
            <div key={room.id} className="group bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={room.imageUrl} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 bg-slate-900/80 text-white px-6 py-2 backdrop-blur-sm">
                  <span className="font-serif italic text-lg">{room.type}</span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-2xl font-serif text-slate-900">{room.name}</h3>
                  <span className="text-lg text-amber-700 font-medium">{room.price}</span>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-6 text-sm text-justify">
                  {room.description}
                </p>

                <div className="flex gap-4 mb-8 text-slate-500 text-sm border-t border-slate-100 pt-6">
                   {room.features.map((feature, idx) => (
                     <span key={idx} className="flex items-center gap-1">
                       • {feature}
                     </span>
                   ))}
                </div>

                <Button variant="outline" fullWidth>
                  객실 상세보기
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};