// Doctor Preview Page Script

document.addEventListener('DOMContentLoaded', function() {
    
    // Tab switching for cases
    const caseTabs = document.querySelectorAll('.card-section:first-child .tab');
    caseTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            caseTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            console.log('Case filter:', this.textContent);
            // Add filter logic here
        });
    });

    // Tab switching for appointments
    const appointmentTabs = document.querySelectorAll('.card-section:last-child .tab');
    appointmentTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            appointmentTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            console.log('Appointment filter:', this.textContent);
            // Add filter logic here
        });
    });

    // Case item click
    const caseItems = document.querySelectorAll('.case-item');
    caseItems.forEach(item => {
        item.addEventListener('click', function() {
            const name = this.querySelector('.case-name').textContent;
            console.log('View case:', name);
            const patientId = 'BJ-' + Math.floor(Math.random() * 100);
            MedoraApp.navigate.toCaseDetail(patientId);
        });
    });

    // Message item click
    const messageItems = document.querySelectorAll('.message-item');
    messageItems.forEach(item => {
        item.addEventListener('click', function() {
            const sender = this.querySelector('.msg-title').textContent;
            console.log('Open message from:', sender);
            MedoraApp.navigate.toMessages();
        });
    });

    // Time card click
    const timeCards = document.querySelectorAll('.time-card');
    timeCards.forEach(card => {
        card.addEventListener('click', function() {
            const time = this.textContent.split('\n')[0];
            console.log('View appointment at:', time);
            MedoraApp.navigate.toAppointments();
        });
    });

    // View all buttons
    const viewAllButtons = document.querySelectorAll('.btn-view-all');
    viewAllButtons.forEach(button => {
        button.addEventListener('click', function() {
            const section = this.closest('.card-section');
            const title = section.querySelector('.section-title').textContent;
            
            if (title.includes('病历')) {
                MedoraApp.navigate.toCaseList();
            } else if (title.includes('消息')) {
                MedoraApp.navigate.toMessages();
            } else if (title.includes('预约')) {
                MedoraApp.navigate.toAppointments();
            }
        });
    });

});
