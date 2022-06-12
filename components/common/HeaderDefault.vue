<template>
	<header class="header">

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
								<i class="d-icon-truck"></i>
							</div>
							<div class="icon-box-content d-lg-show">
								<p>Track your order now</p>
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
				<div class="dropdown category-dropdown has-border" :class="$route.path === '/' ? 'fixed' : ''">
          <a href="#" @click.prevent="" class="text-white font-weight-semi-bold category-toggle">
            <i class="d-icon-bars2"></i>
            <span>Shop By Categories</span>
          </a>

					<div class="dropdown-box">
						<ul class="menu vertical-menu category-menu">
							<li><a href="#" @click.prevent="" class="menu-title">Browse Our Categories</a></li>
              <sub-menu v-for="category in categories" :key="category.slug" :category="category"/>
						</ul>
					</div>
				</div>

				<main-menu class="ml-4"></main-menu>

				<div class="d-flex align-items-center ml-auto">
					<div class="dropdown currency-dropdown mr-4 ls-normal">
						<a href="#" @click.prevent="">USD</a>
						<ul class="dropdown-box">
							<li><a href="#">USD</a></li>
							<li><a href="#">EUR</a></li>
						</ul>
					</div>

					<div class="dropdown language-dropdown ls-normal">
						<a href="#">ENG</a>
						<ul class="dropdown-box">
							<li>
								<a href="#">ENG</a>
							</li>
							<li>
								<a href="#">FRH</a>
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
import SubMenu from "~/components/common/partials/SubMenu";
import {mapGetters} from "vuex";
import {baseSlider17} from "~/utils/data/carousel";
import axios from "axios";

export default {
	components: {
		SearchBox,
		CartMenu,
		MainMenu,
		HeaderLogin,
		StickyWrapper,
    SubMenu
	},
  data: function () {
    return {
      categories: null,
    };
  },
  async fetch() {
    const categories = await axios.get('http://localhost:3000/category?level=0');
    this.categories = categories.data.result;
  },
	methods: {
		showMobileMenu: function () {
			document.querySelector( 'body' ).classList.add( 'mmenu-active' );
		},
	}
};
</script>