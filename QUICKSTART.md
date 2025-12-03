# Medora Health CRM - Quick Start Guide

## Overview

This is a hospital management system with a clean, modern interface. The project uses vanilla HTML, CSS, and JavaScript - no frameworks or build tools required!

## What's Included

Current Pages:
- Dashboard (`index.html`) - Main overview page
- Case List (`pages/case-list.html`) - Patient case management

Placeholder Pages:
- Case Detail
- Appointments
- Messages  
- Reports

## Project Architecture

### CSS Structure (Cascading Approach)
```
1. variables.css   → Define colors, fonts, spacing
2. common.css      → Navbar, buttons, tables, cards
3. page.css        → Page-specific styles
```

**Always include in this order:**
```html
<link rel="stylesheet" href="../css/variables.css">
<link rel="stylesheet" href="../css/common.css">
<link rel="stylesheet" href="../css/your-page.css">
```

### JavaScript Structure
```
1. common.js       → MedoraApp utilities (navigation, search, UI)
2. page.js         → Page-specific functionality
```

**Always include in this order:**
```html
<script src="../js/common.js"></script>
<script src="../js/your-page.js"></script>
```

## Using the Design System

### Colors (from variables.css)
```css
var(--primary-teal)        /* #0ab4a8 - Main brand */
var(--primary-dark)        /* #1d615a - Text/headings */
var(--bg-card)             /* Semi-transparent white */
var(--status-urgent)       /* #ff6b6b - Red */
var(--status-medium)       /* #f5b942 - Yellow */
var(--status-low)          /* #66c18c - Green */
```

### Common Components

**Button:**
```html
<button class="btn">普通按钮</button>
<button class="btn btn-primary">主要按钮</button>
```

**Status Badge:**
```html
<span class="status-badge status-high">紧急</span>
<span class="status-badge status-medium">处理中</span>
<span class="status-badge status-low">低</span>
```

**Section Card:**
```html
<div class="section">
    <div class="section-title">标题</div>
    <!-- Content -->
</div>
```

**Table:**
```html
<div class="table-wrapper">
    <table class="table">
        <!-- Table content -->
    </table>
</div>
```

## Common Tasks

### Navigate Between Pages
```javascript
MedoraApp.navigate.toDashboard()
MedoraApp.navigate.toCaseList()
MedoraApp.navigate.toCaseDetail('BJ-123')
```

### Filter a Table
```javascript
// Search in first column
MedoraApp.search.filterTable(searchTerm, '.table tbody tr', [0])

// Filter by status in second column
MedoraApp.search.filterByStatus(['已完成', '处理中'], '.table tbody tr', 1)
```

### Show Notifications
```javascript
MedoraApp.ui.showNotification('操作成功！', 'success')
```

### Format Dates
```javascript
MedoraApp.ui.getRelativeTime('2025-12-03 10:00')  // "2小时前"
```

## Creating a New Page

### Step 1: HTML Template
Create `pages/new-page.html`:
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>新页面 - Medora Health</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/variables.css">
    <link rel="stylesheet" href="../css/common.css">
    <link rel="stylesheet" href="../css/new-page.css">
</head>
<body>

<!-- Navbar (copy from any existing page) -->
<div class="navbar">
    <div class="navbar-left">
        <div class="logo"></div>
        <div class="system-title">Medora Health 医院管理系统</div>
    </div>
    <div class="navbar-right">
        <div>doctor@china.com</div>
        <img src="https://via.placeholder.com/40" class="profile-img" alt="Profile">
        <span>Dr. Oven</span>
    </div>
</div>

<div class="container">
    <!-- Your content here -->
</div>

<script src="../js/common.js"></script>
<script src="../js/new-page.js"></script>
</body>
</html>
```

### Step 2: CSS (if needed)
Create `css/new-page.css` for page-specific styles.

### Step 3: JavaScript (if needed)
Create `js/new-page.js`:
```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Your page-specific code
});
```

### Step 4: Add Navigation
Edit `js/common.js`, add to `navigate` object:
```javascript
toNewPage() {
    window.location.href = '/pages/new-page.html';
}
```

## Tips and Best Practices

1. **Use CSS variables** - Don't hardcode colors/spacing
2. **Reuse common.css classes** - Check before creating new styles
3. **Use MedoraApp utilities** - Don't reinvent the wheel
4. **Keep it simple** - Vanilla JS is powerful enough
5. **Mobile first** - Test responsive design

## Troubleshooting

**Styles not loading?**
- Check file paths (use `../` for pages folder)
- Verify CSS files are in correct order

**Navigation not working?**
- Make sure `common.js` is loaded first
- Check browser console for errors

**Filters not working?**
- Ensure table has class `.table`
- Check column indices match your table structure

## Resources

- CSS Variables: See `css/variables.css`
- Common Styles: See `css/common.css`
- API Reference: See `README.md`

---

Ready to get started? Begin by exploring the existing pages to understand the structure and patterns used throughout the project.
