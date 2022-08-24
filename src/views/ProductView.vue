<template>
  <main class="wrapper">
    <h1>Products</h1>

    <div class="card-container">
      <ProductCard
        v-for="(product, index) in inventory"
        :product="product"
        :key="product.id"
        :index="index"
        :addToCart="addToCart"
        class="card"
      />
    </div>
  </main>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
export default {
  props: ["inventory", "addToCart"],
  components: { ProductCard },
};
</script>
