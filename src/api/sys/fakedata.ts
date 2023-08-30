import { ProductDetail } from "@/api/sys/model/product";
import { SalesCardItem } from "@/views/dashboard/analysis/data";
import { OrderItem } from "/@/api/sys/model/orderModel";
import { ShopcartDetail } from "@/api/sys/model/shopcart";
import { shipBaseInfo, shipInfo } from "@/api/sys/model/shipment";

// Order 数据
export const orderData: OrderItem[] = [
  {
    order_number: 1,
    shippingState: 0,
    order_price: 100,
    username: 'ming',
    address: '加利福利亚第三街道238号',
    phone: '343243223432',
    order_items: [
      {
        id: 1,
        quantity: 1,
        unit_price: 10,
        old_price: 13,
        total_price: 10,
        name: 'hello',
        description: 'fd',
        cover:
          'https://th.bing.com/th/id/OIP.t71OfSJTvjDohO1CFoyJRwHaHa?w=186&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        specifications: { color: 'red', size: 'big' },
      },
      {
        id: 2,
        quantity: 2,
        old_price:13,
        unit_price: 16,
        total_price: 32,
        name: 'the most funny toy',
        description: 'fd12',
        cover:
          'https://th.bing.com/th/id/OIP.t71OfSJTvjDohO1CFoyJRwHaHa?w=186&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        specifications: { color: 'red', size: 'big' },
      },
    ],

  },
  {
    order_number: 2,
    shippingState: 464564,
    order_price: 101,
    username: 'hong',
    address: '加州长河三街道28号',
    phone: '9989-230900',
    order_items: [
      {
        id: 1,
        quantity: 1,
        old_price:13,
        unit_price: 12,
        total_price: 12,
        name: 'helo',
        description: 'fd1rte2',
        cover:
          'https://th.bing.com/th/id/OIP.t71OfSJTvjDohO1CFoyJRwHaHa?w=186&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        specifications: { color: 'red', size: 'big' },
      },
      {
        id: 2,
        quantity: 2,
        unit_price: 22,
        old_price:13,
        total_price: 44,
        name: 'the most funny toy',
        description: 'fd1rtrerere2',
        cover:
          'https://th.bing.com/th/id/OIP.t71OfSJTvjDohO1CFoyJRwHaHa?w=186&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        specifications: { color: 'red', size: 'big' },
      },
      {
        id: 3,
        quantity: 3,
        unit_price: 22,
        total_price: 66,
        old_price:13,
        name: 'the most funny toy second one',
        description: 'ferd1rtrerere2',
        cover:
          'https://th.bing.com/th/id/OIP.t71OfSJTvjDohO1CFoyJRwHaHa?w=186&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        specifications: { color: 'red', size: 'small' },
      },
    ],
  },
];
// 详情页面内容
export const productDetail: ProductDetail = {
  id: 10,
  name: '无情铁手',
  unit_price: 10,
  cover: 'http://39.98.123.211/group1/M00/00/01/rBHu8l-rfvmAIpgZAAIvrX6L9fo612.jpg',
  old_price: 10.5,
  description: 'the most destroyful tools in the world',
  monthSalesOut: 102,
  images: ['http://39.98.123.211/group1/M00/00/01/rBHu8l-rfvmAIpgZAAIvrX6L9fo612.jpg','http://39.98.123.211/group1/M00/00/01/rBHu8l-rfvmAHpFuAACTenfIJWo734.jpg','http://39.98.123.211/group1/M00/00/01/rBHu8l-rfvmAIpgZAAIvrX6L9fo612.jpg'],
  productAttrList: [
    {
      id: 1,
      saleAttrName: 'color',
      saleAttrValueList: [
        { isChecked: 1, id: 1, saleAttrValueName: 'red' },
        { isChecked: 0, id: 2, saleAttrValueName: 'blue' },
      ],
    },
    {
      id: 2,
      saleAttrName: 'size',
      saleAttrValueList: [
        { isChecked: 1, id: 1, saleAttrValueName: 'big' },
        { isChecked: 0, id: 2, saleAttrValueName: 'small' },
      ],
    },
  ],
}
// 购物车页面内容
export const cartDetail: ShopcartDetail = [
  {
    id: 10,
    name: '无情铁手',
    unit_price: 10,
    cover: 'http://39.98.123.211/group1/M00/00/01/rBHu8l-rfvmAIpgZAAIvrX6L9fo612.jpg',
    old_price: 10.5,
    description: 'the most destroyful tools in the world',
    productAttrList: [
      {
        id: 1,
        saleAttrName: 'color',
        saleAttrValueList: [
          { isChecked: 1, id: 1, saleAttrValueName: 'red' },
          { isChecked: 0, id: 2, saleAttrValueName: 'blue' },
        ],
      },
      {
        id: 2,
        saleAttrName: 'size',
        saleAttrValueList: [
          { isChecked: 1, id: 1, saleAttrValueName: 'big' },
          { isChecked: 0, id: 2, saleAttrValueName: 'small' },
        ],
      },
    ],
    total_price: 100,
    quantity: 10,
  },
  {
    id: 11,
    name: '无极健身',
    unit_price: 12,
    cover: 'http://39.98.123.211/group1/M00/00/01/rBHu8l-rfvmAIpgZAAIvrX6L9fo612.jpg',
    old_price: 14.5,
    description: 'the most powerful dashi on earth',
    productAttrList: [
      {
        id: 1,
        saleAttrName: 'color',
        saleAttrValueList: [
          { isChecked: 1, id: 1, saleAttrValueName: 'red' },
          { isChecked: 0, id: 2, saleAttrValueName: 'blue' },
        ],
      },
      {
        id: 2,
        saleAttrName: 'size',
        saleAttrValueList: [
          { isChecked: 1, id: 1, saleAttrValueName: 'big' },
          { isChecked: 0, id: 2, saleAttrValueName: 'small' },
        ],
      },
    ],
    total_price: 102,
    quantity: 8,
  }
]
// index classification 页面 内容
export const SalesCardList: SalesCardItem[] = [
  {
    id : 1,
    cover: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    description: "aHR0cHM6Ly9jbi5iaW5nLmNvbS8%3",
    old_price: 10,
    unit_price: 20,
    name: 'first',
  },
  {
    id : 2,
    cover: "https://swiperjs.com/demos/images/nature-6.jpg",
    description: "Mouth Oral",
    old_price: 11,
    unit_price: 22,
    name: 'second',
  },
  {
    id: 3,
    cover: "https://swiperjs.com/demos/images/nature-5.jpg",
    description: "Enterprise-class UI designed for web applications",
    old_price: 12,
    unit_price: 21,
    name: 'three',
  },
  {
    id : 4,
    cover: "https://swiperjs.com/demos/images/nature-3.jpg",
    description: "A set of high-quality React components out of the box",
    old_price: 20,
    unit_price: 25,
    name: 'four',
  },
  {
    id : 5,
    cover: "https://swiperjs.com/demos/images/nature-4.jpg",
    description: "aHR0cHM6Ly9jbi5iaW5nLmNvbS8%3",
    old_price: 10,
    unit_price: 20,
    name: 'five',
  },
  {
    id : 6,
    cover: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    description: "Mouth Oral",
    old_price: 11,
    unit_price: 22,
    name: 'six',
  },
  {
    id : 7,
    cover: "https://swiperjs.com/demos/images/nature-1.jpg",
    description: "Enterprise-class UI designed for web applications",
    old_price: 32,
    unit_price: 22,
    name: 'seven',
  },
  {
    id : 8,
    cover: "https://swiperjs.com/demos/images/nature-2.jpg",
    description: "A set of high-quality React components out of the box",
    old_price: 30,
    unit_price: 15,
    name: 'eight',
  },

];

export const shipmentData: shipBaseInfo = {
  fullname: 'miaowing',
  phone: '1234085092343',
  email: '2321321561631@qq.com',
  address: 'the first steet',
}

export const searchList: SalesCardItem[] = [
  {
    id : 5,
    cover: "https://swiperjs.com/demos/images/nature-4.jpg",
    description: "aHR0cHM6Ly9jbi5iaW5nLmNvbS8%3",
    old_price: 10,
    price: 20,
    name: 'five',
  },
  {
    id : 6,
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    description: "Mouth Oral",
    old_price: 11,
    price: 22,
    name: 'six',
  },
];
