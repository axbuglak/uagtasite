<template>
  <section>
    <h1 class="guid__title">Як почати гру?</h1>
    <div class="guid container" ref="steps">
      <div class="guid__steps">
        <div class="guid__info">
          <div class="guid__info-icon">
            <img
              src="../images/step1.svg"
              alt="step1"
              class="guid__info-icon-img"
            />
            <span></span>
          </div>
          <h2 class="guid__info-title">
            Купити або встановити ліцензійну версію GTA 5
          </h2>
        </div>
        <div class="guid__hero">
          <img src="../images/stepImg1.png" alt="img" class="guid__hero-img" />
          <div class="guid__hero-btn guid__hero-links-btn">
            <a
              onclick="return false"
              href="https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/"
              class="section__btn"
              ><div>Купити ключ у Steam</div></a
            >
            <a
              onclick="return false"
              href="https://store.epicgames.com/ru/p/grand-theft-auto-v"
              class="section__btn"
              ><div>Купити ключ у Epic</div></a
            >
          </div>
        </div>
      </div>
      <div class="guid__steps">
        <div class="guid__info">
          <div class="guid__info-icon">
            <img
              src="../images/step2.svg"
              alt="step2"
              class="guid__info-icon-img"
            />
            <span></span>
          </div>
          <h2 class="guid__info-title">Встановити на свій ПК RAGE MP</h2>
        </div>
        <div class="guid__hero">
          <img src="../images/stepImg2.png" alt="img" class="guid__hero-img" />
          <a
            onclick="return false"
            href="https://rage.mp/"
            class="section__btn guid__hero-btn"
            ><div>Завантажити RAGEMP</div></a
          >
        </div>
      </div>
      <div class="guid__steps">
        <div class="guid__info">
          <div class="guid__info-icon">
            <img
              src="../images/step3.svg"
              alt="step3"
              class="guid__info-icon-img"
            />
            <span></span>
          </div>
          <h2 class="guid__info-title">
            Запустити RAGE MP та за назвою знайти сервер UA RP або ввести IP
            нашого серверу
          </h2>
        </div>
        <div class="guid__hero">
          <img src="../images/stepImg3.png" alt="img" class="guid__hero-img" />
          <a
            onclick="return false"
            href="#"
            class="section__btn guid__hero-btn"
            id="copy"
            ><div>Скопіювати IP</div></a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

  mounted() {
    window.addEventListener('scroll', this.animOnScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.animOnScroll)
  },
  methods: {
    animOnScroll() {
      const steps = this.$refs.steps.children
      if (steps) {
        Object.entries(steps).forEach((el: any) => {
          const elHeight = el[1].offsetHeight
          const elOffset = this.offset(el[1]).top
          const scrollPos = window.pageYOffset + window.innerHeight

          if (elHeight + elOffset < scrollPos) {
            el[1].classList.add('active')
          } else {
            el[1].classList.remove('active')
          }
        })
      }
    },
    offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
  }
})
</script>