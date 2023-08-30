import type { AppRouteRecordRaw, AppRouteModule } from '/@/router/types';

import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from '/@/router/routes/basic';

import { mainOutRoutes } from './mainOut';
import { PageEnum } from '/@/enums/pageEnum';
import { t } from '/@/hooks/web/useI18n';
import { LAYOUT } from '/@/router/constant';
// import.meta.globEager() 直接引入所有的模块 Vite 独有的功能
const modules = import.meta.globEager('./modules/**/*.ts');
const routeModuleList: AppRouteModule[] = [];
// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = [PAGE_NOT_FOUND_ROUTE, ...routeModuleList];

// 根路由
export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('/@/views/sys/login/Login.vue'),
  meta: {
    title: t('routes.basic.login'),
  },
};


export const ZoomRoute: AppRouteRecordRaw = {
  path: '/zoom',
  name: 'Zoom',
  component: () => import('/@/views/detail/Zoom/Zoom.vue'),
  meta: {
    title: t('routes.basic.zoom'),
  },
};

export const ImageRoute: AppRouteRecordRaw = {
  path: '/image',
  name: 'Image',
  component: () => import('/@/views/detail/ImageList/ImageList.vue'),
  meta: {
    title: t('routes.basic.imagelist'),
  },
};








export const AboutRoute: AppRouteRecordRaw = {
  path: '/myabout',
  name: 'Myabout',
  // component: LAYOUT,
  component: () => import('/@/views/sys/about/index.vue'),
  meta: {
    title: t('routes.dashboard.about'),
    icon: 'simple-icons:about-dot-me',
    ignoreAuth: true,
  },
};


// Basic routing without permission
// 未经许可的基本路由



export const cartRoute: AppRouteModule = {
  path: '/cart',
  name: 'Cart',
  component: LAYOUT,
  redirect: '/cart/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: t('routes.dashboard.cart'),
    orderNo: 120000,
    ignoreAuth: true,
  },
  children: [
    {
      path: 'index',
      name: 'CartPage',
      component: () => import('/@/views/cart/Cart.vue'),
      meta: {
        title: t('routes.dashboard.cart'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
        ignoreAuth: true,
      }
    }
  ]
};
export const DetailRoute: AppRouteModule = {
  path: '/detail',
  name: 'Detail',
  component: LAYOUT,
  redirect: '/detail/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: t('routes.dashboard.detail'),
    orderNo: 140000,
    ignoreAuth: true,
  },
  children: [
    {
      path: 'index',
      name: 'DetailPage',
      component: () => import('/@/views/detail/index.vue'),
      meta: {
        title: t('routes.dashboard.cart'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
        ignoreAuth: true,
      }
    }
  ]
};

export const IndexRoute: AppRouteModule = {
  path: '/index',
  name: 'Index',
  component: LAYOUT,
  redirect: '/index/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: t('routes.dashboard.index'),
    orderNo: 160000,
    ignoreAuth: true,
  },
  children: [
    {
      path: 'index',
      name: 'IndexPage',
      component: () => import('/src/views/index/index.vue'),
      meta: {
        title: t('routes.dashboard.cart'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
        ignoreAuth: true,
      }
    }
  ]
};


export const TradeRoute: AppRouteModule = {
  path: '/trade',
  name: 'trade',
  component: LAYOUT,
  redirect: '/trade/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: t('routes.dashboard.index'),
    orderNo: 160000,
    ignoreAuth: true,
  },
  children: [
    {
      path: 'index',
      name: 'TradePage',
      component: () => import('/src/views/trade/Trade.vue'),
      meta: {
        title: t('routes.dashboard.cart'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
        ignoreAuth: true,
      }
    }
  ]
};


export const AccountRoute: AppRouteModule = {
  path: '/account',
  name: 'Account',
  component: LAYOUT,
  redirect: '/account/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: t('routes.dashboard.account'),
    orderNo: 180000,
    ignoreAuth: true,
  },
  children: [
    {
      path: 'index',
      name: 'AccountPage',
      component: () => import('/src/views/account/account.vue'),
      meta: {
        title: t('routes.dashboard.account'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
        ignoreAuth: true,
      }
    }
  ]
};

export const OrderRoute: AppRouteModule = {
  path: '/order',
  name: 'Order',
  component: LAYOUT,
  redirect: '/order/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: t('routes.dashboard.order'),
    orderNo: 200000,
    ignoreAuth: true,
  },
  children: [
    {
      path: 'index',
      name: 'OrderPage',
      component: () => import('/src/views/order/index.vue'),
      meta: {
        title: t('routes.dashboard.order'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
        ignoreAuth: true,
      }
    }
  ]
};
export const basicRoutes = [
  AccountRoute,
  OrderRoute,
  LoginRoute,
  RootRoute,
  DetailRoute,
  ImageRoute,
  ZoomRoute,
  TradeRoute,
  AboutRoute,
  cartRoute,
  IndexRoute,
  ...mainOutRoutes,
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
];
