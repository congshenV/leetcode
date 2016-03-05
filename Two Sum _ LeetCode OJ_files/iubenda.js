(function(e,t){// Copyright (c) 2011-2013 Felix Gnass
"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(t):e.IubSpinner=t()})(this,function(){"use strict";function e(e,t){var i,n=document.createElement(e||"div");for(i in t)n[i]=t[i];return n}function t(e){for(var t=1,i=arguments.length;i>t;t++)e.appendChild(arguments[t]);return e}function i(e,t,i,n){var r=["opacity",t,~~(100*e),i,n].join("-"),a=.01+100*(i/n),o=Math.max(1-(1-e)/t*(100-a),e),s=u.substring(0,u.indexOf("Animation")).toLowerCase(),l=s&&"-"+s+"-"||"";return p[r]||(f.insertRule("@"+l+"keyframes "+r+"{"+"0%{opacity:"+o+"}"+a+"%{opacity:"+e+"}"+(a+.01)+"%{opacity:1}"+(a+t)%100+"%{opacity:"+e+"}"+"100%{opacity:"+o+"}"+"}",f.cssRules.length),p[r]=1),r}function n(e,t){var i,n,r=e.style;for(t=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<c.length;n++)if(i=c[n]+t,r[i]!==void 0)return i;return r[t]!==void 0?t:void 0}function r(e,t){for(var i in t)e.style[n(e,i)||i]=t[i];return e}function a(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)e[n]===void 0&&(e[n]=i[n])}return e}function o(e){for(var t={x:e.offsetLeft,y:e.offsetTop};e=e.offsetParent;)t.x+=e.offsetLeft,t.y+=e.offsetTop;return t}function s(e,t){return"string"==typeof e?e:e[t%e.length]}function l(e){return"undefined"==typeof this?new l(e):(this.opts=a(e||{},l.defaults,h),void 0)}function d(){function i(t,i){return e("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',i)}f.addRule(".spin-vml","behavior:url(#default#VML)"),l.prototype.lines=function(e,n){function a(){return r(i("group",{coordsize:u+" "+u,coordorigin:-d+" "+-d}),{width:u,height:u})}function o(e,o,l){t(p,t(r(a(),{rotation:360/n.lines*e+"deg",left:~~o}),t(r(i("roundrect",{arcsize:n.corners}),{width:d,height:n.width,left:n.radius,top:-n.width>>1,filter:l}),i("fill",{color:s(n.color,e),opacity:n.opacity}),i("stroke",{opacity:0}))))}var l,d=n.length+n.width,u=2*d,c=-(n.width+n.length)*2+"px",p=r(a(),{position:"absolute",top:c,left:c});if(n.shadow)for(l=1;l<=n.lines;l++)o(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;l<=n.lines;l++)o(l);return t(e,p)},l.prototype.opacity=function(e,t,i,n){var r=e.firstChild;n=n.shadow&&n.lines||0,r&&t+n<r.childNodes.length&&(r=r.childNodes[t+n],r=r&&r.firstChild,r=r&&r.firstChild,r&&(r.opacity=i))}}var u,c=["webkit","Moz","ms","O"],p={},f=function(){var i=e("style",{type:"text/css"});return t(document.getElementsByTagName("head")[0],i),i.sheet||i.styleSheet}(),h={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};l.defaults={},a(l.prototype,{spin:function(t){this.stop();var i,n,a=this,s=a.opts,l=a.el=r(e(0,{className:s.className}),{position:s.position,width:0,zIndex:s.zIndex}),d=s.radius+s.length+s.width;if(t&&(t.insertBefore(l,t.firstChild||null),n=o(t),i=o(l),r(l,{left:(s.left=="auto"?n.x-i.x+(t.offsetWidth>>1):parseInt(s.left,10)+d)+"px",top:(s.top=="auto"?n.y-i.y+(t.offsetHeight>>1):parseInt(s.top,10)+d)+"px"})),l.setAttribute("role","progressbar"),a.lines(l,a.opts),!u){var c,p=0,f=(s.lines-1)*(1-s.direction)/2,h=s.fps,b=h/s.speed,g=(1-s.opacity)/(b*s.trail/100),m=b/s.lines;(function y(){p++;for(var e=0;e<s.lines;e++)c=Math.max(1-(p+(s.lines-e)*m)%b*g,s.opacity),a.opacity(l,e*s.direction+f,c,s);a.timeout=a.el&&setTimeout(y,~~(1e3/h))})()}return a},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=void 0),this},lines:function(n,a){function o(t,i){return r(e(),{position:"absolute",width:a.length+a.width+"px",height:a.width+"px",background:t,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/a.lines*d+a.rotate)+"deg) translate("+a.radius+"px"+",0)",borderRadius:(a.corners*a.width>>1)+"px"})}for(var l,d=0,c=(a.lines-1)*(1-a.direction)/2;d<a.lines;d++)l=r(e(),{position:"absolute",top:1+~(a.width/2)+"px",transform:a.hwaccel?"translate3d(0,0,0)":"",opacity:a.opacity,animation:u&&i(a.opacity,a.trail,c+d*a.direction,a.lines)+" "+1/a.speed+"s linear infinite"}),a.shadow&&t(l,r(o("#000","0 0 4px #000"),{top:"2px"})),t(n,t(l,o(s(a.color,d),"0 0 1px rgba(0,0,0,.1)")));return n},opacity:function(e,t,i){t<e.childNodes.length&&(e.childNodes[t].style.opacity=i)}});var b=r(e("group"),{behavior:"url(#default#VML)"});return!n(b,"transform")&&b.adj?d():u=n(b,"animation"),l}),function(){typeof String.prototype.trim!="function"&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")})}();var _iub=_iub||[];_iub.badges=_iub.badges||[],_iub.embedBs=_iub.embedBs||[],function(e,t){function i(){var e=v("iubenda-embed",t);if(e.length==0){var i=t.getElementById("iubenda-embed");i&&n(i)}else for(var r=0;r<e.length;r++){var a=e[r],o={ppId:N(a.getAttribute("href")),isLegal:k(a)};g(a.className.split(" "),"iub-body-embed")!=-1?A({linkA:a,embedB:!0})||(o.index=Math.floor(Math.random()*1e10),o.linkA=n(a,o.index),_iub.embedBs.push(o)):A({linkA:a})||(o.linkA=n(a),_iub.badges.push(o))}}function n(e,i){var n=e,l=!1,d=!1,u=!1,c=!1,p=!1,f=!1,b="iubenda-white",v=e.getAttribute("href"),w=N(v),k="//",A=e.className.split(" ");y(A,"no-brand")&&(l=!0),y(A,"skip-track")&&(d=!0),y(A,"iub-body-embed")&&(u=!0),y(A,"iub-legal-only")&&(c=!0),y(A,"iub-anchor")&&(p=!0),y(A,"iub-no-markup")&&(f=!0),e.getAttribute("href").indexOf("http://")!=-1?k="http://":e.getAttribute("href").indexOf("https://")!=-1&&(k="https://");var I=x(B,k),L=x(_,k),M=x(C,k),T=x(E,k);if(g(A,"iubenda-no-icon")!=-1?b="iubenda-nostyle":(b=m(["iubenda-green","iubenda-green-m","iubenda-green-s","iubenda-green-xs","iubenda-lowgray","iubenda-lowgray-m","iubenda-lowgray-s","iubenda-lowgray-xs","iubenda-midgray","iubenda-midgray-m","iubenda-midgray-s","iubenda-midgray-xs","iubenda-darkgray","iubenda-darkgray-m","iubenda-darkgray-s","iubenda-darkgray-xs","iubenda-white","iubenda-black","iubenda-nostyle"],A),-1==b&&(b="iubenda-white")),"iubenda-nostyle"!=b&&(e.style.outline="0px",e.style.border="0px",e.style.textDecoration="none",e.style.display="inline-block",e.style.background="none"),u)n=s(e,T,c,f,k,i);else if(g(["iubenda-white","iubenda-black"],b)!=-1)n=o(e,b,null,null,w,l,I,L,M,d,c,p,k);else{if(c&&(e.href=e.href+"/full-legal"),"iubenda-nostyle"!=b){var S=116,O=25,P=".gif";(b.indexOf("-m")!=-1&&b.indexOf("-mid")==-1||b.indexOf("midgray-m")!=-1)&&(S=81,O=21),(b.indexOf("-s")!=-1||b.indexOf("-xs")!=-1)&&(S=82,O=17,P=".png"),e.style.width=S+"px",e.style.height=O+"px",b+=P,r(e,I+b,S,O)}h(L,e,{onLoadCallB:function(){_iub.ifr.iubendaStartBadge({linkA:e,embedP:t.getElementsByTagName("body")[0],iFrUrl:e.href,cdnBaseUrl:I,useProtocol:k})}}),d||a(e,w),n=e}return"undefined"!=typeof editLinkA&&null!=editLinkA&&(editLinkA=null),n}function r(e,t,i,n){p(e.id,t,100,i,n)}function a(){}function o(e,i,n,r,o,s,l,d,u,p,f,h,b){e.style.display="none";var g=e.innerHTML.trim()||"Privacy Policy",m=e.getAttribute("title")||"Privacy Policy",b=b||"//",y={"Informativa Privacy":136,"Datenschutzerklärung":154,"Política de privacidad":146,"Politique de confidentialité":178},v=n||y[g]||105,w=r||22,N=t.createElement("IFRAME"),k=h?"iubenda-ibadge iubenda-iframe-anchor":"iubenda-ibadge";N.setAttribute("class",k),N.setAttribute("scrolling","no"),N.setAttribute("frameBorder","0"),N.setAttribute("allowtransparency","true");var A="width:"+v+"px; height:"+w+"px;";h&&(A+=" z-index:9998; position:fixed; bottom:0px; right:0px;"),c(N,A),e.parentNode.insertBefore(N,e.nextSibling),e.parentNode.removeChild(e);var B=N.contentWindow.document;B.open(),B.write();var _=f?e.href+"/full-legal":e.href;_=x(_,b);var C=null,E='<html><head><title>iubenda badge</title><meta name="viewport" content="width=device-width"><link type="text/css" rel="stylesheet" href="'+u+'" media="screen" />'+'<script type="text/javascript" src="'+d+'"></script></head>'+'<body onload="try{_iub.ifr.iubendaStartBadge({'+(C?"iFrUrl:'"+C+"',":"")+"useProtocol:'"+b+"'});}catch(exc){console.log('IUBENDA: error while loading [iubendaStartBadge]. Please contact info@iubenda.com for support and troubleshooting.')}\"><a href=\""+_+'" class="'+i+" "+(s?"no-brand":"")+" "+(h?"iub-anchor":"")+'" id="i_badge-link" title="'+m+'" target="_parent" >'+g+"</a></body></html>";return B.write(E),B.close(),p||a(N,o),N}function s(e,t,i,n,r,a){var r=r||"//";n||l(t);var o=e.href+(n?"/embed-no-markup.json":i?"/embed-legal.json":"/embed.json")+"?i="+a;if(o=x(o,r),"undefined"!=typeof IubSpinner){var s={lines:8,length:2,width:2,radius:2,color:"#696969",speed:1.2,trail:60,shadow:!1},d=new IubSpinner(s).spin();d.el.className="_iub-pp-loading-alert",c(d.el,"position:relative; display:inline-block; padding: 6px;"),e.parentNode.insertBefore(d.el,e)}return e.style.display="none",h(o,e,{tries:1}),e}function l(e){var i=t.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,t.getElementsByTagName("head")[0].appendChild(i)}function d(e){try{var i=null;if(e.i&&e.i!=null?(i=A({index:parseInt(e.i),embedB:!0,inDom:!0}),i||(i=A({ppId:parseInt(e.pp_id),isLegal:e.is_legal,embedB:!0,inDom:!0}))):i=A({ppId:parseInt(e.pp_id),isLegal:e.is_legal,embedB:!0,inDom:!0}),i&&i.linkA){var n=i.linkA,r=t.createElement("div");r.setAttribute("id","iub-pp-container"),r.innerHTML=e.content,n.parentNode.insertBefore(r,n.nextSibling);var a=n.previousSibling;a.className=="_iub-pp-loading-alert"&&a.parentNode.removeChild(a),n.parentNode.removeChild(n),u(r)}}catch(o){console.log("IUBENDA: Error while loading [ "+o.message+" ]. Please contact info@iubenda.com for support and troubleshooting.")}}function u(e){function i(e,t){return e.nodeName&&e.nodeName.toUpperCase()===t.toUpperCase()}function n(e){var i=e.text||e.textContent||e.innerHTML||"",n=t.getElementsByTagName("head")[0]||t.documentElement,r=t.createElement("script");r.type="text/javascript";try{r.appendChild(t.createTextNode(i))}catch(a){r.text=i}n.insertBefore(r,n.firstChild),n.removeChild(r)}function r(e,t,i){var n=i+1;if(n<=Math.max(1,d)){t.push(e);for(var a=e.childNodes,o=0;o<a.length;o++)a[o].nodeType==1&&r(a[o],t,n)}}for(var a,o,s=[],l=[],d=8,u=e.childNodes,c=0;c<u.length;c++)u[c].nodeType==1&&r(u[c],l,1);for(var c=0;l[c];c++)o=l[c],!i(o,"script")||o.type&&o.type.toLowerCase()!=="text/javascript"||s.push(o);for(var c=0;s[c];c++)a=s[c],a.parentNode&&a.parentNode.removeChild(a),n(s[c])}function c(e,t){var i=f();-1!=i&&8>i?e.style.cssText=t:e.setAttribute("style",t)}function p(e,i,n,r,a){if(!(0>=n)){var o=t.getElementById(e),s=t.createElement("img");s.src=i,s.style.width=r+"px",s.style.height=a+"px",s.style.border="0px",o&&s.width?(s.alt=o.firstChild.nodeValue,s.title=o.firstChild.nodeValue,o.replaceChild(s,o.firstChild)):setTimeout("_iub.imageFastReplace('"+e+"','"+i+"',"+--n+","+r+","+a+");",150)}}function f(){var e=-1;if(navigator.appName=="Microsoft Internet Explorer"){var t=navigator.userAgent,i=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");i.exec(t)!=null&&(e=parseFloat(RegExp.$1))}return e}function h(e,i,n){var n=n||{},r=e,a=i,o=n.onLoadCallB,s=n.tries,l=t.createElement("script");l.setAttribute("type","text/javascript"),l.setAttribute("src",e),i.parentNode.insertBefore(l,i.nextSibling),"function"==typeof o&&b(l,o),l.onerror=function(){s>0&&h(w(r,"t",s),a,{onLoadCallB:o,tries:s-1})}}function b(e,t){var i=f();-1!=i&&9>i?e.onreadystatechange=function(){(this.readyState=="loaded"||this.readyState=="complete")&&t()}:e.onload=function(){t()}}function g(e,t){var i=Object(e),n=i.length>>>0;if(0===n)return-1;var r=0;if(arguments.length>0&&(r=Number(arguments[1]),r!==r?r=0:0!==r&&r!==1/0&&r!==-(1/0)&&(r=(r>0||-1)*Math.floor(Math.abs(r)))),r>=n)return-1;for(var a=r>=0?r:Math.max(n-Math.abs(r),0);n>a;a++)if(a in i&&i[a]===t)return a;return-1}function m(e,t){var i=Object(e),n=i.length>>>0;if(0===n)return-1;for(var r=0;r<t.length;r++)if(g(i,t[r])!=-1)return t[r];return-1}function y(e,t){return g(e,t)!=-1?(e.splice(g(e,t),1),!0):!1}function v(e,i){i||(i=t.getElementsByTagName("body")[0]);for(var n=[],r=new RegExp("\\b"+e+"\\b"),a=i.getElementsByTagName("*"),o=0,s=a.length;s>o;o++)r.test(a[o].className)&&n.push(a[o]);return n}function x(e,t){var i=e.indexOf("//")!=-1?e.split("//")[1]:e;return t.concat(i)}function w(e,t,i){if(i){var n=e.split("#")[0],r=e.split("#")[1];return n+=(n.indexOf("?")!=-1?"&":"?")+t+"="+i,r?n+"#"+r:n}return e}function N(e){for(var t=e.split("/"),i=t.length-1;i>-1;i--)if(!isNaN(parseInt(t[i])))return parseInt(t[i]);return null}function k(e){return e.getAttribute("href").indexOf("/legal")!=-1||e.getAttribute("href").indexOf("/full-legal")!=-1||g(e.className.split(" "),"iub-legal-only")!=-1||g(e.className.split(" "),"iub-no-markup")!=-1}function A(e){for(var e=e||{},i=e.embedB?_iub.embedBs:_iub.badges,n=e.inDom==1,r=0;r<i.length;r++)if(e.index){if(i[r].index==e.index&&(!n||t.body.contains(i[r].linkA)))return i[r]}else if(e.linkA){if(i[r].linkA==e.linkA&&(!n||t.body.contains(i[r].linkA)))return i[r]}else if(i[r].ppId==e.ppId&&i[r].isLegal===e.isLegal&&(!n||t.body.contains(i[r].linkA)))return i[r];return null}var B="https://cdn.iubenda.com/",_="https://cdn.iubenda.com/iubenda_i_badge.js",C="https://cdn.iubenda.com/iubenda_i_badge.css",E="https://www.iubenda.com/assets/privacy_policy.css";(function(){try{i()}catch(e){console.log("IUBENDA: Error while loading [ "+e.message+" ]. Please contact info@iubenda.com for support and troubleshooting.")}})(),e._iub.setStyle=function(e,t){c(e,t)},e._iub.onLoadCall=function(e,t){b(e,t)},e._iub.imageFastReplace=function(e,t,i,n,r){p(e,t,i,n,r)},e._iub.getElementsByClassName=function(e,t){return v(e,t)},e._iub.loadPPContent=function(e){d(e)}}(window,document);