<template>
  <div class="product-wrapper row gutter-no mt-10 pt-2 appear-animate" v-animate>
    <div class="row gutter-no products-banner">
      <div class="col-12 col-xs-6 mb-0">
        <div class="category-filters d-flex flex-column">
          <h3
              class="category-title font-weight-bold appear-animate"
              v-animate
              data-animation-options="{
									'name': 'fadeInUpShorter'
								}"
          >
            {{ category.name }}
          </h3>
          <ul
              class="cateogry-list appear-animate"
              v-animate
              data-animation-options="{
									'name': 'fadeInUpShorter',
									'delay': '.3s'
								}"
          >
            <li
                v-for="item in categoryList[0].children"
                :key="'filter-' + item.slug"
            >
              <a
                  href="javascript:;"
                  @click="getProductHandler(item.slug, 1)"
              >{{ item.name }}</a
              >
            </li>
          </ul>
          <nuxt-link
              to="/shop"
              class="btn btn-link btn-underline font-primary appear-animate mt-3"
              v-animate
              data-animation-options="{
									'name': 'fadeInUpShorter',
									'delay': '.3s'
								}"
          >View all products<i class="d-icon-arrow-right"></i
          ></nuxt-link>
        </div>
      </div>
      <div
          class="banner col-12 col-xs-6 mb-0"
          style="
              background-image: url(images/home/banner/3.jpg);
              background-color: #ebebeb;
            "
      >
        <div
            class="banner-content appear-animate"
            v-animate
            data-animation-options="{
								'name': 'fadeInUpShorter',
								'delay': '.4s'
							}"
        >
          <h4 class="banner-subtitle mb-2 ls-s font-weight-normal">
            Featured
          </h4>
          <h3 class="banner-title ls-s">
            Fashion Design<br />
            <span class="d-inline-block font-weight-normal">Collection</span>
          </h3>
          <nuxt-link to="/shop" class="btn btn-dark btn-md btn-rounded">shop now</nuxt-link>
        </div>
      </div>
    </div>

    <div class="overflow-hidden products-box">
      <div class="row gutter-no line-grid">
        <template v-if="!products.product1">
          <div
              class="col-md-4 col-6 mb-0"
              v-for="item in [1, 2, 3, 4, 5, 6]"
              :key="`product-skel1-${item}`"
          >
            <div class="product-loading-overlay"></div>
          </div>
        </template>

        <template v-else>
          <div
              class="col-md-4 col-6 mb-0"
              v-for="item in products.product1"
              :key="`product-1-${item.slug}`"
          >
            <product-two class="text-center" :isCat="false" :product="item">
            </product-two>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCollection",
  data() {
    return {

      products: {
        product1:
      },
    };
  }
}
</script>

<style scoped>

</style>