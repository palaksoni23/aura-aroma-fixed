export type MenuCategory = 'all' | 'coffee' | 'patisserie' | 'mains' | 'elixirs';

export type DietaryTag = 'Vegan' | 'Vegetarian' | 'Gluten-Free' | 'Chef Signature';

export interface MenuItem {
  id: string;
  name: string;
  tagline: string;
  category: 'coffee' | 'patisserie' | 'mains' | 'elixirs';
  price: number;
  description: string;
  tastingNotes: string[];
  ingredients: string[];
  dietary: DietaryTag[];
  image: string;
  pairingRecommendation?: string;
  isPopular?: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  instructions?: string;
}

export interface ReservationDetails {
  referenceId: string;
  guestName: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
  guestCount: number;
  seatingZone: string;
  occasion: string;
  specialRequests?: string;
  createdAt: string;
}

export interface AmbienceSpace {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  ambience: string;
  lighting: string;
  capacity: string;
  bestFor: string;
  image: string;
  features: string[];
}

export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  source: string;
  rating: number;
  dishLoved: string;
  date: string;
}
