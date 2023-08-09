<template>
  <form @submit="addToCart">
    <slot></slot>
  </form>
</template>

<script setup>
import { addCartItem, isCartOpen } from "../cartStore";

// we'll hardcode the item info for simplicity!
const hardcodedItemInfo = {
  id: "astronaut-figurine",
  name: "Astronaut Figurine",
  imageSrc: "/images/astronaut-figurine.png",
};

function addToCart(e) {
  e.preventDefault();
  isCartOpen.set(true);
  addCartItem(hardcodedItemInfo);
}
</script>
