<template>
	<div>
		<toolbox-one />

    <div :class="`${$route.query.type === 'list' ? 'product-lists': 'row gutter-no split-line ' + gridClasses[itemsPerRow]} product-wrapper`">
      <template v-if="products">
        <div
            class="product-wrap"
            v-for="item in products"
            :key="`shop-${item.slug}`"
        >
          <product-two
              :product="item"
              class="text-center"
              v-if="$route.query.type !== 'list'"
          ></product-two>

          <product-eight
              :product="item"
              v-else
          ></product-eight>
        </div>
      </template>

			<template v-else>
				<div
					class="product-wrap"
					v-for="(item,index) in new Array(perPage).fill(1)"
					:key="`shop-skel-${index}`"
				>
					<div
						class="product-loading-overlay"
						v-if="$route.query.type !== 'list'"
					></div>

					<div
						class="skel-pro skel-pro-list mb-4"
						v-else
					></div>
				</div>
			</template>
		</div>

		<template v-if="products !== null">
			<nav
				class="toolbox toolbox-pagination"
				v-if="total > 0"
			>
				<p class="show-info">Showing <span>{{ Math.min(perPage, products.length) }} of {{ total }}</span> Products</p>

				<pagination
					:total-page="totalPage"
					v-if="totalPage"
				></pagination>
			</nav>

			<p v-else>No products were found matching your selection.</p>
		</template>
	</div>
</template>

<script>
import ProductTwo from '~/components/elements/product/ProductTwo';
import ProductEight from '~/components/elements/product/ProductEight';
import Pagination from '~/components/elements/Pagination';
import ToolboxOne from '~/components/partials/shop/toolbox/ToolboxOne';
import ToolboxTwo from '~/components/partials/shop/toolbox/ToolboxTwo';
import ToolboxThree from '~/components/partials/shop/toolbox/ToolboxThree';

import Api, { baseUrl, currentDemo } from '~/api/api';
import { scrollHandler } from '~/utils';

export default {
	components: {
		ToolboxOne,
		ToolboxTwo,
		ToolboxThree,
		ProductTwo,
		ProductEight,
		Pagination,
	},
	props: {
		itemsPerRow: {
			type: Number,
			default: 3
		}
	},
	data: function () {
		return {
			products: null,
			perPage: this.$route.query.per_page ? this.$route.query.per_page : 12,
			page: 1,
			totalPage: 1,
			total: 0,
			gridClasses: {
				3: "cols-2 cols-sm-3",
				4: "cols-2 cols-sm-3 cols-md-4",
				5: "cols-2 cols-sm-3 cols-md-4 cols-xl-5",
				6: "cols-2 cols-sm-3 cols-md-4 cols-xl-6",
				7: "cols-2 cols-sm-3 cols-md-4 cols-lg-5 cols-xl-7",
				8: "cols-2 cols-sm-3 cols-md-4 cols-lg-5 cols-xl-8"
			},
			isFirst: true
		}
	},
	watch: {
		$route: function () {
			this.perPage = this.$route.query.per_page ? parseInt( this.$route.query.per_page ) : 12;

			if ( document.querySelector( '.shop-sidebar.closed' ) && this.$route.query.type !== 'list' ) {
				this.$nextTick( () => {
					document.querySelector( '.product-wrapper' ).classList.add( 'cols-md-4' );
				} )
			}

			this.getProducts();
		}
	},
	async fetch () {
		this.getProducts();
	},
	methods: {
		getProducts: function () {
			if ( !this.isFirst ) scrollHandler();
			this.isFirst = false;

			this.products = null;
			this.page = this.$route.query.page ? this.$route.query.page : 1;
			Api.get( `${ baseUrl }/category/${this.$route.query.category ? this.$route.query.category : 'all' }/products`,{
        params:{
          limit: this.perPage,
          page: this.page,
        }
      })
				.then( response => {
					this.products = response.data.result;
					this.total = response.data.paginate.total;
					this.totalPage = parseInt( this.total / this.perPage ) + ( this.total % this.perPage ? 1 : 0 );
				} )
				.catch( error => ( { error: JSON.stringify( error ) } ) );
		}
	}
}
</script>