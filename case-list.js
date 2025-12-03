// Medora Health CRM - Case List Script

document.addEventListener('DOMContentLoaded', function() {
    
    // Back button navigation
    const backRow = document.querySelector('.back-row');
    if (backRow) {
        backRow.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    // Search functionality
    const searchBox = document.querySelector('.search-box');
    if (searchBox) {
        searchBox.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            filterTable();
        });
    }

    // Date filter
    const dateDropdown = document.querySelector('.dropdown');
    if (dateDropdown) {
        dateDropdown.addEventListener('change', function() {
            console.log('Date filter changed to:', this.value);
            filterTable();
        });
    }

    // Status checkboxes
    const checkboxes = document.querySelectorAll('.filters input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            filterTable();
        });
    });

    // Filter table function
    function filterTable() {
        const searchTerm = searchBox.value.toLowerCase();
        const rows = document.querySelectorAll('.table tbody tr');
        const selectedStatuses = getSelectedStatuses();

        rows.forEach(row => {
            const patientId = row.cells[0].textContent.toLowerCase();
            const status = row.cells[1].textContent;
            
            const matchesSearch = patientId.includes(searchTerm);
            const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes(status);
            
            if (matchesSearch && matchesStatus) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    // Get selected statuses from checkboxes
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
    const detailButtons = document.querySelectorAll('.btn:nth-child(1)');
    detailButtons.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const row = this.closest('tr');
            const patientId = row.cells[0].textContent;
            console.log('View details for:', patientId);
            // Navigate to case detail page
            // window.location.href = `case-detail.html?id=${patientId}`;
        });
    });

    // Send message buttons
    const messageButtons = document.querySelectorAll('.btn:nth-child(2)');
    messageButtons.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const row = this.closest('tr');
            const patientId = row.cells[0].textContent;
            console.log('Send message to:', patientId);
            // Open message modal or navigate to messaging page
        });
    });

    // Table row click
    const tableRows = document.querySelectorAll('.table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('click', function(e) {
            // Don't trigger if clicking a button
            if (e.target.tagName !== 'BUTTON') {
                const patientId = this.cells[0].textContent;
                console.log('Row clicked:', patientId);
            }
        });
    });

});
