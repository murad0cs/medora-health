// Dashboard Page Script

document.addEventListener('DOMContentLoaded', function() {
    
    // Action card click handlers
    const actionCards = document.querySelectorAll('.action-card');
    const actionHandlers = {
        '新建病例': () => MedoraApp.navigate.toCaseList(),
        '预约管理': () => MedoraApp.navigate.toAppointments(),
        '发送消息': () => MedoraApp.navigate.toMessages(),
        '查看报告': () => MedoraApp.navigate.toReports()
    };

    actionCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('.action-title').textContent;
            const handler = actionHandlers[title];
            if (handler) {
                handler();
            } else {
                console.log(`Action: ${title}`);
            }
        });
    });

    // Patient card click handlers
    const patientCards = document.querySelectorAll('.patient-card');
    patientCards.forEach(card => {
        card.addEventListener('click', function() {
            const name = this.querySelector('.patient-name').textContent;
            const patientId = 'BJ-' + Math.floor(Math.random() * 100); // Mock ID
            console.log(`View patient: ${name}`);
            MedoraApp.navigate.toCaseDetail(patientId);
        });
    });

    // Message item click handlers
    const messageItems = document.querySelectorAll('.message-item');
    messageItems.forEach(item => {
        item.addEventListener('click', function() {
            const sender = this.querySelector('.msg-title').textContent;
            console.log(`Open message from: ${sender}`);
            MedoraApp.navigate.toMessages();
        });
    });

    // Time slot click handlers
    const timeSlots = document.querySelectorAll('.time-slot');
    timeSlots.forEach(slot => {
        slot.addEventListener('click', function() {
            const time = this.textContent.split('\n')[0];
            console.log(`Selected time slot: ${time}`);
            MedoraApp.navigate.toAppointments();
        });
    });

});
