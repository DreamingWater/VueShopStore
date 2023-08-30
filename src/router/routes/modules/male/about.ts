import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const male: AppRouteModule = {
  path: '/male',
  name: 'Male',
  component: LAYOUT,
  redirect: '/male/first',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: t('routes.dashboard.about'),
    orderNo: 2000,
  },
  children: [
    {
      path: 'first',
      name: 'MaleFirstPage',
      component: () => import('/@/views/classification/male/test.vue'),
      meta: {
        title: t('routes.dashboard.about'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
        ignoreAuth: true,
      },
    },
  ],
};

export default male;
