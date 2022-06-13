<template>
	<main class="main home mt-lg-4">
		<div class="page-content">
			<intro-section></intro-section>

			<category-section />

			<product-collection></product-collection>

			<service-section></service-section>
    </div>
	</main>
</template>

<script>
import IntroSection from '~/components/partials/home/IntroSection';
import CategorySection from '~/components/partials/home/CategorySection';
import ProductCollection from '~/components/partials/home/ProductCollection';
import ServiceSection from '~/components/partials/home/ServiceSection';


import { getCookie } from '~/utils';

export default {
	components: {
		IntroSection,
		CategorySection,
		ProductCollection,
		ServiceSection,
	},
	mounted: function () {
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