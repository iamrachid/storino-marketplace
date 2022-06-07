<template>
  <div class="product-wrapper row gutter-no mt-10 pt-2 appear-animate" v-animate>
    <div class="row gutter-no products-banner">
      <div class="col-12 col-xs-6 mb-0">
        <div class="category-filters d-flex flex-column">

          <h3 class="category-title font-weight-bold appear-animate" v-animate data-animation-options="{ 'name': 'fadeInUpShorter' }" >
            {{ category.name }}
          </h3>

          <ul class="category-list appear-animate" v-animate data-animation-options="{ 'name': 'fadeInUpShorter', 'delay': '.3s' }">
            <li v-for="item in category.children" :key="'filter-' + item.slug">
              <a href="#" @click.prevent="getProductHandler(item.slug, 1)">{{ item.name }}</a>
            </li>
          </ul>

          <nuxt-link :to="{ path: '/shop', query: { category: category.slug }}" class="btn btn-link btn-underline font-primary appear-animate mt-3"
              v-animate data-animation-options="{ 'name': 'fadeInUpShorter', 'delay': '.3s' }" >
            View all products<i class="d-icon-arrow-right"></i>
          </nuxt-link>

        </div>
      </div>

      <div class="banner col-12 col-xs-6 mb-0" style="background-image: url(/images/home/banner/3.jpg); background-color: #ebebeb;">

        <div class="banner-content appear-animate" v-animate data-animation-options="{ 'name': 'fadeInUpShorter', 'delay': '.4s'}" >
          <h4 class="banner-subtitle mb-2 ls-s font-weight-normal">
            Featured
          </h4>
          <h3 class="banner-title ls-s">
            {{ category.name }}<br />
            <span class="d-inline-block font-weight-normal">Collection</span>
          </h3>
        </div>

      </div>
    </div>

    <div class="overflow-hidden products-box">
      <div class="row gutter-no line-grid">

        <template v-if="products.length === 0">
          <div class="col-md-4 col-6 mb-0" v-for="item in [1, 2, 3, 4, 5, 6]" :key="`product-${item}`">
            <div class="product-loading-overlay"></div>
          </div>
        </template>

        <template v-else>
          <div class="col-md-4 col-6 mb-0" v-for="item in products" :key="item._id">
            <product-two class="text-center" :product="item" />
          </div>
        </template>

      </div>
    </div>
  </div>
</template>

<script>
import ProductTwo from '~/components/elements/product/ProductTwo';
import axios from "axios";

export default {
  name: "ProductCollection",
  components: {
    ProductTwo,
  },
  props: {
    categorySearch : {
      type: String,
      required: true
    },
  },
  async fetch() {
    this.products = [];
    const category = await axios.get(`http://localhost:3000/category/${this.categorySearch}`);
    this.category = category.data.result[0];
    const products = await axios.get(`http://localhost:3000/category/${this.categorySearch}/products?limit=6`);
    this.products = products.data.result;
  },
  data() {
    return {
      category: Object,
      products: Array,
    };
  },
  methods: {
     getProductHandler: async function (category, index) {
      this.products = [];
      const products = await axios.get(`http://localhost:3000/category/${category}/products?limit=6`);
      this.products = products.data.result;
    },
  },

}
</script>

<style scoped>

</style>