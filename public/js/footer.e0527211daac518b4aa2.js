var footer=function(t){function e(i){if(n[i])return n[i].exports;var s=n[i]={exports:{},id:i,loaded:!1};return t[i].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var n={};return e.m=t,e.c=n,e.p="/js/",e(0)}({0:function(t,e,n){"use strict";var i=n(22);e.init=function(){i()}},22:function(t,e,n){"use strict";var i=n(31);t.exports=function(){function t(t){var e=t.clientX+o;e+s.offsetWidth>document.documentElement.clientWidth&&(e=Math.max(0,t.clientX-o-s.offsetWidth)),s.style.left=e+"px";var n=t.clientY+r;n+s.offsetHeight>document.documentElement.clientHeight&&(n=Math.max(0,t.clientY-r-s.offsetHeight)),s.style.top=n+"px"}function e(e){var n=e.target.closest("a");n&&(s=document.createElement("span"),s.className="link__type",n.getAttribute("data-tooltip")?s.setAttribute("data-tooltip",n.getAttribute("data-tooltip")):s.setAttribute("data-url",n.getAttribute("href")),document.body.appendChild(s),t(e),document.addEventListener("mousemove",t))}function n(){s&&(document.removeEventListener("mousemove",t),s.remove(),s=null)}var s=null,o=8,r=10,a=i(e,n,"a");document.addEventListener("mouseover",function(t){t.target.closest("a")&&a.call(this,t)}),document.addEventListener("mouseout",a)}},31:function(t){"use strict";function e(t,e){function n(t){s=t.pageX,o=t.pageY}function i(t,e){return e.hoverIntentTimer=clearTimeout(e.hoverIntentTimer),Math.sqrt((r-s)*(r-s)+(a-o)*(a-o))<l.sensitivity?(e.removeEventListener("mousemove",n),e.hoverIntentState=!0,void l.over.call(e,t)):(r=s,a=o,void(e.hoverIntentTimer=setTimeout(function(){i(t,e)},l.interval)))}var s,o,r,a,l={interval:100,sensitivity:6,timeout:0,over:t,out:e};return function(t){this.hoverIntentTimer&&(clearTimeout(this.hoverIntentTimer),delete this.hoverIntentTimer),"mouseover"===t.type?(r=t.pageX,a=t.pageY,this.addEventListener("mousemove",n),this.hoverIntentState||(this.hoverIntentTimer=setTimeout(function(){i(t,this)}.bind(this),l.interval))):(this.removeEventListener("mousemove",n),this.hoverIntentState&&(this.hoverIntentTimer=setTimeout(function(){this.hoverIntentState=!1,l.out.call(this,t)}.bind(this),l.timeout)))}}t.exports=void 0===document.ontouchstart?e:function(){return function(){}}}});