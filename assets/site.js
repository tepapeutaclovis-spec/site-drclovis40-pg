(function(){var K='cc-consent',ID='G-RPFVWD4KLW',b=document.getElementById('cookie'),v=null;
try{v=localStorage.getItem(K)}catch(e){}
function load(){if(window.__ga)return;window.__ga=1;var s=document.createElement('script');s.async=1;s.src='https://www.googletagmanager.com/gtag/js?id='+ID;document.head.appendChild(s);window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config',ID,{anonymize_ip:true})}
function set(x){try{localStorage.setItem(K,x)}catch(e){}if(b)b.hidden=true;if(x==='granted')load()}
if(v==='granted')load();else if(!v&&b)b.hidden=false;
var a=document.getElementById('cc-ok'),r=document.getElementById('cc-no'),m=document.getElementById('cc-manage');
if(a)a.onclick=function(){set('granted')};if(r)r.onclick=function(){set('denied')};
if(m)m.onclick=function(e){e.preventDefault();try{localStorage.removeItem(K)}catch(x){}if(b)b.hidden=false};
document.addEventListener('click',function(e){var l=e.target.closest&&e.target.closest('a[href^="https://wa.me"]');if(l&&window.gtag)gtag('event','generate_lead',{method:'whatsapp',page_path:location.pathname})})})();
(function(){var n=document.getElementById('nav'),b=document.getElementById('burger'),s=document.getElementById('scrim'),x=document.getElementById('closeNav');
if(!n||!b)return;
function shut(){n.classList.remove('open');b.setAttribute('aria-expanded','false');if(s)s.hidden=true;document.body.style.overflow='';}
function subs(){n.querySelectorAll('li.open').forEach(function(l){l.classList.remove('open');var t=l.querySelector('.sub-toggle');if(t)t.setAttribute('aria-expanded','false')})}
b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',String(o));if(s)s.hidden=!o;document.body.style.overflow=o?'hidden':'';});
if(x)x.addEventListener('click',shut);
if(s)s.addEventListener('click',shut);
n.querySelectorAll('.sub-toggle').forEach(function(t){t.addEventListener('click',function(e){e.preventDefault();var li=t.parentNode,was=li.classList.contains('open');subs();if(!was){li.classList.add('open');t.setAttribute('aria-expanded','true')}})});
n.addEventListener('click',function(e){if(e.target.closest&&e.target.closest('a'))shut()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){shut();subs()}});
document.addEventListener('click',function(e){if(!n.contains(e.target)&&!b.contains(e.target))subs()});
})();
