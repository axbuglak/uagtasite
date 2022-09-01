<template>
  <section class="hero__section">
    <img class="hero__img-bg" src="../images/heroBg.png" alt="img" />
    <img class="hero__img-mask" src="../images/heroMask.png" alt="img" />
    <div class="hero container">
      <img class="hero__img-main" src="../images/heroImg.png" alt="img" />
      <div class="hero__content">
        <h1 class="hero__content-title">
          Новий український Role Play проект у сфері GTA 5
        </h1>
        <div class="hero__content-links">
          <a href="#" onclick="return false" class="section__btn" id="btnGuid"
            ><div>Почати грати</div></a
          >
          <a href="#" onclick="return false" class="hero__content-links-btn2"
            >Відеоролик</a
          >
        </div>
        <div
          v-for="(s, index) in serverList"
          :key="index"
          class="server__item"
          :onclick="copyIpServer"
        >
          <img class="server__item-bg" src="../images/serverBg.svg" alt="bg" />
          <h3 class="server__title">{{ s.title }}</h3>
          <a href="#" class="server__ip" id="copy">
            <p class="server__ip-content" ref="ipServerOne">IP: {{ s.ip }}</p>
            <p class="server__ip-copy">Копіювати</p>
          </a>
          <svg class="server__online">
            <circle
              class="server__online-circle-full"
              cx="46%"
              cy="46%"
              r="41%"
            />
            <circle
              class="server__circle-one"
              cx="46%"
              cy="46%"
              r="41%"
              ref="circleOne"
              :stroke-dashoffset="CalculatedOnlineServerOne"
            />
          </svg>
          <img
            class="server__number"
            src="../images/serverNumber1.svg"
            alt="number"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      serverList: [
        {
          title: 'Сервер перший',
          ip: '129.135.593.71:22005'
        }
      ],
      onlineServerOne: 650
    }
  },
  computed: {
    CalculatedOnlineServerOne() {
      const online = this.onlineServerOne
      return 360 - (260 / 1000) * online
    }
  },
  methods: {
    copyIpServer(event) {
      event.preventDefault()
      try {
        navigator.clipboard.writeText(this.$refs.ipServerOne[0].innerText)
        alert('IP скопійовано')
      } catch (error) {
        console.log('Помилка');
      }
    }
  }
})
</script>