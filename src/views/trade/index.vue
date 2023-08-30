<template>
  <div class="payment">
    <Header></Header>
    <Information> </Information>
    <Payment />
    <Footer @return_func="returnFunc" @next_func="nextFunc" 
      :next_value="nextString"
      :return_value="returnString"
    />
  </div>
</template>
<!--  <Information />-->



<script lang="ts">
  import Information from './information/form/index.vue';
  import Payment from '@/views/trade/payment/payment.vue';
  import Footer from './footer/footer.vue';
  import Header from './header/header.vue';
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'Trade',
    components: { Information, Payment, Footer,Header },
    setup() {
      function returnFunc() {
        console.log('returnFunc'); // 'Hello'
      }
      function nextFunc() {
        console.log('nextFunc'); // 42
      }
      const nextString = ref('Next');
      const returnString = ref('Return');
      return {returnFunc,nextFunc,nextString,returnString};
    },
  });
</script>

<style lang="css">
  @import url("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta.2/css/bootstrap.css");
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700");
  
  @media only screen and (min-width: 768px) {
    .payment {
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
