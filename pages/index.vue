<script setup>
import { ref } from 'vue'

const data = ref([])
const runtimeConfig = useRuntimeConfig()
const { apiBase } = runtimeConfig.public


const fetchData = async () => {
  const res = await fetch(apiBase)
  const responseData = await res.json()
  const usernames = responseData.map(user => user.username)
  data.value = usernames
}

const clearData = () => {
  data.value = []
}

</script>

<template>
  <!-- 使用 Button 组件并配置不同的处理函数 -->
  <div class="container">
    <h1 class="font:40 font:heavy text:center mt:24">MSW 練習</h1>

    <!-- 使用 Button 组件并配置不同的处理函数 -->
    <Button buttonText="Fetch" @click="fetchData" />

    <Button buttonText="Clear Data" @click="clearData" />
  </div>

  <!-- 顯示 data -->
  <div class="container">
    <div class="bg:cyan-60 r:12 mt:24 pt:10 min-h:300">
      <h1 class="font:40 font:heavy text:center">Data</h1>
      <div class="p:13 h:100%">
        <p
          v-if="data.length === 0"
          class="color:white font:bold t:26 text-align:center"
        >
          No data
        </p>
        <ul v-else>
          <li
            v-for="username in data"
            :key="username"
            class="color:white font:bold t:18 list-style:none mb:12"
          >
            {{ username }}
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- 跳轉至 about -->
  <div class="container">
    <button class="mt:24">
      <NuxtLink to="/about" class="text-decoration:none p:12 block">Go to About</NuxtLink>
    </button>
  </div>
</template>

