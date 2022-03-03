<template>
	<header class="header">
		<div class="header-top">
			<div class="container">
				<div class="header-left">
					<p class="welcome-msg pb-2">Welcome to Riode store message or remove it!</p>
				</div>
				<div class="header-right">
					<div class="dropdown dropdown-expanded">
						<a href="javascript:;">Links</a>
						<ul class="dropdown-box">
							<li>
								<nuxt-link to="/pages/about-us">About</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/blog/classic">Blog</nuxt-link>
							</li>
							<li>
								<nuxt-link to="/pages/faqs">FAQ</nuxt-link>
							</li>
							<li><a to="javascript:;">Newsletter</a></li>
							<li>
								<nuxt-link to="/pages/contact-us">Contact</nuxt-link>
							</li>
							<header-login></header-login>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<sticky-wrapper>
			<div class="header-middle sticky-header fix-top sticky-content">
				<div class="container">
					<div class="header-left">
						<a
							href="javascript:;"
							class="mobile-menu-toggle"
							@click="showMobileMenu"
						>
							<i class="d-icon-bars2"></i>
						</a>
						<nuxt-link
							to="/"
							class="logo"
						>
							<img
								src="~/static/images/home/logo.png"
								alt="logo"
								width="154"
								height="43"
							/>
						</nuxt-link>

						<search-box></search-box>
					</div>

					<div class="header-right">
						<a
							href="tel:#"
							class="icon-box icon-box-side"
						>
							<div class="icon-box-icon">
								<i class="d-icon-phone"></i>
							</div>
							<div class="icon-box-content d-lg-show">
								<h4 class="icon-box-title">Call Us Now:</h4>
								<p>0(800) 123-456</p>
							</div>
						</a>

						<span class="divider"></span>
						<nuxt-link
							to="/pages/wishlist"
							title="header-wishlist"
							class="wishlist"
						>
							<i class="d-icon-heart"></i>
						</nuxt-link>
						<span class="divider"></span>

						<cart-menu></cart-menu>
					</div>
				</div>
			</div>
		</sticky-wrapper>

		<div class="header-bottom has-dropdown pb-0">
			<div class="container d-flex align-items-center">
				<div
					class="dropdown category-dropdown has-border"
					:class="$route.path === '/' ? 'fixed' : ''"
				>
					<a
						href="javascript:;"
						class="text-white font-weight-semi-bold category-toggle"
					><i class="d-icon-bars2"></i><span>Shop By Categories</span></a>

					<div class="dropdown-box">
						<ul class="menu vertical-menu category-menu">
							<li><a
									href="javascript:;"
									class="menu-title"
								>Browse Our Categories</a></li>

							<li class="submenu">
								<nuxt-link :to="{ path: '/shop', query: { category: 'electronics-5' }}"><i class="d-icon-camera1"></i>Electronics</nuxt-link>
								<ul>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'air-conditioners' }}">Air Conditioners</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'machines-1' }}">Machines</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'musical-instrument-1' }}">Musical Instrument</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'office-electronics' }}">Office Electronics</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'televisions' }}">Televisions</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'video-recoders' }}">Video Recorders</nuxt-link>
									</li>
								</ul>
							</li>
							<li>
								<nuxt-link :to="{ path: '/shop', query: { category: 'backpacks-and-fashion-bags-2' }}"><i class="d-icon-officebag"></i>Backpacks &amp; Fashion Bags</nuxt-link>
							</li>
							<li class="submenu">
								<nuxt-link :to="{ path: '/shop', query: { category: 'fashion-and-clothings' }}">
									<i
										class="d-icon-t-shirt1"
										style="font-size: 22px; margin-right: .7rem"
									></i>Travel &amp; Clothings
								</nuxt-link>
								<ul>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'bikinies' }}">Bikinies</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'casual-dresses' }}">Casual Dresses</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'hair-accessories-and-hats' }}">Hair Accessories &amp; Hats</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'jackets-1' }}">Jackets</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'jumpsuits-and-t-shirts' }}">Jumpsuits &amp; T-Shirts</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'fashion-new-arrivals' }}">New Arrivals</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'summer-dresses' }}">Summer Dresses</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'sunglasses' }}">Sunglasses</nuxt-link>
									</li>
								</ul>
							</li>
							<li class="submenu">
								<nuxt-link :to="{ path: '/shop', query: { category: 'computers-1' }}"><i class="d-icon-desktop"></i>Computers</nuxt-link>
								<ul>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'desktop-pcs' }}">Desktop PCs</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'laptops-2' }}">Laptops</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'computer-new-arrivals' }}">New Arrivals</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'pc-components' }}">PC Components</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'pc-gaming' }}">PC Gaming</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'storage-and-memory' }}">Storage & Memory</nuxt-link>
									</li>
								</ul>
							</li>
							<li class="submenu">
								<nuxt-link :to="{ path: '/shop', query: { category: 'beauty-and-fragrance' }}"><i class="d-icon-heart"></i>Beauty &amp; Fragrance</nuxt-link>

								<ul>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'hair-care' }}">Hair Care</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'makeup' }}">Makeup</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'beauty-new-arrivals' }}">New Arrivals</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'perfumes' }}">Perfumes</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'skin-care' }}">Skin Care</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'tools-and-equipments' }}">Tools &amp; Equipments</nuxt-link>
									</li>
								</ul>
							</li>
							<li>
								<nuxt-link :to="{ path: '/shop', query: { category: 'headgears' }}">
									<i
										class="d-icon-hat"
										style="font-size: 22px; margin-right: .8rem"
									></i>Headgears
								</nuxt-link>
							</li>
							<li class="submenu">
								<nuxt-link :to="{ path: '/shop', query: { category: 'home-and-kitchen-4' }}"><i class="d-icon-cook"></i>Home &amp; Kitchen</nuxt-link>
								<ul>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'cookwaves' }}">Cookwaves</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'decor' }}">Decor</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'furnitures' }}">Furniture</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'garden-tools' }}">Garden Tools</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'home-new-arrivals' }}">New Arrivals</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'utensil-and-gadgets' }}">Utensil &amp; Gadgets</nuxt-link>
									</li>
								</ul>
							</li>
							<li class="submenu">
								<nuxt-link :to="{ path: '/shop', query: { category: 'jewelry-and-watches' }}">
									<i class="d-icon-watch"></i>Jewelry &amp; Watches
								</nuxt-link>
								<ul>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'accessories-7' }}">Accessories</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'bracelets' }}">Bracelets</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'necklace' }}">Necklace</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'pendant' }}">Pendant</nuxt-link>
									</li>
									<li>
										<nuxt-link :to="{ path: '/shop', query: { category: 'watch-1' }}">Watch</nuxt-link>
									</li>
								</ul>
							</li>
							<li>
								<nuxt-link :to="{ path: '/shop', query: { category: 'shoes-4' }}">
									<i
										class="d-icon-shoes"
										style="font-size: 2.2rem; margin-right: .8rem"
									></i>Shoes
								</nuxt-link>
							</li>
						</ul>
					</div>
				</div>

				<main-menu class="ml-4"></main-menu>

				<div class="d-flex align-items-center ml-auto">
					<div class="dropdown currency-dropdown mr-4 ls-normal">
						<a href="javascript:;">USD</a>
						<ul class="dropdown-box">
							<li><a href="javascript:;">USD</a></li>
							<li><a href="javascript:;">EUR</a></li>
						</ul>
					</div>

					<div class="dropdown language-dropdown ls-normal">
						<a href="javascript:;">ENG</a>
						<ul class="dropdown-box">
							<li>
								<a href="javascript:;">ENG</a>
							</li>
							<li>
								<a href="javascript:;">FRH</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import SearchBox from '~/components/common/partials/SearchBox';
import CartMenu from '~/components/common/partials/CartMenu';
import MainMenu from '~/components/common/partials/MainMenu';
import HeaderLogin from '~/components/common/partials/HeaderLogin';
import StickyWrapper from '~/components/elements/StickyWrapper';

export default {
	components: {
		SearchBox,
		CartMenu,
		MainMenu,
		HeaderLogin,
		StickyWrapper
	},
	methods: {
		showMobileMenu: function () {
			document.querySelector( 'body' ).classList.add( 'mmenu-active' );
		}
	}
};
</script>