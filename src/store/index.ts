import { configureStore, Action } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
// middleware
import thunk, { ThunkAction } from 'redux-thunk';
import logger from 'redux-logger';
// storage
import AsyncStorage from '@react-native-async-storage/async-storage';
// root reducer
import RootReducer, { RootState } from './RootReducer';

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

const persistConfig = {
  storage: AsyncStorage,
  timeout: 0,
  key: 'my_app',
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const arrMiddlewares = [thunk, logger];

const store = configureStore({
  reducer: persistedReducer,
  // middleware: [thunk, logger],
  middleware: arrMiddlewares,
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export default store;
