
import {
    StyleSheet,
    Dimensions,
    
  } from 'react-native';
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3D403F',
      justifyContent: 'flex-end',
    },
    calculator: {
      borderTopWidth: 1.5,
      borderTopColor: 'rgba(0,0,0,0.1)',
      flexDirection: 'row',
      paddingVertical: 20,
      marginHorizontal: 10,
    },
    input: {
      justifyContent: 'flex-end',
      flexDirection: 'row',
      padding: 20,
    },
    text: {
      fontSize: 28,
      color: '#9B9E9D',
    },
    numView: {
      width: windowWidth / 1.3,
    },
    symbolView: {
      backgroundColor: '#363636',
      alignItems: 'center',
      borderRadius: 20,
    },
    btn: {
      height: 70,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    symbolText: {
      fontSize: 25,
      color: '#9B9E9D',
    },
    roundBtn: {
      backgroundColor: '#F3EEC2',
      height: 65,
      width: 65,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '10%',
    },
    modalView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 24,
    },
    modal: {
      height: windowHeight / 2.3,
      width: '100%',
      backgroundColor: 'rgba(155,158,157,0.9)',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      opacity:1
    },
    hello: {
      fontSize: 30,
      color: 'white',
      
    },
  });
  