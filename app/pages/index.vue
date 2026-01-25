<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import MainBanner from '~/components/banner/MainBanner/MainBanner.vue';
import PopularProducts from '~/components/product/PopularProducts/PopularProducts.vue';
import HomePageSkeleton from '~/components/product/skeletons/HomePageSkeleton.vue';

const store = useProductStore();
const { popularProducts, isLoading } = storeToRefs(store);

onMounted(() => {
  store.loadAllProducts();
});
</script>

<template>
  <div class="home">
    <HomePageSkeleton v-if="isLoading" />
    <template v-else>
      <MainBanner />
      <PopularProducts :products="popularProducts" />
    </template>
  </div>
</template>
