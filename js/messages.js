// Messages Center Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    initConversationList();
    initTabs();
    initSearch();
    initChatInput();
});

function initConversationList() {
    const conversations = document.querySelectorAll('.conversation-item');
    
    conversations.forEach(conv => {
        conv.addEventListener('click', () => {
            // Remove active class from all
            conversations.forEach(c => c.classList.remove('active'));
            // Add active to clicked
            conv.classList.add('active');
            // Remove unread status
            conv.classList.remove('unread');
            const badge = conv.querySelector('.unread-badge');
            if (badge) badge.remove();
            
            // Update chat header with selected conversation
            updateChatHeader(conv);
        });
    });
}

function initTabs() {
    const tabs = document.querySelectorAll('.conv-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Filter conversations based on tab
            filterConversations(tab.textContent.trim());
        });
    });
}

function filterConversations(filter) {
    const conversations = document.querySelectorAll('.conversation-item');
    
    conversations.forEach(conv => {
        const name = conv.querySelector('.conv-name').textContent;
        const isUnread = conv.classList.contains('unread');
        
        let show = true;
        
        if (filter.includes('未读')) {
            show = isUnread;
        } else if (filter === '患者') {
            show = name.includes('患者');
        } else if (filter === '系统') {
            show = name.includes('系统');
        }
        
        conv.style.display = show ? 'flex' : 'none';
    });
}

function initSearch() {
    const searchInput = document.querySelector('.conversation-search input');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const conversations = document.querySelectorAll('.conversation-item');
            
            conversations.forEach(conv => {
                const name = conv.querySelector('.conv-name').textContent.toLowerCase();
                const preview = conv.querySelector('.conv-preview').textContent.toLowerCase();
                
                const matches = name.includes(term) || preview.includes(term);
                conv.style.display = matches ? 'flex' : 'none';
            });
        });
    }
}

function initChatInput() {
    const input = document.querySelector('.chat-input-wrapper input');
    const sendBtn = document.querySelector('.send-btn');
    
    if (input && sendBtn) {
        // Send on button click
        sendBtn.addEventListener('click', () => sendMessage(input));
        
        // Send on Enter key
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage(input);
            }
        });
    }
}

function sendMessage(input) {
    const text = input.value.trim();
    if (!text) return;
    
    const messagesContainer = document.querySelector('.chat-messages');
    const now = new Date();
    const timeStr = now.getHours().toString().padStart(2, '0') + ':' + 
                    now.getMinutes().toString().padStart(2, '0');
    
    const messageHTML = `
        <div class="message sent">
            <div class="message-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </div>
            <div class="message-content">
                <div class="message-bubble">${escapeHtml(text)}</div>
                <span class="message-time">${timeStr}</span>
            </div>
        </div>
    `;
    
    messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    input.value = '';
}

function updateChatHeader(conv) {
    const name = conv.querySelector('.conv-name').childNodes[0].textContent.trim();
    const avatar = conv.querySelector('.conv-avatar').cloneNode(true);
    
    const chatUserAvatar = document.querySelector('.chat-user-avatar');
    const chatUserName = document.querySelector('.chat-user-details h3');
    
    if (chatUserName) {
        chatUserName.textContent = name;
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}



document.addEventListener('DOMContentLoaded', () => {
    initConversationList();
    initTabs();
    initSearch();
    initChatInput();
});

function initConversationList() {
    const conversations = document.querySelectorAll('.conversation-item');
    
    conversations.forEach(conv => {
        conv.addEventListener('click', () => {
            // Remove active class from all
            conversations.forEach(c => c.classList.remove('active'));
            // Add active to clicked
            conv.classList.add('active');
            // Remove unread status
            conv.classList.remove('unread');
            const badge = conv.querySelector('.unread-badge');
            if (badge) badge.remove();
            
            // Update chat header with selected conversation
            updateChatHeader(conv);
        });
    });
}

function initTabs() {
    const tabs = document.querySelectorAll('.conv-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Filter conversations based on tab
            filterConversations(tab.textContent.trim());
        });
    });
}

function filterConversations(filter) {
    const conversations = document.querySelectorAll('.conversation-item');
    
    conversations.forEach(conv => {
        const name = conv.querySelector('.conv-name').textContent;
        const isUnread = conv.classList.contains('unread');
        
        let show = true;
        
        if (filter.includes('未读')) {
            show = isUnread;
        } else if (filter === '患者') {
            show = name.includes('患者');
        } else if (filter === '系统') {
            show = name.includes('系统');
        }
        
        conv.style.display = show ? 'flex' : 'none';
    });
}

function initSearch() {
    const searchInput = document.querySelector('.conversation-search input');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const conversations = document.querySelectorAll('.conversation-item');
            
            conversations.forEach(conv => {
                const name = conv.querySelector('.conv-name').textContent.toLowerCase();
                const preview = conv.querySelector('.conv-preview').textContent.toLowerCase();
                
                const matches = name.includes(term) || preview.includes(term);
                conv.style.display = matches ? 'flex' : 'none';
            });
        });
    }
}

function initChatInput() {
    const input = document.querySelector('.chat-input-wrapper input');
    const sendBtn = document.querySelector('.send-btn');
    
    if (input && sendBtn) {
        // Send on button click
        sendBtn.addEventListener('click', () => sendMessage(input));
        
        // Send on Enter key
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage(input);
            }
        });
    }
}

function sendMessage(input) {
    const text = input.value.trim();
    if (!text) return;
    
    const messagesContainer = document.querySelector('.chat-messages');
    const now = new Date();
    const timeStr = now.getHours().toString().padStart(2, '0') + ':' + 
                    now.getMinutes().toString().padStart(2, '0');
    
    const messageHTML = `
        <div class="message sent">
            <div class="message-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </div>
            <div class="message-content">
                <div class="message-bubble">${escapeHtml(text)}</div>
                <span class="message-time">${timeStr}</span>
            </div>
        </div>
    `;
    
    messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    input.value = '';
}

function updateChatHeader(conv) {
    const name = conv.querySelector('.conv-name').childNodes[0].textContent.trim();
    const avatar = conv.querySelector('.conv-avatar').cloneNode(true);
    
    const chatUserAvatar = document.querySelector('.chat-user-avatar');
    const chatUserName = document.querySelector('.chat-user-details h3');
    
    if (chatUserName) {
        chatUserName.textContent = name;
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

