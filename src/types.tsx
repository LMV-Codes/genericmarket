interface productImages {
  description: string;
  title: string;
  url: string;
}

export interface productProps {
  name: string;
  ean: string;
  image: string;
  description: string;
  price: string;
  netPrice: number;
  tags: string[];
  categories: string[];
  upc: string;
  images: productImages[];
}
