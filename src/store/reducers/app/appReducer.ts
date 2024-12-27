import { AppState, PopupProps } from './types.ts';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AppState = {
    popupProps: null,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setPopup(state, action: PayloadAction<PopupProps | null>) {
            state.popupProps = action.payload;
        },
    },
});

export const { setPopup } = appSlice.actions;
export const appReducer = appSlice.reducer;
