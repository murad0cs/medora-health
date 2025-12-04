/**
 * Storage Utilities
 * Medora Health CRM
 */

const STORAGE_PREFIX = 'medora_';

/**
 * LocalStorage wrapper with JSON support
 */
export const storage = {
    /**
     * Get item from localStorage
     * @param {string} key - Storage key
     * @param {*} defaultValue - Default value if not found
     * @returns {*} Stored value or default
     */
    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(STORAGE_PREFIX + key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('Storage get error:', error);
            return defaultValue;
        }
    },

    /**
     * Set item in localStorage
     * @param {string} key - Storage key
     * @param {*} value - Value to store
     * @returns {boolean} Success status
     */
    set(key, value) {
        try {
            localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error('Storage set error:', error);
            return false;
        }
    },

    /**
     * Remove item from localStorage
     * @param {string} key - Storage key
     * @returns {boolean} Success status
     */
    remove(key) {
        try {
            localStorage.removeItem(STORAGE_PREFIX + key);
            return true;
        } catch (error) {
            console.error('Storage remove error:', error);
            return false;
        }
    },

    /**
     * Clear all app-related items from localStorage
     * @returns {boolean} Success status
     */
    clear() {
        try {
            Object.keys(localStorage)
                .filter(key => key.startsWith(STORAGE_PREFIX))
                .forEach(key => localStorage.removeItem(key));
            return true;
        } catch (error) {
            console.error('Storage clear error:', error);
            return false;
        }
    },

    /**
     * Check if key exists
     * @param {string} key - Storage key
     * @returns {boolean} Exists status
     */
    has(key) {
        return localStorage.getItem(STORAGE_PREFIX + key) !== null;
    }
};

/**
 * SessionStorage wrapper with JSON support
 */
export const sessionStore = {
    /**
     * Get item from sessionStorage
     * @param {string} key - Storage key
     * @param {*} defaultValue - Default value if not found
     * @returns {*} Stored value or default
     */
    get(key, defaultValue = null) {
        try {
            const item = sessionStorage.getItem(STORAGE_PREFIX + key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('Session storage get error:', error);
            return defaultValue;
        }
    },

    /**
     * Set item in sessionStorage
     * @param {string} key - Storage key
     * @param {*} value - Value to store
     * @returns {boolean} Success status
     */
    set(key, value) {
        try {
            sessionStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error('Session storage set error:', error);
            return false;
        }
    },

    /**
     * Remove item from sessionStorage
     * @param {string} key - Storage key
     * @returns {boolean} Success status
     */
    remove(key) {
        try {
            sessionStorage.removeItem(STORAGE_PREFIX + key);
            return true;
        } catch (error) {
            console.error('Session storage remove error:', error);
            return false;
        }
    },

    /**
     * Clear all app-related items from sessionStorage
     * @returns {boolean} Success status
     */
    clear() {
        try {
            Object.keys(sessionStorage)
                .filter(key => key.startsWith(STORAGE_PREFIX))
                .forEach(key => sessionStorage.removeItem(key));
            return true;
        } catch (error) {
            console.error('Session storage clear error:', error);
            return false;
        }
    }
};

/**
 * Cache with expiration support
 */
export const cache = {
    /**
     * Set cached item with expiration
     * @param {string} key - Cache key
     * @param {*} value - Value to cache
     * @param {number} ttl - Time to live in milliseconds
     * @returns {boolean} Success status
     */
    set(key, value, ttl = 3600000) { // Default 1 hour
        const item = {
            value,
            expiry: Date.now() + ttl
        };
        return storage.set(`cache_${key}`, item);
    },

    /**
     * Get cached item if not expired
     * @param {string} key - Cache key
     * @param {*} defaultValue - Default value if not found or expired
     * @returns {*} Cached value or default
     */
    get(key, defaultValue = null) {
        const item = storage.get(`cache_${key}`);
        if (!item) return defaultValue;
        
        if (Date.now() > item.expiry) {
            this.remove(key);
            return defaultValue;
        }
        
        return item.value;
    },

    /**
     * Remove cached item
     * @param {string} key - Cache key
     * @returns {boolean} Success status
     */
    remove(key) {
        return storage.remove(`cache_${key}`);
    },

    /**
     * Clear all cached items
     * @returns {boolean} Success status
     */
    clear() {
        try {
            Object.keys(localStorage)
                .filter(key => key.startsWith(`${STORAGE_PREFIX}cache_`))
                .forEach(key => localStorage.removeItem(key));
            return true;
        } catch (error) {
            console.error('Cache clear error:', error);
            return false;
        }
    }
};


 * Storage Utilities
 * Medora Health CRM
 */

const STORAGE_PREFIX = 'medora_';

/**
 * LocalStorage wrapper with JSON support
 */
export const storage = {
    /**
     * Get item from localStorage
     * @param {string} key - Storage key
     * @param {*} defaultValue - Default value if not found
     * @returns {*} Stored value or default
     */
    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(STORAGE_PREFIX + key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('Storage get error:', error);
            return defaultValue;
        }
    },

    /**
     * Set item in localStorage
     * @param {string} key - Storage key
     * @param {*} value - Value to store
     * @returns {boolean} Success status
     */
    set(key, value) {
        try {
            localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error('Storage set error:', error);
            return false;
        }
    },

    /**
     * Remove item from localStorage
     * @param {string} key - Storage key
     * @returns {boolean} Success status
     */
    remove(key) {
        try {
            localStorage.removeItem(STORAGE_PREFIX + key);
            return true;
        } catch (error) {
            console.error('Storage remove error:', error);
            return false;
        }
    },

    /**
     * Clear all app-related items from localStorage
     * @returns {boolean} Success status
     */
    clear() {
        try {
            Object.keys(localStorage)
                .filter(key => key.startsWith(STORAGE_PREFIX))
                .forEach(key => localStorage.removeItem(key));
            return true;
        } catch (error) {
            console.error('Storage clear error:', error);
            return false;
        }
    },

    /**
     * Check if key exists
     * @param {string} key - Storage key
     * @returns {boolean} Exists status
     */
    has(key) {
        return localStorage.getItem(STORAGE_PREFIX + key) !== null;
    }
};

