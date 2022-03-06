<template>
  <nav class="main-nav">
    <ul class="menu">
      <li>
        <nuxt-link to="/" :class="{ active: $route.path === '/' }">
          Home
        </nuxt-link>
      </li>

      <li>
        <nuxt-link
          to="/shop"
          :class="{ active: $route.path.includes('/shop') }"
        >
          Categories
        </nuxt-link>
      </li>

      <li>
        <nuxt-link
          to="/featured-products"
          :class="{
            active: $route.path.includes('/featured-products'),
          }"
        >
          Featured Products
        </nuxt-link>
      </li>

      <li>
        <nuxt-link
          to="/hot-deals"
          :class="{active: $route.path.includes('/hot-deals')}"
        >
          Hot Deals
        </nuxt-link>
      </li>

      <li>
        <nuxt-link
          to="/new-arrivals"
          :class="{ active: $route.path.includes('/new-arrivals') }"
        >
          New Arrivals
        </nuxt-link>
      </li>

      <li>
        <nuxt-link
          to="/best-selling"
          :class="{active: $route.path.includes('/best-selling')}"
        >
          Best Selling
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mainMenu } from '~/utils/data/menu';

export default {
  data: function() {
    return {
      mainMenu: mainMenu,
    };
  },
};
</script>
