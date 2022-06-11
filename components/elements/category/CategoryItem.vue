<template>
  <div class="col-xl-4 col-md-6 mb-4">
    <div
      class="category category-group-image appear-animate"
      data-animation-options="{'name': 'fadeIn'}"
      v-animate
    >
      <nuxt-link :to="{ path: '/shop', query: { category: category.slug } }">
        <figure class="category-media">
          <img v-lazy="category.banner" alt="category" width="190" height="169" />
        </figure>
      </nuxt-link>
      <div class="category-content px-2">
        <h4 class="category-name">
          <nuxt-link
            :to="{ path: '/shop', query: { category: category.slug } }"
            >{{ category.name }}</nuxt-link
          >
        </h4>
        <ul v-if="!!category.children" class="category-list">
          <li v-for="(sub, index) in category.children" v-if="index < 5">
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
let slugify = require('slugify');

export default {
  name: 'CategoryItem',
  props: ['category'],
  methods: {
    urlify(text) {
      return slugify(text).toLowerCase();
    },
  },
};
</script>

<style scoped></style>
