export const useTmdb = () => {
    const config = useRuntimeConfig();

    const urlBase = 'https://api.themoviedb.org/3'
    let queryParams = `?language=fr-FR&page=1`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ config.public.tmdbKey }`
        }
    };

    
    async function getMovies(params) {
        const response = await $fetch(urlBase + `/movie/` + params + queryParams, options);
        return response.results;
    }

    async function getMovieById(idMovie, append) {
        const response = await $fetch(urlBase + `/movie/` + idMovie + queryParams + `&append_to_response=`+ append, options);
        return response;
    }

    return {getMovies, getMovieById}
}