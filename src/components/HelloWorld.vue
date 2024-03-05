<template>
  <h3>hello counter: {{ count }}</h3>
  <button @click="add">+1</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0)
function add() {
  count.value++
}
</script>