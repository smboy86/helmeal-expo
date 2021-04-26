import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginHome from '../screens/LoginHomeScreen';
import SubOptionScreen from '../screens/SubOptionScreen';
import SubcribeScreen from '../screens/SubCompleteScreen';
import SubCompleteScreen from '../screens/SubcribeScreen';
import AddressScreen from '../screens/AddressScreen';

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
