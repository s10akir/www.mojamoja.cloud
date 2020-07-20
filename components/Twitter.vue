<template>
  <a :href="github_uri" class="text-dark" target="_blank">
    <fa :icon="['fab', 'twitter']" class="fa-4x" />
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      github_uri: 'https://twitter.com/s10akir',
    }
  },
})
</script>
