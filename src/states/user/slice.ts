import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User } from '@/types/user';

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, { payload }: PayloadAction<User['name']>) => {
      return {
        ...state,
        name: payload,
      };
    },
  },
});

export const userActions = userSlice.actions;
export const { setUserName } = userSlice.actions;
export default userSlice;
