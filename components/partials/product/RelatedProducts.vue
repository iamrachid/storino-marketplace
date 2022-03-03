<template>
	<section
		v-if="products.length > 0"
		class="product-wrapper mb-4"
	>
		<h2 class="title mb-0 d-block text-center">Related Products</h2>

		<swiper-carousel
			class="swiper-theme swiper-nav-full swiper-split related-products-carousel"
			:options="relatedSlider"
		>
			<product-two
				class="swiper-slide text-center"
				:product="item"
				v-for="item in products.slice(0, 4)"
				:key="`related-produts-${item.slug}`"
			></product-two>
		</swiper-carousel>
	</section>
</template>

<script>
import SwiperCarousel from '~/components/elements/SwiperCarousel';
import ProductTwo from '~/components/elements/product/ProductTwo';
import { relatedSlider } from '~/utils/data/carousel';

export default {
	props: {
		products: Array
	},
	components: {
		SwiperCarousel,
		ProductTwo
	},
	data: function () {
		return {
			relatedSlider: relatedSlider
		};
	}
};
</script>