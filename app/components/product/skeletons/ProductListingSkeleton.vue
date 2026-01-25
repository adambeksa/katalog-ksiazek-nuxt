<script setup lang="ts">
import Breadcrumbs from '~/components/shared/Breadcrumbs/Breadcrumbs.vue';
import ProductBoxSkeleton from '~/components/product/ProductBox/ProductBoxSkeleton.vue';
import ProductFiltersSkeleton from '~/components/product/ProductFilters/ProductFiltersSkeleton.vue';
</script>

<template>
  <div class="product-listing">
    <Breadcrumbs />

    <ProductFiltersSkeleton />

    <div class="product-listing__grid">
      <ProductBoxSkeleton v-for="i in 9" :key="i" />
    </div>
  </div>
</template>

<style scoped>
@import './ProductListingPage.scss';
</style>
