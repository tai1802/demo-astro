<template>
  <aside v-if="$isCartOpen" class="absolute p-3 min-w-[10rem] bg-slate-100">
    <ul v-if="Object.values($cartItems).length">
      <li v-for="cartItem in Object.values($cartItems)" v-bind:key="cartItem.name">
        <img :src="cartItem.imageSrc" :alt="cartItem.name" width="70" height="100" />
        <h3>{{ cartItem.name }}</h3>
        <p>Qty: {{ cartItem.quantity }}</p>
      </li>
    </ul>
    <p v-else>Your cart is empty!</p>
  </aside>
</template>

<script setup lang="ts">
import { cartItems, isCartOpen } from "../cartStore";
import { useStore } from "@nanostores/vue";

const $isCartOpen = useStore(isCartOpen);
const $cartItems = useStore(cartItems);
</script>

<style scoped lang="scss"></style>
