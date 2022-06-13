<template>
  <section class="grey-section pt-2 pb-8">
    <div class="container pb-4">

      <ProductCollectionCart v-for="category in categories" :key="category.slug" :category-search="category.slug"/>

    </div>
  </section>
</template>

<script>
import ProductCollectionCart from "~/components/product/ProductCollectionCart";
import axios from "axios";

export default {
  components: {
    ProductCollectionCart
  },
  data() {
    return {
      categories: Array,
    };
  },
  async fetch() {
    const result = await axios.get(`http://localhost:3000/config/featured`);
    this.categories = result.data.results.featured;
    console.log(this.categories);
  }
};
</script>
