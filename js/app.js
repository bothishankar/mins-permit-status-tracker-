(function(){
  const config = window.URC_MINS_CONFIG || {};
  const launch = document.getElementById('launchButton');
  if (launch && config.appUrl) launch.href = config.appUrl;
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
