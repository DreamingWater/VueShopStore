<template>
  <!--  <PageWrapper>-->
  <!--    title="Information"-->
  <!--    contentBackground-->
  <!--    content="Collect information"-->
  <!--    contentClass="p-4"-->
  <template v-if="getShow">
    <BasicForm @register="register" class="form_basic_style" />
    <!--    <a-button @click="SubmitForm" :loading='loading'> click</a-button>-->
    <!--  </PageWrapper>-->
  </template>
</template>
<script lang="ts">
  import { BasicForm, useForm } from '/@/components/Form';
  import { computed, watch, defineComponent, onMounted, onUpdated, ref, unref } from 'vue';
  import { shipInfoschemas, citiesOptions } from '/@/views/account/data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { PageWrapper } from '/@/components/Page';
  import { TradeStateEnum, useTradeState } from '/@/views/trade/data.ts';
  import { shipBaseInfo, shipInfo } from '@/api/sys/model/shipment';
  import { reqShipData } from '@/api/sys/shipment';
  import { tradeUserStore } from '/@/store/modules/tradeUser';
  import { TradeUser } from "@/api/sys/model/orderModel";

  const tradeUser = tradeUserStore();
  const { handleBack, getTradeState } = useTradeState();
  const defaultState = ref('');

  export default defineComponent({
    name: 'CollectInformation',
    components: { BasicForm, PageWrapper },

    setup() {
      let loading = ref(false);
      const { createMessage } = useMessage();
      const [register, { validate, setFieldsValue, updateSchema, setProps, getFieldsValue }] = useForm({
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 15,
        },
        schemas: shipInfoschemas,
        actionColOptions: {
          offset: 8,
          span: 23,
        },
        // showActionButtonGroup: false,
        // submitButtonOptions: {
        //   text: '提交',
        // },
        submitFunc: customSubmitFunc,
      });
      async function customSubmitFunc() {
        try {
          const data = await validate();
          setProps({
            submitButtonOptions: {
              loading: true,
            },
          });
          // window.console.log(data);
          setTimeout(() => {
            setProps({
              submitButtonOptions: {
                loading: false,
              },
            });
            createMessage.success('提交成功！');
          }, 2000);
        } catch (error) {}
      }
      const getShow = computed(() => unref(getTradeState) === TradeStateEnum.INFOR);
      async function SubmitForm() {
        try {
          await validate();
          loading.value = true;
          setTimeout(() => {
            loading.value = false;
            createMessage.success('提交成功！');
          }, 2000);
        } catch (error) {}
      }
      // 设置country field
      function dealCountry() {
        setFieldsValue({ country: 'American' });
      }
      // 单次监听 citiesOptions
      const unwatch = watch(citiesOptions, () => {
        if (defaultState.value !== '' && getShow) {
          function findStateName(code) {
            const target_list = citiesOptions.value as [];

            window.console.log('this_current_state');
            const this_current_state = getFieldsValue();
            window.console.log(this_current_state);
            const country = target_list.find(option => option.value === code);
            if(country){
              window.console.log(country.value as string);
              window.console.log('target_list');
            }
            return country ? country.value as string : target_list[1].value as string ;
          }
          updateSchema({
            field: 'state',
            componentProps: {
              options: citiesOptions.value as [],
            },
          });
          setFieldsValue({ state: findStateName(defaultState.value) });
          const current_state1 = getFieldsValue();
          window.console.log(current_state1);
          // unwatch(); // 释放 watch
        }
      });

      const loadDefaultData = async () => {
        await tradeUser.loadTradeUserInfo();
        const default_user_info: TradeUser = tradeUser.tradeUserInfo;
        const { username, address, email, phone, country } = default_user_info;
        defaultState.value = default_user_info.state; // state 设为默认值
        const field_set = { username, address, email, phone, country };
        setFieldsValue(field_set);
      };
      onMounted(() => {
        setTimeout(() => {
          loadDefaultData();
        }, 300);
      });
      onUpdated(() => {
        setTimeout(() => {
          window.console.log('updated this form');
          loadDefaultData();
        }, 500);
      });
      return { register, SubmitForm, loading, getShow };
    },

  });
</script>
<style lang="less" scoped>
  .form_basic_style {
    padding: 24px;
    background-color: @component-background;
  }
</style>
