import { nowPlayingActions } from "@/core/actions/movies/now-playing.actions";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { upComingActions } from "@/core/actions/movies/upComing.actions";
import { topRatedMoviesActions } from "@/core/actions/movies/topRate.actions";
import { popularMoviesActions } from "@/core/actions/movies/popular.actions";

export const useMovies = () => {
  // Queries
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPlayingActions,
    staleTime: 1000 * 60 * 60 * 24,
  });

  // Queries
  const popularQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "popular"],
    queryFn: ({ pageParam }) => {
      return popularMoviesActions({ page: pageParam });
    },
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (lastpage, pages) => pages.length + 1
  });

  // Queries
  const topRatedQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "topRated"],
    queryFn: ({ pageParam }) => {
      return topRatedMoviesActions({ page: pageParam });
    },
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (lastpage, pages) => pages.length + 1
  });

  // Queries
  const upComingQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "upComing"],
    queryFn: ({ pageParam }) => {
      return upComingActions({ page: pageParam });
    },
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (lastpage, pages) => pages.length + 1
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upComingQuery,
  };
};
