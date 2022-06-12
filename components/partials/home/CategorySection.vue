<template>
  <section class="categories container mt-10">
    <h2 class="title title-line title-underline border-1 mb-4">
      Top Categories of the Month
    </h2>

    <div class="row">
<!--      TODO Index to be removed in v-for & in :key-->
      <category-item v-for="(category, index) in categories" :key="category.name+index" :category="category.name" :img="category.img" :sub-categories="category.subcategories"></category-item>
    </div>
  </section>
</template>
<script>
import CategoryItem from "~/components/elements/category/CategoryItem";
export default {
  name: 'CategorySection',
  components: { CategoryItem },
  data() {
    return {
      categories: [
        {
          name: 'Electronics',
          img: 'https://d-themes.com/vue/riode/demo-22/images/home/categories/1.png',
          subcategories: ['Air Conditioners','Machines', 'Musical Instruments', 'Office Electronics', 'Televisions']
        },
        {
          name: 'Computers',
          img: 'https://d-themes.com/vue/riode/demo-22/images/home/categories/3.png',
          subcategories: ['Desktop PCs','Laptops', 'New arrivals', 'Pc Components', 'Pc Gaming']
        },
        {
          name: 'Beauty',
          img: 'https://d-themes.com/vue/riode/demo-22/images/home/categories/5.png',
          subcategories: ['Hair Care','Makeup', 'Perfumes', 'Skin Care']
        }
      ],
    };
  },
};
</script>
