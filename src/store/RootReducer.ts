import { combineReducers } from '@reduxjs/toolkit';
import TempSlice from './slices/TempSlice';

// combine all reducers into a single state object
const RootReducer = combineReducers({
  temp: TempSlice,
});

// export root reducer's state type
export type RootState = ReturnType<typeof RootReducer>;

// Add reset Store
// export default RootReducer;
export default (state, action) =>
  RootReducer(action.type === 'USER_LOGOUT' ? undefined : state, action);