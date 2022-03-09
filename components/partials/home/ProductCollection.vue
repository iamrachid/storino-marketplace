<template>
  <section class="grey-section pt-2 pb-8">
    <div class="container pb-4">

      <product-collection />

      <product-collection />

    </div>
  </section>
</template>

<script>
import ProductCollection from "~/components/product/ProductCollectionCard";

export default {
  components: {
    ProductCollection
  },
};
</script>
