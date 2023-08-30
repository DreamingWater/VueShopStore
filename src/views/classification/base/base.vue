<template>
  <BaseClassification :this-class="thisClass" />
</template>

<script lang="ts" setup>
  import BaseClassification from "/@/views/classification/base/baseclassification.vue";
  import { ref, onMounted, defineProps } from "vue";

  const props = defineProps({
    thisClass: {
      type: Number,
      required: true,
    },
  });
</script>
