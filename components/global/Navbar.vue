<template>
    <div class="bg-black shadow-md">
      <ul class="flex">
        <li v-for="{ path, name } in menu" :key="path" class="px-4 py-2">
          <NuxtLink :to="path" class="text-snow hover:text-primary-600 transition-colors duration-300">
            {{ name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
</template>

<script setup>
    const menu = [
        {name: 'Home', path: '/'},
        {name: 'About', path: '/about'},
        {name: 'Movies', path: '/movies'}
    ]
</script>

<style scoped>
    .router-link-exact-active {
        @apply text-primary-600;
    }
</style>