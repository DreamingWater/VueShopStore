//////////////////////////////////// Return Data begin   //////////////////////
export interface BaseProduct {
  id: number;
  name: string;
  unit_price: number;
  cover: string;
}

export interface ProductInfo extends BaseProduct {
  old_price: number;
  description: string;
}

interface AttributionMeta {
  isChecked: number;
  id: number;
  saleAttrValueName: string;
}
interface ProductAttrList {
  id: number;
  saleAttrName: string;
  saleAttrValueList: AttributionMeta[];
}

export interface ProductInfoAttr extends ProductInfo {
  productAttrList: ProductAttrList[];
}
export interface ProductDetail extends ProductInfoAttr {
  images: string[];
  monthSalesOut: number;
}
// export interface ProductItem extends ProductInfo{
//   icon: string;
//   title: string;
//   value: number;
//   total: number;
//   color: string;
//   action: string;
// }

//////////////////////////////////// Return Data end   ////////////////////////

//////////////////////////////////// Request Data begin   //////////////////////
export enum RequestShowDataClassEnum {
  MALE_CUP,
  MALE_CLOTHES,
  MALE_PANTS,
  FEMALE_DRESS,
}

export const ClassShowName = [
  {
    key: RequestShowDataClassEnum.MALE_CUP,
    string: 'MaleCupString',
  },
  {
    key: RequestShowDataClassEnum.MALE_CLOTHES,
    string: 'MaleClothesString',
  },
  {
    key: RequestShowDataClassEnum.MALE_PANTS,
    string: 'MalePantsString',
  },
  {
    key: RequestShowDataClassEnum.FEMALE_DRESS,
    string: 'FEMaleDressString',
  },
]
export interface RequestShowData {
  class: RequestShowDataClassEnum;
  currentPage: number;
  pageNums: number;
}


//////////////////////////////////// Request Data end  //////////////////////
