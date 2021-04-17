/* eslint-disable no-nested-ternary */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';

import LoginNavigator from './LoginNavigator';
import MainNavigator from './MainNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { RootState } from '../store/RootReducer';

const AuthStack = createStackNavigator();

export default function RootNavigator() {
  const dispatch = useDispatch();
  const tempStore = useSelector((state: RootState) => state.temp);
  // const artistStore = useSelector((state: RootState) => state.artist);
  const [isAppLoading, setIsAppLoading] = React.useState(true);

  React.useEffect(() => {
    const appLoad = async () => {
      try {
        // 작동 안함 ㅋ app.tsx 에서 강제로 넣음
        // await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.log('RootNavigator error ::: ', e);
      } finally {
        setIsAppLoading(false); // 1) 앱 로딩
        setTimeout(() => {
          SplashScreen.hideAsync();
        }, 1400);
      }
    };

    appLoad();
  }, [isAppLoading]);

  if (isAppLoading) return null;

  return (
    <NavigationContainer>
      {!tempStore.isLogin ? <LoginNavigator /> : <MainNavigator />}
    </NavigationContainer>
  );
}
