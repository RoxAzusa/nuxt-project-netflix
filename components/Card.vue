<template>
    <NuxtLink :to="'/movies/' + idMovie">
        <div>
            <img :src="'https://image.tmdb.org/t/p/w200/' + movie.poster_path" :alt="movie.title">
            <h2 class="text-snow">{{ movie.title }}</h2>
            <p class="text-snow">{{ movie.release_date }}</p>
        </div>
    </NuxtLink>
</template>

<script setup>
    defineProps({
        movie: {
            type : Object, 
            required : true
        },
        idMovie: {
            type : Number
        }
    })
</script>