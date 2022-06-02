import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  RefreshControl,
  Text,
  View,
  Button,
  Linking,
  FlatList,
  Alert,
  ToastAndroid,
  Modal,
  Image,
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export function ScreenA({navigation}) {
  function gotoScreenB() {
    navigation.navigate('Screen_B');
    // navigation.replace('Screen_B');
  }

  return (
    <View>
      <Text>Screen A</Text>
      <Pressable
        onPress={gotoScreenB}
        styles={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#f0f0'})}>
        <Text>Go to B</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    margin: 10,
    padding: 15,
    backgroundColor: '#00ff00',
    alignItems: 'center',
  },
  img: {
    height: 200,
    resizeMode: 'stretch',
    margin: 5,
  },
});
