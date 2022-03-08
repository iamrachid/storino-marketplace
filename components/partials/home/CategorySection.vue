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
          img: './images/home/categories/6.png',
          subcategories: ['Air Conditioners','Machines', 'Musical Instruments', 'Office Electronics', 'Televisions']
        },
        {
          name: 'Electronics',
          img: './images/home/categories/6.png',
          subcategories: ['Air Conditioners','Machines', 'Musical Instruments', 'Office Electronics', 'Televisions']
        },
        {
          name: 'Electronics',
          img: './images/home/categories/6.png',
          subcategories: ['Air Conditioners','Machines', 'Musical Instruments', 'Office Electronics', 'Televisions']
        }
      ],
    };
  },
};
</script>
