import { View, FlatList, useWindowDimensions, Animated } from 'react-native';
import { useRef } from 'react';
import { Movie } from '@/infrastructure/interfaces/movie.interface';
import MoviePoster from './MoviePoster';

interface Props {
  movies: Movie[];
}

const MainSlideshow = ({ movies }: Props) => {
  const width = useWindowDimensions().width;
  const itemWidth = 140;
  const spacing = (width - itemWidth) / 2;
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View className="h-[260px] w-full">
      <Animated.FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={itemWidth}
        decelerationRate="fast"
        contentContainerStyle={{
          paddingHorizontal: spacing,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * itemWidth,
            index * itemWidth,
            (index + 1) * itemWidth,
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              style={{
                width: itemWidth,
                transform: [{ scale }],
              }}
            >
              <MoviePoster id={item.id} poster={item.poster} smallPoster={false}/>
            </Animated.View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        snapToAlignment="center"
      />
    </View>
  );
};

export default MainSlideshow;