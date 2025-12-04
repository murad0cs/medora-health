/**
 * Modal Component
 * Medora Health CRM
 */

let activeModal = null;

/**
 * Create modal HTML
 * @param {object} options - Modal options
 * @returns {string} Modal HTML
 */
function createModalHTML(options) {
    const {
        id = 'modal',
        title = '',
        content = '',
        size = 'md', // sm, md, lg, xl, full
        showClose = true,
        footer = null
    } = options;

    return `
        <div class="modal-overlay" id="${id}">
            <div class="modal modal-${size}" role="dialog" aria-modal="true" aria-labelledby="${id}-title">
                <div class="modal-header">
                    ${title ? `<h2 class="modal-title" id="${id}-title">${title}</h2>` : ''}
                    ${showClose ? `
                        <button class="modal-close" aria-label="Close modal">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    ` : ''}
                </div>
                <div class="modal-body">
                    ${content}
                </div>
                ${footer ? `<div class="modal-footer">${footer}</div>` : ''}
            </div>
        </div>
    `;
}

/**
 * Add modal styles if not present
 */
function ensureModalStyles() {
    if (document.getElementById('modal-styles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'modal-styles';
    styles.textContent = `
        .modal-overlay {
            position: fixed;
            inset: 0;
            background: var(--bg-overlay, rgba(0, 0, 0, 0.5));
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: var(--z-modal, 500);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            padding: var(--space-4, 16px);
        }
        
        .modal-overlay.is-active {
            opacity: 1;
            visibility: visible;
        }
        
        .modal {
            background: var(--bg-card, #fff);
            border-radius: var(--radius-xl, 16px);
            box-shadow: var(--shadow-2xl, 0 25px 50px -12px rgba(0, 0, 0, 0.25));
            max-height: 90vh;
            display: flex;
            flex-direction: column;
            transform: scale(0.95) translateY(20px);
            transition: transform 0.3s ease;
            width: 100%;
        }
        
        .modal-overlay.is-active .modal {
            transform: scale(1) translateY(0);
        }
        
        .modal-sm { max-width: 400px; }
        .modal-md { max-width: 560px; }
        .modal-lg { max-width: 800px; }
        .modal-xl { max-width: 1140px; }
        .modal-full { max-width: calc(100vw - 32px); max-height: calc(100vh - 32px); }
        
        .modal-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: var(--space-5, 20px);
            border-bottom: 1px solid var(--border-light, #e5ebeb);
        }
        
        .modal-title {
            font-size: var(--font-size-lg, 18px);
            font-weight: var(--font-weight-semibold, 600);
            color: var(--text-primary, #1a1f1f);
            margin: 0;
        }
        
        .modal-close {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-md, 8px);
            color: var(--text-tertiary, #758585);
            transition: all 0.2s;
        }
        
        .modal-close:hover {
            background: var(--bg-tertiary, #f1f5f5);
            color: var(--text-primary, #1a1f1f);
        }
        
        .modal-close svg {
            width: 20px;
            height: 20px;
        }
        
        .modal-body {
            padding: var(--space-5, 20px);
            overflow-y: auto;
            flex: 1;
        }
        
        .modal-footer {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: var(--space-3, 12px);
            padding: var(--space-4, 16px) var(--space-5, 20px);
            border-top: 1px solid var(--border-light, #e5ebeb);
            background: var(--bg-secondary, #f8fafa);
            border-radius: 0 0 var(--radius-xl, 16px) var(--radius-xl, 16px);
        }
        
        body.modal-open {
            overflow: hidden;
        }
    `;
    document.head.appendChild(styles);
}

/**
 * Open modal
 * @param {object} options - Modal options
 * @returns {HTMLElement} Modal element
 */
export function openModal(options) {
    ensureModalStyles();
    
    // Close any existing modal
    if (activeModal) {
        closeModal(activeModal);
    }
    
    // Create modal
    const modalHTML = createModalHTML(options);
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    const overlay = document.getElementById(options.id || 'modal');
    const modal = overlay.querySelector('.modal');
    const closeBtn = overlay.querySelector('.modal-close');
    
    // Store reference
    activeModal = overlay;
    
    // Prevent body scroll
    document.body.classList.add('modal-open');
    
    // Animate in
    requestAnimationFrame(() => {
        overlay.classList.add('is-active');
    });
    
    // Close button handler
    if (closeBtn) {
        closeBtn.addEventListener('click', () => closeModal(overlay));
    }
    
    // Click outside to close
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeModal(overlay);
        }
    });
    
    // Escape key to close
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            closeModal(overlay);
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
    
    // Focus trap
    const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length) {
        focusableElements[0].focus();
    }
    
    // Callback
    if (options.onOpen) {
        options.onOpen(overlay);
    }
    
    return overlay;
}

