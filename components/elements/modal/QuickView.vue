<template>
	<div class="product product-single row product-popup">
		<template v-if="loaded">
			<div class="col-md-6">
				<div class="product-gallery pb-0">
					<swiper-carousel
						class="product-single-carousel swiper-theme swiper-nav-inner"
						:options="{...baseSlider4, spaceBetween: 0}"
					>
						<div
							class="swiper-slide"
							v-for="(item,index) in product.images"
							:key="`large-${index}`"
						>
							<figure class="product-image d-flex">
								<img
									v-lazy="item.src"
									alt="large-picture"
									:width="400"
									:height="400"
								/>
							</figure>
						</div>
					</swiper-carousel>

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
			</div>

			<div class="col-md-6">
				<detail-one
					:product2="product"
					class="scrollable"
					:show-nav="false"
				></detail-one>
			</div>

			<button
				title="Close (Esc)"
				type="button"
				class="modal-close"
				@click="$emit('close')"
			><span>×</span></button>
		</template>

		<template v-else>
			<div class="product row p-0 m-0 skeleton-body mfp-product">
				<div class="col-md-6">
					<div class="skel-pro-gallery">
					</div>
				</div>

				<div class="col-md-6">
					<div class="skel-pro-summary"></div>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
import SwiperCarousel from '~/components/elements/SwiperCarousel';
import DetailOne from '~/components/partials/product/detail/DetailOne';

import Api, { baseUrl, currentDemo } from '~/api/api';
import { baseSlider4 } from '~/utils/data/carousel';
import { isEdgeBrowser } from '~/utils';

export default {
	components: {
		SwiperCarousel,
		DetailOne
	},
	props: {
		_id: String,
	},
	data: function () {
		return {
			baseUrl: baseUrl,
			baseSlider4: baseSlider4,
			loaded: false,
			product: null
		};
	},
	created: function () {
		isEdgeBrowser() && document.querySelector( 'body' ).classList.add( 'overflow-hidden' );
	},
	mounted: function () {
		this.loaded = false;
		Api.get( `${ baseUrl }/products/${ this._id }`)
			.then( response => {
				this.product = response.data.result;
        console.log(this.product);
				this.loaded = true;
			} )
			.catch( error => ( { error: JSON.stringify( error ) } ) );
	},
	destroyed: function () {
		isEdgeBrowser() && document.querySelector( 'body' ).classList.remove( 'overflow-hidden' );
	}
};
</script>