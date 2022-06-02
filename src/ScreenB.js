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

export function ScreenB({navigation}) {
  function gotoScreenA() {
    //navigation.navigate('Screen_A');
    navigation.goBack();
  }
  return (
    <View>
      <Text>Screen B</Text>
      <Pressable
        onPress={gotoScreenA}
        styles={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#f0f0'})}>
        <Text>Go to A</Text>
      </Pressable>
    </View>
  );
}
