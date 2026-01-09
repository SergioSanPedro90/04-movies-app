import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id.actions"
import { getActors } from "@/core/actions/movies/actors.action"
import { useQuery } from "@tanstack/react-query"





const useMovie = ( id: number) => {

    const movieQuery = useQuery({
        queryKey: ['movie', id],
        queryFn: () => getMovieByIdAction(id),
        staleTime: 1000 * 60 * 60 * 24
    })

    const actorsQuery = useQuery({
        queryKey: ['movie', id, 'actors'],
        queryFn: () => getActors(id),
        staleTime: 1000 * 60 * 60 * 24
    })

  return {
    movieQuery,
    actorsQuery
  }
}
export default useMovie