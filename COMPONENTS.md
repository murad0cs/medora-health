# Medora Health CRM - Component Templates

Quick reference for common UI patterns used throughout the application.

## 📋 Navbar

```html
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
```

## 🔙 Back Button

```html
<div class="back-row">
    <div class="back-icon"></div>
    返回上一页
</div>
```

```css
/* Add to page-specific CSS if using back button */
.back-row {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    font-size: 17px;
    margin-bottom: var(--spacing-xl);
    font-weight: var(--font-weight-semibold);
    color: var(--primary-dark);
    cursor: pointer;
}
```

## 🎴 Action Card

```html
<div class="actions">
    <div class="action-card">
        <div class="action-title">操作名称</div>
    </div>
</div>
```

## 👤 Patient Card

```html
<div class="patient-card">
    <div class="patient-img"></div>
    <div class="patient-info">
        <div class="patient-name">患者姓名 — 年龄 / 性别</div>
        <div class="patient-meta">描述信息</div>
    </div>
    <span class="status-badge status-high">紧急</span>
</div>
```

## 📨 Message Item

```html
<div class="message-item">
    <div class="message-icon"></div>
    <div class="message-content">
        <div class="msg-title">发送者</div>
        <div class="msg-text">消息内容...</div>
        <div class="msg-time">时间</div>
    </div>
</div>
```

## 🔍 Filter Card with Search

```html
<div class="filter-card">
    <div class="search-row">
        <input class="search-box" placeholder="搜索..." />
        <select class="dropdown">
            <option>选项1</option>
            <option>选项2</option>
        </select>
    </div>
    
    <div class="filters">
        <label><input type="checkbox" checked> 选项1</label>
        <label><input type="checkbox"> 选项2</label>
        <label><input type="checkbox"> 选项3</label>
    </div>
</div>
```

## 📊 Data Table

```html
<div class="table-wrapper">
    <table class="table">
        <thead>
            <tr>
                <th>列1</th>
                <th>列2</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>数据1</td>
                <td>数据2</td>
                <td>
                    <button class="btn">操作</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
```

## 🏷️ Status Badges

```html
<!-- High Priority / Urgent -->
<span class="status-badge status-high">紧急</span>
<span class="status-badge status-urgent">紧急</span>

<!-- Medium Priority -->
<span class="status-badge status-medium">处理中</span>

<!-- Low Priority / Success -->
<span class="status-badge status-low">低</span>

<!-- Text-only status (no background) -->
<span class="status-confirmed">已确认</span>
<span class="status-pending">待确认</span>
```

## 🔘 Buttons

```html
<!-- Regular Button -->
<button class="btn">普通按钮</button>

<!-- Primary Button -->
<button class="btn btn-primary">主要按钮</button>

<!-- Multiple Buttons -->
<div>
    <button class="btn">查看详情</button>
    <button class="btn">发送消息</button>
</div>
```

## 📦 Section Card

```html
<div class="section">
    <div class="section-title">部分标题</div>
    <!-- Content goes here -->
</div>
```

## 📅 Schedule Grid

```html
<div class="schedule-grid">
    <div class="time-slot">09:00<br><span class="slot-status-confirmed">已确认</span></div>
    <div class="time-slot">09:30<br><span class="slot-status-pending">待确认</span></div>
    <!-- More slots... -->
</div>
```

## 📝 Form Input

```html
<!-- Search Box -->
<input class="search-box" placeholder="搜索..." />

<!-- Regular Input -->
<input class="input" type="text" placeholder="输入..." />

<!-- Dropdown -->
<select class="dropdown">
    <option>选项1</option>
    <option>选项2</option>
</select>
```

## 🎨 Utility Classes

```html
<!-- Text Alignment -->
<div class="text-center">居中文本</div>
<div class="text-left">左对齐文本</div>
<div class="text-right">右对齐文本</div>

<!-- Spacing -->
<div class="mt-lg">上边距</div>
<div class="mb-md">下边距</div>

<!-- Flexbox -->
<div class="flex flex-gap-md">
    <div>项目1</div>
    <div>项目2</div>
</div>

<div class="flex-between">
    <div>左侧</div>
    <div>右侧</div>
</div>
```

## 🎯 Complete Page Template

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>页面标题 - Medora Health</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/variables.css">
    <link rel="stylesheet" href="../css/common.css">
    <link rel="stylesheet" href="../css/page-name.css">
</head>
<body>

<!-- Navbar -->
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

<!-- Main Content -->
<div class="container">
    <div class="back-row">
        <div class="back-icon"></div>
        返回
    </div>
    
    <!-- Your content here -->
    <div class="section">
        <div class="section-title">标题</div>
        <!-- Content -->
    </div>
</div>

<!-- Scripts -->
<script src="../js/common.js"></script>
<script src="../js/page-name.js"></script>
</body>
</html>
```

---

**Copy and customize these templates for your pages!**
