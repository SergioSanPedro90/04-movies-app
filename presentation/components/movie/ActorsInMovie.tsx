import { Actor } from "@/infrastructure/interfaces/cast-actors";
import { View, Text, FlatList } from "react-native";
import { ActorCard } from "./ActorCard";

interface Props {
  cast: Actor[];
}

const ActorsInMovie = ({ cast }: Props) => {
  return (
    <View className="mt-5 mb-52">
      <Text className="font-bold text-2xl px-5 mb-10">Actores:</Text>

      <FlatList
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <>
            <ActorCard actor={item} />
          </>
        )}
      />
    </View>
  );
};
export default ActorsInMovie;
