<template>
  <main class="main">
    <hero-section />
    <guid-section />
    <social-section />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import heroSection from '../sections/heroSection.vue'
import guidSection from '../sections/guidSection.vue'
import socialSection from '../sections/socialSection.vue'

export default defineComponent({
  name: 'mainPage',
  components: {
    heroSection,
    socialSection,
    guidSection
  }
})
</script>
