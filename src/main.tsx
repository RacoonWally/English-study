import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Подключение Provider

import { store } from './store'; // Наше хранилище

import { PageRouter } from './PageRouter.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <PageRouter />
        </Provider>
    </StrictMode>,
);
