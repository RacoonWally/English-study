export interface AppState {
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

export type AppPayloadType = Language;

export enum Language {
    En = 'en',
    Ru = 'ru',
}
