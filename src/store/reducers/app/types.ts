export interface AppState {
    theme: Theme;
    language: Language;
}

export interface AppAction {
    type: AppActionsType;
    payload: AppPayloadType;
}

export enum AppActionsType {
    SetTheme = 'SET_THEME',
    SetLanguage = 'SET_LANGUAGE',
}

export type AppPayloadType = Theme | Language;

export enum Theme {
    Light = 'light',
    Dark = 'dark',
}

export enum Language {
    En = 'en',
    Ru = 'ru',
}

