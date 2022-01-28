import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import Routes from './src/navigation/Routes'
import MyScreen from './src/MyScreen';
import ImageScreen from './src/ImageScreen';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
export default function App(props) {

  const [isLoading, setIsloading] = useState(false);
  const URL = 'https://dog.ceo/api/breeds/image/random';
  const onfetch = () => {
    setIsloading(true);
    try {
      fetch(URL, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(json => {
          console.log(json);
          setIsloading(false);
          // props.navigation.navigate()
          
        });
    } catch (error) {
      console.log(error);
      setIsloading(false);
    }
  };
  const Stack = createStackNavigator();
  return (
    
    

    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="MyScreen" 
      options={{
        headerShown:false
      }}
      component={MyScreen} />
        <Stack.Screen name="ImageScreen" 
      options={{
        headerShown:false
      }}
      component={ImageScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: 'green',
    borderRadius: 7,
  },
});
