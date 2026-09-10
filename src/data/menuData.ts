import { MenuItem, MenuCategory, StoryItem, GalleryItem } from '../types';

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'karahi', label: 'Karahi', shortDesc: 'Signature woks cooked live on high heat' },
  { id: 'bbq', label: 'BBQ', shortDesc: 'Charcoal grilled skewers & tikkas' },
  { id: 'fish', label: 'Fish', shortDesc: 'Fresh catch fried, curried & grilled' },
  { id: 'handi', label: 'Handi', shortDesc: 'Rich gravies simmered in clay pots' },
  { id: 'rice', label: 'Rice', shortDesc: 'Fragrant basmati biryani & pulao' },
  { id: 'naan', label: 'Naan & Roti', shortDesc: 'Freshly baked tandoori breads' },
  { id: 'sides', label: 'Sides', shortDesc: 'Cooling raita & fresh garden salad' },
  { id: 'beverages', label: 'Beverages', shortDesc: 'Chilled soft drinks & traditional refreshers' }
];

export const MENU_ITEMS: MenuItem[] = [
  // KARAHI
  {
    id: 'chicken-karahi',
    name: 'Chicken Karahi',
    category: 'karahi',
    description: 'Fresh bone-in chicken cooked in a traditional iron wok with fresh tomatoes, ginger, green chilies, and black pepper.',
    portionInfo: 'Available in Half KG / Full KG',
    priceNote: 'Price on request (By Weight)',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    badge: 'Popular'
  },
  {
    id: 'mutton-karahi',
    name: 'Mutton Karahi',
    category: 'karahi',
    description: 'Tender mutton cooked slow then tossed on high flame with ripe tomatoes, desi spices, and aromatic coriander.',
    portionInfo: 'Available in Half KG / Full KG',
    priceNote: 'Price on request (By Weight)',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80',
    badge: 'Signature'
  },
  {
    id: 'desi-chicken-karahi',
    name: 'Desi Chicken Karahi',
    category: 'karahi',
    description: 'Organic free-range country chicken cooked the authentic way with rich Punjabi spices in pure desi ghee.',
    portionInfo: 'Available in Half KG / Full KG',
    priceNote: 'Price on request (By Weight)',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
    badge: 'Traditional'
  },
  {
    id: 'white-karahi',
    name: 'White Karahi',
    category: 'karahi',
    description: 'Creamy and velvety karahi prepared with fresh yogurt, cream, crushed black pepper, and slivered ginger.',
    portionInfo: 'Available in Half KG / Full KG',
    priceNote: 'Price on request (By Weight)',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'boneless-chicken-karahi',
    name: 'Boneless Chicken Karahi',
    category: 'karahi',
    description: 'Succulent boneless chicken breast and thigh chunks cooked in thick masala for a convenient, flavorful feast.',
    portionInfo: 'Available in Half KG / Full KG',
    priceNote: 'Price on request (By Weight)',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80'
  },

  // BBQ
  {
    id: 'chicken-tikka',
    name: 'Chicken Tikka',
    category: 'bbq',
    description: 'Juicy chicken leg or breast quarter marinated in spicy yogurt blend, char-grilled to smoky perfection over open coals.',
    portionInfo: 'Per Piece (Leg / Breast)',
    priceNote: 'Price on request',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    badge: 'Charcoal Grilled'
  },
  {
    id: 'chicken-boti',
    name: 'Chicken Boti',
    category: 'bbq',
    description: 'Bite-sized boneless chicken cubes infused with papaya, garlic, and special barbecue masala.',
    portionInfo: 'Plate (8-10 Pieces)',
    priceNote: 'Price on request',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'seekh-kabab',
    name: 'Seekh Kabab',
    category: 'bbq',
    description: 'Finely minced meat blended with coriander, mint, onions, and garam masala, grilled on iron skewers.',
    portionInfo: 'Plate (4 Skewers)',
    priceNote: 'Price on request',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80',
    badge: 'Classic'
  },
  {
    id: 'reshmi-kabab',
    name: 'Reshmi Kabab',
    category: 'bbq',
    description: 'Melt-in-mouth chicken mince skewers prepared with fresh dairy cream, mild green chilies, and saffron.',
    portionInfo: 'Plate (4 Skewers)',
    priceNote: 'Price on request',
    image: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=800&q=80'
  },

  // FISH
  {
    id: 'fish-curry',
    name: 'Fish Curry',
    category: 'fish',
    description: 'Delicate fish steaks simmered in a spiced tomato and fenugreek gravy with fresh lemon zest.',
    portionInfo: 'Single Bowl Serving',
    priceNote: 'Price on request',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fried-fish',
    name: 'Fried Fish',
    category: 'fish',
    description: 'Crispy gram-flour battered fish steaks seasoned with ajwain (carom seeds), crushed red pepper, and chaat masala.',
    portionInfo: 'Available by Weight (KG)',
    priceNote: 'Price on request (By Weight)',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    badge: 'Crispy'
  },
  {
    id: 'fish-tikka',
    name: 'Fish Tikka',
    category: 'fish',
    description: 'Boneless fish cubes marinated in tandoori spices, char-grilled over hot coals and brushed with herb butter.',
    portionInfo: 'Plate (8-10 Cubes)',
    priceNote: 'Price on request',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },

  // HANDI
  {
    id: 'chicken-handi',
    name: 'Chicken Handi',
    category: 'handi',
    description: 'Tender chicken simmered slowly inside a traditional clay handi with onions, tomatoes, and aromatic whole spices.',
    portionInfo: 'Half / Full Handi',
    priceNote: 'Price on request',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
    badge: 'Clay Pot'
  },
  {
    id: 'makhni-handi',
    name: 'Makhni Handi',
    category: 'handi',
    description: 'Rich and buttery boneless chicken handi prepared with cashew paste, tomato coulis, and fresh butter dollops.',
    portionInfo: 'Half / Full Handi',
    priceNote: 'Price on request',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80'
  },

  // RICE
  {
    id: 'chicken-biryani',
    name: 'Chicken Biryani',
    category: 'rice',
    description: 'Aromatic aged long-grain basmati rice layered with spiced chicken, caramelized onions, mint, and saffron.',
    portionInfo: 'Single / Double Plate',
    priceNote: 'Price on request',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    badge: 'Special'
  },
  {
    id: 'pulao',
    name: 'Pulao',
    category: 'rice',
    description: 'Fragrant basmati rice gently cooked in seasoned chicken broth with whole cumin, cloves, and cardamom.',
    portionInfo: 'Single / Double Plate',
    priceNote: 'Price on request',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80'
  },

  // NAAN & ROTI
  {
    id: 'sada-naan',
    name: 'Sada Naan',
    category: 'naan',
    description: 'Fluffy, traditional tandoori naan baked fresh to order in the clay oven.',
    portionInfo: 'Per Piece',
    priceNote: 'Price on request',
    image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'roghni-naan',
    name: 'Roghni Naan',
    category: 'naan',
    description: 'Soft tandoori bread glazed with milk and butter, sprinkled generously with roasted sesame seeds.',
    portionInfo: 'Per Piece',
    priceNote: 'Price on request',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80',
    badge: 'Tandoori Favorite'
  },
  {
    id: 'garlic-naan',
    name: 'Garlic Naan',
    category: 'naan',
    description: 'Crisp naan infused with freshly crushed garlic and chopped coriander, brushed with desi ghee.',
    portionInfo: 'Per Piece',
    priceNote: 'Price on request',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cheese-naan',
    name: 'Cheese Naan',
    category: 'naan',
    description: 'Warm tandoor bread stuffed with gooey mozzarella and mild herbs, served hot.',
    portionInfo: 'Per Piece',
    priceNote: 'Price on request',
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80'
  },

  // SIDES
  {
    id: 'raita',
    name: 'Raita',
    category: 'sides',
    description: 'Chilled whisked yogurt seasoned with roasted cumin powder, fresh mint paste, and black salt.',
    portionInfo: 'Single Bowl',
    priceNote: 'Price on request',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fresh-salad',
    name: 'Fresh Salad',
    category: 'sides',
    description: 'Crisp garden platter of sliced red onions, fresh cucumbers, ripe tomatoes, green chilies, and lemon wedges.',
    portionInfo: 'Platter',
    priceNote: 'Price on request',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80'
  },

  // BEVERAGES
  {
    id: 'soft-drinks',
    name: 'Soft Drinks',
    category: 'beverages',
    description: 'Assorted chilled carbonated drinks served ice-cold in cans or glass bottles.',
    portionInfo: 'Regular / Can',
    priceNote: 'Price on request',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'traditional-drinks',
    name: 'Traditional Drinks',
    category: 'beverages',
    description: 'Refreshing desi drinks including chilled Mint Lemonade, sweet or salty Lassi, and Fresh Lime soda.',
    portionInfo: 'Glass / Jug',
    priceNote: 'Price on request',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    badge: 'Chilled'
  }
];

