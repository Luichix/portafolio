function m0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var lo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function cf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kr={},h0={get exports(){return kr},set exports(e){kr=e}},_i={},z={},v0={get exports(){return z},set exports(e){z=e}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qr=Symbol.for("react.element"),y0=Symbol.for("react.portal"),g0=Symbol.for("react.fragment"),w0=Symbol.for("react.strict_mode"),S0=Symbol.for("react.profiler"),_0=Symbol.for("react.provider"),k0=Symbol.for("react.context"),E0=Symbol.for("react.forward_ref"),x0=Symbol.for("react.suspense"),C0=Symbol.for("react.memo"),P0=Symbol.for("react.lazy"),Su=Symbol.iterator;function O0(e){return e===null||typeof e!="object"?null:(e=Su&&e[Su]||e["@@iterator"],typeof e=="function"?e:null)}var ff={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},df=Object.assign,pf={};function Yn(e,t,n){this.props=e,this.context=t,this.refs=pf,this.updater=n||ff}Yn.prototype.isReactComponent={};Yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mf(){}mf.prototype=Yn.prototype;function os(e,t,n){this.props=e,this.context=t,this.refs=pf,this.updater=n||ff}var is=os.prototype=new mf;is.constructor=os;df(is,Yn.prototype);is.isPureReactComponent=!0;var _u=Array.isArray,hf=Object.prototype.hasOwnProperty,ls={current:null},vf={key:!0,ref:!0,__self:!0,__source:!0};function yf(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)hf.call(t,r)&&!vf.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Qr,type:e,key:i,ref:l,props:o,_owner:ls.current}}function T0(e,t){return{$$typeof:Qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function as(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qr}function N0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ku=/\/+/g;function vl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?N0(""+e.key):t.toString(36)}function Mo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Qr:case y0:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+vl(l,0):r,_u(o)?(n="",e!=null&&(n=e.replace(ku,"$&/")+"/"),Mo(o,t,n,"",function(u){return u})):o!=null&&(as(o)&&(o=T0(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ku,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",_u(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+vl(i,a);l+=Mo(i,t,n,s,o)}else if(s=O0(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+vl(i,a++),l+=Mo(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ao(e,t,n){if(e==null)return e;var r=[],o=0;return Mo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function z0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Ro={transition:null},L0={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Ro,ReactCurrentOwner:ls};R.Children={map:ao,forEach:function(e,t,n){ao(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ao(e,function(){t++}),t},toArray:function(e){return ao(e,function(t){return t})||[]},only:function(e){if(!as(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=Yn;R.Fragment=g0;R.Profiler=S0;R.PureComponent=os;R.StrictMode=w0;R.Suspense=x0;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L0;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=df({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ls.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)hf.call(t,s)&&!vf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Qr,type:e.type,key:o,ref:i,props:r,_owner:l}};R.createContext=function(e){return e={$$typeof:k0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_0,_context:e},e.Consumer=e};R.createElement=yf;R.createFactory=function(e){var t=yf.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:E0,render:e}};R.isValidElement=as;R.lazy=function(e){return{$$typeof:P0,_payload:{_status:-1,_result:e},_init:z0}};R.memo=function(e,t){return{$$typeof:C0,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Ro.transition;Ro.transition={};try{e()}finally{Ro.transition=t}};R.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};R.useCallback=function(e,t){return xe.current.useCallback(e,t)};R.useContext=function(e){return xe.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};R.useEffect=function(e,t){return xe.current.useEffect(e,t)};R.useId=function(){return xe.current.useId()};R.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return xe.current.useMemo(e,t)};R.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};R.useRef=function(e){return xe.current.useRef(e)};R.useState=function(e){return xe.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return xe.current.useTransition()};R.version="18.2.0";(function(e){e.exports=R})(v0);const yt=cf(z),Eu=m0({__proto__:null,default:yt},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0=z,M0=Symbol.for("react.element"),R0=Symbol.for("react.fragment"),I0=Object.prototype.hasOwnProperty,j0=$0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D0={key:!0,ref:!0,__self:!0,__source:!0};function gf(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)I0.call(t,r)&&!D0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:M0,type:e,key:i,ref:l,props:o,_owner:j0.current}}_i.Fragment=R0;_i.jsx=gf;_i.jsxs=gf;(function(e){e.exports=_i})(h0);const F0=kr.Fragment,_=kr.jsx,I=kr.jsxs;var Jl={},Er={},H0={get exports(){return Er},set exports(e){Er=e}},He={},ea={},A0={get exports(){return ea},set exports(e){ea=e}},wf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,L){var M=N.length;N.push(L);e:for(;0<M;){var te=M-1>>>1,ae=N[te];if(0<o(ae,L))N[te]=L,N[M]=ae,M=te;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var L=N[0],M=N.pop();if(M!==L){N[0]=M;e:for(var te=0,ae=N.length,oo=ae>>>1;te<oo;){var Kt=2*(te+1)-1,hl=N[Kt],Gt=Kt+1,io=N[Gt];if(0>o(hl,M))Gt<ae&&0>o(io,hl)?(N[te]=io,N[Gt]=M,te=Gt):(N[te]=hl,N[Kt]=M,te=Kt);else if(Gt<ae&&0>o(io,M))N[te]=io,N[Gt]=M,te=Gt;else break e}}return L}function o(N,L){var M=N.sortIndex-L.sortIndex;return M!==0?M:N.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],d=1,p=null,h=3,y=!1,w=!1,g=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=N)r(u),L.sortIndex=L.expirationTime,t(s,L);else break;L=n(u)}}function v(N){if(g=!1,m(N),!w)if(n(s)!==null)w=!0,pl(E);else{var L=n(u);L!==null&&ml(v,L.startTime-N)}}function E(N,L){w=!1,g&&(g=!1,f(T),T=-1),y=!0;var M=h;try{for(m(L),p=n(s);p!==null&&(!(p.expirationTime>L)||N&&!Pe());){var te=p.callback;if(typeof te=="function"){p.callback=null,h=p.priorityLevel;var ae=te(p.expirationTime<=L);L=e.unstable_now(),typeof ae=="function"?p.callback=ae:p===n(s)&&r(s),m(L)}else r(s);p=n(s)}if(p!==null)var oo=!0;else{var Kt=n(u);Kt!==null&&ml(v,Kt.startTime-L),oo=!1}return oo}finally{p=null,h=M,y=!1}}var S=!1,k=null,T=-1,B=5,$=-1;function Pe(){return!(e.unstable_now()-$<B)}function xt(){if(k!==null){var N=e.unstable_now();$=N;var L=!0;try{L=k(!0,N)}finally{L?Xt():(S=!1,k=null)}}else S=!1}var Xt;if(typeof c=="function")Xt=function(){c(xt)};else if(typeof MessageChannel<"u"){var Jn=new MessageChannel,dl=Jn.port2;Jn.port1.onmessage=xt,Xt=function(){dl.postMessage(null)}}else Xt=function(){P(xt,0)};function pl(N){k=N,S||(S=!0,Xt())}function ml(N,L){T=P(function(){N(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,pl(E))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var M=h;h=L;try{return N()}finally{h=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,L){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var M=h;h=N;try{return L()}finally{h=M}},e.unstable_scheduleCallback=function(N,L,M){var te=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?te+M:te):M=te,N){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=M+ae,N={id:d++,callback:L,priorityLevel:N,startTime:M,expirationTime:ae,sortIndex:-1},M>te?(N.sortIndex=M,t(u,N),n(s)===null&&N===n(u)&&(g?(f(T),T=-1):g=!0,ml(v,M-te))):(N.sortIndex=ae,t(s,N),w||y||(w=!0,pl(E))),N},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(N){var L=h;return function(){var M=h;h=L;try{return N.apply(this,arguments)}finally{h=M}}}})(wf);(function(e){e.exports=wf})(A0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf=z,Fe=ea;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _f=new Set,xr={};function dn(e,t){Fn(e,t),Fn(e+"Capture",t)}function Fn(e,t){for(xr[e]=t,e=0;e<t.length;e++)_f.add(t[e])}var wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ta=Object.prototype.hasOwnProperty,V0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xu={},Cu={};function B0(e){return ta.call(Cu,e)?!0:ta.call(xu,e)?!1:V0.test(e)?Cu[e]=!0:(xu[e]=!0,!1)}function U0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function W0(e,t,n,r){if(t===null||typeof t>"u"||U0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ve[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var ss=/[\-:]([a-z])/g;function us(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ss,us);ve[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ss,us);ve[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ss,us);ve[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function cs(e,t,n,r){var o=ve.hasOwnProperty(t)?ve[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(W0(t,n,o,r)&&(n=null),r||o===null?B0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Et=Sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,so=Symbol.for("react.element"),yn=Symbol.for("react.portal"),gn=Symbol.for("react.fragment"),fs=Symbol.for("react.strict_mode"),na=Symbol.for("react.profiler"),kf=Symbol.for("react.provider"),Ef=Symbol.for("react.context"),ds=Symbol.for("react.forward_ref"),ra=Symbol.for("react.suspense"),oa=Symbol.for("react.suspense_list"),ps=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),xf=Symbol.for("react.offscreen"),Pu=Symbol.iterator;function er(e){return e===null||typeof e!="object"?null:(e=Pu&&e[Pu]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,yl;function ur(e){if(yl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);yl=t&&t[1]||""}return`
`+yl+e}var gl=!1;function wl(e,t){if(!e||gl)return"";gl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{gl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ur(e):""}function Q0(e){switch(e.tag){case 5:return ur(e.type);case 16:return ur("Lazy");case 13:return ur("Suspense");case 19:return ur("SuspenseList");case 0:case 2:case 15:return e=wl(e.type,!1),e;case 11:return e=wl(e.type.render,!1),e;case 1:return e=wl(e.type,!0),e;default:return""}}function ia(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gn:return"Fragment";case yn:return"Portal";case na:return"Profiler";case fs:return"StrictMode";case ra:return"Suspense";case oa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ef:return(e.displayName||"Context")+".Consumer";case kf:return(e._context.displayName||"Context")+".Provider";case ds:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ps:return t=e.displayName||null,t!==null?t:ia(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return ia(e(t))}catch{}}return null}function b0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ia(t);case 8:return t===fs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ut(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Y0(e){var t=Cf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function uo(e){e._valueTracker||(e._valueTracker=Y0(e))}function Pf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Cf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function la(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ou(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ut(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Of(e,t){t=t.checked,t!=null&&cs(e,"checked",t,!1)}function aa(e,t){Of(e,t);var n=Ut(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?sa(e,t.type,n):t.hasOwnProperty("defaultValue")&&sa(e,t.type,Ut(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Tu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function sa(e,t,n){(t!=="number"||Xo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var cr=Array.isArray;function Nn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ua(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Nu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(cr(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ut(n)}}function Tf(e,t){var n=Ut(t.value),r=Ut(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Nf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ca(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Nf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var co,zf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(co=co||document.createElement("div"),co.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=co.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Cr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},X0=["Webkit","ms","Moz","O"];Object.keys(pr).forEach(function(e){X0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pr[t]=pr[e]})});function Lf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||pr.hasOwnProperty(e)&&pr[e]?(""+t).trim():t+"px"}function $f(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Lf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var K0=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fa(e,t){if(t){if(K0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function da(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pa=null;function ms(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ma=null,zn=null,Ln=null;function Lu(e){if(e=Xr(e)){if(typeof ma!="function")throw Error(x(280));var t=e.stateNode;t&&(t=Pi(t),ma(e.stateNode,e.type,t))}}function Mf(e){zn?Ln?Ln.push(e):Ln=[e]:zn=e}function Rf(){if(zn){var e=zn,t=Ln;if(Ln=zn=null,Lu(e),t)for(e=0;e<t.length;e++)Lu(t[e])}}function If(e,t){return e(t)}function jf(){}var Sl=!1;function Df(e,t,n){if(Sl)return e(t,n);Sl=!0;try{return If(e,t,n)}finally{Sl=!1,(zn!==null||Ln!==null)&&(jf(),Rf())}}function Pr(e,t){var n=e.stateNode;if(n===null)return null;var r=Pi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var ha=!1;if(wt)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){ha=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{ha=!1}function G0(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var mr=!1,Ko=null,Go=!1,va=null,q0={onError:function(e){mr=!0,Ko=e}};function Z0(e,t,n,r,o,i,l,a,s){mr=!1,Ko=null,G0.apply(q0,arguments)}function J0(e,t,n,r,o,i,l,a,s){if(Z0.apply(this,arguments),mr){if(mr){var u=Ko;mr=!1,Ko=null}else throw Error(x(198));Go||(Go=!0,va=u)}}function pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ff(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $u(e){if(pn(e)!==e)throw Error(x(188))}function e1(e){var t=e.alternate;if(!t){if(t=pn(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return $u(o),e;if(i===r)return $u(o),t;i=i.sibling}throw Error(x(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function Hf(e){return e=e1(e),e!==null?Af(e):null}function Af(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Af(e);if(t!==null)return t;e=e.sibling}return null}var Vf=Fe.unstable_scheduleCallback,Mu=Fe.unstable_cancelCallback,t1=Fe.unstable_shouldYield,n1=Fe.unstable_requestPaint,ne=Fe.unstable_now,r1=Fe.unstable_getCurrentPriorityLevel,hs=Fe.unstable_ImmediatePriority,Bf=Fe.unstable_UserBlockingPriority,qo=Fe.unstable_NormalPriority,o1=Fe.unstable_LowPriority,Uf=Fe.unstable_IdlePriority,ki=null,ut=null;function i1(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(ki,e,void 0,(e.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:s1,l1=Math.log,a1=Math.LN2;function s1(e){return e>>>=0,e===0?32:31-(l1(e)/a1|0)|0}var fo=64,po=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=fr(a):(i&=l,i!==0&&(r=fr(i)))}else l=n&~o,l!==0?r=fr(l):i!==0&&(r=fr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-et(t),o=1<<n,r|=e[n],t&=~o;return r}function u1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function c1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-et(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=u1(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function ya(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wf(){var e=fo;return fo<<=1,!(fo&4194240)&&(fo=64),e}function _l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function br(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-et(t),e[t]=n}function f1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-et(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function vs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-et(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var H=0;function Qf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bf,ys,Yf,Xf,Kf,ga=!1,mo=[],Rt=null,It=null,jt=null,Or=new Map,Tr=new Map,zt=[],d1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ru(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":Or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tr.delete(t.pointerId)}}function nr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Xr(t),t!==null&&ys(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function p1(e,t,n,r,o){switch(t){case"focusin":return Rt=nr(Rt,e,t,n,r,o),!0;case"dragenter":return It=nr(It,e,t,n,r,o),!0;case"mouseover":return jt=nr(jt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Or.set(i,nr(Or.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Tr.set(i,nr(Tr.get(i)||null,e,t,n,r,o)),!0}return!1}function Gf(e){var t=tn(e.target);if(t!==null){var n=pn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ff(n),t!==null){e.blockedOn=t,Kf(e.priority,function(){Yf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Io(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);pa=r,n.target.dispatchEvent(r),pa=null}else return t=Xr(n),t!==null&&ys(t),e.blockedOn=n,!1;t.shift()}return!0}function Iu(e,t,n){Io(e)&&n.delete(t)}function m1(){ga=!1,Rt!==null&&Io(Rt)&&(Rt=null),It!==null&&Io(It)&&(It=null),jt!==null&&Io(jt)&&(jt=null),Or.forEach(Iu),Tr.forEach(Iu)}function rr(e,t){e.blockedOn===t&&(e.blockedOn=null,ga||(ga=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,m1)))}function Nr(e){function t(o){return rr(o,e)}if(0<mo.length){rr(mo[0],e);for(var n=1;n<mo.length;n++){var r=mo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&rr(Rt,e),It!==null&&rr(It,e),jt!==null&&rr(jt,e),Or.forEach(t),Tr.forEach(t),n=0;n<zt.length;n++)r=zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&(n=zt[0],n.blockedOn===null);)Gf(n),n.blockedOn===null&&zt.shift()}var $n=Et.ReactCurrentBatchConfig,Jo=!0;function h1(e,t,n,r){var o=H,i=$n.transition;$n.transition=null;try{H=1,gs(e,t,n,r)}finally{H=o,$n.transition=i}}function v1(e,t,n,r){var o=H,i=$n.transition;$n.transition=null;try{H=4,gs(e,t,n,r)}finally{H=o,$n.transition=i}}function gs(e,t,n,r){if(Jo){var o=wa(e,t,n,r);if(o===null)Ll(e,t,r,ei,n),Ru(e,r);else if(p1(o,e,t,n,r))r.stopPropagation();else if(Ru(e,r),t&4&&-1<d1.indexOf(e)){for(;o!==null;){var i=Xr(o);if(i!==null&&bf(i),i=wa(e,t,n,r),i===null&&Ll(e,t,r,ei,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ll(e,t,r,null,n)}}var ei=null;function wa(e,t,n,r){if(ei=null,e=ms(r),e=tn(e),e!==null)if(t=pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ff(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ei=e,null}function qf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(r1()){case hs:return 1;case Bf:return 4;case qo:case o1:return 16;case Uf:return 536870912;default:return 16}default:return 16}}var $t=null,ws=null,jo=null;function Zf(){if(jo)return jo;var e,t=ws,n=t.length,r,o="value"in $t?$t.value:$t.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return jo=o.slice(e,1<r?1-r:void 0)}function Do(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ho(){return!0}function ju(){return!1}function Ae(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ho:ju,this.isPropagationStopped=ju,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ho)},persist:function(){},isPersistent:ho}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ss=Ae(Xn),Yr=Z({},Xn,{view:0,detail:0}),y1=Ae(Yr),kl,El,or,Ei=Z({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_s,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(kl=e.screenX-or.screenX,El=e.screenY-or.screenY):El=kl=0,or=e),kl)},movementY:function(e){return"movementY"in e?e.movementY:El}}),Du=Ae(Ei),g1=Z({},Ei,{dataTransfer:0}),w1=Ae(g1),S1=Z({},Yr,{relatedTarget:0}),xl=Ae(S1),_1=Z({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),k1=Ae(_1),E1=Z({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),x1=Ae(E1),C1=Z({},Xn,{data:0}),Fu=Ae(C1),P1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=T1[e])?!!t[e]:!1}function _s(){return N1}var z1=Z({},Yr,{key:function(e){if(e.key){var t=P1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Do(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?O1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_s,charCode:function(e){return e.type==="keypress"?Do(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Do(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),L1=Ae(z1),$1=Z({},Ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hu=Ae($1),M1=Z({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_s}),R1=Ae(M1),I1=Z({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),j1=Ae(I1),D1=Z({},Ei,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),F1=Ae(D1),H1=[9,13,27,32],ks=wt&&"CompositionEvent"in window,hr=null;wt&&"documentMode"in document&&(hr=document.documentMode);var A1=wt&&"TextEvent"in window&&!hr,Jf=wt&&(!ks||hr&&8<hr&&11>=hr),Au=String.fromCharCode(32),Vu=!1;function ed(e,t){switch(e){case"keyup":return H1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function td(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wn=!1;function V1(e,t){switch(e){case"compositionend":return td(t);case"keypress":return t.which!==32?null:(Vu=!0,Au);case"textInput":return e=t.data,e===Au&&Vu?null:e;default:return null}}function B1(e,t){if(wn)return e==="compositionend"||!ks&&ed(e,t)?(e=Zf(),jo=ws=$t=null,wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jf&&t.locale!=="ko"?null:t.data;default:return null}}var U1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!U1[e.type]:t==="textarea"}function nd(e,t,n,r){Mf(r),t=ti(t,"onChange"),0<t.length&&(n=new Ss("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vr=null,zr=null;function W1(e){pd(e,0)}function xi(e){var t=kn(e);if(Pf(t))return e}function Q1(e,t){if(e==="change")return t}var rd=!1;if(wt){var Cl;if(wt){var Pl="oninput"in document;if(!Pl){var Uu=document.createElement("div");Uu.setAttribute("oninput","return;"),Pl=typeof Uu.oninput=="function"}Cl=Pl}else Cl=!1;rd=Cl&&(!document.documentMode||9<document.documentMode)}function Wu(){vr&&(vr.detachEvent("onpropertychange",od),zr=vr=null)}function od(e){if(e.propertyName==="value"&&xi(zr)){var t=[];nd(t,zr,e,ms(e)),Df(W1,t)}}function b1(e,t,n){e==="focusin"?(Wu(),vr=t,zr=n,vr.attachEvent("onpropertychange",od)):e==="focusout"&&Wu()}function Y1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xi(zr)}function X1(e,t){if(e==="click")return xi(t)}function K1(e,t){if(e==="input"||e==="change")return xi(t)}function G1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:G1;function Lr(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ta.call(t,o)||!nt(e[o],t[o]))return!1}return!0}function Qu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bu(e,t){var n=Qu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qu(n)}}function id(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?id(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ld(){for(var e=window,t=Xo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xo(e.document)}return t}function Es(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function q1(e){var t=ld(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&id(n.ownerDocument.documentElement,n)){if(r!==null&&Es(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=bu(n,i);var l=bu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Z1=wt&&"documentMode"in document&&11>=document.documentMode,Sn=null,Sa=null,yr=null,_a=!1;function Yu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_a||Sn==null||Sn!==Xo(r)||(r=Sn,"selectionStart"in r&&Es(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yr&&Lr(yr,r)||(yr=r,r=ti(Sa,"onSelect"),0<r.length&&(t=new Ss("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sn)))}function vo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _n={animationend:vo("Animation","AnimationEnd"),animationiteration:vo("Animation","AnimationIteration"),animationstart:vo("Animation","AnimationStart"),transitionend:vo("Transition","TransitionEnd")},Ol={},ad={};wt&&(ad=document.createElement("div").style,"AnimationEvent"in window||(delete _n.animationend.animation,delete _n.animationiteration.animation,delete _n.animationstart.animation),"TransitionEvent"in window||delete _n.transitionend.transition);function Ci(e){if(Ol[e])return Ol[e];if(!_n[e])return e;var t=_n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ad)return Ol[e]=t[n];return e}var sd=Ci("animationend"),ud=Ci("animationiteration"),cd=Ci("animationstart"),fd=Ci("transitionend"),dd=new Map,Xu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){dd.set(e,t),dn(t,[e])}for(var Tl=0;Tl<Xu.length;Tl++){var Nl=Xu[Tl],J1=Nl.toLowerCase(),em=Nl[0].toUpperCase()+Nl.slice(1);Qt(J1,"on"+em)}Qt(sd,"onAnimationEnd");Qt(ud,"onAnimationIteration");Qt(cd,"onAnimationStart");Qt("dblclick","onDoubleClick");Qt("focusin","onFocus");Qt("focusout","onBlur");Qt(fd,"onTransitionEnd");Fn("onMouseEnter",["mouseout","mouseover"]);Fn("onMouseLeave",["mouseout","mouseover"]);Fn("onPointerEnter",["pointerout","pointerover"]);Fn("onPointerLeave",["pointerout","pointerover"]);dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tm=new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));function Ku(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,J0(r,t,void 0,e),e.currentTarget=null}function pd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;Ku(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;Ku(o,a,u),i=s}}}if(Go)throw e=va,Go=!1,va=null,e}function W(e,t){var n=t[Pa];n===void 0&&(n=t[Pa]=new Set);var r=e+"__bubble";n.has(r)||(md(t,e,2,!1),n.add(r))}function zl(e,t,n){var r=0;t&&(r|=4),md(n,e,r,t)}var yo="_reactListening"+Math.random().toString(36).slice(2);function $r(e){if(!e[yo]){e[yo]=!0,_f.forEach(function(n){n!=="selectionchange"&&(tm.has(n)||zl(n,!1,e),zl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yo]||(t[yo]=!0,zl("selectionchange",!1,t))}}function md(e,t,n,r){switch(qf(t)){case 1:var o=h1;break;case 4:o=v1;break;default:o=gs}n=o.bind(null,t,n,e),o=void 0,!ha||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ll(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=tn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Df(function(){var u=i,d=ms(n),p=[];e:{var h=dd.get(e);if(h!==void 0){var y=Ss,w=e;switch(e){case"keypress":if(Do(n)===0)break e;case"keydown":case"keyup":y=L1;break;case"focusin":w="focus",y=xl;break;case"focusout":w="blur",y=xl;break;case"beforeblur":case"afterblur":y=xl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Du;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=w1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=R1;break;case sd:case ud:case cd:y=k1;break;case fd:y=j1;break;case"scroll":y=y1;break;case"wheel":y=F1;break;case"copy":case"cut":case"paste":y=x1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Hu}var g=(t&4)!==0,P=!g&&e==="scroll",f=g?h!==null?h+"Capture":null:h;g=[];for(var c=u,m;c!==null;){m=c;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,f!==null&&(v=Pr(c,f),v!=null&&g.push(Mr(c,v,m)))),P)break;c=c.return}0<g.length&&(h=new y(h,w,null,n,d),p.push({event:h,listeners:g}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==pa&&(w=n.relatedTarget||n.fromElement)&&(tn(w)||w[St]))break e;if((y||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?tn(w):null,w!==null&&(P=pn(w),w!==P||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(g=Du,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(g=Hu,v="onPointerLeave",f="onPointerEnter",c="pointer"),P=y==null?h:kn(y),m=w==null?h:kn(w),h=new g(v,c+"leave",y,n,d),h.target=P,h.relatedTarget=m,v=null,tn(d)===u&&(g=new g(f,c+"enter",w,n,d),g.target=m,g.relatedTarget=P,v=g),P=v,y&&w)t:{for(g=y,f=w,c=0,m=g;m;m=hn(m))c++;for(m=0,v=f;v;v=hn(v))m++;for(;0<c-m;)g=hn(g),c--;for(;0<m-c;)f=hn(f),m--;for(;c--;){if(g===f||f!==null&&g===f.alternate)break t;g=hn(g),f=hn(f)}g=null}else g=null;y!==null&&Gu(p,h,y,g,!1),w!==null&&P!==null&&Gu(p,P,w,g,!0)}}e:{if(h=u?kn(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var E=Q1;else if(Bu(h))if(rd)E=K1;else{E=Y1;var S=b1}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=X1);if(E&&(E=E(e,u))){nd(p,E,n,d);break e}S&&S(e,h,u),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&sa(h,"number",h.value)}switch(S=u?kn(u):window,e){case"focusin":(Bu(S)||S.contentEditable==="true")&&(Sn=S,Sa=u,yr=null);break;case"focusout":yr=Sa=Sn=null;break;case"mousedown":_a=!0;break;case"contextmenu":case"mouseup":case"dragend":_a=!1,Yu(p,n,d);break;case"selectionchange":if(Z1)break;case"keydown":case"keyup":Yu(p,n,d)}var k;if(ks)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else wn?ed(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Jf&&n.locale!=="ko"&&(wn||T!=="onCompositionStart"?T==="onCompositionEnd"&&wn&&(k=Zf()):($t=d,ws="value"in $t?$t.value:$t.textContent,wn=!0)),S=ti(u,T),0<S.length&&(T=new Fu(T,e,null,n,d),p.push({event:T,listeners:S}),k?T.data=k:(k=td(n),k!==null&&(T.data=k)))),(k=A1?V1(e,n):B1(e,n))&&(u=ti(u,"onBeforeInput"),0<u.length&&(d=new Fu("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=k))}pd(p,t)})}function Mr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ti(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Pr(e,n),i!=null&&r.unshift(Mr(e,i,o)),i=Pr(e,t),i!=null&&r.push(Mr(e,i,o))),e=e.return}return r}function hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=Pr(n,i),s!=null&&l.unshift(Mr(n,s,a))):o||(s=Pr(n,i),s!=null&&l.push(Mr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var nm=/\r\n?/g,rm=/\u0000|\uFFFD/g;function qu(e){return(typeof e=="string"?e:""+e).replace(nm,`
`).replace(rm,"")}function go(e,t,n){if(t=qu(t),qu(e)!==t&&n)throw Error(x(425))}function ni(){}var ka=null,Ea=null;function xa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ca=typeof setTimeout=="function"?setTimeout:void 0,om=typeof clearTimeout=="function"?clearTimeout:void 0,Zu=typeof Promise=="function"?Promise:void 0,im=typeof queueMicrotask=="function"?queueMicrotask:typeof Zu<"u"?function(e){return Zu.resolve(null).then(e).catch(lm)}:Ca;function lm(e){setTimeout(function(){throw e})}function $l(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Nr(t)}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kn=Math.random().toString(36).slice(2),st="__reactFiber$"+Kn,Rr="__reactProps$"+Kn,St="__reactContainer$"+Kn,Pa="__reactEvents$"+Kn,am="__reactListeners$"+Kn,sm="__reactHandles$"+Kn;function tn(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[St]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ju(e);e!==null;){if(n=e[st])return n;e=Ju(e)}return t}e=n,n=e.parentNode}return null}function Xr(e){return e=e[st]||e[St],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function Pi(e){return e[Rr]||null}var Oa=[],En=-1;function bt(e){return{current:e}}function Q(e){0>En||(e.current=Oa[En],Oa[En]=null,En--)}function U(e,t){En++,Oa[En]=e.current,e.current=t}var Wt={},_e=bt(Wt),Ne=bt(!1),an=Wt;function Hn(e,t){var n=e.type.contextTypes;if(!n)return Wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ze(e){return e=e.childContextTypes,e!=null}function ri(){Q(Ne),Q(_e)}function ec(e,t,n){if(_e.current!==Wt)throw Error(x(168));U(_e,t),U(Ne,n)}function hd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(x(108,b0(e)||"Unknown",o));return Z({},n,r)}function oi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wt,an=_e.current,U(_e,e),U(Ne,Ne.current),!0}function tc(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=hd(e,t,an),r.__reactInternalMemoizedMergedChildContext=e,Q(Ne),Q(_e),U(_e,e)):Q(Ne),U(Ne,n)}var mt=null,Oi=!1,Ml=!1;function vd(e){mt===null?mt=[e]:mt.push(e)}function um(e){Oi=!0,vd(e)}function Yt(){if(!Ml&&mt!==null){Ml=!0;var e=0,t=H;try{var n=mt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mt=null,Oi=!1}catch(o){throw mt!==null&&(mt=mt.slice(e+1)),Vf(hs,Yt),o}finally{H=t,Ml=!1}}return null}var xn=[],Cn=0,ii=null,li=0,Ue=[],We=0,sn=null,ht=1,vt="";function Jt(e,t){xn[Cn++]=li,xn[Cn++]=ii,ii=e,li=t}function yd(e,t,n){Ue[We++]=ht,Ue[We++]=vt,Ue[We++]=sn,sn=e;var r=ht;e=vt;var o=32-et(r)-1;r&=~(1<<o),n+=1;var i=32-et(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,ht=1<<32-et(t)+o|n<<o|r,vt=i+e}else ht=1<<i|n<<o|r,vt=e}function xs(e){e.return!==null&&(Jt(e,1),yd(e,1,0))}function Cs(e){for(;e===ii;)ii=xn[--Cn],xn[Cn]=null,li=xn[--Cn],xn[Cn]=null;for(;e===sn;)sn=Ue[--We],Ue[We]=null,vt=Ue[--We],Ue[We]=null,ht=Ue[--We],Ue[We]=null}var je=null,Ie=null,Y=!1,Je=null;function gd(e,t){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function nc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,Ie=Dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,Ie=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=sn!==null?{id:ht,overflow:vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,Ie=null,!0):!1;default:return!1}}function Ta(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Na(e){if(Y){var t=Ie;if(t){var n=t;if(!nc(e,t)){if(Ta(e))throw Error(x(418));t=Dt(n.nextSibling);var r=je;t&&nc(e,t)?gd(r,n):(e.flags=e.flags&-4097|2,Y=!1,je=e)}}else{if(Ta(e))throw Error(x(418));e.flags=e.flags&-4097|2,Y=!1,je=e}}}function rc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function wo(e){if(e!==je)return!1;if(!Y)return rc(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xa(e.type,e.memoizedProps)),t&&(t=Ie)){if(Ta(e))throw wd(),Error(x(418));for(;t;)gd(e,t),t=Dt(t.nextSibling)}if(rc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ie=Dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ie=null}}else Ie=je?Dt(e.stateNode.nextSibling):null;return!0}function wd(){for(var e=Ie;e;)e=Dt(e.nextSibling)}function An(){Ie=je=null,Y=!1}function Ps(e){Je===null?Je=[e]:Je.push(e)}var cm=Et.ReactCurrentBatchConfig;function qe(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ai=bt(null),si=null,Pn=null,Os=null;function Ts(){Os=Pn=si=null}function Ns(e){var t=ai.current;Q(ai),e._currentValue=t}function za(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mn(e,t){si=e,Os=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Te=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(Os!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(si===null)throw Error(x(308));Pn=e,si.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var nn=null;function zs(e){nn===null?nn=[e]:nn.push(e)}function Sd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,zs(t)):(n.next=o.next,o.next=n),t.interleaved=n,_t(e,r)}function _t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nt=!1;function Ls(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _d(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,_t(e,n)}return o=r.interleaved,o===null?(t.next=t,zs(r)):(t.next=o.next,o.next=t),r.interleaved=t,_t(e,n)}function Fo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vs(e,n)}}function oc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ui(e,t,n,r){var o=e.updateQueue;Nt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=s))}if(i!==null){var p=o.baseState;l=0,d=u=s=null,a=i;do{var h=a.lane,y=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,g=a;switch(h=t,y=n,g.tag){case 1:if(w=g.payload,typeof w=="function"){p=w.call(y,p,h);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=g.payload,h=typeof w=="function"?w.call(y,p,h):w,h==null)break e;p=Z({},p,h);break e;case 2:Nt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=y,s=p):d=d.next=y,l|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(d===null&&(s=p),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);cn|=l,e.lanes=l,e.memoizedState=p}}function ic(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(x(191,o));o.call(r)}}}var kd=new Sf.Component().refs;function La(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ti={isMounted:function(e){return(e=e._reactInternals)?pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ee(),o=At(e),i=gt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Ft(e,i,o),t!==null&&(tt(t,e,o,r),Fo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ee(),o=At(e),i=gt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ft(e,i,o),t!==null&&(tt(t,e,o,r),Fo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ee(),r=At(e),o=gt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ft(e,o,r),t!==null&&(tt(t,e,r,n),Fo(t,e,r))}};function lc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Lr(n,r)||!Lr(o,i):!0}function Ed(e,t,n){var r=!1,o=Wt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ye(i):(o=ze(t)?an:_e.current,r=t.contextTypes,i=(r=r!=null)?Hn(e,o):Wt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ti,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ac(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ti.enqueueReplaceState(t,t.state,null)}function $a(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=kd,Ls(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ye(i):(i=ze(t)?an:_e.current,o.context=Hn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(La(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ti.enqueueReplaceState(o,o.state,null),ui(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===kd&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function So(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sc(e){var t=e._init;return t(e._payload)}function xd(e){function t(f,c){if(e){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=Vt(f,c),f.index=0,f.sibling=null,f}function i(f,c,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=2,c):m):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,m,v){return c===null||c.tag!==6?(c=Al(m,f.mode,v),c.return=f,c):(c=o(c,m),c.return=f,c)}function s(f,c,m,v){var E=m.type;return E===gn?d(f,c,m.props.children,v,m.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Tt&&sc(E)===c.type)?(v=o(c,m.props),v.ref=ir(f,c,m),v.return=f,v):(v=Wo(m.type,m.key,m.props,null,f.mode,v),v.ref=ir(f,c,m),v.return=f,v)}function u(f,c,m,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=Vl(m,f.mode,v),c.return=f,c):(c=o(c,m.children||[]),c.return=f,c)}function d(f,c,m,v,E){return c===null||c.tag!==7?(c=ln(m,f.mode,v,E),c.return=f,c):(c=o(c,m),c.return=f,c)}function p(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Al(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case so:return m=Wo(c.type,c.key,c.props,null,f.mode,m),m.ref=ir(f,null,c),m.return=f,m;case yn:return c=Vl(c,f.mode,m),c.return=f,c;case Tt:var v=c._init;return p(f,v(c._payload),m)}if(cr(c)||er(c))return c=ln(c,f.mode,m,null),c.return=f,c;So(f,c)}return null}function h(f,c,m,v){var E=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:a(f,c,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case so:return m.key===E?s(f,c,m,v):null;case yn:return m.key===E?u(f,c,m,v):null;case Tt:return E=m._init,h(f,c,E(m._payload),v)}if(cr(m)||er(m))return E!==null?null:d(f,c,m,v,null);So(f,m)}return null}function y(f,c,m,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(m)||null,a(c,f,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case so:return f=f.get(v.key===null?m:v.key)||null,s(c,f,v,E);case yn:return f=f.get(v.key===null?m:v.key)||null,u(c,f,v,E);case Tt:var S=v._init;return y(f,c,m,S(v._payload),E)}if(cr(v)||er(v))return f=f.get(m)||null,d(c,f,v,E,null);So(c,v)}return null}function w(f,c,m,v){for(var E=null,S=null,k=c,T=c=0,B=null;k!==null&&T<m.length;T++){k.index>T?(B=k,k=null):B=k.sibling;var $=h(f,k,m[T],v);if($===null){k===null&&(k=B);break}e&&k&&$.alternate===null&&t(f,k),c=i($,c,T),S===null?E=$:S.sibling=$,S=$,k=B}if(T===m.length)return n(f,k),Y&&Jt(f,T),E;if(k===null){for(;T<m.length;T++)k=p(f,m[T],v),k!==null&&(c=i(k,c,T),S===null?E=k:S.sibling=k,S=k);return Y&&Jt(f,T),E}for(k=r(f,k);T<m.length;T++)B=y(k,f,T,m[T],v),B!==null&&(e&&B.alternate!==null&&k.delete(B.key===null?T:B.key),c=i(B,c,T),S===null?E=B:S.sibling=B,S=B);return e&&k.forEach(function(Pe){return t(f,Pe)}),Y&&Jt(f,T),E}function g(f,c,m,v){var E=er(m);if(typeof E!="function")throw Error(x(150));if(m=E.call(m),m==null)throw Error(x(151));for(var S=E=null,k=c,T=c=0,B=null,$=m.next();k!==null&&!$.done;T++,$=m.next()){k.index>T?(B=k,k=null):B=k.sibling;var Pe=h(f,k,$.value,v);if(Pe===null){k===null&&(k=B);break}e&&k&&Pe.alternate===null&&t(f,k),c=i(Pe,c,T),S===null?E=Pe:S.sibling=Pe,S=Pe,k=B}if($.done)return n(f,k),Y&&Jt(f,T),E;if(k===null){for(;!$.done;T++,$=m.next())$=p(f,$.value,v),$!==null&&(c=i($,c,T),S===null?E=$:S.sibling=$,S=$);return Y&&Jt(f,T),E}for(k=r(f,k);!$.done;T++,$=m.next())$=y(k,f,T,$.value,v),$!==null&&(e&&$.alternate!==null&&k.delete($.key===null?T:$.key),c=i($,c,T),S===null?E=$:S.sibling=$,S=$);return e&&k.forEach(function(xt){return t(f,xt)}),Y&&Jt(f,T),E}function P(f,c,m,v){if(typeof m=="object"&&m!==null&&m.type===gn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case so:e:{for(var E=m.key,S=c;S!==null;){if(S.key===E){if(E=m.type,E===gn){if(S.tag===7){n(f,S.sibling),c=o(S,m.props.children),c.return=f,f=c;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Tt&&sc(E)===S.type){n(f,S.sibling),c=o(S,m.props),c.ref=ir(f,S,m),c.return=f,f=c;break e}n(f,S);break}else t(f,S);S=S.sibling}m.type===gn?(c=ln(m.props.children,f.mode,v,m.key),c.return=f,f=c):(v=Wo(m.type,m.key,m.props,null,f.mode,v),v.ref=ir(f,c,m),v.return=f,f=v)}return l(f);case yn:e:{for(S=m.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(f,c.sibling),c=o(c,m.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Vl(m,f.mode,v),c.return=f,f=c}return l(f);case Tt:return S=m._init,P(f,c,S(m._payload),v)}if(cr(m))return w(f,c,m,v);if(er(m))return g(f,c,m,v);So(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,m),c.return=f,f=c):(n(f,c),c=Al(m,f.mode,v),c.return=f,f=c),l(f)):n(f,c)}return P}var Vn=xd(!0),Cd=xd(!1),Kr={},ct=bt(Kr),Ir=bt(Kr),jr=bt(Kr);function rn(e){if(e===Kr)throw Error(x(174));return e}function $s(e,t){switch(U(jr,t),U(Ir,e),U(ct,Kr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ca(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ca(t,e)}Q(ct),U(ct,t)}function Bn(){Q(ct),Q(Ir),Q(jr)}function Pd(e){rn(jr.current);var t=rn(ct.current),n=ca(t,e.type);t!==n&&(U(Ir,e),U(ct,n))}function Ms(e){Ir.current===e&&(Q(ct),Q(Ir))}var G=bt(0);function ci(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rl=[];function Rs(){for(var e=0;e<Rl.length;e++)Rl[e]._workInProgressVersionPrimary=null;Rl.length=0}var Ho=Et.ReactCurrentDispatcher,Il=Et.ReactCurrentBatchConfig,un=0,q=null,ie=null,ue=null,fi=!1,gr=!1,Dr=0,fm=0;function ye(){throw Error(x(321))}function Is(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function js(e,t,n,r,o,i){if(un=i,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ho.current=e===null||e.memoizedState===null?hm:vm,e=n(r,o),gr){i=0;do{if(gr=!1,Dr=0,25<=i)throw Error(x(301));i+=1,ue=ie=null,t.updateQueue=null,Ho.current=ym,e=n(r,o)}while(gr)}if(Ho.current=di,t=ie!==null&&ie.next!==null,un=0,ue=ie=q=null,fi=!1,t)throw Error(x(300));return e}function Ds(){var e=Dr!==0;return Dr=0,e}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?q.memoizedState=ue=e:ue=ue.next=e,ue}function Xe(){if(ie===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=ue===null?q.memoizedState:ue.next;if(t!==null)ue=t,ie=e;else{if(e===null)throw Error(x(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ue===null?q.memoizedState=ue=e:ue=ue.next=e}return ue}function Fr(e,t){return typeof t=="function"?t(e):t}function jl(e){var t=Xe(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=ie,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var d=u.lane;if((un&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=p,l=r):s=s.next=p,q.lanes|=d,cn|=d}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,nt(r,t.memoizedState)||(Te=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,q.lanes|=i,cn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Dl(e){var t=Xe(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);nt(i,t.memoizedState)||(Te=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Od(){}function Td(e,t){var n=q,r=Xe(),o=t(),i=!nt(r.memoizedState,o);if(i&&(r.memoizedState=o,Te=!0),r=r.queue,Fs(Ld.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Hr(9,zd.bind(null,n,r,o,t),void 0,null),ce===null)throw Error(x(349));un&30||Nd(n,t,o)}return o}function Nd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zd(e,t,n,r){t.value=n,t.getSnapshot=r,$d(t)&&Md(e)}function Ld(e,t,n){return n(function(){$d(t)&&Md(e)})}function $d(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function Md(e){var t=_t(e,1);t!==null&&tt(t,e,1,-1)}function uc(e){var t=ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:e},t.queue=e,e=e.dispatch=mm.bind(null,q,e),[t.memoizedState,e]}function Hr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Rd(){return Xe().memoizedState}function Ao(e,t,n,r){var o=ot();q.flags|=e,o.memoizedState=Hr(1|t,n,void 0,r===void 0?null:r)}function Ni(e,t,n,r){var o=Xe();r=r===void 0?null:r;var i=void 0;if(ie!==null){var l=ie.memoizedState;if(i=l.destroy,r!==null&&Is(r,l.deps)){o.memoizedState=Hr(t,n,i,r);return}}q.flags|=e,o.memoizedState=Hr(1|t,n,i,r)}function cc(e,t){return Ao(8390656,8,e,t)}function Fs(e,t){return Ni(2048,8,e,t)}function Id(e,t){return Ni(4,2,e,t)}function jd(e,t){return Ni(4,4,e,t)}function Dd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fd(e,t,n){return n=n!=null?n.concat([e]):null,Ni(4,4,Dd.bind(null,t,e),n)}function Hs(){}function Hd(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Is(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ad(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Is(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Vd(e,t,n){return un&21?(nt(n,t)||(n=Wf(),q.lanes|=n,cn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Te=!0),e.memoizedState=n)}function dm(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Il.transition;Il.transition={};try{e(!1),t()}finally{H=n,Il.transition=r}}function Bd(){return Xe().memoizedState}function pm(e,t,n){var r=At(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ud(e))Wd(t,n);else if(n=Sd(e,t,n,r),n!==null){var o=Ee();tt(n,e,r,o),Qd(n,t,r)}}function mm(e,t,n){var r=At(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ud(e))Wd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,nt(a,l)){var s=t.interleaved;s===null?(o.next=o,zs(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Sd(e,t,o,r),n!==null&&(o=Ee(),tt(n,e,r,o),Qd(n,t,r))}}function Ud(e){var t=e.alternate;return e===q||t!==null&&t===q}function Wd(e,t){gr=fi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,vs(e,n)}}var di={readContext:Ye,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},hm={readContext:Ye,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:cc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ao(4194308,4,Dd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ao(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ao(4,2,e,t)},useMemo:function(e,t){var n=ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ot();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=pm.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:uc,useDebugValue:Hs,useDeferredValue:function(e){return ot().memoizedState=e},useTransition:function(){var e=uc(!1),t=e[0];return e=dm.bind(null,e[1]),ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,o=ot();if(Y){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),ce===null)throw Error(x(349));un&30||Nd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,cc(Ld.bind(null,r,i,e),[e]),r.flags|=2048,Hr(9,zd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ot(),t=ce.identifierPrefix;if(Y){var n=vt,r=ht;n=(r&~(1<<32-et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=fm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},vm={readContext:Ye,useCallback:Hd,useContext:Ye,useEffect:Fs,useImperativeHandle:Fd,useInsertionEffect:Id,useLayoutEffect:jd,useMemo:Ad,useReducer:jl,useRef:Rd,useState:function(){return jl(Fr)},useDebugValue:Hs,useDeferredValue:function(e){var t=Xe();return Vd(t,ie.memoizedState,e)},useTransition:function(){var e=jl(Fr)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:Od,useSyncExternalStore:Td,useId:Bd,unstable_isNewReconciler:!1},ym={readContext:Ye,useCallback:Hd,useContext:Ye,useEffect:Fs,useImperativeHandle:Fd,useInsertionEffect:Id,useLayoutEffect:jd,useMemo:Ad,useReducer:Dl,useRef:Rd,useState:function(){return Dl(Fr)},useDebugValue:Hs,useDeferredValue:function(e){var t=Xe();return ie===null?t.memoizedState=e:Vd(t,ie.memoizedState,e)},useTransition:function(){var e=Dl(Fr)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:Od,useSyncExternalStore:Td,useId:Bd,unstable_isNewReconciler:!1};function Un(e,t){try{var n="",r=t;do n+=Q0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Fl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ma(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gm=typeof WeakMap=="function"?WeakMap:Map;function bd(e,t,n){n=gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){mi||(mi=!0,Ua=r),Ma(e,t)},n}function Yd(e,t,n){n=gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ma(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ma(e,t),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function fc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=$m.bind(null,e,t,n),t.then(e,e))}function dc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function pc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=gt(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e)}var wm=Et.ReactCurrentOwner,Te=!1;function ke(e,t,n,r){t.child=e===null?Cd(t,null,n,r):Vn(t,e.child,n,r)}function mc(e,t,n,r,o){n=n.render;var i=t.ref;return Mn(t,o),r=js(e,t,n,r,i,o),n=Ds(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,kt(e,t,o)):(Y&&n&&xs(t),t.flags|=1,ke(e,t,r,o),t.child)}function hc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ys(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Xd(e,t,i,r,o)):(e=Wo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Lr,n(l,r)&&e.ref===t.ref)return kt(e,t,o)}return t.flags|=1,e=Vt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Xd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Lr(i,r)&&e.ref===t.ref)if(Te=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Te=!0);else return t.lanes=e.lanes,kt(e,t,o)}return Ra(e,t,n,r,o)}function Kd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(Tn,Re),Re|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(Tn,Re),Re|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,U(Tn,Re),Re|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,U(Tn,Re),Re|=r;return ke(e,t,o,n),t.child}function Gd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ra(e,t,n,r,o){var i=ze(n)?an:_e.current;return i=Hn(t,i),Mn(t,o),n=js(e,t,n,r,i,o),r=Ds(),e!==null&&!Te?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,kt(e,t,o)):(Y&&r&&xs(t),t.flags|=1,ke(e,t,n,o),t.child)}function vc(e,t,n,r,o){if(ze(n)){var i=!0;oi(t)}else i=!1;if(Mn(t,o),t.stateNode===null)Vo(e,t),Ed(t,n,r),$a(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=ze(n)?an:_e.current,u=Hn(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&ac(t,l,r,u),Nt=!1;var h=t.memoizedState;l.state=h,ui(t,r,l,o),s=t.memoizedState,a!==r||h!==s||Ne.current||Nt?(typeof d=="function"&&(La(t,n,d,r),s=t.memoizedState),(a=Nt||lc(t,n,a,r,h,s,u))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,_d(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:qe(t.type,a),l.props=u,p=t.pendingProps,h=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ye(s):(s=ze(n)?an:_e.current,s=Hn(t,s));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||h!==s)&&ac(t,l,r,s),Nt=!1,h=t.memoizedState,l.state=h,ui(t,r,l,o);var w=t.memoizedState;a!==p||h!==w||Ne.current||Nt?(typeof y=="function"&&(La(t,n,y,r),w=t.memoizedState),(u=Nt||lc(t,n,u,r,h,w,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ia(e,t,n,r,i,o)}function Ia(e,t,n,r,o,i){Gd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&tc(t,n,!1),kt(e,t,i);r=t.stateNode,wm.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Vn(t,e.child,null,i),t.child=Vn(t,null,a,i)):ke(e,t,a,i),t.memoizedState=r.state,o&&tc(t,n,!0),t.child}function qd(e){var t=e.stateNode;t.pendingContext?ec(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ec(e,t.context,!1),$s(e,t.containerInfo)}function yc(e,t,n,r,o){return An(),Ps(o),t.flags|=256,ke(e,t,n,r),t.child}var ja={dehydrated:null,treeContext:null,retryLane:0};function Da(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zd(e,t,n){var r=t.pendingProps,o=G.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),U(G,o&1),e===null)return Na(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=$i(l,r,0,null),e=ln(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Da(n),t.memoizedState=ja,e):As(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Sm(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Vt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Vt(a,i):(i=ln(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Da(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=ja,r}return i=e.child,e=i.sibling,r=Vt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function As(e,t){return t=$i({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _o(e,t,n,r){return r!==null&&Ps(r),Vn(t,e.child,null,n),e=As(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sm(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Fl(Error(x(422))),_o(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=$i({mode:"visible",children:r.children},o,0,null),i=ln(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Vn(t,e.child,null,l),t.child.memoizedState=Da(l),t.memoizedState=ja,i);if(!(t.mode&1))return _o(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(x(419)),r=Fl(i,r,void 0),_o(e,t,l,r)}if(a=(l&e.childLanes)!==0,Te||a){if(r=ce,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,_t(e,o),tt(r,e,o,-1))}return bs(),r=Fl(Error(x(421))),_o(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Mm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ie=Dt(o.nextSibling),je=t,Y=!0,Je=null,e!==null&&(Ue[We++]=ht,Ue[We++]=vt,Ue[We++]=sn,ht=e.id,vt=e.overflow,sn=t),t=As(t,r.children),t.flags|=4096,t)}function gc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),za(e.return,t,n)}function Hl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Jd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ke(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gc(e,n,t);else if(e.tag===19)gc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(G,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ci(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Hl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ci(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Hl(t,!0,n,null,i);break;case"together":Hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=Vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _m(e,t,n){switch(t.tag){case 3:qd(t),An();break;case 5:Pd(t);break;case 1:ze(t.type)&&oi(t);break;case 4:$s(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;U(ai,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?Zd(e,t,n):(U(G,G.current&1),e=kt(e,t,n),e!==null?e.sibling:null);U(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),U(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,Kd(e,t,n)}return kt(e,t,n)}var ep,Fa,tp,np;ep=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fa=function(){};tp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,rn(ct.current);var i=null;switch(n){case"input":o=la(e,o),r=la(e,r),i=[];break;case"select":o=Z({},o,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":o=ua(e,o),r=ua(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ni)}fa(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&W("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};np=function(e,t,n,r){n!==r&&(t.flags|=4)};function lr(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function km(e,t,n){var r=t.pendingProps;switch(Cs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return ze(t.type)&&ri(),ge(t),null;case 3:return r=t.stateNode,Bn(),Q(Ne),Q(_e),Rs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Je!==null&&(ba(Je),Je=null))),Fa(e,t),ge(t),null;case 5:Ms(t);var o=rn(jr.current);if(n=t.type,e!==null&&t.stateNode!=null)tp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return ge(t),null}if(e=rn(ct.current),wo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[st]=t,r[Rr]=i,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(o=0;o<dr.length;o++)W(dr[o],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Ou(r,i),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},W("invalid",r);break;case"textarea":Nu(r,i),W("invalid",r)}fa(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&go(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&go(r.textContent,a,e),o=["children",""+a]):xr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":uo(r),Tu(r,i,!0);break;case"textarea":uo(r),zu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ni)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[st]=t,e[Rr]=r,ep(e,t,!1,!1),t.stateNode=e;e:{switch(l=da(n,r),n){case"dialog":W("cancel",e),W("close",e),o=r;break;case"iframe":case"object":case"embed":W("load",e),o=r;break;case"video":case"audio":for(o=0;o<dr.length;o++)W(dr[o],e);o=r;break;case"source":W("error",e),o=r;break;case"img":case"image":case"link":W("error",e),W("load",e),o=r;break;case"details":W("toggle",e),o=r;break;case"input":Ou(e,r),o=la(e,r),W("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Z({},r,{value:void 0}),W("invalid",e);break;case"textarea":Nu(e,r),o=ua(e,r),W("invalid",e);break;default:o=r}fa(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?$f(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&zf(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Cr(e,s):typeof s=="number"&&Cr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(xr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&W("scroll",e):s!=null&&cs(e,i,s,l))}switch(n){case"input":uo(e),Tu(e,r,!1);break;case"textarea":uo(e),zu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ut(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Nn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ni)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)np(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=rn(jr.current),rn(ct.current),wo(t)){if(r=t.stateNode,n=t.memoizedProps,r[st]=t,(i=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:go(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&go(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return ge(t),null;case 13:if(Q(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Ie!==null&&t.mode&1&&!(t.flags&128))wd(),An(),t.flags|=98560,i=!1;else if(i=wo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[st]=t}else An(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),i=!1}else Je!==null&&(ba(Je),Je=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?le===0&&(le=3):bs())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return Bn(),Fa(e,t),e===null&&$r(t.stateNode.containerInfo),ge(t),null;case 10:return Ns(t.type._context),ge(t),null;case 17:return ze(t.type)&&ri(),ge(t),null;case 19:if(Q(G),i=t.memoizedState,i===null)return ge(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)lr(i,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ci(e),l!==null){for(t.flags|=128,lr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(G,G.current&1|2),t.child}e=e.sibling}i.tail!==null&&ne()>Wn&&(t.flags|=128,r=!0,lr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ci(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),lr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Y)return ge(t),null}else 2*ne()-i.renderingStartTime>Wn&&n!==1073741824&&(t.flags|=128,r=!0,lr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ne(),t.sibling=null,n=G.current,U(G,r?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return Qs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Re&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function Em(e,t){switch(Cs(t),t.tag){case 1:return ze(t.type)&&ri(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bn(),Q(Ne),Q(_e),Rs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ms(t),null;case 13:if(Q(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));An()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(G),null;case 4:return Bn(),null;case 10:return Ns(t.type._context),null;case 22:case 23:return Qs(),null;case 24:return null;default:return null}}var ko=!1,Se=!1,xm=typeof WeakSet=="function"?WeakSet:Set,O=null;function On(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function Ha(e,t,n){try{n()}catch(r){ee(e,t,r)}}var wc=!1;function Cm(e,t){if(ka=Jo,e=ld(),Es(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,d=0,p=e,h=null;t:for(;;){for(var y;p!==n||o!==0&&p.nodeType!==3||(a=l+o),p!==i||r!==0&&p.nodeType!==3||(s=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(y=p.firstChild)!==null;)h=p,p=y;for(;;){if(p===e)break t;if(h===n&&++u===o&&(a=l),h===i&&++d===r&&(s=l),(y=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ea={focusedElem:e,selectionRange:n},Jo=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var g=w.memoizedProps,P=w.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?g:qe(t.type,g),P);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(v){ee(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return w=wc,wc=!1,w}function wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ha(t,n,i)}o=o.next}while(o!==r)}}function zi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Aa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function rp(e){var t=e.alternate;t!==null&&(e.alternate=null,rp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[Rr],delete t[Pa],delete t[am],delete t[sm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function op(e){return e.tag===5||e.tag===3||e.tag===4}function Sc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||op(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Va(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ni));else if(r!==4&&(e=e.child,e!==null))for(Va(e,t,n),e=e.sibling;e!==null;)Va(e,t,n),e=e.sibling}function Ba(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ba(e,t,n),e=e.sibling;e!==null;)Ba(e,t,n),e=e.sibling}var pe=null,Ze=!1;function Ct(e,t,n){for(n=n.child;n!==null;)ip(e,t,n),n=n.sibling}function ip(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(ki,n)}catch{}switch(n.tag){case 5:Se||On(n,t);case 6:var r=pe,o=Ze;pe=null,Ct(e,t,n),pe=r,Ze=o,pe!==null&&(Ze?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(Ze?(e=pe,n=n.stateNode,e.nodeType===8?$l(e.parentNode,n):e.nodeType===1&&$l(e,n),Nr(e)):$l(pe,n.stateNode));break;case 4:r=pe,o=Ze,pe=n.stateNode.containerInfo,Ze=!0,Ct(e,t,n),pe=r,Ze=o;break;case 0:case 11:case 14:case 15:if(!Se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ha(n,t,l),o=o.next}while(o!==r)}Ct(e,t,n);break;case 1:if(!Se&&(On(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ee(n,t,a)}Ct(e,t,n);break;case 21:Ct(e,t,n);break;case 22:n.mode&1?(Se=(r=Se)||n.memoizedState!==null,Ct(e,t,n),Se=r):Ct(e,t,n);break;default:Ct(e,t,n)}}function _c(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xm),t.forEach(function(r){var o=Rm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:pe=a.stateNode,Ze=!1;break e;case 3:pe=a.stateNode.containerInfo,Ze=!0;break e;case 4:pe=a.stateNode.containerInfo,Ze=!0;break e}a=a.return}if(pe===null)throw Error(x(160));ip(i,l,o),pe=null,Ze=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){ee(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lp(t,e),t=t.sibling}function lp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),rt(e),r&4){try{wr(3,e,e.return),zi(3,e)}catch(g){ee(e,e.return,g)}try{wr(5,e,e.return)}catch(g){ee(e,e.return,g)}}break;case 1:Ge(t,e),rt(e),r&512&&n!==null&&On(n,n.return);break;case 5:if(Ge(t,e),rt(e),r&512&&n!==null&&On(n,n.return),e.flags&32){var o=e.stateNode;try{Cr(o,"")}catch(g){ee(e,e.return,g)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Of(o,i),da(a,l);var u=da(a,i);for(l=0;l<s.length;l+=2){var d=s[l],p=s[l+1];d==="style"?$f(o,p):d==="dangerouslySetInnerHTML"?zf(o,p):d==="children"?Cr(o,p):cs(o,d,p,u)}switch(a){case"input":aa(o,i);break;case"textarea":Tf(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Nn(o,!!i.multiple,y,!1):h!==!!i.multiple&&(i.defaultValue!=null?Nn(o,!!i.multiple,i.defaultValue,!0):Nn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Rr]=i}catch(g){ee(e,e.return,g)}}break;case 6:if(Ge(t,e),rt(e),r&4){if(e.stateNode===null)throw Error(x(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(g){ee(e,e.return,g)}}break;case 3:if(Ge(t,e),rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Nr(t.containerInfo)}catch(g){ee(e,e.return,g)}break;case 4:Ge(t,e),rt(e);break;case 13:Ge(t,e),rt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Us=ne())),r&4&&_c(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Se=(u=Se)||d,Ge(t,e),Se=u):Ge(t,e),rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(O=e,d=e.child;d!==null;){for(p=O=d;O!==null;){switch(h=O,y=h.child,h.tag){case 0:case 11:case 14:case 15:wr(4,h,h.return);break;case 1:On(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(g){ee(r,n,g)}}break;case 5:On(h,h.return);break;case 22:if(h.memoizedState!==null){Ec(p);continue}}y!==null?(y.return=h,O=y):Ec(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{o=p.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,s=p.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Lf("display",l))}catch(g){ee(e,e.return,g)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(g){ee(e,e.return,g)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ge(t,e),rt(e),r&4&&_c(e);break;case 21:break;default:Ge(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(op(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Cr(o,""),r.flags&=-33);var i=Sc(e);Ba(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Sc(e);Va(e,a,l);break;default:throw Error(x(161))}}catch(s){ee(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pm(e,t,n){O=e,ap(e)}function ap(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var o=O,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||ko;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Se;a=ko;var u=Se;if(ko=l,(Se=s)&&!u)for(O=o;O!==null;)l=O,s=l.child,l.tag===22&&l.memoizedState!==null?xc(o):s!==null?(s.return=l,O=s):xc(o);for(;i!==null;)O=i,ap(i),i=i.sibling;O=o,ko=a,Se=u}kc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,O=i):kc(e)}}function kc(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Se||zi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Se)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:qe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ic(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ic(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Nr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}Se||t.flags&512&&Aa(t)}catch(h){ee(t,t.return,h)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function Ec(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function xc(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zi(4,t)}catch(s){ee(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ee(t,o,s)}}var i=t.return;try{Aa(t)}catch(s){ee(t,i,s)}break;case 5:var l=t.return;try{Aa(t)}catch(s){ee(t,l,s)}}}catch(s){ee(t,t.return,s)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var Om=Math.ceil,pi=Et.ReactCurrentDispatcher,Vs=Et.ReactCurrentOwner,be=Et.ReactCurrentBatchConfig,j=0,ce=null,oe=null,he=0,Re=0,Tn=bt(0),le=0,Ar=null,cn=0,Li=0,Bs=0,Sr=null,Oe=null,Us=0,Wn=1/0,pt=null,mi=!1,Ua=null,Ht=null,Eo=!1,Mt=null,hi=0,_r=0,Wa=null,Bo=-1,Uo=0;function Ee(){return j&6?ne():Bo!==-1?Bo:Bo=ne()}function At(e){return e.mode&1?j&2&&he!==0?he&-he:cm.transition!==null?(Uo===0&&(Uo=Wf()),Uo):(e=H,e!==0||(e=window.event,e=e===void 0?16:qf(e.type)),e):1}function tt(e,t,n,r){if(50<_r)throw _r=0,Wa=null,Error(x(185));br(e,n,r),(!(j&2)||e!==ce)&&(e===ce&&(!(j&2)&&(Li|=n),le===4&&Lt(e,he)),Le(e,r),n===1&&j===0&&!(t.mode&1)&&(Wn=ne()+500,Oi&&Yt()))}function Le(e,t){var n=e.callbackNode;c1(e,t);var r=Zo(e,e===ce?he:0);if(r===0)n!==null&&Mu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Mu(n),t===1)e.tag===0?um(Cc.bind(null,e)):vd(Cc.bind(null,e)),im(function(){!(j&6)&&Yt()}),n=null;else{switch(Qf(r)){case 1:n=hs;break;case 4:n=Bf;break;case 16:n=qo;break;case 536870912:n=Uf;break;default:n=qo}n=hp(n,sp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function sp(e,t){if(Bo=-1,Uo=0,j&6)throw Error(x(327));var n=e.callbackNode;if(Rn()&&e.callbackNode!==n)return null;var r=Zo(e,e===ce?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vi(e,r);else{t=r;var o=j;j|=2;var i=cp();(ce!==e||he!==t)&&(pt=null,Wn=ne()+500,on(e,t));do try{zm();break}catch(a){up(e,a)}while(1);Ts(),pi.current=i,j=o,oe!==null?t=0:(ce=null,he=0,t=le)}if(t!==0){if(t===2&&(o=ya(e),o!==0&&(r=o,t=Qa(e,o))),t===1)throw n=Ar,on(e,0),Lt(e,r),Le(e,ne()),n;if(t===6)Lt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Tm(o)&&(t=vi(e,r),t===2&&(i=ya(e),i!==0&&(r=i,t=Qa(e,i))),t===1))throw n=Ar,on(e,0),Lt(e,r),Le(e,ne()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:en(e,Oe,pt);break;case 3:if(Lt(e,r),(r&130023424)===r&&(t=Us+500-ne(),10<t)){if(Zo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ee(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ca(en.bind(null,e,Oe,pt),t);break}en(e,Oe,pt);break;case 4:if(Lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-et(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Om(r/1960))-r,10<r){e.timeoutHandle=Ca(en.bind(null,e,Oe,pt),r);break}en(e,Oe,pt);break;case 5:en(e,Oe,pt);break;default:throw Error(x(329))}}}return Le(e,ne()),e.callbackNode===n?sp.bind(null,e):null}function Qa(e,t){var n=Sr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=vi(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&ba(t)),e}function ba(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function Tm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!nt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Lt(e,t){for(t&=~Bs,t&=~Li,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-et(t),r=1<<n;e[n]=-1,t&=~r}}function Cc(e){if(j&6)throw Error(x(327));Rn();var t=Zo(e,0);if(!(t&1))return Le(e,ne()),null;var n=vi(e,t);if(e.tag!==0&&n===2){var r=ya(e);r!==0&&(t=r,n=Qa(e,r))}if(n===1)throw n=Ar,on(e,0),Lt(e,t),Le(e,ne()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,en(e,Oe,pt),Le(e,ne()),null}function Ws(e,t){var n=j;j|=1;try{return e(t)}finally{j=n,j===0&&(Wn=ne()+500,Oi&&Yt())}}function fn(e){Mt!==null&&Mt.tag===0&&!(j&6)&&Rn();var t=j;j|=1;var n=be.transition,r=H;try{if(be.transition=null,H=1,e)return e()}finally{H=r,be.transition=n,j=t,!(j&6)&&Yt()}}function Qs(){Re=Tn.current,Q(Tn)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,om(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Cs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ri();break;case 3:Bn(),Q(Ne),Q(_e),Rs();break;case 5:Ms(r);break;case 4:Bn();break;case 13:Q(G);break;case 19:Q(G);break;case 10:Ns(r.type._context);break;case 22:case 23:Qs()}n=n.return}if(ce=e,oe=e=Vt(e.current,null),he=Re=t,le=0,Ar=null,Bs=Li=cn=0,Oe=Sr=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}nn=null}return e}function up(e,t){do{var n=oe;try{if(Ts(),Ho.current=di,fi){for(var r=q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}fi=!1}if(un=0,ue=ie=q=null,gr=!1,Dr=0,Vs.current=null,n===null||n.return===null){le=1,Ar=t,oe=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=he,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=dc(l);if(y!==null){y.flags&=-257,pc(y,l,a,i,t),y.mode&1&&fc(i,u,t),t=y,s=u;var w=t.updateQueue;if(w===null){var g=new Set;g.add(s),t.updateQueue=g}else w.add(s);break e}else{if(!(t&1)){fc(i,u,t),bs();break e}s=Error(x(426))}}else if(Y&&a.mode&1){var P=dc(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),pc(P,l,a,i,t),Ps(Un(s,a));break e}}i=s=Un(s,a),le!==4&&(le=2),Sr===null?Sr=[i]:Sr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=bd(i,s,t);oc(i,f);break e;case 1:a=s;var c=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ht===null||!Ht.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Yd(i,a,t);oc(i,v);break e}}i=i.return}while(i!==null)}dp(n)}catch(E){t=E,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(1)}function cp(){var e=pi.current;return pi.current=di,e===null?di:e}function bs(){(le===0||le===3||le===2)&&(le=4),ce===null||!(cn&268435455)&&!(Li&268435455)||Lt(ce,he)}function vi(e,t){var n=j;j|=2;var r=cp();(ce!==e||he!==t)&&(pt=null,on(e,t));do try{Nm();break}catch(o){up(e,o)}while(1);if(Ts(),j=n,pi.current=r,oe!==null)throw Error(x(261));return ce=null,he=0,le}function Nm(){for(;oe!==null;)fp(oe)}function zm(){for(;oe!==null&&!t1();)fp(oe)}function fp(e){var t=mp(e.alternate,e,Re);e.memoizedProps=e.pendingProps,t===null?dp(e):oe=t,Vs.current=null}function dp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Em(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,oe=null;return}}else if(n=km(n,t,Re),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);le===0&&(le=5)}function en(e,t,n){var r=H,o=be.transition;try{be.transition=null,H=1,Lm(e,t,n,r)}finally{be.transition=o,H=r}return null}function Lm(e,t,n,r){do Rn();while(Mt!==null);if(j&6)throw Error(x(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(f1(e,i),e===ce&&(oe=ce=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Eo||(Eo=!0,hp(qo,function(){return Rn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=be.transition,be.transition=null;var l=H;H=1;var a=j;j|=4,Vs.current=null,Cm(e,n),lp(n,e),q1(Ea),Jo=!!ka,Ea=ka=null,e.current=n,Pm(n),n1(),j=a,H=l,be.transition=i}else e.current=n;if(Eo&&(Eo=!1,Mt=e,hi=o),i=e.pendingLanes,i===0&&(Ht=null),i1(n.stateNode),Le(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(mi)throw mi=!1,e=Ua,Ua=null,e;return hi&1&&e.tag!==0&&Rn(),i=e.pendingLanes,i&1?e===Wa?_r++:(_r=0,Wa=e):_r=0,Yt(),null}function Rn(){if(Mt!==null){var e=Qf(hi),t=be.transition,n=H;try{if(be.transition=null,H=16>e?16:e,Mt===null)var r=!1;else{if(e=Mt,Mt=null,hi=0,j&6)throw Error(x(331));var o=j;for(j|=4,O=e.current;O!==null;){var i=O,l=i.child;if(O.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(O=u;O!==null;){var d=O;switch(d.tag){case 0:case 11:case 15:wr(8,d,i)}var p=d.child;if(p!==null)p.return=d,O=p;else for(;O!==null;){d=O;var h=d.sibling,y=d.return;if(rp(d),d===u){O=null;break}if(h!==null){h.return=y,O=h;break}O=y}}}var w=i.alternate;if(w!==null){var g=w.child;if(g!==null){w.child=null;do{var P=g.sibling;g.sibling=null,g=P}while(g!==null)}}O=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,O=l;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:wr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,O=f;break e}O=i.return}}var c=e.current;for(O=c;O!==null;){l=O;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,O=m;else e:for(l=c;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:zi(9,a)}}catch(E){ee(a,a.return,E)}if(a===l){O=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,O=v;break e}O=a.return}}if(j=o,Yt(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(ki,e)}catch{}r=!0}return r}finally{H=n,be.transition=t}}return!1}function Pc(e,t,n){t=Un(n,t),t=bd(e,t,1),e=Ft(e,t,1),t=Ee(),e!==null&&(br(e,1,t),Le(e,t))}function ee(e,t,n){if(e.tag===3)Pc(e,e,n);else for(;t!==null;){if(t.tag===3){Pc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=Un(n,e),e=Yd(t,e,1),t=Ft(t,e,1),e=Ee(),t!==null&&(br(t,1,e),Le(t,e));break}}t=t.return}}function $m(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(he&n)===n&&(le===4||le===3&&(he&130023424)===he&&500>ne()-Us?on(e,0):Bs|=n),Le(e,t)}function pp(e,t){t===0&&(e.mode&1?(t=po,po<<=1,!(po&130023424)&&(po=4194304)):t=1);var n=Ee();e=_t(e,t),e!==null&&(br(e,t,n),Le(e,n))}function Mm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),pp(e,n)}function Rm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),pp(e,n)}var mp;mp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)Te=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Te=!1,_m(e,t,n);Te=!!(e.flags&131072)}else Te=!1,Y&&t.flags&1048576&&yd(t,li,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vo(e,t),e=t.pendingProps;var o=Hn(t,_e.current);Mn(t,n),o=js(null,t,r,e,o,n);var i=Ds();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(r)?(i=!0,oi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ls(t),o.updater=Ti,t.stateNode=o,o._reactInternals=t,$a(t,r,e,n),t=Ia(null,t,r,!0,i,n)):(t.tag=0,Y&&i&&xs(t),ke(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=jm(r),e=qe(r,e),o){case 0:t=Ra(null,t,r,e,n);break e;case 1:t=vc(null,t,r,e,n);break e;case 11:t=mc(null,t,r,e,n);break e;case 14:t=hc(null,t,r,qe(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),Ra(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),vc(e,t,r,o,n);case 3:e:{if(qd(t),e===null)throw Error(x(387));r=t.pendingProps,i=t.memoizedState,o=i.element,_d(e,t),ui(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Un(Error(x(423)),t),t=yc(e,t,r,n,o);break e}else if(r!==o){o=Un(Error(x(424)),t),t=yc(e,t,r,n,o);break e}else for(Ie=Dt(t.stateNode.containerInfo.firstChild),je=t,Y=!0,Je=null,n=Cd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(An(),r===o){t=kt(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return Pd(t),e===null&&Na(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,xa(r,o)?l=null:i!==null&&xa(r,i)&&(t.flags|=32),Gd(e,t),ke(e,t,l,n),t.child;case 6:return e===null&&Na(t),null;case 13:return Zd(e,t,n);case 4:return $s(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Vn(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),mc(e,t,r,o,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,U(ai,r._currentValue),r._currentValue=l,i!==null)if(nt(i.value,l)){if(i.children===o.children&&!Ne.current){t=kt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=gt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),za(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(x(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),za(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ke(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Mn(t,n),o=Ye(o),r=r(o),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,o=qe(r,t.pendingProps),o=qe(r.type,o),hc(e,t,r,o,n);case 15:return Xd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:qe(r,o),Vo(e,t),t.tag=1,ze(r)?(e=!0,oi(t)):e=!1,Mn(t,n),Ed(t,r,o),$a(t,r,o,n),Ia(null,t,r,!0,e,n);case 19:return Jd(e,t,n);case 22:return Kd(e,t,n)}throw Error(x(156,t.tag))};function hp(e,t){return Vf(e,t)}function Im(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,t,n,r){return new Im(e,t,n,r)}function Ys(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jm(e){if(typeof e=="function")return Ys(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ds)return 11;if(e===ps)return 14}return 2}function Vt(e,t){var n=e.alternate;return n===null?(n=Qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ys(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case gn:return ln(n.children,o,i,t);case fs:l=8,o|=8;break;case na:return e=Qe(12,n,t,o|2),e.elementType=na,e.lanes=i,e;case ra:return e=Qe(13,n,t,o),e.elementType=ra,e.lanes=i,e;case oa:return e=Qe(19,n,t,o),e.elementType=oa,e.lanes=i,e;case xf:return $i(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kf:l=10;break e;case Ef:l=9;break e;case ds:l=11;break e;case ps:l=14;break e;case Tt:l=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Qe(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function ln(e,t,n,r){return e=Qe(7,e,r,t),e.lanes=n,e}function $i(e,t,n,r){return e=Qe(22,e,r,t),e.elementType=xf,e.lanes=n,e.stateNode={isHidden:!1},e}function Al(e,t,n){return e=Qe(6,e,null,t),e.lanes=n,e}function Vl(e,t,n){return t=Qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Xs(e,t,n,r,o,i,l,a,s){return e=new Dm(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Qe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ls(i),e}function Fm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function vp(e){if(!e)return Wt;e=e._reactInternals;e:{if(pn(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(ze(n))return hd(e,n,t)}return t}function yp(e,t,n,r,o,i,l,a,s){return e=Xs(n,r,!0,e,o,i,l,a,s),e.context=vp(null),n=e.current,r=Ee(),o=At(n),i=gt(r,o),i.callback=t??null,Ft(n,i,o),e.current.lanes=o,br(e,o,r),Le(e,r),e}function Mi(e,t,n,r){var o=t.current,i=Ee(),l=At(o);return n=vp(n),t.context===null?t.context=n:t.pendingContext=n,t=gt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(o,t,l),e!==null&&(tt(e,o,l,i),Fo(e,o,l)),l}function yi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Oc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ks(e,t){Oc(e,t),(e=e.alternate)&&Oc(e,t)}function Hm(){return null}var gp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gs(e){this._internalRoot=e}Ri.prototype.render=Gs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));Mi(e,t,null,null)};Ri.prototype.unmount=Gs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fn(function(){Mi(null,e,null,null)}),t[St]=null}};function Ri(e){this._internalRoot=e}Ri.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&t!==0&&t<zt[n].priority;n++);zt.splice(n,0,e),n===0&&Gf(e)}};function qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ii(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Tc(){}function Am(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=yi(l);i.call(u)}}var l=yp(t,r,e,0,null,!1,!1,"",Tc);return e._reactRootContainer=l,e[St]=l.current,$r(e.nodeType===8?e.parentNode:e),fn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=yi(s);a.call(u)}}var s=Xs(e,0,!1,null,null,!1,!1,"",Tc);return e._reactRootContainer=s,e[St]=s.current,$r(e.nodeType===8?e.parentNode:e),fn(function(){Mi(t,s,n,r)}),s}function ji(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=yi(l);a.call(s)}}Mi(t,l,e,o)}else l=Am(n,t,e,o,r);return yi(l)}bf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fr(t.pendingLanes);n!==0&&(vs(t,n|1),Le(t,ne()),!(j&6)&&(Wn=ne()+500,Yt()))}break;case 13:fn(function(){var r=_t(e,1);if(r!==null){var o=Ee();tt(r,e,1,o)}}),Ks(e,1)}};ys=function(e){if(e.tag===13){var t=_t(e,134217728);if(t!==null){var n=Ee();tt(t,e,134217728,n)}Ks(e,134217728)}};Yf=function(e){if(e.tag===13){var t=At(e),n=_t(e,t);if(n!==null){var r=Ee();tt(n,e,t,r)}Ks(e,t)}};Xf=function(){return H};Kf=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};ma=function(e,t,n){switch(t){case"input":if(aa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Pi(r);if(!o)throw Error(x(90));Pf(r),aa(r,o)}}}break;case"textarea":Tf(e,n);break;case"select":t=n.value,t!=null&&Nn(e,!!n.multiple,t,!1)}};If=Ws;jf=fn;var Vm={usingClientEntryPoint:!1,Events:[Xr,kn,Pi,Mf,Rf,Ws]},ar={findFiberByHostInstance:tn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Bm={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hf(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||Hm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{ki=xo.inject(Bm),ut=xo}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vm;He.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qs(t))throw Error(x(200));return Fm(e,t,null,n)};He.createRoot=function(e,t){if(!qs(e))throw Error(x(299));var n=!1,r="",o=gp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Xs(e,1,!1,null,null,n,!1,r,o),e[St]=t.current,$r(e.nodeType===8?e.parentNode:e),new Gs(t)};He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=Hf(t),e=e===null?null:e.stateNode,e};He.flushSync=function(e){return fn(e)};He.hydrate=function(e,t,n){if(!Ii(t))throw Error(x(200));return ji(null,e,t,!0,n)};He.hydrateRoot=function(e,t,n){if(!qs(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=gp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=yp(t,null,e,1,n??null,o,!1,i,l),e[St]=t.current,$r(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ri(t)};He.render=function(e,t,n){if(!Ii(t))throw Error(x(200));return ji(null,e,t,!1,n)};He.unmountComponentAtNode=function(e){if(!Ii(e))throw Error(x(40));return e._reactRootContainer?(fn(function(){ji(null,null,e,!1,function(){e._reactRootContainer=null,e[St]=null})}),!0):!1};He.unstable_batchedUpdates=Ws;He.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ii(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return ji(e,t,n,!1,r)};He.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=He})(H0);const Zs=cf(Er);var Nc=Er;Jl.createRoot=Nc.createRoot,Jl.hydrateRoot=Nc.hydrateRoot;const Um="_footer_16mu1_1",Wm="_credits_16mu1_25",zc={footer:Um,credits:Wm},wp=async e=>{try{const t=await localStorage.getItem(e);return t===null?null:JSON.parse(t)}catch(t){return console.warn(t),null}},In=async(e,t)=>{try{const n=JSON.stringify(t);await localStorage.setItem(e,n)}catch(n){console.warn(n)}},mn=z.createContext({language:"en",changeLanguage(e){}}),Qm=({children:e})=>{const[t,n]=z.useState("en");z.useEffect(()=>{wp("@languageNomina").then(o=>{o==="en"||o==="es"?n(o):In("@languageNomina","en")})},[]);const r=o=>{o==="en"?(In("@languageNomina","en"),n("en")):o==="es"&&(In("@languageNomina","es"),n("es"))};return _(mn.Provider,{value:{changeLanguage:r,language:t},children:e})},bm={copy:"Copyright",desing:"Diseñado por:",name:"Luichi"},Ym={copy:"Copyright",desing:"Diseñado por:",name:"Luichi"},Xm={en:bm,es:Ym};function Km(){const{language:e}=z.useContext(mn),t=Xm[e],n=new Date().getFullYear();return _("footer",{id:"footer",className:zc.footer,children:I("div",{className:zc.credits,children:[I("p",{children:[t.copy," ©   ",n]}),I("p",{children:[t.desing,"  ",_("a",{href:"https://github.com/Luichix",target:"_blank",rel:"noreferrer",children:"Luichix"})]})]})})}var J={},Js={},Gr={},qr={},Sp="Expected a function",Lc=0/0,Gm="[object Symbol]",qm=/^\s+|\s+$/g,Zm=/^[-+]0x[0-9a-f]+$/i,Jm=/^0b[01]+$/i,eh=/^0o[0-7]+$/i,th=parseInt,nh=typeof lo=="object"&&lo&&lo.Object===Object&&lo,rh=typeof self=="object"&&self&&self.Object===Object&&self,oh=nh||rh||Function("return this")(),ih=Object.prototype,lh=ih.toString,ah=Math.max,sh=Math.min,Bl=function(){return oh.Date.now()};function uh(e,t,n){var r,o,i,l,a,s,u=0,d=!1,p=!1,h=!0;if(typeof e!="function")throw new TypeError(Sp);t=$c(t)||0,gi(n)&&(d=!!n.leading,p="maxWait"in n,i=p?ah($c(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h);function y(S){var k=r,T=o;return r=o=void 0,u=S,l=e.apply(T,k),l}function w(S){return u=S,a=setTimeout(f,t),d?y(S):l}function g(S){var k=S-s,T=S-u,B=t-k;return p?sh(B,i-T):B}function P(S){var k=S-s,T=S-u;return s===void 0||k>=t||k<0||p&&T>=i}function f(){var S=Bl();if(P(S))return c(S);a=setTimeout(f,g(S))}function c(S){return a=void 0,h&&r?y(S):(r=o=void 0,l)}function m(){a!==void 0&&clearTimeout(a),u=0,r=s=o=a=void 0}function v(){return a===void 0?l:c(Bl())}function E(){var S=Bl(),k=P(S);if(r=arguments,o=this,s=S,k){if(a===void 0)return w(s);if(p)return a=setTimeout(f,t),y(s)}return a===void 0&&(a=setTimeout(f,t)),l}return E.cancel=m,E.flush=v,E}function ch(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(Sp);return gi(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),uh(e,t,{leading:r,maxWait:t,trailing:o})}function gi(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function fh(e){return!!e&&typeof e=="object"}function dh(e){return typeof e=="symbol"||fh(e)&&lh.call(e)==Gm}function $c(e){if(typeof e=="number")return e;if(dh(e))return Lc;if(gi(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=gi(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(qm,"");var n=Jm.test(e);return n||eh.test(e)?th(e.slice(2),n?2:8):Zm.test(e)?Lc:+e}var ph=ch,Zr={};Object.defineProperty(Zr,"__esModule",{value:!0});Zr.addPassiveEventListener=function(t,n,r){var o=function(){var i=!1;try{var l=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("test",null,l)}catch{}return i}();t.addEventListener(n,r,o?{passive:!0}:!1)};Zr.removePassiveEventListener=function(t,n,r){t.removeEventListener(n,r)};Object.defineProperty(qr,"__esModule",{value:!0});var mh=ph,hh=yh(mh),vh=Zr;function yh(e){return e&&e.__esModule?e:{default:e}}var gh=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,hh.default)(t,n)},X={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,n){if(t){var r=gh(function(o){X.scrollHandler(t)},n);X.scrollSpyContainers.push(t),(0,vh.addPassiveEventListener)(t,"scroll",r)}},isMounted:function(t){return X.scrollSpyContainers.indexOf(t)!==-1},currentPositionX:function(t){if(t===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return t.scrollLeft},currentPositionY:function(t){if(t===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return t.scrollTop},scrollHandler:function(t){var n=X.scrollSpyContainers[X.scrollSpyContainers.indexOf(t)].spyCallbacks||[];n.forEach(function(r){return r(X.currentPositionX(t),X.currentPositionY(t))})},addStateHandler:function(t){X.spySetState.push(t)},addSpyHandler:function(t,n){var r=X.scrollSpyContainers[X.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(t),t(X.currentPositionX(n),X.currentPositionY(n))},updateStates:function(){X.spySetState.forEach(function(t){return t()})},unmount:function(t,n){X.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),X.spySetState&&X.spySetState.length&&X.spySetState.indexOf(t)>-1&&X.spySetState.splice(X.spySetState.indexOf(t),1),document.removeEventListener("scroll",X.scrollHandler)},update:function(){return X.scrollSpyContainers.forEach(function(t){return X.scrollHandler(t)})}};qr.default=X;var Gn={},Jr={};Object.defineProperty(Jr,"__esModule",{value:!0});var wh=function(t,n){var r=t.indexOf("#")===0?t.substring(1):t,o=r?"#"+r:"",i=window&&window.location,l=o?i.pathname+i.search+o:i.pathname+i.search;n?history.pushState(history.state,"",l):history.replaceState(history.state,"",l)},Sh=function(){return window.location.hash.replace(/^#/,"")},_h=function(t){return function(n){return t.contains?t!=n&&t.contains(n):!!(t.compareDocumentPosition(n)&16)}},kh=function(t){return getComputedStyle(t).position!=="static"},Ul=function(t,n){for(var r=t.offsetTop,o=t.offsetParent;o&&!n(o);)r+=o.offsetTop,o=o.offsetParent;return{offsetTop:r,offsetParent:o}},Eh=function(t,n,r){if(r)return t===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(t).position!=="static"?n.offsetLeft:n.offsetLeft-t.offsetLeft;if(t===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(kh(t)){if(n.offsetParent!==t){var o=function(d){return d===t||d===document},i=Ul(n,o),l=i.offsetTop,a=i.offsetParent;if(a!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return l}return n.offsetTop}if(n.offsetParent===t.offsetParent)return n.offsetTop-t.offsetTop;var s=function(d){return d===document};return Ul(n,s).offsetTop-Ul(t,s).offsetTop};Jr.default={updateHash:wh,getHash:Sh,filterElementInContainer:_h,scrollOffset:Eh};var Di={},eu={};Object.defineProperty(eu,"__esModule",{value:!0});eu.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};var tu={};Object.defineProperty(tu,"__esModule",{value:!0});var xh=Zr,Ch=["mousedown","mousewheel","touchmove","keydown"];tu.default={subscribe:function(t){return typeof document<"u"&&Ch.forEach(function(n){return(0,xh.addPassiveEventListener)(document,n,t)})}};var eo={};Object.defineProperty(eo,"__esModule",{value:!0});var Ya={registered:{},scrollEvent:{register:function(t,n){Ya.registered[t]=n},remove:function(t){Ya.registered[t]=null}}};eo.default=Ya;Object.defineProperty(Di,"__esModule",{value:!0});var Ph=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oh=Jr;Fi(Oh);var Th=eu,Mc=Fi(Th),Nh=tu,zh=Fi(Nh),Lh=eo,it=Fi(Lh);function Fi(e){return e&&e.__esModule?e:{default:e}}var _p=function(t){return Mc.default[t.smooth]||Mc.default.defaultEasing},$h=function(t){return typeof t=="function"?t:function(){return t}},Mh=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},Xa=function(){return Mh()||function(e,t,n){window.setTimeout(e,n||1e3/60,new Date().getTime())}}(),kp=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},Ep=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,o=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:o?document.documentElement.scrollLeft:document.body.scrollLeft},xp=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,o=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:o?document.documentElement.scrollTop:document.body.scrollTop},Rh=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,o=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,o.clientWidth,o.scrollWidth,o.offsetWidth)},Ih=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,o=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)},jh=function e(t,n,r){var o=n.data;if(!n.ignoreCancelEvents&&o.cancel){it.default.registered.end&&it.default.registered.end(o.to,o.target,o.currentPositionY);return}if(o.delta=Math.round(o.targetPosition-o.startPosition),o.start===null&&(o.start=r),o.progress=r-o.start,o.percent=o.progress>=o.duration?1:t(o.progress/o.duration),o.currentPosition=o.startPosition+Math.ceil(o.delta*o.percent),o.containerElement&&o.containerElement!==document&&o.containerElement!==document.body?n.horizontal?o.containerElement.scrollLeft=o.currentPosition:o.containerElement.scrollTop=o.currentPosition:n.horizontal?window.scrollTo(o.currentPosition,0):window.scrollTo(0,o.currentPosition),o.percent<1){var i=e.bind(null,t,n);Xa.call(window,i);return}it.default.registered.end&&it.default.registered.end(o.to,o.target,o.currentPosition)},nu=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},to=function(t,n,r,o){if(n.data=n.data||kp(),window.clearTimeout(n.data.delayTimeout),zh.default.subscribe(function(){n.data.cancel=!0}),nu(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?Ep(n):xp(n),n.data.targetPosition=n.absolute?t:t+n.data.startPosition,n.data.startPosition===n.data.targetPosition){it.default.registered.end&&it.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=$h(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=o;var i=_p(n),l=jh.bind(null,i,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){it.default.registered.begin&&it.default.registered.begin(n.data.to,n.data.target),Xa.call(window,l)},n.delay);return}it.default.registered.begin&&it.default.registered.begin(n.data.to,n.data.target),Xa.call(window,l)},Hi=function(t){return t=Ph({},t),t.data=t.data||kp(),t.absolute=!0,t},Dh=function(t){to(0,Hi(t))},Fh=function(t,n){to(t,Hi(n))},Hh=function(t){t=Hi(t),nu(t),to(t.horizontal?Rh(t):Ih(t),t)},Ah=function(t,n){n=Hi(n),nu(n);var r=n.horizontal?Ep(n):xp(n);to(t+r,n)};Di.default={animateTopScroll:to,getAnimationType:_p,scrollToTop:Dh,scrollToBottom:Hh,scrollTo:Fh,scrollMore:Ah};Object.defineProperty(Gn,"__esModule",{value:!0});var Vh=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bh=Jr,Uh=ru(Bh),Wh=Di,Qh=ru(Wh),bh=eo,Co=ru(bh);function ru(e){return e&&e.__esModule?e:{default:e}}var Po={},Rc=void 0;Gn.default={unmount:function(){Po={}},register:function(t,n){Po[t]=n},unregister:function(t){delete Po[t]},get:function(t){return Po[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return Rc=t},getActiveLink:function(){return Rc},scrollTo:function(t,n){var r=this.get(t);if(!r){console.warn("target Element not found");return}n=Vh({},n,{absolute:!1});var o=n.containerId,i=n.container,l=void 0;o?l=document.getElementById(o):i&&i.nodeType?l=i:l=document,n.absolute=!0;var a=n.horizontal,s=Uh.default.scrollOffset(l,r,a)+(n.offset||0);if(!n.smooth){Co.default.registered.begin&&Co.default.registered.begin(t,r),l===document?n.horizontal?window.scrollTo(s,0):window.scrollTo(0,s):l.scrollTop=s,Co.default.registered.end&&Co.default.registered.end(t,r);return}Qh.default.animateTopScroll(s,n,t,r)}};var Qn={},Yh={get exports(){return Qn},set exports(e){Qn=e}},Xh="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Kh=Xh,Gh=Kh;function Cp(){}function Pp(){}Pp.resetWarningCache=Cp;var qh=function(){function e(r,o,i,l,a,s){if(s!==Gh){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Pp,resetWarningCache:Cp};return n.PropTypes=n,n};Yh.exports=qh();var Ai={};Object.defineProperty(Ai,"__esModule",{value:!0});var Zh=Jr,Wl=Jh(Zh);function Jh(e){return e&&e.__esModule?e:{default:e}}var ev={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,n){this.containers[t]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,n=this.getHash();n?window.setTimeout(function(){t.scrollTo(n,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,n){var r=this.scroller,o=r.get(t);if(o&&(n||t!==r.getActiveLink())){var i=this.containers[t]||document;r.scrollTo(t,{container:i})}},getHash:function(){return Wl.default.getHash()},changeHash:function(t,n){this.isInitialized()&&Wl.default.getHash()!==t&&Wl.default.updateHash(t,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};Ai.default=ev;Object.defineProperty(Gr,"__esModule",{value:!0});var Oo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tv=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),nv=z,Ic=no(nv),rv=qr,To=no(rv),ov=Gn,iv=no(ov),lv=Qn,b=no(lv),av=Ai,Pt=no(av);function no(e){return e&&e.__esModule?e:{default:e}}function sv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function uv(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function cv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var jc={to:b.default.string.isRequired,containerId:b.default.string,container:b.default.object,activeClass:b.default.string,activeStyle:b.default.object,spy:b.default.bool,horizontal:b.default.bool,smooth:b.default.oneOfType([b.default.bool,b.default.string]),offset:b.default.number,delay:b.default.number,isDynamic:b.default.bool,onClick:b.default.func,duration:b.default.oneOfType([b.default.number,b.default.func]),absolute:b.default.bool,onSetActive:b.default.func,onSetInactive:b.default.func,ignoreCancelEvents:b.default.bool,hashSpy:b.default.bool,saveHashHistory:b.default.bool,spyThrottle:b.default.number};Gr.default=function(e,t){var n=t||iv.default,r=function(i){cv(l,i);function l(a){sv(this,l);var s=uv(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,a));return o.call(s),s.state={active:!1},s}return tv(l,[{key:"getScrollSpyContainer",value:function(){var s=this.props.containerId,u=this.props.container;return s&&!u?document.getElementById(s):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var s=this.getScrollSpyContainer();To.default.isMounted(s)||To.default.mount(s,this.props.spyThrottle),this.props.hashSpy&&(Pt.default.isMounted()||Pt.default.mount(n),Pt.default.mapContainer(this.props.to,s)),To.default.addSpyHandler(this.spyHandler,s),this.setState({container:s})}}},{key:"componentWillUnmount",value:function(){To.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var s="";this.state&&this.state.active?s=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():s=this.props.className;var u={};this.state&&this.state.active?u=Oo({},this.props.style,this.props.activeStyle):u=Oo({},this.props.style);var d=Oo({},this.props);for(var p in jc)d.hasOwnProperty(p)&&delete d[p];return d.className=s,d.style=u,d.onClick=this.handleClick,Ic.default.createElement(e,d)}}]),l}(Ic.default.PureComponent),o=function(){var l=this;this.scrollTo=function(a,s){n.scrollTo(a,Oo({},l.state,s))},this.handleClick=function(a){l.props.onClick&&l.props.onClick(a),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),l.scrollTo(l.props.to,l.props)},this.spyHandler=function(a,s){var u=l.getScrollSpyContainer();if(!(Pt.default.isMounted()&&!Pt.default.isInitialized())){var d=l.props.horizontal,p=l.props.to,h=null,y=void 0,w=void 0;if(d){var g=0,P=0,f=0;if(u.getBoundingClientRect){var c=u.getBoundingClientRect();f=c.left}if(!h||l.props.isDynamic){if(h=n.get(p),!h)return;var m=h.getBoundingClientRect();g=m.left-f+a,P=g+m.width}var v=a-l.props.offset;y=v>=Math.floor(g)&&v<Math.floor(P),w=v<Math.floor(g)||v>=Math.floor(P)}else{var E=0,S=0,k=0;if(u.getBoundingClientRect){var T=u.getBoundingClientRect();k=T.top}if(!h||l.props.isDynamic){if(h=n.get(p),!h)return;var B=h.getBoundingClientRect();E=B.top-k+s,S=E+B.height}var $=s-l.props.offset;y=$>=Math.floor(E)&&$<Math.floor(S),w=$<Math.floor(E)||$>=Math.floor(S)}var Pe=n.getActiveLink();if(w){if(p===Pe&&n.setActiveLink(void 0),l.props.hashSpy&&Pt.default.getHash()===p){var xt=l.props.saveHashHistory,Xt=xt===void 0?!1:xt;Pt.default.changeHash("",Xt)}l.props.spy&&l.state.active&&(l.setState({active:!1}),l.props.onSetInactive&&l.props.onSetInactive(p,h))}if(y&&(Pe!==p||l.state.active===!1)){n.setActiveLink(p);var Jn=l.props.saveHashHistory,dl=Jn===void 0?!1:Jn;l.props.hashSpy&&Pt.default.changeHash(p,dl),l.props.spy&&(l.setState({active:!0}),l.props.onSetActive&&l.props.onSetActive(p,h))}}}};return r.propTypes=jc,r.defaultProps={offset:0},r};Object.defineProperty(Js,"__esModule",{value:!0});var fv=z,Dc=Op(fv),dv=Gr,pv=Op(dv);function Op(e){return e&&e.__esModule?e:{default:e}}function mv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fc(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function hv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var vv=function(e){hv(t,e);function t(){var n,r,o,i;mv(this,t);for(var l=arguments.length,a=Array(l),s=0;s<l;s++)a[s]=arguments[s];return i=(r=(o=Fc(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(a))),o),o.render=function(){return Dc.default.createElement("a",o.props,o.props.children)},r),Fc(o,i)}return t}(Dc.default.Component);Js.default=(0,pv.default)(vv);var ou={};Object.defineProperty(ou,"__esModule",{value:!0});var yv=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),gv=z,Hc=Tp(gv),wv=Gr,Sv=Tp(wv);function Tp(e){return e&&e.__esModule?e:{default:e}}function _v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function kv(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Ev(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var xv=function(e){Ev(t,e);function t(){return _v(this,t),kv(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return yv(t,[{key:"render",value:function(){return Hc.default.createElement("input",this.props,this.props.children)}}]),t}(Hc.default.Component);ou.default=(0,Sv.default)(xv);var iu={},Vi={};Object.defineProperty(Vi,"__esModule",{value:!0});var Cv=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pv=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ov=z,Ac=Bi(Ov),Tv=Er;Bi(Tv);var Nv=Gn,Vc=Bi(Nv),zv=Qn,Bc=Bi(zv);function Bi(e){return e&&e.__esModule?e:{default:e}}function Lv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Mv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Vi.default=function(e){var t=function(n){Mv(r,n);function r(o){Lv(this,r);var i=$v(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,o));return i.childBindings={domNode:null},i}return Pv(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(i){this.props.name!==i.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Vc.default.unregister(this.props.name)}},{key:"registerElems",value:function(i){Vc.default.register(i,this.childBindings.domNode)}},{key:"render",value:function(){return Ac.default.createElement(e,Cv({},this.props,{parentBindings:this.childBindings}))}}]),r}(Ac.default.Component);return t.propTypes={name:Bc.default.string,id:Bc.default.string},t};Object.defineProperty(iu,"__esModule",{value:!0});var Uc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rv=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Iv=z,Wc=lu(Iv),jv=Vi,Dv=lu(jv),Fv=Qn,Qc=lu(Fv);function lu(e){return e&&e.__esModule?e:{default:e}}function Hv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Av(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Vv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Np=function(e){Vv(t,e);function t(){return Hv(this,t),Av(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return Rv(t,[{key:"render",value:function(){var r=this,o=Uc({},this.props);return o.parentBindings&&delete o.parentBindings,Wc.default.createElement("div",Uc({},o,{ref:function(l){r.props.parentBindings.domNode=l}}),this.props.children)}}]),t}(Wc.default.Component);Np.propTypes={name:Qc.default.string,id:Qc.default.string};iu.default=(0,Dv.default)(Np);var Ql=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bc=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function Yc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xc(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Kc(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var No=z,qt=qr,bl=Gn,K=Qn,Ot=Ai,Gc={to:K.string.isRequired,containerId:K.string,container:K.object,activeClass:K.string,spy:K.bool,smooth:K.oneOfType([K.bool,K.string]),offset:K.number,delay:K.number,isDynamic:K.bool,onClick:K.func,duration:K.oneOfType([K.number,K.func]),absolute:K.bool,onSetActive:K.func,onSetInactive:K.func,ignoreCancelEvents:K.bool,hashSpy:K.bool,spyThrottle:K.number},Bv={Scroll:function(t,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||bl,o=function(l){Kc(a,l);function a(s){Yc(this,a);var u=Xc(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,s));return i.call(u),u.state={active:!1},u}return bc(a,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,d=this.props.container;return u?document.getElementById(u):d&&d.nodeType?d:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();qt.isMounted(u)||qt.mount(u,this.props.spyThrottle),this.props.hashSpy&&(Ot.isMounted()||Ot.mount(r),Ot.mapContainer(this.props.to,u)),this.props.spy&&qt.addStateHandler(this.stateHandler),qt.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){qt.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var d=Ql({},this.props);for(var p in Gc)d.hasOwnProperty(p)&&delete d[p];return d.className=u,d.onClick=this.handleClick,No.createElement(t,d)}}]),a}(No.Component),i=function(){var a=this;this.scrollTo=function(s,u){r.scrollTo(s,Ql({},a.state,u))},this.handleClick=function(s){a.props.onClick&&a.props.onClick(s),s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault(),a.scrollTo(a.props.to,a.props)},this.stateHandler=function(){r.getActiveLink()!==a.props.to&&(a.state!==null&&a.state.active&&a.props.onSetInactive&&a.props.onSetInactive(),a.setState({active:!1}))},this.spyHandler=function(s){var u=a.getScrollSpyContainer();if(!(Ot.isMounted()&&!Ot.isInitialized())){var d=a.props.to,p=null,h=0,y=0,w=0;if(u.getBoundingClientRect){var g=u.getBoundingClientRect();w=g.top}if(!p||a.props.isDynamic){if(p=r.get(d),!p)return;var P=p.getBoundingClientRect();h=P.top-w+s,y=h+P.height}var f=s-a.props.offset,c=f>=Math.floor(h)&&f<Math.floor(y),m=f<Math.floor(h)||f>=Math.floor(y),v=r.getActiveLink();if(m)return d===v&&r.setActiveLink(void 0),a.props.hashSpy&&Ot.getHash()===d&&Ot.changeHash(),a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive()),qt.updateStates();if(c&&v!==d)return r.setActiveLink(d),a.props.hashSpy&&Ot.changeHash(d),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(d)),qt.updateStates()}}};return o.propTypes=Gc,o.defaultProps={offset:0},o},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){Kc(o,r);function o(i){Yc(this,o);var l=Xc(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,i));return l.childBindings={domNode:null},l}return bc(o,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(l){this.props.name!==l.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;bl.unregister(this.props.name)}},{key:"registerElems",value:function(l){bl.register(l,this.childBindings.domNode)}},{key:"render",value:function(){return No.createElement(t,Ql({},this.props,{parentBindings:this.childBindings}))}}]),o}(No.Component);return n.propTypes={name:K.string,id:K.string},n}},Uv=Bv;Object.defineProperty(J,"__esModule",{value:!0});J.Helpers=J.ScrollElement=J.ScrollLink=Ap=J.animateScroll=J.scrollSpy=J.Events=J.scroller=J.Element=J.Button=au=J.Link=void 0;var Wv=Js,zp=dt(Wv),Qv=ou,Lp=dt(Qv),bv=iu,$p=dt(bv),Yv=Gn,Mp=dt(Yv),Xv=eo,Rp=dt(Xv),Kv=qr,Ip=dt(Kv),Gv=Di,jp=dt(Gv),qv=Gr,Dp=dt(qv),Zv=Vi,Fp=dt(Zv),Jv=Uv,Hp=dt(Jv);function dt(e){return e&&e.__esModule?e:{default:e}}var au=J.Link=zp.default;J.Button=Lp.default;J.Element=$p.default;J.scroller=Mp.default;J.Events=Rp.default;J.scrollSpy=Ip.default;var Ap=J.animateScroll=jp.default;J.ScrollLink=Dp.default;J.ScrollElement=Fp.default;J.Helpers=Hp.default;J.default={Link:zp.default,Button:Lp.default,Element:$p.default,scroller:Mp.default,Events:Rp.default,scrollSpy:Ip.default,animateScroll:jp.default,ScrollLink:Dp.default,ScrollElement:Fp.default,Helpers:Hp.default};const ey={home:"Inicio",about:"Sobre mi",skills:"Habilidades",portfolio:"Portafolio",contact:"Contacto"},ty={home:"Inicio",about:"Sobre mi",skills:"Habilidades",portfolio:"Portafolio",contact:"Contacto"},ny={es:ey,en:ty},ry="/portafolio/assets/perfil-b4300901.png";var Vp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},qc=yt.createContext&&yt.createContext(Vp),Bt=globalThis&&globalThis.__assign||function(){return Bt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Bt.apply(this,arguments)},oy=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function Bp(e){return e&&e.map(function(t,n){return yt.createElement(t.tag,Bt({key:n},t.attr),Bp(t.child))})}function fe(e){return function(t){return yt.createElement(iy,Bt({attr:Bt({},e.attr)},t),Bp(e.child))}}function iy(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,l=oy(e,["attr","size","title"]),a=o||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),yt.createElement("svg",Bt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:Bt(Bt({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&yt.createElement("title",null,i),e.children)};return qc!==void 0?yt.createElement(qc.Consumer,null,function(n){return t(n)}):t(Vp)}function ly(e){return fe({tag:"svg",attr:{viewBox:"0 0 12 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"}}]})(e)}function ay(e){return fe({tag:"svg",attr:{viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M16 9l-3-3V2h-2v2L8 1 0 9h2l1 5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1l1-5h2zm-4 5H9v-4H7v4H4L2.81 7.69 8 2.5l5.19 5.19L12 14z"}}]})(e)}function sy(e){return fe({tag:"svg",attr:{viewBox:"0 0 14 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"}}]})(e)}function uy(e){return fe({tag:"svg",attr:{viewBox:"0 0 12 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"}}]})(e)}function cy(e){return fe({tag:"svg",attr:{viewBox:"0 0 15 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"}}]})(e)}function fy(e){return fe({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function dy(e){return fe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function py(e){return fe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"}}]})(e)}function my(e){return fe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"}}]})(e)}function hy(e){return fe({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M160 448c-25.6 0-51.2-22.4-64-32-64-44.8-83.2-60.8-96-70.4V480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V345.6c-12.8 9.6-32 25.6-96 70.4-12.8 9.6-38.4 32-64 32zm128-192H32c-17.67 0-32 14.33-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4 9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.67-14.33-32-32-32zm256-96H224c-17.67 0-32 14.33-32 32v32h96c33.21 0 60.59 25.42 63.71 57.82l.29-.22V416h192c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.29 28.71-64 64-64h224V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v192h96v-32z"}}]})(e)}function vy(e){return fe({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z",clipRule:"evenodd"}}]})(e)}function yy(e){return fe({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"}}]})(e)}function gy(e){return fe({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}}]})(e)}const wy="_sidenav_j283l_5",Sy="_container_j283l_25",_y="_image_j283l_71",ky="_title_j283l_91",Ey="_group_j283l_129",xy="_social_j283l_137",Cy="_menu_j283l_197",Py="_link_j283l_227",Oy="_active_j283l_265",Ty="_toggle_j283l_289",Ny="_back_j283l_323",zy="_show_j283l_379",Me={sidenav:wy,container:Sy,image:_y,title:ky,group:Ey,social:xy,menu:Cy,link:Py,active:Oy,toggle:Ty,back:Ny,show:zy};var Ka={},Ly={get exports(){return Ka},set exports(e){Ka=e}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var l=typeof i;if(l==="string"||l==="number")r.push(i);else if(Array.isArray(i)){if(i.length){var a=n.apply(null,i);a&&r.push(a)}}else if(l==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){r.push(i.toString());continue}for(var s in i)t.call(i,s)&&i[s]&&r.push(s)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Ly);const $y=Ka;function My({children:e,onToggle:t}){const n=document.getElementById("menu");return Zs.createPortal(_("button",{onClick:t,type:"button",className:Me.toggle,children:e}),n)}const Ry=z.forwardRef(function({scrollToTop:t},n){const r=document.getElementById("scroll");return Zs.createPortal(_("a",{onClick:t,className:Me.back,ref:n,children:_("i",{children:_(vy,{})})}),r)}),Iy=["home","about","skills","portfolio","contact"],jy=[_(ay,{},"home"),_(uy,{},"person"),_(ly,{},"file"),_(cy,{},"project"),_(sy,{},"mail")];function Dy(){const{language:e}=z.useContext(mn),t=ny[e],[n,r]=z.useState(!1),o=()=>{r(!n)},i=z.useRef(null),[l,a]=z.useState(0),s=()=>{Ap.scrollToTop()};return z.useEffect(()=>{const u=()=>a(window.pageYOffset);return window.removeEventListener("scroll",u),window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),l>500?i!=null&&i.current&&(i.current.style.opacity="1"):i!=null&&i.current&&(i.current.style.opacity="0"),I("header",{id:"header",className:$y(Me.sidenav,{[Me.show]:n}),children:[_(My,{onToggle:o,children:_("i",{children:n?_(gy,{}):_(yy,{})})}),_(Ry,{scrollToTop:s,ref:i}),_("div",{className:Me.container,children:I("div",{className:Me.profile,children:[_("img",{src:ry,alt:"Imagen de perfil",className:Me.image}),I("div",{className:Me.group,children:[_("h1",{className:Me.title,children:_("a",{href:"index.html",children:"Luichix"})}),I("div",{className:Me.social,children:[_("a",{href:"https://github.com/Luichix",target:"_blank",rel:"noreferrer",children:_(fy,{})}),_("a",{href:"https://wa.me/50584584479?text=Hola,%20te%20contacto%20desde%20tu%20pagina%20web",target:"_blank",rel:"noreferrer",children:_(py,{})}),_("a",{href:"https://www.linkedin.com/in/luisreynaldopch",target:"_blank",rel:"noreferrer",children:_(dy,{})}),_("a",{href:"mailto:luichix.rex@gmail.com",target:"_blank",rel:"noreferrer",children:_(hy,{})})]})]}),_("nav",{className:Me.menu,children:_("ul",{children:Iy.map((u,d)=>_("li",{children:I(au,{className:Me.link,activeClass:Me.active,to:u,spy:!0,smooth:"easeInOutQuint",offset:0,duration:1500,onClick:()=>r(!1),children:[_("i",{children:jy[d]}),_("span",{children:t[u]})]})},d))})})]})})]})}const Fy=z.createContext({theme:"light",changeTheme(){}}),Hy=({children:e})=>{const[t,n]=z.useState("light");z.useEffect(()=>{r()},[]);const r=async()=>{await wp("@themeNomina")==="dark"?n("dark"):(In("@themeNomina","light"),n("light"))},i={changeTheme:()=>{t==="dark"?(In("@themeNomina","light"),n("light")):(In("@themeNomina","dark"),n("dark"))},theme:t};return _(Fy.Provider,{value:i,children:e})};function Ay(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Vy(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var By=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Vy(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Ay(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),we="-ms-",wi="-moz-",D="-webkit-",Up="comm",su="rule",uu="decl",Uy="@import",Wp="@keyframes",Wy=Math.abs,Ui=String.fromCharCode,Qy=Object.assign;function by(e,t){return me(e,0)^45?(((t<<2^me(e,0))<<2^me(e,1))<<2^me(e,2))<<2^me(e,3):0}function Qp(e){return e.trim()}function Yy(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function Ga(e,t){return e.indexOf(t)}function me(e,t){return e.charCodeAt(t)|0}function Vr(e,t,n){return e.slice(t,n)}function lt(e){return e.length}function cu(e){return e.length}function zo(e,t){return t.push(e),e}function Xy(e,t){return e.map(t).join("")}var Wi=1,bn=1,bp=0,$e=0,re=0,qn="";function Qi(e,t,n,r,o,i,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Wi,column:bn,length:l,return:""}}function sr(e,t){return Qy(Qi("",null,null,"",null,null,0),e,{length:-e.length},t)}function Ky(){return re}function Gy(){return re=$e>0?me(qn,--$e):0,bn--,re===10&&(bn=1,Wi--),re}function De(){return re=$e<bp?me(qn,$e++):0,bn++,re===10&&(bn=1,Wi++),re}function ft(){return me(qn,$e)}function Qo(){return $e}function ro(e,t){return Vr(qn,e,t)}function Br(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Yp(e){return Wi=bn=1,bp=lt(qn=e),$e=0,[]}function Xp(e){return qn="",e}function bo(e){return Qp(ro($e-1,qa(e===91?e+2:e===40?e+1:e)))}function qy(e){for(;(re=ft())&&re<33;)De();return Br(e)>2||Br(re)>3?"":" "}function Zy(e,t){for(;--t&&De()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return ro(e,Qo()+(t<6&&ft()==32&&De()==32))}function qa(e){for(;De();)switch(re){case e:return $e;case 34:case 39:e!==34&&e!==39&&qa(re);break;case 40:e===41&&qa(e);break;case 92:De();break}return $e}function Jy(e,t){for(;De()&&e+re!==47+10;)if(e+re===42+42&&ft()===47)break;return"/*"+ro(t,$e-1)+"*"+Ui(e===47?e:De())}function eg(e){for(;!Br(ft());)De();return ro(e,$e)}function tg(e){return Xp(Yo("",null,null,null,[""],e=Yp(e),0,[0],e))}function Yo(e,t,n,r,o,i,l,a,s){for(var u=0,d=0,p=l,h=0,y=0,w=0,g=1,P=1,f=1,c=0,m="",v=o,E=i,S=r,k=m;P;)switch(w=c,c=De()){case 40:if(w!=108&&me(k,p-1)==58){Ga(k+=F(bo(c),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:k+=bo(c);break;case 9:case 10:case 13:case 32:k+=qy(w);break;case 92:k+=Zy(Qo()-1,7);continue;case 47:switch(ft()){case 42:case 47:zo(ng(Jy(De(),Qo()),t,n),s);break;default:k+="/"}break;case 123*g:a[u++]=lt(k)*f;case 125*g:case 59:case 0:switch(c){case 0:case 125:P=0;case 59+d:y>0&&lt(k)-p&&zo(y>32?Jc(k+";",r,n,p-1):Jc(F(k," ","")+";",r,n,p-2),s);break;case 59:k+=";";default:if(zo(S=Zc(k,t,n,u,d,o,a,m,v=[],E=[],p),i),c===123)if(d===0)Yo(k,t,S,S,v,i,p,a,E);else switch(h===99&&me(k,3)===110?100:h){case 100:case 109:case 115:Yo(e,S,S,r&&zo(Zc(e,S,S,0,0,o,a,m,o,v=[],p),E),o,E,p,a,r?v:E);break;default:Yo(k,S,S,S,[""],E,0,a,E)}}u=d=y=0,g=f=1,m=k="",p=l;break;case 58:p=1+lt(k),y=w;default:if(g<1){if(c==123)--g;else if(c==125&&g++==0&&Gy()==125)continue}switch(k+=Ui(c),c*g){case 38:f=d>0?1:(k+="\f",-1);break;case 44:a[u++]=(lt(k)-1)*f,f=1;break;case 64:ft()===45&&(k+=bo(De())),h=ft(),d=p=lt(m=k+=eg(Qo())),c++;break;case 45:w===45&&lt(k)==2&&(g=0)}}return i}function Zc(e,t,n,r,o,i,l,a,s,u,d){for(var p=o-1,h=o===0?i:[""],y=cu(h),w=0,g=0,P=0;w<r;++w)for(var f=0,c=Vr(e,p+1,p=Wy(g=l[w])),m=e;f<y;++f)(m=Qp(g>0?h[f]+" "+c:F(c,/&\f/g,h[f])))&&(s[P++]=m);return Qi(e,t,n,o===0?su:a,s,u,d)}function ng(e,t,n){return Qi(e,t,n,Up,Ui(Ky()),Vr(e,2,-2),0)}function Jc(e,t,n,r){return Qi(e,t,n,uu,Vr(e,0,r),Vr(e,r+1,-1),r)}function jn(e,t){for(var n="",r=cu(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function rg(e,t,n,r){switch(e.type){case Uy:case uu:return e.return=e.return||e.value;case Up:return"";case Wp:return e.return=e.value+"{"+jn(e.children,r)+"}";case su:e.value=e.props.join(",")}return lt(n=jn(e.children,r))?e.return=e.value+"{"+n+"}":""}function og(e){var t=cu(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function ig(e){return function(t){t.root||(t=t.return)&&e(t)}}function lg(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var ag=function(t,n,r){for(var o=0,i=0;o=i,i=ft(),o===38&&i===12&&(n[r]=1),!Br(i);)De();return ro(t,$e)},sg=function(t,n){var r=-1,o=44;do switch(Br(o)){case 0:o===38&&ft()===12&&(n[r]=1),t[r]+=ag($e-1,n,r);break;case 2:t[r]+=bo(o);break;case 4:if(o===44){t[++r]=ft()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Ui(o)}while(o=De());return t},ug=function(t,n){return Xp(sg(Yp(t),n))},ef=new WeakMap,cg=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!ef.get(r))&&!o){ef.set(t,!0);for(var i=[],l=ug(n,i),a=r.props,s=0,u=0;s<l.length;s++)for(var d=0;d<a.length;d++,u++)t.props[u]=i[s]?l[s].replace(/&\f/g,a[d]):a[d]+" "+l[s]}}},fg=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Kp(e,t){switch(by(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+wi+e+we+e+e;case 6828:case 4268:return D+e+we+e+e;case 6165:return D+e+we+"flex-"+e+e;case 5187:return D+e+F(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+we+"flex-$1$2")+e;case 5443:return D+e+we+"flex-item-"+F(e,/flex-|-self/,"")+e;case 4675:return D+e+we+"flex-line-pack"+F(e,/align-content|flex-|-self/,"")+e;case 5548:return D+e+we+F(e,"shrink","negative")+e;case 5292:return D+e+we+F(e,"basis","preferred-size")+e;case 6060:return D+"box-"+F(e,"-grow","")+D+e+we+F(e,"grow","positive")+e;case 4554:return D+F(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(lt(e)-1-t>6)switch(me(e,t+1)){case 109:if(me(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+wi+(me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ga(e,"stretch")?Kp(F(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(me(e,t+1)!==115)break;case 6444:switch(me(e,lt(e)-3-(~Ga(e,"!important")&&10))){case 107:return F(e,":",":"+D)+e;case 101:return F(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+D+(me(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+we+"$2box$3")+e}break;case 5936:switch(me(e,t+11)){case 114:return D+e+we+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+we+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+we+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return D+e+we+e+e}return e}var dg=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case uu:t.return=Kp(t.value,t.length);break;case Wp:return jn([sr(t,{value:F(t.value,"@","@"+D)})],o);case su:if(t.length)return Xy(t.props,function(i){switch(Yy(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return jn([sr(t,{props:[F(i,/:(read-\w+)/,":"+wi+"$1")]})],o);case"::placeholder":return jn([sr(t,{props:[F(i,/:(plac\w+)/,":"+D+"input-$1")]}),sr(t,{props:[F(i,/:(plac\w+)/,":"+wi+"$1")]}),sr(t,{props:[F(i,/:(plac\w+)/,we+"input-$1")]})],o)}return""})}},pg=[dg],mg=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var P=g.getAttribute("data-emotion");P.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var o=t.stylisPlugins||pg,i={},l,a=[];l=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var P=g.getAttribute("data-emotion").split(" "),f=1;f<P.length;f++)i[P[f]]=!0;a.push(g)});var s,u=[cg,fg];{var d,p=[rg,ig(function(g){d.insert(g)})],h=og(u.concat(o,p)),y=function(P){return jn(tg(P),h)};s=function(P,f,c,m){d=c,y(P?P+"{"+f.styles+"}":f.styles),m&&(w.inserted[f.name]=!0)}}var w={key:n,sheet:new By({key:n,container:l,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:s};return w.sheet.hydrate(a),w},Za={},hg={get exports(){return Za},set exports(e){Za=e}},A={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var de=typeof Symbol=="function"&&Symbol.for,fu=de?Symbol.for("react.element"):60103,du=de?Symbol.for("react.portal"):60106,bi=de?Symbol.for("react.fragment"):60107,Yi=de?Symbol.for("react.strict_mode"):60108,Xi=de?Symbol.for("react.profiler"):60114,Ki=de?Symbol.for("react.provider"):60109,Gi=de?Symbol.for("react.context"):60110,pu=de?Symbol.for("react.async_mode"):60111,qi=de?Symbol.for("react.concurrent_mode"):60111,Zi=de?Symbol.for("react.forward_ref"):60112,Ji=de?Symbol.for("react.suspense"):60113,vg=de?Symbol.for("react.suspense_list"):60120,el=de?Symbol.for("react.memo"):60115,tl=de?Symbol.for("react.lazy"):60116,yg=de?Symbol.for("react.block"):60121,gg=de?Symbol.for("react.fundamental"):60117,wg=de?Symbol.for("react.responder"):60118,Sg=de?Symbol.for("react.scope"):60119;function Ve(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case fu:switch(e=e.type,e){case pu:case qi:case bi:case Xi:case Yi:case Ji:return e;default:switch(e=e&&e.$$typeof,e){case Gi:case Zi:case tl:case el:case Ki:return e;default:return t}}case du:return t}}}function Gp(e){return Ve(e)===qi}A.AsyncMode=pu;A.ConcurrentMode=qi;A.ContextConsumer=Gi;A.ContextProvider=Ki;A.Element=fu;A.ForwardRef=Zi;A.Fragment=bi;A.Lazy=tl;A.Memo=el;A.Portal=du;A.Profiler=Xi;A.StrictMode=Yi;A.Suspense=Ji;A.isAsyncMode=function(e){return Gp(e)||Ve(e)===pu};A.isConcurrentMode=Gp;A.isContextConsumer=function(e){return Ve(e)===Gi};A.isContextProvider=function(e){return Ve(e)===Ki};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===fu};A.isForwardRef=function(e){return Ve(e)===Zi};A.isFragment=function(e){return Ve(e)===bi};A.isLazy=function(e){return Ve(e)===tl};A.isMemo=function(e){return Ve(e)===el};A.isPortal=function(e){return Ve(e)===du};A.isProfiler=function(e){return Ve(e)===Xi};A.isStrictMode=function(e){return Ve(e)===Yi};A.isSuspense=function(e){return Ve(e)===Ji};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===bi||e===qi||e===Xi||e===Yi||e===Ji||e===vg||typeof e=="object"&&e!==null&&(e.$$typeof===tl||e.$$typeof===el||e.$$typeof===Ki||e.$$typeof===Gi||e.$$typeof===Zi||e.$$typeof===gg||e.$$typeof===wg||e.$$typeof===Sg||e.$$typeof===yg)};A.typeOf=Ve;(function(e){e.exports=A})(hg);var qp=Za,_g={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},kg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zp={};Zp[qp.ForwardRef]=_g;Zp[qp.Memo]=kg;var Eg=!0;function Jp(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var mu=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||Eg===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},e0=function(t,n,r){mu(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function xg(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Cg={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Pg=/[A-Z]|^ms/g,Og=/_EMO_([^_]+?)_([^]*?)_EMO_/g,t0=function(t){return t.charCodeAt(1)===45},tf=function(t){return t!=null&&typeof t!="boolean"},Yl=lg(function(e){return t0(e)?e:e.replace(Pg,"-$&").toLowerCase()}),nf=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Og,function(r,o,i){return at={name:o,styles:i,next:at},o})}return Cg[t]!==1&&!t0(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ur(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return at={name:n.name,styles:n.styles,next:at},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)at={name:r.name,styles:r.styles,next:at},r=r.next;var o=n.styles+";";return o}return Tg(e,t,n)}case"function":{if(e!==void 0){var i=at,l=n(e);return at=i,Ur(e,t,l)}break}}if(t==null)return n;var a=t[n];return a!==void 0?a:n}function Tg(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Ur(e,t,n[o])+";";else for(var i in n){var l=n[i];if(typeof l!="object")t!=null&&t[l]!==void 0?r+=i+"{"+t[l]+"}":tf(l)&&(r+=Yl(i)+":"+nf(i,l)+";");else if(Array.isArray(l)&&typeof l[0]=="string"&&(t==null||t[l[0]]===void 0))for(var a=0;a<l.length;a++)tf(l[a])&&(r+=Yl(i)+":"+nf(i,l[a])+";");else{var s=Ur(e,t,l);switch(i){case"animation":case"animationName":{r+=Yl(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var rf=/label:\s*([^\s;\n{]+)\s*(;|$)/g,at,hu=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,i="";at=void 0;var l=t[0];l==null||l.raw===void 0?(o=!1,i+=Ur(r,n,l)):i+=l[0];for(var a=1;a<t.length;a++)i+=Ur(r,n,t[a]),o&&(i+=l[a]);rf.lastIndex=0;for(var s="",u;(u=rf.exec(i))!==null;)s+="-"+u[1];var d=xg(i)+s;return{name:d,styles:i,next:at}},Ng=function(t){return t()},zg=Eu["useInsertionEffect"]?Eu["useInsertionEffect"]:!1,n0=zg||Ng,vu={}.hasOwnProperty,r0=z.createContext(typeof HTMLElement<"u"?mg({key:"css"}):null);r0.Provider;var o0=function(t){return z.forwardRef(function(n,r){var o=z.useContext(r0);return t(n,o,r)})},i0=z.createContext({}),Ja="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Lg=function(t,n){var r={};for(var o in n)vu.call(n,o)&&(r[o]=n[o]);return r[Ja]=t,r},$g=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return mu(n,r,o),n0(function(){return e0(n,r,o)}),null},Mg=o0(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[Ja],i=[r],l="";typeof e.className=="string"?l=Jp(t.registered,i,e.className):e.className!=null&&(l=e.className+" ");var a=hu(i,void 0,z.useContext(i0));l+=t.key+"-"+a.name;var s={};for(var u in e)vu.call(e,u)&&u!=="css"&&u!==Ja&&(s[u]=e[u]);return s.ref=n,s.className=l,z.createElement(z.Fragment,null,z.createElement($g,{cache:t,serialized:a,isStringTag:typeof o=="string"}),z.createElement(o,s))});function Zn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return hu(t)}var C=function(){var t=Zn.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Rg=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var i=t[r];if(i!=null){var l=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))l=e(i);else{l="";for(var a in i)i[a]&&a&&(l&&(l+=" "),l+=a)}break}default:l=i}l&&(o&&(o+=" "),o+=l)}}return o};function Ig(e,t,n){var r=[],o=Jp(e,r,n);return r.length<2?n:o+t(r)}var jg=function(t){var n=t.cache,r=t.serializedArr;return n0(function(){for(var o=0;o<r.length;o++)e0(n,r[o],!1)}),null},Xl=o0(function(e,t){var n=!1,r=[],o=function(){for(var u=arguments.length,d=new Array(u),p=0;p<u;p++)d[p]=arguments[p];var h=hu(d,t.registered);return r.push(h),mu(t,h,!1),t.key+"-"+h.name},i=function(){for(var u=arguments.length,d=new Array(u),p=0;p<u;p++)d[p]=arguments[p];return Ig(t.registered,o,Rg(d))},l={css:o,cx:i,theme:z.useContext(i0)},a=e.children(l);return n=!0,z.createElement(z.Fragment,null,z.createElement(jg,{cache:t,serializedArr:r}),a)});function es(){return es=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},es.apply(this,arguments)}function Dg(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ts(e,t)}function ts(e,t){return ts=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},ts(e,t)}function Fg(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var ns=new Map,Lo=new WeakMap,of=0,Hg=void 0;function Ag(e){return e?(Lo.has(e)||(of+=1,Lo.set(e,of.toString())),Lo.get(e)):"0"}function Vg(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?Ag(e.root):e[t])}).toString()}function Bg(e){var t=Vg(e),n=ns.get(t);if(!n){var r=new Map,o,i=new IntersectionObserver(function(l){l.forEach(function(a){var s,u=a.isIntersecting&&o.some(function(d){return a.intersectionRatio>=d});e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=u),(s=r.get(a.target))==null||s.forEach(function(d){d(u,a)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},ns.set(t,n)}return n}function l0(e,t,n,r){if(n===void 0&&(n={}),r===void 0&&(r=Hg),typeof window.IntersectionObserver>"u"&&r!==void 0){var o=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),function(){}}var i=Bg(n),l=i.id,a=i.observer,s=i.elements,u=s.get(e)||[];return s.has(e)||s.set(e,u),u.push(t),a.observe(e),function(){u.splice(u.indexOf(t),1),u.length===0&&(s.delete(e),a.unobserve(e)),s.size===0&&(a.disconnect(),ns.delete(l))}}var Ug=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function lf(e){return typeof e.children!="function"}var af=function(e){Dg(t,e);function t(r){var o;return o=e.call(this,r)||this,o.node=null,o._unobserveCb=null,o.handleNode=function(i){o.node&&(o.unobserve(),!i&&!o.props.triggerOnce&&!o.props.skip&&o.setState({inView:!!o.props.initialInView,entry:void 0})),o.node=i||null,o.observeNode()},o.handleChange=function(i,l){i&&o.props.triggerOnce&&o.unobserve(),lf(o.props)||o.setState({inView:i,entry:l}),o.props.onChange&&o.props.onChange(i,l)},o.state={inView:!!r.initialInView,entry:void 0},o}var n=t.prototype;return n.componentDidUpdate=function(o){(o.rootMargin!==this.props.rootMargin||o.root!==this.props.root||o.threshold!==this.props.threshold||o.skip!==this.props.skip||o.trackVisibility!==this.props.trackVisibility||o.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},n.componentWillUnmount=function(){this.unobserve(),this.node=null},n.observeNode=function(){if(!(!this.node||this.props.skip)){var o=this.props,i=o.threshold,l=o.root,a=o.rootMargin,s=o.trackVisibility,u=o.delay,d=o.fallbackInView;this._unobserveCb=l0(this.node,this.handleChange,{threshold:i,root:l,rootMargin:a,trackVisibility:s,delay:u},d)}},n.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},n.render=function(){if(!lf(this.props)){var o=this.state,i=o.inView,l=o.entry;return this.props.children({inView:i,entry:l,ref:this.handleNode})}var a=this.props,s=a.children,u=a.as,d=Fg(a,Ug);return z.createElement(u||"div",es({ref:this.handleNode},d),s)},t}(z.Component);function a0(e){var t,n=e===void 0?{}:e,r=n.threshold,o=n.delay,i=n.trackVisibility,l=n.rootMargin,a=n.root,s=n.triggerOnce,u=n.skip,d=n.initialInView,p=n.fallbackInView,h=n.onChange,y=z.useState(null),w=y[0],g=y[1],P=z.useRef(),f=z.useState({inView:!!d,entry:void 0}),c=f[0],m=f[1];P.current=h,z.useEffect(function(){if(!(u||!w)){var S;return S=l0(w,function(k,T){m({inView:k,entry:T}),P.current&&P.current(k,T),T.isIntersecting&&s&&S&&(S(),S=void 0)},{root:a,rootMargin:l,threshold:r,trackVisibility:i,delay:o},p),function(){S&&S()}}},[Array.isArray(r)?r.toString():r,w,a,l,s,u,i,p,o]);var v=(t=c.entry)==null?void 0:t.target;z.useEffect(function(){!w&&v&&!s&&!u&&m({inView:!!d,entry:void 0})},[w,v,s,u,d]);var E=[g,c.inView,c.entry];return E.ref=E[0],E.inView=E[1],E.entry=E[2],E}var rs={},Wg={get exports(){return rs},set exports(e){rs=e}},V={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yu=Symbol.for("react.element"),gu=Symbol.for("react.portal"),nl=Symbol.for("react.fragment"),rl=Symbol.for("react.strict_mode"),ol=Symbol.for("react.profiler"),il=Symbol.for("react.provider"),ll=Symbol.for("react.context"),Qg=Symbol.for("react.server_context"),al=Symbol.for("react.forward_ref"),sl=Symbol.for("react.suspense"),ul=Symbol.for("react.suspense_list"),cl=Symbol.for("react.memo"),fl=Symbol.for("react.lazy"),bg=Symbol.for("react.offscreen"),s0;s0=Symbol.for("react.module.reference");function Ke(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case yu:switch(e=e.type,e){case nl:case ol:case rl:case sl:case ul:return e;default:switch(e=e&&e.$$typeof,e){case Qg:case ll:case al:case fl:case cl:case il:return e;default:return t}}case gu:return t}}}V.ContextConsumer=ll;V.ContextProvider=il;V.Element=yu;V.ForwardRef=al;V.Fragment=nl;V.Lazy=fl;V.Memo=cl;V.Portal=gu;V.Profiler=ol;V.StrictMode=rl;V.Suspense=sl;V.SuspenseList=ul;V.isAsyncMode=function(){return!1};V.isConcurrentMode=function(){return!1};V.isContextConsumer=function(e){return Ke(e)===ll};V.isContextProvider=function(e){return Ke(e)===il};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===yu};V.isForwardRef=function(e){return Ke(e)===al};V.isFragment=function(e){return Ke(e)===nl};V.isLazy=function(e){return Ke(e)===fl};V.isMemo=function(e){return Ke(e)===cl};V.isPortal=function(e){return Ke(e)===gu};V.isProfiler=function(e){return Ke(e)===ol};V.isStrictMode=function(e){return Ke(e)===rl};V.isSuspense=function(e){return Ke(e)===sl};V.isSuspenseList=function(e){return Ke(e)===ul};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===nl||e===ol||e===rl||e===sl||e===ul||e===bg||typeof e=="object"&&e!==null&&(e.$$typeof===fl||e.$$typeof===cl||e.$$typeof===il||e.$$typeof===ll||e.$$typeof===al||e.$$typeof===s0||e.getModuleId!==void 0)};V.typeOf=Ke;(function(e){e.exports=V})(Wg);var Yg=F0;function se(e,t,n){return vu.call(t,"css")?_(Mg,Lg(e,t),n):_(e,t,n)}C`
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
`;var Xg=C`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Kg=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Gg=C`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,qg=C`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Zg=C`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,wu=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Jg=C`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e2=C`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,t2=C`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,n2=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,r2=C`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,o2=C`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,i2=C`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function l2({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=wu,iterationCount:o=1}){return Zn`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};
  `}function a2(e){return e==null}function s2(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}var Si=Zn`
  opacity: 0;
`,u2=Zn`
  display: inline-block;
  white-space: pre;
`,u0=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:i=0,keyframes:l=wu,triggerOnce:a=!1,css:s,className:u,style:d,childClassName:p,childStyle:h,children:y,onVisibilityChange:w}=e,g=z.useMemo(()=>l2({keyframes:l,duration:o}),[o,l]);return a2(y)?null:s2(y)?se(c2,{...e,animationStyles:g,children:String(y)}):rs.isFragment(y)?se(c0,{...e,animationStyles:g}):se(Yg,{children:z.Children.map(y,(P,f)=>{if(!z.isValidElement(P))return null;const c=[s,g],m=r+(t?f*o*n:0);switch(P.type){case"ol":case"ul":return se(Xl,{children:({cx:v})=>se(P.type,{...P.props,className:v(u,P.props.className),style:{...d,...P.props.style},children:se(u0,{...e,children:P.props.children})})});case"li":return se(af,{threshold:i,triggerOnce:a,onChange:w,children:({inView:v,ref:E})=>se(Xl,{children:({cx:S})=>se(P.type,{...P.props,ref:E,className:S(p,P.props.className),css:v?c:Si,style:{...h,...P.props.style,animationDelay:m+"ms"}})})});default:return se(af,{threshold:i,triggerOnce:a,onChange:w,children:({inView:v,ref:E})=>se("div",{ref:E,className:u,css:v?c:Si,style:{...d,animationDelay:m+"ms"},children:se(Xl,{children:({cx:S})=>se(P.type,{...P.props,className:S(p,P.props.className),style:{...h,...P.props.style}})})})})}})})},c2=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:i=1e3,fraction:l=0,triggerOnce:a=!1,css:s,className:u,style:d,children:p,onVisibilityChange:h}=e,{ref:y,inView:w}=a0({triggerOnce:a,threshold:l,onChange:h});return n?se("div",{ref:y,className:u,css:[s,u2],style:d,children:p.split("").map((g,P)=>se("span",{css:w?t:Si,style:{animationDelay:o+P*i*r+"ms"},children:g},P))}):se(c0,{...e,children:p})},c0=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,css:o,className:i,style:l,children:a,onVisibilityChange:s}=e,{ref:u,inView:d}=a0({triggerOnce:r,threshold:n,onChange:s});return se("div",{ref:u,className:i,css:d?[o,t]:Si,style:l,children:a})};C`
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
`;var f2=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,d2=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,p2=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,m2=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,h2=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,v2=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,y2=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,g2=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,w2=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,S2=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,_2=C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,k2=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,E2=C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function x2(e,t,n){switch(n){case"bottom-left":return t?d2:Kg;case"bottom-right":return t?p2:Gg;case"down":return e?t?h2:Zg:t?m2:qg;case"left":return e?t?y2:Jg:t?v2:wu;case"right":return e?t?w2:t2:t?g2:e2;case"top-left":return t?S2:n2;case"top-right":return t?_2:r2;case"up":return e?t?E2:i2:t?k2:o2;default:return t?f2:Xg}}var Dn=e=>{const{big:t=!1,direction:n,reverse:r=!1,...o}=e,i=z.useMemo(()=>x2(t,r,n),[t,n,r]);return se(u0,{keyframes:i,...o})};C`
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
`;Zn`
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
`;Zn`
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
`;const C2="_about_acbi0_1",P2="_container_acbi0_8",O2="_section_acbi0_17",T2="_figure_acbi0_52",N2="_imagen_acbi0_61",Kl={about:C2,container:P2,section:O2,figure:T2,imagen:N2},z2={title:"Sobre mí",subtitle:"Información sobre mi",job:"Soy Desarrollador Full Stack",comment:"En formación, licenciado en Administración de Empresas",me:"Soy un desarrollador Full Stack, con experiencia en desarrollo de aplicaciones web y móviles. Me gusta aprender nuevas tecnologías y frameworks para el desarrollo de aplicaciones. Me encanta trabajar en equipo y estar en constante aprendizaje.",salute:"Hola, mi nombre es Luis Reynaldo Pérez, soy nicaragüense, tengo actualmente ",age:"1995/09/24",resume:"años. Soy desarrollador FullStack Javascript, con enfasis en el desarrollo Front End mediante React.",goals:"En el 2020 estuve cursando una maestria en el INCAE, pero por motivos ajenos a mi voluntad, me vi obligado a supender los estudios, asi que me dedique a laborar en areas administrativas e ir mejorando mis conocimientos sobre analisis de datos y reanudando tambien mis estudios en desarrollo web."},L2={title:"Sobre mí",subtitle:"Información sobre mi",job:"Soy Desarrollador Full Stack",comment:"En formación, licenciado en Administración de Empresas",salute:"Hola, mi nombre es Luis Reynaldo Pérez, nicaragüense, tengo actualmente ",age:"1995/09/24",resume:"años. Soy desarrollador FullStack Javascript, con enfasis en el desarrollo front end de aplicaciones web y mobiles mediante React, me considero una persona con muchas capacidades para el desarrollo, aprendo rapidamente, siempre me enfoco en el cumplimiento de metas y me gusta trabajar en equipos.",goals:"Desde el 2017 inicie programando aplicaciones utilizando VBA de Excel, con el cual logre diseñar diversos sistemas de venta e inventario, nomina y contabilidad para algunas pequeñas y medianas empresas, mi perfil es multidisciplinario debido a que he cursado diversos programas de estudio en areas Administrativas.",me:"Actualmente me dedico al desarrollo de aplicaciones utilizando diversos lenguajes, frameworks y librerias como Typescript, Expo, Next, React, Graphql y más..."},$2={es:z2,en:L2};function M2(e){let t=new Date,n=new Date(e),r=t.getFullYear()-n.getFullYear(),o=t.getMonth()-n.getMonth();return(o<0||o===0&&t.getDate()<n.getDate())&&r--,r}function R2(){const{language:e}=z.useContext(mn),t=$2[e];return _("section",{id:"about",className:Kl.about,children:_("div",{className:Kl.container,children:I("div",{className:Kl.section,children:[_(Dn,{triggerOnce:!0,children:_("h2",{children:t.title})}),I(Dn,{triggerOnce:!0,children:[I("p",{children:[t.salute," ",M2(t.age)," ",t.resume]}),_("p",{children:t.goals})]})]})})})}const I2="_contact_5hl4c_1",j2="_content_5hl4c_21",D2="_title_5hl4c_33",F2="_section_5hl4c_77",H2="_container_5hl4c_103",A2="_info_5hl4c_117",V2="_group_5hl4c_133",B2="_tag_5hl4c_163",U2="_element_5hl4c_199",W2="_form_5hl4c_241",Q2="_data_5hl4c_257",Be={contact:I2,content:j2,title:D2,section:F2,container:H2,info:A2,group:V2,tag:B2,element:U2,form:W2,data:Q2},Wr={_origin:"https://api.emailjs.com"},b2=(e,t="https://api.emailjs.com")=>{Wr._userID=e,Wr._origin=t},f0=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class sf{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const d0=(e,t,n={})=>new Promise((r,o)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:l})=>{const a=new sf(l);a.status===200||a.text==="OK"?r(a):o(a)}),i.addEventListener("error",({target:l})=>{o(new sf(l))}),i.open("POST",Wr._origin+e,!0),Object.keys(n).forEach(l=>{i.setRequestHeader(l,n[l])}),i.send(t)}),Y2=(e,t,n,r)=>{const o=r||Wr._userID;f0(o,e,t);const i={lib_version:"3.10.0",user_id:o,service_id:e,template_id:t,template_params:n};return d0("/api/v1.0/email/send",JSON.stringify(i),{"Content-type":"application/json"})},X2=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},K2=(e,t,n,r)=>{const o=r||Wr._userID,i=X2(n);f0(o,e,t);const l=new FormData(i);return l.append("lib_version","3.10.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",o),d0("/api/v1.0/email/send-form",l)},G2={init:b2,send:Y2,sendForm:K2};function q2(e){return fe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"}},{tag:"path",attr:{d:"M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"}}]})(e)}function Z2(e){return fe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"}},{tag:"path",attr:{d:"M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"}}]})(e)}function J2(e){return fe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"}},{tag:"path",attr:{d:"M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"}}]})(e)}const e3={contact:"Nombre",email:"Correo",issue:"Asunto",message:"Mensaje",submit:"Enviar"},t3={contact:"Name",email:"email",issue:"Issue",message:"Message",submit:"Send"},n3={en:e3,es:t3},r3=[[_(Z2,{},"map"),"Ciudad: ","Chinandega, Nicaragua"],[_(J2,{},"phone"),"Teléfono: ","+ 505 8458-4479"],[_(q2,{},"email"),"Email: ","luisreynaldo.pch@gmail.com"]];function o3(){const{language:e}=z.useContext(mn),t=n3[e],[n,r]=z.useState(""),[o,i]=z.useState(""),[l,a]=z.useState(""),[s,u]=z.useState(""),d=p=>{p.preventDefault();const h={name:n,email:o,issue:l,message:s};G2.send("service_portfolio","template_portfolio",h,"cLLFrT38MYC7J_zBS").then(y=>{console.log(y.text)},y=>{console.log(y.text)}),r(""),i(""),a(""),u("")};return _("section",{id:"contact",className:Be.contact,children:I("div",{className:Be.content,children:[_(Dn,{children:_("h2",{className:Be.title,children:"Contacto"})}),I("div",{className:Be.container,children:[_(Dn,{children:I("div",{className:Be.info,children:[_("h3",{children:"Información de Contacto"}),_("div",{className:Be.group,children:r3.map((p,h)=>I("div",{className:Be.tag,children:[_("i",{children:p[0]}),I("div",{className:Be.element,children:[_("h4",{children:p[1]}),_("p",{children:p[2]})]})]},h))})]})}),_(Dn,{children:I("div",{className:Be.section,children:[_("h3",{children:"¡Envía un mensaje!"}),I("form",{onSubmit:d,className:Be.form,autoComplete:"off",children:[I("fieldset",{className:Be.data,children:[_("label",{htmlFor:"name",children:t.contact}),_("input",{id:"name",type:"text",required:!0,value:n,onChange:({target:p})=>r(p.value)}),_("label",{htmlFor:"email",children:t.email}),_("input",{id:"email",type:"text",required:!0,value:o,onChange:({target:p})=>i(p.value)}),_("label",{htmlFor:"issue",children:t.issue}),_("input",{id:"issue",type:"text",required:!0,value:l,onChange:({target:p})=>a(p.value)})]}),I("fieldset",{className:Be.data,children:[_("label",{htmlFor:"message",children:t.message}),_("textarea",{id:"message",required:!0,value:s,onChange:({target:p})=>u(p.value)}),_("button",{children:t.submit})]})]})]})})]})]})})}const i3={hi:"Hola,",name:"Soy Luis Reynaldo",job:"Desarollador React Front-End",contact:"Contáctame"},l3={hi:"Hola,",name:"Soy Luis Reynaldo",job:"Desarrollador Javascript",contact:"Contáctame"},a3={es:i3,en:l3},s3="_home_tjj6d_1",u3="_container_tjj6d_9",c3="_button_tjj6d_49",Gl={home:s3,container:u3,button:c3};function f3(){const{language:e}=z.useContext(mn),t=a3[e];return _("section",{id:"home",className:Gl.home,children:I("div",{className:Gl.container,children:[I("h1",{children:[t.hi," ",_("br",{}),t.name]}),_("h3",{children:t.job}),_(au,{className:Gl.button,to:"contact",spy:!0,smooth:"easeInOutQuint",offset:100,duration:1500,children:t.contact})]})})}const d3="_portfolio_zd7k8_1",p3="_section_zd7k8_17",m3="_title_zd7k8_27",h3="_container_zd7k8_73",$o={portfolio:d3,section:p3,title:m3,container:h3},v3=[{title:"Medical",ref:"Medical",link:"https://medical-web-app.vercel.app/",description:"Applicación médica como una herramienta útil y práctica para la gestion de citas y la administración de datos del paciente e historiales clinicos.",repository:"https://github.com/Luichix/medical-web"},{title:"Nomina",ref:"Nomina",link:"https://nomina-web.vercel.app/",description:"Una herramienta que permita a las empresas calcular y gestionar la nomina de pago de sus empleados, que permita el procesamiento de datos precisos y oportunos, considerando todos los requerimientos legales y politicas de la empresa.",repository:"https://github.com/Luichix/nomina-web"},{title:"Go-Digit",ref:"GoDigit",link:"https://godigit-app.firebaseapp.com/",description:"Aplicación de administración de chat bot, con el fin de mejorar la eficiencia y la efectividad en la atención al cliente, consiste en un panel de administración de preguntas y respuestas para el bot.",repository:"https://github.com/Luichix/chat-web"},{title:"Elina Closet",ref:"Elina",link:"https://clothes-server-production.up.railway.app/",description:"Una aplicacion de tienda de ropa para la demostración de mis habilidades tanto en el desarrollo de la interfaz de usuario como en la programación del lado del servidor. ",repository:"https://github.com/Luichix/clothes-server"},{title:"Fake Amazon Clone",ref:"Amazon",link:"https://fake-amazone-clone-luichix.vercel.app/",description:"Fake Amazon Clone es un proyecto que desarrollé para practicar mis habilidades en desarrollo web. Se trata de una página web que simula la funcionalidad y diseño de Amazon, pero con productos ficticios y sin la capacidad de hacer transacciones reales. ",repository:"https://github.com/Luichix/fake-amazone-clone"},{title:"Quesos El Rey",ref:"Quesos",link:"https://king-web-five.vercel.app/",description:"Pagina web sencilla, diseñada para una empresa familiar dedicada al procesamiento y comercialización de productos lácteos.",repository:"https://github.com/Luichix/king-web"},{title:"Barbershop",ref:"Barbershop",link:"https://barber-web.vercel.app/",description:"Mi proyecto de práctica de barbería es una landing page diseñada para promocionar los servicios de una barbería ficticia.",repository:"https://github.com/Luichix/barber-web"}],y3=[{title:"Medical",ref:"Medical",link:"https://medical-web-app.vercel.app/",description:"Applicación médica como una herramienta útil y práctica para la gestion de citas y la administración de datos del paciente e historiales clinicos.",repository:"https://github.com/Luichix/medical-web"},{title:"Nomina",ref:"Nomina",link:"https://nomina-web.vercel.app/",description:"Una herramienta que permita a las empresas calcular y gestionar la nomina de pago de sus empleados, que permita el procesamiento de datos precisos y oportunos, considerando todos los requerimientos legales y politicas de la empresa.",repository:"https://github.com/Luichix/nomina-web"},{title:"Go-Digit",ref:"GoDigit",link:"https://godigit-app.firebaseapp.com/",description:"Aplicación de administración de chat bot, con el fin de mejorar la eficiencia y la efectividad en la atención al cliente, consiste en un panel de administración de preguntas y respuestas para el bot.",repository:"https://github.com/Luichix/chat-web"},{title:"Elina Closet",ref:"Elina",link:"https://clothes-server-production.up.railway.app/",description:"Una aplicacion de tienda de ropa para la demostración de mis habilidades tanto en el desarrollo de la interfaz de usuario como en la programación del lado del servidor. ",repository:"https://github.com/Luichix/clothes-server"},{title:"Fake Amazon Clone",ref:"Amazon",link:"https://fake-amazone-clone-luichix.vercel.app/",description:"Fake Amazon Clone es un proyecto que desarrollé para practicar mis habilidades en desarrollo web. Se trata de una página web que simula la funcionalidad y diseño de Amazon, pero con productos ficticios y sin la capacidad de hacer transacciones reales. ",repository:"https://github.com/Luichix/fake-amazone-clone"},{title:"Quesos El Rey",ref:"Quesos",link:"https://king-web-five.vercel.app/",description:"Pagina web sencilla, diseñada para una empresa familiar dedicada al procesamiento y comercialización de productos lácteos.",repository:"https://github.com/Luichix/king-web"},{title:"Barbershop",ref:"Barbershop",link:"https://barber-web.vercel.app/",description:"Mi proyecto de práctica de barbería es una landing page diseñada para promocionar los servicios de una barbería ficticia.",repository:"https://github.com/Luichix/barber-web"}],g3={en:v3,es:y3},w3="_modal_1jjh2_1",S3="_off_1jjh2_27",_3="_content_1jjh2_35",k3="_close_1jjh2_65",E3="_title_1jjh2_103",x3="_text_1jjh2_119",C3="_link_1jjh2_137",ql={modal:w3,off:S3,content:_3,close:k3,title:E3,text:x3,link:C3},P3=z.forwardRef(function({children:t,onClose:n},r){const o=l=>l.stopPropagation(),i=document.getElementById("portal");return Zs.createPortal(_("article",{className:ql.modal,onClick:n,ref:r,children:I("div",{className:ql.content,onClick:o,children:[_("button",{className:ql.close,onClick:n,children:"×"}),t]})}),i)});function p0(e){return fe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}}]})(e)}const O3="_item_175ka_1",T3="_name_175ka_6",N3="_info_175ka_15",z3="_figure_175ka_21",L3="_image_175ka_30",$3="_links_175ka_57",M3="_text_175ka_82",vn={item:O3,name:T3,info:N3,figure:z3,image:L3,links:$3,text:M3},R3=({name:e,link:t,image:n,alt:r,repository:o})=>_("div",{className:vn.item,children:I("figure",{className:vn.figure,children:[_("img",{src:n,className:vn.image,alt:r}),I("div",{className:vn.info,children:[_("h4",{className:vn.name,children:e}),I("div",{className:vn.links,children:[_("a",{href:o,target:"_blank",rel:"noreferrer",children:_(p0,{})}),_("a",{href:t,target:"_blank",rel:"noreferrer",children:_(my,{})})]})]})]})}),I3="_header_14alc_1",j3="_links_14alc_8",D3="_title_14alc_15",F3="_details_14alc_38",H3="_detail_14alc_38",A3="_link_14alc_8",V3="_text_14alc_65",Zt={header:I3,links:j3,title:D3,details:F3,detail:H3,link:A3,text:V3};function B3(e){return fe({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"desc",attr:{},child:[]},{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"9"}},{tag:"line",attr:{x1:"3.6",y1:"9",x2:"20.4",y2:"9"}},{tag:"line",attr:{x1:"3.6",y1:"15",x2:"20.4",y2:"15"}},{tag:"path",attr:{d:"M11.5 3a17 17 0 0 0 0 18"}},{tag:"path",attr:{d:"M12.5 3a17 17 0 0 1 0 18"}}]})(e)}const U3=({title:e,repository:t,details:n=[],link:r})=>{const o=({label:i,value:l})=>_("div",{className:Zt.detail,children:I("p",{children:[I("span",{children:[i,":"]}),"  ",l]})});return I("div",{className:Zt.details,children:[I("div",{className:Zt.header,children:[_("h5",{className:Zt.title,children:e}),I("div",{className:Zt.links,children:[_("a",{className:Zt.link,href:t,target:"_blank",rel:"noreferrer",children:_(p0,{})}),_("a",{className:Zt.link,href:r,target:"_blank",rel:"noreferrer",children:_(B3,{})})]})]}),n.map((i,l)=>_(o,{label:i.label,value:i.value},l))]})},W3="/portafolio/assets/quesos-38551977.png",Q3="/portafolio/assets/elina-60cf9378.png",b3="/portafolio/assets/amazon-91e434ce.png",Y3="/portafolio/assets/barbershop-ef1bd7aa.png",X3="/portafolio/assets/godigit-47117e65.png",K3="/portafolio/assets/nomina-c9171cae.png",G3="/portafolio/assets/medical-e8673632.png",uf={Medical:G3,Quesos:W3,Elina:Q3,Amazon:b3,Barbershop:Y3,GoDigit:X3,Nomina:K3};function q3(){const{language:e}=z.useContext(mn),t=g3[e],[n,r]=z.useState(null),o=z.useRef(null),i=l=>{l.preventDefault(),o!=null&&o.current&&(o.current.style.display="none")};return I("section",{id:"portfolio",className:$o.portfolio,children:[_(P3,{onClose:i,ref:o,children:_(U3,{title:n==null?void 0:n.title,repository:n==null?void 0:n.repository,details:n==null?void 0:n.details,link:n==null?void 0:n.link})}),I("div",{className:$o.section,children:[_("h2",{className:$o.title,children:"Portafolio"}),_("div",{className:$o.container,children:_(Dn,{children:t.map((l,a)=>uf[l.ref]&&_(R3,{name:l.title,image:uf[l.ref],alt:l.title,repository:l.repository,link:l.link},a))})})]})]})}const Z3="_container_1eugv_5",J3="_section_1eugv_17",e5="_main_1eugv_27",Zl={container:Z3,section:J3,main:e5};function t5(){return _("div",{className:Zl.container,children:I("div",{className:Zl.section,children:[_(Dy,{}),I("main",{id:"main",className:Zl.main,children:[_(f3,{}),_(R2,{}),_(q3,{}),_(o3,{}),_(Km,{})]})]})})}Jl.createRoot(document.getElementById("root")).render(_(yt.StrictMode,{children:_(Qm,{children:_(Hy,{children:_(t5,{})})})}));
