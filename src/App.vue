<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div data-testid="app" class="flex min-h-screen flex-col bg-slate-50">
    <SiteHeader />
    <div class="grow">
      <RouterView />
    </div>
    <SiteFooter />
  </div>
</template>