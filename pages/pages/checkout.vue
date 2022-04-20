<template>
	<main class="main checkout bt-lg-none">
		<div :class="`page-content pt-7 pb-10 ${ cartList.length > 0 ? 'mb-10' : 'mb-2'}`">
			<div class="step-by pr-4 pl-4">
				<h3 class="title title-simple title-step">
					<nuxt-link to="/pages/cart">1. Shopping Cart</nuxt-link>
				</h3>
				<h3 class="title title-simple title-step active"><a href="javascript:;">2. Checkout</a></h3>
				<h3 class="title title-simple title-step">
					<nuxt-link to="/pages/order">3. Order Complete</nuxt-link>
				</h3>
			</div>

			<div class="container mt-7">
				<template v-if="cartList.length > 0">
					<element-card
						class="card"
						:is-opened="false"
					>
						<template v-slot:header>
							<div class="alert alert-light alert-primary alert-icon mb-4 card-header">
								<i class='fas fa-exclamation-circle'></i>
								<span class='text-body'>Have a coupon?</span>
								<a
									href='javascript:;'
									class='text-primary'
								>Click here to enter your code</a>
							</div>
						</template>

						<div class="alert-body mb-4">
							<p>If you have a coupon code, please apply it below.</p>
							<form class="check-coupon-box d-flex">
								<input
									type="text"
									name="coupon_code"
									class="input-text form-control text-grey ls-m mr-4"
									id="coupon_code"
									aria-label="input coupon"
									placeholder="Coupon code"
									required
								/>
								<button
									type="submit"
									class="btn btn-dark btn-rounded btn-outline"
								>Apply Coupon</button>
							</form>
						</div>
					</element-card>

					<form @submit.prevent="formHandler"
						action="#"
						class="form"
					>
						<div class="row">
							<div class="col-lg-7 mb-6 mb-lg-0 pr-lg-4">
								<h3 class="title title-simple text-left text-uppercase">Billing Details</h3>

								<div class="row">
									<div class="col-xs-6">
										<label>First Name *</label>
										<input
											type="text"
											class="form-control"
											v-model="customer.firsname"
											aria-label="first name input"
											required
										/>
									</div>
									<div class="col-xs-6">
										<label>Last Name *</label>
										<input
											type="text"
											class="form-control"
											v-model="customer.lastname"
											aria-label="last name input"
											required
										/>
									</div>
								</div>
								<label>Address *</label>
								<input
									type="text"
									class="form-control"
                  v-model="shipping.address.address1"
									aria-label="street input"
									required
									placeholder="House number and street name"
								/>

								<div class="row">
									<div class="col-xs-6">
										<label>Town / City *</label>
										<input
											type="text"
											class="form-control"
                      v-model="shipping.address.city"
											aria-label="city input"
											required
										/>
									</div>
									<div class="col-xs-6">
                    <label>Country / Region *</label>

                    <div class="select-box">
                      <select
                        v-model="shipping.address.country"
                        class="form-control"
                        aria-label="country select"
                        name="country"
                        default-value="us"
                        @change="getProvinces()"
                      >
                        <option v-for="item in countries" :key="item._id" :value="item">{{item.name}}</option>
                      </select>
                    </div>
									</div>
								</div>

                <label>Province *</label>

                <div class="select-box">
                  <select
                    v-model="shipping.address.province"
                    class="form-control"
                    aria-label="province select"
                    name="province"
                  >
                    <option v-for="item in provinces" :key="item._id" :value="item">{{item.name}}</option>
                  </select>
                </div>
								<div class="row">
									<div class="col-xs-6">
										<label>ZIP *</label>
										<input
											type="text"
											class="form-control"
											name="zip"
											aria-label="input zip"
											required
										/>
									</div>
									<div class="col-xs-6">
										<label>Phone *</label>
										<input
											type="text"
											class="form-control"
                      v-model="customer.phone"
											aria-label="input phone"
											required
										/>
									</div>
								</div>

								<label>Email Address *</label>
								<input
									type="text"
									class="form-control"
                  v-model="shipping.email"
									aria-label="input email address"
									required
								/>
							</div>

							<aside
								class="col-lg-5 sticky-sidebar-wrapper"
								sticky-container
							>
								<div
									v-sticky="isSticky"
									sticky-offset="{top: 80, bottom: 50}"
								>
									<div class="summary pt-5">
										<h3 class="title title-simple text-left text-uppercase">Your Order</h3>
										<table class="order-table">
											<thead>
												<tr>
													<th>Product</th>
													<th></th>
												</tr>
											</thead>
											<tbody>
												<tr
													:key="'checkout-' + item.name"
													v-for="(item) in cartList"
												>
													<td class="product-name">{{ item.name }} <span class="product-quantity"> ×&nbsp; {{ item.qty }}</span></td>
													<td class="product-total text-body">${{ item.qty * item.price | priceFormat }}</td>
												</tr>

												<tr class="summary-subtotal">
													<td>
														<h4 class="summary-subtitle">Subtotal</h4>
													</td>
													<td class="summary-subtotal-price pb-0 pt-0">
														${{ totalPrice | priceFormat }}
													</td>
												</tr>

												<tr class="sumnary-shipping shipping-row-last">
													<td colSpan="2">
														<h4 class="summary-subtitle">Calculate Shipping</h4>
														<table>
                              <tr v-for="item in shippers" :key="item._id">
                                <td>
                                  <div class="custom-radio text-left">
                                    <input
                                      type="radio"
                                      :id="item._id"
                                      v-model="shipping.shipper"
                                      :value="item"
                                      class="custom-control-input"
                                      required
                                    />
                                    <label
                                      class="custom-control-label"
                                      :for="item._id"
                                    >{{ item.name}}</label>
  <!--                                  <span>{{item.price}}</span>-->
                                  </div>
                                </td>
                                <td>{{item.price | priceFormat}}</td>
                              </tr>
														</table>
													</td>
												</tr>
												<tr class="summary-total">
													<td class="pb-0">
														<h4 class="summary-subtitle">Total</h4>
													</td>
													<td class=" pt-0 pb-0">
														<p class="summary-total-price ls-s text-primary">${{ totalPrice | priceFormat }}</p>
													</td>
												</tr>
											</tbody>
										</table>

										<element-radio class="payment accordion radio-type">
											<h4 class="summary-subtitle ls-m pb-3">Payment Methods</h4>

											<div class="checkbox-group">
                        <table>
                          <tr v-for="item in methods" :key="item._id">
                            <td>
                              <div class="custom-radio text-left">
                                <input
                                  type="radio"
                                  :id="item._id"
                                  v-model="method"
                                  :value="item"
                                  class="custom-control-input"
                                  required
                                />
                                <label
                                  class="custom-control-label"
                                  :for="item._id"
                                >{{ item.name}}</label>
                                <!--                                  <span>{{item.price}}</span>-->
                              </div>
                            </td>
                          </tr>
                        </table>
											</div>
										</element-radio>

										<div class="form-checkbox mt-4 mb-5">
											<input
												type="checkbox"
												class="custom-checkbox"
												id="terms-condition"
												name="terms-condition"
											/>
											<label
												class="form-control-label"
												for="terms-condition"
											>
												I have read and agree to the website <a href="javascript:;">terms and conditions </a>*
											</label>
										</div>
										<button
											type="submit"
											class="btn btn-dark btn-rounded btn-order"
										>Place Order</button>
									</div>
								</div>
							</aside>
						</div>
					</form>
				</template>

				<template v-else>
					<div class="empty-cart text-center">
						<p>Your cart is currently empty.</p>
						<i class="cart-empty d-icon-bag"></i>
						<p class="return-to-shop mb-0">
							<nuxt-link
								class="button wc-backward btn btn-dark btn-md"
								to="/shop"
							>
								Return to shop
							</nuxt-link>
						</p>
					</div>
				</template>
			</div>
		</div>
	</main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Sticky from 'vue-sticky-directive';

