<!-- <template>
  <input type="checkbox" :checked="isChecked" @click="emit('changeChecked', skuId)" />
</template>

<script lang="ts" setup>

const props = defineProps<{
  checked: boolean,
  skuId: number
}>()


const emit = defineEmits<{
  (e: 'changeChecked', skuId: number): void
}>() 

</script> -->
<template>
  <input type="checkbox" :checked="checked" @change="updateChecked" />
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  checked: boolean,
  skuId: number
}>()

const emit = defineEmits<{
  changeChecked(skuId: number): void
}>() 

function updateChecked(event: Event) {
  emit('changeChecked', props.skuId);
}
</script>

<style lang="less" scoped>

</style>