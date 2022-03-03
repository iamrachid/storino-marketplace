<template>
	<div class="container intro-section">
		<div class="row">
			<div class="col-xl-9 col-lg-9 col-md-8 mb-4 mb-lg-0">
				<swiper-carousel
					class="swiper-theme swiper-dot-inner swiper-dot-white intro-slider animation-slider"
					:options="introSlider"
					v-animate
					ref="introSlider"
				>
					<div
						class="intro-slide1 banner banner-fixed swiper-slide"
						style="background-color: #e8e8ea"
					>
						<figure>
							<img
								src="~/static/images/home/slides/1.jpg"
								alt="banner"
								width="580"
								height="460"
							/>
						</figure>
						<div class="banner-content x-50 y-50 text-center d-flex flex-column align-items-center">
							<h4
								class="banner-subtitle text-body font-weight-normal slide-animate"
								data-animation-options="{'name': 'fadeInUp', 'duration': '1.5s'}"
							>Financing Offer</h4>
							<h3
								class="banner-title slide-animate"
								data-animation-options="{'name': 'fadeInUp', 'duration': '1.5s','delay': '.3s'}"
							>
								Camera, Lens and Tablet</h3>
							<p
								class="font-weight-semi-bold text-grey slide-animate"
								data-animation-options="{'name': 'fadeInLeftShorter', 'duration': '1.2s','delay': '.3s'}"
							>
								Discount</p>
							<div
								class="banner-price-info ls-s text-uppercase text-primary font-weight-bold flex-1 slide-animate"
								data-animation-options="{'name': 'fadeInRightShorter', 'duration': '1.2s','delay': '.8s'}"
							>
								40% OFF</div>
							<nuxt-link
								to="/shop"
								class="btn btn-outline btn-dark btn-rounded slide-animate"
								data-animation-options="{'name': 'fadeIn', 'duration': '1.2s','delay': '1s'}"
							>Shop now</nuxt-link>
						</div>
					</div>

					<div
						class="intro-slide2 banner banner-fixed swiper-slide"
						style="background-color: #7a7675"
					>
						<figure>
							<img
								src="~/static/images/home/slides/2.jpg"
								alt="banner"
								width="580"
								height="460"
							/>
						</figure>
						<div class="banner-content x-50 y-50 text-center">
							<div
								class="slide-animate"
								data-animation-options="{'name': 'blurIn', 'duration': '1.5s'}"
							>
								<h4 class="banner-subtitle mb-1 ls-l text-white text-uppercase font-weight-normal">
									Flash Sales</h4>
								<h3 class="banner-title ls-l text-white text-uppercase font-weight-bold">Up
									to 70% Discount</h3>
								<p class="ls-l mb-5 text-white font-primary">Extra Off Everything online</p>
								<nuxt-link
									to="/shop"
									class="btn btn-outline btn-white btn-rounded mb-1"
								>Shop now</nuxt-link>
							</div>
						</div>
					</div>
				</swiper-carousel>
			</div>

			<div class="col-xl-3 col-lg-3 col-md-4 mb-4">
				<div class="intro-banner banner banner-fixed overlay-dark">
					<figure>
						<img
							class="x-50"
							src="~/static/images/home/banner/drone.png"
							alt="product"
							width="346"
							height="193"
						/>
					</figure>
					<div class="banner-content x-50 y-50 text-center d-flex flex-column align-items-center">
						<p
							class="text-white font-primary text-uppercase flex-1 lh-1 appear-animate"
							v-animate
							data-animation-options="{
							'name': 'maskUp'
						}"
						>Through <br /><span class="d-inline-block mt-1 ls-normal">Riode Birthday</span>
						</p>
						<h4
							class="banner-subtitle mb-1 text-uppercase ls-normal font-weight-normal appear-animate"
							v-animate
							data-animation-options="{
							'name': 'fadeInDownShorter',
							'delay': '.3s'
						}"
						>Up to 70% Off</h4>
						<h3
							class="banner-title ls-md font-weight-bold appear-animate"
							v-animate
							data-animation-options="{
							'name': 'fadeInDownShorter',
							'delay': '.2s'
						}"
						>Portable Drone SD9</h3>
						<nuxt-link
							to="/shop"
							class="btn btn-dark btn-md btn-rounded appear-animate"
							v-animate
							data-animation-options="{
							'name': 'fadeInDownShorter'
						}"
						>Buy drone</nuxt-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SwiperCarousel from '~/components/elements/SwiperCarousel';

import { introSlider } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel
	},
	data: function () {
		return {
			introSlider: introSlider
		};
	}
};
</script>