<template>
	<div class="product" :class="{'product-variable': product.style === 'variable'}">
		<figure class="product-media">
			<nuxt-link :to="`/product/${product._id}`">
				<img
					v-lazy="`${product.images[0].src}?height=400`"
					alt="large-picture"
					:width="400"
					:height="400"
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

			<div class="product-action-vertical">

				<a href="#" class="btn-product-icon btn-cart"
					 title="Add to cart" v-if="product.type === 'simple'"
					 @click.prevent="addCart">
          <i class="d-icon-bag"></i>
        </a>

				<nuxt-link :to="`/product/${product._id}`" class="btn-product-icon btn-cart"
					title="Go to detail" v-else>
          <i class="d-icon-arrow-right"></i>
        </nuxt-link>

				<a href="#" class="btn-wishlist btn-product-icon"
           title="Add to wishlist" v-if="!isWishlisted"
           @click.prevent="wishlistHandler($event)">
          <i class="d-icon-heart"></i>
        </a>

				<a href="#" class="btn-wishlist btn-product-icon"
           title='Remove from wishlist' v-if="isWishlisted"
           @click.prevent="wishlistHandler($event)">
					<i class="d-icon-heart-full"></i>
				</a>
			</div>

			<div class="product-action">
				<a href="#" class="btn-product btn-quickview" title="Quick View" @click.prevent="openQuickview">Quick View</a>
			</div>
		</figure>

		<div class="product-details">

			<h3 class="product-name">
				<nuxt-link :to="'/product/' + product.slug">{{ product.name }}</nuxt-link>
			</h3>

			<div class="product-price">
				<template v-if="product.type === 'simple' ">
          <ins class="new-price">${{ product.price.salePrice | priceFormat }}</ins>
          <del class="old-price">${{ product.price.comparePrice | priceFormat }}</del>
				</template>
        <template v-else-if="this.minPrice === this.maxPrice">
          <ins class="new-price">${{ this.minPrice | priceFormat }}</ins>
        </template>
        <template v-else>
          <ins class="new-price">${{ this.minPrice | priceFormat }} &ndash; ${{ this.maxPrice | priceFormat }}</ins>
        </template>
			</div>

			<div class="ratings-container">
				<div class="ratings-full">
					<span class="ratings" :style="{width: product.review.rating * 20 + '%'}"></span>
				</div>
				<p class="rating-reviews">( {{ product.review.reviews.length  }} reviews )</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { baseUrl } from '~/api';

export default {
	props: {
		product: Object,
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
				{ _id: this.product._id },
				{
					width: '988',
					height: 'auto',
					adaptive: true,
					class: 'quickview-modal scrollable'
				},{
            'before-open': this.beforeOpen,
            'before-close': this.beforeClose
        }
			);
		},
    beforeOpen (event) {
      //TODO NEEDS SOMETHING THAT DOESN'T CHANGE THE
    },
    beforeClose (event) {
      //TODO NEEDS SOMETHING THAT DOESN'T CHANGE THE ROUTE
    }
	}
};
</script>