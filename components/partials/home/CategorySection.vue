<template>
  <section class="categories container mt-10">
    <h2 class="title title-line title-underline border-1 mb-4">
      Top Categories of the Month
    </h2>

    <div class="row">
      <category-item v-for="category in categories" :key="category.slug" :slug="category.slug"/>
    </div>
  </section>
</template>
<script>
import CategoryItem from "~/components/elements/category/CategoryItem";
import Api, { baseUrl } from "~/api/api";
import axios from "axios";
export default {
  name: 'CategorySection',
  components: { CategoryItem },
  data() {
    return {
      categories:  Array,
    };
  },
  async fetch() {
    const result = await axios.get(`http://localhost:3000/config/top`);
    this.categories = result.data.results.top;
  }
};
</script>
