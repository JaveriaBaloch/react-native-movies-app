/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/home'
import MovieDetials from './screens/moviesDetails'
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { LogBox } from 'react-native';
import {YellowBox} from 'react-native';

const Stack = createNativeStackNavigator();
const App =()=>{
  LogBox.ignoreLogs(['Error: ...']);

  // YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
  
  // // RN < 0.52
  // console.ignoredYellowBox = ['Warning: ReactNative.createElement'];
  console.disableYellowBox = true;
  YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'RNDeviceInfo', 'Warning: An update']);
  return(

       <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: true}}>
          <Stack.Screen name="Home" component={Home} screenOptions={{
                cardStyle: {
                  backgroundColor: 'black',
                },
                animationEnabled: false,
                headerShown: false,
              }}
              options={{headerShown:false}}
              />
            <Stack.Screen name="Detials" component={MovieDetials} screenOptions={{
                cardStyle: {
                  backgroundColor: 'black',
                },
                animationEnabled: false,
                headerShown: true
              }}
              />

        </Stack.Navigator>
     </NavigationContainer>
  )
}
const styles={
  theme:{
    flex:1,
    backgroundColor:'black',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default App