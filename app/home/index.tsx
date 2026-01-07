import MovieHorizontalList from "@/presentation/components/MovieHorizontalList";
import MoviesCarousel from "@/presentation/components/MoviesCarousel";
import MoviesTopRated from "@/presentation/components/MoviesTopRated";
import { useMovies } from "@/presentation/hooks/useMovies";
import { View, Text, ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator color={"purple"} size={30} />
      </View>
    );
  }

  return (
    <View className="mt-2" style={{paddingTop: safeArea.top}}>
      <Text className="px-4 text-3xl font-bold mb-5">App de Peliculas</Text>

      {/* CARRUSEL */}
      <MoviesCarousel movies={nowPlayingQuery.data ?? []}/>

      {/* PELICULAS POPULARES */}
      <MovieHorizontalList movie={popularQuery.data ?? []}/>

      {/* MEJOR VALORADAS */}
      <MoviesTopRated movie={topRatedQuery.data ?? []}/>


    </View>
  );
};
export default HomeScreen;
