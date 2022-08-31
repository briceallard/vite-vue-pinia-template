<template>
  <main class="flex-1">
    <div class="py-6">
      <div class="px-4 sm:px-6 md:px-0">
        <!-- Replace with your content -->
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <KeepAlive>
              <div :key="router.currentRoute.value.fullPath">
                <component :is="Component" />
              </div>
            </KeepAlive>
          </transition>
        </router-view>
        <!-- /End replace -->
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import router from "@/routes";
</script>

<style lang="scss">
@import "@/styles/global.scss";

:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #0f141d;
  --dark-alt: #1d2531;
  --light: #f1f5f9;
  --light-alt: #d3d9df;
  --light-alt2: rgb(37, 99, 235);
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  background-color: #f8fafc;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--light);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--light-alt);
    border-radius: 0.25rem;

    &:hover {
      background-color: var(--light-alt2);
    }
  }
}
</style>
