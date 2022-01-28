import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainStack from './MainStack';
import ImageScreen from '../ImageScreen';
import MyScreen from '../MyScreen';

// import NavigationService from './NavigationService'
const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
     
      <Stack.Screen
        name={'MyScreen'}
        component={MyScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'ImageScreen'}
        component={ImageScreen}
        options={{headerShown: false}}
      />
   
    </NavigationContainer>
  );
}
