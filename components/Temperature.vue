<template>
  <div class="text-center text-primary">
    <div>
      <fa :icon="['fas', 'thermometer-half']" class="fa-4x" />
    </div>
    <div>{{ value }} °C</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: Number,
      required: true,
      default: 0.0,
    },
  },
})
</script>
