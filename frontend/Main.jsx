import { View, Text , Safe, SafeAreaView, Platform} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'

const Stack = createNativeStackNavigator()

const Main = () => {
  return (
<NavigationContainer>
<Stack.Navigator>
    <Stack.Group>

<Stack.Screen name="home" component={Home}/>

    </Stack.Group>
</Stack.Navigator>

</NavigationContainer>)
}

export default Main