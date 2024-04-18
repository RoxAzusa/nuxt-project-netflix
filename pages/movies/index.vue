<template>
    <div class="bg-black shadow-md">
        <div class="flex justify-center">
            <div class="rounded-full overflow-hidden bg-primary-800">
                <button v-for="item in menu" :key="item" @click="refineMovies(item.params)" class="px-4 py-2 text-white hover:bg-primary-700 focus:outline-none focus:bg-primary-900 transition-colors duration-300 first:rounded-l-full last:rounded-r-full">
                    {{ item.label }}
                </button>
            </div>
        </div>
        <Wrapper display="grid">
            <Card v-for="movie in movies" :key="movie.id" :movie="movie" :idMovie="movie.id"/>
        </Wrapper>
    </div>
</template>

<script setup>
    const { getMovies } = useTmdb();
    const movies = ref([]);

    const menu = [
        {params: "now_playing" , label: "A l'affiche"},
        {params: "popular", label: 'Populaire' },
        {params: "top_rated", label: 'Mieux notés'},
        {params: "upcoming", label: 'A venir'}
    ];

    async function refineMovies(param) {
        movies.value = await getMovies(param);
    }
    
    onMounted(() => {
        refineMovies("upcoming")
    })

</script>