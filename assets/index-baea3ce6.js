function c0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var io=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _r={},f0={get exports(){return _r},set exports(e){_r=e}},wi={},z={},d0={get exports(){return z},set exports(e){z=e}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wr=Symbol.for("react.element"),p0=Symbol.for("react.portal"),m0=Symbol.for("react.fragment"),h0=Symbol.for("react.strict_mode"),v0=Symbol.for("react.profiler"),g0=Symbol.for("react.provider"),y0=Symbol.for("react.context"),w0=Symbol.for("react.forward_ref"),S0=Symbol.for("react.suspense"),_0=Symbol.for("react.memo"),k0=Symbol.for("react.lazy"),vu=Symbol.iterator;function E0(e){return e===null||typeof e!="object"?null:(e=vu&&e[vu]||e["@@iterator"],typeof e=="function"?e:null)}var af={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sf=Object.assign,uf={};function Yn(e,t,n){this.props=e,this.context=t,this.refs=uf,this.updater=n||af}Yn.prototype.isReactComponent={};Yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cf(){}cf.prototype=Yn.prototype;function ts(e,t,n){this.props=e,this.context=t,this.refs=uf,this.updater=n||af}var ns=ts.prototype=new cf;ns.constructor=ts;sf(ns,Yn.prototype);ns.isPureReactComponent=!0;var gu=Array.isArray,ff=Object.prototype.hasOwnProperty,rs={current:null},df={key:!0,ref:!0,__self:!0,__source:!0};function pf(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)ff.call(t,r)&&!df.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Wr,type:e,key:i,ref:l,props:o,_owner:rs.current}}function x0(e,t){return{$$typeof:Wr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function os(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wr}function C0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var yu=/\/+/g;function ml(e,t){return typeof e=="object"&&e!==null&&e.key!=null?C0(""+e.key):t.toString(36)}function Mo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Wr:case p0:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+ml(l,0):r,gu(o)?(n="",e!=null&&(n=e.replace(yu,"$&/")+"/"),Mo(o,t,n,"",function(u){return u})):o!=null&&(os(o)&&(o=x0(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(yu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",gu(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+ml(i,a);l+=Mo(i,t,n,s,o)}else if(s=E0(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+ml(i,a++),l+=Mo(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function lo(e,t,n){if(e==null)return e;var r=[],o=0;return Mo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function P0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},$o={transition:null},O0={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:$o,ReactCurrentOwner:rs};R.Children={map:lo,forEach:function(e,t,n){lo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return lo(e,function(){t++}),t},toArray:function(e){return lo(e,function(t){return t})||[]},only:function(e){if(!os(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=Yn;R.Fragment=m0;R.Profiler=v0;R.PureComponent=ts;R.StrictMode=h0;R.Suspense=S0;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O0;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=sf({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=rs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)ff.call(t,s)&&!df.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Wr,type:e.type,key:o,ref:i,props:r,_owner:l}};R.createContext=function(e){return e={$$typeof:y0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:g0,_context:e},e.Consumer=e};R.createElement=pf;R.createFactory=function(e){var t=pf.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:w0,render:e}};R.isValidElement=os;R.lazy=function(e){return{$$typeof:k0,_payload:{_status:-1,_result:e},_init:P0}};R.memo=function(e,t){return{$$typeof:_0,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=$o.transition;$o.transition={};try{e()}finally{$o.transition=t}};R.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};R.useCallback=function(e,t){return xe.current.useCallback(e,t)};R.useContext=function(e){return xe.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};R.useEffect=function(e,t){return xe.current.useEffect(e,t)};R.useId=function(){return xe.current.useId()};R.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return xe.current.useMemo(e,t)};R.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};R.useRef=function(e){return xe.current.useRef(e)};R.useState=function(e){return xe.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return xe.current.useTransition()};R.version="18.2.0";(function(e){e.exports=R})(d0);const yt=lf(z),wu=c0({__proto__:null,default:yt},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0=z,N0=Symbol.for("react.element"),z0=Symbol.for("react.fragment"),M0=Object.prototype.hasOwnProperty,$0=T0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L0={key:!0,ref:!0,__self:!0,__source:!0};function mf(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)M0.call(t,r)&&!L0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:N0,type:e,key:i,ref:l,props:o,_owner:$0.current}}wi.Fragment=z0;wi.jsx=mf;wi.jsxs=mf;(function(e){e.exports=wi})(f0);const R0=_r.Fragment,k=_r.jsx,F=_r.jsxs;var Gl={},kr={},I0={get exports(){return kr},set exports(e){kr=e}},He={},ql={},j0={get exports(){return ql},set exports(e){ql=e}},hf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,M){var L=N.length;N.push(M);e:for(;0<L;){var te=L-1>>>1,ae=N[te];if(0<o(ae,M))N[te]=M,N[L]=ae,L=te;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var M=N[0],L=N.pop();if(L!==M){N[0]=L;e:for(var te=0,ae=N.length,ro=ae>>>1;te<ro;){var Gt=2*(te+1)-1,pl=N[Gt],qt=Gt+1,oo=N[qt];if(0>o(pl,L))qt<ae&&0>o(oo,pl)?(N[te]=oo,N[qt]=L,te=qt):(N[te]=pl,N[Gt]=L,te=Gt);else if(qt<ae&&0>o(oo,L))N[te]=oo,N[qt]=L,te=qt;else break e}}return M}function o(N,M){var L=N.sortIndex-M.sortIndex;return L!==0?L:N.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],d=1,p=null,h=3,g=!1,w=!1,y=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=N)r(u),M.sortIndex=M.expirationTime,t(s,M);else break;M=n(u)}}function v(N){if(y=!1,m(N),!w)if(n(s)!==null)w=!0,fl(E);else{var M=n(u);M!==null&&dl(v,M.startTime-N)}}function E(N,M){w=!1,y&&(y=!1,f(T),T=-1),g=!0;var L=h;try{for(m(M),p=n(s);p!==null&&(!(p.expirationTime>M)||N&&!Pe());){var te=p.callback;if(typeof te=="function"){p.callback=null,h=p.priorityLevel;var ae=te(p.expirationTime<=M);M=e.unstable_now(),typeof ae=="function"?p.callback=ae:p===n(s)&&r(s),m(M)}else r(s);p=n(s)}if(p!==null)var ro=!0;else{var Gt=n(u);Gt!==null&&dl(v,Gt.startTime-M),ro=!1}return ro}finally{p=null,h=L,g=!1}}var S=!1,_=null,T=-1,B=5,$=-1;function Pe(){return!(e.unstable_now()-$<B)}function Ct(){if(_!==null){var N=e.unstable_now();$=N;var M=!0;try{M=_(!0,N)}finally{M?Kt():(S=!1,_=null)}}else S=!1}var Kt;if(typeof c=="function")Kt=function(){c(Ct)};else if(typeof MessageChannel<"u"){var Zn=new MessageChannel,cl=Zn.port2;Zn.port1.onmessage=Ct,Kt=function(){cl.postMessage(null)}}else Kt=function(){P(Ct,0)};function fl(N){_=N,S||(S=!0,Kt())}function dl(N,M){T=P(function(){N(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,fl(E))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var L=h;h=M;try{return N()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,M){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=h;h=N;try{return M()}finally{h=L}},e.unstable_scheduleCallback=function(N,M,L){var te=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?te+L:te):L=te,N){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=L+ae,N={id:d++,callback:M,priorityLevel:N,startTime:L,expirationTime:ae,sortIndex:-1},L>te?(N.sortIndex=L,t(u,N),n(s)===null&&N===n(u)&&(y?(f(T),T=-1):y=!0,dl(v,L-te))):(N.sortIndex=ae,t(s,N),w||g||(w=!0,fl(E))),N},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(N){var M=h;return function(){var L=h;h=M;try{return N.apply(this,arguments)}finally{h=L}}}})(hf);(function(e){e.exports=hf})(j0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vf=z,Fe=ql;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gf=new Set,Er={};function dn(e,t){Dn(e,t),Dn(e+"Capture",t)}function Dn(e,t){for(Er[e]=t,e=0;e<t.length;e++)gf.add(t[e])}var St=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zl=Object.prototype.hasOwnProperty,D0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Su={},_u={};function F0(e){return Zl.call(_u,e)?!0:Zl.call(Su,e)?!1:D0.test(e)?_u[e]=!0:(Su[e]=!0,!1)}function H0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function A0(e,t,n,r){if(t===null||typeof t>"u"||H0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var is=/[\-:]([a-z])/g;function ls(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(is,ls);he[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(is,ls);he[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(is,ls);he[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function as(e,t,n,r){var o=he.hasOwnProperty(t)?he[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(A0(t,n,o,r)&&(n=null),r||o===null?F0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var xt=vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ao=Symbol.for("react.element"),vn=Symbol.for("react.portal"),gn=Symbol.for("react.fragment"),ss=Symbol.for("react.strict_mode"),Jl=Symbol.for("react.profiler"),yf=Symbol.for("react.provider"),wf=Symbol.for("react.context"),us=Symbol.for("react.forward_ref"),ea=Symbol.for("react.suspense"),ta=Symbol.for("react.suspense_list"),cs=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Sf=Symbol.for("react.offscreen"),ku=Symbol.iterator;function Jn(e){return e===null||typeof e!="object"?null:(e=ku&&e[ku]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,hl;function sr(e){if(hl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);hl=t&&t[1]||""}return`
`+hl+e}var vl=!1;function gl(e,t){if(!e||vl)return"";vl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{vl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?sr(e):""}function V0(e){switch(e.tag){case 5:return sr(e.type);case 16:return sr("Lazy");case 13:return sr("Suspense");case 19:return sr("SuspenseList");case 0:case 2:case 15:return e=gl(e.type,!1),e;case 11:return e=gl(e.type.render,!1),e;case 1:return e=gl(e.type,!0),e;default:return""}}function na(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gn:return"Fragment";case vn:return"Portal";case Jl:return"Profiler";case ss:return"StrictMode";case ea:return"Suspense";case ta:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wf:return(e.displayName||"Context")+".Consumer";case yf:return(e._context.displayName||"Context")+".Provider";case us:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cs:return t=e.displayName||null,t!==null?t:na(e.type)||"Memo";case Nt:t=e._payload,e=e._init;try{return na(e(t))}catch{}}return null}function B0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return na(t);case 8:return t===ss?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _f(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function U0(e){var t=_f(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function so(e){e._valueTracker||(e._valueTracker=U0(e))}function kf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=_f(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Yo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ra(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Eu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ef(e,t){t=t.checked,t!=null&&as(e,"checked",t,!1)}function oa(e,t){Ef(e,t);var n=Wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ia(e,t.type,n):t.hasOwnProperty("defaultValue")&&ia(e,t.type,Wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ia(e,t,n){(t!=="number"||Yo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ur=Array.isArray;function Tn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function la(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(ur(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wt(n)}}function xf(e,t){var n=Wt(t.value),r=Wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Pu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function aa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var uo,Pf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(uo=uo||document.createElement("div"),uo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=uo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},W0=["Webkit","ms","Moz","O"];Object.keys(dr).forEach(function(e){W0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),dr[t]=dr[e]})});function Of(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||dr.hasOwnProperty(e)&&dr[e]?(""+t).trim():t+"px"}function Tf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Of(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Q0=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sa(e,t){if(t){if(Q0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function ua(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ca=null;function fs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fa=null,Nn=null,zn=null;function Ou(e){if(e=br(e)){if(typeof fa!="function")throw Error(x(280));var t=e.stateNode;t&&(t=xi(t),fa(e.stateNode,e.type,t))}}function Nf(e){Nn?zn?zn.push(e):zn=[e]:Nn=e}function zf(){if(Nn){var e=Nn,t=zn;if(zn=Nn=null,Ou(e),t)for(e=0;e<t.length;e++)Ou(t[e])}}function Mf(e,t){return e(t)}function $f(){}var yl=!1;function Lf(e,t,n){if(yl)return e(t,n);yl=!0;try{return Mf(e,t,n)}finally{yl=!1,(Nn!==null||zn!==null)&&($f(),zf())}}function Cr(e,t){var n=e.stateNode;if(n===null)return null;var r=xi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var da=!1;if(St)try{var er={};Object.defineProperty(er,"passive",{get:function(){da=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{da=!1}function Y0(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var pr=!1,bo=null,Xo=!1,pa=null,b0={onError:function(e){pr=!0,bo=e}};function X0(e,t,n,r,o,i,l,a,s){pr=!1,bo=null,Y0.apply(b0,arguments)}function K0(e,t,n,r,o,i,l,a,s){if(X0.apply(this,arguments),pr){if(pr){var u=bo;pr=!1,bo=null}else throw Error(x(198));Xo||(Xo=!0,pa=u)}}function pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tu(e){if(pn(e)!==e)throw Error(x(188))}function G0(e){var t=e.alternate;if(!t){if(t=pn(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Tu(o),e;if(i===r)return Tu(o),t;i=i.sibling}throw Error(x(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function If(e){return e=G0(e),e!==null?jf(e):null}function jf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=jf(e);if(t!==null)return t;e=e.sibling}return null}var Df=Fe.unstable_scheduleCallback,Nu=Fe.unstable_cancelCallback,q0=Fe.unstable_shouldYield,Z0=Fe.unstable_requestPaint,ne=Fe.unstable_now,J0=Fe.unstable_getCurrentPriorityLevel,ds=Fe.unstable_ImmediatePriority,Ff=Fe.unstable_UserBlockingPriority,Ko=Fe.unstable_NormalPriority,em=Fe.unstable_LowPriority,Hf=Fe.unstable_IdlePriority,Si=null,ct=null;function tm(e){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Si,e,void 0,(e.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:om,nm=Math.log,rm=Math.LN2;function om(e){return e>>>=0,e===0?32:31-(nm(e)/rm|0)|0}var co=64,fo=4194304;function cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Go(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=cr(a):(i&=l,i!==0&&(r=cr(i)))}else l=n&~o,l!==0?r=cr(l):i!==0&&(r=cr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-et(t),o=1<<n,r|=e[n],t&=~o;return r}function im(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-et(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=im(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function ma(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Af(){var e=co;return co<<=1,!(co&4194240)&&(co=64),e}function wl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-et(t),e[t]=n}function am(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-et(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ps(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-et(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var H=0;function Vf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bf,ms,Uf,Wf,Qf,ha=!1,po=[],It=null,jt=null,Dt=null,Pr=new Map,Or=new Map,Mt=[],sm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zu(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":Pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Or.delete(t.pointerId)}}function tr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=br(t),t!==null&&ms(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function um(e,t,n,r,o){switch(t){case"focusin":return It=tr(It,e,t,n,r,o),!0;case"dragenter":return jt=tr(jt,e,t,n,r,o),!0;case"mouseover":return Dt=tr(Dt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Pr.set(i,tr(Pr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Or.set(i,tr(Or.get(i)||null,e,t,n,r,o)),!0}return!1}function Yf(e){var t=tn(e.target);if(t!==null){var n=pn(t);if(n!==null){if(t=n.tag,t===13){if(t=Rf(n),t!==null){e.blockedOn=t,Qf(e.priority,function(){Uf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=va(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ca=r,n.target.dispatchEvent(r),ca=null}else return t=br(n),t!==null&&ms(t),e.blockedOn=n,!1;t.shift()}return!0}function Mu(e,t,n){Lo(e)&&n.delete(t)}function cm(){ha=!1,It!==null&&Lo(It)&&(It=null),jt!==null&&Lo(jt)&&(jt=null),Dt!==null&&Lo(Dt)&&(Dt=null),Pr.forEach(Mu),Or.forEach(Mu)}function nr(e,t){e.blockedOn===t&&(e.blockedOn=null,ha||(ha=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,cm)))}function Tr(e){function t(o){return nr(o,e)}if(0<po.length){nr(po[0],e);for(var n=1;n<po.length;n++){var r=po[n];r.blockedOn===e&&(r.blockedOn=null)}}for(It!==null&&nr(It,e),jt!==null&&nr(jt,e),Dt!==null&&nr(Dt,e),Pr.forEach(t),Or.forEach(t),n=0;n<Mt.length;n++)r=Mt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Mt.length&&(n=Mt[0],n.blockedOn===null);)Yf(n),n.blockedOn===null&&Mt.shift()}var Mn=xt.ReactCurrentBatchConfig,qo=!0;function fm(e,t,n,r){var o=H,i=Mn.transition;Mn.transition=null;try{H=1,hs(e,t,n,r)}finally{H=o,Mn.transition=i}}function dm(e,t,n,r){var o=H,i=Mn.transition;Mn.transition=null;try{H=4,hs(e,t,n,r)}finally{H=o,Mn.transition=i}}function hs(e,t,n,r){if(qo){var o=va(e,t,n,r);if(o===null)Nl(e,t,r,Zo,n),zu(e,r);else if(um(o,e,t,n,r))r.stopPropagation();else if(zu(e,r),t&4&&-1<sm.indexOf(e)){for(;o!==null;){var i=br(o);if(i!==null&&Bf(i),i=va(e,t,n,r),i===null&&Nl(e,t,r,Zo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Nl(e,t,r,null,n)}}var Zo=null;function va(e,t,n,r){if(Zo=null,e=fs(r),e=tn(e),e!==null)if(t=pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zo=e,null}function bf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(J0()){case ds:return 1;case Ff:return 4;case Ko:case em:return 16;case Hf:return 536870912;default:return 16}default:return 16}}var Lt=null,vs=null,Ro=null;function Xf(){if(Ro)return Ro;var e,t=vs,n=t.length,r,o="value"in Lt?Lt.value:Lt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Ro=o.slice(e,1<r?1-r:void 0)}function Io(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mo(){return!0}function $u(){return!1}function Ae(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?mo:$u,this.isPropagationStopped=$u,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mo)},persist:function(){},isPersistent:mo}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gs=Ae(bn),Yr=Z({},bn,{view:0,detail:0}),pm=Ae(Yr),Sl,_l,rr,_i=Z({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ys,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rr&&(rr&&e.type==="mousemove"?(Sl=e.screenX-rr.screenX,_l=e.screenY-rr.screenY):_l=Sl=0,rr=e),Sl)},movementY:function(e){return"movementY"in e?e.movementY:_l}}),Lu=Ae(_i),mm=Z({},_i,{dataTransfer:0}),hm=Ae(mm),vm=Z({},Yr,{relatedTarget:0}),kl=Ae(vm),gm=Z({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),ym=Ae(gm),wm=Z({},bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sm=Ae(wm),_m=Z({},bn,{data:0}),Ru=Ae(_m),km={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Em={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xm[e])?!!t[e]:!1}function ys(){return Cm}var Pm=Z({},Yr,{key:function(e){if(e.key){var t=km[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Io(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Em[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ys,charCode:function(e){return e.type==="keypress"?Io(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Io(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Om=Ae(Pm),Tm=Z({},_i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Iu=Ae(Tm),Nm=Z({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ys}),zm=Ae(Nm),Mm=Z({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$m=Ae(Mm),Lm=Z({},_i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rm=Ae(Lm),Im=[9,13,27,32],ws=St&&"CompositionEvent"in window,mr=null;St&&"documentMode"in document&&(mr=document.documentMode);var jm=St&&"TextEvent"in window&&!mr,Kf=St&&(!ws||mr&&8<mr&&11>=mr),ju=String.fromCharCode(32),Du=!1;function Gf(e,t){switch(e){case"keyup":return Im.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yn=!1;function Dm(e,t){switch(e){case"compositionend":return qf(t);case"keypress":return t.which!==32?null:(Du=!0,ju);case"textInput":return e=t.data,e===ju&&Du?null:e;default:return null}}function Fm(e,t){if(yn)return e==="compositionend"||!ws&&Gf(e,t)?(e=Xf(),Ro=vs=Lt=null,yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kf&&t.locale!=="ko"?null:t.data;default:return null}}var Hm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hm[e.type]:t==="textarea"}function Zf(e,t,n,r){Nf(r),t=Jo(t,"onChange"),0<t.length&&(n=new gs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var hr=null,Nr=null;function Am(e){ud(e,0)}function ki(e){var t=_n(e);if(kf(t))return e}function Vm(e,t){if(e==="change")return t}var Jf=!1;if(St){var El;if(St){var xl="oninput"in document;if(!xl){var Hu=document.createElement("div");Hu.setAttribute("oninput","return;"),xl=typeof Hu.oninput=="function"}El=xl}else El=!1;Jf=El&&(!document.documentMode||9<document.documentMode)}function Au(){hr&&(hr.detachEvent("onpropertychange",ed),Nr=hr=null)}function ed(e){if(e.propertyName==="value"&&ki(Nr)){var t=[];Zf(t,Nr,e,fs(e)),Lf(Am,t)}}function Bm(e,t,n){e==="focusin"?(Au(),hr=t,Nr=n,hr.attachEvent("onpropertychange",ed)):e==="focusout"&&Au()}function Um(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ki(Nr)}function Wm(e,t){if(e==="click")return ki(t)}function Qm(e,t){if(e==="input"||e==="change")return ki(t)}function Ym(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Ym;function zr(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Zl.call(t,o)||!nt(e[o],t[o]))return!1}return!0}function Vu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bu(e,t){var n=Vu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vu(n)}}function td(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?td(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nd(){for(var e=window,t=Yo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Yo(e.document)}return t}function Ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function bm(e){var t=nd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&td(n.ownerDocument.documentElement,n)){if(r!==null&&Ss(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Bu(n,i);var l=Bu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xm=St&&"documentMode"in document&&11>=document.documentMode,wn=null,ga=null,vr=null,ya=!1;function Uu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ya||wn==null||wn!==Yo(r)||(r=wn,"selectionStart"in r&&Ss(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vr&&zr(vr,r)||(vr=r,r=Jo(ga,"onSelect"),0<r.length&&(t=new gs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=wn)))}function ho(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sn={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},Cl={},rd={};St&&(rd=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function Ei(e){if(Cl[e])return Cl[e];if(!Sn[e])return e;var t=Sn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rd)return Cl[e]=t[n];return e}var od=Ei("animationend"),id=Ei("animationiteration"),ld=Ei("animationstart"),ad=Ei("transitionend"),sd=new Map,Wu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(e,t){sd.set(e,t),dn(t,[e])}for(var Pl=0;Pl<Wu.length;Pl++){var Ol=Wu[Pl],Km=Ol.toLowerCase(),Gm=Ol[0].toUpperCase()+Ol.slice(1);Yt(Km,"on"+Gm)}Yt(od,"onAnimationEnd");Yt(id,"onAnimationIteration");Yt(ld,"onAnimationStart");Yt("dblclick","onDoubleClick");Yt("focusin","onFocus");Yt("focusout","onBlur");Yt(ad,"onTransitionEnd");Dn("onMouseEnter",["mouseout","mouseover"]);Dn("onMouseLeave",["mouseout","mouseover"]);Dn("onPointerEnter",["pointerout","pointerover"]);Dn("onPointerLeave",["pointerout","pointerover"]);dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qm=new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));function Qu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,K0(r,t,void 0,e),e.currentTarget=null}function ud(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Qu(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Qu(o,a,u),i=s}}}if(Xo)throw e=pa,Xo=!1,pa=null,e}function W(e,t){var n=t[Ea];n===void 0&&(n=t[Ea]=new Set);var r=e+"__bubble";n.has(r)||(cd(t,e,2,!1),n.add(r))}function Tl(e,t,n){var r=0;t&&(r|=4),cd(n,e,r,t)}var vo="_reactListening"+Math.random().toString(36).slice(2);function Mr(e){if(!e[vo]){e[vo]=!0,gf.forEach(function(n){n!=="selectionchange"&&(qm.has(n)||Tl(n,!1,e),Tl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vo]||(t[vo]=!0,Tl("selectionchange",!1,t))}}function cd(e,t,n,r){switch(bf(t)){case 1:var o=fm;break;case 4:o=dm;break;default:o=hs}n=o.bind(null,t,n,e),o=void 0,!da||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Nl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=tn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Lf(function(){var u=i,d=fs(n),p=[];e:{var h=sd.get(e);if(h!==void 0){var g=gs,w=e;switch(e){case"keypress":if(Io(n)===0)break e;case"keydown":case"keyup":g=Om;break;case"focusin":w="focus",g=kl;break;case"focusout":w="blur",g=kl;break;case"beforeblur":case"afterblur":g=kl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=hm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=zm;break;case od:case id:case ld:g=ym;break;case ad:g=$m;break;case"scroll":g=pm;break;case"wheel":g=Rm;break;case"copy":case"cut":case"paste":g=Sm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Iu}var y=(t&4)!==0,P=!y&&e==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var c=u,m;c!==null;){m=c;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,f!==null&&(v=Cr(c,f),v!=null&&y.push($r(c,v,m)))),P)break;c=c.return}0<y.length&&(h=new g(h,w,null,n,d),p.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==ca&&(w=n.relatedTarget||n.fromElement)&&(tn(w)||w[_t]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=u,w=w?tn(w):null,w!==null&&(P=pn(w),w!==P||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(y=Lu,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=Iu,v="onPointerLeave",f="onPointerEnter",c="pointer"),P=g==null?h:_n(g),m=w==null?h:_n(w),h=new y(v,c+"leave",g,n,d),h.target=P,h.relatedTarget=m,v=null,tn(d)===u&&(y=new y(f,c+"enter",w,n,d),y.target=m,y.relatedTarget=P,v=y),P=v,g&&w)t:{for(y=g,f=w,c=0,m=y;m;m=hn(m))c++;for(m=0,v=f;v;v=hn(v))m++;for(;0<c-m;)y=hn(y),c--;for(;0<m-c;)f=hn(f),m--;for(;c--;){if(y===f||f!==null&&y===f.alternate)break t;y=hn(y),f=hn(f)}y=null}else y=null;g!==null&&Yu(p,h,g,y,!1),w!==null&&P!==null&&Yu(p,P,w,y,!0)}}e:{if(h=u?_n(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var E=Vm;else if(Fu(h))if(Jf)E=Qm;else{E=Um;var S=Bm}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=Wm);if(E&&(E=E(e,u))){Zf(p,E,n,d);break e}S&&S(e,h,u),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&ia(h,"number",h.value)}switch(S=u?_n(u):window,e){case"focusin":(Fu(S)||S.contentEditable==="true")&&(wn=S,ga=u,vr=null);break;case"focusout":vr=ga=wn=null;break;case"mousedown":ya=!0;break;case"contextmenu":case"mouseup":case"dragend":ya=!1,Uu(p,n,d);break;case"selectionchange":if(Xm)break;case"keydown":case"keyup":Uu(p,n,d)}var _;if(ws)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else yn?Gf(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Kf&&n.locale!=="ko"&&(yn||T!=="onCompositionStart"?T==="onCompositionEnd"&&yn&&(_=Xf()):(Lt=d,vs="value"in Lt?Lt.value:Lt.textContent,yn=!0)),S=Jo(u,T),0<S.length&&(T=new Ru(T,e,null,n,d),p.push({event:T,listeners:S}),_?T.data=_:(_=qf(n),_!==null&&(T.data=_)))),(_=jm?Dm(e,n):Fm(e,n))&&(u=Jo(u,"onBeforeInput"),0<u.length&&(d=new Ru("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=_))}ud(p,t)})}function $r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Cr(e,n),i!=null&&r.unshift($r(e,i,o)),i=Cr(e,t),i!=null&&r.push($r(e,i,o))),e=e.return}return r}function hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=Cr(n,i),s!=null&&l.unshift($r(n,s,a))):o||(s=Cr(n,i),s!=null&&l.push($r(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Zm=/\r\n?/g,Jm=/\u0000|\uFFFD/g;function bu(e){return(typeof e=="string"?e:""+e).replace(Zm,`
`).replace(Jm,"")}function go(e,t,n){if(t=bu(t),bu(e)!==t&&n)throw Error(x(425))}function ei(){}var wa=null,Sa=null;function _a(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ka=typeof setTimeout=="function"?setTimeout:void 0,e1=typeof clearTimeout=="function"?clearTimeout:void 0,Xu=typeof Promise=="function"?Promise:void 0,t1=typeof queueMicrotask=="function"?queueMicrotask:typeof Xu<"u"?function(e){return Xu.resolve(null).then(e).catch(n1)}:ka;function n1(e){setTimeout(function(){throw e})}function zl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Tr(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ku(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xn=Math.random().toString(36).slice(2),ut="__reactFiber$"+Xn,Lr="__reactProps$"+Xn,_t="__reactContainer$"+Xn,Ea="__reactEvents$"+Xn,r1="__reactListeners$"+Xn,o1="__reactHandles$"+Xn;function tn(e){var t=e[ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ku(e);e!==null;){if(n=e[ut])return n;e=Ku(e)}return t}e=n,n=e.parentNode}return null}function br(e){return e=e[ut]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function xi(e){return e[Lr]||null}var xa=[],kn=-1;function bt(e){return{current:e}}function Q(e){0>kn||(e.current=xa[kn],xa[kn]=null,kn--)}function U(e,t){kn++,xa[kn]=e.current,e.current=t}var Qt={},_e=bt(Qt),Ne=bt(!1),an=Qt;function Fn(e,t){var n=e.type.contextTypes;if(!n)return Qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ze(e){return e=e.childContextTypes,e!=null}function ti(){Q(Ne),Q(_e)}function Gu(e,t,n){if(_e.current!==Qt)throw Error(x(168));U(_e,t),U(Ne,n)}function fd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(x(108,B0(e)||"Unknown",o));return Z({},n,r)}function ni(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,an=_e.current,U(_e,e),U(Ne,Ne.current),!0}function qu(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=fd(e,t,an),r.__reactInternalMemoizedMergedChildContext=e,Q(Ne),Q(_e),U(_e,e)):Q(Ne),U(Ne,n)}var ht=null,Ci=!1,Ml=!1;function dd(e){ht===null?ht=[e]:ht.push(e)}function i1(e){Ci=!0,dd(e)}function Xt(){if(!Ml&&ht!==null){Ml=!0;var e=0,t=H;try{var n=ht;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ht=null,Ci=!1}catch(o){throw ht!==null&&(ht=ht.slice(e+1)),Df(ds,Xt),o}finally{H=t,Ml=!1}}return null}var En=[],xn=0,ri=null,oi=0,Ue=[],We=0,sn=null,vt=1,gt="";function Jt(e,t){En[xn++]=oi,En[xn++]=ri,ri=e,oi=t}function pd(e,t,n){Ue[We++]=vt,Ue[We++]=gt,Ue[We++]=sn,sn=e;var r=vt;e=gt;var o=32-et(r)-1;r&=~(1<<o),n+=1;var i=32-et(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,vt=1<<32-et(t)+o|n<<o|r,gt=i+e}else vt=1<<i|n<<o|r,gt=e}function _s(e){e.return!==null&&(Jt(e,1),pd(e,1,0))}function ks(e){for(;e===ri;)ri=En[--xn],En[xn]=null,oi=En[--xn],En[xn]=null;for(;e===sn;)sn=Ue[--We],Ue[We]=null,gt=Ue[--We],Ue[We]=null,vt=Ue[--We],Ue[We]=null}var je=null,Ie=null,b=!1,Je=null;function md(e,t){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Zu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,Ie=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,Ie=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=sn!==null?{id:vt,overflow:gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,Ie=null,!0):!1;default:return!1}}function Ca(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pa(e){if(b){var t=Ie;if(t){var n=t;if(!Zu(e,t)){if(Ca(e))throw Error(x(418));t=Ft(n.nextSibling);var r=je;t&&Zu(e,t)?md(r,n):(e.flags=e.flags&-4097|2,b=!1,je=e)}}else{if(Ca(e))throw Error(x(418));e.flags=e.flags&-4097|2,b=!1,je=e}}}function Ju(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function yo(e){if(e!==je)return!1;if(!b)return Ju(e),b=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_a(e.type,e.memoizedProps)),t&&(t=Ie)){if(Ca(e))throw hd(),Error(x(418));for(;t;)md(e,t),t=Ft(t.nextSibling)}if(Ju(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ie=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ie=null}}else Ie=je?Ft(e.stateNode.nextSibling):null;return!0}function hd(){for(var e=Ie;e;)e=Ft(e.nextSibling)}function Hn(){Ie=je=null,b=!1}function Es(e){Je===null?Je=[e]:Je.push(e)}var l1=xt.ReactCurrentBatchConfig;function qe(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ii=bt(null),li=null,Cn=null,xs=null;function Cs(){xs=Cn=li=null}function Ps(e){var t=ii.current;Q(ii),e._currentValue=t}function Oa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $n(e,t){li=e,xs=Cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Te=!0),e.firstContext=null)}function be(e){var t=e._currentValue;if(xs!==e)if(e={context:e,memoizedValue:t,next:null},Cn===null){if(li===null)throw Error(x(308));Cn=e,li.dependencies={lanes:0,firstContext:e}}else Cn=Cn.next=e;return t}var nn=null;function Os(e){nn===null?nn=[e]:nn.push(e)}function vd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Os(t)):(n.next=o.next,o.next=n),t.interleaved=n,kt(e,r)}function kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var zt=!1;function Ts(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,kt(e,n)}return o=r.interleaved,o===null?(t.next=t,Os(r)):(t.next=o.next,o.next=t),r.interleaved=t,kt(e,n)}function jo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ps(e,n)}}function ec(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ai(e,t,n,r){var o=e.updateQueue;zt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=s))}if(i!==null){var p=o.baseState;l=0,d=u=s=null,a=i;do{var h=a.lane,g=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,y=a;switch(h=t,g=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){p=w.call(g,p,h);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,h=typeof w=="function"?w.call(g,p,h):w,h==null)break e;p=Z({},p,h);break e;case 2:zt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,s=p):d=d.next=g,l|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(d===null&&(s=p),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);cn|=l,e.lanes=l,e.memoizedState=p}}function tc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(x(191,o));o.call(r)}}}var yd=new vf.Component().refs;function Ta(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pi={isMounted:function(e){return(e=e._reactInternals)?pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ee(),o=Vt(e),i=wt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Ht(e,i,o),t!==null&&(tt(t,e,o,r),jo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ee(),o=Vt(e),i=wt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ht(e,i,o),t!==null&&(tt(t,e,o,r),jo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ee(),r=Vt(e),o=wt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ht(e,o,r),t!==null&&(tt(t,e,r,n),jo(t,e,r))}};function nc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!zr(n,r)||!zr(o,i):!0}function wd(e,t,n){var r=!1,o=Qt,i=t.contextType;return typeof i=="object"&&i!==null?i=be(i):(o=ze(t)?an:_e.current,r=t.contextTypes,i=(r=r!=null)?Fn(e,o):Qt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function rc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Pi.enqueueReplaceState(t,t.state,null)}function Na(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=yd,Ts(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=be(i):(i=ze(t)?an:_e.current,o.context=Fn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ta(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Pi.enqueueReplaceState(o,o.state,null),ai(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===yd&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function wo(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function oc(e){var t=e._init;return t(e._payload)}function Sd(e){function t(f,c){if(e){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=Bt(f,c),f.index=0,f.sibling=null,f}function i(f,c,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=2,c):m):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,m,v){return c===null||c.tag!==6?(c=Fl(m,f.mode,v),c.return=f,c):(c=o(c,m),c.return=f,c)}function s(f,c,m,v){var E=m.type;return E===gn?d(f,c,m.props.children,v,m.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Nt&&oc(E)===c.type)?(v=o(c,m.props),v.ref=or(f,c,m),v.return=f,v):(v=Bo(m.type,m.key,m.props,null,f.mode,v),v.ref=or(f,c,m),v.return=f,v)}function u(f,c,m,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=Hl(m,f.mode,v),c.return=f,c):(c=o(c,m.children||[]),c.return=f,c)}function d(f,c,m,v,E){return c===null||c.tag!==7?(c=ln(m,f.mode,v,E),c.return=f,c):(c=o(c,m),c.return=f,c)}function p(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Fl(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ao:return m=Bo(c.type,c.key,c.props,null,f.mode,m),m.ref=or(f,null,c),m.return=f,m;case vn:return c=Hl(c,f.mode,m),c.return=f,c;case Nt:var v=c._init;return p(f,v(c._payload),m)}if(ur(c)||Jn(c))return c=ln(c,f.mode,m,null),c.return=f,c;wo(f,c)}return null}function h(f,c,m,v){var E=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:a(f,c,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ao:return m.key===E?s(f,c,m,v):null;case vn:return m.key===E?u(f,c,m,v):null;case Nt:return E=m._init,h(f,c,E(m._payload),v)}if(ur(m)||Jn(m))return E!==null?null:d(f,c,m,v,null);wo(f,m)}return null}function g(f,c,m,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(m)||null,a(c,f,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ao:return f=f.get(v.key===null?m:v.key)||null,s(c,f,v,E);case vn:return f=f.get(v.key===null?m:v.key)||null,u(c,f,v,E);case Nt:var S=v._init;return g(f,c,m,S(v._payload),E)}if(ur(v)||Jn(v))return f=f.get(m)||null,d(c,f,v,E,null);wo(c,v)}return null}function w(f,c,m,v){for(var E=null,S=null,_=c,T=c=0,B=null;_!==null&&T<m.length;T++){_.index>T?(B=_,_=null):B=_.sibling;var $=h(f,_,m[T],v);if($===null){_===null&&(_=B);break}e&&_&&$.alternate===null&&t(f,_),c=i($,c,T),S===null?E=$:S.sibling=$,S=$,_=B}if(T===m.length)return n(f,_),b&&Jt(f,T),E;if(_===null){for(;T<m.length;T++)_=p(f,m[T],v),_!==null&&(c=i(_,c,T),S===null?E=_:S.sibling=_,S=_);return b&&Jt(f,T),E}for(_=r(f,_);T<m.length;T++)B=g(_,f,T,m[T],v),B!==null&&(e&&B.alternate!==null&&_.delete(B.key===null?T:B.key),c=i(B,c,T),S===null?E=B:S.sibling=B,S=B);return e&&_.forEach(function(Pe){return t(f,Pe)}),b&&Jt(f,T),E}function y(f,c,m,v){var E=Jn(m);if(typeof E!="function")throw Error(x(150));if(m=E.call(m),m==null)throw Error(x(151));for(var S=E=null,_=c,T=c=0,B=null,$=m.next();_!==null&&!$.done;T++,$=m.next()){_.index>T?(B=_,_=null):B=_.sibling;var Pe=h(f,_,$.value,v);if(Pe===null){_===null&&(_=B);break}e&&_&&Pe.alternate===null&&t(f,_),c=i(Pe,c,T),S===null?E=Pe:S.sibling=Pe,S=Pe,_=B}if($.done)return n(f,_),b&&Jt(f,T),E;if(_===null){for(;!$.done;T++,$=m.next())$=p(f,$.value,v),$!==null&&(c=i($,c,T),S===null?E=$:S.sibling=$,S=$);return b&&Jt(f,T),E}for(_=r(f,_);!$.done;T++,$=m.next())$=g(_,f,T,$.value,v),$!==null&&(e&&$.alternate!==null&&_.delete($.key===null?T:$.key),c=i($,c,T),S===null?E=$:S.sibling=$,S=$);return e&&_.forEach(function(Ct){return t(f,Ct)}),b&&Jt(f,T),E}function P(f,c,m,v){if(typeof m=="object"&&m!==null&&m.type===gn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ao:e:{for(var E=m.key,S=c;S!==null;){if(S.key===E){if(E=m.type,E===gn){if(S.tag===7){n(f,S.sibling),c=o(S,m.props.children),c.return=f,f=c;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Nt&&oc(E)===S.type){n(f,S.sibling),c=o(S,m.props),c.ref=or(f,S,m),c.return=f,f=c;break e}n(f,S);break}else t(f,S);S=S.sibling}m.type===gn?(c=ln(m.props.children,f.mode,v,m.key),c.return=f,f=c):(v=Bo(m.type,m.key,m.props,null,f.mode,v),v.ref=or(f,c,m),v.return=f,f=v)}return l(f);case vn:e:{for(S=m.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(f,c.sibling),c=o(c,m.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Hl(m,f.mode,v),c.return=f,f=c}return l(f);case Nt:return S=m._init,P(f,c,S(m._payload),v)}if(ur(m))return w(f,c,m,v);if(Jn(m))return y(f,c,m,v);wo(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,m),c.return=f,f=c):(n(f,c),c=Fl(m,f.mode,v),c.return=f,f=c),l(f)):n(f,c)}return P}var An=Sd(!0),_d=Sd(!1),Xr={},ft=bt(Xr),Rr=bt(Xr),Ir=bt(Xr);function rn(e){if(e===Xr)throw Error(x(174));return e}function Ns(e,t){switch(U(Ir,t),U(Rr,e),U(ft,Xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:aa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=aa(t,e)}Q(ft),U(ft,t)}function Vn(){Q(ft),Q(Rr),Q(Ir)}function kd(e){rn(Ir.current);var t=rn(ft.current),n=aa(t,e.type);t!==n&&(U(Rr,e),U(ft,n))}function zs(e){Rr.current===e&&(Q(ft),Q(Rr))}var G=bt(0);function si(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $l=[];function Ms(){for(var e=0;e<$l.length;e++)$l[e]._workInProgressVersionPrimary=null;$l.length=0}var Do=xt.ReactCurrentDispatcher,Ll=xt.ReactCurrentBatchConfig,un=0,q=null,ie=null,ue=null,ui=!1,gr=!1,jr=0,a1=0;function ge(){throw Error(x(321))}function $s(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function Ls(e,t,n,r,o,i){if(un=i,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Do.current=e===null||e.memoizedState===null?f1:d1,e=n(r,o),gr){i=0;do{if(gr=!1,jr=0,25<=i)throw Error(x(301));i+=1,ue=ie=null,t.updateQueue=null,Do.current=p1,e=n(r,o)}while(gr)}if(Do.current=ci,t=ie!==null&&ie.next!==null,un=0,ue=ie=q=null,ui=!1,t)throw Error(x(300));return e}function Rs(){var e=jr!==0;return jr=0,e}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?q.memoizedState=ue=e:ue=ue.next=e,ue}function Xe(){if(ie===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=ue===null?q.memoizedState:ue.next;if(t!==null)ue=t,ie=e;else{if(e===null)throw Error(x(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ue===null?q.memoizedState=ue=e:ue=ue.next=e}return ue}function Dr(e,t){return typeof t=="function"?t(e):t}function Rl(e){var t=Xe(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=ie,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var d=u.lane;if((un&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=p,l=r):s=s.next=p,q.lanes|=d,cn|=d}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,nt(r,t.memoizedState)||(Te=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,q.lanes|=i,cn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Il(e){var t=Xe(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);nt(i,t.memoizedState)||(Te=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ed(){}function xd(e,t){var n=q,r=Xe(),o=t(),i=!nt(r.memoizedState,o);if(i&&(r.memoizedState=o,Te=!0),r=r.queue,Is(Od.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Fr(9,Pd.bind(null,n,r,o,t),void 0,null),ce===null)throw Error(x(349));un&30||Cd(n,t,o)}return o}function Cd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pd(e,t,n,r){t.value=n,t.getSnapshot=r,Td(t)&&Nd(e)}function Od(e,t,n){return n(function(){Td(t)&&Nd(e)})}function Td(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function Nd(e){var t=kt(e,1);t!==null&&tt(t,e,1,-1)}function ic(e){var t=it();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:e},t.queue=e,e=e.dispatch=c1.bind(null,q,e),[t.memoizedState,e]}function Fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zd(){return Xe().memoizedState}function Fo(e,t,n,r){var o=it();q.flags|=e,o.memoizedState=Fr(1|t,n,void 0,r===void 0?null:r)}function Oi(e,t,n,r){var o=Xe();r=r===void 0?null:r;var i=void 0;if(ie!==null){var l=ie.memoizedState;if(i=l.destroy,r!==null&&$s(r,l.deps)){o.memoizedState=Fr(t,n,i,r);return}}q.flags|=e,o.memoizedState=Fr(1|t,n,i,r)}function lc(e,t){return Fo(8390656,8,e,t)}function Is(e,t){return Oi(2048,8,e,t)}function Md(e,t){return Oi(4,2,e,t)}function $d(e,t){return Oi(4,4,e,t)}function Ld(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rd(e,t,n){return n=n!=null?n.concat([e]):null,Oi(4,4,Ld.bind(null,t,e),n)}function js(){}function Id(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$s(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jd(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$s(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Dd(e,t,n){return un&21?(nt(n,t)||(n=Af(),q.lanes|=n,cn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=n)}function s1(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Ll.transition;Ll.transition={};try{e(!1),t()}finally{H=n,Ll.transition=r}}function Fd(){return Xe().memoizedState}function u1(e,t,n){var r=Vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Hd(e))Ad(t,n);else if(n=vd(e,t,n,r),n!==null){var o=Ee();tt(n,e,r,o),Vd(n,t,r)}}function c1(e,t,n){var r=Vt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hd(e))Ad(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,nt(a,l)){var s=t.interleaved;s===null?(o.next=o,Os(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=vd(e,t,o,r),n!==null&&(o=Ee(),tt(n,e,r,o),Vd(n,t,r))}}function Hd(e){var t=e.alternate;return e===q||t!==null&&t===q}function Ad(e,t){gr=ui=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ps(e,n)}}var ci={readContext:be,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},f1={readContext:be,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:be,useEffect:lc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fo(4194308,4,Ld.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fo(4,2,e,t)},useMemo:function(e,t){var n=it();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=it();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=u1.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:ic,useDebugValue:js,useDeferredValue:function(e){return it().memoizedState=e},useTransition:function(){var e=ic(!1),t=e[0];return e=s1.bind(null,e[1]),it().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,o=it();if(b){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),ce===null)throw Error(x(349));un&30||Cd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,lc(Od.bind(null,r,i,e),[e]),r.flags|=2048,Fr(9,Pd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=it(),t=ce.identifierPrefix;if(b){var n=gt,r=vt;n=(r&~(1<<32-et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=jr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=a1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},d1={readContext:be,useCallback:Id,useContext:be,useEffect:Is,useImperativeHandle:Rd,useInsertionEffect:Md,useLayoutEffect:$d,useMemo:jd,useReducer:Rl,useRef:zd,useState:function(){return Rl(Dr)},useDebugValue:js,useDeferredValue:function(e){var t=Xe();return Dd(t,ie.memoizedState,e)},useTransition:function(){var e=Rl(Dr)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:Ed,useSyncExternalStore:xd,useId:Fd,unstable_isNewReconciler:!1},p1={readContext:be,useCallback:Id,useContext:be,useEffect:Is,useImperativeHandle:Rd,useInsertionEffect:Md,useLayoutEffect:$d,useMemo:jd,useReducer:Il,useRef:zd,useState:function(){return Il(Dr)},useDebugValue:js,useDeferredValue:function(e){var t=Xe();return ie===null?t.memoizedState=e:Dd(t,ie.memoizedState,e)},useTransition:function(){var e=Il(Dr)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:Ed,useSyncExternalStore:xd,useId:Fd,unstable_isNewReconciler:!1};function Bn(e,t){try{var n="",r=t;do n+=V0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function jl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function za(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var m1=typeof WeakMap=="function"?WeakMap:Map;function Bd(e,t,n){n=wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){di||(di=!0,Aa=r),za(e,t)},n}function Ud(e,t,n){n=wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){za(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){za(e,t),typeof r!="function"&&(At===null?At=new Set([this]):At.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function ac(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new m1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=T1.bind(null,e,t,n),t.then(e,e))}function sc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function uc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=wt(-1,1),t.tag=2,Ht(n,t,1))),n.lanes|=1),e)}var h1=xt.ReactCurrentOwner,Te=!1;function ke(e,t,n,r){t.child=e===null?_d(t,null,n,r):An(t,e.child,n,r)}function cc(e,t,n,r,o){n=n.render;var i=t.ref;return $n(t,o),r=Ls(e,t,n,r,i,o),n=Rs(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Et(e,t,o)):(b&&n&&_s(t),t.flags|=1,ke(e,t,r,o),t.child)}function fc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ws(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Wd(e,t,i,r,o)):(e=Bo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:zr,n(l,r)&&e.ref===t.ref)return Et(e,t,o)}return t.flags|=1,e=Bt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Wd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(zr(i,r)&&e.ref===t.ref)if(Te=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Te=!0);else return t.lanes=e.lanes,Et(e,t,o)}return Ma(e,t,n,r,o)}function Qd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(On,Re),Re|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(On,Re),Re|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,U(On,Re),Re|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,U(On,Re),Re|=r;return ke(e,t,o,n),t.child}function Yd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ma(e,t,n,r,o){var i=ze(n)?an:_e.current;return i=Fn(t,i),$n(t,o),n=Ls(e,t,n,r,i,o),r=Rs(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Et(e,t,o)):(b&&r&&_s(t),t.flags|=1,ke(e,t,n,o),t.child)}function dc(e,t,n,r,o){if(ze(n)){var i=!0;ni(t)}else i=!1;if($n(t,o),t.stateNode===null)Ho(e,t),wd(t,n,r),Na(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=be(u):(u=ze(n)?an:_e.current,u=Fn(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&rc(t,l,r,u),zt=!1;var h=t.memoizedState;l.state=h,ai(t,r,l,o),s=t.memoizedState,a!==r||h!==s||Ne.current||zt?(typeof d=="function"&&(Ta(t,n,d,r),s=t.memoizedState),(a=zt||nc(t,n,a,r,h,s,u))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,gd(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:qe(t.type,a),l.props=u,p=t.pendingProps,h=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=be(s):(s=ze(n)?an:_e.current,s=Fn(t,s));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||h!==s)&&rc(t,l,r,s),zt=!1,h=t.memoizedState,l.state=h,ai(t,r,l,o);var w=t.memoizedState;a!==p||h!==w||Ne.current||zt?(typeof g=="function"&&(Ta(t,n,g,r),w=t.memoizedState),(u=zt||nc(t,n,u,r,h,w,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return $a(e,t,n,r,i,o)}function $a(e,t,n,r,o,i){Yd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&qu(t,n,!1),Et(e,t,i);r=t.stateNode,h1.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=An(t,e.child,null,i),t.child=An(t,null,a,i)):ke(e,t,a,i),t.memoizedState=r.state,o&&qu(t,n,!0),t.child}function bd(e){var t=e.stateNode;t.pendingContext?Gu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gu(e,t.context,!1),Ns(e,t.containerInfo)}function pc(e,t,n,r,o){return Hn(),Es(o),t.flags|=256,ke(e,t,n,r),t.child}var La={dehydrated:null,treeContext:null,retryLane:0};function Ra(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xd(e,t,n){var r=t.pendingProps,o=G.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),U(G,o&1),e===null)return Pa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=zi(l,r,0,null),e=ln(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ra(n),t.memoizedState=La,e):Ds(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return v1(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Bt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Bt(a,i):(i=ln(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ra(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=La,r}return i=e.child,e=i.sibling,r=Bt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ds(e,t){return t=zi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function So(e,t,n,r){return r!==null&&Es(r),An(t,e.child,null,n),e=Ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function v1(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=jl(Error(x(422))),So(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=zi({mode:"visible",children:r.children},o,0,null),i=ln(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&An(t,e.child,null,l),t.child.memoizedState=Ra(l),t.memoizedState=La,i);if(!(t.mode&1))return So(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(x(419)),r=jl(i,r,void 0),So(e,t,l,r)}if(a=(l&e.childLanes)!==0,Te||a){if(r=ce,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,kt(e,o),tt(r,e,o,-1))}return Us(),r=jl(Error(x(421))),So(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=N1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ie=Ft(o.nextSibling),je=t,b=!0,Je=null,e!==null&&(Ue[We++]=vt,Ue[We++]=gt,Ue[We++]=sn,vt=e.id,gt=e.overflow,sn=t),t=Ds(t,r.children),t.flags|=4096,t)}function mc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Oa(e.return,t,n)}function Dl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Kd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ke(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mc(e,n,t);else if(e.tag===19)mc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(G,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&si(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Dl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&si(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Dl(t,!0,n,null,i);break;case"together":Dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ho(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=Bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function g1(e,t,n){switch(t.tag){case 3:bd(t),Hn();break;case 5:kd(t);break;case 1:ze(t.type)&&ni(t);break;case 4:Ns(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;U(ii,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?Xd(e,t,n):(U(G,G.current&1),e=Et(e,t,n),e!==null?e.sibling:null);U(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Kd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),U(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,Qd(e,t,n)}return Et(e,t,n)}var Gd,Ia,qd,Zd;Gd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ia=function(){};qd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,rn(ft.current);var i=null;switch(n){case"input":o=ra(e,o),r=ra(e,r),i=[];break;case"select":o=Z({},o,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":o=la(e,o),r=la(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ei)}sa(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Er.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Er.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&W("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Zd=function(e,t,n,r){n!==r&&(t.flags|=4)};function ir(e,t){if(!b)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function y1(e,t,n){var r=t.pendingProps;switch(ks(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return ze(t.type)&&ti(),ye(t),null;case 3:return r=t.stateNode,Vn(),Q(Ne),Q(_e),Ms(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Je!==null&&(Ua(Je),Je=null))),Ia(e,t),ye(t),null;case 5:zs(t);var o=rn(Ir.current);if(n=t.type,e!==null&&t.stateNode!=null)qd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return ye(t),null}if(e=rn(ft.current),yo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ut]=t,r[Lr]=i,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(o=0;o<fr.length;o++)W(fr[o],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Eu(r,i),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},W("invalid",r);break;case"textarea":Cu(r,i),W("invalid",r)}sa(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&go(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&go(r.textContent,a,e),o=["children",""+a]):Er.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":so(r),xu(r,i,!0);break;case"textarea":so(r),Pu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ei)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ut]=t,e[Lr]=r,Gd(e,t,!1,!1),t.stateNode=e;e:{switch(l=ua(n,r),n){case"dialog":W("cancel",e),W("close",e),o=r;break;case"iframe":case"object":case"embed":W("load",e),o=r;break;case"video":case"audio":for(o=0;o<fr.length;o++)W(fr[o],e);o=r;break;case"source":W("error",e),o=r;break;case"img":case"image":case"link":W("error",e),W("load",e),o=r;break;case"details":W("toggle",e),o=r;break;case"input":Eu(e,r),o=ra(e,r),W("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Z({},r,{value:void 0}),W("invalid",e);break;case"textarea":Cu(e,r),o=la(e,r),W("invalid",e);break;default:o=r}sa(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Tf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Pf(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&xr(e,s):typeof s=="number"&&xr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Er.hasOwnProperty(i)?s!=null&&i==="onScroll"&&W("scroll",e):s!=null&&as(e,i,s,l))}switch(n){case"input":so(e),xu(e,r,!1);break;case"textarea":so(e),Pu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Tn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ei)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)Zd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=rn(Ir.current),rn(ft.current),yo(t)){if(r=t.stateNode,n=t.memoizedProps,r[ut]=t,(i=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:go(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&go(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ut]=t,t.stateNode=r}return ye(t),null;case 13:if(Q(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(b&&Ie!==null&&t.mode&1&&!(t.flags&128))hd(),Hn(),t.flags|=98560,i=!1;else if(i=yo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[ut]=t}else Hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),i=!1}else Je!==null&&(Ua(Je),Je=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?le===0&&(le=3):Us())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return Vn(),Ia(e,t),e===null&&Mr(t.stateNode.containerInfo),ye(t),null;case 10:return Ps(t.type._context),ye(t),null;case 17:return ze(t.type)&&ti(),ye(t),null;case 19:if(Q(G),i=t.memoizedState,i===null)return ye(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)ir(i,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=si(e),l!==null){for(t.flags|=128,ir(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(G,G.current&1|2),t.child}e=e.sibling}i.tail!==null&&ne()>Un&&(t.flags|=128,r=!0,ir(i,!1),t.lanes=4194304)}else{if(!r)if(e=si(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ir(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!b)return ye(t),null}else 2*ne()-i.renderingStartTime>Un&&n!==1073741824&&(t.flags|=128,r=!0,ir(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ne(),t.sibling=null,n=G.current,U(G,r?n&1|2:n&1),t):(ye(t),null);case 22:case 23:return Bs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Re&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function w1(e,t){switch(ks(t),t.tag){case 1:return ze(t.type)&&ti(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vn(),Q(Ne),Q(_e),Ms(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zs(t),null;case 13:if(Q(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(G),null;case 4:return Vn(),null;case 10:return Ps(t.type._context),null;case 22:case 23:return Bs(),null;case 24:return null;default:return null}}var _o=!1,Se=!1,S1=typeof WeakSet=="function"?WeakSet:Set,O=null;function Pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function ja(e,t,n){try{n()}catch(r){ee(e,t,r)}}var hc=!1;function _1(e,t){if(wa=qo,e=nd(),Ss(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,d=0,p=e,h=null;t:for(;;){for(var g;p!==n||o!==0&&p.nodeType!==3||(a=l+o),p!==i||r!==0&&p.nodeType!==3||(s=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(g=p.firstChild)!==null;)h=p,p=g;for(;;){if(p===e)break t;if(h===n&&++u===o&&(a=l),h===i&&++d===r&&(s=l),(g=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=g}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sa={focusedElem:e,selectionRange:n},qo=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,P=w.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:qe(t.type,y),P);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(v){ee(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return w=hc,hc=!1,w}function yr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ja(t,n,i)}o=o.next}while(o!==r)}}function Ti(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Da(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Jd(e){var t=e.alternate;t!==null&&(e.alternate=null,Jd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ut],delete t[Lr],delete t[Ea],delete t[r1],delete t[o1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ep(e){return e.tag===5||e.tag===3||e.tag===4}function vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ep(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ei));else if(r!==4&&(e=e.child,e!==null))for(Fa(e,t,n),e=e.sibling;e!==null;)Fa(e,t,n),e=e.sibling}function Ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ha(e,t,n),e=e.sibling;e!==null;)Ha(e,t,n),e=e.sibling}var de=null,Ze=!1;function Pt(e,t,n){for(n=n.child;n!==null;)tp(e,t,n),n=n.sibling}function tp(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Si,n)}catch{}switch(n.tag){case 5:Se||Pn(n,t);case 6:var r=de,o=Ze;de=null,Pt(e,t,n),de=r,Ze=o,de!==null&&(Ze?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(Ze?(e=de,n=n.stateNode,e.nodeType===8?zl(e.parentNode,n):e.nodeType===1&&zl(e,n),Tr(e)):zl(de,n.stateNode));break;case 4:r=de,o=Ze,de=n.stateNode.containerInfo,Ze=!0,Pt(e,t,n),de=r,Ze=o;break;case 0:case 11:case 14:case 15:if(!Se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ja(n,t,l),o=o.next}while(o!==r)}Pt(e,t,n);break;case 1:if(!Se&&(Pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ee(n,t,a)}Pt(e,t,n);break;case 21:Pt(e,t,n);break;case 22:n.mode&1?(Se=(r=Se)||n.memoizedState!==null,Pt(e,t,n),Se=r):Pt(e,t,n);break;default:Pt(e,t,n)}}function gc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new S1),t.forEach(function(r){var o=z1.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:de=a.stateNode,Ze=!1;break e;case 3:de=a.stateNode.containerInfo,Ze=!0;break e;case 4:de=a.stateNode.containerInfo,Ze=!0;break e}a=a.return}if(de===null)throw Error(x(160));tp(i,l,o),de=null,Ze=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){ee(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)np(t,e),t=t.sibling}function np(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),rt(e),r&4){try{yr(3,e,e.return),Ti(3,e)}catch(y){ee(e,e.return,y)}try{yr(5,e,e.return)}catch(y){ee(e,e.return,y)}}break;case 1:Ge(t,e),rt(e),r&512&&n!==null&&Pn(n,n.return);break;case 5:if(Ge(t,e),rt(e),r&512&&n!==null&&Pn(n,n.return),e.flags&32){var o=e.stateNode;try{xr(o,"")}catch(y){ee(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Ef(o,i),ua(a,l);var u=ua(a,i);for(l=0;l<s.length;l+=2){var d=s[l],p=s[l+1];d==="style"?Tf(o,p):d==="dangerouslySetInnerHTML"?Pf(o,p):d==="children"?xr(o,p):as(o,d,p,u)}switch(a){case"input":oa(o,i);break;case"textarea":xf(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Tn(o,!!i.multiple,g,!1):h!==!!i.multiple&&(i.defaultValue!=null?Tn(o,!!i.multiple,i.defaultValue,!0):Tn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Lr]=i}catch(y){ee(e,e.return,y)}}break;case 6:if(Ge(t,e),rt(e),r&4){if(e.stateNode===null)throw Error(x(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){ee(e,e.return,y)}}break;case 3:if(Ge(t,e),rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Tr(t.containerInfo)}catch(y){ee(e,e.return,y)}break;case 4:Ge(t,e),rt(e);break;case 13:Ge(t,e),rt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(As=ne())),r&4&&gc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Se=(u=Se)||d,Ge(t,e),Se=u):Ge(t,e),rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(O=e,d=e.child;d!==null;){for(p=O=d;O!==null;){switch(h=O,g=h.child,h.tag){case 0:case 11:case 14:case 15:yr(4,h,h.return);break;case 1:Pn(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){ee(r,n,y)}}break;case 5:Pn(h,h.return);break;case 22:if(h.memoizedState!==null){wc(p);continue}}g!==null?(g.return=h,O=g):wc(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{o=p.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,s=p.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Of("display",l))}catch(y){ee(e,e.return,y)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){ee(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ge(t,e),rt(e),r&4&&gc(e);break;case 21:break;default:Ge(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ep(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(xr(o,""),r.flags&=-33);var i=vc(e);Ha(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=vc(e);Fa(e,a,l);break;default:throw Error(x(161))}}catch(s){ee(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function k1(e,t,n){O=e,rp(e)}function rp(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var o=O,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||_o;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Se;a=_o;var u=Se;if(_o=l,(Se=s)&&!u)for(O=o;O!==null;)l=O,s=l.child,l.tag===22&&l.memoizedState!==null?Sc(o):s!==null?(s.return=l,O=s):Sc(o);for(;i!==null;)O=i,rp(i),i=i.sibling;O=o,_o=a,Se=u}yc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,O=i):yc(e)}}function yc(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Se||Ti(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Se)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:qe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&tc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}tc(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Tr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}Se||t.flags&512&&Da(t)}catch(h){ee(t,t.return,h)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function wc(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function Sc(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ti(4,t)}catch(s){ee(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ee(t,o,s)}}var i=t.return;try{Da(t)}catch(s){ee(t,i,s)}break;case 5:var l=t.return;try{Da(t)}catch(s){ee(t,l,s)}}}catch(s){ee(t,t.return,s)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var E1=Math.ceil,fi=xt.ReactCurrentDispatcher,Fs=xt.ReactCurrentOwner,Ye=xt.ReactCurrentBatchConfig,I=0,ce=null,oe=null,me=0,Re=0,On=bt(0),le=0,Hr=null,cn=0,Ni=0,Hs=0,wr=null,Oe=null,As=0,Un=1/0,mt=null,di=!1,Aa=null,At=null,ko=!1,Rt=null,pi=0,Sr=0,Va=null,Ao=-1,Vo=0;function Ee(){return I&6?ne():Ao!==-1?Ao:Ao=ne()}function Vt(e){return e.mode&1?I&2&&me!==0?me&-me:l1.transition!==null?(Vo===0&&(Vo=Af()),Vo):(e=H,e!==0||(e=window.event,e=e===void 0?16:bf(e.type)),e):1}function tt(e,t,n,r){if(50<Sr)throw Sr=0,Va=null,Error(x(185));Qr(e,n,r),(!(I&2)||e!==ce)&&(e===ce&&(!(I&2)&&(Ni|=n),le===4&&$t(e,me)),Me(e,r),n===1&&I===0&&!(t.mode&1)&&(Un=ne()+500,Ci&&Xt()))}function Me(e,t){var n=e.callbackNode;lm(e,t);var r=Go(e,e===ce?me:0);if(r===0)n!==null&&Nu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Nu(n),t===1)e.tag===0?i1(_c.bind(null,e)):dd(_c.bind(null,e)),t1(function(){!(I&6)&&Xt()}),n=null;else{switch(Vf(r)){case 1:n=ds;break;case 4:n=Ff;break;case 16:n=Ko;break;case 536870912:n=Hf;break;default:n=Ko}n=fp(n,op.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function op(e,t){if(Ao=-1,Vo=0,I&6)throw Error(x(327));var n=e.callbackNode;if(Ln()&&e.callbackNode!==n)return null;var r=Go(e,e===ce?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=mi(e,r);else{t=r;var o=I;I|=2;var i=lp();(ce!==e||me!==t)&&(mt=null,Un=ne()+500,on(e,t));do try{P1();break}catch(a){ip(e,a)}while(1);Cs(),fi.current=i,I=o,oe!==null?t=0:(ce=null,me=0,t=le)}if(t!==0){if(t===2&&(o=ma(e),o!==0&&(r=o,t=Ba(e,o))),t===1)throw n=Hr,on(e,0),$t(e,r),Me(e,ne()),n;if(t===6)$t(e,r);else{if(o=e.current.alternate,!(r&30)&&!x1(o)&&(t=mi(e,r),t===2&&(i=ma(e),i!==0&&(r=i,t=Ba(e,i))),t===1))throw n=Hr,on(e,0),$t(e,r),Me(e,ne()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:en(e,Oe,mt);break;case 3:if($t(e,r),(r&130023424)===r&&(t=As+500-ne(),10<t)){if(Go(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ee(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ka(en.bind(null,e,Oe,mt),t);break}en(e,Oe,mt);break;case 4:if($t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-et(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*E1(r/1960))-r,10<r){e.timeoutHandle=ka(en.bind(null,e,Oe,mt),r);break}en(e,Oe,mt);break;case 5:en(e,Oe,mt);break;default:throw Error(x(329))}}}return Me(e,ne()),e.callbackNode===n?op.bind(null,e):null}function Ba(e,t){var n=wr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=mi(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&Ua(t)),e}function Ua(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function x1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!nt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~Hs,t&=~Ni,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-et(t),r=1<<n;e[n]=-1,t&=~r}}function _c(e){if(I&6)throw Error(x(327));Ln();var t=Go(e,0);if(!(t&1))return Me(e,ne()),null;var n=mi(e,t);if(e.tag!==0&&n===2){var r=ma(e);r!==0&&(t=r,n=Ba(e,r))}if(n===1)throw n=Hr,on(e,0),$t(e,t),Me(e,ne()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,en(e,Oe,mt),Me(e,ne()),null}function Vs(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(Un=ne()+500,Ci&&Xt())}}function fn(e){Rt!==null&&Rt.tag===0&&!(I&6)&&Ln();var t=I;I|=1;var n=Ye.transition,r=H;try{if(Ye.transition=null,H=1,e)return e()}finally{H=r,Ye.transition=n,I=t,!(I&6)&&Xt()}}function Bs(){Re=On.current,Q(On)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,e1(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(ks(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ti();break;case 3:Vn(),Q(Ne),Q(_e),Ms();break;case 5:zs(r);break;case 4:Vn();break;case 13:Q(G);break;case 19:Q(G);break;case 10:Ps(r.type._context);break;case 22:case 23:Bs()}n=n.return}if(ce=e,oe=e=Bt(e.current,null),me=Re=t,le=0,Hr=null,Hs=Ni=cn=0,Oe=wr=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}nn=null}return e}function ip(e,t){do{var n=oe;try{if(Cs(),Do.current=ci,ui){for(var r=q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ui=!1}if(un=0,ue=ie=q=null,gr=!1,jr=0,Fs.current=null,n===null||n.return===null){le=1,Hr=t,oe=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=me,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=sc(l);if(g!==null){g.flags&=-257,uc(g,l,a,i,t),g.mode&1&&ac(i,u,t),t=g,s=u;var w=t.updateQueue;if(w===null){var y=new Set;y.add(s),t.updateQueue=y}else w.add(s);break e}else{if(!(t&1)){ac(i,u,t),Us();break e}s=Error(x(426))}}else if(b&&a.mode&1){var P=sc(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),uc(P,l,a,i,t),Es(Bn(s,a));break e}}i=s=Bn(s,a),le!==4&&(le=2),wr===null?wr=[i]:wr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Bd(i,s,t);ec(i,f);break e;case 1:a=s;var c=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(At===null||!At.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Ud(i,a,t);ec(i,v);break e}}i=i.return}while(i!==null)}sp(n)}catch(E){t=E,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(1)}function lp(){var e=fi.current;return fi.current=ci,e===null?ci:e}function Us(){(le===0||le===3||le===2)&&(le=4),ce===null||!(cn&268435455)&&!(Ni&268435455)||$t(ce,me)}function mi(e,t){var n=I;I|=2;var r=lp();(ce!==e||me!==t)&&(mt=null,on(e,t));do try{C1();break}catch(o){ip(e,o)}while(1);if(Cs(),I=n,fi.current=r,oe!==null)throw Error(x(261));return ce=null,me=0,le}function C1(){for(;oe!==null;)ap(oe)}function P1(){for(;oe!==null&&!q0();)ap(oe)}function ap(e){var t=cp(e.alternate,e,Re);e.memoizedProps=e.pendingProps,t===null?sp(e):oe=t,Fs.current=null}function sp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=w1(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,oe=null;return}}else if(n=y1(n,t,Re),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);le===0&&(le=5)}function en(e,t,n){var r=H,o=Ye.transition;try{Ye.transition=null,H=1,O1(e,t,n,r)}finally{Ye.transition=o,H=r}return null}function O1(e,t,n,r){do Ln();while(Rt!==null);if(I&6)throw Error(x(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(am(e,i),e===ce&&(oe=ce=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ko||(ko=!0,fp(Ko,function(){return Ln(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ye.transition,Ye.transition=null;var l=H;H=1;var a=I;I|=4,Fs.current=null,_1(e,n),np(n,e),bm(Sa),qo=!!wa,Sa=wa=null,e.current=n,k1(n),Z0(),I=a,H=l,Ye.transition=i}else e.current=n;if(ko&&(ko=!1,Rt=e,pi=o),i=e.pendingLanes,i===0&&(At=null),tm(n.stateNode),Me(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(di)throw di=!1,e=Aa,Aa=null,e;return pi&1&&e.tag!==0&&Ln(),i=e.pendingLanes,i&1?e===Va?Sr++:(Sr=0,Va=e):Sr=0,Xt(),null}function Ln(){if(Rt!==null){var e=Vf(pi),t=Ye.transition,n=H;try{if(Ye.transition=null,H=16>e?16:e,Rt===null)var r=!1;else{if(e=Rt,Rt=null,pi=0,I&6)throw Error(x(331));var o=I;for(I|=4,O=e.current;O!==null;){var i=O,l=i.child;if(O.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(O=u;O!==null;){var d=O;switch(d.tag){case 0:case 11:case 15:yr(8,d,i)}var p=d.child;if(p!==null)p.return=d,O=p;else for(;O!==null;){d=O;var h=d.sibling,g=d.return;if(Jd(d),d===u){O=null;break}if(h!==null){h.return=g,O=h;break}O=g}}}var w=i.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var P=y.sibling;y.sibling=null,y=P}while(y!==null)}}O=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,O=l;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:yr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,O=f;break e}O=i.return}}var c=e.current;for(O=c;O!==null;){l=O;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,O=m;else e:for(l=c;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ti(9,a)}}catch(E){ee(a,a.return,E)}if(a===l){O=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,O=v;break e}O=a.return}}if(I=o,Xt(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Si,e)}catch{}r=!0}return r}finally{H=n,Ye.transition=t}}return!1}function kc(e,t,n){t=Bn(n,t),t=Bd(e,t,1),e=Ht(e,t,1),t=Ee(),e!==null&&(Qr(e,1,t),Me(e,t))}function ee(e,t,n){if(e.tag===3)kc(e,e,n);else for(;t!==null;){if(t.tag===3){kc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(At===null||!At.has(r))){e=Bn(n,e),e=Ud(t,e,1),t=Ht(t,e,1),e=Ee(),t!==null&&(Qr(t,1,e),Me(t,e));break}}t=t.return}}function T1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(me&n)===n&&(le===4||le===3&&(me&130023424)===me&&500>ne()-As?on(e,0):Hs|=n),Me(e,t)}function up(e,t){t===0&&(e.mode&1?(t=fo,fo<<=1,!(fo&130023424)&&(fo=4194304)):t=1);var n=Ee();e=kt(e,t),e!==null&&(Qr(e,t,n),Me(e,n))}function N1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),up(e,n)}function z1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),up(e,n)}var cp;cp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)Te=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Te=!1,g1(e,t,n);Te=!!(e.flags&131072)}else Te=!1,b&&t.flags&1048576&&pd(t,oi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ho(e,t),e=t.pendingProps;var o=Fn(t,_e.current);$n(t,n),o=Ls(null,t,r,e,o,n);var i=Rs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(r)?(i=!0,ni(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ts(t),o.updater=Pi,t.stateNode=o,o._reactInternals=t,Na(t,r,e,n),t=$a(null,t,r,!0,i,n)):(t.tag=0,b&&i&&_s(t),ke(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ho(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=$1(r),e=qe(r,e),o){case 0:t=Ma(null,t,r,e,n);break e;case 1:t=dc(null,t,r,e,n);break e;case 11:t=cc(null,t,r,e,n);break e;case 14:t=fc(null,t,r,qe(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),Ma(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),dc(e,t,r,o,n);case 3:e:{if(bd(t),e===null)throw Error(x(387));r=t.pendingProps,i=t.memoizedState,o=i.element,gd(e,t),ai(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Bn(Error(x(423)),t),t=pc(e,t,r,n,o);break e}else if(r!==o){o=Bn(Error(x(424)),t),t=pc(e,t,r,n,o);break e}else for(Ie=Ft(t.stateNode.containerInfo.firstChild),je=t,b=!0,Je=null,n=_d(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hn(),r===o){t=Et(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return kd(t),e===null&&Pa(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,_a(r,o)?l=null:i!==null&&_a(r,i)&&(t.flags|=32),Yd(e,t),ke(e,t,l,n),t.child;case 6:return e===null&&Pa(t),null;case 13:return Xd(e,t,n);case 4:return Ns(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=An(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),cc(e,t,r,o,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,U(ii,r._currentValue),r._currentValue=l,i!==null)if(nt(i.value,l)){if(i.children===o.children&&!Ne.current){t=Et(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=wt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Oa(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(x(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Oa(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ke(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,$n(t,n),o=be(o),r=r(o),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,o=qe(r,t.pendingProps),o=qe(r.type,o),fc(e,t,r,o,n);case 15:return Wd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),Ho(e,t),t.tag=1,ze(r)?(e=!0,ni(t)):e=!1,$n(t,n),wd(t,r,o),Na(t,r,o,n),$a(null,t,r,!0,e,n);case 19:return Kd(e,t,n);case 22:return Qd(e,t,n)}throw Error(x(156,t.tag))};function fp(e,t){return Df(e,t)}function M1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,t,n,r){return new M1(e,t,n,r)}function Ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $1(e){if(typeof e=="function")return Ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===us)return 11;if(e===cs)return 14}return 2}function Bt(e,t){var n=e.alternate;return n===null?(n=Qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Bo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ws(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case gn:return ln(n.children,o,i,t);case ss:l=8,o|=8;break;case Jl:return e=Qe(12,n,t,o|2),e.elementType=Jl,e.lanes=i,e;case ea:return e=Qe(13,n,t,o),e.elementType=ea,e.lanes=i,e;case ta:return e=Qe(19,n,t,o),e.elementType=ta,e.lanes=i,e;case Sf:return zi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yf:l=10;break e;case wf:l=9;break e;case us:l=11;break e;case cs:l=14;break e;case Nt:l=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Qe(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function ln(e,t,n,r){return e=Qe(7,e,r,t),e.lanes=n,e}function zi(e,t,n,r){return e=Qe(22,e,r,t),e.elementType=Sf,e.lanes=n,e.stateNode={isHidden:!1},e}function Fl(e,t,n){return e=Qe(6,e,null,t),e.lanes=n,e}function Hl(e,t,n){return t=Qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function L1(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wl(0),this.expirationTimes=wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Qs(e,t,n,r,o,i,l,a,s){return e=new L1(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Qe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ts(i),e}function R1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function dp(e){if(!e)return Qt;e=e._reactInternals;e:{if(pn(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(ze(n))return fd(e,n,t)}return t}function pp(e,t,n,r,o,i,l,a,s){return e=Qs(n,r,!0,e,o,i,l,a,s),e.context=dp(null),n=e.current,r=Ee(),o=Vt(n),i=wt(r,o),i.callback=t??null,Ht(n,i,o),e.current.lanes=o,Qr(e,o,r),Me(e,r),e}function Mi(e,t,n,r){var o=t.current,i=Ee(),l=Vt(o);return n=dp(n),t.context===null?t.context=n:t.pendingContext=n,t=wt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ht(o,t,l),e!==null&&(tt(e,o,l,i),jo(e,o,l)),l}function hi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ec(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ys(e,t){Ec(e,t),(e=e.alternate)&&Ec(e,t)}function I1(){return null}var mp=typeof reportError=="function"?reportError:function(e){console.error(e)};function bs(e){this._internalRoot=e}$i.prototype.render=bs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));Mi(e,t,null,null)};$i.prototype.unmount=bs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fn(function(){Mi(null,e,null,null)}),t[_t]=null}};function $i(e){this._internalRoot=e}$i.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mt.length&&t!==0&&t<Mt[n].priority;n++);Mt.splice(n,0,e),n===0&&Yf(e)}};function Xs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Li(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xc(){}function j1(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=hi(l);i.call(u)}}var l=pp(t,r,e,0,null,!1,!1,"",xc);return e._reactRootContainer=l,e[_t]=l.current,Mr(e.nodeType===8?e.parentNode:e),fn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=hi(s);a.call(u)}}var s=Qs(e,0,!1,null,null,!1,!1,"",xc);return e._reactRootContainer=s,e[_t]=s.current,Mr(e.nodeType===8?e.parentNode:e),fn(function(){Mi(t,s,n,r)}),s}function Ri(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=hi(l);a.call(s)}}Mi(t,l,e,o)}else l=j1(n,t,e,o,r);return hi(l)}Bf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=cr(t.pendingLanes);n!==0&&(ps(t,n|1),Me(t,ne()),!(I&6)&&(Un=ne()+500,Xt()))}break;case 13:fn(function(){var r=kt(e,1);if(r!==null){var o=Ee();tt(r,e,1,o)}}),Ys(e,1)}};ms=function(e){if(e.tag===13){var t=kt(e,134217728);if(t!==null){var n=Ee();tt(t,e,134217728,n)}Ys(e,134217728)}};Uf=function(e){if(e.tag===13){var t=Vt(e),n=kt(e,t);if(n!==null){var r=Ee();tt(n,e,t,r)}Ys(e,t)}};Wf=function(){return H};Qf=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};fa=function(e,t,n){switch(t){case"input":if(oa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=xi(r);if(!o)throw Error(x(90));kf(r),oa(r,o)}}}break;case"textarea":xf(e,n);break;case"select":t=n.value,t!=null&&Tn(e,!!n.multiple,t,!1)}};Mf=Vs;$f=fn;var D1={usingClientEntryPoint:!1,Events:[br,_n,xi,Nf,zf,Vs]},lr={findFiberByHostInstance:tn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},F1={bundleType:lr.bundleType,version:lr.version,rendererPackageName:lr.rendererPackageName,rendererConfig:lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=If(e),e===null?null:e.stateNode},findFiberByHostInstance:lr.findFiberByHostInstance||I1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eo.isDisabled&&Eo.supportsFiber)try{Si=Eo.inject(F1),ct=Eo}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D1;He.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xs(t))throw Error(x(200));return R1(e,t,null,n)};He.createRoot=function(e,t){if(!Xs(e))throw Error(x(299));var n=!1,r="",o=mp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Qs(e,1,!1,null,null,n,!1,r,o),e[_t]=t.current,Mr(e.nodeType===8?e.parentNode:e),new bs(t)};He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=If(t),e=e===null?null:e.stateNode,e};He.flushSync=function(e){return fn(e)};He.hydrate=function(e,t,n){if(!Li(t))throw Error(x(200));return Ri(null,e,t,!0,n)};He.hydrateRoot=function(e,t,n){if(!Xs(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=mp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=pp(t,null,e,1,n??null,o,!1,i,l),e[_t]=t.current,Mr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new $i(t)};He.render=function(e,t,n){if(!Li(t))throw Error(x(200));return Ri(null,e,t,!1,n)};He.unmountComponentAtNode=function(e){if(!Li(e))throw Error(x(40));return e._reactRootContainer?(fn(function(){Ri(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1};He.unstable_batchedUpdates=Vs;He.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Li(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return Ri(e,t,n,!1,r)};He.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=He})(I0);const Ks=lf(kr);var Cc=kr;Gl.createRoot=Cc.createRoot,Gl.hydrateRoot=Cc.hydrateRoot;const H1="_footer_16mu1_1",A1="_credits_16mu1_25",Pc={footer:H1,credits:A1},hp=async e=>{try{const t=await localStorage.getItem(e);return t===null?null:JSON.parse(t)}catch(t){return console.warn(t),null}},Rn=async(e,t)=>{try{const n=JSON.stringify(t);await localStorage.setItem(e,n)}catch(n){console.warn(n)}},mn=z.createContext({language:"en",changeLanguage(e){}}),V1=({children:e})=>{const[t,n]=z.useState("en");z.useEffect(()=>{hp("@languageNomina").then(o=>{o==="en"||o==="es"?n(o):Rn("@languageNomina","en")})},[]);const r=o=>{o==="en"?(Rn("@languageNomina","en"),n("en")):o==="es"&&(Rn("@languageNomina","es"),n("es"))};return k(mn.Provider,{value:{changeLanguage:r,language:t},children:e})},B1={copy:"Copyright",desing:"Diseñado por:",name:"Luichi"},U1={copy:"Copyright",desing:"Diseñado por:",name:"Luichi"},W1={en:B1,es:U1};function Q1(){const{language:e}=z.useContext(mn),t=W1[e],n=new Date().getFullYear();return k("footer",{id:"footer",className:Pc.footer,children:F("div",{className:Pc.credits,children:[F("p",{children:[t.copy," ©   ",n]}),F("p",{children:[t.desing,"  ",k("a",{href:"https://github.com/Luichix",target:"_blank",rel:"noreferrer",children:"Luichix"})]})]})})}var J={},Gs={},Kr={},Gr={},vp="Expected a function",Oc=0/0,Y1="[object Symbol]",b1=/^\s+|\s+$/g,X1=/^[-+]0x[0-9a-f]+$/i,K1=/^0b[01]+$/i,G1=/^0o[0-7]+$/i,q1=parseInt,Z1=typeof io=="object"&&io&&io.Object===Object&&io,J1=typeof self=="object"&&self&&self.Object===Object&&self,eh=Z1||J1||Function("return this")(),th=Object.prototype,nh=th.toString,rh=Math.max,oh=Math.min,Al=function(){return eh.Date.now()};function ih(e,t,n){var r,o,i,l,a,s,u=0,d=!1,p=!1,h=!0;if(typeof e!="function")throw new TypeError(vp);t=Tc(t)||0,vi(n)&&(d=!!n.leading,p="maxWait"in n,i=p?rh(Tc(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h);function g(S){var _=r,T=o;return r=o=void 0,u=S,l=e.apply(T,_),l}function w(S){return u=S,a=setTimeout(f,t),d?g(S):l}function y(S){var _=S-s,T=S-u,B=t-_;return p?oh(B,i-T):B}function P(S){var _=S-s,T=S-u;return s===void 0||_>=t||_<0||p&&T>=i}function f(){var S=Al();if(P(S))return c(S);a=setTimeout(f,y(S))}function c(S){return a=void 0,h&&r?g(S):(r=o=void 0,l)}function m(){a!==void 0&&clearTimeout(a),u=0,r=s=o=a=void 0}function v(){return a===void 0?l:c(Al())}function E(){var S=Al(),_=P(S);if(r=arguments,o=this,s=S,_){if(a===void 0)return w(s);if(p)return a=setTimeout(f,t),g(s)}return a===void 0&&(a=setTimeout(f,t)),l}return E.cancel=m,E.flush=v,E}function lh(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(vp);return vi(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),ih(e,t,{leading:r,maxWait:t,trailing:o})}function vi(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ah(e){return!!e&&typeof e=="object"}function sh(e){return typeof e=="symbol"||ah(e)&&nh.call(e)==Y1}function Tc(e){if(typeof e=="number")return e;if(sh(e))return Oc;if(vi(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=vi(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(b1,"");var n=K1.test(e);return n||G1.test(e)?q1(e.slice(2),n?2:8):X1.test(e)?Oc:+e}var uh=lh,qr={};Object.defineProperty(qr,"__esModule",{value:!0});qr.addPassiveEventListener=function(t,n,r){var o=function(){var i=!1;try{var l=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("test",null,l)}catch{}return i}();t.addEventListener(n,r,o?{passive:!0}:!1)};qr.removePassiveEventListener=function(t,n,r){t.removeEventListener(n,r)};Object.defineProperty(Gr,"__esModule",{value:!0});var ch=uh,fh=ph(ch),dh=qr;function ph(e){return e&&e.__esModule?e:{default:e}}var mh=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,fh.default)(t,n)},X={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,n){if(t){var r=mh(function(o){X.scrollHandler(t)},n);X.scrollSpyContainers.push(t),(0,dh.addPassiveEventListener)(t,"scroll",r)}},isMounted:function(t){return X.scrollSpyContainers.indexOf(t)!==-1},currentPositionX:function(t){if(t===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return t.scrollLeft},currentPositionY:function(t){if(t===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return t.scrollTop},scrollHandler:function(t){var n=X.scrollSpyContainers[X.scrollSpyContainers.indexOf(t)].spyCallbacks||[];n.forEach(function(r){return r(X.currentPositionX(t),X.currentPositionY(t))})},addStateHandler:function(t){X.spySetState.push(t)},addSpyHandler:function(t,n){var r=X.scrollSpyContainers[X.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(t),t(X.currentPositionX(n),X.currentPositionY(n))},updateStates:function(){X.spySetState.forEach(function(t){return t()})},unmount:function(t,n){X.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),X.spySetState&&X.spySetState.length&&X.spySetState.indexOf(t)>-1&&X.spySetState.splice(X.spySetState.indexOf(t),1),document.removeEventListener("scroll",X.scrollHandler)},update:function(){return X.scrollSpyContainers.forEach(function(t){return X.scrollHandler(t)})}};Gr.default=X;var Kn={},Zr={};Object.defineProperty(Zr,"__esModule",{value:!0});var hh=function(t,n){var r=t.indexOf("#")===0?t.substring(1):t,o=r?"#"+r:"",i=window&&window.location,l=o?i.pathname+i.search+o:i.pathname+i.search;n?history.pushState(history.state,"",l):history.replaceState(history.state,"",l)},vh=function(){return window.location.hash.replace(/^#/,"")},gh=function(t){return function(n){return t.contains?t!=n&&t.contains(n):!!(t.compareDocumentPosition(n)&16)}},yh=function(t){return getComputedStyle(t).position!=="static"},Vl=function(t,n){for(var r=t.offsetTop,o=t.offsetParent;o&&!n(o);)r+=o.offsetTop,o=o.offsetParent;return{offsetTop:r,offsetParent:o}},wh=function(t,n,r){if(r)return t===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(t).position!=="static"?n.offsetLeft:n.offsetLeft-t.offsetLeft;if(t===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(yh(t)){if(n.offsetParent!==t){var o=function(d){return d===t||d===document},i=Vl(n,o),l=i.offsetTop,a=i.offsetParent;if(a!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return l}return n.offsetTop}if(n.offsetParent===t.offsetParent)return n.offsetTop-t.offsetTop;var s=function(d){return d===document};return Vl(n,s).offsetTop-Vl(t,s).offsetTop};Zr.default={updateHash:hh,getHash:vh,filterElementInContainer:gh,scrollOffset:wh};var Ii={},qs={};Object.defineProperty(qs,"__esModule",{value:!0});qs.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};var Zs={};Object.defineProperty(Zs,"__esModule",{value:!0});var Sh=qr,_h=["mousedown","mousewheel","touchmove","keydown"];Zs.default={subscribe:function(t){return typeof document<"u"&&_h.forEach(function(n){return(0,Sh.addPassiveEventListener)(document,n,t)})}};var Jr={};Object.defineProperty(Jr,"__esModule",{value:!0});var Wa={registered:{},scrollEvent:{register:function(t,n){Wa.registered[t]=n},remove:function(t){Wa.registered[t]=null}}};Jr.default=Wa;Object.defineProperty(Ii,"__esModule",{value:!0});var kh=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Eh=Zr;ji(Eh);var xh=qs,Nc=ji(xh),Ch=Zs,Ph=ji(Ch),Oh=Jr,lt=ji(Oh);function ji(e){return e&&e.__esModule?e:{default:e}}var gp=function(t){return Nc.default[t.smooth]||Nc.default.defaultEasing},Th=function(t){return typeof t=="function"?t:function(){return t}},Nh=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Qa=function(){return Nh()||function(e,t,n){window.setTimeout(e,n||1e3/60,new Date().getTime())}}(),yp=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},wp=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,o=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:o?document.documentElement.scrollLeft:document.body.scrollLeft},Sp=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,o=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:o?document.documentElement.scrollTop:document.body.scrollTop},zh=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,o=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,o.clientWidth,o.scrollWidth,o.offsetWidth)},Mh=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,o=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)},$h=function e(t,n,r){var o=n.data;if(!n.ignoreCancelEvents&&o.cancel){lt.default.registered.end&&lt.default.registered.end(o.to,o.target,o.currentPositionY);return}if(o.delta=Math.round(o.targetPosition-o.startPosition),o.start===null&&(o.start=r),o.progress=r-o.start,o.percent=o.progress>=o.duration?1:t(o.progress/o.duration),o.currentPosition=o.startPosition+Math.ceil(o.delta*o.percent),o.containerElement&&o.containerElement!==document&&o.containerElement!==document.body?n.horizontal?o.containerElement.scrollLeft=o.currentPosition:o.containerElement.scrollTop=o.currentPosition:n.horizontal?window.scrollTo(o.currentPosition,0):window.scrollTo(0,o.currentPosition),o.percent<1){var i=e.bind(null,t,n);Qa.call(window,i);return}lt.default.registered.end&&lt.default.registered.end(o.to,o.target,o.currentPosition)},Js=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},eo=function(t,n,r,o){if(n.data=n.data||yp(),window.clearTimeout(n.data.delayTimeout),Ph.default.subscribe(function(){n.data.cancel=!0}),Js(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?wp(n):Sp(n),n.data.targetPosition=n.absolute?t:t+n.data.startPosition,n.data.startPosition===n.data.targetPosition){lt.default.registered.end&&lt.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=Th(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=o;var i=gp(n),l=$h.bind(null,i,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){lt.default.registered.begin&&lt.default.registered.begin(n.data.to,n.data.target),Qa.call(window,l)},n.delay);return}lt.default.registered.begin&&lt.default.registered.begin(n.data.to,n.data.target),Qa.call(window,l)},Di=function(t){return t=kh({},t),t.data=t.data||yp(),t.absolute=!0,t},Lh=function(t){eo(0,Di(t))},Rh=function(t,n){eo(t,Di(n))},Ih=function(t){t=Di(t),Js(t),eo(t.horizontal?zh(t):Mh(t),t)},jh=function(t,n){n=Di(n),Js(n);var r=n.horizontal?wp(n):Sp(n);eo(t+r,n)};Ii.default={animateTopScroll:eo,getAnimationType:gp,scrollToTop:Lh,scrollToBottom:Ih,scrollTo:Rh,scrollMore:jh};Object.defineProperty(Kn,"__esModule",{value:!0});var Dh=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fh=Zr,Hh=eu(Fh),Ah=Ii,Vh=eu(Ah),Bh=Jr,xo=eu(Bh);function eu(e){return e&&e.__esModule?e:{default:e}}var Co={},zc=void 0;Kn.default={unmount:function(){Co={}},register:function(t,n){Co[t]=n},unregister:function(t){delete Co[t]},get:function(t){return Co[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return zc=t},getActiveLink:function(){return zc},scrollTo:function(t,n){var r=this.get(t);if(!r){console.warn("target Element not found");return}n=Dh({},n,{absolute:!1});var o=n.containerId,i=n.container,l=void 0;o?l=document.getElementById(o):i&&i.nodeType?l=i:l=document,n.absolute=!0;var a=n.horizontal,s=Hh.default.scrollOffset(l,r,a)+(n.offset||0);if(!n.smooth){xo.default.registered.begin&&xo.default.registered.begin(t,r),l===document?n.horizontal?window.scrollTo(s,0):window.scrollTo(0,s):l.scrollTop=s,xo.default.registered.end&&xo.default.registered.end(t,r);return}Vh.default.animateTopScroll(s,n,t,r)}};var Wn={},Uh={get exports(){return Wn},set exports(e){Wn=e}},Wh="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Qh=Wh,Yh=Qh;function _p(){}function kp(){}kp.resetWarningCache=_p;var bh=function(){function e(r,o,i,l,a,s){if(s!==Yh){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:kp,resetWarningCache:_p};return n.PropTypes=n,n};Uh.exports=bh();var Fi={};Object.defineProperty(Fi,"__esModule",{value:!0});var Xh=Zr,Bl=Kh(Xh);function Kh(e){return e&&e.__esModule?e:{default:e}}var Gh={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,n){this.containers[t]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,n=this.getHash();n?window.setTimeout(function(){t.scrollTo(n,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,n){var r=this.scroller,o=r.get(t);if(o&&(n||t!==r.getActiveLink())){var i=this.containers[t]||document;r.scrollTo(t,{container:i})}},getHash:function(){return Bl.default.getHash()},changeHash:function(t,n){this.isInitialized()&&Bl.default.getHash()!==t&&Bl.default.updateHash(t,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};Fi.default=Gh;Object.defineProperty(Kr,"__esModule",{value:!0});var Po=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qh=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Zh=z,Mc=to(Zh),Jh=Gr,Oo=to(Jh),ev=Kn,tv=to(ev),nv=Wn,Y=to(nv),rv=Fi,Ot=to(rv);function to(e){return e&&e.__esModule?e:{default:e}}function ov(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function iv(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function lv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var $c={to:Y.default.string.isRequired,containerId:Y.default.string,container:Y.default.object,activeClass:Y.default.string,activeStyle:Y.default.object,spy:Y.default.bool,horizontal:Y.default.bool,smooth:Y.default.oneOfType([Y.default.bool,Y.default.string]),offset:Y.default.number,delay:Y.default.number,isDynamic:Y.default.bool,onClick:Y.default.func,duration:Y.default.oneOfType([Y.default.number,Y.default.func]),absolute:Y.default.bool,onSetActive:Y.default.func,onSetInactive:Y.default.func,ignoreCancelEvents:Y.default.bool,hashSpy:Y.default.bool,saveHashHistory:Y.default.bool,spyThrottle:Y.default.number};Kr.default=function(e,t){var n=t||tv.default,r=function(i){lv(l,i);function l(a){ov(this,l);var s=iv(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,a));return o.call(s),s.state={active:!1},s}return qh(l,[{key:"getScrollSpyContainer",value:function(){var s=this.props.containerId,u=this.props.container;return s&&!u?document.getElementById(s):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var s=this.getScrollSpyContainer();Oo.default.isMounted(s)||Oo.default.mount(s,this.props.spyThrottle),this.props.hashSpy&&(Ot.default.isMounted()||Ot.default.mount(n),Ot.default.mapContainer(this.props.to,s)),Oo.default.addSpyHandler(this.spyHandler,s),this.setState({container:s})}}},{key:"componentWillUnmount",value:function(){Oo.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var s="";this.state&&this.state.active?s=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():s=this.props.className;var u={};this.state&&this.state.active?u=Po({},this.props.style,this.props.activeStyle):u=Po({},this.props.style);var d=Po({},this.props);for(var p in $c)d.hasOwnProperty(p)&&delete d[p];return d.className=s,d.style=u,d.onClick=this.handleClick,Mc.default.createElement(e,d)}}]),l}(Mc.default.PureComponent),o=function(){var l=this;this.scrollTo=function(a,s){n.scrollTo(a,Po({},l.state,s))},this.handleClick=function(a){l.props.onClick&&l.props.onClick(a),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),l.scrollTo(l.props.to,l.props)},this.spyHandler=function(a,s){var u=l.getScrollSpyContainer();if(!(Ot.default.isMounted()&&!Ot.default.isInitialized())){var d=l.props.horizontal,p=l.props.to,h=null,g=void 0,w=void 0;if(d){var y=0,P=0,f=0;if(u.getBoundingClientRect){var c=u.getBoundingClientRect();f=c.left}if(!h||l.props.isDynamic){if(h=n.get(p),!h)return;var m=h.getBoundingClientRect();y=m.left-f+a,P=y+m.width}var v=a-l.props.offset;g=v>=Math.floor(y)&&v<Math.floor(P),w=v<Math.floor(y)||v>=Math.floor(P)}else{var E=0,S=0,_=0;if(u.getBoundingClientRect){var T=u.getBoundingClientRect();_=T.top}if(!h||l.props.isDynamic){if(h=n.get(p),!h)return;var B=h.getBoundingClientRect();E=B.top-_+s,S=E+B.height}var $=s-l.props.offset;g=$>=Math.floor(E)&&$<Math.floor(S),w=$<Math.floor(E)||$>=Math.floor(S)}var Pe=n.getActiveLink();if(w){if(p===Pe&&n.setActiveLink(void 0),l.props.hashSpy&&Ot.default.getHash()===p){var Ct=l.props.saveHashHistory,Kt=Ct===void 0?!1:Ct;Ot.default.changeHash("",Kt)}l.props.spy&&l.state.active&&(l.setState({active:!1}),l.props.onSetInactive&&l.props.onSetInactive(p,h))}if(g&&(Pe!==p||l.state.active===!1)){n.setActiveLink(p);var Zn=l.props.saveHashHistory,cl=Zn===void 0?!1:Zn;l.props.hashSpy&&Ot.default.changeHash(p,cl),l.props.spy&&(l.setState({active:!0}),l.props.onSetActive&&l.props.onSetActive(p,h))}}}};return r.propTypes=$c,r.defaultProps={offset:0},r};Object.defineProperty(Gs,"__esModule",{value:!0});var av=z,Lc=Ep(av),sv=Kr,uv=Ep(sv);function Ep(e){return e&&e.__esModule?e:{default:e}}function cv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Rc(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function fv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var dv=function(e){fv(t,e);function t(){var n,r,o,i;cv(this,t);for(var l=arguments.length,a=Array(l),s=0;s<l;s++)a[s]=arguments[s];return i=(r=(o=Rc(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),o),o.render=function(){return Lc.default.createElement("a",o.props,o.props.children)},r),Rc(o,i)}return t}(Lc.default.Component);Gs.default=(0,uv.default)(dv);var tu={};Object.defineProperty(tu,"__esModule",{value:!0});var pv=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),mv=z,Ic=xp(mv),hv=Kr,vv=xp(hv);function xp(e){return e&&e.__esModule?e:{default:e}}function gv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function yv(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function wv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Sv=function(e){wv(t,e);function t(){return gv(this,t),yv(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return pv(t,[{key:"render",value:function(){return Ic.default.createElement("input",this.props,this.props.children)}}]),t}(Ic.default.Component);tu.default=(0,vv.default)(Sv);var nu={},Hi={};Object.defineProperty(Hi,"__esModule",{value:!0});var _v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kv=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ev=z,jc=Ai(Ev),xv=kr;Ai(xv);var Cv=Kn,Dc=Ai(Cv),Pv=Wn,Fc=Ai(Pv);function Ai(e){return e&&e.__esModule?e:{default:e}}function Ov(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Tv(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Nv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Hi.default=function(e){var t=function(n){Nv(r,n);function r(o){Ov(this,r);var i=Tv(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,o));return i.childBindings={domNode:null},i}return kv(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(i){this.props.name!==i.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Dc.default.unregister(this.props.name)}},{key:"registerElems",value:function(i){Dc.default.register(i,this.childBindings.domNode)}},{key:"render",value:function(){return jc.default.createElement(e,_v({},this.props,{parentBindings:this.childBindings}))}}]),r}(jc.default.Component);return t.propTypes={name:Fc.default.string,id:Fc.default.string},t};Object.defineProperty(nu,"__esModule",{value:!0});var Hc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zv=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Mv=z,Ac=ru(Mv),$v=Hi,Lv=ru($v),Rv=Wn,Vc=ru(Rv);function ru(e){return e&&e.__esModule?e:{default:e}}function Iv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function jv(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Dv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Cp=function(e){Dv(t,e);function t(){return Iv(this,t),jv(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return zv(t,[{key:"render",value:function(){var r=this,o=Hc({},this.props);return o.parentBindings&&delete o.parentBindings,Ac.default.createElement("div",Hc({},o,{ref:function(l){r.props.parentBindings.domNode=l}}),this.props.children)}}]),t}(Ac.default.Component);Cp.propTypes={name:Vc.default.string,id:Vc.default.string};nu.default=(0,Lv.default)(Cp);var Ul=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bc=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function Uc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wc(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Qc(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var To=z,Zt=Gr,Wl=Kn,K=Wn,Tt=Fi,Yc={to:K.string.isRequired,containerId:K.string,container:K.object,activeClass:K.string,spy:K.bool,smooth:K.oneOfType([K.bool,K.string]),offset:K.number,delay:K.number,isDynamic:K.bool,onClick:K.func,duration:K.oneOfType([K.number,K.func]),absolute:K.bool,onSetActive:K.func,onSetInactive:K.func,ignoreCancelEvents:K.bool,hashSpy:K.bool,spyThrottle:K.number},Fv={Scroll:function(t,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||Wl,o=function(l){Qc(a,l);function a(s){Uc(this,a);var u=Wc(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,s));return i.call(u),u.state={active:!1},u}return Bc(a,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,d=this.props.container;return u?document.getElementById(u):d&&d.nodeType?d:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();Zt.isMounted(u)||Zt.mount(u,this.props.spyThrottle),this.props.hashSpy&&(Tt.isMounted()||Tt.mount(r),Tt.mapContainer(this.props.to,u)),this.props.spy&&Zt.addStateHandler(this.stateHandler),Zt.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){Zt.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var d=Ul({},this.props);for(var p in Yc)d.hasOwnProperty(p)&&delete d[p];return d.className=u,d.onClick=this.handleClick,To.createElement(t,d)}}]),a}(To.Component),i=function(){var a=this;this.scrollTo=function(s,u){r.scrollTo(s,Ul({},a.state,u))},this.handleClick=function(s){a.props.onClick&&a.props.onClick(s),s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault(),a.scrollTo(a.props.to,a.props)},this.stateHandler=function(){r.getActiveLink()!==a.props.to&&(a.state!==null&&a.state.active&&a.props.onSetInactive&&a.props.onSetInactive(),a.setState({active:!1}))},this.spyHandler=function(s){var u=a.getScrollSpyContainer();if(!(Tt.isMounted()&&!Tt.isInitialized())){var d=a.props.to,p=null,h=0,g=0,w=0;if(u.getBoundingClientRect){var y=u.getBoundingClientRect();w=y.top}if(!p||a.props.isDynamic){if(p=r.get(d),!p)return;var P=p.getBoundingClientRect();h=P.top-w+s,g=h+P.height}var f=s-a.props.offset,c=f>=Math.floor(h)&&f<Math.floor(g),m=f<Math.floor(h)||f>=Math.floor(g),v=r.getActiveLink();if(m)return d===v&&r.setActiveLink(void 0),a.props.hashSpy&&Tt.getHash()===d&&Tt.changeHash(),a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive()),Zt.updateStates();if(c&&v!==d)return r.setActiveLink(d),a.props.hashSpy&&Tt.changeHash(d),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(d)),Zt.updateStates()}}};return o.propTypes=Yc,o.defaultProps={offset:0},o},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){Qc(o,r);function o(i){Uc(this,o);var l=Wc(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,i));return l.childBindings={domNode:null},l}return Bc(o,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(l){this.props.name!==l.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Wl.unregister(this.props.name)}},{key:"registerElems",value:function(l){Wl.register(l,this.childBindings.domNode)}},{key:"render",value:function(){return To.createElement(t,Ul({},this.props,{parentBindings:this.childBindings}))}}]),o}(To.Component);return n.propTypes={name:K.string,id:K.string},n}},Hv=Fv;Object.defineProperty(J,"__esModule",{value:!0});J.Helpers=J.ScrollElement=J.ScrollLink=Dp=J.animateScroll=J.scrollSpy=J.Events=J.scroller=J.Element=J.Button=jp=J.Link=void 0;var Av=Gs,Pp=pt(Av),Vv=tu,Op=pt(Vv),Bv=nu,Tp=pt(Bv),Uv=Kn,Np=pt(Uv),Wv=Jr,zp=pt(Wv),Qv=Gr,Mp=pt(Qv),Yv=Ii,$p=pt(Yv),bv=Kr,Lp=pt(bv),Xv=Hi,Rp=pt(Xv),Kv=Hv,Ip=pt(Kv);function pt(e){return e&&e.__esModule?e:{default:e}}var jp=J.Link=Pp.default;J.Button=Op.default;J.Element=Tp.default;J.scroller=Np.default;J.Events=zp.default;J.scrollSpy=Mp.default;var Dp=J.animateScroll=$p.default;J.ScrollLink=Lp.default;J.ScrollElement=Rp.default;J.Helpers=Ip.default;J.default={Link:Pp.default,Button:Op.default,Element:Tp.default,scroller:Np.default,Events:zp.default,scrollSpy:Mp.default,animateScroll:$p.default,ScrollLink:Lp.default,ScrollElement:Rp.default,Helpers:Ip.default};const Gv={home:"Inicio",about:"Sobre mi",skills:"Habilidades",portfolio:"Portafolio",contact:"Contacto"},qv={home:"Inicio",about:"Sobre mi",skills:"Habilidades",portfolio:"Portafolio",contact:"Contacto"},Zv={es:Gv,en:qv},Jv="/portafolio/assets/perfil-b4300901.png";var Fp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},bc=yt.createContext&&yt.createContext(Fp),Ut=globalThis&&globalThis.__assign||function(){return Ut=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Ut.apply(this,arguments)},eg=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function Hp(e){return e&&e.map(function(t,n){return yt.createElement(t.tag,Ut({key:n},t.attr),Hp(t.child))})}function ve(e){return function(t){return yt.createElement(tg,Ut({attr:Ut({},e.attr)},t),Hp(e.child))}}function tg(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,l=eg(e,["attr","size","title"]),a=o||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),yt.createElement("svg",Ut({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:Ut(Ut({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&yt.createElement("title",null,i),e.children)};return bc!==void 0?yt.createElement(bc.Consumer,null,function(n){return t(n)}):t(Fp)}function ng(e){return ve({tag:"svg",attr:{viewBox:"0 0 12 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"}}]})(e)}function rg(e){return ve({tag:"svg",attr:{viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M16 9l-3-3V2h-2v2L8 1 0 9h2l1 5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1l1-5h2zm-4 5H9v-4H7v4H4L2.81 7.69 8 2.5l5.19 5.19L12 14z"}}]})(e)}function og(e){return ve({tag:"svg",attr:{viewBox:"0 0 14 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"}}]})(e)}function ig(e){return ve({tag:"svg",attr:{viewBox:"0 0 12 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"}}]})(e)}function lg(e){return ve({tag:"svg",attr:{viewBox:"0 0 15 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"}}]})(e)}function ag(e){return ve({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function sg(e){return ve({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function ug(e){return ve({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"}}]})(e)}function cg(e){return ve({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M160 448c-25.6 0-51.2-22.4-64-32-64-44.8-83.2-60.8-96-70.4V480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V345.6c-12.8 9.6-32 25.6-96 70.4-12.8 9.6-38.4 32-64 32zm128-192H32c-17.67 0-32 14.33-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4 9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.67-14.33-32-32-32zm256-96H224c-17.67 0-32 14.33-32 32v32h96c33.21 0 60.59 25.42 63.71 57.82l.29-.22V416h192c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.29 28.71-64 64-64h224V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v192h96v-32z"}}]})(e)}function fg(e){return ve({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z",clipRule:"evenodd"}}]})(e)}function dg(e){return ve({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"}}]})(e)}function pg(e){return ve({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}}]})(e)}const mg="_sidenav_10n8i_5",hg="_container_10n8i_25",vg="_image_10n8i_71",gg="_title_10n8i_91",yg="_group_10n8i_129",wg="_social_10n8i_137",Sg="_menu_10n8i_195",_g="_link_10n8i_225",kg="_active_10n8i_263",Eg="_toggle_10n8i_287",xg="_back_10n8i_321",Cg="_show_10n8i_377",Le={sidenav:mg,container:hg,image:vg,title:gg,group:yg,social:wg,menu:Sg,link:_g,active:kg,toggle:Eg,back:xg,show:Cg};var Ya={},Pg={get exports(){return Ya},set exports(e){Ya=e}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var l=typeof i;if(l==="string"||l==="number")r.push(i);else if(Array.isArray(i)){if(i.length){var a=n.apply(null,i);a&&r.push(a)}}else if(l==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){r.push(i.toString());continue}for(var s in i)t.call(i,s)&&i[s]&&r.push(s)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Pg);const Og=Ya;function Tg({children:e,onToggle:t}){const n=document.getElementById("menu");return Ks.createPortal(k("button",{onClick:t,type:"button",className:Le.toggle,children:e}),n)}const Ng=z.forwardRef(function({scrollToTop:t},n){const r=document.getElementById("scroll");return Ks.createPortal(k("a",{onClick:t,className:Le.back,ref:n,children:k("i",{children:k(fg,{})})}),r)}),zg=["home","about","skills","portfolio","contact"],Mg=[k(rg,{},"home"),k(ig,{},"person"),k(ng,{},"file"),k(lg,{},"project"),k(og,{},"mail")];function $g(){const{language:e}=z.useContext(mn),t=Zv[e],[n,r]=z.useState(!1),o=()=>{r(!n)},i=z.useRef(null),[l,a]=z.useState(0),s=()=>{Dp.scrollToTop()};return z.useEffect(()=>{const u=()=>a(window.pageYOffset);return window.removeEventListener("scroll",u),window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),l>500?i!=null&&i.current&&(i.current.style.opacity="1"):i!=null&&i.current&&(i.current.style.opacity="0"),F("header",{id:"header",className:Og(Le.sidenav,{[Le.show]:n}),children:[k(Tg,{onToggle:o,children:k("i",{children:n?k(pg,{}):k(dg,{})})}),k(Ng,{scrollToTop:s,ref:i}),k("div",{className:Le.container,children:F("div",{className:Le.profile,children:[k("img",{src:Jv,alt:"Imagen de perfil",className:Le.image}),F("div",{className:Le.group,children:[k("h1",{className:Le.title,children:k("a",{href:"index.html",children:"Luichix"})}),F("div",{className:Le.social,children:[k("a",{href:"https://github.com/Luichix",target:"_blank",rel:"noreferrer",children:k(ag,{})}),k("a",{href:"https://wa.me/50584584479?text=Hola,%20te%20contacto%20desde%20tu%20pagina%20web",target:"_blank",rel:"noreferrer",children:k(ug,{})}),k("a",{href:"https://www.linkedin.com/in/luisreynaldopch",target:"_blank",rel:"noreferrer",children:k(sg,{})}),k("a",{href:"mailto:luichix.rex@gmail.com",target:"_blank",rel:"noreferrer",children:k(cg,{})})]})]}),k("nav",{className:Le.menu,children:k("ul",{children:zg.map((u,d)=>k("li",{children:F(jp,{className:Le.link,activeClass:Le.active,to:u,spy:!0,smooth:"easeInOutQuint",offset:0,duration:1500,onClick:()=>r(!1),children:[k("i",{children:Mg[d]}),k("span",{children:t[u]})]})},d))})})]})})]})}const Lg=z.createContext({theme:"light",changeTheme(){}}),Rg=({children:e})=>{const[t,n]=z.useState("light");z.useEffect(()=>{r()},[]);const r=async()=>{await hp("@themeNomina")==="dark"?n("dark"):(Rn("@themeNomina","light"),n("light"))},i={changeTheme:()=>{t==="dark"?(Rn("@themeNomina","light"),n("light")):(Rn("@themeNomina","dark"),n("dark"))},theme:t};return k(Lg.Provider,{value:i,children:e})};function Ig(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function jg(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Dg=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(jg(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Ig(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),we="-ms-",gi="-moz-",j="-webkit-",Ap="comm",ou="rule",iu="decl",Fg="@import",Vp="@keyframes",Hg=Math.abs,Vi=String.fromCharCode,Ag=Object.assign;function Vg(e,t){return pe(e,0)^45?(((t<<2^pe(e,0))<<2^pe(e,1))<<2^pe(e,2))<<2^pe(e,3):0}function Bp(e){return e.trim()}function Bg(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function ba(e,t){return e.indexOf(t)}function pe(e,t){return e.charCodeAt(t)|0}function Ar(e,t,n){return e.slice(t,n)}function at(e){return e.length}function lu(e){return e.length}function No(e,t){return t.push(e),e}function Ug(e,t){return e.map(t).join("")}var Bi=1,Qn=1,Up=0,$e=0,re=0,Gn="";function Ui(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Bi,column:Qn,length:l,return:""}}function ar(e,t){return Ag(Ui("",null,null,"",null,null,0),e,{length:-e.length},t)}function Wg(){return re}function Qg(){return re=$e>0?pe(Gn,--$e):0,Qn--,re===10&&(Qn=1,Bi--),re}function De(){return re=$e<Up?pe(Gn,$e++):0,Qn++,re===10&&(Qn=1,Bi++),re}function dt(){return pe(Gn,$e)}function Uo(){return $e}function no(e,t){return Ar(Gn,e,t)}function Vr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Wp(e){return Bi=Qn=1,Up=at(Gn=e),$e=0,[]}function Qp(e){return Gn="",e}function Wo(e){return Bp(no($e-1,Xa(e===91?e+2:e===40?e+1:e)))}function Yg(e){for(;(re=dt())&&re<33;)De();return Vr(e)>2||Vr(re)>3?"":" "}function bg(e,t){for(;--t&&De()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return no(e,Uo()+(t<6&&dt()==32&&De()==32))}function Xa(e){for(;De();)switch(re){case e:return $e;case 34:case 39:e!==34&&e!==39&&Xa(re);break;case 40:e===41&&Xa(e);break;case 92:De();break}return $e}function Xg(e,t){for(;De()&&e+re!==47+10;)if(e+re===42+42&&dt()===47)break;return"/*"+no(t,$e-1)+"*"+Vi(e===47?e:De())}function Kg(e){for(;!Vr(dt());)De();return no(e,$e)}function Gg(e){return Qp(Qo("",null,null,null,[""],e=Wp(e),0,[0],e))}function Qo(e,t,n,r,o,i,l,a,s){for(var u=0,d=0,p=l,h=0,g=0,w=0,y=1,P=1,f=1,c=0,m="",v=o,E=i,S=r,_=m;P;)switch(w=c,c=De()){case 40:if(w!=108&&pe(_,p-1)==58){ba(_+=D(Wo(c),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:_+=Wo(c);break;case 9:case 10:case 13:case 32:_+=Yg(w);break;case 92:_+=bg(Uo()-1,7);continue;case 47:switch(dt()){case 42:case 47:No(qg(Xg(De(),Uo()),t,n),s);break;default:_+="/"}break;case 123*y:a[u++]=at(_)*f;case 125*y:case 59:case 0:switch(c){case 0:case 125:P=0;case 59+d:g>0&&at(_)-p&&No(g>32?Kc(_+";",r,n,p-1):Kc(D(_," ","")+";",r,n,p-2),s);break;case 59:_+=";";default:if(No(S=Xc(_,t,n,u,d,o,a,m,v=[],E=[],p),i),c===123)if(d===0)Qo(_,t,S,S,v,i,p,a,E);else switch(h===99&&pe(_,3)===110?100:h){case 100:case 109:case 115:Qo(e,S,S,r&&No(Xc(e,S,S,0,0,o,a,m,o,v=[],p),E),o,E,p,a,r?v:E);break;default:Qo(_,S,S,S,[""],E,0,a,E)}}u=d=g=0,y=f=1,m=_="",p=l;break;case 58:p=1+at(_),g=w;default:if(y<1){if(c==123)--y;else if(c==125&&y++==0&&Qg()==125)continue}switch(_+=Vi(c),c*y){case 38:f=d>0?1:(_+="\f",-1);break;case 44:a[u++]=(at(_)-1)*f,f=1;break;case 64:dt()===45&&(_+=Wo(De())),h=dt(),d=p=at(m=_+=Kg(Uo())),c++;break;case 45:w===45&&at(_)==2&&(y=0)}}return i}function Xc(e,t,n,r,o,i,l,a,s,u,d){for(var p=o-1,h=o===0?i:[""],g=lu(h),w=0,y=0,P=0;w<r;++w)for(var f=0,c=Ar(e,p+1,p=Hg(y=l[w])),m=e;f<g;++f)(m=Bp(y>0?h[f]+" "+c:D(c,/&\f/g,h[f])))&&(s[P++]=m);return Ui(e,t,n,o===0?ou:a,s,u,d)}function qg(e,t,n){return Ui(e,t,n,Ap,Vi(Wg()),Ar(e,2,-2),0)}function Kc(e,t,n,r){return Ui(e,t,n,iu,Ar(e,0,r),Ar(e,r+1,-1),r)}function In(e,t){for(var n="",r=lu(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Zg(e,t,n,r){switch(e.type){case Fg:case iu:return e.return=e.return||e.value;case Ap:return"";case Vp:return e.return=e.value+"{"+In(e.children,r)+"}";case ou:e.value=e.props.join(",")}return at(n=In(e.children,r))?e.return=e.value+"{"+n+"}":""}function Jg(e){var t=lu(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function ey(e){return function(t){t.root||(t=t.return)&&e(t)}}function ty(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var ny=function(t,n,r){for(var o=0,i=0;o=i,i=dt(),o===38&&i===12&&(n[r]=1),!Vr(i);)De();return no(t,$e)},ry=function(t,n){var r=-1,o=44;do switch(Vr(o)){case 0:o===38&&dt()===12&&(n[r]=1),t[r]+=ny($e-1,n,r);break;case 2:t[r]+=Wo(o);break;case 4:if(o===44){t[++r]=dt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Vi(o)}while(o=De());return t},oy=function(t,n){return Qp(ry(Wp(t),n))},Gc=new WeakMap,iy=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Gc.get(r))&&!o){Gc.set(t,!0);for(var i=[],l=oy(n,i),a=r.props,s=0,u=0;s<l.length;s++)for(var d=0;d<a.length;d++,u++)t.props[u]=i[s]?l[s].replace(/&\f/g,a[d]):a[d]+" "+l[s]}}},ly=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Yp(e,t){switch(Vg(e,t)){case 5103:return j+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return j+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return j+e+gi+e+we+e+e;case 6828:case 4268:return j+e+we+e+e;case 6165:return j+e+we+"flex-"+e+e;case 5187:return j+e+D(e,/(\w+).+(:[^]+)/,j+"box-$1$2"+we+"flex-$1$2")+e;case 5443:return j+e+we+"flex-item-"+D(e,/flex-|-self/,"")+e;case 4675:return j+e+we+"flex-line-pack"+D(e,/align-content|flex-|-self/,"")+e;case 5548:return j+e+we+D(e,"shrink","negative")+e;case 5292:return j+e+we+D(e,"basis","preferred-size")+e;case 6060:return j+"box-"+D(e,"-grow","")+j+e+we+D(e,"grow","positive")+e;case 4554:return j+D(e,/([^-])(transform)/g,"$1"+j+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,j+"$1"),/(image-set)/,j+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,j+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,j+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+j+e+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,j+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(at(e)-1-t>6)switch(pe(e,t+1)){case 109:if(pe(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+j+"$2-$3$1"+gi+(pe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ba(e,"stretch")?Yp(D(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(pe(e,t+1)!==115)break;case 6444:switch(pe(e,at(e)-3-(~ba(e,"!important")&&10))){case 107:return D(e,":",":"+j)+e;case 101:return D(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+j+(pe(e,14)===45?"inline-":"")+"box$3$1"+j+"$2$3$1"+we+"$2box$3")+e}break;case 5936:switch(pe(e,t+11)){case 114:return j+e+we+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return j+e+we+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return j+e+we+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return j+e+we+e+e}return e}var ay=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case iu:t.return=Yp(t.value,t.length);break;case Vp:return In([ar(t,{value:D(t.value,"@","@"+j)})],o);case ou:if(t.length)return Ug(t.props,function(i){switch(Bg(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return In([ar(t,{props:[D(i,/:(read-\w+)/,":"+gi+"$1")]})],o);case"::placeholder":return In([ar(t,{props:[D(i,/:(plac\w+)/,":"+j+"input-$1")]}),ar(t,{props:[D(i,/:(plac\w+)/,":"+gi+"$1")]}),ar(t,{props:[D(i,/:(plac\w+)/,we+"input-$1")]})],o)}return""})}},sy=[ay],uy=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var P=y.getAttribute("data-emotion");P.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var o=t.stylisPlugins||sy,i={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var P=y.getAttribute("data-emotion").split(" "),f=1;f<P.length;f++)i[P[f]]=!0;a.push(y)});var s,u=[iy,ly];{var d,p=[Zg,ey(function(y){d.insert(y)})],h=Jg(u.concat(o,p)),g=function(P){return In(Gg(P),h)};s=function(P,f,c,m){d=c,g(P?P+"{"+f.styles+"}":f.styles),m&&(w.inserted[f.name]=!0)}}var w={key:n,sheet:new Dg({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return w.sheet.hydrate(a),w},Ka={},cy={get exports(){return Ka},set exports(e){Ka=e}},A={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe=typeof Symbol=="function"&&Symbol.for,au=fe?Symbol.for("react.element"):60103,su=fe?Symbol.for("react.portal"):60106,Wi=fe?Symbol.for("react.fragment"):60107,Qi=fe?Symbol.for("react.strict_mode"):60108,Yi=fe?Symbol.for("react.profiler"):60114,bi=fe?Symbol.for("react.provider"):60109,Xi=fe?Symbol.for("react.context"):60110,uu=fe?Symbol.for("react.async_mode"):60111,Ki=fe?Symbol.for("react.concurrent_mode"):60111,Gi=fe?Symbol.for("react.forward_ref"):60112,qi=fe?Symbol.for("react.suspense"):60113,fy=fe?Symbol.for("react.suspense_list"):60120,Zi=fe?Symbol.for("react.memo"):60115,Ji=fe?Symbol.for("react.lazy"):60116,dy=fe?Symbol.for("react.block"):60121,py=fe?Symbol.for("react.fundamental"):60117,my=fe?Symbol.for("react.responder"):60118,hy=fe?Symbol.for("react.scope"):60119;function Ve(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case au:switch(e=e.type,e){case uu:case Ki:case Wi:case Yi:case Qi:case qi:return e;default:switch(e=e&&e.$$typeof,e){case Xi:case Gi:case Ji:case Zi:case bi:return e;default:return t}}case su:return t}}}function bp(e){return Ve(e)===Ki}A.AsyncMode=uu;A.ConcurrentMode=Ki;A.ContextConsumer=Xi;A.ContextProvider=bi;A.Element=au;A.ForwardRef=Gi;A.Fragment=Wi;A.Lazy=Ji;A.Memo=Zi;A.Portal=su;A.Profiler=Yi;A.StrictMode=Qi;A.Suspense=qi;A.isAsyncMode=function(e){return bp(e)||Ve(e)===uu};A.isConcurrentMode=bp;A.isContextConsumer=function(e){return Ve(e)===Xi};A.isContextProvider=function(e){return Ve(e)===bi};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===au};A.isForwardRef=function(e){return Ve(e)===Gi};A.isFragment=function(e){return Ve(e)===Wi};A.isLazy=function(e){return Ve(e)===Ji};A.isMemo=function(e){return Ve(e)===Zi};A.isPortal=function(e){return Ve(e)===su};A.isProfiler=function(e){return Ve(e)===Yi};A.isStrictMode=function(e){return Ve(e)===Qi};A.isSuspense=function(e){return Ve(e)===qi};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Wi||e===Ki||e===Yi||e===Qi||e===qi||e===fy||typeof e=="object"&&e!==null&&(e.$$typeof===Ji||e.$$typeof===Zi||e.$$typeof===bi||e.$$typeof===Xi||e.$$typeof===Gi||e.$$typeof===py||e.$$typeof===my||e.$$typeof===hy||e.$$typeof===dy)};A.typeOf=Ve;(function(e){e.exports=A})(cy);var Xp=Ka,vy={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Kp={};Kp[Xp.ForwardRef]=vy;Kp[Xp.Memo]=gy;var yy=!0;function Gp(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var cu=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||yy===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},qp=function(t,n,r){cu(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function wy(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Sy={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_y=/[A-Z]|^ms/g,ky=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Zp=function(t){return t.charCodeAt(1)===45},qc=function(t){return t!=null&&typeof t!="boolean"},Ql=ty(function(e){return Zp(e)?e:e.replace(_y,"-$&").toLowerCase()}),Zc=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(ky,function(r,o,i){return st={name:o,styles:i,next:st},o})}return Sy[t]!==1&&!Zp(t)&&typeof n=="number"&&n!==0?n+"px":n};function Br(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return st={name:n.name,styles:n.styles,next:st},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)st={name:r.name,styles:r.styles,next:st},r=r.next;var o=n.styles+";";return o}return Ey(e,t,n)}case"function":{if(e!==void 0){var i=st,l=n(e);return st=i,Br(e,t,l)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function Ey(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Br(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":qc(l)&&(r+=Ql(i)+":"+Zc(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var a=0;a<l.length;a++)qc(l[a])&&(r+=Ql(i)+":"+Zc(i,l[a])+";");else{var s=Br(e,t,l);switch(i){case"animation":case"animationName":{r+=Ql(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var Jc=/label:\s*([^\s;\n{]+)\s*(;|$)/g,st,fu=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";st=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=Br(r,n,l)):i+=l[0];for(var a=1;a<t.length;a++)i+=Br(r,n,t[a]),o&&(i+=l[a]);Jc.lastIndex=0;for(var s="",u;(u=Jc.exec(i))!==null;)s+="-"+u[1];var d=wy(i)+s;return{name:d,styles:i,next:st}},xy=function(t){return t()},Cy=wu["useInsertionEffect"]?wu["useInsertionEffect"]:!1,Jp=Cy||xy,du={}.hasOwnProperty,e0=z.createContext(typeof HTMLElement<"u"?uy({key:"css"}):null);e0.Provider;var t0=function(t){return z.forwardRef(function(n,r){var o=z.useContext(e0);return t(n,o,r)})},n0=z.createContext({}),Ga="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Py=function(t,n){var r={};for(var o in n)du.call(n,o)&&(r[o]=n[o]);return r[Ga]=t,r},Oy=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return cu(n,r,o),Jp(function(){return qp(n,r,o)}),null},Ty=t0(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[Ga],i=[r],l="";typeof e.className=="string"?l=Gp(t.registered,i,e.className):e.className!=null&&(l=e.className+" ");var a=fu(i,void 0,z.useContext(n0));l+=t.key+"-"+a.name;var s={};for(var u in e)du.call(e,u)&&u!=="css"&&u!==Ga&&(s[u]=e[u]);return s.ref=n,s.className=l,z.createElement(z.Fragment,null,z.createElement(Oy,{cache:t,serialized:a,isStringTag:typeof o=="string"}),z.createElement(o,s))});function qn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return fu(t)}var C=function(){var t=qn.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Ny=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var l=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))l=e(i);else{l="";for(var a in i)i[a]&&a&&(l&&(l+=" "),l+=a)}break}default:l=i}l&&(o&&(o+=" "),o+=l)}}return o};function zy(e,t,n){var r=[],o=Gp(e,r,n);return r.length<2?n:o+t(r)}var My=function(t){var n=t.cache,r=t.serializedArr;return Jp(function(){for(var o=0;o<r.length;o++)qp(n,r[o],!1)}),null},Yl=t0(function(e,t){var n=!1,r=[],o=function(){for(var u=arguments.length,d=new Array(u),p=0;p<u;p++)d[p]=arguments[p];var h=fu(d,t.registered);return r.push(h),cu(t,h,!1),t.key+"-"+h.name},i=function(){for(var u=arguments.length,d=new Array(u),p=0;p<u;p++)d[p]=arguments[p];return zy(t.registered,o,Ny(d))},l={css:o,cx:i,theme:z.useContext(n0)},a=e.children(l);return n=!0,z.createElement(z.Fragment,null,z.createElement(My,{cache:t,serializedArr:r}),a)});function qa(){return qa=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qa.apply(this,arguments)}function $y(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Za(e,t)}function Za(e,t){return Za=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Za(e,t)}function Ly(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var Ja=new Map,zo=new WeakMap,ef=0,Ry=void 0;function Iy(e){return e?(zo.has(e)||(ef+=1,zo.set(e,ef.toString())),zo.get(e)):"0"}function jy(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?Iy(e.root):e[t])}).toString()}function Dy(e){var t=jy(e),n=Ja.get(t);if(!n){var r=new Map,o,i=new IntersectionObserver(function(l){l.forEach(function(a){var s,u=a.isIntersecting&&o.some(function(d){return a.intersectionRatio>=d});e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(s=r.get(a.target))==null||s.forEach(function(d){d(u,a)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},Ja.set(t,n)}return n}function r0(e,t,n,r){if(n===void 0&&(n={}),r===void 0&&(r=Ry),typeof window.IntersectionObserver>"u"&&r!==void 0){var o=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),function(){}}var i=Dy(n),l=i.id,a=i.observer,s=i.elements,u=s.get(e)||[];return s.has(e)||s.set(e,u),u.push(t),a.observe(e),function(){u.splice(u.indexOf(t),1),u.length===0&&(s.delete(e),a.unobserve(e)),s.size===0&&(a.disconnect(),Ja.delete(l))}}var Fy=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function tf(e){return typeof e.children!="function"}var nf=function(e){$y(t,e);function t(r){var o;return o=e.call(this,r)||this,o.node=null,o._unobserveCb=null,o.handleNode=function(i){o.node&&(o.unobserve(),!i&&!o.props.triggerOnce&&!o.props.skip&&o.setState({inView:!!o.props.initialInView,entry:void 0})),o.node=i||null,o.observeNode()},o.handleChange=function(i,l){i&&o.props.triggerOnce&&o.unobserve(),tf(o.props)||o.setState({inView:i,entry:l}),o.props.onChange&&o.props.onChange(i,l)},o.state={inView:!!r.initialInView,entry:void 0},o}var n=t.prototype;return n.componentDidUpdate=function(o){(o.rootMargin!==this.props.rootMargin||o.root!==this.props.root||o.threshold!==this.props.threshold||o.skip!==this.props.skip||o.trackVisibility!==this.props.trackVisibility||o.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},n.componentWillUnmount=function(){this.unobserve(),this.node=null},n.observeNode=function(){if(!(!this.node||this.props.skip)){var o=this.props,i=o.threshold,l=o.root,a=o.rootMargin,s=o.trackVisibility,u=o.delay,d=o.fallbackInView;this._unobserveCb=r0(this.node,this.handleChange,{threshold:i,root:l,rootMargin:a,trackVisibility:s,delay:u},d)}},n.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},n.render=function(){if(!tf(this.props)){var o=this.state,i=o.inView,l=o.entry;return this.props.children({inView:i,entry:l,ref:this.handleNode})}var a=this.props,s=a.children,u=a.as,d=Ly(a,Fy);return z.createElement(u||"div",qa({ref:this.handleNode},d),s)},t}(z.Component);function o0(e){var t,n=e===void 0?{}:e,r=n.threshold,o=n.delay,i=n.trackVisibility,l=n.rootMargin,a=n.root,s=n.triggerOnce,u=n.skip,d=n.initialInView,p=n.fallbackInView,h=n.onChange,g=z.useState(null),w=g[0],y=g[1],P=z.useRef(),f=z.useState({inView:!!d,entry:void 0}),c=f[0],m=f[1];P.current=h,z.useEffect(function(){if(!(u||!w)){var S;return S=r0(w,function(_,T){m({inView:_,entry:T}),P.current&&P.current(_,T),T.isIntersecting&&s&&S&&(S(),S=void 0)},{root:a,rootMargin:l,threshold:r,trackVisibility:i,delay:o},p),function(){S&&S()}}},[Array.isArray(r)?r.toString():r,w,a,l,s,u,i,p,o]);var v=(t=c.entry)==null?void 0:t.target;z.useEffect(function(){!w&&v&&!s&&!u&&m({inView:!!d,entry:void 0})},[w,v,s,u,d]);var E=[y,c.inView,c.entry];return E.ref=E[0],E.inView=E[1],E.entry=E[2],E}var es={},Hy={get exports(){return es},set exports(e){es=e}},V={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pu=Symbol.for("react.element"),mu=Symbol.for("react.portal"),el=Symbol.for("react.fragment"),tl=Symbol.for("react.strict_mode"),nl=Symbol.for("react.profiler"),rl=Symbol.for("react.provider"),ol=Symbol.for("react.context"),Ay=Symbol.for("react.server_context"),il=Symbol.for("react.forward_ref"),ll=Symbol.for("react.suspense"),al=Symbol.for("react.suspense_list"),sl=Symbol.for("react.memo"),ul=Symbol.for("react.lazy"),Vy=Symbol.for("react.offscreen"),i0;i0=Symbol.for("react.module.reference");function Ke(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case pu:switch(e=e.type,e){case el:case nl:case tl:case ll:case al:return e;default:switch(e=e&&e.$$typeof,e){case Ay:case ol:case il:case ul:case sl:case rl:return e;default:return t}}case mu:return t}}}V.ContextConsumer=ol;V.ContextProvider=rl;V.Element=pu;V.ForwardRef=il;V.Fragment=el;V.Lazy=ul;V.Memo=sl;V.Portal=mu;V.Profiler=nl;V.StrictMode=tl;V.Suspense=ll;V.SuspenseList=al;V.isAsyncMode=function(){return!1};V.isConcurrentMode=function(){return!1};V.isContextConsumer=function(e){return Ke(e)===ol};V.isContextProvider=function(e){return Ke(e)===rl};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===pu};V.isForwardRef=function(e){return Ke(e)===il};V.isFragment=function(e){return Ke(e)===el};V.isLazy=function(e){return Ke(e)===ul};V.isMemo=function(e){return Ke(e)===sl};V.isPortal=function(e){return Ke(e)===mu};V.isProfiler=function(e){return Ke(e)===nl};V.isStrictMode=function(e){return Ke(e)===tl};V.isSuspense=function(e){return Ke(e)===ll};V.isSuspenseList=function(e){return Ke(e)===al};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===el||e===nl||e===tl||e===ll||e===al||e===Vy||typeof e=="object"&&e!==null&&(e.$$typeof===ul||e.$$typeof===sl||e.$$typeof===rl||e.$$typeof===ol||e.$$typeof===il||e.$$typeof===i0||e.getModuleId!==void 0)};V.typeOf=Ke;(function(e){e.exports=V})(Hy);var By=R0;function se(e,t,n){return du.call(t,"css")?k(Ty,Py(e,t),n):k(e,t,n)}C`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;C`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;C`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;C`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;C`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;C`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;C`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;C`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;C`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;C`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;C`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;C`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;var Uy=C`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Wy=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Qy=C`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Yy=C`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,by=C`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,hu=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Xy=C`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ky=C`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Gy=C`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,qy=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Zy=C`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Jy=C`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e2=C`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function t2({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=hu,iterationCount:o=1}){return qn`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};
  `}function n2(e){return e==null}function r2(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}var yi=qn`
  opacity: 0;
`,o2=qn`
  display: inline-block;
  white-space: pre;
`,l0=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:l=hu,triggerOnce:a=!1,css:s,className:u,style:d,childClassName:p,childStyle:h,children:g,onVisibilityChange:w}=e,y=z.useMemo(()=>t2({keyframes:l,duration:o}),[o,l]);return n2(g)?null:r2(g)?se(i2,{...e,animationStyles:y,children:String(g)}):es.isFragment(g)?se(a0,{...e,animationStyles:y}):se(By,{children:z.Children.map(g,(P,f)=>{if(!z.isValidElement(P))return null;const c=[s,y],m=r+(t?f*o*n:0);switch(P.type){case"ol":case"ul":return se(Yl,{children:({cx:v})=>se(P.type,{...P.props,className:v(u,P.props.className),style:{...d,...P.props.style},children:se(l0,{...e,children:P.props.children})})});case"li":return se(nf,{threshold:i,triggerOnce:a,onChange:w,children:({inView:v,ref:E})=>se(Yl,{children:({cx:S})=>se(P.type,{...P.props,ref:E,className:S(p,P.props.className),css:v?c:yi,style:{...h,...P.props.style,animationDelay:m+"ms"}})})});default:return se(nf,{threshold:i,triggerOnce:a,onChange:w,children:({inView:v,ref:E})=>se("div",{ref:E,className:u,css:v?c:yi,style:{...d,animationDelay:m+"ms"},children:se(Yl,{children:({cx:S})=>se(P.type,{...P.props,className:S(p,P.props.className),style:{...h,...P.props.style}})})})})}})})},i2=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:l=0,triggerOnce:a=!1,css:s,className:u,style:d,children:p,onVisibilityChange:h}=e,{ref:g,inView:w}=o0({triggerOnce:a,threshold:l,onChange:h});return n?se("div",{ref:g,className:u,css:[s,o2],style:d,children:p.split("").map((y,P)=>se("span",{css:w?t:yi,style:{animationDelay:o+P*i*r+"ms"},children:y},P))}):se(a0,{...e,children:p})},a0=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,css:o,className:i,style:l,children:a,onVisibilityChange:s}=e,{ref:u,inView:d}=o0({triggerOnce:r,threshold:n,onChange:s});return se("div",{ref:u,className:i,css:d?[o,t]:yi,style:l,children:a})};C`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;C`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;C`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;C`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;C`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;var l2=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,a2=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,s2=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,u2=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,c2=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,f2=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,d2=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,p2=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,m2=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,h2=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,v2=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,g2=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,y2=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function w2(e,t,n){switch(n){case"bottom-left":return t?a2:Wy;case"bottom-right":return t?s2:Qy;case"down":return e?t?c2:by:t?u2:Yy;case"left":return e?t?d2:Xy:t?f2:hu;case"right":return e?t?m2:Gy:t?p2:Ky;case"top-left":return t?h2:qy;case"top-right":return t?v2:Zy;case"up":return e?t?y2:e2:t?g2:Jy;default:return t?l2:Uy}}var jn=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=z.useMemo(()=>w2(t,r,n),[t,n,r]);return se(l0,{keyframes:i,...o})};C`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;C`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;C`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;C`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;C`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;qn`
  backface-visibility: visible;
`;C`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;C`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;qn`
  transform-origin: top left;
`;C`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;C`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const S2="_about_acbi0_1",_2="_container_acbi0_8",k2="_section_acbi0_17",E2="_figure_acbi0_52",x2="_imagen_acbi0_61",bl={about:S2,container:_2,section:k2,figure:E2,imagen:x2},C2={title:"Sobre mí",subtitle:"Información sobre mi",job:"Soy Desarrollador Full Stack",comment:"En formación, licenciado en Administración de Empresas",me:"Soy un desarrollador Full Stack, con experiencia en desarrollo de aplicaciones web y móviles. Me gusta aprender nuevas tecnologías y frameworks para el desarrollo de aplicaciones. Me encanta trabajar en equipo y estar en constante aprendizaje.",salute:"Hola, mi nombre es Luis Reynaldo Pérez, soy nicaragüense, tengo actualmente ",age:"1995/09/24",resume:"años. Soy desarrollador FullStack Javascript, con enfasis en el desarrollo Front End mediante React.",goals:"En el 2020 estuve cursando una maestria en el INCAE, pero por motivos ajenos a mi voluntad, me vi obligado a supender los estudios, asi que me dedique a laborar en areas administrativas e ir mejorando mis conocimientos sobre analisis de datos y reanudando tambien mis estudios en desarrollo web."},P2={title:"Sobre mí",subtitle:"Información sobre mi",job:"Soy Desarrollador Full Stack",comment:"En formación, licenciado en Administración de Empresas",salute:"Hola, mi nombre es Luis Reynaldo Pérez, nicaragüense, tengo actualmente ",age:"1995/09/24",resume:"años. Soy desarrollador FullStack Javascript, con enfasis en el desarrollo front end de aplicaciones web y mobiles mediante React, me considero una persona con muchas capacidades para el desarrollo, aprendo rapidamente, siempre me enfoco en el cumplimiento de metas y me gusta trabajar en equipos.",goals:"Desde el 2017 inicie programando aplicaciones utilizando VBA de Excel, con el cual logre diseñar diversos sistemas de venta e inventario, nomina y contabilidad para algunas pequeñas y medianas empresas, mi perfil es multidisciplinario debido a que he cursado diversos programas de estudio en areas Administrativas.",me:"Actualmente me dedico al desarrollo de aplicaciones utilizando diversos lenguajes, frameworks y librerias como Typescript, Expo, Next, React, Graphql y más..."},O2={es:C2,en:P2};function T2(e){let t=new Date,n=new Date(e),r=t.getFullYear()-n.getFullYear(),o=t.getMonth()-n.getMonth();return(o<0||o===0&&t.getDate()<n.getDate())&&r--,r}function N2(){const{language:e}=z.useContext(mn),t=O2[e];return k("section",{id:"about",className:bl.about,children:k("div",{className:bl.container,children:F("div",{className:bl.section,children:[k(jn,{triggerOnce:!0,children:k("h2",{children:t.title})}),F(jn,{triggerOnce:!0,children:[F("p",{children:[t.salute," ",T2(t.age)," ",t.resume]}),k("p",{children:t.goals})]})]})})})}const z2="_contact_5hl4c_1",M2="_content_5hl4c_21",$2="_title_5hl4c_33",L2="_section_5hl4c_77",R2="_container_5hl4c_103",I2="_info_5hl4c_117",j2="_group_5hl4c_133",D2="_tag_5hl4c_163",F2="_element_5hl4c_199",H2="_form_5hl4c_241",A2="_data_5hl4c_257",Be={contact:z2,content:M2,title:$2,section:L2,container:R2,info:I2,group:j2,tag:D2,element:F2,form:H2,data:A2},Ur={_origin:"https://api.emailjs.com"},V2=(e,t="https://api.emailjs.com")=>{Ur._userID=e,Ur._origin=t},s0=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class rf{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const u0=(e,t,n={})=>new Promise((r,o)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:l})=>{const a=new rf(l);a.status===200||a.text==="OK"?r(a):o(a)}),i.addEventListener("error",({target:l})=>{o(new rf(l))}),i.open("POST",Ur._origin+e,!0),Object.keys(n).forEach(l=>{i.setRequestHeader(l,n[l])}),i.send(t)}),B2=(e,t,n,r)=>{const o=r||Ur._userID;s0(o,e,t);const i={lib_version:"3.10.0",user_id:o,service_id:e,template_id:t,template_params:n};return u0("/api/v1.0/email/send",JSON.stringify(i),{"Content-type":"application/json"})},U2=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},W2=(e,t,n,r)=>{const o=r||Ur._userID,i=U2(n);s0(o,e,t);const l=new FormData(i);return l.append("lib_version","3.10.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",o),u0("/api/v1.0/email/send-form",l)},Q2={init:V2,send:B2,sendForm:W2};function Y2(e){return ve({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"}},{tag:"path",attr:{d:"M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"}}]})(e)}function b2(e){return ve({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"}},{tag:"path",attr:{d:"M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"}}]})(e)}function X2(e){return ve({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"}},{tag:"path",attr:{d:"M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"}}]})(e)}const K2={contact:"Nombre",email:"Correo",issue:"Asunto",message:"Mensaje",submit:"Enviar"},G2={contact:"Name",email:"email",issue:"Issue",message:"Message",submit:"Send"},q2={en:K2,es:G2},Z2=[[k(b2,{},"map"),"Ciudad: ","Chinandega, Nicaragua"],[k(X2,{},"phone"),"Teléfono: ","+ 505 8458-4479"],[k(Y2,{},"email"),"Email: ","luisreynaldo.pch@gmail.com"]];function J2(){const{language:e}=z.useContext(mn),t=q2[e],[n,r]=z.useState(""),[o,i]=z.useState(""),[l,a]=z.useState(""),[s,u]=z.useState(""),d=p=>{p.preventDefault();const h={name:n,email:o,issue:l,message:s};Q2.send("service_portfolio","template_portfolio",h,"cLLFrT38MYC7J_zBS").then(g=>{console.log(g.text)},g=>{console.log(g.text)}),r(""),i(""),a(""),u("")};return k("section",{id:"contact",className:Be.contact,children:F("div",{className:Be.content,children:[k(jn,{children:k("h2",{className:Be.title,children:"Contacto"})}),F("div",{className:Be.container,children:[k(jn,{children:F("div",{className:Be.info,children:[k("h3",{children:"Información de Contacto"}),k("div",{className:Be.group,children:Z2.map((p,h)=>F("div",{className:Be.tag,children:[k("i",{children:p[0]}),F("div",{className:Be.element,children:[k("h4",{children:p[1]}),k("p",{children:p[2]})]})]},h))})]})}),k(jn,{children:F("div",{className:Be.section,children:[k("h3",{children:"¡Envía un mensaje!"}),F("form",{onSubmit:d,className:Be.form,autoComplete:"off",children:[F("fieldset",{className:Be.data,children:[k("label",{htmlFor:"name",children:t.contact}),k("input",{id:"name",type:"text",required:!0,value:n,onChange:({target:p})=>r(p.value)}),k("label",{htmlFor:"email",children:t.email}),k("input",{id:"email",type:"text",required:!0,value:o,onChange:({target:p})=>i(p.value)}),k("label",{htmlFor:"issue",children:t.issue}),k("input",{id:"issue",type:"text",required:!0,value:l,onChange:({target:p})=>a(p.value)})]}),F("fieldset",{className:Be.data,children:[k("label",{htmlFor:"message",children:t.message}),k("textarea",{id:"message",required:!0,value:s,onChange:({target:p})=>u(p.value)}),k("button",{children:t.submit})]})]})]})})]})]})})}const e3={hi:"Hola,",name:"Soy Luis Reynaldo",job:"Desarollador Javascript",contact:"Contactame"},t3={hi:"Hello,",name:"I´m Luis Reynaldo",job:"Javascript Developer",contact:"Send Message"},n3={es:e3,en:t3},r3="_home_13qzw_1",o3="_container_13qzw_9",of={home:r3,container:o3};function i3(){const{language:e}=z.useContext(mn),t=n3[e];return k("section",{id:"home",className:of.home,children:F("div",{className:of.container,children:[F("h1",{children:[t.hi," ",k("br",{}),t.name]}),k("h3",{children:t.job})]})})}function l3(e){return ve({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"circle",attr:{fill:"#2196F3",cx:"24",cy:"24",r:"21"}},{tag:"rect",attr:{x:"22",y:"22",fill:"#fff",width:"4",height:"11"}},{tag:"circle",attr:{fill:"#fff",cx:"24",cy:"16.5",r:"2.5"}}]})(e)}function a3(e){return ve({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"g",attr:{fill:"#1976D2"},child:[{tag:"path",attr:{d:"M38,13h-3c-5.5,0-10,4.5-10,10s4.5,10,10,10h3c5.5,0,10-4.5,10-10S43.5,13,38,13z M38,29h-3 c-3.3,0-6-2.7-6-6s2.7-6,6-6h3c3.3,0,6,2.7,6,6S41.3,29,38,29z"}},{tag:"path",attr:{d:"M13,13h-3C4.5,13,0,17.5,0,23s4.5,10,10,10h3c5.5,0,10-4.5,10-10S18.5,13,13,13z M13,29h-3 c-3.3,0-6-2.7-6-6s2.7-6,6-6h3c3.3,0,6,2.7,6,6S16.3,29,13,29z"}}]},{tag:"path",attr:{fill:"#42A5F5",d:"M33,21H15c-1.1,0-2,0.9-2,2s0.9,2,2,2h18c1.1,0,2-0.9,2-2S34.1,21,33,21z"}}]})(e)}const s3="_portfolio_fd0fq_1",u3="_section_fd0fq_17",c3="_title_fd0fq_27",f3="_container_fd0fq_73",d3="_item_fd0fq_91",p3="_links_fd0fq_121",m3="_image_fd0fq_131",h3="_text_fd0fq_207",ot={portfolio:s3,section:u3,title:c3,container:f3,item:d3,links:p3,image:m3,text:h3},v3=[["React Calendar","Calendar","https://react-calendar-luichix.vercel.app/","Proyecto de calendario semanal y mensual que permita manejar recordatorios..."],["Quesos El Rey","Quesos","https://quesoselrey.com/","Bueno, esta es una página simple, con una aspiración de convertirse en una valiosa tienda en línea. Espero más adelante seguir ampliando esas funcionalidades."],["Elina Closet","Elina","https://hidden-reaches-57430.herokuapp.com/","Esta ya tiene material para ser una tienda online, pero no tiene su carrito de compra. Aunque si se pueden administrar los productos."],["Amazon Clone","Amazon","https://challenge-1c21a.web.app/","El primer proyecto de práctica, tiene muchos errores y no está completo. Todavía prodria mejorar algunas cosas."],["Barbershop","Barbershop","https://luichix.github.io/barbershop/","Aquí estuve practicando diseño y estructura, no tendrá nada programado pero sí cumplió su papel de práctica en su momento."],["Portafolio","Portafolio","https://luichix.github.io/portafolio/","Creo que las nuevas configuraciones que hice son geniales, tiene un diseño muy limpio y mantenible. Me tomé mi tiempo poniendo el color a algunos íconos jeje."],["Nomina Vba","App1","https://drive.google.com/file/d/1n9U5PGCsZQkikT7oYOOcLjcVKs2Sk1Ok/view?usp=sharing","Esto de aquí, lo agregué porque sí, también es algo genial. Si lo deseas, envíame un mensaje en el siguiente formulario y te lo enviaré a tu correo."],["Go-Digit","GoDigit","https://godigit-app.firebaseapp.com/","Aun estamos trabajando en esto"],["Nomina","Nomina","https://nomina-80522.web.app/","Posiblemente me tomara bastante tiempo"],["Storybook","Storybook","https://luichix.github.io/portafolio/","Dejo esto por aca"],["Sforza","Sforza","https://sforza-web-luichix.vercel.app/","Una pequeña pagina para colegios."],["Chat","Chat","https://luichix.github.io/portafolio/","Aplicación de chat creada con React Native"]],g3=[["React Calendar","Calendar","https://react-calendar-luichix.vercel.app/","Proyecto de calendario semanal y mensual que permita manejar recordatorios..."],["Quesos El Rey","Quesos","https://quesoselrey.com/","Bueno, esta es una página simple, con una aspiración de convertirse en una valiosa tienda en línea. Espero más adelante seguir ampliando esas funcionalidades."],["Elina Closet","Elina","https://hidden-reaches-57430.herokuapp.com/","Esta ya tiene material para ser una tienda online, pero no tiene su carrito de compra. Aunque si se pueden administrar los productos."],["Amazon Clone","Amazon","https://challenge-1c21a.web.app/","El primer proyecto de práctica, tiene muchos errores y no está completo. Todavía prodria mejorar algunas cosas."],["Barbershop","Barbershop","https://luichix.github.io/barbershop/","Aquí estuve practicando diseño y estructura, no tendrá nada programado pero sí cumplió su papel de práctica en su momento."],["Portafolio","Portafolio","https://luichix.github.io/portafolio/","Creo que las nuevas configuraciones que hice son geniales, tiene un diseño muy limpio y mantenible. Me tomé mi tiempo poniendo el color a algunos íconos jeje."],["Nomina Vba","App1","https://drive.google.com/file/d/1n9U5PGCsZQkikT7oYOOcLjcVKs2Sk1Ok/view?usp=sharing","Esto de aquí, lo agregué porque sí, también es algo genial. Si lo deseas, envíame un mensaje en el siguiente formulario y te lo enviaré a tu correo."],["Go-Digit","GoDigit","https://godigit-app.firebaseapp.com/","Aun estamos trabajando en esto"],["Nomina","Nomina","https://nomina-80522.web.app/","Posiblemente me tomara bastante tiempo"],["Storybook","Storybook","https://luichix.github.io/portafolio/","Dejo esto por aca"],["Sforza","Sforza","https://sforza-web-luichix.vercel.app/","Una pequeña pagina para colegios."],["Chat","Chat","https://luichix.github.io/portafolio/","Aplicación de chat creada con React Native"]],y3={es:v3,en:g3},w3="/portafolio/assets/app1-0a0dee6f.png",S3="/portafolio/assets/quesos-38551977.png",_3="/portafolio/assets/elina-60cf9378.png",k3="/portafolio/assets/amazon-91e434ce.png",E3="/portafolio/assets/barbershop-ef1bd7aa.png",x3="/portafolio/assets/portafolio-30ca9d42.png",C3="/portafolio/assets/godigit-9246725b.png",P3="/portafolio/assets/nomina-c9171cae.png",O3="_modal_1xn36_1",T3="_off_1xn36_27",N3="_content_1xn36_35",z3="_close_1xn36_63",M3="_title_1xn36_101",$3="_text_1xn36_117",L3="_link_1xn36_135",Xl={modal:O3,off:T3,content:N3,close:z3,title:M3,text:$3,link:L3},R3=z.forwardRef(function({children:t,onClose:n},r){const o=l=>l.stopPropagation(),i=document.getElementById("portal");return Ks.createPortal(k("article",{className:Xl.modal,onClick:n,ref:r,children:F("div",{className:Xl.content,onClick:o,children:[k("button",{className:Xl.close,onClick:n,children:"×"}),t]})}),i)}),I3="/portafolio/assets/sforza-c46e0109.png",j3="/portafolio/assets/storybook-734489ff.png",D3="/portafolio/assets/calendar-5e663bea.png",F3="/portafolio/assets/chat-329f09e3.jpg",H3={App1:w3,Quesos:S3,Elina:_3,Amazon:k3,Barbershop:E3,Portafolio:x3,GoDigit:C3,Nomina:P3,Sforza:I3,Storybook:j3,Calendar:D3,Chat:F3};function A3(){const{language:e}=z.useContext(mn),t=y3[e],[n,r]=z.useState(""),o=z.useRef(null),i=a=>{o!=null&&o.current&&(o.current.style.display="flex"),r(a)},l=a=>{a.preventDefault(),o!=null&&o.current&&(o.current.style.display="none")};return F("section",{id:"portfolio",className:ot.portfolio,children:[F(R3,{onClose:l,ref:o,children:[k("h4",{className:ot.title,children:n[0]}),k("p",{className:ot.text,children:n[3]}),k("a",{className:ot.link,href:n[2],target:"_blank",rel:"noreferrer",children:"Ver Mas"})]}),F("div",{className:ot.section,children:[k("h2",{className:ot.title,children:"Portafolio"}),k("div",{className:ot.container,children:k(jn,{children:t.map((a,s)=>F("div",{className:ot.item,children:[k("h4",{children:a[0]}),k("img",{src:H3[a[1]],className:ot.image,alt:a[0]}),F("div",{className:ot.links,children:[k("a",{onClick:()=>i(a),children:k("i",{children:k(l3,{})})}),k("a",{href:a[2],target:"_blank",rel:"noreferrer",children:k("i",{children:k(a3,{})})})]})]},s))})})]})]})}const V3="_container_1eugv_5",B3="_section_1eugv_17",U3="_main_1eugv_27",Kl={container:V3,section:B3,main:U3};function W3(){return k("div",{className:Kl.container,children:F("div",{className:Kl.section,children:[k($g,{}),F("main",{id:"main",className:Kl.main,children:[k(i3,{}),k(N2,{}),k(A3,{}),k(J2,{}),k(Q1,{})]})]})})}Gl.createRoot(document.getElementById("root")).render(k(yt.StrictMode,{children:k(V1,{children:k(Rg,{children:k(W3,{})})})}));
