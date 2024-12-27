import { AppState, Language } from './types.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AppState = {
    language: Language.Ru,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLanguage(state, action: PayloadAction<Language>) {
            state.language = action.payload;
        },
    },
});

export const { setLanguage } = appSlice.actions;
export const appReducer = appSlice.reducer;
