<template>
	<div class="product-details row pl-0">
		<div class="col-md-6">
			<h2 class="product-name mt-0">{{ product.name }}</h2>

			<div class='product-meta'>
				{{product.sku ? 'SKU:' : ''}} <span class='product-sku'>{{ product.sku }}</span>
				CATEGORIES: <span class='product-brand'>
					<span
						v-for="(item, index) in product.product_categories"
						:key="`category-${item.slug}`"
					>
						<nuxt-link :to="{path:'/shop', query:{category: item.slug}}">
							{{ item.name }}
						</nuxt-link>
						<template v-if="index < product.product_categories.length - 1">,</template>
					</span>
				</span>
			</div>

			<div class="ratings-container">
				<div class="ratings-full">
					<span
						class="ratings"
						:style="{width: product.ratings * 20 + '%'}"
					></span>
					<span class="tooltiptext tooltip-top">{{ product.ratings | priceFormat }}</span>
				</div>
				<a
					href="javascript:;"
					class="rating-reviews"
				>( {{ product.reviews }} reviews )</a>
			</div>

			<p class="product-short-desc">{{ product.short_description }}</p>

			<ul class="product-status mt-4 mb-4 list-type-check list-style-none pl-0">
				<li>Praesent id enim sit amet.</li>
				<li>Tdio vulputate eleifend in in tortor. ellus massa.Dristique sitiismonec.</li>
				<li>Massa ristique sit amet condim vel, facilisis quimequistiqutiqu amet condim.</li>
			</ul>
		</div>

		<div class="col-md-6 pl-2">
			<div class="product-price">
				<template v-if="product.display_price[ 0 ] === product.display_price[ 1 ]">
					<span class="price">${{ product.display_price[0] | priceFormat  }}</span>
				</template>

				<template v-else>
					<template v-if="product.variants.length === 0 || (product.variants.length > 0 && !product.variants[0].price)">
						<ins class="new-price">${{ product.display_price[0] | priceFormat }}</ins>
						<del class="old-price">${{ product.display_price[1] | priceFormat }}</del>
					</template>

					<template v-else>
						<ins class="new-price">${{ product.display_price[0] | priceFormat }} &ndash; ${{ product.display_price[1] | priceFormat }}</ins>
					</template>
				</template>
			</div>

			<template v-if="product.discount > 0">
				<count-down
					class="product-countdown-container font-weight-semi-bold"
					until='2021-12-31'
					:type="2"
				></count-down>
			</template>

			<div
				class="product-form product-color"
				v-if="vColors.length > 0"
			>
				<label>Color:</label>

				<div class="product-variations">
					<a
						href="javascript:;"
						:class="`color ${ curColor === color.name ? 'active' : '' } ${ isDisabled( color.name, curSize ) ? 'disabled' : '' }`"
						:key="'color-' + color.name"
						:style="`background-color: ${ color.text }`"
						@click="toggleColorHandler( color )"
						v-for="color in vColors"
					></a>
				</div>
			</div>

			<div
				class="product-form product-size mb-0 pb-2"
				v-if="vSizes.length > 0"
			>
				<label>Size:</label>

				<div class="product-form-group">
					<div class="product-variations">
						<a
							href="javascript:;"
							:class="`size ${ curSize === size.name ? 'active' : '' } ${ isDisabled( curColor, size.name ) ? 'disabled' : '' }`"
							:key="'size-' + size.name"
							@click="toggleSizeHandler( size )"
							v-for="size in vSizes"
						>{{size.text}}</a>
					</div>
					<vue-slide-toggle
						:open="curColor !== null || curSize !== null"
						class="overflow-hidden reset-value-button w-100 mb-0"
					>
						<a
							href="#"
							@click.prevent="cleanAll"
							class="product-variation-clean"
						>Clean All</a>
					</vue-slide-toggle>
				</div>
			</div>

			<vue-slide-toggle :open="curIndex > -1">
				<div
					class="product-variation-price"
					v-if="curIndex > -1"
				>
					<div
						class="single-product-price"
						v-if="product.variants[curIndex].price"
					>
						<div
							class="product-price"
							v-if="product.variants[curIndex].sale_price"
							key="sale_price"
						>
							<ins class="new-price">${{ product.variants[curIndex].sale_price | priceFormat }}</ins>
							<del class="old-price">${{ product.variants[curIndex].price | priceFormat }}</del>
						</div>

						<div
							class="product-price"
							v-else
						>
							<ins class="new-price">${{ product.variants[curIndex].price | priceFormat }}</ins>
						</div>
					</div>
				</div>
			</vue-slide-toggle>

			<hr class="product-divider mt-0">

			<div class="product-form product-qty">
				<label class="d-none">QTY:</label>

				<div class="product-form-group">
					<input-quantity
						class="mr-2"
						:max="product.stock"
						@change-qty="changeQty"
					></input-quantity>

					<button
						class="btn-product btn-cart text-normal ls-normal font-weight-semi-bold"
						:class="{disabled: !isCartActive}"
						@click="addCart"
					><i class="d-icon-bag"></i>Add to Cart</button>
				</div>
			</div>
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
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { VueSlideToggle } from 'vue-slide-toggle';

