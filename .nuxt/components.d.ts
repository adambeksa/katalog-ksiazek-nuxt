
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const BannerMainBanner: typeof import("../app/components/banner/MainBanner/MainBanner.vue").default
export const ProductDownloadModal: typeof import("../app/components/product/DownloadModal/DownloadModal.vue").default
export const ProductHomeView: typeof import("../app/components/product/HomeView/HomeView.vue").default
export const ProductHomeViewSkeleton: typeof import("../app/components/product/HomeView/HomeViewSkeleton.vue").default
export const ProductPopularProducts: typeof import("../app/components/product/PopularProducts/PopularProducts.vue").default
export const ProductPopularProductsSkeleton: typeof import("../app/components/product/PopularProducts/PopularProductsSkeleton.vue").default
export const ProductProductAttribution: typeof import("../app/components/product/ProductAttribution/ProductAttribution.vue").default
export const ProductProductBox: typeof import("../app/components/product/ProductBox/ProductBox.vue").default
export const ProductProductBoxSkeleton: typeof import("../app/components/product/ProductBox/ProductBoxSkeleton.vue").default
export const ProductProductDetails: typeof import("../app/components/product/ProductDetails/ProductDetails.vue").default
export const ProductProductDetailsSkeleton: typeof import("../app/components/product/ProductDetails/ProductDetailsSkeleton.vue").default
export const ProductProductFiltersFilterSelect: typeof import("../app/components/product/ProductFilters/FilterSelect.vue").default
export const ProductProductFilters: typeof import("../app/components/product/ProductFilters/ProductFilters.vue").default
export const ProductProductFiltersSkeleton: typeof import("../app/components/product/ProductFilters/ProductFiltersSkeleton.vue").default
export const ProductProductListing: typeof import("../app/components/product/ProductListing/ProductListing.vue").default
export const ProductProductListingSkeleton: typeof import("../app/components/product/ProductListing/ProductListingSkeleton.vue").default
export const ProductProductNotFound: typeof import("../app/components/product/ProductNotFound/ProductNotFound.vue").default
export const SharedBreadcrumbs: typeof import("../app/components/shared/Breadcrumbs/Breadcrumbs.vue").default
export const SharedFooter: typeof import("../app/components/shared/Footer/Footer.vue").default
export const SharedHeader: typeof import("../app/components/shared/Header/Header.vue").default
export const SharedNavigation: typeof import("../app/components/shared/Navigation/Navigation.vue").default
export const SharedSkeleton: typeof import("../app/components/shared/Skeleton/Skeleton.vue").default
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue").default
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout").default
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only").default
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only").default
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder").default
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link").default
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue").default
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture
export const NuxtLinkLocale: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale").default
export const SwitchLocalePathLink: typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink").default
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page").default
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components").NoScript
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components").Link
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components").Base
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components").Title
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components").Meta
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components").Style
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components").Head
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components").Html
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components").Body
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island").default
export const LazyBannerMainBanner: LazyComponent<typeof import("../app/components/banner/MainBanner/MainBanner.vue").default>
export const LazyProductDownloadModal: LazyComponent<typeof import("../app/components/product/DownloadModal/DownloadModal.vue").default>
export const LazyProductHomeView: LazyComponent<typeof import("../app/components/product/HomeView/HomeView.vue").default>
export const LazyProductHomeViewSkeleton: LazyComponent<typeof import("../app/components/product/HomeView/HomeViewSkeleton.vue").default>
export const LazyProductPopularProducts: LazyComponent<typeof import("../app/components/product/PopularProducts/PopularProducts.vue").default>
export const LazyProductPopularProductsSkeleton: LazyComponent<typeof import("../app/components/product/PopularProducts/PopularProductsSkeleton.vue").default>
export const LazyProductProductAttribution: LazyComponent<typeof import("../app/components/product/ProductAttribution/ProductAttribution.vue").default>
export const LazyProductProductBox: LazyComponent<typeof import("../app/components/product/ProductBox/ProductBox.vue").default>
export const LazyProductProductBoxSkeleton: LazyComponent<typeof import("../app/components/product/ProductBox/ProductBoxSkeleton.vue").default>
export const LazyProductProductDetails: LazyComponent<typeof import("../app/components/product/ProductDetails/ProductDetails.vue").default>
export const LazyProductProductDetailsSkeleton: LazyComponent<typeof import("../app/components/product/ProductDetails/ProductDetailsSkeleton.vue").default>
export const LazyProductProductFiltersFilterSelect: LazyComponent<typeof import("../app/components/product/ProductFilters/FilterSelect.vue").default>
export const LazyProductProductFilters: LazyComponent<typeof import("../app/components/product/ProductFilters/ProductFilters.vue").default>
export const LazyProductProductFiltersSkeleton: LazyComponent<typeof import("../app/components/product/ProductFilters/ProductFiltersSkeleton.vue").default>
export const LazyProductProductListing: LazyComponent<typeof import("../app/components/product/ProductListing/ProductListing.vue").default>
export const LazyProductProductListingSkeleton: LazyComponent<typeof import("../app/components/product/ProductListing/ProductListingSkeleton.vue").default>
export const LazyProductProductNotFound: LazyComponent<typeof import("../app/components/product/ProductNotFound/ProductNotFound.vue").default>
export const LazySharedBreadcrumbs: LazyComponent<typeof import("../app/components/shared/Breadcrumbs/Breadcrumbs.vue").default>
export const LazySharedFooter: LazyComponent<typeof import("../app/components/shared/Footer/Footer.vue").default>
export const LazySharedHeader: LazyComponent<typeof import("../app/components/shared/Header/Header.vue").default>
export const LazySharedNavigation: LazyComponent<typeof import("../app/components/shared/Navigation/Navigation.vue").default>
export const LazySharedSkeleton: LazyComponent<typeof import("../app/components/shared/Skeleton/Skeleton.vue").default>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue").default>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout").default>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only").default>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only").default>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder").default>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link").default>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue").default>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture>
export const LazyNuxtLinkLocale: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale").default>
export const LazySwitchLocalePathLink: LazyComponent<typeof import("../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink").default>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page").default>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").NoScript>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Link>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Base>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Title>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Meta>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Style>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Head>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Html>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Body>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island").default>

export const componentNames: string[]
