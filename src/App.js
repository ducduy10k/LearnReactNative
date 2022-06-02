/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
import CustomButton from './CustomButton';
import {ScreenA} from './ScreenA';
import {ScreenB} from './ScreenB';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  const [name, setName] = useState('DCODE');
  const [items, setItem] = useState([
    {
      key: '1',
      name: 'abc',
    },
    {
      key: '1',
      name: 'abc',
    },
    {
      key: '1',
      name: 'abc',
    },
    {
      key: '1',
      name: 'abc',
    },
    {
      key: '1',
      name: 'abc',
    },
  ]);

  const [refreshing, setRefreshing] = useState(false);
  const onClickHandler = () => {
    // setName('Duy');
  };
  // Alert.alert(
  //   'Warning',
  //   'Looix roi ',
  //   [
  //     {
  //       text: 'ok',
  //       onPress: () => {
  //         console.warn('ok');
  //       },
  //     },
  //     {
  //       text: 'cancle',
  //       onPress: () => {
  //         console.warn('cancle');
  //       },
  //     },
  //   ],
  //   {
  //     cancelable: true,
  //     onDismiss: () => console.warn('cance'),
  //   },
  // );

  // ToastAndroid.show('ok', 2);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  };

  return (
    // <ScrollView
    //   horizontal={false}
    //   refreshControl={
    //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    //   }>
    //   <Modal visible={false}>
    //     <Text>Hello</Text>
    //   </Modal>
    //   <View style={styles.body}>
    //     <Text>My name is {name}</Text>
    //     <Button title="Youtube" onPress={onClickHandler} />
    //   </View>
    //   <Image
    //     source={{
    //       uri: 'https://baoquocte.vn/stores/news_dataimages/dieulinh/012020/29/15/nhung-buc-anh-dep-tuyet-voi-ve-tinh-ban.jpg',
    //     }}
    //     style={styles.img}
    //   />
    //   <CustomButton title="v11" />
    // </ScrollView>
    // <FlatList
    //   data={items}
    //   // horizontal
    //   // inverted
    //   keyExtractor={(item, index) => index}
    //   renderItem={({item}) => (
    //     <View style={styles.item}>
    //       <Text>{item.name}1</Text>
    //     </View>
    //   )}
    //   refreshControl={
    //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    //   }
    // />
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={
    //       {
    //         // header: () => null,
    //       }
    //     }>
    //     <Stack.Screen
    //       name="Screen_A"
    //       component={ScreenA}
    //       options={{
    //         header: () => null,
    //       }}
    //     />
    //     <Stack.Screen name="Screen_B" component={ScreenB} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Screen_A') {
              iconName = 'meho';
              size = focused ? 25 : 20;
              color = focused ? '#f0f' : '#ccc';
            } else if (route.name === 'Screen_B') {
              iconName = 'meh';
              color = focused ? '#f0f' : '#ccc';
              size = focused ? 25 : 20;
            }
            return <AntDesign name={iconName} color={color} size={size} />;
          },
          tabBarActiveTintColor: '#f0f',
          tabBarInactiveTintColor: '#555',
          tabBarActiveBackgroundColor: '#fff',
          tabBarInactiveBackgroundColor: '#888',
          tabBarShowLabel: true,
          tabBarLabelStyle: {fontSize: 14},
        })}
        tabBarOptions={{}}>
        <Tab.Screen
          name="Screen_A"
          component={ScreenA}
          options={{
            header: () => null,
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Screen_B"
          component={ScreenB}
          initialParams={{ItemName: 'No name', ItemId: null}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
