<template>
  <div>
    <div v-for="item in items" :key="item.id">{{ item.text }}</div>
    <infinite-loading
    @infinite="loadMore"
    spinner="spiral"
    spinner-color="#666"
    spinner-size="30"
    :distance="10"
    force-use-infinite-wrapper
  ></infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';

export default {
  components: {
    InfiniteLoading,
  },
  data() {
    return {
      items: [],
      page: 1,
    };
  },
  methods: {
    async loadMore() {
      const response = await fetch(`/api/items?page=${this.page}`);
      const data = await response.json();
      this.items = [...this.items, ...data.items];
      this.page += 1;
      if (data.items.length === 0) {
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
      } else {
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
      }
    },
  },
};
</script>
