<template>
  <section class="categories container mt-10">
    <h2 class="title title-line title-underline border-1 mb-4">
      Top Categories of the Month
    </h2>

    <div class="row">
<!--      TODO Index to be removed in v-for & in :key-->
      <category-item v-for="(category, index) in categories" :key="+index" :category="category"></category-item>
    </div>
  </section>
</template>
<script>
import CategoryItem from "~/components/elements/category/CategoryItem";
import Api, { baseUrl } from "~/api/api";
export default {
  name: 'CategorySection',
  components: { CategoryItem },
  data() {
    return {
      categories:  [
        {
          "parents": [],
          "children": [
            {
              "slug": "fashion:women-fashion",
              "name": "Women Fashion"
            },
            {
              "slug": "fashion:men-fashion",
              "name": "Men Fashion"
            },
            {
              "slug": "fashion:kids-fashion",
              "name": "Kids Fashion"
            }
          ],
          "_id": "62a4990a958aa634e7c6c5dd",
          "name": "Fashion",
          "slug": "fashion",
          "level": 0,
          "banner": "https://storeno.b-cdn.net/stores/6-2022/1654988278379.jpeg",
          "img": "https://storeno.b-cdn.net/stores/6-2022/1654991604715.png"
        },
        {
          "parents": [],
          "children": [
            {
              "slug": "informatique:computer",
              "name": "computer"
            },
            {
              "slug": "informatique:storage",
              "name": "Storage"
            },
            {
              "slug": "informatique:network",
              "name": "Network"
            },
            {
              "slug": "informatique:computer-parts",
              "name": "Computer Parts"
            },
            {
              "slug": "informatique:accessories",
              "name": "Accessories"
            },
            {
              "slug": "informatique:other",
              "name": "Other"
            }
          ],
          "_id": "62a49918958aa634e7c6c617",
          "name": "Informatique",
          "slug": "informatique",
          "level": 0,
          "banner": "https://storeno.b-cdn.net/stores/6-2022/1654988984943.jpeg",
          "img": "https://storeno.b-cdn.net/stores/6-2022/1654991604729.png"
        },
        {
          "parents": [],
          "children": [
            {
              "slug": "sport-and-fitness:bikes-and-cycling",
              "name": "Bikes & Cycling"
            },
            {
              "slug": "sport-and-fitness:hike-and-camping",
              "name": "Hike & Camping"
            },
            {
              "slug": "sport-and-fitness:exercices-and-fitness",
              "name": "Exercices & Fitness"
            },
            {
              "slug": "sport-and-fitness:water-sport",
              "name": "Water Sport"
            },
            {
              "slug": "sport-and-fitness:kayaking",
              "name": "Kayaking"
            },
            {
              "slug": "sport-and-fitness:surfing",
              "name": "Surfing"
            },
            {
              "slug": "sport-and-fitness:swimming",
              "name": "Swimming"
            },
            {
              "slug": "sport-and-fitness:sailing",
              "name": "Sailing"
            },
            {
              "slug": "sport-and-fitness:beach",
              "name": "Beach"
            }
          ],
          "_id": "62a4991a958aa634e7c6c628",
          "name": "Sport & Fitness",
          "slug": "sport-and-fitness",
          "level": 0,
          "img": "https://storeno.b-cdn.net/stores/6-2022/1654991604599.png"
        }
      ],
    };
  },
  methods: {
    async getTopCategories(){
      const url = baseUrl + '/config/top';
      // this.banner = (await Api.get(url)).data.result.top;
    },
  },
  async fetch() {
    await this.getTopCategories();
  }
};
</script>
