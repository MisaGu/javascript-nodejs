var head=function(e){function t(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return e[n].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n=window.webpackJsonp_name_;window.webpackJsonp_name_=function(i,o){for(var r,a,c=0,l=[];c<i.length;c++)a=i[c],s[a]&&l.push.apply(l,s[a]),s[a]=0;for(r in o)e[r]=o[r];for(n&&n(i,o);l.length;)l.shift().call(null,t)};var i={},s={1:0};return t.e=function(e,n){if(0===s[e])return n.call(null,t);if(void 0!==s[e])s[e].push(n);else{s[e]=[n];var i=document.getElementsByTagName("head")[0],o=document.createElement("script");o.type="text/javascript",o.charset="utf-8",o.async=!0,o.src=t.p+""+e+".e0527211daac518b4aa2.js",i.appendChild(o)}},t.m=e,t.c=i,t.p="/js/",t(0)}([function(e,t,n){"use strict";n(30),t.init=n(15),t.login=n(26),n(27),t.Modal=n(4),t.fontTest=n(23),t.resizeOnload=n(13),n(25),n(29),n(28),n(24)},,,,function(e){"use strict";function t(){this.render(),this.onClick=this.onClick.bind(this),this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this),this.elem.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onDocumentKeyDown)}t.prototype.render=function(){document.body.insertAdjacentHTML("beforeEnd",'<div class="modal"><div class="modal-dialog"></div></div>'),this.elem=document.body.lastChild,this.contentElem=this.elem.lastChild},t.prototype.onClick=function(e){e.target.classList.contains("close-button")&&this.remove()},t.prototype.onDocumentKeyDown=function(e){27==e.keyCode&&(e.preventDefault(),this.remove())},t.prototype.showOverlay=function(){this.contentElem.classList.add("modal-overlay")},t.prototype.hideOverlay=function(){this.contentElem.classList.remove("modal-overlay")},t.prototype.setContent=function(e){"string"==typeof e?this.contentElem.innerHTML=e:(this.contentElem.innerHTML="",this.contentElem.appendChild(e));var t=this.contentElem.querySelector("[autofocus]");t&&t.focus()},t.prototype.remove=function(){document.body.removeChild(this.elem),document.removeEventListener("keydown",this.onDocumentKeyDown)},e.exports=t},,,function(e){"use strict";function t(e){if(e=e||{},this.elem=e.elem,this.size=e.size||"medium",this["class"]=e["class"]?" "+e["class"]:"",this.elemClass=e.elemClass,"medium"!=this.size&&"small"!=this.size)throw new Error("Unsupported size: "+this.size);this.elem||(this.elem=document.createElement("div"))}t.prototype.start=function(){this.elemClass&&this.elem.classList.toggle(this.elemClass),this.elem.insertAdjacentHTML("beforeend",'<span class="spinner spinner_active spinner_'+this.size+this["class"]+'"><span class="spinner__dot spinner__dot_1"></span><span class="spinner__dot spinner__dot_2"></span><span class="spinner__dot spinner__dot_3"></span></span>')},t.prototype.stop=function(){this.elem.removeChild(this.elem.querySelector(".spinner")),this.elemClass&&this.elem.classList.toggle(this.elemClass)},e.exports=t},,function(e){"use strict";function t(e,t){function n(){return o?(i=arguments,void(s=this)):(e.apply(this,arguments),o=!0,void setTimeout(function(){o=!1,i&&(n.apply(s,i),i=s=null)},t))}var i,s,o=!1;return n}e.exports=t},function(e,t,n){"use strict";function i(e){e=e||document;var t=Math.max(e.body.scrollHeight,e.documentElement.scrollHeight,e.body.offsetHeight,e.documentElement.offsetHeight,e.body.clientHeight,e.documentElement.clientHeight);return e.documentElement.scrollWidth>e.documentElement.clientWidth&&(s||(s=o()),t+=s),t}var s,o=n(11);e.exports=i},function(e){"use strict";function t(){var e=document.createElement("div");if(e.style.cssText="visibility:hidden;height:100px",!document.body)throw new Error("getScrollbarHeight called to early: no document.body");document.body.appendChild(e);var t=e.offsetWidth;e.style.overflow="scroll";var n=document.createElement("div");n.style.width="100%",e.appendChild(n);var i=n.offsetWidth;return e.parentNode.removeChild(e),t-i}e.exports=t},function(e,t,n){"use strict";function i(e,t){function n(e,n){clearTimeout(i),t(e,n)}var i=setTimeout(function(){t(new Error("timeout"))},500);try{(e.contentDocument||e.contentWindow.document).body}catch(r){s(e,n)}if(!e.offsetWidth){var a=e.cloneNode(!0);return a.name="",a.style.height="50px",a.style.position="absolute",a.style.display="block",a.style.top="10000px",a.onload=function(){var t=o(this.contentDocument);e.style.display="block",a.remove(),n(null,t)},void document.body.appendChild(a)}e.style.display="block",e.style.height="1px";var c=o(e.contentDocument);e.style.height="",n(null,c)}function s(){throw new Error("Not implemented yet")}var o=n(10);i.async=function(e,t){setTimeout(function(){i(e,t)},0)},e.exports=i},function(e,t,n){"use strict";var i=n(12),s=n(9),o=[];t.iframe=function(e){function t(){i.async(e,function(t,n){t&&console.error(t),n&&(e.style.height=n+"px")})}t()},t.codeTabs=function(e){function t(){var t=e.closest(".code-tabs"),n=(e.closest("[data-code-tabs-content]"),t.querySelector("[data-code-tabs-switches]")),i=n.firstElementChild;i.offsetWidth>n.offsetWidth?t.classList.add("code-tabs_scroll"):t.classList.remove("code-tabs_scroll")}t(),o.push(t)},window.addEventListener("resize",s(function(){o.forEach(function(e){e()})},200))},,function(e){"use strict";function t(e){i[e]?i[e]():s[e]=!0}function n(e,t){s[e]?t():i[e]=t}var i={},s={};e.exports={whenReady:t,addHandler:n}},,,,,,,,function(e){"use strict";e.exports=function(){function e(){n!=t.offsetWidth?document.body.classList.remove("no-icons"):setTimeout(e,100)}var t=document.createElement("span");document.body.appendChild(t),t.className="font-test",t.style.fontFamily="serif";var n=t.offsetWidth;t.style.fontFamily="",e()}},function(){"use strict";var e;document.addEventListener("mouseover",function(t){var n=t.target.closest("[data-add-class-on-hover]");n&&(e=n,n.classList.add("hover"))}),document.addEventListener("touchend",function(){setTimeout(function(){e&&(e.classList.remove("hover"),e=null)},500)}),document.addEventListener("mouseout",function(t){var n=t.target.closest("[data-add-class-on-hover]");n!=e&&(e.classList.remove("hover"),e=null)})},function(){"use strict";function e(){o&&console.log.apply(console,arguments)}function t(){e("compactifySidebar");var t=document.querySelector(".sidebar"),n=t.querySelector(".sidebar__content"),i=t.querySelector(".sidebar__inner"),s=t.classList.contains("sidebar_sticky-footer"),o=t.classList.contains("sidebar_compact");if(o){var r;r=s?n.lastElementChild.getBoundingClientRect().top-n.lastElementChild.previousElementSibling.getBoundingClientRect().bottom:n.getBoundingClientRect().bottom-n.lastElementChild.getBoundingClientRect().bottom,e("decompact?",r),r>150&&t.classList.remove("sidebar_compact")}else e(i.scrollHeight,i.clientHeight),i.scrollHeight>i.clientHeight&&(e("compact!"),t.classList.add("sidebar_compact"))}function n(){var n=document.querySelector(".sitetoolbar");if(!n)return void e("no sitetoolbar");var s=(n.offsetHeight,document.querySelector(".sidebar"));s&&(s.style.top=Math.max(n.getBoundingClientRect().bottom,0)+"px",t()),i()}function i(){var e=document.documentElement.clientWidth<=r,t=document.querySelector('meta[name="viewport"]').content;t=t.replace(/user-scalable=\w+/,"user-scalable="+(e?"yes":"no")),document.querySelector('meta[name="viewport"]').content=t}var s,o=!1,r=840;!function(){function t(){e("onWindowScrollAndResizeThrottled",s),s||(s=window.requestAnimationFrame(function(){n(),s=null}))}window.addEventListener("scroll",t),window.addEventListener("resize",t),document.addEventListener("DOMContentLoaded",t)}()},function(e,t,n){"use strict";function i(){var e=new o,t=new r;e.setContent(t.elem),t.start(),n.e(2,function(){e.remove();var t=n(14).AuthModal;new t},0)}var s=n(15),o=n(4),r=n(7);s.addHandler("login",function(){var e=document.querySelector(".sitetoolbar__login");e.onclick=function(e){e.preventDefault(),i()}}),e.exports=i},function(e){"use strict";function t(){var e=document.createElement("form");e.innerHTML='<input type="hidden" name="_csrf" value="'+window.csrf+'">',e.method="POST",e.action="/auth/logout",document.body.appendChild(e),e.submit()}document.addEventListener("click",function(e){e.target.hasAttribute("data-action-user-logout")&&(e.preventDefault(),t())}),e.exports=t},function(e,t,n){"use strict";function i(e){if(!~["INPUT","TEXTAREA","SELECT"].indexOf(document.activeElement.tagName)&&e[r+"Key"]){var t=null;switch(e.keyCode){case 37:t="prev";break;case 39:t="next";break;default:return}var n=document.querySelector('link[rel="'+t+'"]');n&&(document.location=n.href,e.preventDefault())}}function s(){var e,t=r[0].toUpperCase()+r.slice(1),n=document.querySelector('link[rel="next"]');n&&(e=document.querySelector('a[href="'+n.getAttribute("href")+'"] .page__nav-text-shortcut'),e.innerHTML=t+' + <span class="page__nav-text-arr">→</span>');var i=document.querySelector('link[rel="prev"]');i&&(e=document.querySelector('a[href="'+i.getAttribute("href")+'"] .page__nav-text-shortcut'),e.innerHTML=t+' + <span class="page__nav-text-arr">←</span>')}var o=n(33),r=~navigator.userAgent.toLowerCase().indexOf("mac os x")?"ctrl":"alt";o(document,{onRight:function(){var e=document.querySelector('link[rel="prev"]');e&&(document.location=e.href)},onLeft:function(){var e=document.querySelector('link[rel="next"]');e&&(document.location=e.href)}}),document.addEventListener("keydown",i),document.addEventListener("DOMContentLoaded",s)},function(){"use strict";function e(){document.querySelector(".page").classList.toggle("page_sidebar_on"),document.querySelector(".page").classList.contains("page_sidebar_on")?delete localStorage.noSidebar:localStorage.noSidebar=1}function t(t){void 0!==t.target.dataset.sidebarToggle&&e()}function n(t){if(!~["INPUT","TEXTAREA","SELECT"].indexOf(document.activeElement.tagName)&&t.keyCode=="S".charCodeAt(0)){if(~navigator.userAgent.toLowerCase().indexOf("mac os x")){if(!t.metaKey||!t.altKey)return}else if(!t.altKey)return;e(),t.preventDefault()}}document.addEventListener("click",t),document.addEventListener("keydown",n)},function(){"use strict";document.addEventListener("click",function(e){for(var t=e.target;t;){if(t.className.match(/_unready\b/))return void e.preventDefault();t=t.parentElement}}),document.addEventListener("submit",function(e){e.target.className.match(/_unready\b/)&&event.preventDefault()})},,,function(e){"use strict";function t(e,t){t=t||{};var n,i,s,o,r,a=t.onRight||function(){},c=t.onLeft||function(){},l=t.tolerance||100,u=t.threshold||150,d=t.allowedTime||500;e.addEventListener("touchstart",function(e){var t=e.changedTouches[0];s=0,n=t.pageX,i=t.pageY,r=Date.now()},!1),e.addEventListener("touchend",function(e){var t=e.changedTouches[0];s=t.pageX-n,o=Date.now()-r,Math.abs(t.pageY-i)>l||o>d||(s>u&&a(e),-u>s&&c(e))},!1)}e.exports=t}]);