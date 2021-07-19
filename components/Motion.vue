<template>
  <div class="text-center text-primary">
    <div>
      <fa :icon="['fas', 'walking']" class="fa-4x" />
    </div>
    <div>{{ value ? 'motioning' : 'undetected' }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
})
</script>
