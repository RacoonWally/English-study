import { configureStore } from '@reduxjs/toolkit';

import { appReducer } from './reducers/app/appReducer';
import { userReducer } from './reducers/user/userReducer';
import { userApi } from './api/userApi/userApi.ts';

export const store = configureStore({
    reducer: {
        app: appReducer,
        user: userReducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

