export interface Product {
  id: number;
  category: string;
  name: string;
  description: string;
  productPrice: string;
  discount?: string;
  image: string;
  sliderImages?: { id: number; image: string; title: string }[];
  colors?: string[];
  sizes?: string[];
  material?: string;
  brand?: string;
  rating?: number;
  availableStock: number;
  sku?: string; // Stock Keeping Unit for identification
  gender?: string;
  warranty?: string;
  withProduct?: string;
}
