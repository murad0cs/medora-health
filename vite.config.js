import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    // Base public path
    base: '/',
    
    // Source directory
    root: 'src',
    
    // Build configuration
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        
        // Generate source maps for debugging
        sourcemap: true,
        
        // Rollup options for multi-page app
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/pages/index.html'),
                dashboard: resolve(__dirname, 'src/pages/dashboard.html'),
                caseList: resolve(__dirname, 'src/pages/case-list.html'),
                caseDetail: resolve(__dirname, 'src/pages/case-detail.html'),
                messages: resolve(__dirname, 'src/pages/messages.html'),
                appointments: resolve(__dirname, 'src/pages/appointments.html'),
                reports: resolve(__dirname, 'src/pages/reports.html'),
                doctorPreview: resolve(__dirname, 'src/pages/doctor-preview.html'),
                uiKit: resolve(__dirname, 'src/pages/ui-kit.html')
            }
        },
        
        // CSS code splitting
        cssCodeSplit: true,
        
        // Minification
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        }
    },
    
    // Development server
    server: {
        port: 3000,
        open: '/pages/index.html',
        cors: true
    },
    
    // Preview server (for built files)
    preview: {
        port: 4173
    },
    
    // CSS configuration
    css: {
        devSourcemap: true
    },
    
    // Resolve aliases
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@css': resolve(__dirname, 'src/css'),
            '@js': resolve(__dirname, 'src/js'),
            '@components': resolve(__dirname, 'src/js/components'),
            '@utils': resolve(__dirname, 'src/js/utils'),
            '@pages': resolve(__dirname, 'src/pages')
        }
    },
    
    // Plugins (add as needed)
    plugins: []
});


import { resolve } from 'path';

export default defineConfig({
    // Base public path
    base: '/',
    
    // Source directory
    root: 'src',
    
    // Build configuration
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        
        // Generate source maps for debugging
        sourcemap: true,
        
        // Rollup options for multi-page app
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/pages/index.html'),
                dashboard: resolve(__dirname, 'src/pages/dashboard.html'),
                caseList: resolve(__dirname, 'src/pages/case-list.html'),
                caseDetail: resolve(__dirname, 'src/pages/case-detail.html'),
                messages: resolve(__dirname, 'src/pages/messages.html'),
                appointments: resolve(__dirname, 'src/pages/appointments.html'),
                reports: resolve(__dirname, 'src/pages/reports.html'),
                doctorPreview: resolve(__dirname, 'src/pages/doctor-preview.html'),
                uiKit: resolve(__dirname, 'src/pages/ui-kit.html')
            }
        },
        
        // CSS code splitting
        cssCodeSplit: true,
        
        // Minification
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        }
    },
    
    // Development server
    server: {
        port: 3000,
        open: '/pages/index.html',
        cors: true
    },
    
    // Preview server (for built files)
    preview: {
        port: 4173
    },
    
    // CSS configuration
    css: {
        devSourcemap: true
    },
    
    // Resolve aliases
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@css': resolve(__dirname, 'src/css'),
            '@js': resolve(__dirname, 'src/js'),
            '@components': resolve(__dirname, 'src/js/components'),
            '@utils': resolve(__dirname, 'src/js/utils'),
            '@pages': resolve(__dirname, 'src/pages')
        }
    },
    
    // Plugins (add as needed)
    plugins: []
});

