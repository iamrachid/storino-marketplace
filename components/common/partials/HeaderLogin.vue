<template>
	<li><a
			class="register-link"
			href="javascript:;"
			title="header login"
			@click="openLoginModal(1)"
			data-toggle="login-modal"
		>login</a>
	</li>
</template>

<script>
export default {
	methods: {
		openLoginModal: function ( index = 1 ) {
			this.$modal.show(
				() => import( '~/components/elements/modal/LoginModal' ),
				{ activeIndex: index },
				{ width: '490', height: 'auto', adaptive: true }
			);
		}
	}
};
</script>