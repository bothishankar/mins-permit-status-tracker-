# URC MINS Permit Status Tracker – Embedded GitHub Frontend

Upload the contents of this folder to the root of the existing GitHub Pages repository.

The page embeds the existing Google Apps Script web app using the URL in `js/config.js`.
The existing Apps Script `doGet()` already uses `HtmlService.XFrameOptionsMode.ALLOWALL`, so no Apps Script code change is required for iframe embedding based on the supplied source.

Keep the existing Apps Script deployment and data. Do not run `setupApplication()`.

If the iframe is blocked by browser or Google account policy, use the Open in new tab fallback link and investigate the browser console / deployment response.
