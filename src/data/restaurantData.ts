import { MenuItem, AmbienceSpace, ReviewItem } from '../types';

export const RESTAURANT_INFO = {
  name: 'AURA & AROMA',
  tagline: 'Where Flavours Meet Feelings.',
  heroHeading: 'TASTE THE ART OF LIVING.',
  heroSubheading: 'A little coffee. A little magic. A whole lot of flavour.',
  location: 'Heritage Haveli Pavilion, Opp. Moosi Maharani ki Chhatri Road, Civil Lines, Alwar, Rajasthan 301001, India',
  city: 'Alwar, Rajasthan',
  developer: 'Palak Soni',
  developerRole: 'Creative Director & Web Development Engineer',
  phone: '+91 98290 84721',
  email: 'concierge@auraandaroma.in',
  hours: {
    weekdays: '8:00 AM – 11:30 PM',
    weekends: '8:00 AM – 12:30 AM',
    highTea: '4:00 PM – 7:00 PM',
    dinnerRooftop: '7:30 PM – 12:00 AM'
  }
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'dish-risotto',
    name: 'Wild Forest Truffle Risotto',
    tagline: 'Signature Arborio · Summer Truffles · Aged Parmigiano',
    category: 'mains',
    price: 840,
    description: 'Slow-simmered Carnaroli rice infused with foraged Aravali wild morels, shaved Italian black summer truffles, organic mascarpone, and edible gold leaf flake.',
    tastingNotes: ['Earthy Umami', 'Velvety Creaminess', 'Nutty Truffle Aroma', 'Delicate Herb Finish'],
    ingredients: ['Carnaroli Rice', 'Black Summer Truffles', 'Wild Morel Mushrooms', 'Aged Parmigiano Reggiano', 'White Truffle Oil', 'Edible 24K Gold Leaf'],
    dietary: ['Vegetarian', 'Chef Signature'],
    image: '/images/culinary_signature_dish.jpg',
    pairingRecommendation: 'Vintage Oaked Chardonnay or Smoked Espresso Tonic',
    isPopular: true
  },
  {
    id: 'dish-cruffin',
    name: 'Alwar Cardamom & Saffron Cruffin',
    tagline: 'Laminated Viennoiserie · Green Cardamom Cream · Gold Flake',
    category: 'patisserie',
    price: 360,
    description: '72-layered flaky French butter croissant muffin infused with fragrant green cardamom custard, finished with candied orange zest and Kashmiri saffron drizzle.',
    tastingNotes: ['Crisp Flaky Shell', 'Aromatic Cardamom Core', 'Bright Citrus Zest', 'Floral Saffron Honey'],
    ingredients: ['French Normandy Butter', 'T55 Flour', 'Green Cardamom Custard', 'Kashmiri Saffron', 'Candied Bitter Orange', 'Pistachio Crumble'],
    dietary: ['Vegetarian', 'Chef Signature'],
    image: '/images/patisserie_pastry_showcase.jpg',
    pairingRecommendation: 'Spanish Saffron Cortado or Single-Origin Ethiopian Pour-Over',
    isPopular: true
  },
  {
    id: 'dish-single-origin',
    name: 'Chikmagalur Estate Reserve Pour-Over',
    tagline: 'Direct-Trade Micro-Lot · Filter Roast · V60 Brewed',
    category: 'coffee',
    price: 320,
    description: 'Single-origin Arabica cultivated at 1,400 meters altitude in Karnataka shade-grown canopies. Hand-poured using ceramic V60 at precise 92°C extraction.',
    tastingNotes: ['Jasmine Floral', 'Stone Peach', 'Brown Sugar Honey', 'Crisp Bergamot Finish'],
    ingredients: ['100% Single-Origin Washed Arabica Beans', 'Filtered Mineral Spring Water'],
    dietary: ['Vegan', 'Gluten-Free'],
    image: '/images/hero_cafe_luxury.jpg',
    pairingRecommendation: 'Dark Valrhona Chocolate Mousse Tart',
    isPopular: true
  },
  {
    id: 'dish-valrhona-tart',
    name: 'Valrhona 70% Noir & Smoked Sea Salt Tart',
    tagline: 'Guanaja Ganache · Sablé Breton · 24k Gold Garnish',
    category: 'patisserie',
    price: 420,
    description: 'Dark French Valrhona Guanaja chocolate ganache layered with silky smoked salted caramel inside a crisp dark cocoa sablé crust.',
    tastingNotes: ['Intense Bittersweet Cocoa', 'Gooey Butter Caramel', 'Crunchy Flaky Salt', 'Smoky Oak Notes'],
    ingredients: ['Valrhona 70% Guanaja Chocolate', 'Isigny Ste Mère Cream', 'Fleur de Sel de Guérande', 'Dark Cocoa Butter Crust', 'Gold Leaf'],
    dietary: ['Vegetarian'],
    image: '/images/patisserie_pastry_showcase.jpg',
    pairingRecommendation: 'Double-Shot Ristretto or Smoked Espresso Negroni',
    isPopular: true
  },
  {
    id: 'dish-saffron-latte',
    name: 'Royal Saffron Pistachio Cortado',
    tagline: 'Kashmiri Saffron Infusion · Iranian Pistachio Praline · Microfoam',
    category: 'coffee',
    price: 380,
    description: 'Double shot of custom espresso married with warm steamed oat milk, infused with steeped saffron threads and roasted Iranian pistachio purée.',
    tastingNotes: ['Velvety Nutty Warmth', 'Subtle Royal Saffron Bloom', 'Dark Caramelised Espresso', 'Silky Microfoam'],
    ingredients: ['Specialty Espresso Blend', 'Steamed Organic Oat Milk', 'Kashmiri Saffron', 'Pistachio Butter', 'Crushed Pistachio Dust'],
    dietary: ['Vegetarian', 'Gluten-Free', 'Chef Signature'],
    image: '/images/hero_cafe_luxury.jpg',
    pairingRecommendation: 'Cardamom Almond Frangipane Brioche',
    isPopular: true
  },
  {
    id: 'dish-burrata',
    name: 'Artisan Burrata & Heirloom Peach Woodfired Sourdough',
    tagline: 'Pugliese Burrata · Foraged Herbs · 48-Hour Fermented Dough',
    category: 'mains',
    price: 690,
    description: 'Creamy fresh burrata served over wood-grilled sourdough with compressed peaches, balsamic glaze from Modena, and fresh basil picked from our courtyard garden.',
    tastingNotes: ['Lactic Fresh Creaminess', 'Charred Sourdough Crunch', 'Tangy Balsamic Glaze', 'Sweet Peaches'],
    ingredients: ['Handmade Burrata', '48hr Naturally Fermented Sourdough', 'Caramelized Peaches', 'Aged Balsamic of Modena', 'Extra Virgin Olive Oil', 'Micro-Basil'],
    dietary: ['Vegetarian'],
    image: '/images/culinary_signature_dish.jpg',
    pairingRecommendation: 'Hibiscus Lychee Sparkling Elixir'
  },
  {
    id: 'dish-smoked-negroni',
    name: 'Smoked Espresso Zero-Proof Negroni',
    tagline: 'Cold Brew Extraction · Juniper Botanical · Smoked Orange Bitters',
    category: 'elixirs',
    price: 460,
    description: 'An artisanal zero-proof elixir capturing rich aperitivo depths. Cold-extracted espresso stirred with non-alcoholic bitter botanicals, poured over hand-carved crystal ice and torched rosemary.',
    tastingNotes: ['Bitter Blood Orange', 'Herbal Juniper & Gentian', 'Rich Roasted Coffee Bean', 'Aromatic Woodsmoke'],
    ingredients: ['24-Hour Cold Brew Extract', 'Distilled Botanical Bitter Aperitif', 'Seville Orange Peel', 'Torched Organic Rosemary', 'Clear Artisanal Block Ice'],
    dietary: ['Vegan', 'Gluten-Free', 'Chef Signature'],
    image: '/images/rooftop_dining_evening.jpg',
    pairingRecommendation: 'Forest Mushroom Risotto or Truffle Fries',
    isPopular: true
  },
  {
    id: 'dish-hibiscus-spritz',
    name: 'Sunset Lychee & Sparkling Hibiscus Spritz',
    tagline: 'Infused Wild Hibiscus · Lychee Nectar · Elderflower Fizz',
    category: 'elixirs',
    price: 390,
    description: 'Fresh crimson hibiscus blossom brew shaken with sweet floral lychee nectar, clarified lime juice, and carbonated mountain spring water garnished with edible violets.',
    tastingNotes: ['Tart Berry Sparkle', 'Fragrant Lychee Sweetness', 'Effervescent Crisp Finish', 'Floral Bloom'],
    ingredients: ['Wild Hibiscus Petals', 'Lychee Essence', 'Clarified Lime', 'Elderflower Extract', 'Mineral Sparkling Water', 'Edible Spring Flowers'],
    dietary: ['Vegan', 'Gluten-Free'],
    image: '/images/rooftop_dining_evening.jpg',
    pairingRecommendation: 'French Butter Viennoiserie'
  }
];

