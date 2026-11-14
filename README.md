# URC MINS Permit Status Tracker – GitHub Pages

## Package contents
- `index.html` – redesigned responsive landing page and application panel
- `css/style.css` – complete premium navy/green responsive styling
- `js/config.js` – existing Apps Script Web App URL
- `js/app.js` – launch links and embedded frame with fallback
- `assets/urc-logo.png` – supplied URC logo asset

## Upload to GitHub
1. Back up/download your current repository first.
2. Extract this ZIP.
3. Upload the CONTENTS of `URC_MINS_Attractive_Design` to the repository root.
4. Confirm `index.html` is at the root and folders `css`, `js`, `assets` are alongside it.
5. Commit changes and wait for GitHub Pages deployment.
6. Open the GitHub Pages site and press Ctrl+Shift+R.

## Important application note
The page attempts to display the existing Apps Script URL in an iframe. Google may block or redirect Apps Script pages when embedded in another domain, especially where Google sign-in or redirects are involved. If the embedded area shows a Google Drive error or remains blank, use the provided **Open in new tab** link. This is a Google hosting/authentication limitation and cannot be fixed by CSS alone.

## Backend/data safety
This package changes GitHub frontend files only. It does not change Apps Script, Google Sheets, Drive folders, permit records, user accounts or passwords.
