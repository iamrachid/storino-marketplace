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

              <li class="submenu" v-for="(category,index) in categories" :key="category.slug">
                <nuxt-link :to="{ path: '/shop', query: { category: category.slug }}">
                  <i class="d-icon-officebag"></i>{{category.name}}
                  <span
                      v-if="category.children.length > 0"
                      class="toggle-btn"
                      @click="changeOpenState($event, index)"
                      :class="{expanded: openState[index], collapsed: !openState[index]}"
                  ></span>
                </nuxt-link>

                <vue-slide-toggle :open="openState[index]" v-if="category.children.length > 0">
                  <ul
                      class="d-block pt-2 pb-2 text-white"
                      style="background: grey"
                  >
                    <li v-for="child in category.children">
                      <nuxt-link :to="{ path: '/shop', query: { category: child.slug }}">{{ child.name }}</nuxt-link>
                    </li>
                  </ul>
                </vue-slide-toggle>
              </li>
						</ul>
					</div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueSlideToggle } from 'vue-slide-toggle';

import ElementTabs from '~/components/elements/ElementTabs';

import { mainMenu } from '~/utils/data/menu';
import axios from "axios";

export default {
	components: {
		VueSlideToggle,
		ElementTabs
	},
	data: function () {
		return {
			mainMenu: mainMenu,
			openState: new Array( 50 ).fill( false ),
      categories: [],
		};
	},
  async fetch() {
    const categories = await axios.get('http://localhost:3000/category?level=0');
    this.categories = categories.data.result;
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
		changeOpenState: function ( e, index ) {
			e.preventDefault();
			this.openState = this.openState.map( ( item, i ) => { return i === index ? !item : item } );
		}
	}
};
</script>