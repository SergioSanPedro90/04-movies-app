import { moviesApi } from "@/core/api/movies-api";
import { MovieDBActors } from "@/infrastructure/interfaces/movie-db-actors";
import { CastMapper } from "@/infrastructure/mappers/actors.mapper";
import { MovieMapper } from "@/infrastructure/mappers/movies.mappers";

export const getActors = async (movieId: number) => {
  try {
    const { data } = await moviesApi.get<MovieDBActors>(`/${movieId}/credits`);

    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.log(error);
    throw "No se ha podido cargar las peliculas";
  }
};
