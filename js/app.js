(function(){
  const config = window.URC_MINS_CONFIG || {};
  const launch = document.getElementById('launchButton');
  if (launch && config.appUrl) launch.href = config.appUrl;
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();

// Load the existing Google Apps Script application inside this GitHub page.
(function () {
  const cfg = window.URC_MINS_CONFIG || {};
  const url = cfg.appUrl;
  const frame = document.getElementById('permitAppFrame');
  const openLink = document.getElementById('openNewTab');
  const help = document.getElementById('embedHelp');
  if (!url || !frame || !openLink) return;
  frame.src = url;
  openLink.href = url;
  frame.addEventListener('load', function () {
    if (help) help.textContent = 'Application loaded. Sign in using your existing URC account.';
  });
})();
