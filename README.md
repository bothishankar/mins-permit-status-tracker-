# URC MINS Permit Status Tracker — Modular GitHub Frontend

Brand: URC Construction Pvt. Ltd.

## Structure
- `index.html` — GitHub Pages landing page
- `css/style.css` — responsive styling and animation
- `js/config.js` — current Google Apps Script Web App URL
- `js/app.js` — frontend launch behaviour
- `assets/urc-logo.png` — URC logo asset

## GitHub Pages deployment
1. Back up the current repository contents.
2. Upload the contents of this folder to the repository root (not the folder itself).
3. Ensure the homepage is named exactly `index.html`.
4. Commit changes and wait for GitHub Pages to publish.
5. Open `https://bothishankar.github.io/mins-permit-status-tracker-/`.

## Backend and data
The launch button opens the existing Google Apps Script Web App in a new tab. Google Apps Script remains the application backend; Google Sheets and Google Drive remain the existing data/document stores. This frontend package does not migrate or modify backend code or stored records.

The Apps Script URL currently configured in `js/config.js` is the URL previously supplied in this conversation. If that URL displays a Google error, copy the current Web App URL from Apps Script → Deploy → Manage deployments and replace `appUrl` in `js/config.js`, then commit again.

## Important
This is the modular branded GitHub frontend/launcher, not a direct cross-origin API implementation. Existing login, ZIP processing, permit updates, document access and reports continue to run in the Apps Script application. Test the Web App URL independently before relying on the GitHub launch button.
