import { moviesApi } from "@/core/api/movies-api";
import { MovieDBMovieResult } from "@/infrastructure/interfaces/movie-db-movie.response";


export const getMovieByIdAction = async ( id: number | string) => {

    try {
        const { data } = await moviesApi.get<MovieDBMovieResult>(`/${id}`);
    
        return data;

      } catch (error) {
        console.log(error);
        throw "No se ha podido cargar las peliculas";
      }


} 