/**
 * SessionStorage wrapper with JSON support
 */
export const sessionStore = {
    /**
     * Get item from sessionStorage
     * @param {string} key - Storage key
     * @param {*} defaultValue - Default value if not found
     * @returns {*} Stored value or default
     */
    get(key, defaultValue = null) {
        try {
            const item = sessionStorage.getItem(STORAGE_PREFIX + key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('Session storage get error:', error);
            return defaultValue;
        }
    },

    /**
     * Set item in sessionStorage
     * @param {string} key - Storage key
     * @param {*} value - Value to store
     * @returns {boolean} Success status
     */
    set(key, value) {
        try {
            sessionStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error('Session storage set error:', error);
            return false;
        }
    },

    /**
     * Remove item from sessionStorage
     * @param {string} key - Storage key
     * @returns {boolean} Success status
     */
    remove(key) {
        try {
            sessionStorage.removeItem(STORAGE_PREFIX + key);
            return true;
        } catch (error) {
            console.error('Session storage remove error:', error);
            return false;
        }
    },

    /**
     * Clear all app-related items from sessionStorage
     * @returns {boolean} Success status
     */
    clear() {
        try {
            Object.keys(sessionStorage)
                .filter(key => key.startsWith(STORAGE_PREFIX))
                .forEach(key => sessionStorage.removeItem(key));
            return true;
        } catch (error) {
            console.error('Session storage clear error:', error);
            return false;
        }
    }
};

/**
 * Cache with expiration support
 */
export const cache = {
    /**
     * Set cached item with expiration
     * @param {string} key - Cache key
     * @param {*} value - Value to cache
     * @param {number} ttl - Time to live in milliseconds
     * @returns {boolean} Success status
     */
    set(key, value, ttl = 3600000) { // Default 1 hour
        const item = {
            value,
            expiry: Date.now() + ttl
        };
        return storage.set(`cache_${key}`, item);
    },

    /**
     * Get cached item if not expired
     * @param {string} key - Cache key
     * @param {*} defaultValue - Default value if not found or expired
     * @returns {*} Cached value or default
     */
    get(key, defaultValue = null) {
        const item = storage.get(`cache_${key}`);
        if (!item) return defaultValue;
        
        if (Date.now() > item.expiry) {
            this.remove(key);
            return defaultValue;
        }
        
        return item.value;
    },

    /**
     * Remove cached item
     * @param {string} key - Cache key
     * @returns {boolean} Success status
     */
    remove(key) {
        return storage.remove(`cache_${key}`);
    },

    /**
     * Clear all cached items
     * @returns {boolean} Success status
     */
    clear() {
        try {
            Object.keys(localStorage)
                .filter(key => key.startsWith(`${STORAGE_PREFIX}cache_`))
                .forEach(key => localStorage.removeItem(key));
            return true;
        } catch (error) {
            console.error('Cache clear error:', error);
            return false;
        }
    }
};

