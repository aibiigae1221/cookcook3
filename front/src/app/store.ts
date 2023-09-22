import { configureStore, ThunkAction, Action, combineReducers, createStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import serverInfoReducer from '../features/meta/serverInfoSlice';
import userReducer from '../features/user/userSlice';
//import counterReducer from '../features/counter/counterSlice';
import sessionStorage from 'redux-persist/es/storage/session';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

const persistConfig = {
  key: "root",
  storage: sessionStorage
};

const rootReducer = combineReducers({
  serverInfo: serverInfoReducer,
  user: userReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

//export const store = createStore(persistedReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      },
    })
});
export const persistor = persistStore(store);

/*
export const store = configureStore({
  reducer: {
    //counter: counterReducer,
    serverInfo: serverInfoReducer,
    user:userReducer
  },
});
*/

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
