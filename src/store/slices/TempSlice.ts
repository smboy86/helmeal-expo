import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { merge } from 'lodash';
// service
// types
// import { ArtistStore, MyArtistDB } from '../../types';
// import { FBgetAllArtists, FBGetMyArtistList } from '../../api/FbApi';

const actionName = 'temp';

const initialState = {
  isLogin: false
};

// 1) thunk
// export const getMyArtistList = createAsyncThunk(
//   `${actionName}/getMyArtistList`, // 액션 이름을 정의해 주도록 합니다.
//   async (uid: string) => {
//     const doc = await FBGetMyArtistList(uid);

//     if (doc.exists) {
//       return doc.data();
//     } else {
//       return [];
//     }
//   }
// );

// 99) slice
const tempSlice = createSlice({
  name: `${actionName}`,
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ isLogin: boolean }>) {
      const { isLogin } = action.payload;
      state.isLogin = isLogin;
    },
  },
  extraReducers: {
    // [getMyArtistList.fulfilled.type]: (state, action) => {
    //   state.myArtistList = action.payload;
    // },
    // [getMyArtistList.rejected.type]: (state, action) => {
    //   // action.error > code, message, name, stack
    //   console.log('rejjjjjjjj  :: ', action.error.message);
    // },
    // [GetAllArtists.fulfilled.type]: (state, action) => {
    //   state.allArtistList = action.payload;
    // },
  },
});

export const { login } = tempSlice.actions;
export default tempSlice.reducer;

/*


// import { AppThunk } from '../store';

const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers(state) {
      state.inProgress = true;
      state.error = null;
    },
    getUsersSuccess(state, action: PayloadAction<{ users: User[] }>) {
      const { users } = action.payload;
      state.inProgress = false;
      state.users = users;
    },
    getUsersFailure(state, action: PayloadAction<string>) {
      state.inProgress = false;
      state.error = action.payload;
    },
  },
});
export const { getUsers, getUsersSuccess, getUsersFailure } = users.actions;
export default users.reducer;
// 썽크는 슬라이스로 안만들고 간단히 해부리네?? 와이??
export const fetchUsers = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getUsers());
    const users = await DummyService.getUsers();
    dispatch(getUsersSuccess({ users }));
  } catch (ex) {
    dispatch(getUsersFailure('error:' + ex));
  }
};
*/
