<template>
  <section class="grey-section pt-2 pb-8">
    <div class="container pb-4">

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
                {{ categoryList[0].name }}
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
                Fashion Design<br /><span
                  class="d-inline-block font-weight-normal"
                  >Collection</span
                >
              </h3>
              <nuxt-link to="/shop" class="btn btn-dark btn-md btn-rounded"
                >shop now</nuxt-link
              >
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
                {{ categoryList[1].name }}
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
                  v-for="item in categoryList[1].children"
                  :key="'filter-' + item.slug"
                >
                  <a
                    href="javascript:;"
                    @click="getProductHandler(item.slug, 2)"
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
              background-image: url(images/home/banner/4.jpg);
              background-color: #fff;
            "
          >
            <div class="banner-content text-lg-center pt-4">
              <div
                class="appear-animate"
                v-animate
                data-animation-options="{
                                            'name': 'fadeInUpShorter',
                                            'delay': '.4s'
                                        }"
              >
                <h4 class="banner-subtitle mb-2 ls-s font-weight-normal">
                  Recommended for you
                </h4>
                <h3 class="banner-title">
                  Cosmetics Trends<br /><span
                    class="d-inline-block font-weight-normal"
                    >Collection</span
                  >
                </h3>
                <nuxt-link to="/shop" class="btn btn-dark btn-md btn-rounded"
                  >shop now</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>

        <div class="overflow-hidden products-box">
          <div class="row gutter-no line-grid">
            <template v-if="!products.product2">
              <div
                class="col-md-4 col-6 mb-0"
                v-for="item in [1, 2, 3, 4, 5, 6]"
                :key="`product-skel2-${item}`"
              >
                <div class="product-loading-overlay"></div>
              </div>
            </template>

            <template v-else>
              <div
                class="col-md-4 col-6 mb-0"
                v-for="item in products.product2"
                :key="`product-2-${item.slug}`"
              >
                <product-two class="text-center" :isCat="false" :product="item">
                </product-two>
              </div>
            </template>
          </div>
        </div>
      </div>

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
                {{ categoryList[2].name }}
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
                  v-for="item in categoryList[2].children"
                  :key="'filter-' + item.slug"
                >
                  <a
                    href="javascript:;"
                    @click="getProductHandler(item.slug, 3)"
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
              background-image: url(images/home/banner/5.jpg);
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
                Top Electronics<br /><span
                  class="d-inline-block font-weight-normal"
                  >Collection</span
                >
              </h3>
              <nuxt-link to="/shop" class="btn btn-dark btn-md btn-rounded"
                >shop now</nuxt-link
              >
            </div>
          </div>
        </div>

        <div class="overflow-hidden products-box">
          <div class="row gutter-no line-grid">
            <template v-if="!products.product3">
              <div
                class="col-md-4 col-6 mb-0"
                v-for="item in [1, 2, 3, 4, 5, 6]"
                :key="`product-skel3-${item}`"
              >
                <div class="product-loading-overlay"></div>
              </div>
            </template>

            <template v-else>
              <div
                class="col-md-4 col-6 mb-0"
                v-for="item in products.product3"
                :key="`product-3-${item.slug}`"
              >
                <product-two class="text-center" :isCat="false" :product="item">
                </product-two>
              </div>
            </template>
          </div>
        </div>
      </div>

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
                {{ categoryList[3].name }}
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
                  v-for="item in categoryList[3].children"
                  :key="'filter-' + item.slug"
                >
                  <a
                    href="javascript:;"
                    @click="getProductHandler(item.slug, 4)"
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
              background-image: url(images/home/banner/6.jpg);
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
                Recommeded for you
              </h4>
              <h3 class="banner-title ls-s">
                Kitchen Tools<br /><span
                  class="d-inline-block font-weight-normal"
                  >Collection</span
                >
              </h3>
              <nuxt-link to="/shop" class="btn btn-dark btn-md btn-rounded"
                >shop now</nuxt-link
              >
            </div>
          </div>
        </div>

        <div class="overflow-hidden products-box">
          <div class="row gutter-no line-grid">
            <template v-if="!products.product4">
              <div
                class="col-md-4 col-6 mb-0"
                v-for="item in [1, 2, 3, 4, 5, 6]"
                :key="`product-skel4-${item}`"
              >
                <div class="product-loading-overlay"></div>
              </div>
            </template>

            <template v-else>
              <div
                class="col-md-4 col-6 mb-0"
                v-for="item in products.product4"
                :key="`product-4-${item.slug}`"
              >
                <product-two class="text-center" :isCat="false" :product="item">
                </product-two>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductTwo from '~/components/elements/product/ProductTwo';

import Api, { baseUrl, currentDemo } from '~/api';
import { categoryList } from '~/utils/data/menu';

export default {
  components: {
    ProductTwo,
  },
  data: function () {
    return {
      categoryList: categoryList,
      products: Object,
    };
  },
  mounted: function () {
    Api.get(`${baseUrl}/demo-${currentDemo}`, {
      params: {
        limit: 6,
        category:
          'fashion-and-clothings,beauty-and-fragrance,computers-1,home-and-kitchen-4',
      },
    })
      .then((response) => {
        console.log(response);
        this.products = {
          ...this.products,
          product1: response.data.category1,
          product2: response.data.category2,
          product3: response.data.category3,
          product4: response.data.category4,
        };
      })
      .catch((error) => ({ error: JSON.stringify(error) }));
  },
  methods: {
    getProductHandler: function (category, index) {
      this.products['product' + index] = null;
      Api.get(`${baseUrl}/demo-${currentDemo}/shop`, {
        params: {
          from: 0,
          to: 6,
          category: category,
        },
      })
        .then((response) => {
          this.products['product' + index] = response.data.data;
        })
        .catch((error) => ({ error: JSON.stringify(error) }));
    },
  },
};
</script>
