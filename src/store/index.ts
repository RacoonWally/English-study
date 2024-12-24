import { configureStore } from '@reduxjs/toolkit';

import { appReducer } from './reducers/app/appReducer';
import { userReducer } from './reducers/user/userReducer';

export const store = configureStore({
    reducer: {
        app: appReducer,
        user: userReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

