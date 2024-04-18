<template>
    <div :class="displayClass[display]">
        <slot/>
    </div>
</template>

<script setup>
    const displayClass = {
        grid: 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 m-5',
        carrousel: 'scroll-ml-6 snap-x flex space-x-2 overflow-x-auto py-4',
        list: 'flex flex-col list'
    }

    defineProps ({
        display: String, 
        default: 'grid',
        validator: (value) => ['grid', 'carrousel', 'list'].includes(value)
    })

</script>

<style scoped>
    .list > * {
        @apply max-h-[200px];
    }
</style>