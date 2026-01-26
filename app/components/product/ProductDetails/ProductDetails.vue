<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import DownloadModal from '~/components/product/DownloadModal/DownloadModal.vue';
import ProductAttribution from '~/components/product/ProductAttribution/ProductAttribution.vue';
import Breadcrumbs from '~/components/shared/Breadcrumbs/Breadcrumbs.vue';
import ProductDetailsSkeleton from './ProductDetailsSkeleton.vue';
import ProductNotFound from '~/components/product/ProductNotFound/ProductNotFound.vue';

const route = useRoute();
const router = useRouter();
const { t } = useI18n();
const store = useProductStore();
const { currentProduct: product, isLoading } = storeToRefs(store);

const notFound = computed(() => !isLoading.value && !product.value);
const showDownloadModal = ref(false);
const showAudioModal = ref(false);

const hasAudio = computed(() => 
  product.value?.audioFormats && Object.keys(product.value.audioFormats).length > 0
);

onMounted(() => {
  const id = route.params.id as string;
  store.loadProductById(id);
});

const handleDownload = () => {
  showDownloadModal.value = true;
};

const handleAudioDownload = () => {
  showAudioModal.value = true;
};

const goBack = () => {
  router.back();
};
</script>

<template>
  <ProductDetailsSkeleton v-if="isLoading" />

  <ProductNotFound v-if="notFound" />

  <div v-else-if="product" class="product-details">
    <Breadcrumbs :current-label="product.name" />
    
    <button
      class="product-details__back-link"
      @click="goBack"
    >
      {{ t('common.back') }}
    </button>

    <div class="product-details__grid">
      <div class="product-details__image-section">
        <img
          class="product-details__main-image"
          :src="product.image"
          :alt="product.name"
        />
      </div>

      <div class="product-details__info-section">
        <h2 class="product-details__author">{{ product.author }}</h2>
        <h1 class="product-details__title">{{ product.name }}</h1>

        <div class="product-details__description-section">
          <h3>{{ t('productCard.descriptionTitle') }}</h3>
          <div
            class="product-details__description-content"
            v-html="product.description"
          />
        </div>

        <ProductAttribution :product="product" />

        <div class="product-details__actions">
          <button
            class="product-details__read-button"
            @click="handleDownload"
          >
            {{ t('productCard.readBook') }}
          </button>

          <button
            v-if="hasAudio"
            class="product-details__audio-button"
            @click="handleAudioDownload"
          >
            {{ t('productCard.listenAudiobook') }}
          </button>
        </div>
      </div>
    </div>

    <DownloadModal
      v-if="showDownloadModal"
      :product="product"
      @close="showDownloadModal = false"
    />

    <DownloadModal
      v-if="showAudioModal"
      :product="product"
      :title="t('downloadModal.audiobookTitle')"
      :formats="product.audioFormats"
      @close="showAudioModal = false"
    />
  </div>
</template>

<style scoped>
@import './ProductDetails.scss';
</style>
