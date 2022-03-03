<template>
	<main class="main home mt-lg-4">
		<div class="page-content">
			<intro-section></intro-section>

			<category-section></category-section>

			<banner-section></banner-section>

			<product-collection></product-collection>

			<service-section></service-section>

			<blog-section :posts="posts"></blog-section>
		</div>
	</main>
</template>

<script>
import IntroSection from '~/components/partials/home/IntroSection';
import CategorySection from '~/components/partials/home/CategorySection';
import BannerSection from '~/components/partials/home/BannerSection';
import ProductCollection from '~/components/partials/home/ProductCollection';
import ServiceSection from '~/components/partials/home/ServiceSection';
import BlogSection from '~/components/partials/home/BlogSection';

import Api, { baseUrl, currentDemo } from '~/api';
import { getCookie } from '~/utils';

export default {
	components: {
		IntroSection,
		CategorySection,
		BannerSection,
		ProductCollection,
		ServiceSection,
		BlogSection
	},
	data: function () {
		return {
			bestSelling: null,
			featured: null,
			latest: null,
			topRated: null,
			posts: null,
			onSale: null,
			timer: null
		};
	},
	mounted: function () {
		Api.get( `${ baseUrl }/demo-${ currentDemo }`, {
			params: {
				limit: 4,
				is_post: true
			}
		} )
			.then( response => {
				this.posts = response.data.posts;
			} )
			.catch( error => ( { error: JSON.stringify( error ) } ) );


		this.timer = setTimeout( () => {
			if ( this.$route.path === '/' && getCookie( 'newsletter' ) !== 'false' ) {
				this.$modal.show(
					() => import( '~/components/elements/modal/NewsletterModal' ),
					null,
					{
						width: '720',
						height: 'auto',
						adaptive: true,
						class: 'newsletter-modal'
					}
				);
			}
		}, 10000 );
	},
	destroyed: function () {
		if ( this.timer ) clearTimeout( this.timer );
	}
};
</script>