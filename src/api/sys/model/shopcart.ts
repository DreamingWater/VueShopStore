import { ProductInfoAttr } from '@/api/sys/model/product';

export interface ShopcartDetail extends ProductInfoAttr {
  total_price: number;
  quantity: number;
}
