function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}
/*!
 * Splide.js
 * Version  : 4.0.7
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var n={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,SCROLLING:5,DRAGGING:6,DESTROYED:7};function e(t){t.length=0}function i(t,n,e){return Array.prototype.slice.call(t,n,e)}function r(t){return t.bind.apply(t,[null].concat(i(arguments,1)))}var o=setTimeout,a=function(){};function u(t){return requestAnimationFrame(t)}function s(t,n){return typeof n===t}function c(t){return!v(t)&&s("object",t)}var l=Array.isArray,d=r(s,"function"),f=r(s,"string"),p=r(s,"undefined");function v(t){return null===t}function h(t){return t instanceof HTMLElement}function g(t){return l(t)?t:[t]}function m(t,n){g(t).forEach(n)}function y(t,n){return t.indexOf(n)>-1}function b(t,n){return t.push.apply(t,g(n)),t}function w(t,n,e){t&&m(n,(function(n){n&&t.classList[e?"add":"remove"](n)}))}function _(t,n){w(t,f(n)?n.split(" "):n,!0)}function E(t,n){m(n,t.appendChild.bind(t))}function x(t,n){m(t,(function(t){var e=(n||t).parentNode;e&&e.insertBefore(t,n)}))}function S(t,n){return h(t)&&(t.msMatchesSelector||t.matches).call(t,n)}function k(t,n){var e=t?i(t.children):[];return n?e.filter((function(t){return S(t,n)})):e}function C(t,n){return n?k(t,n)[0]:t.firstElementChild}var P=Object.keys;function A(t,n,e){if(t){var i=P(t);i=e?i.reverse():i;for(var r=0;r<i.length;r++){var o=i[r];if("__proto__"!==o&&!1===n(t[o],o))break}}return t}function L(t){return i(arguments,1).forEach((function(n){A(n,(function(e,i){t[i]=n[i]}))})),t}function z(t){return i(arguments,1).forEach((function(n){A(n,(function(n,e){l(n)?t[e]=n.slice():c(n)?t[e]=z({},c(t[e])?t[e]:{},n):t[e]=n}))})),t}function D(t,n){g(n||P(t)).forEach((function(n){delete t[n]}))}function M(t,n){m(t,(function(t){m(n,(function(n){t&&t.removeAttribute(n)}))}))}function N(t,n,e){c(n)?A(n,(function(n,e){N(t,e,n)})):m(t,(function(t){v(e)||""===e?M(t,n):t.setAttribute(n,String(e))}))}function O(t,n,e){var i=document.createElement(t);return n&&(f(n)?_(i,n):N(i,n)),e&&E(e,i),i}function T(t,n,e){if(p(e))return getComputedStyle(t)[n];v(e)||(t.style[n]=""+e)}function I(t,n){T(t,"display",n)}function R(t){t.setActive&&t.setActive()||t.focus({preventScroll:!0})}function F(t,n){return t.getAttribute(n)}function j(t,n){return t&&t.classList.contains(n)}function W(t){return t.getBoundingClientRect()}function G(t){m(t,(function(t){t&&t.parentNode&&t.parentNode.removeChild(t)}))}function X(t){return C((new DOMParser).parseFromString(t,"text/html").body)}function B(t,n){t.preventDefault(),n&&(t.stopPropagation(),t.stopImmediatePropagation())}function H(t,n){return t&&t.querySelector(n)}function U(t,n){return n?i(t.querySelectorAll(n)):[]}function Y(t,n){w(t,n,!1)}function q(t){return t.timeStamp}function K(t){return f(t)?t:t?t+"px":""}function J(t,n){if(!t)throw new Error("[splide] "+(n||""))}var Q=Math.min,V=Math.max,Z=Math.floor,$=Math.ceil,tt=Math.abs;function nt(t,n,e){return tt(t-n)<e}function et(t,n,e,i){var r=Q(n,e),o=V(n,e);return i?r<t&&t<o:r<=t&&t<=o}function it(t,n,e){var i=Q(n,e),r=V(n,e);return Q(V(i,t),r)}function rt(t){return+(t>0)-+(t<0)}function ot(t,n){return m(n,(function(n){t=t.replace("%s",""+n)})),t}function at(t){return t<10?"0"+t:""+t}var ut={};function st(t){return""+t+at(ut[t]=(ut[t]||0)+1)}function ct(){var t=[];function n(t,n,e){m(t,(function(t){t&&m(n,(function(n){n.split(" ").forEach((function(n){var i=n.split(".");e(t,i[0],i[1])}))}))}))}return{bind:function(e,i,r,o){n(e,i,(function(n,e,i){var a="addEventListener"in n,u=a?n.removeEventListener.bind(n,e,r,o):n.removeListener.bind(n,r);a?n.addEventListener(e,r,o):n.addListener(r),t.push([n,e,i,r,u])}))},unbind:function(e,i,r){n(e,i,(function(n,e,i){t=t.filter((function(t){return!!(t[0]!==n||t[1]!==e||t[2]!==i||r&&t[3]!==r)||(t[4](),!1)}))}))},dispatch:function(t,n,e){var i;return"function"==typeof CustomEvent?i=new CustomEvent(n,{bubbles:true,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(n,true,!1,e),t.dispatchEvent(i),i},destroy:function(){t.forEach((function(t){t[4]()})),e(t)}}}function lt(t){var n=t?t.event.bus:document.createDocumentFragment(),e=ct();return t&&t.event.on("destroy",e.destroy),L(e,{bus:n,on:function(t,i){e.bind(n,g(t).join(" "),(function(t){i.apply(i,l(t.detail)?t.detail:[])}))},off:r(e.unbind,n),emit:function(t){e.dispatch(n,t,i(arguments,1))}})}function dt(t,n,e,i){var r,o,a=Date.now,s=0,c=!0,l=0;function d(){if(!c){if(s=t?Q((a()-r)/t,1):1,e&&e(s),s>=1&&(n(),r=a(),i&&++l>=i))return f();u(d)}}function f(){c=!0}function p(){o&&cancelAnimationFrame(o),s=0,o=0,c=!0}return{start:function(n){!n&&p(),r=a()-(n?s*t:0),c=!1,u(d)},rewind:function(){r=a(),s=0,e&&e(s)},pause:f,cancel:p,set:function(n){t=n},isPaused:function(){return c}}}var ft={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:["ArrowUp","ArrowRight"],ArrowRight:["ArrowDown","ArrowLeft"]};function pt(t,n,e){return{resolve:function(t,n,i){var r="rtl"!==(i=i||e.direction)||n?"ttb"===i?0:-1:1;return ft[t]&&ft[t][r]||t.replace(/width|left|right/i,(function(t,n){var e=ft[t.toLowerCase()][r]||t;return n>0?e.charAt(0).toUpperCase()+e.slice(1):e}))},orient:function(t){return t*("rtl"===e.direction?1:-1)}}}var vt=["role","tabindex","disabled","aria-controls","aria-current","aria-label","aria-labelledby","aria-hidden","aria-orientation","aria-roledescription"],ht="splide",gt="is-active",mt=[gt,"is-visible","is-prev","is-next","is-loading","is-focus-in"],yt={slide:"splide__slide",clone:"splide__slide--clone",arrows:"splide__arrows",arrow:"splide__arrow",prev:"splide__arrow--prev",next:"splide__arrow--next",pagination:"splide__pagination",page:"splide__pagination__page",spinner:"splide__spinner"};function bt(t,n,e,i){var o,a=lt(t),u=a.on,s=a.emit,c=a.bind,l=t.Components,d=t.root,f=t.options,p=f.isNavigation,v=f.updateOnMove,h=f.i18n,g=f.pagination,m=f.slideFocus,y=l.Direction.resolve,b=F(i,"style"),_=F(i,"aria-label"),E=e>-1,x=C(i,".splide__slide__container"),S=U(i,f.focusableNodes||"");function k(){var r=t.splides.map((function(t){var e=t.splide.Components.Slides.getAt(n);return e?e.slide.id:""})).join(" ");N(i,"aria-label",ot(h.slideX,(E?e:n)+1)),N(i,"aria-controls",r),N(i,"role",m?"button":""),m&&M(i,"aria-roledescription")}function P(){o||A()}function A(){if(!o){var e=t.index;(r=L())!==j(i,gt)&&(w(i,gt,r),N(i,"aria-current",p&&r||""),s(r?"active":"inactive",z)),function(){var n=function(){if(t.is("fade"))return L();var n=W(l.Elements.track),e=W(i),r=y("left",!0),o=y("right",!0);return Z(n[r])<=$(e[r])&&Z(e[o])<=$(n[o])}(),e=!n&&(!L()||E);t.state.is([4,5])||N(i,"aria-hidden",e||"");N(S,"tabindex",e?-1:""),m&&N(i,"tabindex",e?-1:0);n!==j(i,"is-visible")&&(w(i,"is-visible",n),s(n?"visible":"hidden",z));if(!n&&document.activeElement===i){var r=l.Slides.getAt(t.index);r&&R(r.slide)}}(),w(i,"is-prev",n===e-1),w(i,"is-next",n===e+1)}var r}function L(){var i=t.index;return i===n||f.cloneStatus&&i===e}var z={index:n,slideIndex:e,slide:i,container:x,isClone:E,mount:function(){E||(i.id=d.id+"-slide"+at(n+1),N(i,"role",g?"tabpanel":"group"),N(i,"aria-roledescription",h.slide),N(i,"aria-label",_||ot(h.slideLabel,[n+1,t.length]))),c(i,"click",r(s,"click",z)),c(i,"keydown",r(s,"slide:keydown",z)),u(["moved","shifted","scrolled"],A),u("navigation:mounted",k),v&&u("move",P)},destroy:function(){o=!0,a.destroy(),Y(i,mt),M(i,vt),N(i,"style",b),N(i,"aria-label",_||"")},update:A,style:function(t,n,e){T(e&&x||i,t,n)},isWithin:function(e,i){var r=tt(e-n);return E||!f.rewind&&!t.is("loop")||(r=Q(r,t.length-r)),r<=i}};return z}var wt="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";var _t={passive:!1,capture:!0};var Et={Spacebar:" ",Right:"ArrowRight",Left:"ArrowLeft",Up:"ArrowUp",Down:"ArrowDown"};function xt(t){return t=f(t)?t:t.key,Et[t]||t}var St=[" ","Enter"];var kt=Object.freeze({__proto__:null,Media:function(t,n,e){var i=t.state,r=e.breakpoints||{},o=e.reducedMotion||{},a=ct(),u=[];function s(t){t&&a.destroy()}function c(t,n){var e=matchMedia(n);a.bind(e,"change",l),u.push([t,e])}function l(){var n=i.is(7),r=e.direction,o=u.reduce((function(t,n){return z(t,n[1].matches?n[0]:{})}),{});D(e),d(o),e.destroy?t.destroy("completely"===e.destroy):n?(s(!0),t.mount()):r!==e.direction&&t.refresh()}function d(n,r){z(e,n),r&&z(Object.getPrototypeOf(e),n),i.is(1)||t.emit("updated",e)}return{setup:function(){var t="min"===e.mediaQuery;P(r).sort((function(n,e){return t?+n-+e:+e-+n})).forEach((function(n){c(r[n],"("+(t?"min":"max")+"-width:"+n+"px)")})),c(o,"(prefers-reduced-motion: reduce)"),l()},destroy:s,reduce:function(t){matchMedia("(prefers-reduced-motion: reduce)").matches&&(t?z(e,o):D(e,P(o)))},set:d}},Direction:pt,Elements:function(t,n,i){var r,o,a,u=lt(t),s=u.on,c=u.bind,l=t.root,f=i.i18n,p={},v=[],h=[],g=[];function m(){r=x(".splide__track"),o=C(r,".splide__list"),J(r&&o,"A track/list element is missing."),b(v,k(o,".splide__slide:not(.splide__slide--clone)")),A({arrows:"splide__arrows",pagination:"splide__pagination",prev:"splide__arrow--prev",next:"splide__arrow--next",bar:"splide__progress__bar",toggle:"splide__toggle"},(function(t,n){p[n]=x("."+t)})),L(p,{root:l,track:r,list:o,slides:v}),function(){var t=l.id||st("splide"),n=i.role;l.id=t,r.id=r.id||t+"-track",o.id=o.id||t+"-list",!F(l,"role")&&"SECTION"!==l.tagName&&n&&N(l,"role",n);N(l,"aria-roledescription",f.carousel),N(o,"role","presentation")}(),E()}function y(t){var n=vt.concat("style");e(v),Y(l,h),Y(r,g),M([r,o],n),M(l,t?n:["style","aria-roledescription"])}function E(){Y(l,h),Y(r,g),h=P(ht),g=P("splide__track"),_(l,h),_(r,g),N(l,"aria-label",i.label),N(l,"aria-labelledby",i.labelledby)}function x(t){var n=H(l,t);return n&&function(t,n){if(d(t.closest))return t.closest(n);for(var e=t;e&&1===e.nodeType&&!S(e,n);)e=e.parentElement;return e}(n,"."+ht)===l?n:void 0}function P(t){return[t+"--"+i.type,t+"--"+i.direction,i.drag&&t+"--draggable",i.isNavigation&&t+"--nav",t===ht&&gt]}return L(p,{setup:m,mount:function(){s("refresh",y),s("refresh",m),s("updated",E),c(document,"touchstart mousedown keydown",(function(t){a="keydown"===t.type}),{capture:!0}),c(l,"focusin",(function(){w(l,"is-focus-in",!!a)}))},destroy:y})},Slides:function(t,n,i){var o=lt(t),a=o.on,u=o.emit,s=o.bind,c=n.Elements,l=c.slides,p=c.list,v=[];function b(){l.forEach((function(t,n){k(t,n,-1)}))}function w(){P((function(t){t.destroy()})),e(v)}function k(n,e,i){var r=bt(t,e,i,n);r.mount(),v.push(r)}function C(t){return t?A((function(t){return!t.isClone})):v}function P(t,n){C(n).forEach(t)}function A(t){return v.filter(d(t)?t:function(n){return f(t)?S(n.slide,t):y(g(t),n.index)})}return{mount:function(){b(),a("refresh",w),a("refresh",b),a(["mounted","refresh"],(function(){v.sort((function(t,n){return t.index-n.index}))}))},destroy:w,update:function(){P((function(t){t.update()}))},register:k,get:C,getIn:function(t){var e=n.Controller,r=e.toIndex(t),o=e.hasFocus()?1:i.perPage;return A((function(t){return et(t.index,r,r+o-1)}))},getAt:function(t){return A(t)[0]},add:function(t,n){m(t,(function(t){if(f(t)&&(t=X(t)),h(t)){var e=l[n];e?x(t,e):E(p,t),_(t,i.classes.slide),o=t,a=r(u,"resize"),c=U(o,"img"),(d=c.length)?c.forEach((function(t){s(t,"load error",(function(){--d||a()}))})):a()}var o,a,c,d})),u("refresh")},remove:function(t){G(A(t).map((function(t){return t.slide}))),u("refresh")},forEach:P,filter:A,style:function(t,n,e){P((function(i){i.style(t,n,e)}))},getLength:function(t){return t?l.length:v.length},isEnough:function(){return v.length>i.perPage}}},Layout:function(t,n,e){var i,o,a=lt(t),u=a.on,s=a.bind,l=a.emit,d=n.Slides,f=n.Direction.resolve,p=n.Elements,v=p.root,h=p.track,g=p.list,m=d.getAt,y=d.style;function b(){o=null,i="ttb"===e.direction,T(v,"maxWidth",K(e.width)),T(h,f("paddingLeft"),_(!1)),T(h,f("paddingRight"),_(!0)),w()}function w(){var t=W(v);o&&o.width===t.width&&o.height===t.height||(T(h,"height",function(){var t="";i&&(J(t=E(),"height or heightRatio is missing."),t="calc("+t+" - "+_(!1)+" - "+_(!0)+")");return t}()),y(f("marginRight"),K(e.gap)),y("width",e.autoWidth?null:K(e.fixedWidth)||(i?"":x())),y("height",K(e.fixedHeight)||(i?e.autoHeight?null:x():E()),!0),o=t,l("resized"))}function _(t){var n=e.padding,i=f(t?"right":"left");return n&&K(n[i]||(c(n)?0:n))||"0px"}function E(){return K(e.height||W(g).width*e.heightRatio)}function x(){var t=K(e.gap);return"calc((100%"+(t&&" + "+t)+")/"+(e.perPage||1)+(t&&" - "+t)+")"}function S(t,n){var e=m(t);if(e){var i=W(e.slide)[f("right")],r=W(g)[f("left")];return tt(i-r)+(n?0:k())}return 0}function k(){var t=m(0);return t&&parseFloat(T(t.slide,f("marginRight")))||0}return{mount:function(){var t,n,e;b(),s(window,"resize load",(t=r(l,"resize"),function(){e||(e=dt(n||0,(function(){t(),e=null}),null,1)).start()})),u(["updated","refresh"],b),u("resize",w)},listSize:function(){return W(g)[f("width")]},slideSize:function(t,n){var e=m(t||0);return e?W(e.slide)[f("width")]+(n?0:k()):0},sliderSize:function(){return S(t.length-1,!0)-S(-1,!0)},totalSize:S,getPadding:function(t){return parseFloat(T(h,f("padding"+(t?"Right":"Left"))))||0}}},Clones:function(t,n,i){var r,o=lt(t),a=o.on,u=o.emit,s=n.Elements,c=n.Slides,l=n.Direction.resolve,d=[];function f(){(r=h())&&(!function(n){var e=c.get().slice(),r=e.length;if(r){for(;e.length<n;)b(e,e);b(e.slice(-n),e.slice(0,n)).forEach((function(o,a){var u=a<n,l=function(n,e){var r=n.cloneNode(!0);return _(r,i.classes.clone),r.id=t.root.id+"-clone"+at(e+1),r}(o.slide,a);u?x(l,e[0].slide):E(s.list,l),b(d,l),c.register(l,a-n+(u?0:r),o.index)}))}}(r),u("resize"))}function p(){G(d),e(d)}function v(){r<h()&&u("refresh")}function h(){var e=i.clones;if(t.is("loop")){if(!e){var r=i[l("fixedWidth")]&&n.Layout.slideSize(0);e=r&&$(W(s.track)[l("width")]/r)||i[l("autoWidth")]&&t.length||2*i.perPage}}else e=0;return e}return{mount:function(){f(),a("refresh",p),a("refresh",f),a(["updated","resize"],v)},destroy:p}},Move:function(t,n,e){var i,r=lt(t),o=r.on,a=r.emit,u=t.state.set,s=n.Layout,c=s.slideSize,l=s.getPadding,d=s.totalSize,f=s.listSize,v=s.sliderSize,h=n.Direction,g=h.resolve,m=h.orient,y=n.Elements,b=y.list,w=y.track;function _(){n.Controller.isBusy()||(n.Scroll.cancel(),E(t.index),n.Slides.update())}function E(t){x(P(t,!0))}function x(e,i){if(!t.is("fade")){var r=i?e:function(e){if(t.is("loop")){var i=C(e),r=i>n.Controller.getEnd();(i<0||r)&&(e=S(e,r))}return e}(e);T(b,"transform","translate"+g("X")+"("+r+"px)"),e!==r&&a("shifted")}}function S(t,n){var e=t-L(n),i=v();return t-=m(i*($(tt(e)/i)||1))*(n?1:-1)}function k(){x(A()),i.cancel()}function C(t){for(var e=n.Slides.get(),i=0,r=1/0,o=0;o<e.length;o++){var a=e[o].index,u=tt(P(a,!0)-t);if(!(u<=r))break;r=u,i=a}return i}function P(n,i){var r=m(d(n-1)-function(t){var n=e.focus;return"center"===n?(f()-c(t,!0))/2:+n*c(t)||0}(n));return i?function(n){e.trimSpace&&t.is("slide")&&(n=it(n,0,m(v()-f())));return n}(r):r}function A(){var t=g("left");return W(b)[t]-W(w)[t]+m(l(!1))}function L(t){return P(t?n.Controller.getEnd():0,!!e.trimSpace)}return{mount:function(){i=n.Transition,o(["mounted","resized","updated","refresh"],_)},move:function(t,n,e,r){var o,s;t!==n&&(o=t>e,s=m(S(A(),o)),o?s>=0:s<=b[g("scrollWidth")]-W(w)[g("width")])&&(k(),x(S(A(),t>e),!0)),u(4),a("move",n,e,t),i.start(n,(function(){u(3),a("moved",n,e,t),r&&r()}))},jump:E,translate:x,shift:S,cancel:k,toIndex:C,toPosition:P,getPosition:A,getLimit:L,exceededLimit:function(t,n){n=p(n)?A():n;var e=!0!==t&&m(n)<m(L(!1)),i=!1!==t&&m(n)>m(L(!0));return e||i},reposition:_}},Controller:function(t,n,e){var i,o,a,u=lt(t).on,s=n.Move,c=s.getPosition,l=s.getLimit,d=s.toPosition,v=n.Slides,h=v.isEnough,g=v.getLength,m=t.is("loop"),y=t.is("slide"),b=r(S,!1),w=r(S,!0),_=e.start||0,E=_;function x(){i=g(!0),o=e.perMove,a=e.perPage;var t=it(_,0,i-1);t!==_&&(_=t,s.reposition())}function S(t,n){var e=o||(D()?1:a),i=k(_+e*(t?-1:1),_,!(o||D()));return-1===i&&y&&!nt(c(),l(!t),1)?t?0:P():n?i:C(i)}function k(n,r,u){if(h()){var s=P(),l=function(n){if(y&&"move"===e.trimSpace&&n!==_)for(var i=c();i===d(n,!0)&&et(n,0,t.length-1,!e.rewind);)n<_?--n:++n;return n}(n);l!==n&&(r=n,n=l,u=!1),n<0||n>s?n=o||!et(0,n,r,!0)&&!et(s,r,n,!0)?m?u?n<0?-(i%a||a):i:n:e.rewind?n<0?s:0:-1:A(L(n)):u&&n!==r&&(n=A(L(r)+(n<r?-1:1)))}else n=-1;return n}function C(t){return m?(t+i)%i||0:t}function P(){return V(i-(D()||m&&o?1:a),0)}function A(t){return it(D()?t:a*t,0,P())}function L(t){return D()?t:Z((t>=P()?i-1:t)/a)}function z(t){t!==_&&(E=_,_=t)}function D(){return!p(e.focus)||e.isNavigation}function M(){return t.state.is([4,5])&&!!e.waitForTransition}return{mount:function(){x(),u(["updated","refresh"],x)},go:function(t,n,e){if(!M()){var i=function(t){var n=_;if(f(t)){var e=t.match(/([+\-<>])(\d+)?/)||[],i=e[1],r=e[2];"+"===i||"-"===i?n=k(_+ +(""+i+(+r||1)),_):">"===i?n=r?A(+r):b(!0):"<"===i&&(n=w(!0))}else n=m?t:it(t,0,P());return n}(t),r=C(i);r>-1&&(n||r!==_)&&(z(r),s.move(i,r,E,e))}},scroll:function(t,e,i,r){n.Scroll.scroll(t,e,i,(function(){z(C(s.toIndex(c()))),r&&r()}))},getNext:b,getPrev:w,getAdjacent:S,getEnd:P,setIndex:z,getIndex:function(t){return t?E:_},toIndex:A,toPage:L,toDest:function(t){var n=s.toIndex(t);return y?it(n,0,P()):n},hasFocus:D,isBusy:M}},Arrows:function(t,n,e){var i,o,a=lt(t),u=a.on,s=a.bind,c=a.emit,l=e.classes,d=e.i18n,f=n.Elements,p=n.Controller,v=f.arrows,h=f.track,g=v,m=f.prev,y=f.next,b={};function w(){!function(){var t=e.arrows;!t||m&&y||(g=v||O("div",l.arrows),m=P(!0),y=P(!1),i=!0,E(g,[m,y]),!v&&x(g,h));m&&y&&(L(b,{prev:m,next:y}),I(g,t?"":"none"),_(g,o="splide__arrows--"+e.direction),t&&(u(["moved","refresh","scrolled"],A),s(y,"click",r(C,">")),s(m,"click",r(C,"<")),A(),N([m,y],"aria-controls",h.id),c("arrows:mounted",m,y)))}(),u("updated",S)}function S(){k(),w()}function k(){a.destroy(),Y(g,o),i?(G(v?[m,y]:g),m=y=null):M([m,y],vt)}function C(t){p.go(t,!0)}function P(t){return X('<button class="'+l.arrow+" "+(t?l.prev:l.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(e.arrowPath||wt)+'" />')}function A(){var n=t.index,e=p.getPrev(),i=p.getNext(),r=e>-1&&n<e?d.last:d.prev,o=i>-1&&n>i?d.first:d.next;m.disabled=e<0,y.disabled=i<0,N(m,"aria-label",r),N(y,"aria-label",o),c("arrows:updated",m,y,e,i)}return{arrows:b,mount:w,destroy:k}},Autoplay:function(t,n,e){var i,r,o=lt(t),a=o.on,u=o.bind,s=o.emit,c=dt(e.interval,t.go.bind(t,">"),(function(t){var n=d.bar;n&&T(n,"width",100*t+"%"),s("autoplay:playing",t)})),l=c.isPaused,d=n.Elements,f=n.Elements,p=f.root,v=f.toggle,h=e.autoplay,g="pause"===h;function m(){l()&&n.Slides.isEnough()&&(c.start(!e.resetProgress),r=i=g=!1,_(),s("autoplay:play"))}function y(t){void 0===t&&(t=!0),g=!!t,_(),l()||(c.pause(),s("autoplay:pause"))}function b(){g||(i||r?y(!1):m())}function _(){v&&(w(v,gt,!g),N(v,"aria-label",e.i18n[g?"play":"pause"]))}function E(t){var i=n.Slides.getAt(t);c.set(i&&+F(i.slide,"data-splide-interval")||e.interval)}return{mount:function(){h&&(!function(){e.pauseOnHover&&u(p,"mouseenter mouseleave",(function(t){i="mouseenter"===t.type,b()}));e.pauseOnFocus&&u(p,"focusin focusout",(function(t){r="focusin"===t.type,b()}));v&&u(v,"click",(function(){g?m():y(!0)}));a(["move","scroll","refresh"],c.rewind),a("move",E)}(),v&&N(v,"aria-controls",d.track.id),g||m(),_())},destroy:c.cancel,play:m,pause:y,isPaused:l}},Cover:function(t,n,e){var i=lt(t).on;function o(t){n.Slides.forEach((function(n){var e=C(n.container||n.slide,"img");e&&e.src&&a(t,e,n)}))}function a(t,n,e){e.style("background",t?'center/cover no-repeat url("'+n.src+'")':"",!0),I(n,t?"none":"")}return{mount:function(){e.cover&&(i("lazyload:loaded",r(a,!0)),i(["mounted","updated","refresh"],r(o,!0)))},destroy:r(o,!1)}},Scroll:function(t,n,e){var i,o,a=lt(t),u=a.on,s=a.emit,c=t.state.set,l=n.Move,d=l.getPosition,f=l.getLimit,p=l.exceededLimit,v=l.translate,h=1;function g(t,e,a,u,f){var p=d();if(b(),a){var v=n.Layout.sliderSize(),g=rt(t)*v*Z(tt(t)/v)||0;t=l.toPosition(n.Controller.toDest(t%v))+g}var w=nt(p,t,1);h=1,e=w?0:e||V(tt(t-p)/1.5,800),o=u,i=dt(e,m,r(y,p,t,f),1),c(5),s("scroll"),i.start()}function m(){c(3),o&&o(),s("scrolled")}function y(n,i,r,a){var u,s,c=d(),l=(n+(i-n)*(u=a,(s=e.easingFunc)?s(u):1-Math.pow(1-u,4))-c)*h;v(c+l),t.is("slide")&&!r&&p()&&(h*=.6,tt(l)<10&&g(f(p(!0)),600,!1,o,!0))}function b(){i&&i.cancel()}function w(){i&&!i.isPaused()&&(b(),m())}return{mount:function(){u("move",b),u(["updated","refresh"],w)},destroy:b,scroll:g,cancel:w}},Drag:function(t,n,e){var i,r,o,u,s,l,d,f,p=lt(t),v=p.on,h=p.emit,g=p.bind,m=p.unbind,y=t.state,b=n.Move,w=n.Scroll,_=n.Controller,E=n.Elements.track,x=n.Media.reduce,k=n.Direction,C=k.resolve,P=k.orient,A=b.getPosition,L=b.exceededLimit,z=!1;function D(){var t=e.drag;X(!t),u="free"===t}function M(t){if(l=!1,!d){var n=G(t);i=t.target,r=e.noDrag,S(i,".splide__pagination__page, .splide__arrow")||r&&S(i,r)||!n&&t.button||(_.isBusy()?B(t,!0):(f=n?E:window,s=y.is([4,5]),o=null,g(f,"touchmove mousemove",N,_t),g(f,"touchend touchcancel mouseup click",O,_t),b.cancel(),w.cancel(),I(t)))}var i,r}function N(n){if(y.is(6)||(y.set(6),h("drag")),n.cancelable)if(s){b.translate(i+R(n)/(z&&t.is("slide")?5:1));var r=F(n)>200,o=z!==(z=L());(r||o)&&I(n),l=!0,h("dragging"),B(n)}else(function(t){return tt(R(t))>tt(R(t,!0))})(n)&&(s=function(t){var n=e.dragMinThreshold,i=c(n),r=i&&n.mouse||0,o=(i?n.touch:+n)||10;return tt(R(t))>(G(t)?o:r)}(n),B(n))}function O(i){y.is(6)&&(y.set(3),h("dragged")),s&&(!function(i){var r=function(n){if(t.is("loop")||!z){var e=F(n);if(e&&e<200)return R(n)/e}return 0}(i),o=function(t){return A()+rt(t)*Q(tt(t)*(e.flickPower||600),u?1/0:n.Layout.listSize()*(e.flickMaxPages||1))}(r),a=e.rewind&&e.rewindByDrag;x(!1),u?_.scroll(o,0,e.snap):t.is("fade")?_.go(P(rt(r))<0?a?"<":"-":a?">":"+"):t.is("slide")&&z&&a?_.go(L(!0)?">":"<"):_.go(_.toDest(o),!0);x(!0)}(i),B(i)),m(f,"touchmove mousemove",N),m(f,"touchend touchcancel mouseup click",O),s=!1}function T(t){!d&&l&&B(t,!0)}function I(t){o=r,r=t,i=A()}function R(t,n){return W(t,n)-W(j(t),n)}function F(t){return q(t)-q(j(t))}function j(t){return r===t&&o||r}function W(t,n){return(G(t)?t.changedTouches[0]:t)["page"+C(n?"Y":"X")]}function G(t){return"undefined"!=typeof TouchEvent&&t instanceof TouchEvent}function X(t){d=t}return{mount:function(){g(E,"touchmove mousemove",a,_t),g(E,"touchend touchcancel mouseup click",a,_t),g(E,"touchstart mousedown",M,_t),g(E,"click",T,{capture:!0}),g(E,"dragstart",B),v(["mounted","updated"],D)},disable:X,isDragging:function(){return s}}},Keyboard:function(t,n,e){var i,r,a=lt(t),u=a.on,s=a.bind,c=a.unbind,l=t.root,d=n.Direction.resolve;function f(){var t=e.keyboard;t&&(i="global"===t?window:l,s(i,"keydown",h))}function p(){c(i,"keydown")}function v(){var t=r;r=!0,o((function(){r=t}))}function h(n){if(!r){var e=xt(n);e===d("ArrowLeft")?t.go("<"):e===d("ArrowRight")&&t.go(">")}}return{mount:function(){f(),u("updated",p),u("updated",f),u("move",v)},destroy:p,disable:function(t){r=t}}},LazyLoad:function(t,n,i){var o=lt(t),a=o.on,u=o.off,s=o.bind,c=o.emit,l="sequential"===i.lazyLoad,d=["mounted","refresh","moved","scrolled"],f=[];function p(){e(f),n.Slides.forEach((function(t){U(t.slide,"[data-splide-lazy], [data-splide-lazy-srcset]").forEach((function(n){var e=F(n,"data-splide-lazy"),r=F(n,"data-splide-lazy-srcset");if(e!==n.src||r!==n.srcset){var o=i.classes.spinner,a=n.parentElement,u=C(a,"."+o)||O("span",o,a);f.push([n,t,u]),n.src||I(n,"none")}}))})),l&&m()}function v(){(f=f.filter((function(n){var e=i.perPage*((i.preloadPages||1)+1)-1;return!n[1].isWithin(t.index,e)||h(n)}))).length||u(d)}function h(t){var n=t[0];_(t[1].slide,"is-loading"),s(n,"load error",r(g,t)),N(n,"src",F(n,"data-splide-lazy")),N(n,"srcset",F(n,"data-splide-lazy-srcset")),M(n,"data-splide-lazy"),M(n,"data-splide-lazy-srcset")}function g(t,n){var e=t[0],i=t[1];Y(i.slide,"is-loading"),"error"!==n.type&&(G(t[2]),I(e,""),c("lazyload:loaded",e,i),c("resize")),l&&m()}function m(){f.length&&h(f.shift())}return{mount:function(){i.lazyLoad&&(p(),a("refresh",p),l||a(d,v))},destroy:r(e,f)}},Pagination:function(t,n,o){var a,u,s=lt(t),c=s.on,l=s.emit,d=s.bind,f=n.Slides,p=n.Elements,v=n.Controller,h=v.hasFocus,g=v.getIndex,m=v.go,y=n.Direction.resolve,b=[];function w(){a&&(G(p.pagination?i(a.children):a),Y(a,u),e(b),a=null),s.destroy()}function E(t){m(">"+t,!0)}function x(t,n){var e=b.length,i=xt(n),r=S(),o=-1;i===y("ArrowRight",!1,r)?o=++t%e:i===y("ArrowLeft",!1,r)?o=(--t+e)%e:"Home"===i?o=0:"End"===i&&(o=e-1);var a=b[o];a&&(R(a.button),m(">"+o),B(n,!0))}function S(){return o.paginationDirection||o.direction}function k(t){return b[v.toPage(t)]}function C(){var t=k(g(!0)),n=k(g());if(t){var e=t.button;Y(e,gt),M(e,"aria-selected"),N(e,"tabindex",-1)}if(n){var i=n.button;_(i,gt),N(i,"aria-selected",!0),N(i,"tabindex","")}l("pagination:updated",{list:a,items:b},t,n)}return{items:b,mount:function n(){w(),c(["updated","refresh"],n),o.pagination&&f.isEnough()&&(c(["move","scroll","scrolled"],C),function(){var n=t.length,e=o.classes,i=o.i18n,s=o.perPage,c=h()?n:$(n/s);_(a=p.pagination||O("ul",e.pagination,p.track.parentElement),u="splide__pagination--"+S()),N(a,"role","tablist"),N(a,"aria-label",i.select),N(a,"aria-orientation","ttb"===S()?"vertical":"");for(var l=0;l<c;l++){var v=O("li",null,a),g=O("button",{class:e.page,type:"button"},v),m=f.getIn(l).map((function(t){return t.slide.id})),y=!h()&&s>1?i.pageX:i.slideX;d(g,"click",r(E,l)),o.paginationKeyboard&&d(g,"keydown",r(x,l)),N(v,"role","presentation"),N(g,"role","tab"),N(g,"aria-controls",m.join(" ")),N(g,"aria-label",ot(y,l+1)),N(g,"tabindex",-1),b.push({li:v,button:g,page:l})}}(),C(),l("pagination:mounted",{list:a,items:b},k(t.index)))},destroy:w,getAt:k,update:C}},Sync:function(t,n,i){var r=i.isNavigation,o=i.slideFocus,a=[];function u(){var n,e;t.splides.forEach((function(n){n.isParent||(c(t,n.splide),c(n.splide,t))})),r&&(n=lt(t),(e=n.on)("click",d),e("slide:keydown",f),e(["mounted","updated"],l),a.push(n),n.emit("navigation:mounted",t.splides))}function s(){a.forEach((function(t){t.destroy()})),e(a)}function c(t,n){var e=lt(t);e.on("move",(function(t,e,i){n.go(n.is("loop")?i:t)})),a.push(e)}function l(){N(n.Elements.list,"aria-orientation","ttb"===i.direction?"vertical":"")}function d(n){t.go(n.index)}function f(t,n){y(St,xt(n))&&(d(t),B(n))}return{setup:function(){t.options={slideFocus:p(o)?r:o}},mount:u,destroy:s,remount:function(){s(),u()}}},Wheel:function(t,n,e){var i=lt(t).bind,r=0;function o(i){if(i.cancelable){var o=i.deltaY,a=o<0,u=q(i),s=e.wheelMinThreshold||0,c=e.wheelSleep||0;tt(o)>s&&u-r>c&&(t.go(a?"<":">"),r=u),function(i){return!e.releaseWheel||t.state.is(4)||-1!==n.Controller.getAdjacent(i)}(a)&&B(i)}}return{mount:function(){e.wheel&&i(n.Elements.track,"wheel",o,_t)}}},Live:function(t,n,e){var i=lt(t).on,o=n.Elements.track,a=e.live&&!e.isNavigation,u=O("span","splide__sr"),s=dt(90,r(c,!1));function c(t){N(o,"aria-busy",t),t?(E(o,u),s.start()):G(u)}function l(t){a&&N(o,"aria-live",t?"off":"polite")}return{mount:function(){a&&(l(!n.Autoplay.isPaused()),N(o,"aria-atomic",!0),u.textContent="…",i("autoplay:play",r(l,!0)),i("autoplay:pause",r(l,!1)),i(["moved","scrolled"],r(c,!0)))},disable:l,destroy:function(){M(o,["aria-live","aria-atomic","aria-busy"]),G(u)}}}}),Ct={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:yt,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function Pt(t,n,e){var i=lt(t).on;return{mount:function(){i(["mounted","refresh"],(function(){o((function(){n.Slides.style("transition","opacity "+e.speed+"ms "+e.easing)}))}))},start:function(t,e){var i=n.Elements.track;T(i,"height",K(W(i).height)),o((function(){e(),T(i,"height","")}))},cancel:a}}function At(t,n,e){var i,o=lt(t).bind,a=n.Move,u=n.Controller,s=n.Scroll,c=n.Elements.list,l=r(T,c,"transition");function d(){l(""),s.cancel()}return{mount:function(){o(c,"transitionend",(function(t){t.target===c&&i&&(d(),i())}))},start:function(n,r){var o=a.toPosition(n,!0),c=a.getPosition(),d=function(n){var i=e.rewindSpeed;if(t.is("slide")&&i){var r=u.getIndex(!0),o=u.getEnd();if(0===r&&n>=o||r>=o&&0===n)return i}return e.speed}(n);tt(o-c)>=1&&d>=1?e.useScroll?s.scroll(o,d,!1,r):(l("transform "+d+"ms "+e.easing),a.translate(o,!0),i=r):(a.jump(n),r())},cancel:d}}var Lt=function(){function n(t,e){var i;this.event=lt(),this.Components={},this.state=(i=1,{set:function(t){i=t},is:function(t){return y(g(t),i)}}),this.splides=[],this._o={},this._E={};var r=f(t)?H(document,t):t;J(r,r+" is invalid."),this.root=r,e=z({label:F(r,"aria-label")||"",labelledby:F(r,"aria-labelledby")||""},Ct,n.defaults,e||{});try{z(e,JSON.parse(F(r,"data-splide")))}catch(t){J(!1,"Invalid JSON")}this._o=Object.create(z({},e))}var r,o,a,u=n.prototype;return u.mount=function(t,n){var e=this,i=this.state,r=this.Components;return J(i.is([1,7]),"Already mounted!"),i.set(1),this._C=r,this._T=n||this._T||(this.is("fade")?Pt:At),this._E=t||this._E,A(L({},kt,this._E,{Transition:this._T}),(function(t,n){var i=t(e,r,e._o);r[n]=i,i.setup&&i.setup()})),A(r,(function(t){t.mount&&t.mount()})),this.emit("mounted"),_(this.root,"is-initialized"),i.set(3),this.emit("ready"),this},u.sync=function(t){return this.splides.push({splide:t}),t.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),t.Components.Sync.remount()),this},u.go=function(t){return this._C.Controller.go(t),this},u.on=function(t,n){return this.event.on(t,n),this},u.off=function(t){return this.event.off(t),this},u.emit=function(t){var n;return(n=this.event).emit.apply(n,[t].concat(i(arguments,1))),this},u.add=function(t,n){return this._C.Slides.add(t,n),this},u.remove=function(t){return this._C.Slides.remove(t),this},u.is=function(t){return this._o.type===t},u.refresh=function(){return this.emit("refresh"),this},u.destroy=function(t){void 0===t&&(t=!0);var n=this.event,i=this.state;return i.is(1)?lt(this).on("ready",this.destroy.bind(this,t)):(A(this._C,(function(n){n.destroy&&n.destroy(t)}),!0),n.emit("destroy"),n.destroy(),t&&e(this.splides),i.set(7)),this},r=n,(o=[{key:"options",get:function(){return this._o},set:function(t){this._C.Media.set(t,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}])&&t(r.prototype,o),a&&t(r,a),Object.defineProperty(r,"prototype",{writable:!1}),n}();Lt.defaults={},Lt.STATES=n;new Lt(".splide",{type:"loop",label:"Testomonials",speed:1e3,rewindByDrag:!0,arrows:!1,easing:"cubic-bezier(0.25, 1, 0.5, 1)",classes:{pagination:"splide__pagination pagination",page:"splide__pagination__page pagination__page"}}).mount();
//# sourceMappingURL=index.2131a9dd.js.map
