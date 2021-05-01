import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginHome from '../screens/LoginHomeScreen';
import SubOptionScreen from '../screens/SubOptionScreen';
import SubOptionCompleteScreen from '../screens/SubOptionCompleteScreen';
import SubcribeScreen from '../screens/SubcribeScreen';
import SubCompleteScreen from '../screens/SubCompleteScreen';
import AddressScreen from '../screens/AddressScreen';
import RoutineDetailScreen from '../screens/RoutineDetailScreen';

const Stack = createStackNavigator();

export const DetailsNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      animationEnabled: true,
      headerTintColor: '#000',
      headerStyle: {
        elevation: 0,
      },
      headerShown: true,
      headerBackTitle: ' ',
    }}>
    <Stack.Screen
      name='Login'
      component={LoginHome}
      options={{
        headerShown: false,
        // headerTitle: '로그인',
      }}
    />
    <Stack.Screen
      name='RoutineDetail'
      component={RoutineDetailScreen}
      options={({ route }) => ({
        headerTitle: route.params.title,
      })}
    />
    <Stack.Screen
      name='Subscribe'
      component={SubcribeScreen}
      options={{
        headerTitle: '구독하기',
      }}
    />
    <Stack.Screen
      name='SubOption'
      component={SubOptionScreen}
      options={{
        headerTitle: '구독 옵션 선택',
      }}
    />
    <Stack.Screen
      name='SubOptionComplete'
      component={SubOptionCompleteScreen}
      options={{
        headerTitle: '구독 옵션 선택 완료',
      }}
    />
    <Stack.Screen
      name='Address'
      component={AddressScreen}
      options={{
        headerTitle: '배송지입력',
      }}
    />
    <Stack.Screen
      name='SubComplete'
      component={SubCompleteScreen}
      options={{
        headerTitle: '구독완료',
      }}
    />
  </Stack.Navigator>
);

export default DetailsNavigator;
