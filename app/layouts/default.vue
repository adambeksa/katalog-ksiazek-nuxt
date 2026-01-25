<script setup lang="ts">
import Header from '~/components/shared/Header/Header.vue';
import Footer from '~/components/shared/Footer/Footer.vue';
import Navigation from '~/components/shared/Navigation/Navigation.vue';

// Navigation might be used inside Header, or separately. 
// Based on typical structure, Header often includes Navigation or sits beside it.
// Checking previous file lists, Navigation exists. 
// I'll assume Header might include it or I place it here.
// Let's stick to Header + Footer wrapping the page.
</script>

<template>
  <div class="layout-default">
    <Header />
    <main class="layout-default__content">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.layout-default {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__content {
    flex: 1;
    padding-top: $spacing-xl; // Assuming variable exists, relying on global injection
    width: 100%;
    margin: 0 auto;
    max-width: $container-max-width;
  }
}
</style>