/**
 * Close modal
 * @param {HTMLElement} overlay - Modal overlay element
 */
export function closeModal(overlay = activeModal) {
    if (!overlay) return;
    
    overlay.classList.remove('is-active');
    document.body.classList.remove('modal-open');
    
    // Remove after animation
    setTimeout(() => {
        overlay.remove();
        if (activeModal === overlay) {
            activeModal = null;
        }
    }, 300);
}

/**
 * Confirm dialog
 * @param {object} options - Dialog options
 * @returns {Promise<boolean>} User response
 */
export function confirm(options) {
    return new Promise((resolve) => {
        const {
            title = '确认',
            message = '您确定要执行此操作吗？',
            confirmText = '确认',
            cancelText = '取消',
            confirmClass = 'btn-primary',
            cancelClass = 'btn-secondary'
        } = options;

        openModal({
            id: 'confirm-dialog',
            title,
            content: `<p>${message}</p>`,
            size: 'sm',
            footer: `
                <button class="btn ${cancelClass}" data-action="cancel">${cancelText}</button>
                <button class="btn ${confirmClass}" data-action="confirm">${confirmText}</button>
            `,
            onOpen: (overlay) => {
                overlay.querySelector('[data-action="cancel"]').addEventListener('click', () => {
                    closeModal(overlay);
                    resolve(false);
                });
                overlay.querySelector('[data-action="confirm"]').addEventListener('click', () => {
                    closeModal(overlay);
                    resolve(true);
                });
            }
        });
    });
}

export default {
    open: openModal,
    close: closeModal,
    confirm
};


 * Modal Component
 * Medora Health CRM
 */

let activeModal = null;

/**
 * Create modal HTML
 * @param {object} options - Modal options
 * @returns {string} Modal HTML
 */
function createModalHTML(options) {
    const {
        id = 'modal',
        title = '',
        content = '',
        size = 'md', // sm, md, lg, xl, full
        showClose = true,
        footer = null
    } = options;

    return `
        <div class="modal-overlay" id="${id}">
            <div class="modal modal-${size}" role="dialog" aria-modal="true" aria-labelledby="${id}-title">
                <div class="modal-header">
                    ${title ? `<h2 class="modal-title" id="${id}-title">${title}</h2>` : ''}
                    ${showClose ? `
                        <button class="modal-close" aria-label="Close modal">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    ` : ''}
                </div>
                <div class="modal-body">
                    ${content}
                </div>
                ${footer ? `<div class="modal-footer">${footer}</div>` : ''}
            </div>
        </div>
    `;
}

/**
 * Add modal styles if not present
 */
