import { moviesApi } from "@/core/api/movies-api";
import { MovieDBMovieResponse } from "@/infrastructure/interfaces/movie-db-movie.response";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { MovieMapper } from "@/infrastructure/mappers/movies.mappers";


export const getMovieByIdAction = async ( id: number | string): Promise<CompleteMovie> => {

    try {
        const { data } = await moviesApi.get<MovieDBMovieResponse>(`/${id}`);

        return MovieMapper.fromMovieDBToCompleteMovie(data);

      } catch (error) {
        console.log(error);
        throw "No se ha podido cargar las peliculas";
      }


} 