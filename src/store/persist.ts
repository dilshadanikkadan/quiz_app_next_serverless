import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistConfig } from 'redux-persist';
import { userReducer } from './slices/user';
import { quizReducer } from './slices/quiz';


const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedQuizReducer = persistReducer(persistConfig, quizReducer);

export const store = configureStore({
  reducer: {
    user:persistedUserReducer,
    quiz:persistedQuizReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
