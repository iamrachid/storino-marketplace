<template>
  <li class="submenu">
    <nuxt-link :to="{ path: '/shop', query: { category: category.slug }}"><i class="d-icon-camera1"></i>{{ category.name }}</nuxt-link>
    <ul>
      <li v-for="subcategory in category.children" :key="subcategory.slug">
        <nuxt-link :to="{ path: '/shop', query: { category: subcategory.slug }}">{{ subcategory.name }}</nuxt-link>
        <!--    TODO show submenus in subcategory.children  -->
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