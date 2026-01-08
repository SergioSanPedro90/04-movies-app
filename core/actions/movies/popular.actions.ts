import { moviesApi } from "@/core/api/movies-api";
import { MovieMapper } from "@/infrastructure/mappers/movies.mappers";

interface Options {
  page?: number,
  limit?: number
}

export const popularMoviesActions = async ({page = 1, limit}: Options) => {
  try {
    const { data } = await moviesApi.get("/popular", {
      params: {
        page: page
      }
    });

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "No se ha podido cargar las peliculas";
  }
};
