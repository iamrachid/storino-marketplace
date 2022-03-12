<template>
  <div class="product-wrapper row gutter-no mt-10 pt-2 appear-animate" v-animate>
    <div class="row gutter-no products-banner">
      <div class="col-12 col-xs-6 mb-0">
        <div class="category-filters d-flex flex-column">

          <h3 class="category-title font-weight-bold appear-animate" v-animate data-animation-options="{ 'name': 'fadeInUpShorter' }" >
            {{ category.name }}
          </h3>

          <ul class="category-list appear-animate" v-animate data-animation-options="{ 'name': 'fadeInUpShorter', 'delay': '.3s' }">
            <li v-for="item in category.children" :key="'filter-' + item.slug">
              <a href="#" @click.prevent="getProductHandler(item.slug, 1)">{{ item.name }}</a>
            </li>
          </ul>

          <nuxt-link to="/shop" class="btn btn-link btn-underline font-primary appear-animate mt-3"
              v-animate data-animation-options="{ 'name': 'fadeInUpShorter', 'delay': '.3s' }" >
            View all products<i class="d-icon-arrow-right"></i>
          </nuxt-link>

        </div>
      </div>

      <div class="banner col-12 col-xs-6 mb-0" style="background-image: url(/images/home/banner/3.jpg); background-color: #ebebeb;">

        <div class="banner-content appear-animate" v-animate data-animation-options="{ 'name': 'fadeInUpShorter', 'delay': '.4s'}" >
          <h4 class="banner-subtitle mb-2 ls-s font-weight-normal">
            Featured
          </h4>
          <h3 class="banner-title ls-s">
            Fashion Design<br />
            <span class="d-inline-block font-weight-normal">Collection</span>
          </h3>
          <nuxt-link to="/shop" class="btn btn-dark btn-md btn-rounded">shop now</nuxt-link>
        </div>

      </div>
    </div>

    <div class="overflow-hidden products-box">
      <div class="row gutter-no line-grid">

        <template v-if="!products">
          <div class="col-md-4 col-6 mb-0" v-for="item in [1, 2, 3, 4, 5, 6]" :key="`product-${item}`">
            <div class="product-loading-overlay"></div>
          </div>
        </template>

        <template v-else>
          <div class="col-md-4 col-6 mb-0" v-for="item in products" :key="`product-1-${item.slug}`">
            <product-two class="text-center" :isCat="false" :product="item" />
          </div>
        </template>

      </div>
    </div>
  </div>
</template>

<script>
import ProductTwo from '~/components/elements/product/ProductTwo';
import Api, {baseUrl, currentDemo} from "~/api";

