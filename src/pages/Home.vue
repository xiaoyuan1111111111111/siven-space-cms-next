<template>
  <NButton @click="handleClick">我想吃苹果</NButton>
  <div class="btn-wrapper">
    <div class="btns">
      <button>我想吃苹果</button>
      <button>我想吃香蕉</button>
    </div>
  </div>
  <hr />
  <div
    class="w-full h-[80px] bg-pink-300 hover:bg-pink-400 flex justify-center items-center"
  >
    <div class="">
      <button class="border rounded-md px-2 py-1 mr-2">我想吃苹果</button>
      <button class="border rounded-md px-2 py-1">我想吃香蕉</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NButton } from 'naive-ui'
import { useRouter } from 'vue-router'

const router = useRouter()

function handleClick() {
  console.log('handleClick')
  router.push('/about')
}
</script>

<style scoped>
hr {
  margin: 10px 0;
}

.btn-wrapper {
  width: 100%;
  height: 80px;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    border-radius: 4px;
    border: 1px solid #ccc;
    cursor: pointer;
  }
}
</style>
