<template>
	<main class="main pt-8 single-product bt-lg-none">

		<div class="page-content mb-10 pb-6" v-if="loaded">
			<div class="container" v-if="product">
				<div class="product product-single row mb-7">
					<div class="col-md-6">
						<media-one :product="product" class="pb-lg-0 pb-6"/>
					</div>

					<div class="col-md-6">
						<detail-one :product2="product" :stickyCart="true"/>
					</div>
				</div>
				<desc-one :product="product"/>

        <related-products :category="product.categories[0].slug" class="pt-3 mt-10"/>
      </div>
		</div>

		<template v-else>
			<div class="skeleton-body container mb-10">
				<div class="row mb-7">
					<div class="col-md-6 pg-vertical">
						<div class="skel-pro-gallery"></div>
					</div>

					<div class="col-md-6">
						<div class="skel-pro-summary"></div>
					</div>
				</div>

				<div class="skel-pro-tabs"></div>

				<section class="pt-3 mt-4">
					<h2 class="title justify-content-center">Related Products</h2>

					<swiper-carousel class="skel-carousel swiper-theme swiper-nav-full related-products-carousel" :options="baseSlider17">
						<div
							v-for="item in [1,2,3,4,5,6]"
							:key="'product-skel-' + item"
							class="swiper-slide product-loading-overlay"
						></div>
					</swiper-carousel>
				</section>
			</div>
		</template>
	</main>
</template>

<script>
import MediaOne from '~/components/partials/product/media/MediaOne';
import DetailOne from '~/components/partials/product/detail/DetailOne';
import DescOne from '~/components/partials/product/desc/DescOne';
import RelatedProducts from '~/components/partials/product/RelatedProducts';
import SwiperCarousel from '~/components/elements/SwiperCarousel';

import { baseSlider17 } from '~/utils/data/carousel';
import axios from "axios";

export default {
	components: {
		SwiperCarousel,
		MediaOne,
		DetailOne,
		DescOne,
		RelatedProducts
	},
	data: function () {
		return {
			baseSlider17: baseSlider17,
			product: null,
			loaded: false,
		};
	},
	async fetch() {
		this.loaded = false;
    const query = 'http://localhost:3000/products/' + this.$route.params.id;
    const product = await axios.get(query );
    this.product = product.data.result;
    this.loaded = true;
	}
};
</script>