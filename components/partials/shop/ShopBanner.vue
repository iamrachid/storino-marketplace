<template>
	<div
		class="page-header"
		:style="{ 'background-image': 'url(./images/home/shop-banner.jpg)', 'background-color': '#dce0e3'}"
	>
		<h1 class="page-title text-dark">Riode Shop</h1>
		<ul class="breadcrumb">
			<li>
				<nuxt-link
					to="/"
					title="link to home"
				><i class="d-icon-home text-dark"></i></nuxt-link>
			</li>
			<li class="delimiter text-dark">/</li>
			<li class="text-dark">Riode Shop</li>
		</ul>
	</div>
</template>