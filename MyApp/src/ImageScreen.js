import {View, Text, Image, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';

export default function ImageScreen({route, navigation}) {
  const [isLoading, setloading] = useState(false);
  return (
    <View style={{flex: 1}}>
      {route?.params == undefined ? (
        <Text style={{alignSelf: 'center'}}>NO Image Found !</Text>
      ) : (
        <Image
          onLoadStart={() => setloading(true)}
          onLoad={() => setloading(false)}
          style={{height: '100%', width: '100%'}}
          source={{uri: route?.params}}
        />
      )}
      {isLoading && (
        <ActivityIndicator
          color={'red'}
          size={'large'}
          style={{alignSelf: 'center', position: 'absolute'}}
        />
      )}
    </View>
  );
}
