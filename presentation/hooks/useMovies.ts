import { nowPlayingActions } from "@/core/actions/movies/now-playing.actions"
import { popularMoviesActions } from "@/core/actions/movies/popular.actions copy"
import { topRatedMoviesActions } from "@/core/actions/movies/topRate.actions"
import { useQuery } from "@tanstack/react-query"


export const useMovies = () =>  {

    // Queries
    const nowPlayingQuery = useQuery({ 
        queryKey: ['movies', 'nowPlaying'], 
        queryFn: nowPlayingActions,
        staleTime: 1000 * 60 * 60 * 24
    })

    // Queries
    const popularQuery = useQuery({ 
        queryKey: ['movies', 'popular'], 
        queryFn: popularMoviesActions,
        staleTime: 1000 * 60 * 60 * 24
    })

    // Queries
    const topRatedQuery = useQuery({ 
        queryKey: ['movies', 'topRated'], 
        queryFn: topRatedMoviesActions,
        staleTime: 1000 * 60 * 60 * 24
    })

    return {
        nowPlayingQuery,
        popularQuery,
        topRatedQuery
    }


}