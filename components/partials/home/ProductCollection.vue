<template>
  <section class="grey-section pt-2 pb-8">
    <div class="container pb-4">

      <ProductCollectionCart category-search="fashion"/>

      <ProductCollectionCart category-search="informatique"/>
    </div>
  </section>
</template>

<script>
import ProductCollectionCart from "~/components/product/ProductCollectionCart";

export default {
  components: {
    ProductCollectionCart
  },
};
</script>
