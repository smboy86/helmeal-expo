import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import { Platform, View } from 'react-native';

import { BottomTabParamList } from './types';
import BottomIcon from '../basicComponents/BottomIcon';
import HomeScreen from '../screens/HomeScreen';
import Colors from '../constants/Colors';
import { AntDesign } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function TabBarIcon(props: { name: string; color: string }) {
  return <Feather size={26} style={{ marginBottom: -6 }} {...props} />;
}

export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      tabBar={(props) => {
        return (
          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
            }}>
            <BottomTabBar {...props} />
          </View>
        );
      }}
      tabBarOptions={{
        style: {
          height: Platform.select({
            ios: 80,
            android: 80,
          }),
          paddingTop: Platform.select({
            ios: 10,
            android: 0,
          }),
          paddingBottom: Platform.select({
            ios: 28,
            android: 0,
          }),
          backgroundColor: Colors.default.backgroundTintColor,
          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,
        },
        showLabel: true,
        labelStyle: {
          fontSize: 8,
          fontWeight: 'bold',
          fontFamily: 'NotoSansKRBold',
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#fff',
      }}>
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign name='home' size={32} color='#FC5C42' />
            // <BottomIcon
            //   focused={focused}
            //   icon={require('../assets/images/ico-home.png')}
            //   iconOn={require('../assets/images/ico-home-on.png')}
            // />
          ),
          tabBarLabel: 'HOME',
        }}
      />
      {/* <BottomTab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomIcon
              focused={focused}
              icon={require('../assets/images/ico-calendar.png')}
              iconOn={require('../assets/images/ico-calendar-on.png')}
            />
          ),
          tabBarLabel: 'CALENDAR',
        }}
      />
      <BottomTab.Screen
        name="Pond"
        component={PondScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomIcon
              focused={focused}
              icon={require('../assets/images/ico-pond.png')}
              iconOn={require('../assets/images/ico-pond-on.png')}
            />
          ),
          tabBarLabel: 'POND',
        }}
      />
      <BottomTab.Screen
        name="Goods"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomIcon
              focused={focused}
              icon={require('../assets/images/ico-goods.png')}
              iconOn={require('../assets/images/ico-goods-on.png')}
            />
          ),
          tabBarLabel: 'Goods',
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomIcon
              focused={focused}
              icon={require('../assets/images/ico-more.png')}
              iconOn={require('../assets/images/ico-more-on.png')}
            />
          ),
          tabBarLabel: 'Settings',
        }}
      /> */}
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
