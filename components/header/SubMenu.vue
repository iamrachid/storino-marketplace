<template>
  <li class="submenu">
    <nuxt-link :to="{ path: '/shop', query: { category: 'electronics-5' }}"><i class="d-icon-camera1"></i>Electronics</nuxt-link>
    <ul>
      <li v-for="subcategory in category.subcategories">
        <nuxt-link :to="{ path: '/shop', query: { category: subcategory.slug }}">{{subcategory.name}}</nuxt-link>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "submenu",
  props: ['category']
}
</script>