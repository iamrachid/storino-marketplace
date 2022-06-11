<template>
	<div class="container intro-section">
		<div class="row">
			<div class="col-xl-9 col-lg-9 col-md-8 mb-4 mb-lg-0">
				<swiper-carousel v-if="slides.length" class="swiper-theme swiper-dot-inner swiper-dot-white intro-slider animation-slider"
					:options="introSlider" v-animate ref="introSlider">
					<div v-for="(item, index) in slides" :key="index" class="intro-slide1 banner banner-fixed swiper-slide" style="background-color: #e8e8ea">
						<figure>
							<img
								:src="item.image"
								alt="banner"
								width="580"
								height="460"/>
						</figure>
						<div class="banner-content x-50 y-50 text-center d-flex flex-column align-items-center">

							<h4
								class="banner-subtitle text-body font-weight-normal slide-animate"
								data-animation-options="{'name': 'fadeInUp', 'duration': '1.5s'}">
                {{item.subtitle}}
              </h4>

							<h3 class="banner-title slide-animate"
								data-animation-options="{'name': 'fadeInUp', 'duration': '1.5s','delay': '.3s'}">
								{{item.title}}
              </h3>

							<p class="font-weight-semi-bold text-grey slide-animate"
								data-animation-options="{'name': 'fadeInLeftShorter', 'duration': '1.2s','delay': '.3s'}">
								{{item.extraSub}}
              </p>

							<div class="banner-price-info ls-s text-uppercase text-primary font-weight-bold flex-1 slide-animate"
								data-animation-options="{'name': 'fadeInRightShorter', 'duration': '1.2s','delay': '.8s'}">
								{{item.discount}}
              </div>

							<nuxt-link to="/shop"
								class="btn btn-outline btn-dark btn-rounded slide-animate"
								data-animation-options="{'name': 'fadeIn', 'duration': '1.2s','delay': '1s'}">
                {{item.cta}}
              </nuxt-link>
						</div>
					</div>
				</swiper-carousel>
			</div>

			<div class="col-xl-3 col-lg-3 col-md-4 mb-4">
				<div class="intro-banner banner banner-fixed overlay-dark">
					<figure>
						<img
							class="x-50"
							:src="banner.image"
							alt="product"
							width="346"
							height="193"
						/>
					</figure>

					<div class="banner-content x-50 y-50 text-center d-flex flex-column align-items-center">

						<p
							class="text-white font-primary text-uppercase flex-1 lh-1 appear-animate"
							v-animate data-animation-options="{ 'name': 'maskUp' }">
              Through <br/>
              <span class="d-inline-block mt-1 ls-normal">{{banner.subtitle}}</span>
						</p>

						<h4
							class="banner-subtitle mb-1 text-uppercase ls-normal font-weight-normal appear-animate"
							v-animate
							data-animation-options="{ 'name': 'fadeInDownShorter', 'delay': '.3s' }">
              {{banner.discount}}
            </h4>

						<h3 class="banner-title ls-md font-weight-bold appear-animate"
							v-animate data-animation-options="{ 'name': 'fadeInDownShorter', 'delay': '.2s' }">
              {{ banner.title }}
            </h3>

						<nuxt-link to="/shop" class="btn btn-dark btn-md btn-rounded appear-animate"
							v-animate data-animation-options="{ 'name': 'fadeInDownShorter' }">
              {{banner.cta}}
            </nuxt-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SwiperCarousel from '~/components/elements/SwiperCarousel';

import { introSlider } from '~/utils/data/carousel';
import Api, { baseUrl } from "~/api/api";

export default {
	components: {
		SwiperCarousel
	},
	data: function () {
		return {
			introSlider: introSlider,
      banner: {},
      slides: []
		};
	},
  methods: {
    async getBanner(){
      const url = baseUrl + '/config/banner';
      this.banner = (await Api.get(url)).data.result.banner;
    },
    async getSlides(){
      const url = baseUrl + '/config/slides';
      this.slides = (await Api.get(url)).data.results.slides;
    }
  },
  async fetch() {
    await this.getBanner();
    await this.getSlides();
  }
};
</script>