// Case List Page Script

document.addEventListener('DOMContentLoaded', function() {
    
    const searchBox = document.querySelector('.search-box');
    const dateDropdown = document.querySelector('.dropdown');
    const checkboxes = document.querySelectorAll('.filters input[type="checkbox"]');

    // Search functionality
    if (searchBox) {
        searchBox.addEventListener('input', function(e) {
            const searchTerm = e.target.value;
            filterTable();
        });
    }

    // Date filter
    if (dateDropdown) {
        dateDropdown.addEventListener('change', function() {
            console.log('Date filter changed to:', this.value);
            filterTable();
        });
    }

    // Status checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            filterTable();
        });
    });

    // Combined filter function
    function filterTable() {
        const searchTerm = searchBox.value.toLowerCase();
        const rows = document.querySelectorAll('.table tbody tr');
        const selectedStatuses = getSelectedStatuses();

        rows.forEach(row => {
            const patientId = row.cells[0].textContent.toLowerCase();
            const status = row.cells[1].textContent;
            
            const matchesSearch = !searchTerm || patientId.includes(searchTerm);
            const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes(status);
            
            row.style.display = (matchesSearch && matchesStatus) ? '' : 'none';
        });
    }

    // Get selected statuses
    function getSelectedStatuses() {
        const selected = [];
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const label = checkbox.parentElement.textContent.trim();
                selected.push(label);
            }
        });
        return selected;
    }

    // View details buttons
    const detailButtons = document.querySelectorAll('.btn:first-child');
    detailButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const row = this.closest('tr');
            const patientId = row.cells[0].textContent;
            console.log('View details for:', patientId);
            MedoraApp.navigate.toCaseDetail(patientId);
        });
    });

    // Send message buttons
    const messageButtons = document.querySelectorAll('.btn:nth-child(2)');
    messageButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const row = this.closest('tr');
            const patientId = row.cells[0].textContent;
            console.log('Send message to:', patientId);
            MedoraApp.ui.showNotification(`发送消息给患者 ${patientId}`);
        });
    });

    // Table row click
    const tableRows = document.querySelectorAll('.table tbody tr');
    tableRows.forEach(row => {
        row.style.cursor = 'pointer';
        row.addEventListener('click', function(e) {
            if (e.target.tagName !== 'BUTTON') {
                const patientId = this.cells[0].textContent;
                MedoraApp.navigate.toCaseDetail(patientId);
            }
        });
    });

});
