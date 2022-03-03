<template>
	<section
		class="container appear-animate"
		v-animate
	>
		<div class="service-list">
			<swiper-carousel
				class="swiper-theme swiper-middle"
				:options="serviceSlider"
			>
				<div
					class="icon-box text-center appear-animate swiper-slide"
					v-animate
					data-animation-options="{
                            'name':'zoomInLeft',
                            'delay': '.2s'
                        }"
				>
					<i
						class="icon-box-icon d-icon-truck"
						style="font-size: 4.4rem;"
					></i>
					<div class="icon-box-content">
						<h4 class="icon-box-title">Free Shipping &amp; Return</h4>
						<p>Free shipping on orders over $99</p>
					</div>
				</div>
				<div
					class="icon-box text-center appear-animate swiper-slide"
					v-animate
					data-animation-options="{
                            'name':'zoomInLeft',
                            'delay': '.3s'
                        }"
				>
					<i
						class="icon-box-icon d-icon-headphone"
						style="font-size: 3.4rem"
					></i>
					<div class="icon-box-content">
						<h4 class="icon-box-title">Customer Support 24/7</h4>
						<p>Instant access to perfect support</p>
					</div>
				</div>
				<div
					class="icon-box text-center appear-animate swiper-slide"
					v-animate
					data-animation-options="{
                            'name':'zoomInLeft',
                            'delay': '.4s'
                        }"
				>
					<i
						class="icon-box-icon d-icon-secure"
						style="font-size: 3.7rem"
					></i>
					<div class="icon-box-content">
						<h4 class="icon-box-title">100% Secure Payment</h4>
						<p>We ensure secure payment!</p>
					</div>
				</div>
				<div
					class="icon-box text-center appear-animate swiper-slide"
					v-animate
					data-animation-options="{
                            'name':'zoomInLeft',
                            'delay': '.5s'
                        }"
				>
					<i
						class="icon-box-icon d-icon-money"
						style="font-size: 3.2rem"
					></i>
					<div class="icon-box-content">
						<h4 class="icon-box-title">Money Back guarantee</h4>
						<p>Any back within 30days</p>
					</div>
				</div>
			</swiper-carousel>
		</div>
	</section>
</template>

<script>
import SwiperCarousel from '~/components/elements/SwiperCarousel';
import { serviceSlider } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel
	},
	data: function () {
		return {
			serviceSlider: serviceSlider
		}
	}
}
</script>