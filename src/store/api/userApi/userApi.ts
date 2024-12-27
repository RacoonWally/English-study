import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthData, RegisterData } from '../../reducers/user/types.ts';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com' }),
    endpoints: builder => ({
        login: builder.mutation({
            // query: (authData) => ({
            //     url: PageRoutesPaths.AuthPage,
            //     method: 'POST',
            //     body: authData,
            // }),
            queryFn: async (authData: AuthData) => {
                await new Promise(resolve => setTimeout(resolve, 500));

                if (authData.login === '1' && authData.password === '2') {
                    return {
                        data: {
                            token: 'fake-jwt-token',
                            isAuthenticated: true,
                            user: { name: 'John Doe', email: 'test@example.com' },
                        },
                    };
                } else {
                    return {
                        error: {
                            status: 401,
                            data: 'Invalid credentials',
                        },
                    };
                }
            },
        }),
        register: builder.mutation({
            queryFn: async (registerData: RegisterData) => {
                await new Promise(resolve => setTimeout(resolve, 500));

                return {
                    data: {
                        token: 'fake-jwt-token',
                        isAuthenticated: true,
                        user: { name: registerData.name, email: registerData.email },
                    },
                };
            },
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = userApi;
