<template>
  <div
    id="index"
    class="d-flex align-items-center justify-content-center"
    :style="{ height: `${height}px` }"
  >
    <div class="text-center">
      <img src="~static/images/avatar.gif" class="avatar rounded-circle" />

      <div class="my-4">
        <h1 class="title">www.mojamoja.cloud</h1>
        <h2 class="subtitle">Something will happen in 2021...</h2>
      </div>

      <b-row class="my-4">
        <b-col>
          <Temperature :value="remoLog.temperature" />
        </b-col>
        <b-col>
          <Humidity :value="remoLog.humidity" />
        </b-col>
        <b-col>
          <Brightness :value="remoLog.brightness" />
        </b-col>
        <b-col>
          <Motion :value="remoLog.motion" />
        </b-col>
      </b-row>

      <!-- SNS系リンク一時削除 移動先は未定
      <b-row class="my-4">
        <b-col>
          <Twitter />
        </b-col>
        <b-col>
          <Github />
        </b-col>
      </b-row>
      -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'

export default Vue.extend({
  name: 'Index',
  async asyncData(context: Context) {
    const { $axios } = context
    const res = await $axios.get('/api/v1/environment/latest')

    const { temperature, humidity, brightness, motion } = res.data
    return {
      remoLog: {
        temperature,
        humidity,
        brightness,
        motion,
      },
    }
  },
  data() {
    return {
      height: 0,
      remoLog: {
        temperature: 0.0,
        humidity: 0.0,
        brightness: 0.0,
        motion: false,
      },
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()

    window.setInterval(this.fetchRemoLog, 1000 * 60)
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.height = window.innerHeight
    },
    fetchRemoLog() {
      this.$axios.$get('/api/v1/environment/latest').then((res) => {
        this.remoLog.temperature = res.temperature
        this.remoLog.humidity = res.humidity
        this.remoLog.brightness = res.brightness
        this.remoLog.motion = res.motion
      })
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

a,
a:link,
a:visited {
  color: black;
}
</style>
