document.body.insertAdjacentHTML('beforeend', '<button id="mBtn" style="display:none; position:fixed; bottom:20px; right:20px; z-index:9999; width:45px; height:45px; padding:0; text-align:center; line-height:45px; background:#003399; color:#fff; border:none; border-radius:5px; font-size:24px; cursor:pointer; box-shadow:0 2px 5px rgba(0,0,0,0.3); -webkit-appearance:none; appearance:none;">☰</button>');

// LOGIC
var btn = document.getElementById('mBtn');
btn.onclick = function() { window.parent.postMessage('toggle', '*'); };

window.addEventListener('message', function(e) {
if (e.data === 'show') btn.style.display = 'block';
if (e.data === 'hide') btn.style.display = 'none';
});

window.parent.postMessage('load', '*');