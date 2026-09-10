export interface MenuItem {
  id: string;
  name: string;
  category: 'karahi' | 'bbq' | 'fish' | 'handi' | 'rice' | 'naan' | 'sides' | 'beverages';
  description: string;
  portionInfo?: string;
  priceNote?: string;
  image: string;
  badge?: string;
}

export interface MenuCategory {
  id: 'karahi' | 'bbq' | 'fish' | 'handi' | 'rice' | 'naan' | 'sides' | 'beverages';
  label: string;
  shortDesc: string;
}

export interface StoryItem {
  title: string;
  subtitle: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  caption: string;
  image: string;
}
