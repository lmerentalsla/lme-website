export type Product = {
  id: number;
  title: string;
  price: string;
  image: string | null;
  description: string;
  type: string;
  tags: string;
};

export type Collection = {
  title: string;
  handle: string;
  description: string;
  products: Product[];
};

const STORE = 'rentalsbylme.myshopify.com';

async function fetchShopify(path: string) {
  const res = await fetch(`https://${STORE}${path}`, { next: { revalidate: 3600 } });
  return res.json();
}

export async function getAllProducts(): Promise<Product[]> {
  const data = await fetchShopify('/products.json?limit=250');
  return data.products.map((p: any) => ({
    id: p.id,
    title: p.title,
    price: p.variants[0]?.price || '0.00',
    image: p.images[0]?.src || null,
    description: p.body_html?.replace(/<[^>]+>/g, '').trim() || '',
    type: p.product_type || '',
    tags: p.tags || '',
  }));
}

export async function getCollectionProducts(handle: string): Promise<Product[]> {
  const data = await fetchShopify(`/collections/${handle}/products.json?limit=250`);
  return (data.products || []).map((p: any) => ({
    id: p.id,
    title: p.title,
    price: p.variants[0]?.price || '0.00',
    image: p.images[0]?.src || null,
    description: p.body_html?.replace(/<[^>]+>/g, '').trim() || '',
    type: p.product_type || '',
    tags: p.tags || '',
  }));
}

export const COLLECTIONS = [
  { handle: 'chairs',            title: 'Chairs',            emoji: '🪑', description: 'Chiavari, folding, cross back & more' },
  { handle: 'barstools',         title: 'Barstools',         emoji: '🍸', description: 'Perfect for cocktail hour setups' },
  { handle: 'tables',            title: 'Tables',            emoji: '🪵', description: 'Round, rectangular & farmhouse tables' },
  { handle: 'tents',             title: 'Tents',             emoji: '⛺', description: 'Cover any size outdoor event' },
  { handle: 'kids-collection',   title: 'Kids Collection',   emoji: '🎈', description: 'Right-sized furniture for little ones' },
  { handle: 'linen',             title: 'Linens',            emoji: '🎀', description: 'Tablecloths & linen rentals' },
  { handle: 'equipment-decor',   title: 'Equipment & Décor', emoji: '💡', description: 'Heaters, umbrellas, lighting & more' },
];
