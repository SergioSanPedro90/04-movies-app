import { Movie } from '@/infrastructure/interfaces/movie.interface'
import { View, Text, FlatList } from 'react-native'
import MoviePoster from './MoviePoster'

interface Props {
    movie: Movie[]
}

const MoviesTopRated = ({ movie }: Props) => {
  return (
    <View>
      <Text className='text-3xl font-bold px-4 mt-5 mb-4'>Mejor calificadas</Text>
      <FlatList
      horizontal
      data={ movie }
      keyExtractor={(item)=> `${item.id}`}
      renderItem={({item}) => <MoviePoster id={item.id} poster={item.poster} smallPoster
      />}
      />
    </View>
  )
}
export default MoviesTopRated