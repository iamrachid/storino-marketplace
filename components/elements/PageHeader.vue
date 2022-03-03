<template>
	<div
		class="page-header"
		:style="{ 'background-image': 'url(./images/home/shop-banner.jpg)', 'background-color': '#3C63A4'}"
	>
		<h3 class="page-subtitle text-dark">{{ subTitle }}</h3>
		<h1 class="page-title text-dark">{{ title }}</h1>
		<ul class="breadcrumb">
			<li>
				<nuxt-link
					to="/"
					title="link to home"
				><i class="d-icon-home text-dark"></i></nuxt-link>
			</li>
			<li class="delimiter text-dark">/</li>
			<li v-if="parentUrl">
				<nuxt-link
					:to="parentUrl"
					class="text-dark"
				>{{ subTitle }} </nuxt-link>
			</li>
			<li class="delimiter text-dark">/</li>
			<li class="text-dark">{{ title }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		subTitle: String,
		parentUrl: String
	}
};
</script>