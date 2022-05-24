<template>
  <div
    class="shop-banner banner"
    :style="{backgroundImage: 'url('+ banner.img + ')', backgroundColor: '#dce0e3'}"
  >
    <div class="banner-content">
      <h4 class="banner-subtitle d-inline-block mb-2 text-secondary text-uppercase ls-normal bg-dark">
        {{banner.subtitle}}
      </h4>
      <h1 class="banner-title font-weight-bold ls-normal text-uppercase">{{banner.title}}</h1>
      <nuxt-link
        to="/shop"
        class="btn btn-outline btn-dark btn-rounded"
      >{{banner.cta}}
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShopBannerTwo",
  props: {
    banner: {}
  }
};
</script>