export const SIGNATURE_KARAHI_ITEMS = [
  {
    id: 'fav-chicken-karahi',
    name: 'Chicken Karahi',
    description: 'The timeless Rawalpindi favorite. Fresh chicken seared in cast iron with plum tomatoes, crushed black pepper, and julienned ginger.',
    portion: 'Half KG • Full KG',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85',
    tag: 'All-Time Classic'
  },
  {
    id: 'fav-mutton-karahi',
    name: 'Mutton Karahi',
    description: 'Succulent prime mutton pieces braised until tender, then finished on roaring fire with freshly ground spices and green chilies.',
    portion: 'Half KG • Full KG',
    image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=900&q=85',
    tag: 'Chef Recommendation'
  },
  {
    id: 'fav-desi-chicken-karahi',
    name: 'Desi Chicken Karahi',
    description: 'Authentic desi murgh prepared in pure golden ghee with robust Punjabi masala and fresh coriander leaves.',
    portion: 'Half KG • Full KG',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85',
    tag: 'Pure Desi Ghee'
  },
  {
    id: 'fav-white-karahi',
    name: 'White Karahi',
    description: 'A smooth, velvety preparation cooked in fresh cream, yogurt, and cracked white pepper for those who love rich, milder flavors.',
    portion: 'Half KG • Full KG',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=900&q=85',
    tag: 'Creamy Mild'
  }
];

export const VISUAL_STORY_ITEMS: StoryItem[] = [
  {
    title: 'Sizzling Karahi on Flame',
    subtitle: 'High-heat iron wok cooking that locks in authentic flavors and juices.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Fresh Tandoor Breads',
    subtitle: 'Piping hot naans slapped directly onto clay tandoor walls.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Charcoal BBQ Skewers',
    subtitle: 'Smoky tikkas and tender kababs grilled over glowing coals.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Traditional Desi Presentation',
    subtitle: 'Served piping hot in traditional round karahis straight to your table.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    caption: 'Fresh Chicken Karahi in traditional black iron wok',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-2',
    caption: 'Charcoal grilled Chicken Tikka and BBQ platter',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-3',
    caption: 'Tandoori Roghni Naan freshly baked with sesame seeds',
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-4',
    caption: 'Clay pot Chicken Handi garnished with fresh ginger',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-5',
    caption: 'Aromatic Basmati Chicken Biryani with spices',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gal-6',
    caption: 'Traditional dining setup with cooling raita & fresh salad',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80'
  }
];
