<template>
  <body class="shop__page">
    @@include('./libs/header.html')
    <main class="main__shop">
      <img class="shop__bg" src="./images/shopBg.png" alt="bg" />
      <img class="shop__img1" src="./images/shopImg1.png" alt="img" />
      <img class="shop__img2" src="./images/shopImg2.png" alt="img" />
      <div class="container">
        <form class="shop">
          <h1 class="shop__title">Поповнити рахунок</h1>
          <select class="shop__select" required="required">
            <option class="shop__select-items" value="">Оберіть сервер</option>
            <option class="shop__select-items" value="1">Сервер 1</option>
            <option class="shop__select-items" value="2">Сервер 2</option>
            <option class="shop__select-items" value="2">Сервер 3</option>
          </select>
          <input
            class="shop__login"
            type="text"
            placeholder="Введіть ваш нікнейм"
          />
          <input class="shop__sum" type="number" placeholder="Введіть сумму" />
          <button class="shop__pay">Поповнити</button>
          <p class="shop__check-text">
            Натискаючи "<span style="color: #facf35">Поповнити рахунок</span>",
            ви приймаєте умови користувальницької угоди.
          </p>
          <label class="shop__check" for="check">
            <input type="checkbox" />
            <p>
              Я прочитав(-ла) і згоден(-а) з умовами Користувальницької угоди
            </p>
          </label>
        </form>
      </div>
    </main>
    <script src="./js/main.js"></script>
  </body>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  
})
</script>
