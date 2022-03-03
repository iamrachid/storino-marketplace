<template>
	<section
		class="blog container mt-10 pt-3 mb-10 appear-animate"
		data-animation-options="{
                            'name':'fadeIn',
                            'delay': '.4s'
                        }"
		v-animate
	>
		<h2 class="title title-underline title-line mb-4">From our Blog</h2>

		<swiper-carousel
			class="swiper-theme post-slider"
			:options="blogSlider"
		>
			<div
				class="swiper-slide"
				v-for="item in posts"
				overlayClass="overlay-zoom"
				:key="`post-${item.slug}`"
			>
				<post-three
					:post="item"
					:showLarge="true"
					btnClass="btn-underline btn-sm"
				></post-three>
			</div>
		</swiper-carousel>
	</section>
</template>

<script>
import SwiperCarousel from '~/components/elements/SwiperCarousel';
import PostThree from '~/components/elements/post/PostThree';

import { blogSlider } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel,
		PostThree
	},
	props: {
		posts: Array
	},
	data: function () {
		return {
			blogSlider: blogSlider
		}
	}
}
</script>