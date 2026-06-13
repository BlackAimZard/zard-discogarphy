document.body.insertAdjacentHTML('beforeend', '<button id="mBtn" style="display:none; position:fixed; bottom:20px; right:20px; z-index:9999; padding:10px 15px; background:#003399; color:#fff; border:none; border-radius:5px; font-size:20px; cursor:pointer; box-shadow:0 2px 5px rgba(0,0,0,0.3);">☰</button>');

// LOGIC
var btn = document.getElementById('mBtn');
btn.onclick = function() { window.parent.postMessage('toggle', '*'); };

window.addEventListener('message', function(e) {
if (e.data === 'show') btn.style.display = 'block';
if (e.data === 'hide') btn.style.display = 'none';
});

window.parent.postMessage('load', '*');