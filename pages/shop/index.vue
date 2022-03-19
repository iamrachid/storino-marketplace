<template>
	<main class="main skeleton-body bt-lg-none">
		<div class="page-content mb-10 pb-2">
			<div class="container">
				<ul class="breadcrumb breadcrumb-sm">
					<li>
						<nuxt-link to="/"><i class="d-icon-home"></i></nuxt-link>
					</li>
					<li>Shop</li>
				</ul>

				<div class="row main-content-wrap gutter-lg">
					<sidebar-filter-one :showFilterButton="false" class="col-xl-3 col-lg-4" />

					<div class="col-lg-8 col-xl-9 main-content">
						<product-list-one></product-list-one>
					</div>

				</div>
			</div>
		</div>
	</main>
</template>

<script>
import ProductListOne from "~/components/partials/shop/product-list/ProductListOne";
import SidebarFilterOne from "~/components/partials/shop/sidebar/SidebarFilterOne";
import ShopBannerTwo from "~/components/shop/ShopBannerTwo";

export default {
	components: {
    ShopBannerTwo,
		SidebarFilterOne,
		ProductListOne
	},
  data(){
    return {
      banner: {
        img: './images/home/shop-banner.jpg',
        cta: 'Shop Now',
        title: '20% Off Suede Shoes',
        subtitle: 'Through thursday'

      }
    }
  }
};
</script>