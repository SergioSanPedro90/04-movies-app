import { MovieDBMovieResponse } from "../interfaces/movie-db-movie.response";
import { CompleteMovie, Movie } from "../interfaces/movie.interface";
import { Result } from "../interfaces/moviesDB";

export class MovieMapper {
  static fromTheMovieDBToMovie = (movie: Result): Movie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      realeaseDate: new Date(movie.release_date),
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      rating: movie.vote_average,
    };
  };

  static fromMovieDBToCompleteMovie = ( movie: MovieDBMovieResponse ): CompleteMovie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      realeaseDate: new Date(movie.release_date),
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      rating: movie.vote_average,
      genres: movie.genres.map(g => g.name),
      budget: movie.budget,
      duration: movie.runtime,
      originalTitle: movie.original_title,
      productionCompany: movie.production_companies.map( c => c.name)
    }
  }
}
