<template>
	<section class="product-wrapper mb-4">
		<h2 class="title mb-0 d-block text-center">Related Products</h2>

		<swiper-carousel class="swiper-theme swiper-nav-full swiper-split related-products-carousel" :options="relatedSlider">

      <template v-if="products.length === 0">
        <div class="col-md-3 col-6 mb-0" v-for="item in [1, 2, 3, 4]" :key="`product-${item}`">
          <div class="product-loading-overlay"></div>
        </div>
      </template>

      <product-two
				class="swiper-slide text-center"
				:product="item"
				v-for="item in products"
				:key="`related-produts-${item.slug}`"
        v-else />
		</swiper-carousel>
	</section>
</template>

<script>
import SwiperCarousel from '~/components/elements/SwiperCarousel';
import ProductTwo from '~/components/elements/product/ProductTwo';
import { relatedSlider } from '~/utils/data/carousel';
import axios from "axios";

export default {
	props: {
		category: String
	},
	components: {
		SwiperCarousel,
		ProductTwo
	},
	data: function () {
		return {
			relatedSlider: relatedSlider,
      products: [],
		};
	},
  async fetch() {
    const response = await axios.get(`http://localhost:3000/category/${this.category}/products?limit=4`);
    console.log(response.data.result)
    this.products = response.data.result;
  }
};
</script>