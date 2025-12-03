// Medora Health CRM - Dashboard Script

document.addEventListener('DOMContentLoaded', function() {
    
    // Action card click handlers
    const actionCards = document.querySelectorAll('.action-card');
    actionCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('.action-title').textContent;
            console.log(`Clicked: ${title}`);
            // Add navigation logic here
        });
    });

    // Patient card click handlers
    const patientCards = document.querySelectorAll('.patient-card');
    patientCards.forEach(card => {
        card.addEventListener('click', function() {
            const name = this.querySelector('.patient-name').textContent;
            console.log(`View patient: ${name}`);
            // Add patient detail view logic here
        });
    });

    // Message item click handlers
    const messageItems = document.querySelectorAll('.message-item');
    messageItems.forEach(item => {
        item.addEventListener('click', function() {
            const sender = this.querySelector('.msg-title').textContent;
            console.log(`Open message from: ${sender}`);
            // Add message detail view logic here
        });
    });

    // Time slot click handlers
    const timeSlots = document.querySelectorAll('.time-slot');
    timeSlots.forEach(slot => {
        slot.addEventListener('click', function() {
            const time = this.textContent.split('\n')[0];
            console.log(`Selected time slot: ${time}`);
            // Add appointment management logic here
        });
    });

    // Add cursor pointer styles
    const clickableElements = [
        ...actionCards,
        ...patientCards,
        ...messageItems,
        ...timeSlots
    ];
    
    clickableElements.forEach(element => {
        element.style.cursor = 'pointer';
    });

});
