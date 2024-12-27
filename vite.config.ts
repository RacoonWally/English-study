import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                // Глобальные переменные или миксины, которые будут доступны во всех SCSS-файлах
                additionalData: `@use '@root/variables.scss' as *;`,
            },
        },
    },
    resolve: {
        alias: {
            '@root': path.resolve(__dirname, './src'),
        },
    },
})
