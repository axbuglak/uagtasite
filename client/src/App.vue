<template>
  <main-section>
    <navbar />
    <router-view> </router-view>
  <footer-component class="mt-auto" />
  </main-section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import navbar from './components/navigationComponent.vue'
import footerComponent from './components/footerComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    navbar,
    footerComponent,
  }
})
</script>

<style lang="scss" src="./styles/style.scss"></style>
