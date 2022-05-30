//import libraries
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  PermissionsAndroid,
  Permission,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import List from './List';
import {styles} from './styles';
import RNSimData from 'react-native-sim-data';
const Calculator = () => {
  const [value, setValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [list, setList] = useState([
    'C',
    '+/-',
    '%',
    '7',
    '8',
    '9',
    '4',
    '5',
    '6',
    '1',
    '2',
    '3',
    '.',
    '0',
    '00',
  ]);
  const [list2, setList2] = useState(['/', 'x', '-', '+', '=']);

  //performing setstate on each btn
  const onBtn = item => {
    if (item == '+/-' || item == '%' || item == '=') {
      return;
    } else if (item == 'C') {
      setValue('');
    } else {
      console.log(item);
      const str1 = value.toString();
      const str2 = str1 + item;
      console.log(str2);
      setValue(str2);
    }
  };

  useEffect(() => {
    if (value == '1+3+9') {
      setModalVisible(true);
    }
  }, [value]);

  useEffect(async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        let data = await RNSimData.getSimInfo()?.deviceId0;
        console.log(data);
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
    // console.log(RNSimData.getSimInfo()?.deviceId0)
    // let data = RNSimData.getSimInfo()?.deviceId0
    // console.log(data);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Text style={styles.text}>{value}</Text>
      </View>
      <View style={styles.calculator}>
        <View style={styles.numView}>
          <FlatList
            contentContainerStyle={{justifyContent: 'space-between'}}
            numColumns={3}
            data={list}
            renderItem={({item, index}) => {
              return <List key={index} onBtn={onBtn} item={item} />;
            }}
          />
        </View>
        <View style={styles.symbolView}>
          {list2.map(function (e, index) {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => onBtn(e)}
                style={e == '=' ? styles.roundBtn : styles.btn}>
                <Text style={styles.symbolText}>{e}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <Modal visible={modalVisible} transparent>
        <View
          onMoveShouldSetResponder={() => setModalVisible(false)}
          onStartShouldSetResponder={() => setModalVisible(false)}
          style={styles.modalView}>
          <View style={styles.modal}>
            <Text style={styles.hello}>Hello World</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Calculator;

//define styles
