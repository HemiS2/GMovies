import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import MovieScreen from '../screens/MovieScreen'
import personscreen from '../screens/personscreen'
import searchscreen from '../screens/searchscreen'

export default function appNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <stack.screen name='Home' options={{headerShown:false}} component={HomeScreen} />
            <stack.screen name='Movie' options={{headerShown:false}} component={MovieScreen} />
            <stack.screen name='Person' options={{headerShown:false}} component={personscreen} />
            <stack.screen name='Search' options={{headerShown:false}} component={searchscreen} />
        </Stack.Navigator> 
    </NavigationContainer>
  )
}