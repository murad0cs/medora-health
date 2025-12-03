// UI Kit & Style Guide Page Script

document.addEventListener('DOMContentLoaded', function() {
    
    // Segmented control
    const segmentedButtons = document.querySelectorAll('.segmented button');
    segmentedButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from siblings
            const parent = this.parentElement;
            parent.querySelectorAll('button').forEach(btn => {
                btn.classList.remove('active');
            });
            // Add active class to clicked button
            this.classList.add('active');
        });
    });

    // Tab switching
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            console.log('Switched to tab:', this.textContent);
        });
    });

    // Form submit
    const submitButton = document.querySelector('.btn-primary');
    if (submitButton) {
        submitButton.addEventListener('click', function(e) {
            e.preventDefault();
            MedoraApp.ui.showNotification('表单已提交', 'success');
        });
    }

    // Metric cards click
    const metricCards = document.querySelectorAll('.metric-card');
    metricCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            const label = this.querySelector('.metric-label').textContent;
            console.log('Metric card clicked:', label);
        });
    });

    // Status chips interaction
    const statusChips = document.querySelectorAll('.status-chip');
    statusChips.forEach(chip => {
        chip.style.cursor = 'pointer';
        chip.addEventListener('click', function() {
            console.log('Status chip clicked:', this.textContent.trim());
        });
    });

    // Color blocks copy to clipboard
    const colorSwatches = document.querySelectorAll('.color-main-swatch, .color-main-swatch2, .color-sub-swatch');
    colorSwatches.forEach(swatch => {
        swatch.style.cursor = 'pointer';
        swatch.addEventListener('click', function() {
            const colorCode = this.querySelector('small')?.textContent;
            if (colorCode) {
                // Copy to clipboard (basic implementation)
                console.log('Color code:', colorCode);
                MedoraApp.ui.showNotification(`颜色代码已复制: ${colorCode}`, 'info');
            }
        });
    });

});
