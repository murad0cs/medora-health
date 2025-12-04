// Appointments Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
    initCalendar();
    initViewToggle();
    initAppointmentCards();
});

function initCalendar() {
    const days = document.querySelectorAll('.calendar-day:not(.other-month)');
    
    days.forEach(day => {
        day.addEventListener('click', () => {
            // Remove selected from all
            document.querySelectorAll('.calendar-day').forEach(d => {
                d.classList.remove('selected');
            });
            // Add selected to clicked (unless it's today)
            if (!day.classList.contains('today')) {
                day.classList.add('selected');
            }
            
            // Update schedule date
            const dayNum = day.textContent;
            updateScheduleDate(dayNum);
        });
    });
    
    // Calendar navigation
    const navBtns = document.querySelectorAll('.calendar-nav button');
    navBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // In a real app, this would navigate months
            MedoraApp.ui.showNotification(index === 0 ? '上个月' : '下个月', 'info');
        });
    });
}

function updateScheduleDate(day) {
    const dateEl = document.querySelector('.schedule-date');
    if (dateEl) {
        const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        const date = new Date(2025, 9, parseInt(day)); // October 2025
        const weekday = weekdays[date.getDay()];
        dateEl.textContent = `2025年10月${day}日 ${weekday}`;
    }
}

function initViewToggle() {
    const viewBtns = document.querySelectorAll('.view-btn');
    
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // In a real app, this would switch between day/week views
            const view = btn.textContent.includes('日') ? 'day' : 'week';
            console.log('Switching to', view, 'view');
        });
    });
}

function initAppointmentCards() {
    const cards = document.querySelectorAll('.appointment-card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const patient = card.querySelector('.appointment-patient').textContent;
            const type = card.querySelector('.appointment-type').textContent;
            const time = card.querySelector('.appointment-time').textContent;
            
            // In a real app, this would open a modal with appointment details
            console.log('Appointment clicked:', { patient, type, time });
            
            // Show a simple notification for demo
            MedoraApp.ui.showNotification(`预约详情: ${patient} - ${type}`, 'info');
        });
    });
    
    // Upcoming items
    const upcomingItems = document.querySelectorAll('.upcoming-item');
    upcomingItems.forEach(item => {
        item.addEventListener('click', () => {
            const name = item.querySelector('.upcoming-name').textContent;
            MedoraApp.ui.showNotification(`查看 ${name} 的预约详情`, 'info');
        });
    });
}

// New appointment button
document.querySelector('.btn-new-appointment')?.addEventListener('click', () => {
    MedoraApp.ui.showNotification('新建预约功能即将推出', 'info');
});



document.addEventListener('DOMContentLoaded', () => {
    initCalendar();
    initViewToggle();
    initAppointmentCards();
});

function initCalendar() {
    const days = document.querySelectorAll('.calendar-day:not(.other-month)');
    
    days.forEach(day => {
        day.addEventListener('click', () => {
            // Remove selected from all
            document.querySelectorAll('.calendar-day').forEach(d => {
                d.classList.remove('selected');
            });
            // Add selected to clicked (unless it's today)
            if (!day.classList.contains('today')) {
                day.classList.add('selected');
            }
            
            // Update schedule date
            const dayNum = day.textContent;
            updateScheduleDate(dayNum);
        });
    });
    
    // Calendar navigation
    const navBtns = document.querySelectorAll('.calendar-nav button');
    navBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // In a real app, this would navigate months
            MedoraApp.ui.showNotification(index === 0 ? '上个月' : '下个月', 'info');
        });
    });
}

function updateScheduleDate(day) {
    const dateEl = document.querySelector('.schedule-date');
    if (dateEl) {
        const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        const date = new Date(2025, 9, parseInt(day)); // October 2025
        const weekday = weekdays[date.getDay()];
        dateEl.textContent = `2025年10月${day}日 ${weekday}`;
    }
}

function initViewToggle() {
    const viewBtns = document.querySelectorAll('.view-btn');
    
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // In a real app, this would switch between day/week views
            const view = btn.textContent.includes('日') ? 'day' : 'week';
            console.log('Switching to', view, 'view');
        });
    });
}

function initAppointmentCards() {
    const cards = document.querySelectorAll('.appointment-card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const patient = card.querySelector('.appointment-patient').textContent;
            const type = card.querySelector('.appointment-type').textContent;
            const time = card.querySelector('.appointment-time').textContent;
            
            // In a real app, this would open a modal with appointment details
            console.log('Appointment clicked:', { patient, type, time });
            
            // Show a simple notification for demo
            MedoraApp.ui.showNotification(`预约详情: ${patient} - ${type}`, 'info');
        });
    });
    
    // Upcoming items
    const upcomingItems = document.querySelectorAll('.upcoming-item');
    upcomingItems.forEach(item => {
        item.addEventListener('click', () => {
            const name = item.querySelector('.upcoming-name').textContent;
            MedoraApp.ui.showNotification(`查看 ${name} 的预约详情`, 'info');
        });
    });
}

// New appointment button
document.querySelector('.btn-new-appointment')?.addEventListener('click', () => {
    MedoraApp.ui.showNotification('新建预约功能即将推出', 'info');
});

