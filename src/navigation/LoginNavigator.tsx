import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginHome from '../screens/LoginHomeScreen';

const LoginStack = createStackNavigator();

export const LoginNavigator = () => (
  <LoginStack.Navigator
    screenOptions={{
      animationEnabled: true,
      headerTintColor: '#000',
      headerStyle: {
        elevation: 0,
      },
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
      headerBackTitle: ' ',
    }}>
    <LoginStack.Screen name='LoginHome' component={LoginHome} />
  </LoginStack.Navigator>
);

export default LoginNavigator;
