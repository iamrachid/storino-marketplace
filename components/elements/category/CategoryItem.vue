<template>
  <div class="col-xl-4 col-md-6 mb-4">
    <div
      class="category category-group-image appear-animate"
      data-animation-options="{'name': 'fadeIn'}"
      v-animate
    >
      <nuxt-link :to="{ path: '/shop', query: { category: category.slug } }">
        <figure class="category-media">
          <img v-lazy="category.img" alt="category" width="190" height="169" />
        </figure>
      </nuxt-link>
      <div class="category-content px-2">
        <h4 class="category-name">
          <nuxt-link
            :to="{ path: '/shop', query: { category: category.slug } }"
            >{{ category.name }}</nuxt-link
          >
        </h4>
        <ul v-if="!!subcategories" class="category-list">
          <li v-for="(sub, index) in subcategories" v-if="index < 5">
            <nuxt-link
              :to="{
                path: '/shop',
                query: { category: sub.slug },
              }"
              >{{ sub.name }}</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'CategoryItem',
  props: ['slug'],
  data() {
    return {
      subcategories: Array,
      category: Object,
    }
  },
  async fetch() {
    const result = await axios.get(`http://localhost:3000/category/${this.slug}`);
    this.category = result.data.result;
    this.subcategories = result.data.result.children;
  }
};
</script>

<style scoped></style>
