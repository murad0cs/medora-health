/**
 * Toast Notification Component
 * Medora Health CRM
 */

const TOAST_CONTAINER_ID = 'toast-container';
const DEFAULT_DURATION = 3000;

/**
 * Toast types with icons
 */
const TOAST_TYPES = {
    success: {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>`,
        class: 'toast-success'
    },
    error: {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>`,
        class: 'toast-error'
    },
    warning: {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>`,
        class: 'toast-warning'
    },
    info: {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>`,
        class: 'toast-info'
    }
};

/**
 * Create toast container if not exists
 * @returns {HTMLElement} Toast container
 */
function getOrCreateContainer() {
    let container = document.getElementById(TOAST_CONTAINER_ID);
    
    if (!container) {
        container = document.createElement('div');
        container.id = TOAST_CONTAINER_ID;
        container.className = 'toast-container';
        container.setAttribute('aria-live', 'polite');
        container.setAttribute('aria-atomic', 'true');
        document.body.appendChild(container);
        
        // Add container styles if not already in CSS
        if (!document.getElementById('toast-styles')) {
            const styles = document.createElement('style');
            styles.id = 'toast-styles';
            styles.textContent = `
                .toast-container {
                    position: fixed;
                    top: calc(var(--navbar-height, 64px) + var(--space-4, 16px));
                    right: var(--space-4, 16px);
                    z-index: var(--z-toast, 800);
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-3, 12px);
                    pointer-events: none;
                }
                
                .toast {
                    display: flex;
                    align-items: center;
                    gap: var(--space-3, 12px);
                    padding: var(--space-3, 12px) var(--space-4, 16px);
                    background: var(--bg-card, #fff);
                    border-radius: var(--radius-lg, 12px);
                    box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
                    pointer-events: auto;
                    animation: toastSlideIn 0.3s ease;
                    max-width: 400px;
                }
                
                .toast.toast-exit {
                    animation: toastSlideOut 0.3s ease forwards;
                }
                
                .toast-icon {
                    width: 20px;
                    height: 20px;
                    flex-shrink: 0;
                }
                
                .toast-icon svg {
                    width: 100%;
                    height: 100%;
                }
                
                .toast-message {
                    flex: 1;
                    font-size: var(--font-size-sm, 14px);
                    color: var(--text-primary, #1a1f1f);
                }
                
                .toast-close {
                    width: 20px;
                    height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--text-tertiary, #758585);
                    cursor: pointer;
                    border-radius: var(--radius-sm, 4px);
                    transition: all 0.2s;
                }
                
                .toast-close:hover {
                    background: var(--bg-tertiary, #f1f5f5);
                    color: var(--text-primary, #1a1f1f);
                }
                
                .toast-success .toast-icon { color: var(--color-success, #4caf50); }
                .toast-error .toast-icon { color: var(--color-error, #f44336); }
                .toast-warning .toast-icon { color: var(--color-warning, #ff9800); }
                .toast-info .toast-icon { color: var(--color-info, #2196f3); }
                
                @keyframes toastSlideIn {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @keyframes toastSlideOut {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(styles);
        }
    }
    
    return container;
}

/**
 * Show toast notification
 * @param {string} message - Toast message
 * @param {string} type - Toast type (success, error, warning, info)
 * @param {number} duration - Duration in milliseconds
 * @returns {HTMLElement} Toast element
 */
export function showToast(message, type = 'info', duration = DEFAULT_DURATION) {
    const container = getOrCreateContainer();
    const toastType = TOAST_TYPES[type] || TOAST_TYPES.info;
    
    const toast = document.createElement('div');
    toast.className = `toast ${toastType.class}`;
    toast.innerHTML = `
        <div class="toast-icon">${toastType.icon}</div>
        <div class="toast-message">${message}</div>
        <button class="toast-close" aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    `;
    
    // Close button handler
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => removeToast(toast));
    
    container.appendChild(toast);
    
    // Auto remove after duration
    if (duration > 0) {
        setTimeout(() => removeToast(toast), duration);
    }
    
    return toast;
}

/**
 * Remove toast with animation
 * @param {HTMLElement} toast - Toast element
 */
function removeToast(toast) {
    if (!toast || toast.classList.contains('toast-exit')) return;
    
    toast.classList.add('toast-exit');
    toast.addEventListener('animationend', () => {
        toast.remove();
    });
}

/**
 * Convenience methods
 */
export const toast = {
    success: (message, duration) => showToast(message, 'success', duration),
    error: (message, duration) => showToast(message, 'error', duration),
    warning: (message, duration) => showToast(message, 'warning', duration),
    info: (message, duration) => showToast(message, 'info', duration)
};

export default toast;


 * Toast Notification Component
 * Medora Health CRM
 */

const TOAST_CONTAINER_ID = 'toast-container';
const DEFAULT_DURATION = 3000;

/**
 * Toast types with icons
 */
const TOAST_TYPES = {
    success: {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>`,
        class: 'toast-success'
    },
    error: {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>`,
        class: 'toast-error'
    },
    warning: {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>`,
        class: 'toast-warning'
    },
    info: {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>`,
        class: 'toast-info'
    }
};

/**
 * Create toast container if not exists
 * @returns {HTMLElement} Toast container
 */
function getOrCreateContainer() {
    let container = document.getElementById(TOAST_CONTAINER_ID);
    
    if (!container) {
        container = document.createElement('div');
        container.id = TOAST_CONTAINER_ID;
        container.className = 'toast-container';
        container.setAttribute('aria-live', 'polite');
        container.setAttribute('aria-atomic', 'true');
        document.body.appendChild(container);
        
        // Add container styles if not already in CSS
        if (!document.getElementById('toast-styles')) {
            const styles = document.createElement('style');
            styles.id = 'toast-styles';
            styles.textContent = `
                .toast-container {
                    position: fixed;
                    top: calc(var(--navbar-height, 64px) + var(--space-4, 16px));
                    right: var(--space-4, 16px);
                    z-index: var(--z-toast, 800);
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-3, 12px);
                    pointer-events: none;
                }
                
                .toast {
                    display: flex;
                    align-items: center;
                    gap: var(--space-3, 12px);
                    padding: var(--space-3, 12px) var(--space-4, 16px);
                    background: var(--bg-card, #fff);
                    border-radius: var(--radius-lg, 12px);
                    box-shadow: var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
                    pointer-events: auto;
                    animation: toastSlideIn 0.3s ease;
                    max-width: 400px;
                }
                
                .toast.toast-exit {
                    animation: toastSlideOut 0.3s ease forwards;
                }
                
                .toast-icon {
                    width: 20px;
                    height: 20px;
                    flex-shrink: 0;
                }
                
                .toast-icon svg {
                    width: 100%;
                    height: 100%;
                }
                
                .toast-message {
                    flex: 1;
                    font-size: var(--font-size-sm, 14px);
                    color: var(--text-primary, #1a1f1f);
                }
                
                .toast-close {
                    width: 20px;
                    height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--text-tertiary, #758585);
                    cursor: pointer;
                    border-radius: var(--radius-sm, 4px);
                    transition: all 0.2s;
                }
                
                .toast-close:hover {
                    background: var(--bg-tertiary, #f1f5f5);
                    color: var(--text-primary, #1a1f1f);
                }
                
                .toast-success .toast-icon { color: var(--color-success, #4caf50); }
                .toast-error .toast-icon { color: var(--color-error, #f44336); }
                .toast-warning .toast-icon { color: var(--color-warning, #ff9800); }
                .toast-info .toast-icon { color: var(--color-info, #2196f3); }
                
                @keyframes toastSlideIn {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @keyframes toastSlideOut {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(styles);
        }
    }
    
    return container;
}

/**
 * Show toast notification
 * @param {string} message - Toast message
 * @param {string} type - Toast type (success, error, warning, info)
 * @param {number} duration - Duration in milliseconds
 * @returns {HTMLElement} Toast element
 */
export function showToast(message, type = 'info', duration = DEFAULT_DURATION) {
    const container = getOrCreateContainer();
    const toastType = TOAST_TYPES[type] || TOAST_TYPES.info;
    
    const toast = document.createElement('div');
    toast.className = `toast ${toastType.class}`;
    toast.innerHTML = `
        <div class="toast-icon">${toastType.icon}</div>
        <div class="toast-message">${message}</div>
        <button class="toast-close" aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    `;
    
    // Close button handler
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => removeToast(toast));
    
    container.appendChild(toast);
    
    // Auto remove after duration
    if (duration > 0) {
        setTimeout(() => removeToast(toast), duration);
    }
    
    return toast;
}

/**
 * Remove toast with animation
 * @param {HTMLElement} toast - Toast element
 */
function removeToast(toast) {
    if (!toast || toast.classList.contains('toast-exit')) return;
    
    toast.classList.add('toast-exit');
    toast.addEventListener('animationend', () => {
        toast.remove();
    });
}

/**
 * Convenience methods
 */
export const toast = {
    success: (message, duration) => showToast(message, 'success', duration),
    error: (message, duration) => showToast(message, 'error', duration),
    warning: (message, duration) => showToast(message, 'warning', duration),
    info: (message, duration) => showToast(message, 'info', duration)
};

export default toast;

