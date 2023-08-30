import { ProductInfo } from '@/api/sys/model/product';

export interface OrderDetail extends ProductInfo {
  total_price: number;
  quantity: number;
  specifications: {
    [key: string]: string;
  };
}


export interface OrderItem {
  shippingState: number;
  order_number: number;
  order_items: OrderDetail[];
  order_price: number;
  username: string;
  address: string;
  phone: string;
}

export interface TradeUser {
  username: string;
  phone: string;
  address: string;
  email: string;
  country: string;
  state: string;
}
