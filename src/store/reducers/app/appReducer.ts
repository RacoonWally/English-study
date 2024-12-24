import { AppState, Language, Theme } from './types.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AppState = {
    theme: Theme.Light,
    language: Language.Ru,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setTheme(state, action: PayloadAction<Theme>) {
            state.theme = action.payload;
        },
        setLanguage(state, action: PayloadAction<Language>) {
            state.language = action.payload;
        },
    },
});

export const { setTheme, setLanguage } = appSlice.actions;
export const appReducer = appSlice.reducer;