import CountDown from '~/components/elements/CountDown';
import InputQuantity from '~/components/elements/InputQuantity';
import ProductNav from '~/components/partials/product/ProductNav';

export default {
	components: {
		VueSlideToggle,
		InputQuantity,
		ProductNav,
		CountDown
	},
	data: function () {
		return {
			vSizes: [],
			vColors: [],
			curSize: null,
			curColor: null,
			tIndex: -1,
			quantity: 1
		};
	},
	props: {
		product: Object,
		prev: Object,
		next: Object
	},
	computed: {
		...mapGetters( 'wishlist', [ 'wishList' ] ),
		displayColors: function () {
			return this.vColors.filter(
				item => !this.isDisabled( item.name, this.curSize )
			);
		},
		displaySizes: function () {
			return this.vSizes.filter(
				item => !this.isDisabled( this.curColor, item.name )
			);
		},
		curIndex: function () {
			if ( this.curColor && this.vSizes.length === 0 ) {
				let index = this.product.variants.findIndex(
					item => item.color.name === this.curColor
				);
				this.tIndex = index;
				return index;
			}

			if ( this.curSize && this.vColors.length === 0 ) {
				let index = this.product.variants.findIndex(
					item => item.size.name === this.curSize
				);
				this.tIndex = index;
				return index;
			}

			if ( this.curColor && this.curSize ) {
				let index = this.product.variants.findIndex(
					item =>
						item.color.name === this.curColor &&
						item.size.name === this.curSize
				);
				this.tIndex = index;
				return index;
			} else {
				return -1;
			}
		},
		isCartActive: function () {
			if ( parseInt( this.product.stock ) < parseInt( this.quantity ) ) return false;
			if ( this.product.variants.length === 0 ) return true;
			if ( this.curSize && this.curColor ) return true;
			if ( this.curColor && this.vSizes.length === 0 ) return true;
			if ( this.curSize && this.vColors.length === 0 ) return true;

			return false;
		},
		isWishlisted: function () {
			if ( this.wishList.find( item => item.name === this.product.name ) )
				return true;
			return false;
		}
	},
	mounted: function () {
		if ( this.product.variants.length > 0 ) {
			if ( this.product.variants[ 0 ].size )
				this.product.variants.forEach( item => {
					if (
						!this.vSizes.find(
							vsize => vsize.name === item.size.name
						)
					)
						this.vSizes.push( {
							name: item.size.name,
							text: item.size.size,
							image: item.size.thumbnail
						} );
				} );

			if ( this.product.variants[ 0 ].color )
				this.product.variants.forEach( item => {
					if (
						!this.vColors.find(
							vColor => vColor.name === item.color.name
						)
					)
						this.vColors.push( {
							name: item.color.name,
							text: item.color.color,
							image: item.color.thumbnail
						} );
				} );
		}
	},
	methods: {
		...mapActions( 'cart', [ 'addToCart' ] ),
		...mapActions( 'wishlist', [ 'addWishlist' ] ),
		isDisabled: function ( color, size ) {
			if ( !color || !size ) return false;

			if ( this.vSizes.length === 0 )
				return !this.product.variants.find(
					item => item.color.name === color
				);

			if ( this.vColors.length === 0 )
				return !this.product.variants.find(
					item => item.size.name === size
				);

			return !this.product.variants.find(
				item => item.color.name === color && item.size.name === size
			);
		},
		cleanAll: function () {
			this.curSize = null;
			this.curColor = null;
		},
		changeQty: function ( qty ) {
			this.quantity = qty;
		},
		addCart: function () {
			if ( this.isCartActive ) {
				let productName = this.product.name;
				if ( this.curColor ) productName += '-' + this.curColor;
				if ( this.curSize ) productName += '-' + this.curSize;

				let productPrice;
				if (
					this.curIndex > -1 &&
					this.product.variants[ this.curIndex ].price
				) {
					productPrice = this.product.variants[ this.curIndex ]
						.sale_price
						? this.product.variants[ this.curIndex ].sale_price
						: this.product.variants[ this.curIndex ].price;
				} else {
					productPrice = this.product.sale_price
						? this.product.sale_price
						: this.product.price;
				}

				let saledProduct = {
					...this.product,
					price: this.product.display_price[ 0 ]
				};
				this.addToCart( {
					product: {
						...this.product,
						name: productName,
						price: productPrice,
						qty: this.quantity
					}
				} );
			}
		},
		wishlistHandler: function ( e ) {
			let currentTarget = e.currentTarget;
			currentTarget.classList.add( 'load-more-overlay', 'loading' );

			setTimeout( () => {
				this.addWishlist( this.product );
				currentTarget.classList.remove( 'load-more-overlay', 'loading' );
			}, 1000 );
		},

		toggleColorHandler: function ( color ) {
			if ( !this.isDisabled( color.name, this.curSize ) ) {
				if ( this.curColor === color.name ) {
					this.curColor = null;
				} else {
					this.curColor = color.name;
				}
			}
		},

		toggleSizeHandler: function ( size ) {
			if ( !this.isDisabled( this.curColor, size.name ) ) {
				if ( this.curSize === size.name ) {
					this.curSize = null;
				} else {
					this.curSize = size.name;
				}
			}
		}
	}
};
</script>