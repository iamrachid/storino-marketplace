<template>
	<div class="product-details">
		<div class="product-navigation" v-if="showNav">
			<ul class="breadcrumb breadcrumb-lg">
				<li>
					<nuxt-link
						title="link to home"
						to="/"
					><i class="d-icon-home"></i></nuxt-link>
				</li>
				<li>
          <a href="javascript:;" class="active">Products</a></li>
				<li>Detail</li>

			</ul>
		</div>

		<h2 class="product-name">{{ product2.name }}</h2>

    <div class="product-price">
      <template v-if="product2.type === 'simple' ">
        <ins class="new-price">${{ product2.price.salePrice | priceFormat }}</ins>
        <del class="old-price">${{ product2.price.comparePrice | priceFormat }}</del>
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
				<span
					class="ratings"
					:style="{width: product2.review.rating * 20 + '%'}"
				></span>
				<span class="tooltiptext tooltip-top">{{ product2.review.rating | priceFormat }}</span>
			</div>
			<a
				href="javascript:;"
				class="rating-reviews"
			>( {{ product2.review.reviews.length }} reviews )</a>
		</div>

		<p class="product-short-desc">{{ product2.description }}</p>

		<div class="product-form product-variations product-color" v-for="(option,i) in product2.options">
			<label>{{ option.name }} :</label>

			<div class="select-box">
				<select
					class="form-control"
					aria-label="color-select-box"
					v-model="options['option'+i]"
				>
					<option value="" selected >Choose an Option</option>

					<option
						:value="item._id"
						:key='item._id'
						v-for="item in option.values"
					>{{ item.value1 }}</option>
				</select>
			</div>
		</div>


		<vue-slide-toggle :open="currentVariant !== null">
			<div class="product-variation-price" v-if="currentVariant !== null">
				<div class="single-product-price">
					<div
						class="product-price"
						key="sale_price"
					>
						<ins class="new-price">${{ currentVariant.price.salePrice | priceFormat }}</ins>
					</div>
				</div>
			</div>
		</vue-slide-toggle>

		<hr class="product-divider mt-0">

		<div class="product-form product-qty" v-if="!stickyCart" key="normalCart">
			<div class="product-form-group">
				<input-quantity class="mr-2" max="10" @change-qty="changeQty" />

				<button class="btn-product btn-cart text-normal ls-normal font-weight-semi-bold"
					:class="{disabled: currentVariant === null && this.product2.type === 'variable' }" @click="addCart">
          <i class="d-icon-bag"></i>
          Add to Cart
        </button>
			</div>
		</div>

		<sticky-wrapper v-if="stickyCart" stickyClass="product-sticky-content" :breakpoint="767" :offsetTop="600">
			<div class="sticky-content fix-bottom product-sticky-content">
				<div class="container">
					<div class="sticky-product-details">
						<figure class="product-image">
							<a href="javascript:;">
								<img
									v-lazy="product2.images[0].src"
									width="90"
									height="90"
									alt="Product image"
								>
							</a>
						</figure>

						<div>
							<h4 class="product-title">
								<a href="javascript:;">{{ product2.name.slice(0,25) }}...</a>
							</h4>

							<div class="product-info">
								<div class="product-price">
                  <template v-if="product2.type === 'simple' ">
                    <ins class="new-price">${{ product2.price.salePrice | priceFormat }}</ins>
                    <del class="old-price">${{ product2.price.comparePrice | priceFormat }}</del>
                  </template>
                  <template v-else-if="currentVariant !== null">
                    <ins class="new-price">${{ currentVariant.price.salePrice | priceFormat }}</ins>
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
										<span
											class="ratings"
											:style="{width: product2.review.rating * 20 + '%'}"
										></span>
										<span class="tooltiptext tooltip-top">{{ product2.review.rating | priceFormat }}</span>
									</div>
								</div>

							</div>
						</div>
					</div>

					<div class="product-form product-qty">
						<div class="product-form-group">
							<input-quantity
								class="mr-2"
								max="10"
								@change-qty="changeQty"
							></input-quantity>

							<button
								class="btn-product btn-cart text-normal ls-normal font-weight-semi-bold"
								:class="{disabled: currentVariant === null && this.product2.type === 'variable'}"
								@click="addCart"
							><i class="d-icon-bag"></i>Add to Cart</button>
						</div>
					</div>
				</div>
			</div>
		</sticky-wrapper>

		<hr class="product-divider mb-3">

		<div class="product-footer">
			<div class="social-links mr-4">
				<a
					title="social-icon-facebook"
					href="javascript:;"
					class="social-link social-facebook fab fa-facebook-f"
				></a>
				<a
					title="social-icon-twitter"
					href="javascript:;"
					class="social-link social-twitter fab fa-twitter"
				></a>
				<a
					title="social-icon-pinterest"
					href="javascript:;"
					class="social-link social-pinterest fab fa-pinterest-p"
				></a>
			</div>

			<span class="divider d-lg-show"></span>

			<a
				href="#"
				class="btn-wishlist"
				title="Add to wishlist"
				@click.prevent="wishlistHandler($event)"
				v-if="!isWishlisted"
			><i class="d-icon-heart"></i>
				Add to Wishlist
			</a>

			<nuxt-link
				to="/pages/wishlist"
				class="btn-wishlist"
				title="Browse wishlist"
				v-else
			><i class="d-icon-heart-full"></i>
				Browse wishlist
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { VueSlideToggle } from 'vue-slide-toggle';

