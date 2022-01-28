import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function MyScreen({route, navigation}) {
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
          navigation.navigate('ImageScreen', json?.message);
        });
    } catch (error) {
      console.log(error);
      setIsloading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onfetch} style={styles.btn}>
        {isLoading ? (
          <ActivityIndicator color={'white'} size={'small'} />
        ) : (
          <Text style={{color: 'white'}}>Fetch</Text>
        )}
      </TouchableOpacity>
    </View>
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
