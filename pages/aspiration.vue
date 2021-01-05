<template>
  <div
    id="aspiration"
    class="d-flex align-items-center justify-content-center wf-hannari"
    :style="{ height: `${height}px` }"
  >
    <div>
      <div class="text-center py-4">
        <h1 class>{{ thisYear }}年の抱負</h1>
      </div>
      <div class="d-flex">
        <p class="vertical-rl text-nowrap display-1 order-2 mx-0 ml-2">
          <strong>
            二度寝は
            <br />&emsp;一日一時間
          </strong>
        </p>
        <p class="vertical-rl display-4 order-1 mx-0 mr-2 text-center">
          もじゃ
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Index',
  data() {
    return {
      height: 0,
      thisYear: new Date().getFullYear(),
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
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
#aspiration {
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

a,
a:link,
a:visited {
  color: black;
}
</style>
