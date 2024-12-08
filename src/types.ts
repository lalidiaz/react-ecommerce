export interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category:
    | "cleansers"
    | "moisturizers"
    | "serums"
    | "masks"
    | "sunscreen"
    | "toners";
  company: string;
  colors: string[];
  featured: boolean;
  freeShipping: boolean;
  shipping: number;
  inventory: number;
  averageRating: number;
  numOfReviews: number;
  user: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
  id: number;
}

export interface LoaderDataProducts {
  products: Product[];
}
