<template>
  <div
    id="index"
    class="d-flex align-items-center justify-content-center transition"
    :class="theme"
    :style="{ height: `${height}px` }"
  >
    <div class="text-center">
      <img
        src="~static/images/avatar.gif"
        class="avatar rounded-circle transition"
        @click="invertTheme"
      />

      <div class="my-4">
        <h1 class="display-4"><u>www.mojamoja.cloud</u></h1>
        <h2>Something will happen in {{ nextYear }}...</h2>
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
    // TODO: axios proxy書く
    const res = await $axios.get('/api/v1/environment/latest')

    const { temperature, humidity, brightness, motion } = res.data
    return {
      theme: '',
      remoLog: {
        temperature,
        humidity,
        brightness,
        motion,
      },
      nextYear: new Date().getFullYear() + 1,
    }
  },
  data() {
    return {
      theme: '',
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
    invertTheme() {
      this.theme = this.theme ? '' : 'dark'
    },
    fetchRemoLog() {
      // TODO: axios proxy書く
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
  background: #fff;
}

.avatar {
  width: 24rem;
  height: 24rem;
}

.transition {
  transition: all 0.4s ease-in;
}

.dark {
  filter: invert(1) hue-rotate(180deg);

  img {
    filter: invert(1) hue-rotate(180deg);
  }
}
</style>
