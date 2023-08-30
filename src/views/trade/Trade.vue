<template>
  <div class="payment">
    <Header></Header>
<!--    cotent-->
    <Information> </Information>
    <Shipping> </Shipping>
    <Payment> </Payment>
    <Payfinished></Payfinished>
<!--    content end-->
    <Footer @return_func="returnFunc" @next_func="nextFunc" :next_value="nextString" :return_value="returnString"> </Footer>
    </div>
</template>


<script lang="ts">

  import Information from './information/form/index.vue';
  import Payment from "@/views/trade/payment/payment.vue";
  import Footer from './footer/footer.vue';
  import Header from './header/header.vue';
  import Payfinished from './payfinished/payfinished.vue';
  import Shipping from './shipping/shipping.vue'
  import { computed, defineComponent, ref, unref } from "vue";
  import { useTradeState } from "@/views/trade/data";
  const { handleBack, getTradeState, setTradeState } = useTradeState();
  // import { TradeStateEnum, useTradeState} from './data.ts';
  // const { handleBack, getTradeState } = useTradeState();
  export default defineComponent({
    name: 'Trade',
    components: { Information, Payment, Footer, Header, Shipping, Payfinished },
    setup() {

      function returnFunc() {
        console.log('returnFunc'); // 'Hello'
      }
      function nextFunc() {
        console.log('nextFunc'); // 42
      }
      function jump_pay_success() {
        setTradeState(4);
      }
      const nextString = ref('Next');
      const returnString = ref('Return');

      // const getShow = computed(() => unref(getTradeState) === TradeStateEnum.INFOR);

      return { returnFunc, nextFunc, nextString, returnString, jump_pay_success};
    },
  });
</script>

<style lang="css">
  @import url("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta.2/css/bootstrap.css");
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700");

  @media only screen and (min-width: 768px) {
    .payment {
      height: 100%;
      align-items: center;
      max-width: 70%;
      margin: 0 auto;
      background-color: white;
      color: #5e6977;
      border-radius: 0.3em;
      box-shadow: 0.2em 0.3em 0.8em -0.45em rgba(0, 0, 0, 0.2), 0 0.2em 0.5em 0 rgba(0, 0, 0, 0.08);
    }

  }
  @media only screen and (max-width: 767px) {
    .payment {
      height: 100%;
      align-items: center;
      max-width: 100%;
      margin: 0 auto;
      background-color: white;
      color: #5e6977;
      border-radius: 0.3em;
      box-shadow: 0.2em 0.3em 0.8em -0.45em rgba(0, 0, 0, 0.2), 0 0.2em 0.5em 0 rgba(0, 0, 0, 0.08);
    }

  }
</style>
