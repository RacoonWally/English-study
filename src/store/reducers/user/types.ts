export interface UserState {
    isAuthenticated: boolean;
    user: UserData | null;
    loading: boolean;
    error: string | null;
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

export interface AuthData {
    login: string;
    password: string;
}

export interface UserData {
    name: string;
    email: string;
}

export interface RegisterData {
    name: string;
    email: string;
    password: string;
}
