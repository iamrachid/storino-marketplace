<template>
	<main class="main ">
		<nav class="breadcrumb-nav">
			<div class="container">
				<ul class="breadcrumb">
					<li>
						<nuxt-link
							to="/"
							title="link to home"
						><i class="d-icon-home"></i></nuxt-link>
					</li>
					<li>Wishlist</li>
				</ul>
			</div>
		</nav>

		<div class="page-content pt-10 pb-10 mb-2">
			<div class="container">
				<template v-if="products.length > 0">
					<table class="shop-table wishlist-table mt-2 mb-4">
						<thead>
							<tr>
								<th class="product-name"><span>Product</span></th>
								<th></th>
								<th class="product-price"><span>Price</span></th>
								<th class="product-add-to-cart"></th>
								<th class="product-remove"></th>
							</tr>
						</thead>
						<tbody class="wishlist-items-wrapper">
							<tr
								:key="'wishlist' + item._id"
								v-for="item in products"
							>
								<td class="product-thumbnail">
									<figure>
										<nuxt-link :to="'/product/' + item._id">
											<img
												:src="item.images[0].src"
												:width="400"
												:height="400"
												alt="product"
											/>
										</nuxt-link>
									</figure>
								</td>

								<td class="product-name">
									<div class="product-name-section">
										<nuxt-link :to="'/product/' + item.slug">{{item.title}}</nuxt-link>
									</div>
								</td>

                <td class="product-price">
                  <template v-if="item.type === 'simple' ">
                    <ins class="new-price">${{ item.price.salePrice | priceFormat }}</ins>
                    <del class="old-price">${{ item.price.comparePrice | priceFormat }}</del>
                  </template>
                  <template v-else-if="minPrice(item) === maxPrice(item) ">
                    <ins class="new-price">${{ minPrice(item) | priceFormat }}</ins>
                  </template>
                  <template v-else>
                    <ins class="new-price">${{ minPrice(item) | priceFormat }} &ndash; ${{ maxPrice(item) | priceFormat }}</ins>
                  </template>
                </td>

								<td class="product-add-to-cart">
									<template>
										<nuxt-link
											:to="'/product/' + item._id"
											class="btn-product btn-primary"
											v-if="item.variants.length > 0"
										><span>Select options</span></nuxt-link>
										<a
											href="javascript:;"
											class="btn-product btn-primary"
											v-else
											@click="moveToCartHandler(item)"
										>Add to Cart</a>
									</template>
								</td>

								<td class="product-close">
									<a
										href="javascript:;"
										class="product-remove"
										title="Remove this product"
										@click="toggleWishlist({ id: item._id })"
									>
										<i class="fas fa-times"></i>
									</a>
								</td>
							</tr>
						</tbody>
					</table>

					<div class="social-links share-on">
						<h5 class="text-uppercase font-weight-bold mb-0 mr-4 ls-s">Share on:</h5>
						<a
							href="javascript:;"
							class="social-link social-icon social-facebook"
							title="Facebook"
						><i class="fab fa-facebook-f"></i></a>
						<a
							href="javascript:;"
							class="social-link social-icon social-twitter"
							title="Twitter"
						><i class="fab fa-twitter"></i></a>
						<a
							href="javascript:;"
							class="social-link social-icon social-pinterest"
							title="Pinterest"
						><i class="fab fa-pinterest-p"></i></a>
						<a
							href="javascript:;"
							class="social-link social-icon social-email"
							title="Email"
						><i class="far fa-envelope"></i></a>
						<a
							href="javascript:;"
							class="social-link social-icon social-whatsapp"
							title="Whatsapp"
						><i class="fab fa-whatsapp"></i></a>
					</div>
				</template>

				<template v-else>
					<div class="empty-cart text-center">
						<i class="wishlist-empty far fa-heart"></i>
						<p>No products added to the wishlist.</p>
						<p class="return-to-shop mb-0">
							<nuxt-link
								class="button wc-backward btn btn-dark btn-md"
								to="/shop"
							>
								Return to shop
							</nuxt-link>
						</p>
					</div>
				</template>
			</div>
		</div>
	</main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import axios from "axios";

export default {
	data: function () {
		return {
      products : []
		};
	},
	computed: {
		...mapGetters( 'wishlist', [ 'wishList' ] )
	},
	methods: {
		...mapActions( 'cart', [ 'addToCart' ] ),
		...mapActions( 'wishlist', [ 'toggleWishlist' ] ),
		/*moveToCartHandler: function ( data ) {
			if ( data.stock > 0 ) {
				let product = {
					...data,
					price: data.display_price[ 0 ]
				};
				this.addToCart( { product: product } );
			}
			this.toggleWishlist( data );
		},*/

    minPrice: function(item) {
      let min = 10e10;
      item.variants.forEach(option => {
        if (option.price.salePrice < min) min = option.price.salePrice;
      });
      return min;
    },

    maxPrice: function(item) {
      let max = 0;
      item.variants.forEach(option => {
        if (option.price.salePrice > max) max = option.price.salePrice;
      });
      return max;
    },

    moveToCartHandler: function (product) {
      if ( product.type === 'simple' ) {
        const name = product.name;
        const type = product.type;
        const price = product.price.salePrice;
        const qty = 1;
        const img = product.images[0].src;
        const _id = product._id;

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

        this.toggleWishlist( {id: product._id} );
      }
    },
	},
  watch: {
    async wishList(newState) {
      if(newState.length > 0) {
        let filter = '';
        newState.forEach(item => filter = filter + '_id='+item.id+'&' );
        const query = 'http://localhost:3000/products?' + filter;
        const product = await axios.get(query);
        this.products = product.data.result;
      } else {
        this.products = [];
      }
    }
  },
  async fetch() {
    if(this.wishList.length > 0) {
      let filter = '';
      this.wishList.forEach(item => filter = filter + '_id='+item.id+'&' );
      const query = 'http://localhost:3000/products?' + filter;
      const product = await axios.get(query);
      this.products = product.data.result;
    }
  }
};
</script>

<style scoped>
.main {

  min-height: 58vh;
}

</style>