import InputQuantity from '~/components/elements/InputQuantity';
import StickyWrapper from '~/components/elements/StickyWrapper';

export default {
	components: {
		VueSlideToggle,
		InputQuantity,
		StickyWrapper
	},
	data: function () {
		return {
      options: {},
			vSizes: [],
			vColors: [],
			curSize: null,
			curColor: null,
			tIndex: -1,
			quantity: 1,
      maxPrice: 0,
      minPrice: 10e10,
		};
	},
	props: {
		product: Object,
		showNav: {
			type: Boolean,
			default: true
		},
		stickyCart: {
			type: Boolean,
			default: false
		},
    product2: Object,
	},
	computed: {
		...mapGetters( 'wishlist', [ 'wishList' ] ),
    currentVariant: function() {
      if(this.product2.type === 'simple') return null;
      if(Object.keys(this.options).length !== this.product2.options.length) return null;
      let variant = this.product2.variants;
      this.product2.options.forEach((option,i) => {
        variant = variant.filter(variant => {
          return variant['option'+(i+1)].value === this.options['option'+i]
        })
      })
      return variant[0];
    },
		isWishlisted: function () {
			if ( this.wishList.find( item => item.name === this.product.name ) )
				return true;
			return false;
		}
	},
	mounted: function () {
    if(this.product2.type !== "simple") {
      this.product2.variants.forEach(option => {
        if (option.price.salePrice > this.maxPrice) this.maxPrice = option.price.salePrice;
        if (option.price.salePrice < this.minPrice) this.minPrice = option.price.salePrice;
      });
    }
	},
	methods: {
		...mapActions( 'cart', [ 'addToCart' ] ),
		...mapActions( 'wishlist', [ 'addWishlist' ] ),

		changeQty: function ( qty ) {
			this.quantity = qty;
		},

		addCart: function () {
			if ( this.product2.type === 'simple' ) {
				const name = this.product2.name;
        const type = this.product2.type;
				const price = this.product2.price.salePrice;
        const qty = this.quantity;
				const img = this.product2.images[0].src;
        const _id = this.product2._id;

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
      if (this.currentVariant !== null){
        const name = this.product2.name;
        const type = this.product2.type;
        const price = this.currentVariant.price.salePrice;
        const qty = this.quantity;
        const img = this.product2.images[0].src;
        const _id = this.product2._id;
        const variant = {_id: this.currentVariant._id};

        this.addToCart( {
          product: {
            _id,
            img,
            name,
            price,
            qty,
            type,
            variant
          }
        } );
      }
		},

		wishlistHandler: function ( e ) {
			let currentTarget = e.currentTarget;
			currentTarget.classList.add( 'load-more-overlay', 'loading' );

			setTimeout( () => {
				this.addWishlist( this.product2._id );
				currentTarget.classList.remove( 'load-more-overlay', 'loading' );
			}, 1000 );
		}
	},

};
</script>