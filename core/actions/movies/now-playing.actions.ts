import { moviesApi } from "@/core/api/movies-api";
import { MovieMapper } from "@/infrastructure/mappers/movies.mappers";

export const nowPlayingActions = async () => {
    try {
        
        const { data } = await moviesApi.get('/now_playing')

        const movies = data.results.map( MovieMapper.fromTheMovieDBToMovie )

        console.log(JSON.stringify(movies, null, 2));
        

        return movies

    } catch (error) {
        console.log(error);
        throw 'No se ha podido cargar las peliculas'
        
    }
}