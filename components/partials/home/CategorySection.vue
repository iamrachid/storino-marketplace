<template>
	<section class="categories container mt-10">
		<h2 class="title title-line title-underline border-1 mb-4">Top Categories of the Month</h2>

		<div class="row">
			<div class="col-xl-4 col-md-6 mb-4">
				<div
					class="category category-group-image appear-animate"
					data-animation-options="{
                                'name': 'fadeIn'
                            }"
					v-animate
				>
					<a href="javascript:;">
						<figure class="category-media">
							<img
								v-lazy="'./images/home/categories/1.png'"
								alt="category"
								width="190"
								height="169"
							/>
						</figure>
					</a>
					<div class="category-content">
						<h4 class="category-name">
							<nuxt-link :to="{ path: '/shop', query: { category: 'electronics-5' }}">Electronics</nuxt-link>
						</h4>
						<ul class="category-list">
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
						</ul>
					</div>
				</div>
			</div>
			<div class="col-xl-4 col-md-6 mb-4">
				<div
					class="category category-group-image appear-animate"
					data-animation-options="{
                                'name': 'fadeIn',
                                'delay': '.2s'
                            }"
					v-animate
				>
					<a href="javascript:;">
						<figure class="category-media">
							<img
								v-lazy="'./images/home/categories/2.png'"
								alt="category"
								width="190"
								height="169"
							/>
						</figure>
					</a>
					<div class="category-content">
						<h4 class="category-name">
							<nuxt-link :to="{ path: '/shop', query: { category: 'fashion-and-clothings' }}">Fashion &amp; Clothings</nuxt-link>
						</h4>
						<ul class="category-list">
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
						</ul>
					</div>
				</div>
			</div>
			<div class="col-xl-4 col-md-6 mb-4">
				<div
					class="category category-group-image appear-animate"
					data-animation-options="{
                                'name': 'fadeIn',
                                'delay': '.3s'
                            }"
					v-animate
				>
					<a href="javascript:;">
						<figure class="category-media">
							<img
								v-lazy="'./images/home/categories/3.png'"
								alt="category"
								width="190"
								height="169"
							/>
						</figure>
					</a>
					<div class="category-content">
						<h4 class="category-name">
							<nuxt-link :to="{ path: '/shop', query: { category: 'computers-1' }}">Computers</nuxt-link>
						</h4>
						<ul class="category-list">
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
						</ul>
					</div>
				</div>
			</div>
			<div class="col-xl-4 col-md-6 mb-4">
				<div
					class="category category-group-image appear-animate"
					data-animation-options="{
                                'name': 'fadeIn',
                                'delay': '.4s'
                            }"
					v-animate
				>
					<a href="javascript:;">
						<figure class="category-media">
							<img
								v-lazy="'./images/home/categories/4.png'"
								alt="category"
								width="190"
								height="169"
							/>
						</figure>
					</a>
					<div class="category-content">
						<h4 class="category-name">
							<nuxt-link :to="{ path: '/shop', query: { category: 'home-and-kitchen-4' }}">Home &amp; Kitchen</nuxt-link>
						</h4>
						<ul class="category-list">
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
						</ul>
					</div>
				</div>
			</div>
			<div class="col-xl-4 col-md-6 mb-4">
				<div
					class="category category-group-image appear-animate"
					data-animation-options="{
                                'name': 'fadeIn',
                                'delay': '.3s'
                            }"
					v-animate
				>
					<a href="javascript:;">
						<figure class="category-media">
							<img
								v-lazy="'./images/home/categories/5.png'"
								alt="category"
								width="190"
								height="169"
							/>
						</figure>
					</a>
					<div class="category-content">
						<h4 class="category-name">
							<nuxt-link :to="{ path: '/shop', query: { category: 'beauty-and-fragrance' }}">Beauty &amp; Fragrance</nuxt-link>
						</h4>
						<ul class="category-list">
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
						</ul>
					</div>
				</div>
			</div>
			<div class="col-xl-4 col-md-6 mb-4">
				<div
					class="category category-group-image appear-animate"
					data-animation-options="{
                                'name': 'fadeIn',
                                'delay': '.6s'
                            }"
					v-animate
				>
					<a href="javascript:;">
						<figure class="category-media">
							<img
								v-lazy="'./images/home/categories/6.png'"
								alt="category"
								width="190"
								height="169"
							/>
						</figure>
					</a>
					<div class="category-content">
						<h4 class="category-name">
							<nuxt-link :to="{ path: '/shop', query: { category: 'jewelry-and-watches' }}">Jewelry &amp; Watches</nuxt-link>
						</h4>
						<ul class="category-list">
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
					</div>
				</div>
			</div>
		</div>
	</section>
</template>