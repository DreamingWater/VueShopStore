export interface GrowCardItem {
  icon: string;
  title: string;
  value: number;
  total: number;
  color: string;
  action: string;
}

export interface SalesCardItem {
  id: number;
  cover: string;
  description: string;
  old_price: number;
  unit_price: number;
  name: string;
}

export const growCardList: GrowCardItem[] = [
  {
    title: '访问数',
    icon: 'visit-count|svg',
    value: 2000,
    total: 120000,
    color: 'green',
    action: '月',
  },
  {
    title: '成交额',
    icon: 'total-sales|svg',
    value: 20000,
    total: 500000,
    color: 'blue',
    action: '月',
  },
  {
    title: '下载数',
    icon: 'download-count|svg',
    value: 8000,
    total: 120000,
    color: 'orange',
    action: '周',
  },
  {
    title: '成交数',
    icon: 'transaction|svg',
    value: 5000,
    total: 50000,
    color: 'purple',
    action: '年',
  },
];


export const SalesCardList: SalesCardItem[] = [
  {
    id : 1,
    img: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
    description: "aHR0cHM6Ly9jbi5iaW5nLmNvbS8%3",
    old_price: 10,
    price: 20,
    name: 'first',
  },
  {
    id : 2,
    img: "https://swiperjs.com/demos/images/nature-6.jpg",
    description: "Mouth Oral",
    old_price: 11,
    price: 22,
    name: 'second',
  },
  {
    id: 3,
    img: "https://swiperjs.com/demos/images/nature-5.jpg",
    description: "Enterprise-class UI designed for web applications",
    old_price: 12,
    price: 21,
    name: 'three',
  },
  {
    id : 4,
    img: "https://swiperjs.com/demos/images/nature-3.jpg",
    description: "A set of high-quality React components out of the box",
    old_price: 20,
    price: 25,
    name: 'four',
  },
  {
    id : 5,
    img: "https://swiperjs.com/demos/images/nature-4.jpg",
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
  {
    id : 7,
    img: "https://swiperjs.com/demos/images/nature-1.jpg",
    description: "Enterprise-class UI designed for web applications",
    old_price: 32,
    price: 22,
    name: 'seven',
  },
  {
    id : 8,
    img: "https://swiperjs.com/demos/images/nature-2.jpg",
    description: "A set of high-quality React components out of the box",
    old_price: 30,
    price: 15,
    name: 'eight',
  },

];
