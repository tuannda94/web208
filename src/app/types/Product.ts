export type Product = {
  id: number,
  name: string
};

export type ProductCreate = {
  name: string
};

export type ProductCart = {
  id: number,
  name: string,
  value: number
};
