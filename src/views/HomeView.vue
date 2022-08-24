<template>
  <div class="home">
    <div class="splash-container">
      <div class="splash">
        <h1>Splendid Food</h1>
      </div>
    </div>

    <main class="wrapper">
      <h2>Recommended</h2>
      <ProductCard
        v-for="(product, index) in inventory.slice(0, 3)"
        :product="product"
        :key="product.id"
        :index="index"
        :addToCart="addToCart"
        class="card"
      />

      <div class="recommended"></div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "HomeView",
  props: ["inventory", "addToCart"],
  components: { ProductCard },
};
</script>
