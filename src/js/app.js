/**
 * Main Application Entry Point
 * Medora Health CRM
 */

// Import utilities
import { debounce, formatDate, formatRelativeTime } from './utils/helpers.js';
import { storage, sessionStore, cache } from './utils/storage.js';
import { api, mockData } from './utils/api.js';

// Import components
import { renderNavbar, initNavbar } from './components/navbar.js';
import toast from './components/toast.js';
import modal from './components/modal.js';

/**
 * Application namespace
 */
const MedoraApp = {
    // Version
    version: '1.0.0',
    
    // Utilities
    utils: {
        debounce,
        formatDate,
        formatRelativeTime
    },
    
    // Storage
    storage,
    sessionStore,
    cache,
    
    // API
    api,
    mockData,
    
    // UI Components
    ui: {
        toast,
        modal,
        
        /**
         * Show notification (alias for toast)
         */
        showNotification(message, type = 'info') {
            return toast[type] ? toast[type](message) : toast.info(message);
        }
    },
    
    // Navigation
    nav: {
        /**
         * Navigate to page
         * @param {string} path - Page path
         */
        to(path) {
            window.location.href = path;
        },
        
        /**
         * Go back
         */
        back() {
            if (window.history.length > 1) {
                window.history.back();
            } else {
                this.to('/src/pages/index.html');
            }
        },
        
        /**
         * Get current page name
         * @returns {string} Page name
         */
        getCurrentPage() {
            const path = window.location.pathname;
            const pageName = path.split('/').pop().replace('.html', '');
            return pageName || 'index';
        }
    },
    
    /**
     * Initialize application
     * @param {object} options - Init options
     */
    init(options = {}) {
        const {
            navbar = true,
            navbarOptions = {}
        } = options;
        
        // Wait for DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this._setup(navbar, navbarOptions));
        } else {
            this._setup(navbar, navbarOptions);
        }
        
        console.log(`Medora Health CRM v${this.version} initialized`);
    },
    
    /**
     * Internal setup
     * @private
     */
    _setup(navbar, navbarOptions) {
        // Render navbar if needed
        if (navbar) {
            const navContainer = document.getElementById('navbar-container');
            if (navContainer) {
                renderNavbar(navContainer, {
                    notificationCount: 3,
                    ...navbarOptions
                });
            } else {
                // If no container, initialize existing navbar
                initNavbar();
            }
        }
        
        // Initialize global event listeners
        this._initGlobalEvents();
        
        // Mark active nav item
        this._markActiveNavItem();
    },
    
    /**
     * Initialize global event listeners
     * @private
     */
    _initGlobalEvents() {
        // Handle all clicks for navigation
        document.addEventListener('click', (e) => {
            const link = e.target.closest('[data-nav]');
            if (link) {
                e.preventDefault();
                this.nav.to(link.dataset.nav);
            }
        });
        
        // Handle back buttons
        document.addEventListener('click', (e) => {
            const backBtn = e.target.closest('[data-back]');
            if (backBtn) {
                e.preventDefault();
                this.nav.back();
            }
        });
        
        // Handle form submissions
        document.addEventListener('submit', (e) => {
            const form = e.target;
            if (form.dataset.async !== undefined) {
                e.preventDefault();
                // TODO: Handle async form submission
            }
        });
    },
    
    /**
     * Mark active navigation item
     * @private
     */
    _markActiveNavItem() {
        const currentPage = this.nav.getCurrentPage();
        const navItems = document.querySelectorAll('.sidebar-nav-item, .nav-item');
        
        navItems.forEach(item => {
            const href = item.getAttribute('href') || '';
            if (href.includes(currentPage)) {
                item.classList.add('active');
            }
        });
    }
};

// Export for ES modules
export default MedoraApp;

// Also attach to window for non-module usage
if (typeof window !== 'undefined') {
    window.MedoraApp = MedoraApp;
}


 * Main Application Entry Point
 * Medora Health CRM
 */

// Import utilities
import { debounce, formatDate, formatRelativeTime } from './utils/helpers.js';
import { storage, sessionStore, cache } from './utils/storage.js';
import { api, mockData } from './utils/api.js';

// Import components
import { renderNavbar, initNavbar } from './components/navbar.js';
import toast from './components/toast.js';
import modal from './components/modal.js';

/**
 * Application namespace
 */
const MedoraApp = {
    // Version
    version: '1.0.0',
    
    // Utilities
    utils: {
        debounce,
        formatDate,
        formatRelativeTime
    },
    
    // Storage
    storage,
    sessionStore,
    cache,
    
    // API
    api,
    mockData,
    
    // UI Components
    ui: {
        toast,
        modal,
        
        /**
         * Show notification (alias for toast)
         */
        showNotification(message, type = 'info') {
            return toast[type] ? toast[type](message) : toast.info(message);
        }
    },
    
    // Navigation
    nav: {
        /**
         * Navigate to page
         * @param {string} path - Page path
         */
        to(path) {
            window.location.href = path;
        },
        
        /**
         * Go back
         */
        back() {
            if (window.history.length > 1) {
                window.history.back();
            } else {
                this.to('/src/pages/index.html');
            }
        },
        
        /**
         * Get current page name
         * @returns {string} Page name
         */
        getCurrentPage() {
            const path = window.location.pathname;
            const pageName = path.split('/').pop().replace('.html', '');
            return pageName || 'index';
        }
    },
    
    /**
     * Initialize application
     * @param {object} options - Init options
     */
    init(options = {}) {
        const {
            navbar = true,
            navbarOptions = {}
        } = options;
        
        // Wait for DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this._setup(navbar, navbarOptions));
        } else {
            this._setup(navbar, navbarOptions);
        }
        
        console.log(`Medora Health CRM v${this.version} initialized`);
    },
    
    /**
     * Internal setup
     * @private
     */
    _setup(navbar, navbarOptions) {
        // Render navbar if needed
        if (navbar) {
            const navContainer = document.getElementById('navbar-container');
            if (navContainer) {
                renderNavbar(navContainer, {
                    notificationCount: 3,
                    ...navbarOptions
                });
            } else {
                // If no container, initialize existing navbar
                initNavbar();
            }
        }
        
        // Initialize global event listeners
        this._initGlobalEvents();
        
        // Mark active nav item
        this._markActiveNavItem();
    },
    
    /**
     * Initialize global event listeners
     * @private
     */
    _initGlobalEvents() {
        // Handle all clicks for navigation
        document.addEventListener('click', (e) => {
            const link = e.target.closest('[data-nav]');
            if (link) {
                e.preventDefault();
                this.nav.to(link.dataset.nav);
            }
        });
        
        // Handle back buttons
        document.addEventListener('click', (e) => {
            const backBtn = e.target.closest('[data-back]');
            if (backBtn) {
                e.preventDefault();
                this.nav.back();
            }
        });
        
        // Handle form submissions
        document.addEventListener('submit', (e) => {
            const form = e.target;
            if (form.dataset.async !== undefined) {
                e.preventDefault();
                // TODO: Handle async form submission
            }
        });
    },
    
    /**
     * Mark active navigation item
     * @private
     */
    _markActiveNavItem() {
        const currentPage = this.nav.getCurrentPage();
        const navItems = document.querySelectorAll('.sidebar-nav-item, .nav-item');
        
        navItems.forEach(item => {
            const href = item.getAttribute('href') || '';
            if (href.includes(currentPage)) {
                item.classList.add('active');
            }
        });
    }
};

// Export for ES modules
export default MedoraApp;

// Also attach to window for non-module usage
if (typeof window !== 'undefined') {
    window.MedoraApp = MedoraApp;
}

