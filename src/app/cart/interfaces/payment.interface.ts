export interface OrderData {
  payservice: string;
  items: Item[];
  products: Product[];
  envio: Envio;
}

export interface Item {
  title: string;
  unit_price: number;
  currency_id: string;
  quantity: number;
}

export interface Product {
  id_producto: number;
  cantidad_producto: number;
  monto_total: number;
}

 export interface Envio {
  paqueteria: string;
}
