// Medora Health CRM - Common JavaScript Utilities

const MedoraApp = {
    // Configuration
    config: {
        baseUrl: '/',
        apiUrl: '/api'
    },

    // Navigation
    navigate: {
        toDashboard() {
            window.location.href = '/index.html';
        },
        
        toCaseList() {
            window.location.href = '/pages/case-list.html';
        },
        
        toCaseDetail(caseId) {
            window.location.href = `/pages/case-detail.html?id=${caseId}`;
        },
        
        toAppointments() {
            window.location.href = '/pages/appointments.html';
        },
        
        toMessages() {
            window.location.href = '/pages/messages.html';
        },
        
        toReports() {
            window.location.href = '/pages/reports.html';
        },
        
        back() {
            window.history.back();
        }
    },

    // Search functionality
    search: {
        filterTable(searchTerm, tableSelector = '.table tbody tr', searchColumns = [0]) {
            const rows = document.querySelectorAll(tableSelector);
            const term = searchTerm.toLowerCase();

            rows.forEach(row => {
                let matches = false;
                searchColumns.forEach(colIndex => {
                    const cellText = row.cells[colIndex]?.textContent.toLowerCase() || '';
                    if (cellText.includes(term)) {
                        matches = true;
                    }
                });
                row.style.display = matches ? '' : 'none';
            });
        },

        filterByStatus(selectedStatuses, tableSelector = '.table tbody tr', statusColumn = 1) {
            if (selectedStatuses.length === 0) return;
            
            const rows = document.querySelectorAll(tableSelector);
            rows.forEach(row => {
                const status = row.cells[statusColumn]?.textContent;
                if (selectedStatuses.includes(status)) {
                    if (row.style.display !== 'none') {
                        row.style.display = '';
                    }
                } else {
                    row.style.display = 'none';
                }
            });
        }
    },

    // UI Helpers
    ui: {
        showLoading(element) {
            element.classList.add('loading');
            element.disabled = true;
        },

        hideLoading(element) {
            element.classList.remove('loading');
            element.disabled = false;
        },

        showNotification(message, type = 'info') {
            // Simple notification - can be enhanced with a toast library
            console.log(`[${type.toUpperCase()}]: ${message}`);
            alert(message);
        },

        formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleString('zh-CN', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            });
        },

        getRelativeTime(dateString) {
            const date = new Date(dateString);
            const now = new Date();
            const diff = now - date;
            
            const minutes = Math.floor(diff / 60000);
            const hours = Math.floor(diff / 3600000);
            const days = Math.floor(diff / 86400000);
            
            if (minutes < 60) return `${minutes}分钟前`;
            if (hours < 24) return `${hours}小时前`;
            return `${days}天前`;
        }
    },

    // Form helpers
    form: {
        getFormData(formElement) {
            const formData = new FormData(formElement);
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }
            return data;
        },

        resetForm(formElement) {
            formElement.reset();
        },

        validateRequired(fields) {
            let isValid = true;
            fields.forEach(field => {
                if (!field.value.trim()) {
                    field.classList.add('error');
                    isValid = false;
                } else {
                    field.classList.remove('error');
                }
            });
            return isValid;
        }
    },

    // Local storage helpers
    storage: {
        save(key, value) {
            try {
                localStorage.setItem(key, JSON.stringify(value));
                return true;
            } catch (e) {
                console.error('Storage save error:', e);
                return false;
            }
        },

        load(key) {
            try {
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) : null;
            } catch (e) {
                console.error('Storage load error:', e);
                return null;
            }
        },

        remove(key) {
            localStorage.removeItem(key);
        },

        clear() {
            localStorage.clear();
        }
    },

    // Initialize common features
    init() {
        // Add click handlers to common elements
        this.initNavbar();
        this.initBackButtons();
    },

    initNavbar() {
        // Logo click - go to dashboard
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.addEventListener('click', () => this.navigate.toDashboard());
            logo.style.cursor = 'pointer';
        }

        // System title click - go to dashboard
        const title = document.querySelector('.title, .system-title');
        if (title) {
            title.addEventListener('click', () => this.navigate.toDashboard());
            title.style.cursor = 'pointer';
        }
    },

    initBackButtons() {
        const backButtons = document.querySelectorAll('.back-row, .back-btn');
        backButtons.forEach(btn => {
            btn.addEventListener('click', () => this.navigate.back());
        });
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    MedoraApp.init();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MedoraApp;
}
