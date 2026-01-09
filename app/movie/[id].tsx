import ActorsInMovie from '@/presentation/components/movie/ActorsInMovie'
import MovieDescription from '@/presentation/components/movie/MovieDescription'
import MovieHeader from '@/presentation/components/movie/MovieHeader'
import useMovie from '@/presentation/hooks/useMovie'
import { useLocalSearchParams } from 'expo-router'
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'


const MovieDetails = () => {

    const { id } = useLocalSearchParams()
    const { movieQuery, actorsQuery } = useMovie(+id)
    
  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className='flex-1 justify-center items-center'>
        <Text className='mb-4'>Espere por favor</Text>
        <ActivityIndicator color={'purple'} size={30}/>
      </View>
    )
  }

  return (
    <ScrollView>
      <MovieHeader 
      title={movieQuery.data.title}
      originalTitle={movieQuery.data.originalTitle}
      poster={movieQuery.data.poster}
       />
       <MovieDescription movie={movieQuery.data}/>
       <ActorsInMovie cast={actorsQuery.data ?? []}/>
    </ScrollView>
  )
}
export default MovieDetails