export default {
  name: "ProductCollection",
  components: {
    ProductTwo,
  },
  data() {
    return {
      category: {
        "name": "Fashion & Clothing",
        "slug": "fashion-and-clothings",
        "children": [
          {
            "name": "Bikinies",
            "slug": "bikinies"
          },
          {
            "name": "Casual Dresses",
            "slug": "casual-dresses"
          },
          {
            "name": "Hair Accessories & Hats",
            "slug": "hair-accessories-and-hats"
          },
          {
            "name": "Jackets",
            "slug": "jackets-1"
          },
          {
            "name": "Jumpsuits & T-shirts",
            "slug": "jumpsuits-and-t-shirts"
          },
          {
            "name": "New Arrivals",
            "slug": "fashion-new-arrivals"
          },
          {
            "name": "Summer Dresses",
            "slug": "summer-dresses"
          },
          {
            "name": "Sunglasses",
            "slug": "sunglasses"
          }
        ]
      },
      products: [
        {
          "id":516,
          "name":"Blue Nice Dress",
          "slug":"blue-nice-dress",
          "price":null,
          "sale_price":null,
          "short_description":"Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.",
          "stock":"1000",
          "ratings":0,
          "reviews":0,
          "sale_count":"30",
          "sku":"1234627",
          "is_new":null,
          "is_featured":null,
          "is_top":true,
          "until":null,
          "demo":"22",
          "created_by":1,
          "updated_by":1,
          "variants":[
            {
              "price":139,
              "sale_price":null,
              "color":{
                "name":"Brown",
                "slug":"brown",
                "color":"#d99e76"
              },
              "size":{
                "name":"Extra Large",
                "slug":"xl",
                "size":"XL"
              }
            },
            {
              "price":169,
              "sale_price":null,
              "color":{
                "name":"Blue",
                "slug":"blue",
                "color":"#267497"
              },
              "size":{
                "name":"Large",
                "slug":"l",
                "size":"L"
              }
            },
            {
              "price":160,
              "sale_price":null,
              "color":{
                "name":"Black",
                "slug":"black",
                "color":"#2b2b2b"
              },
              "size":{
                "name":"Extra Large",
                "slug":"xl",
                "size":"XL"
              }
            }
          ],
          "large_pictures":[
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_8_1_56ae3b95e0.jpg"
            },
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_8_2_6286afc272.jpg"
            },
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_8_3_40009f1fc2.jpg"
            },
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_8_4_d35e827159.jpg"
            }
          ],
          "pictures":[
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_8_1_300x338_d148004b47.jpg"
            },
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_8_2_300x338_12dabdcab5.jpg"
            },
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_8_3_300x338_a74bf6c6cc.jpg"
            },
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_8_4_300x338_42463f03fc.jpg"
            }
          ],
          "small_pictures":[
          ],
          "product_categories":[
            {
              "name":"Hair Accessories & Hats",
              "slug":"hair-accessories-and-hats"
            },
            {
              "name":"Jackets",
              "slug":"jackets-1"
            },
            {
              "name":"Jumpsuits & T-shirts",
              "slug":"jumpsuits-and-t-shirts"
            },
            {
              "name":"New Arrivals",
              "slug":"fashion-new-arrivals"
            },
            {
              "name":"Casual Dresses",
              "slug":"casual-dresses"
            },
            {
              "name":"Bikinies",
              "slug":"bikinies"
            }
          ],
          "tags":[
          ],
          "brands":[
          ],
          "display_price":[
            139,
            169
          ],
          "discount":0
        },
        {
          "id":517,
          "name":"Blue Nice Shirt",
          "slug":"blue-nice-shirt",
          "price":null,
          "sale_price":null,
          "short_description":"Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.",
          "stock":"1000",
          "ratings":5,
          "reviews":1,
          "sale_count":"30",
          "sku":"1234624",
          "is_new":null,
          "is_featured":true,
          "is_top":true,
          "until":null,
          "demo":"22",
          "created_by":1,
          "updated_by":1,
          "variants":[
            {
              "price":160,
              "sale_price":null,
              "color":{
                "name":"Green",
                "slug":"green",
                "color":"#81d742"
              },
              "size":{
                "name":"Medium",
                "slug":"m",
                "size":"M"
              }
            },
            {
              "price":180,
              "sale_price":139,
              "color":{
                "name":"Brown",
                "slug":"brown",
                "color":"#d99e76"
              },
              "size":{
                "name":"Small",
                "slug":"s",
                "size":"S"
              }
            },
            {
              "price":169,
              "sale_price":null,
              "color":{
                "name":"Blue",
                "slug":"blue",
                "color":"#267497"
              },
              "size":{
                "name":"Medium",
                "slug":"m",
                "size":"M"
              }
            }
          ],
          "large_pictures":[
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_9_1_abe21add7e.jpg"
            },
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_9_2_471d3e3e81.jpg"
            },
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_9_3_c610e9d855.jpg"
            },
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_9_4_cd627467e2.jpg"
            },
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_9_5_e0b296a329.jpg"
            }
          ],
          "pictures":[
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_9_1_300x338_8ce235831e.jpg"
            },
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_9_2_300x338_38831c6e3b.jpg"
            },
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_9_3_300x338_d3cfeb6986.jpg"
            },
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_9_4_300x338_e9830c17e1.jpg"
            },
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_9_5_300x338_8f7faf9030.jpg"
            }
          ],
          "small_pictures":[
          ],
          "product_categories":[
            {
              "name":"Hair Accessories & Hats",
              "slug":"hair-accessories-and-hats"
            },
            {
              "name":"Jackets",
              "slug":"jackets-1"
            },
            {
              "name":"Summer Dresses",
              "slug":"summer-dresses"
            },
            {
              "name":"Bikinies",
              "slug":"bikinies"
            },
            {
              "name":"Casual Dresses",
              "slug":"casual-dresses"
            }
          ],
          "tags":[
          ],
          "brands":[
          ],
          "display_price":[
            139,
            169
          ],
          "discount":23
        },
        {
          "id":519,
          "name":"Brown Coat",
          "slug":"brown-coat",
          "price":null,
          "sale_price":null,
          "short_description":"Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.",
          "stock":"1000",
          "ratings":0,
          "reviews":0,
          "sale_count":"30",
          "sku":"1234621",
          "is_new":null,
          "is_featured":null,
          "is_top":null,
          "until":null,
          "demo":"22",
          "created_by":1,
          "updated_by":1,
          "variants":[
            {
              "price":139,
              "sale_price":null,
              "color":{
                "name":"Brown",
                "slug":"brown",
                "color":"#d99e76"
              },
              "size":{
                "name":"Extra Large",
                "slug":"xl",
                "size":"XL"
              }
            },
            {
              "price":169,
              "sale_price":null,
              "color":{
                "name":"Blue",
                "slug":"blue",
                "color":"#267497"
              },
              "size":{
                "name":"Large",
                "slug":"l",
                "size":"L"
              }
            },
            {
              "price":160,
              "sale_price":null,
              "color":{
                "name":"Black",
                "slug":"black",
                "color":"#2b2b2b"
              },
              "size":{
                "name":"Extra Large",
                "slug":"xl",
                "size":"XL"
              }
            }
          ],
          "large_pictures":[
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_11_1_c70549d0dc.jpg"
            },
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_11_2_063b315a2a.jpg"
            },
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_11_3_74f3b80bce.jpg"
            },
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_11_4_907c8d5202.jpg"
            }
          ],
          "pictures":[
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_11_1_300x338_75af57d57f.jpg"
            },
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_11_2_300x338_c130e1c587.jpg"
            },
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_11_3_300x338_45e383bf8c.jpg"
            },
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_11_4_300x338_7a279e6d90.jpg"
            }
          ],
          "small_pictures":[
          ],
          "product_categories":[
            {
              "name":"Summer Dresses",
              "slug":"summer-dresses"
            },
            {
              "name":"Bikinies",
              "slug":"bikinies"
            },
            {
              "name":"Casual Dresses",
              "slug":"casual-dresses"
            }
          ],
          "tags":[
          ],
          "brands":[
          ],
          "display_price":[
            139,
            169
          ],
          "discount":0
        },
        {
          "id":533,
          "name":"Fashion T-Shirt",
          "slug":"fashion-t-shirt",
          "price":null,
          "sale_price":null,
          "short_description":"Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.",
          "stock":"1000",
          "ratings":0,
          "reviews":0,
          "sale_count":"30",
          "sku":"1234623",
          "is_new":null,
          "is_featured":null,
          "is_top":null,
          "until":null,
          "demo":"22",
          "created_by":1,
          "updated_by":1,
          "variants":[
            {
              "price":139,
              "sale_price":null,
              "color":{
                "name":"Brown",
                "slug":"brown",
                "color":"#d99e76"
              },
              "size":{
                "name":"Extra Large",
                "slug":"xl",
                "size":"XL"
              }
            },
            {
              "price":169,
              "sale_price":null,
              "color":{
                "name":"Blue",
                "slug":"blue",
                "color":"#267497"
              },
              "size":{
                "name":"Large",
                "slug":"l",
                "size":"L"
              }
            },
            {
              "price":160,
              "sale_price":null,
              "color":{
                "name":"Black",
                "slug":"black",
                "color":"#2b2b2b"
              },
              "size":{
                "name":"Extra Large",
                "slug":"xl",
                "size":"XL"
              }
            }
          ],
          "large_pictures":[
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_25_1_a17d1dbc10.jpg"
            },
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_25_2_ec80627e23.jpg"
            },
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_25_3_db1a155a3e.jpg"
            },
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_25_4_66963ce671.jpg"
            },
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_25_5_ea093d3e6f.jpg"
            }
          ],
          "pictures":[
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_25_1_300x338_9218f1a3e3.jpg"
            },
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_25_2_300x338_05c50d85e7.jpg"
            },
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_25_3_300x338_8da2294915.jpg"
            },
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_25_4_300x338_fa6112ba61.jpg"
            },
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_25_5_300x338_ab8100eb1f.jpg"
            }
          ],
          "small_pictures":[
          ],
          "product_categories":[
            {
              "name":"Hair Accessories & Hats",
              "slug":"hair-accessories-and-hats"
            },
            {
              "name":"Jackets",
              "slug":"jackets-1"
            },
            {
              "name":"Jumpsuits & T-shirts",
              "slug":"jumpsuits-and-t-shirts"
            },
            {
              "name":"Casual Dresses",
              "slug":"casual-dresses"
            },
            {
              "name":"Bikinies",
              "slug":"bikinies"
            }
          ],
          "tags":[
          ],
          "brands":[
          ],
          "display_price":[
            139,
            169
          ],
          "discount":0
        },
        {
          "id":552,
          "name":"Lapel Coat",
          "slug":"lapel-coat",
          "price":null,
          "sale_price":null,
          "short_description":"Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.",
          "stock":"1000",
          "ratings":4,
          "reviews":1,
          "sale_count":"30",
          "sku":"1234622",
          "is_new":null,
          "is_featured":null,
          "is_top":true,
          "until":null,
          "demo":"22",
          "created_by":1,
          "updated_by":1,
          "variants":[
            {
              "price":160,
              "sale_price":null,
              "color":{
                "name":"Green",
                "slug":"green",
                "color":"#81d742"
              },
              "size":{
                "name":"Medium",
                "slug":"m",
                "size":"M"
              }
            },
            {
              "price":169,
              "sale_price":null,
              "color":{
                "name":"Blue",
                "slug":"blue",
                "color":"#267497"
              },
              "size":{
                "name":"Medium",
                "slug":"m",
                "size":"M"
              }
            },
            {
              "price":180,
              "sale_price":139,
              "color":{
                "name":"Brown",
                "slug":"brown",
                "color":"#d99e76"
              },
              "size":{
                "name":"Small",
                "slug":"s",
                "size":"S"
              }
            }
          ],
          "large_pictures":[
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_44_1_b06d178485.jpg"
            },
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_44_2_83bdadd2be.jpg"
            },
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_44_3_b462d2e918.jpg"
            },
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_44_4_bb3bddd891.jpg"
            }
          ],
          "pictures":[
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_44_1_300x338_93d224f837.jpg"
            },
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_44_2_300x338_6f83cdc1b1.jpg"
            },
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_44_3_300x338_7522801cba.jpg"
            },
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_44_4_300x338_34837ba5e1.jpg"
            }
          ],
          "small_pictures":[
          ],
          "product_categories":[
            {
              "name":"Summer Dresses",
              "slug":"summer-dresses"
            },
            {
              "name":"Jumpsuits & T-shirts",
              "slug":"jumpsuits-and-t-shirts"
            },
            {
              "name":"New Arrivals",
              "slug":"fashion-new-arrivals"
            }
          ],
          "tags":[
          ],
          "brands":[
          ],
          "display_price":[
            139,
            169
          ],
          "discount":23
        },
        {
          "id":554,
          "name":"Light Coat",
          "slug":"light-coat",
          "price":null,
          "sale_price":null,
          "short_description":"Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.",
          "stock":"1000",
          "ratings":4,
          "reviews":1,
          "sale_count":"30",
          "sku":"1234619",
          "is_new":null,
          "is_featured":null,
          "is_top":null,
          "until":null,
          "demo":"22",
          "created_by":1,
          "updated_by":1,
          "variants":[
            {
              "price":139,
              "sale_price":null,
              "color":{
                "name":"Brown",
                "slug":"brown",
                "color":"#d99e76"
              },
              "size":{
                "name":"Extra Large",
                "slug":"xl",
                "size":"XL"
              }
            },
            {
              "price":169,
              "sale_price":null,
              "color":{
                "name":"Blue",
                "slug":"blue",
                "color":"#267497"
              },
              "size":{
                "name":"Large",
                "slug":"l",
                "size":"L"
              }
            },
            {
              "price":160,
              "sale_price":null,
              "color":{
                "name":"Black",
                "slug":"black",
                "color":"#2b2b2b"
              },
              "size":{
                "name":"Extra Large",
                "slug":"xl",
                "size":"XL"
              }
            }
          ],
          "large_pictures":[
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_46_1_1fae8761bb.jpg"
            },
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_46_2_db966ca7b9.jpg"
            },
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_46_3_15401fc5ac.jpg"
            },
            {
              "width":800,
              "height":900,
              "url":"/uploads/demo_22_product_46_4_3ba9b0133f.jpg"
            }
          ],
          "pictures":[
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_46_1_300x338_201af35397.jpg"
            },
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_46_2_300x338_62459e4676.jpg"
            },
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_46_3_300x338_e9e074b92a.jpg"
            },
            {
              "width":300,
              "height":338,
              "url":"/uploads/demo_22_product_46_4_300x338_8491c56386.jpg"
            }
          ],
          "small_pictures":[
          ],
          "product_categories":[
            {
              "name":"Hair Accessories & Hats",
              "slug":"hair-accessories-and-hats"
            },
            {
              "name":"Jackets",
              "slug":"jackets-1"
            },
            {
              "name":"Bikinies",
              "slug":"bikinies"
            },
            {
              "name":"Casual Dresses",
              "slug":"casual-dresses"
            }
          ],
          "tags":[
          ],
          "brands":[
          ],
          "display_price":[
            139,
            169
          ],
          "discount":0
        }
      ],
    };
  },
  methods: {
    getProductHandler: function (category, index) {
      this.products = null;
      Api.get(`${baseUrl}/demo-${currentDemo}/shop`, {
        params: {
          from: 0,
          to: 6,
          category: category,
        },
      })
          .then((response) => {
            this.products = response.data.data;
          })
          .catch((error) => ({ error: JSON.stringify(error) }));
    },
  },
}
</script>

<style scoped>

</style>