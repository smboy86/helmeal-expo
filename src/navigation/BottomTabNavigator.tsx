import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import { Platform, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { BottomTabParamList } from './types';
import BottomIcon from '../basicComponents/BottomIcon';
import HomeScreen from '../screens/HomeScreen';
import Colors from '../constants/Colors';
import { IcoUser, IcoRoutine, IcoHome } from '../constants/Svgs';
import Box from '../basicComponents/Box';
import Text from '../basicComponents/Text';
import Layout from '../constants/Layout';
import RoutineScreen from '../screens/SubCompleteScreen';
import MyPageScreen from '../screens/MyPageScreen';

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
            ios: 82,
            android: 80,
          }),
          paddingTop: Platform.select({
            ios: 8,
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
          fontSize: 12,
          fontWeight: 'bold',
          fontFamily: 'NotoSansKRBold',
        },
        activeTintColor: Colors.default.tint,
        inactiveTintColor: Colors.default.gray,
      }}>
      <BottomTab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <IcoHome
              width={28}
              height={28}
              fill={focused ? Colors.default.tint : Colors.default.gray}
            />
          ),
          tabBarLabel: '홈',
        }}
      />
      <BottomTab.Screen
        name='Routine'
        component={RoutineScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Box>
              <IcoRoutine
                width={28}
                height={28}
                fill={focused ? Colors.default.tint : Colors.default.gray}
              />
            </Box>
          ),
          tabBarLabel: '루틴시작',
        }}
      />
      <BottomTab.Screen
        name='MyPage'
        component={MyPageScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Box>
              <IcoUser
                // width={Layout.window.width * 0.045}
                // height={Layout.window.width * 0.053}
                width={28}
                height={28}
                fill={focused ? Colors.default.tint : Colors.default.gray}
              />
            </Box>
          ),
          tabBarLabel: '마이페이지',
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
