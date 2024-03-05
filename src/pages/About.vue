<template>
  <h3>counter: {{ counterStore.counter }}</h3>
  <button @click="$router.push('/')">+1</button>
  <RouterLink to="/">会首页</RouterLink>
  <hr />
  <HelloWorld />
</template>

<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'
import { useCounterStore } from '@/store/counterStore'

const counterStore = useCounterStore()

</script>
