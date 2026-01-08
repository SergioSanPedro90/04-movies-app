import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'
const MovieDetails = () => {

    const { id } = useLocalSearchParams()


  return (
    <View>
      <Text>MovieDetails</Text>
    </View>
  )
}
export default MovieDetails