export const SPACES_DATA: AmbienceSpace[] = [
  {
    id: 'rooftop',
    name: 'The Starlit Aravali Rooftop',
    subtitle: 'Golden Hour & Twilight Fine Dining',
    description: 'Perched high above the historic city of Alwar with panoramic silhouettes of the ancient Aravali ridges, our terrace features gossamer fabric canopies, glowing brass lanterns, and romantic table linens.',
    ambience: 'Open-air, gentle mountain breeze, romantic twilight glow, acoustic warmth.',
    lighting: 'Handcrafted Moroccan brass candle lanterns and ambient golden filaments.',
    capacity: '65 seats (Private table arrangements & intimate alcoves)',
    bestFor: 'Anniversary dinners, sunset cocktails, celebratory feasts under the stars.',
    image: '/images/rooftop_dining_evening.jpg',
    features: ['Panoramic Aravali Vista', 'Starlit Canopy Seating', 'Live Vinyl Acoustic Sessions', 'Dedicated Sommelier Service']
  },
  {
    id: 'glasshouse',
    name: 'The Conservatory Botanical Glasshouse',
    subtitle: 'Sun-Drenched Garden & Brunch Sanctuary',
    description: 'A light-filled architectural marvel encased in brass-framed glass, surrounded by mature olive trees, fragrant jasmine vines, and terrazzo tile floors. The ultimate sanctuary for morning coffee and brunch.',
    ambience: 'Airy, botanical tranquility, gentle sunbeams, tranquil water fountain murmur.',
    lighting: 'Filtered natural daylight and warm vintage glass globe pendants.',
    capacity: '48 seats',
    bestFor: 'Morning brew rituals, slow weekends, editorial brunch, creative conversations.',
    image: '/images/hero_cafe_luxury.jpg',
    features: ['Living Botanical Walls', 'Natural Sunlit Glasshouse', 'Specialty Pour-over Bar', 'Quiet Reading Corner']
  },
  {
    id: 'velvet-lounge',
    name: 'The Espresso Bar & Velvet Lounge',
    subtitle: 'Artisanal Roastery, Tactile Marble & Bespoke Leather',
    description: 'The sensory heart of Aura & Aroma. Hand-carved Italian marble counters, bespoke leather banquettes, gleaming Slayer espresso machines, and the rich, intoxicating fragrance of freshly roasted specialty beans.',
    ambience: 'Bustling artisanal roastery hum, deep espresso aroma, sophisticated warmth.',
    lighting: 'Warm amber spotlights illuminating the marble roastery counter.',
    capacity: '36 seats',
    bestFor: 'Artisanal coffee tastings, laptop work sessions, espresso pairing journeys.',
    image: '/images/hero_cafe_luxury.jpg',
    features: ['On-Site Roastery View', 'Precision Pour-Over Bench', 'Imported Slayer Espresso Unit', 'Single-Origin Bean Showcase']
  },
  {
    id: 'private-cellar',
    name: 'The Heritage Haveli Cellar',
    subtitle: 'Exclusive Tasting Room & Private Banquet',
    description: 'Carved with sandstone arches dating back decades, this intimate private room offers a bespoke 7-course chef tasting menu accompanied by custom pairing elixirs and discreet personal service.',
    ambience: 'Ultra-exclusive, candlelit stone arches, acoustic silence, reverent dining.',
    lighting: 'Subtle recessed warm uplighting and candelabras.',
    capacity: '14 guests private buyout',
    bestFor: 'VIP private dining, family milestones, executive summit dinners.',
    image: '/images/culinary_signature_dish.jpg',
    features: ['Bespoke 7-Course Tasting', 'Private Dedicated Butler', 'Sandstone Architectural Arches', 'Custom Menu Printing']
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    quote: 'Aura & Aroma has redefined contemporary luxury hospitality in Rajasthan. The wild mushroom truffle risotto paired with their cold brew zero-proof negroni on the rooftop is nothing short of transcendent.',
    author: 'Vikramaditya Rathore',
    source: 'The Epicurean Standard',
    rating: 5,
    dishLoved: 'Wild Forest Truffle Risotto',
    date: 'February 2026'
  },
  {
    id: 'rev-2',
    quote: 'From the warm terracotta and marble aesthetic to the sublime Alwar Cardamom Cruffin, every micro-detail feels orchestrated by true artisans. Palak Soni’s digital flagship captures this elegance flawlessly.',
    author: 'Natasha Fernandez',
    source: 'Luxury Dining & Travel Asia',
    rating: 5,
    dishLoved: 'Cardamom & Saffron Cruffin',
    date: 'January 2026'
  },
  {
    id: 'rev-3',
    quote: 'Sitting under the brass lanterns on the Starlit Rooftop while the evening cool descends over the Aravali hills is an unforgettable dining memory. A masterclass in atmosphere and culinary craft.',
    author: 'Devendra Singhania',
    source: 'Connoisseur Club Jaipur',
    rating: 5,
    dishLoved: 'Royal Saffron Pistachio Cortado',
    date: 'October 2025'
  }
];

export const SENSORY_PHILOSOPHY = [
  {
    title: 'Single-Origin Bean Sourcing',
    metric: '1,400m',
    context: 'Elevation of our estate coffee micro-lots in Chikmagalur & Yirgacheffe.',
    description: 'We source exclusively from sustainable shade-grown family farms, roasting on-site weekly in micro-batches to honor every nuance of terroir.'
  },
  {
    title: '72-Hour Viennoiserie Lamination',
    metric: '84%',
    context: 'Pure French Normandy churned butter fat content in our pastry lamination.',
    description: 'Our head boulanger blends traditional Parisian pastry technique with native Indian botanicals like Alwar green cardamom and raw wild honey.'
  },
  {
    title: 'Zero-Waste Kitchen Philosophy',
    metric: '100%',
    context: 'Spent espresso grounds composted into our kitchen rooftop herb garden.',
    description: 'From rosemary grown on our rooftop to seasonal peaches from regional orchards, our culinary team operates with deep reverence for natural cycles.'
  }
];
