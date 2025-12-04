/**
 * API Utilities
 * Medora Health CRM
 * 
 * Note: This is a template for API integration.
 * Currently using mock data for demonstration.
 */

const API_BASE_URL = '/api';
const DEFAULT_TIMEOUT = 30000;

/**
 * Custom API Error class
 */
export class ApiError extends Error {
    constructor(message, status, data = null) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.data = data;
    }
}

/**
 * Fetch wrapper with timeout and error handling
 * @param {string} url - Request URL
 * @param {object} options - Fetch options
 * @returns {Promise<object>} Response data
 */
async function fetchWithTimeout(url, options = {}) {
    const { timeout = DEFAULT_TIMEOUT, ...fetchOptions } = options;
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, {
            ...fetchOptions,
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            throw new ApiError(
                errorData?.message || `HTTP error ${response.status}`,
                response.status,
                errorData
            );
        }
        
        return response.json();
    } catch (error) {
        clearTimeout(timeoutId);
        
        if (error.name === 'AbortError') {
            throw new ApiError('Request timeout', 408);
        }
        
        throw error;
    }
}

/**
 * API client
 */
export const api = {
    /**
     * GET request
     * @param {string} endpoint - API endpoint
     * @param {object} params - Query parameters
     * @returns {Promise<object>} Response data
     */
    async get(endpoint, params = {}) {
        const url = new URL(API_BASE_URL + endpoint, window.location.origin);
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                url.searchParams.append(key, value);
            }
        });
        
        return fetchWithTimeout(url.toString(), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.getAuthHeaders()
            }
        });
    },

    /**
     * POST request
     * @param {string} endpoint - API endpoint
     * @param {object} data - Request body
     * @returns {Promise<object>} Response data
     */
    async post(endpoint, data = {}) {
        return fetchWithTimeout(API_BASE_URL + endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...this.getAuthHeaders()
            },
            body: JSON.stringify(data)
        });
    },

    /**
     * PUT request
     * @param {string} endpoint - API endpoint
     * @param {object} data - Request body
     * @returns {Promise<object>} Response data
     */
    async put(endpoint, data = {}) {
        return fetchWithTimeout(API_BASE_URL + endpoint, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...this.getAuthHeaders()
            },
            body: JSON.stringify(data)
        });
    },

    /**
     * DELETE request
     * @param {string} endpoint - API endpoint
     * @returns {Promise<object>} Response data
     */
    async delete(endpoint) {
        return fetchWithTimeout(API_BASE_URL + endpoint, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                ...this.getAuthHeaders()
            }
        });
    },

    /**
     * Get authentication headers
     * @returns {object} Auth headers
     */
    getAuthHeaders() {
        // TODO: Implement actual auth token retrieval
        const token = localStorage.getItem('auth_token');
        return token ? { Authorization: `Bearer ${token}` } : {};
    }
};

/**
 * Mock data for development
 * Remove in production and use actual API calls
 */
export const mockData = {
    patients: [
        { id: 'BJ-30s', name: '李敏', age: 45, gender: '男', disease: '高血压', status: 'urgent' },
        { id: 'BJ-31s', name: '王芳', age: 32, gender: '女', disease: '糖尿病', status: 'processing' },
        { id: 'BJ-32s', name: '张伟', age: 28, gender: '男', disease: '体检', status: 'completed' }
    ],
    
    cases: [
        { id: 'C-2025-0101', patientId: 'BJ-30s', status: '分诊中', priority: 'high', createdAt: '2025-10-15' },
        { id: 'C-2025-0102', patientId: 'BJ-31s', status: '处理中', priority: 'medium', createdAt: '2025-10-14' },
        { id: 'C-2025-0103', patientId: 'BJ-32s', status: '已完成', priority: 'low', createdAt: '2025-10-13' }
    ],
    
    messages: [
        { id: 1, from: '护士站', preview: '静脉肿胀需要紧急关注', time: '10分钟前', unread: true },
        { id: 2, from: '药房', preview: '处方调整通知', time: '25分钟前', unread: true },
        { id: 3, from: '检验科', preview: '检验报告已出', time: '1小时前', unread: false }
    ],
    
    appointments: [
        { id: 1, time: '09:00', patient: '李敏', type: '复诊', status: 'confirmed' },
        { id: 2, time: '09:30', patient: '王芳', type: '复诊', status: 'confirmed' },
        { id: 3, time: '10:00', patient: '张伟', type: '初诊', status: 'pending' }
    ]
};


 * API Utilities
 * Medora Health CRM
 * 
 * Note: This is a template for API integration.
 * Currently using mock data for demonstration.
 */