function ensureModalStyles() {
    if (document.getElementById('modal-styles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'modal-styles';
    styles.textContent = `
        .modal-overlay {
            position: fixed;
            inset: 0;
            background: var(--bg-overlay, rgba(0, 0, 0, 0.5));
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: var(--z-modal, 500);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            padding: var(--space-4, 16px);
        }
        
        .modal-overlay.is-active {
            opacity: 1;
            visibility: visible;
        }
        
        .modal {
            background: var(--bg-card, #fff);
            border-radius: var(--radius-xl, 16px);
            box-shadow: var(--shadow-2xl, 0 25px 50px -12px rgba(0, 0, 0, 0.25));
            max-height: 90vh;
            display: flex;
            flex-direction: column;
            transform: scale(0.95) translateY(20px);
            transition: transform 0.3s ease;
            width: 100%;
        }
        
        .modal-overlay.is-active .modal {
            transform: scale(1) translateY(0);
        }
        
        .modal-sm { max-width: 400px; }
        .modal-md { max-width: 560px; }
        .modal-lg { max-width: 800px; }
        .modal-xl { max-width: 1140px; }
        .modal-full { max-width: calc(100vw - 32px); max-height: calc(100vh - 32px); }
        
        .modal-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: var(--space-5, 20px);
            border-bottom: 1px solid var(--border-light, #e5ebeb);
        }
        
        .modal-title {
            font-size: var(--font-size-lg, 18px);
            font-weight: var(--font-weight-semibold, 600);
            color: var(--text-primary, #1a1f1f);
            margin: 0;
        }
        
        .modal-close {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-md, 8px);
            color: var(--text-tertiary, #758585);
            transition: all 0.2s;
        }
        
        .modal-close:hover {
            background: var(--bg-tertiary, #f1f5f5);
            color: var(--text-primary, #1a1f1f);
        }
        
        .modal-close svg {
            width: 20px;
            height: 20px;
        }
        
        .modal-body {
            padding: var(--space-5, 20px);
            overflow-y: auto;
            flex: 1;
        }
        
        .modal-footer {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: var(--space-3, 12px);
            padding: var(--space-4, 16px) var(--space-5, 20px);
            border-top: 1px solid var(--border-light, #e5ebeb);
            background: var(--bg-secondary, #f8fafa);
            border-radius: 0 0 var(--radius-xl, 16px) var(--radius-xl, 16px);
        }
        
        body.modal-open {
            overflow: hidden;
        }
    `;
    document.head.appendChild(styles);
}

/**
 * Open modal
 * @param {object} options - Modal options
 * @returns {HTMLElement} Modal element
 */
export function openModal(options) {
    ensureModalStyles();
    
    // Close any existing modal
    if (activeModal) {
        closeModal(activeModal);
    }
    
    // Create modal
    const modalHTML = createModalHTML(options);
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    const overlay = document.getElementById(options.id || 'modal');
    const modal = overlay.querySelector('.modal');
    const closeBtn = overlay.querySelector('.modal-close');
    
    // Store reference
    activeModal = overlay;
    
    // Prevent body scroll
    document.body.classList.add('modal-open');
    
    // Animate in
    requestAnimationFrame(() => {
        overlay.classList.add('is-active');
    });
    
    // Close button handler
    if (closeBtn) {
        closeBtn.addEventListener('click', () => closeModal(overlay));
    }
    
    // Click outside to close
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeModal(overlay);
        }
    });
    
    // Escape key to close
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            closeModal(overlay);
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
    
    // Focus trap
    const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length) {
        focusableElements[0].focus();
    }
    
    // Callback
    if (options.onOpen) {
        options.onOpen(overlay);
    }
    
    return overlay;
}

/**
 * Close modal
 * @param {HTMLElement} overlay - Modal overlay element
 */
export function closeModal(overlay = activeModal) {
    if (!overlay) return;
    
    overlay.classList.remove('is-active');
    document.body.classList.remove('modal-open');
    
    // Remove after animation
    setTimeout(() => {
        overlay.remove();
        if (activeModal === overlay) {
            activeModal = null;
        }
    }, 300);
}

/**
 * Confirm dialog
 * @param {object} options - Dialog options
 * @returns {Promise<boolean>} User response
 */
export function confirm(options) {
    return new Promise((resolve) => {
        const {
            title = '确认',
            message = '您确定要执行此操作吗？',
            confirmText = '确认',
            cancelText = '取消',
            confirmClass = 'btn-primary',
            cancelClass = 'btn-secondary'
        } = options;

        openModal({
            id: 'confirm-dialog',
            title,
            content: `<p>${message}</p>`,
            size: 'sm',
            footer: `
                <button class="btn ${cancelClass}" data-action="cancel">${cancelText}</button>
                <button class="btn ${confirmClass}" data-action="confirm">${confirmText}</button>
            `,
            onOpen: (overlay) => {
                overlay.querySelector('[data-action="cancel"]').addEventListener('click', () => {
                    closeModal(overlay);
                    resolve(false);
                });
                overlay.querySelector('[data-action="confirm"]').addEventListener('click', () => {
                    closeModal(overlay);
                    resolve(true);
                });
            }
        });
    });
}

export default {
    open: openModal,
    close: closeModal,
    confirm
};

