<template>
  <template v-if="getShow">
    <div class="payment-actions">
      <a class="return" @click="handleReturnClick">{{return_value}}</a>
      <a class="finish" @click="handleNextClick">{{next_value}}
        <img class="ml-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAICAYAAADjoT9jAAAABGdBTUEAALGPC/xhBQAAAM9JREFUKBVjZKACaDsZJ/yd4ftlhv8MM5jNtdsaGBv+wIxlgjEooX8xfpcFGi4JNKPx36mrp5tOhuvDzGOsOxmezsj4XwUmQA79//9/8///GWzhehkZfzMyMLRJMwu0MtaeDP0HtB3Ipwk4wMT4n/EnTYwGGsrIyHCahYmF0frfH0ZZiixh+u/6/9//bCQzHjIzM6Y0mK7aQ5WgaToTqvv7D8MlYED/Z2RgnMXNz1NarjHvM8hCFiRbyWbyiDPc+fCMcTUDI9PMJrMVe5ENAgA1Az2KBN0ubgAAAABJRU5ErkJggg=="/>
      </a>
    </div>
  </template>
</template>

<script setup>
import { defineProps, defineEmits, computed, unref } from "vue";
import { TradeStateEnum, useTradeState } from "@/views/trade/data";
const { handleBack, getTradeState, setTradeState } = useTradeState();
const getShow = computed(() => unref(getTradeState) !== TradeStateEnum.PAYSUCCESS);
  const props = defineProps({
    return_value: {
      type: String,
      required: true,
    },
    next_value: {
      type: String,
      required: true,
    }
  });

  const emits = defineEmits(['return_func', 'next_func']);

  function handleReturnClick() {
    emits('return_func');
  }
  function handleNextClick() {
    emits('next_func');
  }
</script>



<style lang="css">
.payment-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e1e8ee;
}
.payment-actions > a {
  flex: 1 1 50%;
  padding: 1em;
  color: #86939e;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
}
.payment-actions > a + a {
  border-left: 1px solid #e1e8ee;
}
.payment-actions > a.finish {
  color: #7dc855;
}

</style>
