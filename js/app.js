(function(){
  const cfg = window.URC_MINS_CONFIG || {};
  const url = cfg.appUrl;
  const frame = document.getElementById('permitAppFrame');
  const links = ['openNewTab','fallbackLaunch','topLaunch'];
  links.forEach(id => { const el=document.getElementById(id); if(el && url) el.href=url; });
  const year=document.getElementById('year');
  if(year) year.textContent=new Date().getFullYear();
  if(!url || !frame) return;
  // Apps Script may refuse to render in a third-party iframe because of
  // Google authentication/redirect policies. Keep a clear direct-launch fallback.
  frame.src=url;
  const fallback=document.getElementById('frameFallback');
  let loaded=false;
  frame.addEventListener('load',function(){ loaded=true; });
  // Do not inspect cross-origin frame contents. The direct link remains available.
  window.setTimeout(function(){
    if(fallback && !loaded) fallback.style.display='flex';
  },9000);
})();