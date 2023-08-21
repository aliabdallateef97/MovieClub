import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import cookiesSlice from './slices/cookiesSlice'
import typeSlice from './slices/typeSlice'
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ["cookies"],
  };

  let reducer = combineReducers({
    cookies: cookiesSlice,
    type: typeSlice,
  });
  
  export const rootReducer = persistReducer(persistConfig, reducer);