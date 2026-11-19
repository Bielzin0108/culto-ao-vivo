const styleToggle=document.getElementById('styleMenuToggle'),styleSidebar=document.getElementById('styleSidebar'),styleClose=document.getElementById('closeStyleMenu');
function setStyleMenu(open){styleSidebar?.classList.toggle('mobile-open',open);styleToggle?.setAttribute('aria-expanded',String(open))}
styleToggle?.addEventListener('click',()=>setStyleMenu(!styleSidebar.classList.contains('mobile-open')));styleClose?.addEventListener('click',()=>setStyleMenu(false));
document.addEventListener('click',e=>{if(window.innerWidth<=850&&styleSidebar?.classList.contains('mobile-open')&&!styleSidebar.contains(e.target)&&e.target!==styleToggle)setStyleMenu(false)});
