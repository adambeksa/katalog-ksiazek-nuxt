import { defineStore } from 'pinia';
import { useNuxtApp } from '#app';
import { useI18n } from 'vue-i18n';
import { useProductStore } from './useProductStore';
import { ProductFilterService } from '#shared/product/domain/services/ProductFilterService';
import type { IProductFilters } from '#shared/product/domain/interfaces/IProductFilters.interface';
// i18n handled via Nuxt Module

const productFilterService = new ProductFilterService();

export const useProductFilterStore = defineStore('productFilter', {
  state: () => {
    const { t } = useI18n();
    return {
      filters: {
        author: t('common.all'),
        epoch: t('common.all'),
        genre: t('common.all'),
        kind: t('common.all'),
      } as IProductFilters,
      page: 1,
      itemsPerPage: 20,
    };
  },
  getters: {
    filterOptions(state) {
      const productStore = useProductStore();
      return productFilterService.buildFilterOptions(productStore.products);
    },
    filteredResult(state) {
      const productStore = useProductStore();
      return productFilterService.filterAndPaginate(productStore.products, {
        filters: state.filters,
        page: state.page,
        limit: state.itemsPerPage,
      });
    },
    filteredProducts(): any {
      return this.filteredResult.items;
    },
    totalItems(): number {
      return this.filteredResult.total;
    },
    totalPages(): number {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
  },
  actions: {
    setFilter(key: keyof IProductFilters, value: string) {
      this.filters = {
        ...this.filters,
        [key]: value,
      };
      this.page = 1;
    },
    setPage(newPage: number) {
      this.page = newPage;
    },
    resetFilters() {
      const { t } = useI18n();
      this.filters = {
        author: t('common.all'),
        epoch: t('common.all'),
        genre: t('common.all'),
        kind: t('common.all'),
      };
      this.page = 1;
    },
  },
});
