<template>
	<div class="product-gallery pg-vertical">
		<swiper-carousel
			class="product-single-carousel swiper-theme swiper-nav-inner"
			:options="{...baseSlider4, spaceBetween: 0}"
			ref="mediaRef">
			<div
				class="swiper-slide"
				v-for="(item,index) in product.images.slice(0,4)"
				:key="`large-${index}`">
				<figure class="product-image d-flex">
					<img
						:src="item.src"
						alt="large-picture"
						:width="500"
						:height="500"
					/>
				</figure>
			</div>
		</swiper-carousel>

		<div class="product-thumbs-wrap">
			<div class="product-thumbs">
				<swiper-carousel
					class="swiper-theme swiper-nav-full h-100 w-100"
					:options="baseSlider13"
					ref="thumbRef"
					@resize="updatedThumb">
					<div
						class="product-thumb swiper-slide"
						v-for="(item,index) in product.images.slice(0,4)"
						:key="`thumb-one-${index}`"
						:class="{active: index === 0}"
						@click="activeThumb(index)">
						<img
							v-lazy="item.src"
							alt="product thumbnail"
							:width="500"
							:height="500">
					</div>
				</swiper-carousel>
			</div>
		</div>

		<div class="product-label-group">
			<div
				class="product-label label-new"
				v-if="product.is_new"
			>New</div>
			<div
				class="product-label label-stock"
				v-if="product.stock === '0'"
			>Out</div>
			<div
				class="product-label label-top"
				v-if="product.is_top"
			>Top</div>
			<div
				class="product-label label-sale"
				v-if="product.discount > 0"
			>
				<template v-if="product.variants.length > 0">Sale</template>
				<template v-else>-{{ product.discount }}%</template>
			</div>
		</div>
	</div>
</template>

<script>
import SwiperCarousel from '~/components/elements/SwiperCarousel';

import { baseUrl } from '~/api';
import { baseSlider4, baseSlider13 } from '~/utils/data/carousel';

export default {
	components: {
		SwiperCarousel,
	},
	data: function () {
		return {
			baseUrl: baseUrl,
			baseSlider4: baseSlider4,
			baseSlider13: baseSlider13
		};
	},
	props: {
		product: Object
	},
	mounted: function () {
		let self = this;
		this.$refs.mediaRef.mySwiper.on( 'transitionStart', function () {
			let activeIndex = self.$refs.mediaRef.mySwiper.activeIndex;
			self.$refs.thumbRef.mySwiper.slideTo( activeIndex );
			self.$refs.thumbRef.mySwiper.$el
				.find( '.swiper-wrapper' )
				.find( '.product-thumb.active' )[ 0 ]
				.classList.remove( 'active' );
			self.$refs.thumbRef.mySwiper.$el
				.find( '.swiper-wrapper' )
				.find( '.product-thumb' )
			[ activeIndex ].classList.add( 'active' );
		} );
	},
	methods: {
		activeThumb: function ( index ) {
			this.$refs.mediaRef.mySwiper.slideTo( index );
			this.$refs.thumbRef.mySwiper.slideTo( index );
		},
		updatedThumb: function () {
			this.$refs.thumbRef.mySwiper.update();
		},
	}
};
</script>