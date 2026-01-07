import { moviesApi } from "@/core/api/movies-api";
import { MovieMapper } from "@/infrastructure/mappers/movies.mappers";

export const popularMoviesActions = async () => {
  try {
    const { data } = await moviesApi.get("/popular");

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "No se ha podido cargar las peliculas";
  }
};
