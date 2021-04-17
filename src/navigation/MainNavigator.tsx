import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MainParamList } from './types';
import BottomTabNavigator from './BottomTabNavigator';

const Root = createStackNavigator<MainParamList>();

export const MainNavigator = () => (
  <Root.Navigator
    screenOptions={{
      headerShown: false,
      headerStyle: {
        backgroundColor: '#fff',
        shadowOffset: { height: 0, width: 0 },
        elevation: 0,
      },
    }}>
    <Root.Screen name="MainBottom" component={BottomTabNavigator} />
    {/* <Root.Screen
      name="AppModal"
      component={TempMainModalScreen}
      options={{
        headerShown: true,
        title: 'AppModal',
        headerTitleStyle: {
          // fontFamily: 'NotoSansKR-Medium',
          fontSize: 15,
          alignSelf: 'center',
        },
        headerLeft: null,
        headerRight: null,
      }}
    /> */}
  </Root.Navigator>
);

export default MainNavigator;
