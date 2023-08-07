<template>
  <div class="card-vue">
    <div>Vue Card</div>
    <div>
      <div>COUNT: {{ count }}</div>
      <div>
        <button @click="count++">Increase</button>
        <button @click="count--">Decrease</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<style scoped lang="scss">
.card-vue {
  @apply border text-black;
}
</style>
