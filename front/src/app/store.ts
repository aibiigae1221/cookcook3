import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import serverInfoReducer from '../features/meta/serverInfoSlice';
//import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    //counter: counterReducer,
    serverInfo: serverInfoReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
