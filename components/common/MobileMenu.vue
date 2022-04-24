<template>
	<div class="mobile-menu-wrapper">
		<div
			class="mobile-menu-overlay"
			@click="hideMobileMenu"
		>
		</div>

		<a
			class="mobile-menu-close"
			href="javascript:;"
			@click="hideMobileMenu"
		><i class="d-icon-times"></i></a>

		<div class="mobile-menu-container scrollable">

			<div class="mt-5">
					<ul class="nav nav-tabs nav-fill">
						<li class="nav-item">
							<p
								class="nav-link"
							>Categories</p>
						</li>
					</ul>

					<div class="text-white">
						<ul class="menu toggle-menu category-menu">
							<li class="submenu">
								<nuxt-link :to="{ path: '/shop', query: { category: 'electronics-5' }}">
									<i class="d-icon-camera1"></i>Electronics
									<span
										class="toggle-btn"
										@click="changeOpenState($event, 0)"
										:class="{expanded: openState[0], collapsed: !openState[0]}"
									></span>
								</nuxt-link>

								<vue-slide-toggle :open="openState[0]">
									<ul
										class="d-block pt-2 pb-2 text-white"
										style="background: #222529"
									>
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
								</vue-slide-toggle>
							</li>

							<li>
								<nuxt-link :to="{ path: '/shop', query: { category: 'backpacks-and-fashion-bags-2' }}"><i class="d-icon-officebag"></i>Backpacks &amp; Fashion Bags</nuxt-link>
							</li>

							<li class="submenu">
								<nuxt-link :to="{ path: '/shop', query: { category: 'fashion-and-clothings' }}">
									<i class="d-icon-t-shirt1"></i>Travel &amp; Clothings
									<span
										class="toggle-btn"
										@click="changeOpenState($event, 1)"
										:class="{expanded: openState[1], collapsed: !openState[1]}"
									></span>
								</nuxt-link>

								<vue-slide-toggle :open="openState[1]">
									<ul
										class="d-block pt-2 pb-2 text-white"
										style="background: #222529"
									>
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
								</vue-slide-toggle>
							</li>

							<li class="submenu">
								<nuxt-link :to="{ path: '/shop', query: { category: 'computers-1' }}"><i class="d-icon-desktop"></i>Computers
									<span
										class="toggle-btn"
										@click="changeOpenState($event, 2)"
										:class="{expanded: openState[2], collapsed: !openState[2]}"
									></span>
								</nuxt-link>

								<vue-slide-toggle :open="openState[2]">
									<ul
										class="d-block pt-2 pb-2 text-white"
										style="background: #222529"
									>
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
								</vue-slide-toggle>
							</li>

							<li class="submenu">
								<nuxt-link :to="{ path: '/shop', query: { category: 'beauty-and-fragrance' }}"><i class="d-icon-heart"></i>Beauty &amp; Fragrance
									<span
										class="toggle-btn"
										@click="changeOpenState($event, 3)"
										:class="{expanded: openState[3], collapsed: !openState[3]}"
									></span>
								</nuxt-link>

								<vue-slide-toggle :open="openState[3]">
									<ul
										class="d-block pt-2 pb-2 text-white"
										style="background: #222529"
									>
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
								</vue-slide-toggle>
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
								<nuxt-link :to="{ path: '/shop', query: { category: 'home-and-kitchen-4' }}"><i class="d-icon-cook"></i>Home &amp; Kitchen
									<span
										class="toggle-btn"
										@click="changeOpenState($event, 4)"
										:class="{expanded: openState[4], collapsed: !openState[4]}"
									></span>
								</nuxt-link>

								<vue-slide-toggle :open="openState[4]">
									<ul
										class="d-block pt-2 pb-2 text-white"
										style="background: #222529"
									>
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
								</vue-slide-toggle>
							</li>

							<li class="submenu">
								<nuxt-link :to="{ path: '/shop', query: { category: 'jewelry-and-watches' }}">
									<i class="d-icon-watch"></i>Jewelry &amp; Watches
									<span
										class="toggle-btn"
										@click="changeOpenState($event, 5)"
										:class="{expanded: openState[5], collapsed: !openState[5]}"
									></span>
								</nuxt-link>

								<vue-slide-toggle :open="openState[5]">
									<ul
										class="d-block pt-2 pb-2 text-white"
										style="background: #222529"
									>
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
								</vue-slide-toggle>
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
			</div>
		</div>
	</div>
</template>

<script>
import { VueSlideToggle } from 'vue-slide-toggle';

import ElementTabs from '~/components/elements/ElementTabs';

import { mainMenu } from '~/utils/data/menu';

export default {
	components: {
		VueSlideToggle,
		ElementTabs
	},
	data: function () {
		return {
			mainMenu: mainMenu,
			openState: new Array( 100 ).fill( false ),
			searchTerm: ''
		};
	},
	methods: {
		hideMobileMenu: function () {
			document.querySelector( 'body' ).classList.remove( 'mmenu-active' );
		},
		toggleState: function ( index ) {
			let temp = [ ...this.openState ];
			temp[ index ] = !temp[ index ];
			this.openState = temp;
		},
		searchProducts: function () {
			if ( this.searchTerm.length > 2 ) {
				this.$router.push( {
					path: '/shop',
					query: {
						search: this.searchTerm
					}
				} )

				this.searchTerm = '';
			}
		},
		changeOpenState: function ( e, index ) {
			e.preventDefault();
			this.openState = this.openState.map( ( item, i ) => { return i === index ? !item : item } );
		}
	}
};
</script>