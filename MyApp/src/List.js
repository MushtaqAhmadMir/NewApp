import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function List({item,onBtn}) {
  return (
    <TouchableOpacity onPress={()=>onBtn(item)} style={styles.btn}>
      <Text style={styles.btnText}>{item}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: {
    height: 50,
    width: windowWidth / 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText:{
      fontSize:25,
      color: '#9B9E9D'
  }
});
