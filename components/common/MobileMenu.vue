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
			<form
				action="#"
				class="input-wrapper"
				@submit.prevent="searchProducts"
			>
				<input
					type="text"
					class="form-control"
					name="search"
					autocomplete="off"
					placeholder="Search your keyword..."
					v-model="searchTerm"
					required
				/>
				<button
					class="btn btn-search"
					type="submit"
				>
					<i class="d-icon-search"></i>
				</button>
			</form>

			<div class="tab tab-nav-simple tab-nav-boxed form-tab mt-5">
				<element-tabs>
					<ul class="nav nav-tabs nav-fill">
						<li class="nav-item">
							<a
								class="nav-link active"
								href="#mobile-menu"
							>Menu</a>
						</li>
						<li class="nav-item">
							<a
								class="nav-link"
								href="#mobile-categories"
							>Categories</a>
						</li>
					</ul>
				</element-tabs>

				<div class="tab-content">
					<div
						class="tab-pane active"
						id="mobile-menu"
					>
						<ul class="mobile-menu mmenu-anim">
							<li>
								<nuxt-link to="/">Home</nuxt-link>
							</li>

							<li :class="{show: openState[0]}">
								<nuxt-link to="/shop">Categories
									<span
										class="toggle-btn"
										@click.prevent="toggleState(0)"
									></span></nuxt-link>

								<vue-slide-toggle :open="openState[0]">
									<ul>
										<li :class="{show: openState[1]}">
											<a href="javascript:;">Variations 1
												<span
													class="toggle-btn"
													@click.prevent="toggleState(1)"
												></span>
											</a>

											<vue-slide-toggle :open="openState[1]">
												<ul>
													<li
														:key="item.url"
														v-for="item in mainMenu.shop.variation1"
													>
														<nuxt-link :to="item.url">
															{{ item.title }}
															<span
																class="tip tip-hot"
																v-if="item.hot"
															>Hot</span>
														</nuxt-link>
													</li>
												</ul>
											</vue-slide-toggle>
										</li>

										<li :class="{show: openState[2]}">
											<a href="javascript:;">Variations 2
												<span
													class="toggle-btn"
													@click.prevent="toggleState(2)"
												></span>
											</a>

											<vue-slide-toggle :open="openState[2]">
												<ul>
													<li
														:key="item.url"
														v-for="item in mainMenu.shop.variation2"
													>
														<nuxt-link :to="item.url">
															{{ item.title }}
															<span
																class="tip tip-new"
																v-if="item.new"
															>New</span>
														</nuxt-link>
													</li>
												</ul>
											</vue-slide-toggle>
										</li>
									</ul>
								</vue-slide-toggle>
							</li>

							<li :class="{show: openState[3]}">
								<nuxt-link to="/product/default/apple-laptop-1">Products
									<span
										class="toggle-btn"
										@click.prevent="toggleState(3)"
									></span>
								</nuxt-link>

								<vue-slide-toggle :open="openState[3]">
									<ul>
										<li :class="{show: openState[4]}">
											<a href="javascript:;">Product Pages
												<span
													class="toggle-btn"
													@click.prevent="toggleState(4)"
												></span>
											</a>

											<vue-slide-toggle :open="openState[4]">
												<ul>
													<li
														:key="item.url + index"
														v-for="(item, index) in mainMenu.product.pages"
													>
														<nuxt-link :to="item.url">
															{{ item.title }}
															<span
																class="tip tip-hot"
																v-if="item.hot"
															>Hot</span>
														</nuxt-link>
													</li>
												</ul>
											</vue-slide-toggle>
										</li>
									</ul>
								</vue-slide-toggle>

								<vue-slide-toggle :open="openState[3]">
									<ul>
										<li :class="{show: openState[5]}">
											<a href="javascript:;">Product Layouts
												<span
													class="toggle-btn"
													@click.prevent="toggleState(5)"
												></span>
											</a>

											<vue-slide-toggle :open="openState[5]">
												<ul>
													<li
														:key="item.url + index"
														v-for="(item, index) in mainMenu.product.layout"
													>
														<nuxt-link :to="item.url">
															{{ item.title }}
															<span
																class="tip tip-new"
																v-if="item.new"
															>New</span>
														</nuxt-link>
													</li>
												</ul>
											</vue-slide-toggle>
										</li>
									</ul>
								</vue-slide-toggle>
							</li>

							<li :class="{show: openState[6]}">
								<a href="javascript:;">Pages
									<span
										class="toggle-btn"
										@click.prevent="toggleState(6)"
									></span>
								</a>

								<vue-slide-toggle :open="openState[6]">
									<ul>
										<li
											v-for="item in mainMenu.other"
											:key="item.url"
										>
											<nuxt-link :to="item.url">{{ item.title }}</nuxt-link>

											<ul v-if="item.subPages">
												<li
													v-for="subItem in item.subPages"
													:key="subItem.title"
												>
													<nuxt-link :to="subItem.url">{{ subItem.title }}</nuxt-link>
												</li>
											</ul>
										</li>
									</ul>
								</vue-slide-toggle>
							</li>

							<li :class="{show: openState[11]}">
								<a href="javascript:;">Elements
									<span
										class="toggle-btn"
										@click.prevent="toggleState(11)"
									></span>
								</a>

								<vue-slide-toggle :open="openState[11]">
									<ul>
										<li
											v-for="item in mainMenu.element"
											:key="item.url"
										>
											<nuxt-link :to="item.url">{{ item.title }}</nuxt-link>

											<ul v-if="item.subPages">
												<li
													v-for="subItem in item.subPages"
													:key="subItem.title"
												>
													<nuxt-link :to="subItem.url">{{ subItem.title }}</nuxt-link>
												</li>
											</ul>
										</li>
									</ul>
								</vue-slide-toggle>
							</li>

							<li><a
									rel="noopener"
									href="https://d-themes.com/buynow/riodevue"
									target="_blank"
								>Buy Riode!</a></li>
						</ul>
					</div>

					<div
						class="tab-pane text-white"
						id="mobile-categories"
					>
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