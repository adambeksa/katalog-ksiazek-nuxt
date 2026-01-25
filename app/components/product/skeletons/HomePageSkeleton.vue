<script setup lang="ts">
import MainBanner from '~/components/banner/MainBanner/MainBanner.vue';
import PopularProductsSkeleton from '~/components/product/PopularProducts/PopularProductsSkeleton.vue';
</script>

<template>
  <div class="home">
    <MainBanner />
    <PopularProductsSkeleton />
  </div>
</template>
