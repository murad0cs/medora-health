/**
 * Navbar Component
 * Medora Health CRM
 */

/**
 * Navbar HTML template
 * @param {object} options - Navbar options
 * @returns {string} Navbar HTML
 */
export function createNavbar(options = {}) {
    const {
        title = 'Medora Health 医院管理系统',
        userName = 'Dr. Oven',
        userRole = '主治医师',
        notificationCount = 0,
        showSearch = false
    } = options;

    return `
        <nav class="navbar" id="navbar">
            <div class="navbar-left">
                <button class="navbar-toggle" id="navbarToggle" aria-label="Toggle menu">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
                <a href="/src/pages/index.html" class="navbar-logo">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                </a>
                <span class="navbar-brand">${title}</span>
            </div>
            
            ${showSearch ? `
            <div class="navbar-search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="M21 21l-4.35-4.35"></path>
                </svg>
                <input type="text" placeholder="搜索患者、病例..." id="navbarSearch">
            </div>
            ` : ''}
            
            <div class="navbar-right">
                <div class="navbar-actions">
                    <button class="navbar-action navbar-notification" id="notificationBtn" aria-label="Notifications">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                        ${notificationCount > 0 ? `<span class="notification-badge">${notificationCount}</span>` : ''}
                    </button>
                </div>
                
                <div class="navbar-user" id="userMenu">
                    <div class="navbar-avatar">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div class="navbar-user-info">
                        <div class="navbar-user-name">${userName}</div>
                        <div class="navbar-user-role">${userRole}</div>
                    </div>
                </div>
            </div>
        </nav>
    `;
}

/**
 * Initialize navbar functionality
 */
export function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    // Mobile menu toggle
    const toggleBtn = document.getElementById('navbarToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('sidebar-open');
            const sidebar = document.querySelector('.sidebar');
            const overlay = document.querySelector('.sidebar-overlay');
            if (sidebar) sidebar.classList.toggle('is-open');
            if (overlay) overlay.classList.toggle('is-visible');
        });
    }

    // Notification button
    const notificationBtn = document.getElementById('notificationBtn');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', () => {
            // TODO: Show notification panel
            console.log('Show notifications');
        });
    }

    // User menu
    const userMenu = document.getElementById('userMenu');
    if (userMenu) {
        userMenu.addEventListener('click', () => {
            // TODO: Show user dropdown
            console.log('Show user menu');
        });
    }

    // Search functionality
    const searchInput = document.getElementById('navbarSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            // TODO: Implement global search
            console.log('Search:', e.target.value);
        });
    }

    // Scroll behavior - hide/show on scroll
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollY = currentScrollY;
    }, { passive: true });
}

/**
 * Render navbar into container
 * @param {string|HTMLElement} container - Container selector or element
 * @param {object} options - Navbar options
 */
export function renderNavbar(container, options = {}) {
    const target = typeof container === 'string' 
        ? document.querySelector(container) 
        : container;
    
    if (!target) {
        console.error('Navbar container not found');
        return;
    }

    target.insertAdjacentHTML('afterbegin', createNavbar(options));
    initNavbar();
}

export default {
    createNavbar,
    initNavbar,
    renderNavbar
};


 * Navbar Component
 * Medora Health CRM
 */

/**
 * Navbar HTML template
 * @param {object} options - Navbar options
 * @returns {string} Navbar HTML
 */
export function createNavbar(options = {}) {
    const {
        title = 'Medora Health 医院管理系统',
        userName = 'Dr. Oven',
        userRole = '主治医师',
        notificationCount = 0,
        showSearch = false
    } = options;

    return `
        <nav class="navbar" id="navbar">
            <div class="navbar-left">
                <button class="navbar-toggle" id="navbarToggle" aria-label="Toggle menu">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
                <a href="/src/pages/index.html" class="navbar-logo">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                </a>
                <span class="navbar-brand">${title}</span>
            </div>
            
            ${showSearch ? `
            <div class="navbar-search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="M21 21l-4.35-4.35"></path>
                </svg>
                <input type="text" placeholder="搜索患者、病例..." id="navbarSearch">
            </div>
            ` : ''}
            
            <div class="navbar-right">
                <div class="navbar-actions">
                    <button class="navbar-action navbar-notification" id="notificationBtn" aria-label="Notifications">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                        ${notificationCount > 0 ? `<span class="notification-badge">${notificationCount}</span>` : ''}
                    </button>
                </div>
                
                <div class="navbar-user" id="userMenu">
                    <div class="navbar-avatar">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div class="navbar-user-info">
                        <div class="navbar-user-name">${userName}</div>
                        <div class="navbar-user-role">${userRole}</div>
                    </div>
                </div>
            </div>
        </nav>
    `;
}

/**
 * Initialize navbar functionality
 */
export function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    // Mobile menu toggle
    const toggleBtn = document.getElementById('navbarToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('sidebar-open');
            const sidebar = document.querySelector('.sidebar');
            const overlay = document.querySelector('.sidebar-overlay');
            if (sidebar) sidebar.classList.toggle('is-open');
            if (overlay) overlay.classList.toggle('is-visible');
        });
    }

    // Notification button
    const notificationBtn = document.getElementById('notificationBtn');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', () => {
            // TODO: Show notification panel
            console.log('Show notifications');
        });
    }

    // User menu
    const userMenu = document.getElementById('userMenu');
    if (userMenu) {
        userMenu.addEventListener('click', () => {
            // TODO: Show user dropdown
            console.log('Show user menu');
        });
    }

    // Search functionality
    const searchInput = document.getElementById('navbarSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            // TODO: Implement global search
            console.log('Search:', e.target.value);
        });
    }

    // Scroll behavior - hide/show on scroll
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollY = currentScrollY;
    }, { passive: true });
}

/**
 * Render navbar into container
 * @param {string|HTMLElement} container - Container selector or element
 * @param {object} options - Navbar options
 */
export function renderNavbar(container, options = {}) {
    const target = typeof container === 'string' 
        ? document.querySelector(container) 
        : container;
    
    if (!target) {
        console.error('Navbar container not found');
        return;
    }

    target.insertAdjacentHTML('afterbegin', createNavbar(options));
    initNavbar();
}

export default {
    createNavbar,
    initNavbar,
    renderNavbar
};

