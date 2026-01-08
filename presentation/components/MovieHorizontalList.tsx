import { Movie } from "@/infrastructure/interfaces/movie.interface";
import {
  View,
  Text,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import MoviePoster from "./MoviePoster";
import { useEffect, useRef } from "react";

interface Props {
  movie: Movie[];
  loadNextPage?: () => void;
}

const MovieHorizontalList = ({ movie, loadNextPage }: Props) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(()=> {
      isLoading.current = false
    }, 200)

  },[movie])

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEnd =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEnd) return;

    isLoading.current = true;

    loadNextPage && loadNextPage();

    isLoading.current = false;
  };

  return (
    <View>
      <Text className="text-3xl font-bold px-4 mb-4">Peliculas populares</Text>
      <FlatList
        horizontal
        keyExtractor={(item, i) => `${item.id}-${i}`}
        data={movie}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        onScroll={onScroll}
      />
    </View>
  );
};
export default MovieHorizontalList;
