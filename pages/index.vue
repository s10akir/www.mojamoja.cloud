<template>
  <div id="index" class="d-flex align-items-center justify-content-center" :style="{height: `${height}px`}">
    <div class="text-center">
      <img src="~static/images/avatar.gif" class="avatar rounded-circle" />
      <div class="my-4">
      <h1 class="title">www.mojamoja.cloud</h1>
      <h2 class="subtitle">Something will happen in 2021...</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'index',
  data() {
    return {
      height: 0,
    }
  },
  created() {
    if (process.client) {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.height = window.innerHeight
    },
  },
})
</script>

<style lang="scss" scoped>
#index {
  width: 100vw;
  height: 100vh;
}

.avatar {
  width: 24rem;
  height: 24rem;
}

.title {
  font-size: 4rem;
  font-weight: 100;
  display: block;
  border-bottom: solid 0.1rem black;
}

.subtitle {
  font-size: 2rem;
  font-weight: 200;
}
</style>
