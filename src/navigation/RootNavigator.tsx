/* eslint-disable no-nested-ternary */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import LoginNavigator from './LoginNavigator';
import MainNavigator from './MainNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { RootState } from '../store/RootReducer';

let customFonts = {
  NotoSansKRLight: require('../assets/fonts/NotoSansKR-Light.otf'),
  NotoSansKRMedium: require('../assets/fonts/NotoSansKR-Medium.otf'),
  NotoSansKRBold: require('../assets/fonts/NotoSansKR-Bold.otf'),
};

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
        await Font.loadAsync(customFonts);
      } catch (e) {
        console.log('RootNavigator error ::: ', e);
      } finally {
        setIsAppLoading(false);
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
      {/* {!tempStore.isLogin ? <LoginNavigator /> : <MainNavigator />} */}
      <MainNavigator />
    </NavigationContainer>
  );
}
