export interface UserState {
    isAuthenticated: boolean;
    user: UserData | null;
}

export interface UserAction {
    type: UserActionsType;
    payload: UserPayloadType;
}

export enum UserActionsType {
    Login = 'LOGIN',
    Logout = 'LOGOUT',
}

export type UserPayloadType = UserState | null;

export interface UserData {
    name: string;
    email: string;
}
