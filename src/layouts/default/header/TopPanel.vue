<template>
  <div :class="getTopHeaderClass">
    <div :class="`${prefixCls}-left`">
    </div>
    <!-- left start -->
    <!-- left end -->
    <div :class="`${prefixCls}-center`">
      <TopSwiper :class="`${prefixCls}-setting`" />
    </div>
    <!-- menu start -->
    <!-- menu-end -->
    <div :class="`${prefixCls}-right`">
      <!-- settings  -->
<!--      <p v-if="getShowSetting" :class="`${prefixCls}-action__item`" >P</p>-->
      <SettingDrawer v-if="getShowSetting" :class="`${prefixCls}-action__item`" />
    </div>

  </div>
</template>
<script lang="ts">
  import { defineComponent, unref, computed } from 'vue';

  import { propTypes } from '/@/utils/propTypes';
  // import { AppSearch } from './components/Application';

  import { useHeaderSetting } from '/@/hooks/setting/useHeaderSetting';
  import { useMenuSetting } from '/@/hooks/setting/useMenuSetting';
  import { useRootSetting } from '/@/hooks/setting/useRootSetting';
  import { SettingButtonPositionEnum } from '/@/enums/appEnum';
  import { useAppInject } from '/@/hooks/web/useAppInject';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { createAsyncComponent } from '/@/utils/factory/createAsyncComponent';

  export default defineComponent({
    name: 'LayoutTopHeader',
    components: {
      SettingDrawer: createAsyncComponent(() => import('/@/layouts/default/setting/index.vue'), {
        loading: true,
      }),
      TopSwiper: createAsyncComponent(() => import('./components/swiper/TopSwiper.vue')),
    },
    props: {
      fixed: propTypes.bool,
    },
    setup(props) {
      const { prefixCls } = useDesign('layout-topheader');
      const {
        getShowTopMenu,
        getIsMixSidebar,
      } = useMenuSetting();
      const { getShowSettingButton, getSettingButtonPosition } = useRootSetting();
      const {
        getHeaderTheme,
        getShowHeader,
      } = useHeaderSetting();

      const { getIsMobile } = useAppInject();

      const getTopHeaderClass = computed(() => {
        const theme = unref(getHeaderTheme);
        return [
          prefixCls,
          {
            [`${prefixCls}--fixed`]: props.fixed,
            [`${prefixCls}--mobile`]: unref(getIsMobile),
            [`${prefixCls}--${theme}`]: theme,
          },
        ];
      });

      const getShowSetting = computed(() => {
        if (!unref(getShowSettingButton)) {
          return false;
        }
        const settingButtonPosition = unref(getSettingButtonPosition);

        if (settingButtonPosition === SettingButtonPositionEnum.AUTO) {
          return unref(getShowHeader);
        }
        return settingButtonPosition === SettingButtonPositionEnum.HEADER;
      });
      return {
        prefixCls,
        getTopHeaderClass,
        getHeaderTheme,
        getIsMobile,
        getShowTopMenu,
        getIsMixSidebar,
        getShowSettingButton,
        getShowSetting,
      };
    },
  });
</script>
<style lang="less">
  @import url('toppanelindex.less');
</style>
