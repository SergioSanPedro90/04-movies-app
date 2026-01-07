import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { View, Text, FlatList } from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
  movie: Movie[];
}

const MovieHorizontalList = ({ movie }: Props) => {
  return (
    <View>
      <Text className="text-3xl font-bold px-4 mb-4">Peliculas populares</Text>
      <FlatList
      horizontal
      keyExtractor={(item)=> `${item.id}`}
      data={ movie }
      renderItem={({item})=> <MoviePoster id={item.id} poster={item.poster} smallPoster/>}
      />
    </View>
  );
};
export default MovieHorizontalList;
