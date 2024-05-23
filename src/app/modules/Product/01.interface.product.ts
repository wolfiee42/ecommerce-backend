export type Product = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: Array<string>;
  variants: Array<Varients>;
  inventory: Inventory;
};

type Varients = {
  type: string;
  value: string;
};

type Inventory = {
  quantity: number;
  inStock: boolean;
};
