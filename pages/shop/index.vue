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
					<sidebar-filter-one
						:showFilterButton="false"
						class="col-xl-3 col-lg-4"
					></sidebar-filter-one>

					<div class="col-lg-8 col-xl-9 main-content">
						<div
							class="shop-banner banner"
							style="background-image: url(./images/home/shop-banner.jpg); background-color: #dce0e3;"
						>
							<div class="banner-content">
								<h4 class="banner-subtitle d-inline-block mb-2 text-secondary text-uppercase ls-normal bg-dark">
									Through thursday</h4>
								<h1 class="banner-title font-weight-bold ls-normal text-uppercase">20% Off Suede Shoes</h1>
								<nuxt-link
									to="/shop"
									class="btn btn-outline btn-dark btn-rounded"
								>Shop now</nuxt-link>
							</div>
						</div>

						<product-list-one></product-list-one>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import ShopBanner from '~/components/partials/shop/ShopBanner';
import ProductListOne from '~/components/partials/shop/product-list/ProductListOne';
import SidebarFilterOne from '~/components/partials/shop/sidebar/SidebarFilterOne';

export default {
	components: {
		ShopBanner,
		SidebarFilterOne,
		ProductListOne
	}
};
</script>