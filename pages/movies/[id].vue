<template>
    <div class="container mx-auto p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" :alt="movie.title" class="rounded-lg shadow-lg">
        </div>
        <div>
          <h1 class="text-3xl font-bold mb-2">{{ movie.title }}</h1>
          <div class="flex items-center text-gray-600 mb-4">
            <span class="mr-2">{{ new Date(movie.release_date).getFullYear() }}</span>
            <span class="mr-2">|</span>
            <span>{{ movie.runtime }} min</span>
          </div>
          <div class="mb-4">
            <h2 class="text-xl font-semibold mb-2">Synopsis</h2>
            <p class="text-gray-700">{{ movie.overview }}</p>
          </div>
          <div class="mb-4">
            <h2 class="text-xl font-semibold mb-2">Genres</h2>
            <ul class="flex flex-wrap">
              <li v-for="genre in movie.genres" :key="genre.id" class="mr-2 mb-2 bg-gray-200 px-2 py-1 rounded-full text-sm">{{ genre.name }}</li>
            </ul>
          </div>
          <div class="mb-4">
            <h2 class="text-xl font-semibold mb-2">Tagline</h2>
            <p class="text-gray-700">{{ movie.tagline }}</p>
          </div>
          <div>
            <a :href="movie.homepage" target="_blank" class="bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600 transition-colors me-3">Visit Homepage</a>
            <button @click="viewTrailers()" class="bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600 transition-colors">Trailers</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="displayTrailers" class="m-8" id="trailers">
      <h3 class="text-2xl font-bold mb-4">Bandes-annonces</h3>
      <div class="flex overflow-x-auto ">
        <iframe v-for="trailer in trailers" :key="trailer.key" :src="'https://www.youtube.com/embed/' + trailer.key" frameborder="0" allowfullscreen class="w-full aspect-video rounded-lg shadow-lg mx-4"></iframe>
      </div>
    </div>
</template>

<script setup>
    const {params, query} = useRoute();

    const { getMovieById } = useTmdb();
    const movie = ref({});
    const trailers = ref([])
    const displayTrailers = ref(false);

    onMounted(async () => {
        movie.value = await getMovieById(params.id,'videos');
        trailers.value = movie.value.videos.results.filter(trailer => trailer.type === 'Trailer');
    });

    function viewTrailers() {
      displayTrailers.value = !displayTrailers.value;
      if (displayTrailers.value) {
        window.location.href = '#trailers';
      }
    }
</script>