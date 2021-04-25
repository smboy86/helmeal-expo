import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import firebase from 'firebase';

import RootNavigator from './src/navigation/RootNavigator';
import store, { persistor } from './src/store';

SplashScreen.preventAutoHideAsync();

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBOG2a8PcBXbMeHYPoBXZ7eU2bUt-PoPRg',
  authDomain: 'devpoi.firebaseapp.com',
  projectId: 'devpoi',
  storageBucket: 'devpoi.appspot.com',
  messagingSenderId: '812549016667',
  appId: '1:812549016667:web:c4b8ff69390ceebbae037e',
  measurementId: 'G-632G48ZWH0',
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle='dark-content' />
      <Provider {...{ store }}>
        <RootNavigator />
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
