<template>
	<div
		class="dropdown cart-dropdown type2 mr-0 mr-lg-2"
		ref="cartMenu"
	>
		<a
			href="javascript:;"
			class="cart-toggle label-block link"
			@click="showCartMenu($event)"
		>
			<div class="cart-label d-lg-show ls-normal">
				<span class="cart-name ls-m">Shopping Cart:</span>
				<span class="cart-price">{{ totalPrice | priceFormat }} MAD</span>
			</div>
			<i class="d-icon-bag"><span class="cart-count">{{totalCount}}</span></i>
		</a>
		<div
			class="cart-overlay"
			@click="hideCartMenu($event)"
		></div>

		<div
			class="dropdown-box"
			:class="cartList.length === 0 ? 'pt-1 pb-1' : ''"
		>
			<template v-if="cartList.length > 0">
				<div class="products scrollable">
					<div
						class="product product-cart"
						v-for="item in cartList"
						:key="`cart-item-${item._id}`"
					>
						<figure class="product-media">
							<nuxt-link :to="'/product/' + item._id">
								<img
									v-lazy="item.img"
									alt="product"
									:width="400"
									:height="400"
								/>

							</nuxt-link>
							<button
								class="btn btn-link btn-close"
								@click="removeFromCart(item)"
							>
								<i class="fas fa-times"></i><span class="sr-only">Close</span>
							</button>
						</figure>
						<div class="product-detail">
							<nuxt-link
								:to="'/product/' + item._id"
								class="product-name"
							>{{ item.name }}</nuxt-link>
							<div class="price-box">
								<span class="product-quantity">{{ item.qty }}</span>
								<span class="product-price">{{ item.price | priceFormat }}MAD</span>
							</div>
						</div>
					</div>
				</div>

				<div class="cart-total">
					<label>Subtotal:</label>
					<span class="price">{{ totalPrice | priceFormat }}MAD</span>
				</div>

				<div class="cart-action">
					<nuxt-link
						to="/pages/cart"
						class="btn btn-dark btn-link"
					>View Cart</nuxt-link>
					<nuxt-link
						to="/pages/checkout"
						class="btn btn-dark"
					><span>Go To Checkout</span></nuxt-link>
				</div>
			</template>

			<template v-else>
				<p class="mt-4 text-center font-weight-semi-bold ls-normal text-body">No products in the cart.</p>
			</template>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	computed: {
		...mapGetters( 'cart', [ 'cartList', 'totalCount', 'totalPrice' ] )
	},
	watch: {
		$route: function () {
			this.$refs.cartMenu.classList.remove( 'opened' );
		}
	},
	methods: {
		...mapActions( 'cart', [ 'removeFromCart' ] ),
		showCartMenu: function ( e ) {
			e.currentTarget.closest( '.cart-dropdown' ).classList.add( 'opened' );
		},
		hideCartMenu: function ( e ) {
			e.currentTarget.closest( '.cart-dropdown' ).classList.remove( 'opened' );
		}
	}
};
</script>