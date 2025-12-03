# Medora Health CRM - Hospital Management System

A modern, responsive web application for hospital management built with vanilla HTML, CSS, and JavaScript.

## Project Structure

```
Medora/
├── index.html                 # Dashboard (Doctor Preview)
├── assets/
│   └── images/               # Images and icons
├── css/
│   ├── variables.css         # CSS custom properties (colors, fonts, spacing)
│   ├── common.css            # Shared styles (navbar, buttons, cards, tables)
│   ├── dashboard.css         # Dashboard-specific styles
│   └── case-list.css         # Case list page styles
├── js/
│   ├── common.js             # Shared utilities (navigation, search, UI helpers)
│   ├── dashboard.js          # Dashboard page functionality
│   └── case-list.js          # Case list page functionality
└── pages/
    ├── case-list.html        # Case management list
    ├── case-detail.html      # Individual case details (placeholder)
    ├── appointments.html     # Appointment management (placeholder)
    ├── messages.html         # Message center (placeholder)
    └── reports.html          # Reports view (placeholder)
```

## Design System

### Color Palette
- **Primary Teal**: `#0ab4a8` - Main brand color
- **Primary Dark**: `#1d615a` - Text and headings
- **Background Gradient**: `#d9f3ef → #c8e3df → #b9dbd9`
- **Status Colors**:
  - Urgent: `#ff6b6b`
  - Medium: `#f5b942`
  - Low/Success: `#66c18c`

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 600 (Semibold), 700 (Bold)

### Component Library
- Navbar with logo and user profile
- Action cards with hover effects
- Patient cards with status badges
- Message items with timestamps
- Data tables with filters
- Search boxes and dropdowns
- Buttons (primary and secondary)

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required!

### Installation

1. Clone or download the project
2. Open `index.html` in your browser
3. That's it! No dependencies to install.

### Development

Simply edit the files and refresh your browser. The project uses vanilla HTML/CSS/JS with no build process.

## Pages

### Implemented
1. **Dashboard** (`index.html`)
   - Overview of pending cases
   - Quick action cards
   - Unread messages
   - Appointment schedule

2. **Case List** (`pages/case-list.html`)
   - Filterable table of all cases
   - Search functionality
   - Status filters
   - Action buttons

### Placeholder Pages
- Case Detail
- Appointments
- Messages
- Reports

## Adding New Pages

### 1. Create HTML File

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title - Medora Health</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/variables.css">
    <link rel="stylesheet" href="../css/common.css">
    <link rel="stylesheet" href="../css/your-page.css">
</head>
<body>
    <!-- Use navbar structure from existing pages -->
    <script src="../js/common.js"></script>
    <script src="../js/your-page.js"></script>
</body>
</html>
```

### 2. Create CSS File (if needed)

Add page-specific styles to `css/your-page.css`

### 3. Create JS File (if needed)

Add page-specific functionality to `js/your-page.js`

### 4. Add Navigation

Update `js/common.js` to include your new page:

```javascript
navigate: {
    toYourPage() {
        window.location.href = '/pages/your-page.html';
    }
}
```

## API Reference

### MedoraApp Object

Global utility object available on all pages.

#### Navigation
```javascript
MedoraApp.navigate.toDashboard()      // Go to dashboard
MedoraApp.navigate.toCaseList()       // Go to case list
MedoraApp.navigate.toCaseDetail(id)   // Go to specific case
MedoraApp.navigate.toAppointments()   // Go to appointments
MedoraApp.navigate.toMessages()       // Go to messages
MedoraApp.navigate.toReports()        // Go to reports
MedoraApp.navigate.back()             // Browser back button
```

#### Search & Filters
```javascript
MedoraApp.search.filterTable(searchTerm, selector, columns)
MedoraApp.search.filterByStatus(statuses, selector, column)
```

#### UI Helpers
```javascript
MedoraApp.ui.showLoading(element)
MedoraApp.ui.hideLoading(element)
MedoraApp.ui.showNotification(message, type)
MedoraApp.ui.formatDate(dateString)
MedoraApp.ui.getRelativeTime(dateString)
```

#### Storage
```javascript
MedoraApp.storage.save(key, value)
MedoraApp.storage.load(key)
MedoraApp.storage.remove(key)
MedoraApp.storage.clear()
```

## Features

- Responsive designdesktop, tablet, mobile)
- Modern gradient backgrounds
- Glassmorphism effects
- Smooth transitions and animations
- Search and filter functionality
- Modular CSS architecture with variables
- Reusable JavaScript utilities
- Clean, semantic HTML
- Accessibility considerations
- No build process required

## Best Practices

### CSS
- Use CSS variables from `variables.css` for consistency
- Follow BEM-like naming conventions
- Keep page-specific styles in separate files
- Use common styles for shared components

### JavaScript
- Use `MedoraApp` utilities instead of reinventing
- Keep page-specific code in separate files
- Always include `common.js` first
- Use event delegation for dynamic elements

### HTML
- Include all three CSS files: variables, common, page-specific
- Include scripts at the end of body
- Use semantic HTML elements
- Add proper alt text to images

## Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Coding Standards

### Naming Conventions
- CSS classes: kebab-case (`patient-card`, `action-title`)
- JavaScript: camelCase (`filterTable`, `showLoading`)
- Files: kebab-case (`case-list.html`, `common.js`)

### File Organization
- Pages go in `/pages/` directory
- Styles go in `/css/` directory
- Scripts go in `/js/` directory
- Images go in `/assets/images/` directory

## Future Enhancements

- Implement remaining pages (appointments, messages, reports)
- Add backend API integration
- Implement authentication
- Add data persistence
- Create print-friendly views
- Add export functionality (PDF, Excel)
- Implement real-time notifications
- Add dark mode support

## License

Proprietary - Medora Health CRM

## Support

For support, contact: doctor@china.com

---

Built with vanilla HTML, CSS, and JavaScript
