<template>
	<div
		class="product product-list"
		:class="{'product-variable': product.style === 'variable'}"
	>
		<figure class="product-media">
			<nuxt-link :to="`/product/${product._id}`">
				<img
					v-lazy="`${product.images[0].src}`"
					alt="large-picture"
					:width="400"
					:height="400"
					:class="{'last-image': true }"
				/>
			</nuxt-link>

      <div class="product-label-group">
        <div class="product-label label-new" v-if="product.is_new">
          New
        </div>
        <div class="product-label label-stock" v-if="product.outStock.hide">
          Out
        </div>
        <div class="product-label label-top" v-if="product.is_top">
          Top
        </div>
        <div class="product-label label-sale" v-if="product.discount > 0">
          <template v-if="product.variants.length > 0">Discount</template>
          <template v-else>-{{ product.discount }}%</template>
        </div>
      </div>
		</figure>

		<div class="product-details">
			<div class="product-cat">
				<span
					v-for="(cat,index) in product.product_categories"
					:key="`product-category-${index}`"
				>
					<nuxt-link :to="{ path: '/shop', query: { category: cat.slug }}">{{ cat.name }}</nuxt-link>
					<template v-if="index < product.product_categories.length - 1">,</template>
				</span>
			</div>

			<h3 class="product-name">
				<nuxt-link :to="'/product/' + product._id">{{ product.name }}</nuxt-link>
			</h3>

      <div class="product-price">
        <template v-if="product.type === 'simple' ">
          <ins class="new-price">{{ product.price.salePrice | priceFormat }}MAD</ins>
          <del class="old-price" v-if="product.price.comparePrice != 0 & product.price.comparePrice != product.price.salePrice">{{ product.price.comparePrice | priceFormat }}MAD</del>
        </template>
        <template v-else-if="this.minPrice === this.maxPrice">
          <ins class="new-price">{{ this.minPrice | priceFormat }}MAD</ins>
        </template>
        <template v-else>
          <ins class="new-price">{{ this.minPrice | priceFormat }}MAD &ndash; {{ this.maxPrice | priceFormat }}MAD</ins>
        </template>
      </div>

      <div class="ratings-container">
        <div class="ratings-full">
          <span class="ratings" :style="{width: product.review.rating * 20 + '%'}"></span>
        </div>
        <p class="rating-reviews">( {{ product.review.reviews.length  }} reviews )</p>
      </div>

			<div class="product-short-desc">
				{{ product.short_description }}
			</div>

			<div class="product-action">
				<a
					href="javascript:;"
					class="btn-product btn-cart"
					title="Add to cart"
					v-if="product.variants.length === 0"
					@click="addCart"
				><i class="d-icon-bag"></i><span>Add to Cart</span></a>

				<nuxt-link
					:to="`/product/${product._id}`"
					class="btn-product btn-cart"
					title="Go to detail"
					v-else
				><span>Select Options</span></nuxt-link>

				<a
					href="javascript:;"
					class="btn-wishlist btn-product-icon"
					title="Add to wishlist"
					@click="wishlistHandler($event)"
					v-if="!isWishlisted"
				><i class="d-icon-heart"></i></a>

				<a
					href="javascript:;"
					class="btn-wishlist btn-product-icon"
					title='Remove from wishlist'
					v-if="isWishlisted"
					@click="wishlistHandler($event)"
				>
					<i class="d-icon-heart-full"></i>
				</a>

				<a
					href="#"
					class="btn-product-icon btn-quickview"
					title="Quick View"
					@click.prevent="openQuickview"
				><i class="d-icon-search"></i></a>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	props: {
		product: Object
	},
  data() {
    return {
      maxPrice: 0,
      minPrice: 1e10,
    };
  },
  mounted() {
    // console.log(this.product);
    this.product.variants.forEach(option => {
      if (option.price.salePrice > this.maxPrice) this.maxPrice = option.price.salePrice;
      if (option.price.salePrice < this.minPrice) this.minPrice = option.price.salePrice;
    });
  },
	computed: {
		...mapGetters( 'wishlist', [ 'wishList' ] ),
    isWishlisted: function () {
      return !!this.wishList.find(item => item.id === this.product._id);
    }
	},
	methods: {
		...mapActions( 'cart', [ 'addToCart' ] ),
		...mapActions( 'wishlist', [ 'toggleWishlist' ] ),
    wishlistHandler: function ( e ) {
      let currentTarget = e.currentTarget;
      currentTarget.classList.add( 'load-more-overlay', 'loading' );

      setTimeout( () => {
        currentTarget.classList.remove( 'load-more-overlay', 'loading' );
        this.toggleWishlist({id: this.product._id} );
      }, 1000 );
    },

    addCart: function () {
      if ( this.product.type === 'simple' ) {
        const name = this.product.name;
        const type = this.product.type;
        const price = this.product.price.salePrice;
        const qty = this.quantity;
        const img = this.product.images[0].src;
        const _id = this.product._id;

        this.addToCart( {
          product: {
            _id,
            img,
            name,
            price,
            qty,
            type,
          }
        } );
      }
    },

		openQuickview: function () {
			this.$modal.show(
				() => import( '~/components/elements/modal/QuickView' ),
				{ _id: this.product._id},
				{
					width: '988',
					height: 'auto',
					adaptive: true,
					class: 'quickview-modal scrollable'
				}
			);
		}
	}
};
</script>