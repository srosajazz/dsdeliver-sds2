export type Product = {
  id: number;
  name: string;
  price: number;
  description: String;
  imageUri: string;
};

export type OrderLocationData = {
  latitude: number;
  longitude: number;
  address: string;
};

// payload
type ProductId = {
  id: number;
};
export type OrderPayload = {
  products: ProductId[];
} & OrderLocationData;
