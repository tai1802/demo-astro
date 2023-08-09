<template>
  <!--write to the imported store using `.set`-->
  <div>
    <button @click="isCartOpen.set(!$isCartOpen)">Cart</button>
    <slot></slot>
  </div>
</template>

<script setup>
import { isCartOpen } from "../cartStore";
import { useStore } from "@nanostores/vue";

// read the store value with the `useStore` hook
const $isCartOpen = useStore(isCartOpen);
</script>
