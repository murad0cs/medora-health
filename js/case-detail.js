// Case Detail Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initTabs();
    initReportButtons();
});

// Tab switching functionality
function initTabs() {
    const tabs = document.querySelectorAll('.detail-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Here you would typically load different content based on the tab
            // For now, we'll just log the tab name
            console.log('Switched to tab:', this.textContent);
        });
    });
}

// Report view buttons
function initReportButtons() {
    const reportButtons = document.querySelectorAll('.report-btn');
    
    reportButtons.forEach(button => {
        button.addEventListener('click', function() {
            const reportRow = this.closest('.report-row');
            const reportName = reportRow.querySelector('.report-name').textContent;
            
            console.log('Viewing report:', reportName);
            // Here you would typically open the PDF or navigate to a report viewer
            alert(`查看报告: ${reportName}`);
        });
    });
}

// Message button handler
const messageBtn = document.querySelector('.btn-top');
if (messageBtn) {
    messageBtn.addEventListener('click', function() {
        console.log('Opening messages...');
        // Navigate to messages or open a message modal
        alert('打开消息界面');
    });
}

// Dropdown handler
const dropdown = document.querySelector('.dropdown-pill');
if (dropdown) {
    dropdown.addEventListener('click', function() {
        console.log('Opening status dropdown...');
        // Here you would show a dropdown menu for changing case status
        alert('显示状态选项');
    });
}
