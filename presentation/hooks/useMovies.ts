import { nowPlayingActions } from "@/core/actions/movies/now-playing.actions"
import { useQuery } from "@tanstack/react-query"
import { upComingActions } from "@/core/actions/movies/upComing.actions"
import { topRatedMoviesActions } from "@/core/actions/movies/topRate.actions"
import { popularMoviesActions } from "@/core/actions/movies/popular.actions"


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

    // Queries
    const upComingQuery = useQuery({ 
        queryKey: ['movies', 'upComing'], 
        queryFn: upComingActions,
        staleTime: 1000 * 60 * 60 * 24
    })

    return {
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upComingQuery
    }


}