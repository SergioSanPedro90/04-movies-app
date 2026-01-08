import {
  View,
  Text,
  useWindowDimensions,
  Image,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  poster: string;
  title: string;
  originalTitle: string;
}

const MovieHeader = ({ poster, title, originalTitle }: Props) => {
  const { height } = useWindowDimensions();

  return (
    <>
      {/* BOTON DE ATRAS */}

      <LinearGradient
        colors={["rgba(0,0,0,0.3)", "transparent"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        className="absolute z-10 w-full"
        style={{ height: height * 0.4 }}
      />

      <View
        style={{
          position: "absolute",
          zIndex: 99,
          elevation: 9,
          top: 35,
          left: 10,
        }}
      >
        <Pressable onPress={() => router.dismiss()}>
          <Ionicons
            className="shadow"
            name="arrow-back"
            size={30}
            color={"white"}
          />
        </Pressable>
      </View>

      <View
        style={{ height: height * 0.7 }}
        className="shadow-xl shadow-black/90"
      >
        <View className="flex-1 rounded-b-[25] overflow-hidden">
          <Image
            className="flex-1"
            source={{ uri: poster }}
            resizeMode="cover"
          />
        </View>
        <View className="px-4 mt-4">
          <Text className="font-normal">{originalTitle}</Text>
          <Text className="font-semibold text-2xl">{title}</Text>
        </View>
      </View>
    </>
  );
};
export default MovieHeader;
