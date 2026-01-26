<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Skeleton from '~/components/shared/Skeleton/Skeleton.vue';
import Breadcrumbs from '~/components/shared/Breadcrumbs/Breadcrumbs.vue';

const { t } = useI18n();
</script>

<template>
  <div class="product-details">
    <div class="container">
      <Breadcrumbs />
      <button class="product-details__back-link">
        {{ t('common.back') }}
      </button>

      <div class="product-details__grid">
        <div class="product-details__image-section">
          <Skeleton height="400px" width="100%" border-radius="8px" />
        </div>

        <div class="product-details__info-section">
          <Skeleton
            height="24px"
            width="150px"
            class="product-details__skeleton-mb-2"
          />
          <Skeleton
            height="48px"
            width="300px"
            class="product-details__skeleton-mb-4"
          />

          <div class="product-details__description-section">
            <Skeleton
              height="28px"
              width="120px"
              class="product-details__skeleton-mb-2"
            />
            <Skeleton
              height="16px"
              width="100%"
              class="product-details__skeleton-mb-1"
            />
            <Skeleton
              height="16px"
              width="100%"
              class="product-details__skeleton-mb-1"
            />
            <Skeleton
              height="16px"
              width="90%"
              class="product-details__skeleton-mb-1"
            />
            <Skeleton
              height="16px"
              width="95%"
              class="product-details__skeleton-mb-1"
            />
            <Skeleton
              height="16px"
              width="60%"
              class="product-details__skeleton-mb-1"
            />
          </div>

          <div class="product-details__skeleton-mt-4">
            <Skeleton height="100px" width="100%" border-radius="8px" />
          </div>

          <div class="product-details__actions product-details__skeleton-mt-4">
            <Skeleton
              height="48px"
              width="180px"
              border-radius="24px"
              class="product-details__skeleton-mr-2"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import './ProductDetails.scss';
</style>