const API_BASE_URL = '/api';
const DEFAULT_TIMEOUT = 30000;

/**
 * Custom API Error class
 */
export class ApiError extends Error {
    constructor(message, status, data = null) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.data = data;
    }
}

/**
 * Fetch wrapper with timeout and error handling
 * @param {string} url - Request URL
 * @param {object} options - Fetch options
 * @returns {Promise<object>} Response data
 */
async function fetchWithTimeout(url, options = {}) {
    const { timeout = DEFAULT_TIMEOUT, ...fetchOptions } = options;
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, {
            ...fetchOptions,
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            throw new ApiError(
                errorData?.message || `HTTP error ${response.status}`,
                response.status,
                errorData
            );
        }
        
        return response.json();
    } catch (error) {
        clearTimeout(timeoutId);
        
        if (error.name === 'AbortError') {
            throw new ApiError('Request timeout', 408);
        }
        
        throw error;
    }
}

/**
 * API client
 */
export const api = {
    /**
     * GET request
     * @param {string} endpoint - API endpoint
     * @param {object} params - Query parameters
     * @returns {Promise<object>} Response data
     */
    async get(endpoint, params = {}) {
        const url = new URL(API_BASE_URL + endpoint, window.location.origin);
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                url.searchParams.append(key, value);
            }
        });
        
        return fetchWithTimeout(url.toString(), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.getAuthHeaders()
            }
        });
    },

    /**
     * POST request
     * @param {string} endpoint - API endpoint
     * @param {object} data - Request body
     * @returns {Promise<object>} Response data
     */
    async post(endpoint, data = {}) {
        return fetchWithTimeout(API_BASE_URL + endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...this.getAuthHeaders()
            },
            body: JSON.stringify(data)
        });
    },

    /**
     * PUT request
     * @param {string} endpoint - API endpoint
     * @param {object} data - Request body
     * @returns {Promise<object>} Response data
     */
    async put(endpoint, data = {}) {
        return fetchWithTimeout(API_BASE_URL + endpoint, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...this.getAuthHeaders()
            },
            body: JSON.stringify(data)
        });
    },

    /**
     * DELETE request
     * @param {string} endpoint - API endpoint
     * @returns {Promise<object>} Response data
     */
    async delete(endpoint) {
        return fetchWithTimeout(API_BASE_URL + endpoint, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                ...this.getAuthHeaders()
            }
        });
    },

    /**
     * Get authentication headers
     * @returns {object} Auth headers
     */
    getAuthHeaders() {
        // TODO: Implement actual auth token retrieval
        const token = localStorage.getItem('auth_token');
        return token ? { Authorization: `Bearer ${token}` } : {};
    }
};

/**
 * Mock data for development
 * Remove in production and use actual API calls
 */
export const mockData = {
    patients: [
        { id: 'BJ-30s', name: '李敏', age: 45, gender: '男', disease: '高血压', status: 'urgent' },
        { id: 'BJ-31s', name: '王芳', age: 32, gender: '女', disease: '糖尿病', status: 'processing' },
        { id: 'BJ-32s', name: '张伟', age: 28, gender: '男', disease: '体检', status: 'completed' }
    ],
    
    cases: [
        { id: 'C-2025-0101', patientId: 'BJ-30s', status: '分诊中', priority: 'high', createdAt: '2025-10-15' },
        { id: 'C-2025-0102', patientId: 'BJ-31s', status: '处理中', priority: 'medium', createdAt: '2025-10-14' },
        { id: 'C-2025-0103', patientId: 'BJ-32s', status: '已完成', priority: 'low', createdAt: '2025-10-13' }
    ],
    
    messages: [
        { id: 1, from: '护士站', preview: '静脉肿胀需要紧急关注', time: '10分钟前', unread: true },
        { id: 2, from: '药房', preview: '处方调整通知', time: '25分钟前', unread: true },
        { id: 3, from: '检验科', preview: '检验报告已出', time: '1小时前', unread: false }
    ],
    
    appointments: [
        { id: 1, time: '09:00', patient: '李敏', type: '复诊', status: 'confirmed' },
        { id: 2, time: '09:30', patient: '王芳', type: '复诊', status: 'confirmed' },
        { id: 3, time: '10:00', patient: '张伟', type: '初诊', status: 'pending' }
    ]
};

