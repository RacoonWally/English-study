export interface AppState {
    popupProps: PopupProps | null;
}

export interface PopupProps {
    popupType: string;
    data: any;
}
