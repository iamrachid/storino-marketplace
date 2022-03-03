<template>
	<section class="banner-group container mt-10 pb-4 pt-2 mb-10">
		<swiper-carousel
			class="swiper-carousel swiper-theme"
			:options="bannerSlider"
		>
			<div
				class="banner1 banner banner-fixed overlay-zoom appear-animate swiper-slide"
				v-animate
				data-animation-options="{
                            'name': 'fadeInRightShorter'
                        }"
				style="background-color: #3cbea4"
			>
				<figure>
					<img
						v-lazy="'./images/home/banner/1.jpg'"
						alt="banner"
						width="580"
						height="219"
					/>
				</figure>
				<div class="banner-content y-50">
					<h3 class="banner-title text-white ls-normal lh-1">Customized Products</h3>
					<p class="mb-7 text-white">Partner with one of 8,000 experienced manufacturers with
						design & production capabilities</p>
					<nuxt-link
						to="/shop"
						class="btn btn-link btn-white btn-underline font-weight-bold"
					>Oem Factories<i class="fas fa-angle-right"></i></nuxt-link>
					<nuxt-link
						to="/shop"
						class="btn btn-link btn-white btn-underline font-weight-bold"
					>Top suppliers<i class="fas fa-angle-right"></i></nuxt-link>
				</div>
			</div>
			<div
				class="banner2 banner banner-fixed overlay-zoom appear-animate swiper-slide"
				v-animate
				data-animation-options="{
                            'name': 'fadeInLeftShorter',
                            'delay': '.2s'
                        }"
				style="background-color: #444443"
			>
				<figure>
					<img
						v-lazy="'./images/home/banner/2.jpg'"
						alt="banner"
						width="580"
						height="219"
					/>
				</figure>
				<div class="banner-content y-50">
					<h3 class="banner-title text-white ls-normal lh-1">Ready-To-Ship Products</h3>
					<p class="mb-7 text-white">Source from 15 milion products that are ready to ship, and
						leave the facility within 15 days</p>
					<nuxt-link
						to="/shop"
						class="btn btn-link btn-white btn-underline font-weight-bold"
					>New Arrivals<i class="fas fa-angle-right"></i></nuxt-link>
					<nuxt-link
						to="/shop"
						class="btn btn-link btn-white btn-underline font-weight-bold"
					>Best Sellers<i class="fas fa-angle-right"></i></nuxt-link>
				</div>
			</div>
		</swiper-carousel>
	</section>
</template>

<script>
import SwiperCarousel from '~/components/elements/SwiperCarousel';

import { bannerSlider } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel
	},
	data: function () {
		return {
			bannerSlider: bannerSlider
		};
	}
};
</script>