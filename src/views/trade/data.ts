import { ref, computed, unref, Ref } from 'vue';

export enum TradeStateEnum {
  INFOR = 1,
  SHIPPING = 2,
  PAYMENT = 3,
  PAYSUCCESS,
}

const currentState = ref(TradeStateEnum.INFOR);

export function useTradeState() {
  function setTradeState(state: number) {
    currentState.value = state;
  }

  const getTradeState = computed(() => currentState.value);

  function handleBack() {
    let last_value = getTradeState.value - 1;
    if (last_value < 1) {
      last_value = 1;
    }
    setTradeState(last_value);
  }

  return { setTradeState, getTradeState, handleBack };
}


