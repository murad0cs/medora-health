# Medora Health CRM

A modern Hospital Management System / CRM for healthcare professionals built with HTML, CSS, and JavaScript.

## Quick Start

### Prerequisites

- Node.js >= 16.0.0 (for the local server)
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Running Locally

1. Clone or download this repository

2. Open a terminal in the project folder

3. Install dependencies and start the server:

```bash
# Install dependencies (first time only)
npm install

# Start the local development server
npx serve -l 3000
```

4. Open your browser and visit:

```
http://localhost:3000/pages/doctor-preview.html
```

### Available Pages

Once the server is running, you can access these pages:

| Page | URL | Description |
|------|-----|-------------|
| Doctor Dashboard | `/pages/doctor-preview.html` | Main dashboard with overview |
| Case List | `/pages/case-list.html` | Patient cases table with filtering |
| Case Detail | `/pages/case-detail.html` | Detailed case view with tabs |
| Case Timeline | `/pages/case-detail-timeline.html` | Timeline view of case history |
| Messages | `/pages/messages.html` | Real-time messaging interface |
| Appointments | `/pages/appointments.html` | Calendar and schedule management |
| Reports | `/pages/reports.html` | Medical reports viewer |
| UI Kit | `/pages/ui-kit.html` | Design system documentation |

### Alternative: Using Python

If you have Python installed:

```bash
# Python 3
python -m http.server 3000

# Then visit: http://localhost:3000/pages/doctor-preview.html
```

### Alternative: Using VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on `pages/doctor-preview.html`
3. Select "Open with Live Server"

## Figma Design Mapping

This project implements the design from the Figma file: [Meaora Health/CRM](https://www.figma.com/design/gZ2r1YvbPoIcGT7CPMGLTC/Meaora-Health-CRM)

### Figma Frames to Implementation

| Figma Frame | Implementation | Description |
|-------------|----------------|-------------|
| 医生-预览 | `doctor-preview.html` | Main doctor dashboard with pending cases, messages overview, and appointment schedule |
| UI Kit | `ui-kit.html` | Design system components including colors, typography, forms, and status indicators |
| 医生-病例详情1 | `case-detail.html` (Medical Info tab) | Case detail with patient info, medical history, and reports |
| 医生-病例详情2 | `case-detail-timeline.html` | Timeline view showing case activity history |
| 医生-病例详情3 | `case-detail.html` (Messages tab) | In-case messaging with patient |
| 医生-病例详情4 | `case-detail.html` (Tasks tab) | Task management for the case |
| 医生-病例详情5 | `case-detail.html` (Process tab) | Medical process workflow steps |
| 医生-病例详情5 | `case-detail.html` (Follow-up tab) | Follow-up appointment planning |
| 医生-消息中心 | `messages.html` | Full messaging center with conversation list and chat interface |

### Additional Pages (Extended from Figma)

These pages were added to provide complete navigation flow:

| Page | File | Purpose |
|------|------|---------|
| Case List | `case-list.html` | Table view of all patient cases with filtering |
| Appointments | `appointments.html` | Full calendar and scheduling interface |
| Reports | `reports.html` | Medical reports grid with filtering |

### Design Elements Implemented

- Sidebar navigation (teal gradient with icons)
- Top navbar with logo, notifications, and user profile
- Card-based layouts with glassmorphism effect
- Metric cards with colored icons
- Tab navigation for case details
- Status badges and risk indicators
- Form components (inputs, dropdowns, date pickers)
- Message bubbles and conversation list
- Timeline visualization
- Calendar mini-view and schedule grid

## Project Structure

```
medora-health-crm/
├── css/                    # Stylesheets
│   ├── variables.css       # CSS custom properties (colors, spacing, etc.)
│   ├── common.css          # Shared styles (navbar, buttons, cards)
│   ├── doctor-preview.css  # Dashboard page styles
│   ├── case-list.css       # Case list page styles
│   ├── case-detail.css     # Case detail page styles
│   ├── messages.css        # Messages page styles
│   ├── appointments.css    # Appointments page styles
│   └── reports.css         # Reports page styles
│
├── js/                     # JavaScript files
│   ├── common.js           # Shared utilities and navigation
│   ├── doctor-preview.js   # Dashboard functionality
│   ├── case-list.js        # Case list functionality
│   ├── case-detail.js      # Case detail functionality
│   ├── messages.js         # Messages functionality
│   └── appointments.js     # Appointments functionality
│
├── pages/                  # HTML pages
│   ├── doctor-preview.html # Main dashboard
│   ├── case-list.html      # Cases management
│   ├── case-detail.html    # Single case view
│   ├── messages.html       # Messaging center
│   ├── appointments.html   # Schedule management
│   ├── reports.html        # Reports viewer
│   └── ui-kit.html         # Style guide
│
├── package.json            # Node.js dependencies
└── README.md               # This file
```

## Design System

### CSS Variables

All design tokens are defined in `css/variables.css`:

- Colors: Primary teal (#0ab4a8), dark teal, status colors
- Typography: Inter font family, various weights
- Spacing: Consistent spacing scale (5px to 30px)
- Border Radius: From 8px to fully rounded
- Shadows: Subtle elevation system
- Transitions: Smooth 0.2s-0.3s animations

### Key Components

- Navbar: Top navigation with logo, notifications, user info
- Cards: Glassmorphism cards with backdrop blur
- Buttons: Primary teal, outlined, and ghost variants
- Badges: Status indicators (danger, warning, success)
- Tables: Data tables with hover effects
- Tabs: Pill-style tab navigation
- Forms: Rounded inputs and dropdowns

## Features

- Responsive design for desktop and tablet
- Interactive navigation between pages
- Tab-based content organization
- Real-time messaging interface mockup
- Calendar-based appointment scheduling
- Patient case management workflow

## Customization

### Changing Colors

Edit the CSS variables in `css/variables.css`:

```css
:root {
    --primary-teal: #0ab4a8;      /* Main brand color */
    --primary-dark: #1d615a;      /* Dark variant */
    --status-urgent: #ff6b6b;     /* Danger/urgent status */
    --status-medium: #f5b942;     /* Warning status */
    --status-success: #0aa06f;    /* Success status */
}
```

### Adding New Pages

1. Create a new HTML file in `pages/`
2. Copy the navbar structure from an existing page
3. Create a corresponding CSS file in `css/`
4. Link the CSS files in your HTML head

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - Medora Health