import ElementAccordion from '~/components/elements/ElementAccordion';
import ElementRadio from '~/components/elements/ElementRadio';
import ElementCard from '~/components/elements/ElementCard';
import Api, { baseUrl } from "~/api/api";

export default {
	components: {
		ElementAccordion,
		ElementRadio,
		ElementCard
	},
	directives: {
		Sticky
	},
	data: function () {
		return {
      countries: [],
      provinces: [],
      shippers:[
        {
          _id: "6257ec734c52160fdc5d7952",
          name: "delivery guy 1",
          price: 0
        },
        {
          _id: "6257ec8b4c52160fdc5d796f",
          name: "Delivery guy 2",
          price: 0
        }
      ],
      methods: [
        {
          _id: "5feb408a2ef4130539efb9e0",
          name: "CashOnDelivery"
        },
        {
          _id: "5feb408a2ef4130539efb9e1",
          name: "Paypal"
        }
      ],

      zone: {
        _id: "6257ecca4c52160fdc5d79bb",
        name: "Agadir",
      },
			isSticky: false,
      customer: {
        firsname: '',
        lastname: '',
        email: '',
      },
      shipping: {
        shipper:{},
        zone: {},
        price: 0,
        ipAddress: '',
        address: {
          address1: '',
          country: {},
          province: {},
          city: {},
          phone: '',
        },
      },
      method: {
        _id: "5feb408a2ef4130539efb9e0",
        name: "CashOnDelivery"
      },
      watch:{
        shipping(newValue){
            // this.getProvinces(newValue._id)
          console.log('Heeeeeeere');
        }
      }
    };
	},
	computed: {
		...mapGetters( 'cart', [ 'cartList', 'totalPrice' ] ),
    details(){
      const details = [];
      this.cartList.forEach(item => {
        const detail = {
          product: {
            _id: item._id
          },
          quantity: item.quantity
        };
        details.push(detail);
      })
      return details;
    }
	},
	mounted: function () {
		this.resizeHandler();
    if(process.server)
      window.addEventListener( 'resize', this.resizeHandler, {
        passive: true
      } );
    // this.getCountries();
	},
	destroyed: function () {
    if(process.server)
  		window.removeEventListener( 'resize', this.resizeHandler );
	},

	methods: {
    ...mapActions('order', ['setOrder']),
		resizeHandler: function () {
			this.isSticky = window.innerWidth > 991 ? true : false;
		},
    async formHandler(){
      const data = {
        customer:this.customer,
        shipping: this.shipping,
        details: this.details,
        method: this.method
      };
      this.setOrder(data);
      console.log(data);
      // await Api.post(`${baseUrl}/orders/create`, data);
      // this.$router.replace('order')
    },
    async getCountries(){
      const response = await Api.get(`${ baseUrl }/countries`);
      this.countries = response.data.results;
    },

    async getProvinces(){
      console.log('Hahahah');
      const response = await Api.get(`${ baseUrl }/provinces?country=${this.shipping.address.country._id}`);
      this.provinces = response.data.results;
    }
	},
  async fetch(){
      await this.getCountries();
  }
};
</script>