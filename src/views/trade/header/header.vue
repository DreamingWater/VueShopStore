<template>
  <template v-if="getShow">
    <div class="payment-tabs">
      <a href="javascript:void(0);" @click="handleClick" value=0>Cart</a>
      <a href="javascript:void(0);" @click="handleClick" value=1>Customer Information</a>
      <a href="javascript:void(0);" @click="handleClick" value=2>Shipping</a>
      <a href="javascript:void(0);" @click="handleClick" value=3>Payment</a>
    </div>
  </template>
</template>
<script setup>
  import { TradeStateEnum, useTradeState} from '/@/views/trade/data.ts';
  import { computed, unref, onMounted } from "vue";
  import { useRedo } from '/@/hooks/web/usePage';
  const { handleBack, getTradeState, setTradeState } = useTradeState();
  const getShow = computed(() => unref(getTradeState) !== TradeStateEnum.PAYSUCCESS);
  onMounted( ()=>{
    set_active_element();
  })
  const set_active_element = () => {
    const removeActiveClass = () => {
      const buttons = document.querySelectorAll('.payment-tabs a');
      buttons.forEach(button => {
        button.classList.remove('active');
      });
    };
    removeActiveClass();
    const current_tab = unref(getTradeState);
    const active_button = document.querySelectorAll('.payment-tabs a')[current_tab];
    active_button.classList.add('active');
  };
  const handleClick = (event) => {

    const value = event.target.getAttribute('value');
    setTradeState(parseInt(value));
    set_active_element(parseInt(value));
  };


</script>
<style lang="css">
  .payment-tabs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 2em;
    padding-right: 2em;
    border-bottom: 1px solid #e1e8ee;
    counter-reset: section;
  }
  .payment-tabs > a {
    padding: 1.35em 0;
    color: #bdc6cf;
    font-size: 0.9em;
    position: relative;
    transition: all 200ms ease-in-out;
  }
  .payment-tabs > a:before {
    counter-increment: section;
    content: counter(section);
    display: inline-block;
    width: 1.65em;
    height: 1.65em;
    margin-right: 0.5em;
    border: 0.15em solid #e1e8ee;
    color: #bdc6cf;
    font-size: 0.85em;
    text-align: center;
    line-height: 1.45em;
    border-radius: 50%;
    transition: all 300ms ease-in-out;
  }
  .payment-tabs > a:after {
    content: "";
    display: block;
    border-bottom: 2px solid transparent;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
  }
  .payment-tabs > a:hover {
    text-decoration: none;
    color: #91a0af;
  }
  .payment-tabs > a:hover:before {
    border-color: #91a0af;
    color: #91a0af;
  }
  .payment-tabs > a.active {
    color: #358ed7;
    font-weight: 500;
  }
  .payment-tabs > a.active:before {
    border-color: #358ed7;
    color: inherit;
  }
  .payment-tabs > a.active:after {
    border-bottom: 2px solid #358ed7;
  }

  @media (max-width: 479px) {
    .payment {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
    .payment-tabs {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
    .payment-tabs > a {
      font-size: 0.725rem;
    }
    .payment-tabs > a:before {
      display: block;
      margin: 0 auto;
    }
  }

</style>
