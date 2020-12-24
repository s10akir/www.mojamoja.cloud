<template>
  <div class="text-center">
    <div>
      <fa :icon="['fas', 'tint']" class="fa-4x" />
    </div>
    <div>{{ value }} %</div>
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
