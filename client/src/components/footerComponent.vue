<template>
  <footer class="section__footer">
    <div class="container">
      <div class="footer">
        <div class="footer__info">
          <img class="footer__info-logo" src="../images/Logo.svg" alt="Logo" />
          <p class="footer__info-text">Всі права захищені 2022</p>
        </div>
        <div class="footer__content menu">
          <router-link to="/" class="menu__item-link footer__content-text"
            >Головна</router-link
          >
          <router-link to="/forum" class="menu__item-link footer__content-text"
            >Форум</router-link
          >
          <router-link
            to="/shop"
            class="menu__item-link footer__content-text"
            data-trigger="shop"
            >Магазин</router-link
          >
        </div>
        <div class="footer__array" :onClick="scrollToTop">
          <svg
            width="36"
            height="51"
            viewBox="0 0 36 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 3V49M18 3L3 18.3333M18 3L33 18.3333"
              stroke="white"
              stroke-width="3"
              stroke-linecap="square"
            />
          </svg>
          <p class="footer__array-text">Піднятися вгору</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
})
</script>
