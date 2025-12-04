// Case Detail Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initTaskCheckboxes();
    initMessageInput();
    initTaskFilters();
});

function initTabs() {
    const tabs = document.querySelectorAll('.detail-tab');
    const contents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.dataset.tab;
            
            // Skip if it's the timeline tab (navigates to different page)
            if (tabId === 'timeline') return;
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update active content
            contents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `tab-${tabId}`) {
                    content.classList.add('active');
                }
            });
        });
    });
}

function initTaskCheckboxes() {
    const checkboxes = document.querySelectorAll('.task-checkbox');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', () => {
            checkbox.classList.toggle('checked');
            const taskItem = checkbox.closest('.task-item');
            taskItem.classList.toggle('completed');
            
            // Update task title strikethrough
            const title = taskItem.querySelector('.task-title');
            if (checkbox.classList.contains('checked')) {
                title.style.textDecoration = 'line-through';
                title.style.color = '#7aa39b';
            } else {
                title.style.textDecoration = 'none';
                title.style.color = '';
            }
        });
    });
}

function initMessageInput() {
    const input = document.querySelector('.case-message-input input');
    const sendBtn = document.querySelector('.case-message-input button');
    
    if (input && sendBtn) {
        sendBtn.addEventListener('click', () => sendCaseMessage(input));
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendCaseMessage(input);
            }
        });
    }
}

function sendCaseMessage(input) {
    const text = input.value.trim();
    if (!text) return;
    
    const messagesList = document.querySelector('.messages-list');
    const now = new Date();
    const timeStr = now.toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    const messageHTML = `
        <div class="case-message sent">
            <div class="case-msg-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </div>
            <div class="case-msg-content">
                <div class="case-msg-sender">Dr. Oven</div>
                <div class="case-msg-bubble">${escapeHtml(text)}</div>
                <div class="case-msg-time">${timeStr}</div>
            </div>
        </div>
    `;
    
    messagesList.insertAdjacentHTML('beforeend', messageHTML);
    messagesList.scrollTop = messagesList.scrollHeight;
    input.value = '';
}

function initTaskFilters() {
    const filterBtns = document.querySelectorAll('.task-filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.textContent.trim();
            filterTasks(filter);
        });
    });
    
    // Add task button
    const addTaskBtn = document.querySelector('.btn-add-task');
    if (addTaskBtn) {
        addTaskBtn.addEventListener('click', () => {
            MedoraApp.ui.showNotification('添加任务功能即将推出', 'info');
        });
    }
}

function filterTasks(filter) {
    const tasks = document.querySelectorAll('.task-item');
    
    tasks.forEach(task => {
        const isCompleted = task.classList.contains('completed');
        
        let show = true;
        if (filter === '待处理') {
            show = !isCompleted;
        } else if (filter === '已完成') {
            show = isCompleted;
        }
        
        task.style.display = show ? 'flex' : 'none';
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Report buttons
document.querySelectorAll('.report-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const reportName = btn.closest('.report-row').querySelector('.report-name').textContent;
        MedoraApp.ui.showNotification(`正在打开: ${reportName}`, 'info');
    });
});

// Top bar buttons
document.querySelector('.btn-top')?.addEventListener('click', () => {
    // Switch to messages tab
    const messagesTab = document.querySelector('[data-tab="messages"]');
    if (messagesTab) {
        messagesTab.click();
    }
});

// Dropdown handler
const dropdown = document.querySelector('.dropdown-pill');
if (dropdown) {
    dropdown.addEventListener('click', function() {
        console.log('Opening status dropdown...');
        // Here you would show a dropdown menu for changing case status
        alert('显示状态选项');
    });
}

        sendBtn.addEventListener('click', () => sendCaseMessage(input));
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendCaseMessage(input);
            }
        });
    }
}

function sendCaseMessage(input) {
    const text = input.value.trim();
    if (!text) return;
    
    const messagesList = document.querySelector('.messages-list');
    const now = new Date();
    const timeStr = now.toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    const messageHTML = `
        <div class="case-message sent">
            <div class="case-msg-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </div>
            <div class="case-msg-content">
                <div class="case-msg-sender">Dr. Oven</div>
                <div class="case-msg-bubble">${escapeHtml(text)}</div>
                <div class="case-msg-time">${timeStr}</div>
            </div>
        </div>
    `;
    
    messagesList.insertAdjacentHTML('beforeend', messageHTML);
    messagesList.scrollTop = messagesList.scrollHeight;
    input.value = '';
}

function initTaskFilters() {
    const filterBtns = document.querySelectorAll('.task-filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.textContent.trim();
            filterTasks(filter);
        });
    });
    
    // Add task button
    const addTaskBtn = document.querySelector('.btn-add-task');
    if (addTaskBtn) {
        addTaskBtn.addEventListener('click', () => {
            MedoraApp.ui.showNotification('添加任务功能即将推出', 'info');
        });
    }
}

function filterTasks(filter) {
    const tasks = document.querySelectorAll('.task-item');
    
    tasks.forEach(task => {
        const isCompleted = task.classList.contains('completed');
        
        let show = true;
        if (filter === '待处理') {
            show = !isCompleted;
        } else if (filter === '已完成') {
            show = isCompleted;
        }
        
        task.style.display = show ? 'flex' : 'none';
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Report buttons
document.querySelectorAll('.report-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const reportName = btn.closest('.report-row').querySelector('.report-name').textContent;
        MedoraApp.ui.showNotification(`正在打开: ${reportName}`, 'info');
    });
});

// Top bar buttons
document.querySelector('.btn-top')?.addEventListener('click', () => {
    // Switch to messages tab
    const messagesTab = document.querySelector('[data-tab="messages"]');
    if (messagesTab) {
        messagesTab.click();
    }
});
