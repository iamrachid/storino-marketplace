<template>
	<div class="tab tab-nav-simple product-tabs">
		<element-tabs>
			<ul class="nav nav-tabs justify-content-center">
				<li class="nav-item">
					<a class="nav-link active" href="#product-tab-description">Description</a>
				</li>
			</ul>
		</element-tabs>

		<div class="tab-content">
			<div class="tab-pane active in" id="product-tab-description">
				<div class="row mt-6">
          <div v-html="product.html">
          </div>

          <div class="d-flex justify-content-around flex-wrap pb-3">
            <div class="icon-box icon-box-side icon-border pt-2 pb-2 mb-lg-4">
              <div class="icon-box-icon">
                <i class="d-icon-lock"></i>
              </div>
              <div class="icon-box-content">
                <h4 class="icon-box-title lh-1 pt-1 ls-s text-normal">2
                  year
                  warranty</h4>
                <p>Guarantee with no doubt</p>
              </div>
            </div>
            <div class="icon-box icon-box-side icon-border pt-2 pb-2 mb-lg-4">
              <div class="icon-box-icon">
                <i class="d-icon-truck"></i>
              </div>
              <div class="icon-box-content">
                <h4 class="icon-box-title lh-1 pt-1 ls-s text-normal">
                  Free shipping
                </h4>
                <p>On orders over $50.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
import ElementTabs from '~/components/elements/ElementTabs';

export default {
	components: {
		ElementTabs
	},
	props: {
		product: Object,
	},
};
</script>