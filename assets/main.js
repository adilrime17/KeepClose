// Minimal JS: form submit + animations + progressive enhancement
const WEBAPP_URL = "REPLACE_WITH_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL"; // <-- set this to your Apps Script web app URL

function postToSheet(payload, cb){
  if(!WEBAPP_URL || WEBAPP_URL.includes('REPLACE_WITH')) {
    cb && cb({ok:false, msg: 'No Google Sheets endpoint set. See README.'});
    return;
  }
  fetch(WEBAPP_URL, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
  }).then(r => r.json()).then(data => cb && cb({ok:true, data})).catch(err => cb && cb({ok:false, err}));
}

function attachForm(id, statusEl){
  const form = document.getElementById(id);
  const status = document.getElementById(statusEl);
  if(!form) return;
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    const obj = {};
    fd.forEach((v,k)=> obj[k]=v);
    status.textContent = 'Sending...';
    postToSheet(obj, (res)=>{
      if(res.ok){ status.textContent = 'Thanks! We got it.'; form.reset(); }
      else { status.textContent = 'Failed to send — set your script URL in assets/main.js or check README.'; }
    });
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  attachForm('leadForm','formStatus');
  attachForm('leadForm2','formStatus2');
});
