import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
    ],
    server: {
        host: '0.0.0.0',   // supaya bisa diakses dari semua IP di jaringan
        port: 5173,        // default vite port
        hmr: {
            host: '192.168.0.101', // IP lokal kamu
        },
    },
});
