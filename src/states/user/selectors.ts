import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@/types/states';

export const userSelector = (state: RootState) => state.user;

export const selectUserName = createSelector(userSelector, (user) => user.name);
