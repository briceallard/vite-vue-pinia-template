<template>
  <div class="mt-16 flex min-h-screen w-full flex-col items-center text-center">
    <img
      src="@/assets/images/404-error-page.png"
      class="w-1/3"
      alt="404 Not Found Illustration"
    />
    <h1 class="font-montserrat text-6xl font-bold text-slate-800">404</h1>
    <h2 class="font-montserrat text-2xl text-slate-800">Page not found</h2>
    <p class="mt-4 text-lg text-slate-500">
      The page you are looking for does not exist.
    </p>

    <router-link :to="{ name: 'home' }">
      <button
        class="mt-8 flex items-center rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
      >
        <ArrowLeftIcon class="mr-4 h-4 w-4" />
        Go to home
      </button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeftIcon } from "@heroicons/vue/solid";
// import { ref } from 'vue'

// defineProps({
//   msg: String
// })

// const count = ref(0)
</script>

<style scoped></style>
