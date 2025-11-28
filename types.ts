export interface Room {
  id: string;
  name: string;
  type: string;
  description: string;
  imageUrl: string;
  price: string;
  features: string[];
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}