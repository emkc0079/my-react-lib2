(function(b,x){typeof exports=="object"&&typeof module<"u"?x(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],x):(b=typeof globalThis<"u"?globalThis:b||self,x(b.SharedUILibrary={},b.require$$0))})(this,function(b,x){"use strict";var O={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X;function ve(){if(X)return p;X=1;var i=Symbol.for("react.transitional.element"),C=Symbol.for("react.fragment");function j(S,f,s){var E=null;if(s!==void 0&&(E=""+s),f.key!==void 0&&(E=""+f.key),"key"in f){s={};for(var _ in f)_!=="key"&&(s[_]=f[_])}else s=f;return f=s.ref,{$$typeof:i,type:S,key:E,ref:f!==void 0?f:null,props:s}}return p.Fragment=C,p.jsx=j,p.jsxs=j,p}var w={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B;function be(){return B||(B=1,process.env.NODE_ENV!=="production"&&function(){function i(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===he?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case je:return"Portal";case Q:return"Profiler";case Z:return"StrictMode";case W:return"Suspense";case U:return"SuspenseList"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case D:return(e.displayName||"Context")+".Provider";case K:return(e._context.displayName||"Context")+".Consumer";case $:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case q:return r=e.displayName||null,r!==null?r:i(e.type)||"Memo";case z:r=e._payload,e=e._init;try{return i(e(r))}catch{}}return null}function C(e){return""+e}function j(e){try{C(e);var r=!1}catch{r=!0}if(r){r=console;var o=r.error,n=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o.call(r,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",n),C(e)}}function S(){}function f(){if(R===0){oe=console.log,te=console.info,ne=console.warn,ae=console.error,ue=console.group,le=console.groupCollapsed,ie=console.groupEnd;var e={configurable:!0,enumerable:!0,value:S,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}R++}function s(){if(R--,R===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:m({},e,{value:oe}),info:m({},e,{value:te}),warn:m({},e,{value:ne}),error:m({},e,{value:ae}),group:m({},e,{value:ue}),groupCollapsed:m({},e,{value:le}),groupEnd:m({},e,{value:ie})})}0>R&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function E(e){if(G===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);G=r&&r[1]||"",fe=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+G+e+fe}function _(e,r){if(!e||J)return"";var o=H.get(e);if(o!==void 0)return o;J=!0,o=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var n=null;n=g.H,g.H=null,f();try{var u={DetermineComponentFrameRoot:function(){try{if(r){var v=function(){throw Error()};if(Object.defineProperty(v.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(v,[])}catch(d){var k=d}Reflect.construct(e,[],v)}else{try{v.call()}catch(d){k=d}e.call(v.prototype)}}else{try{throw Error()}catch(d){k=d}(v=e())&&typeof v.catch=="function"&&v.catch(function(){})}}catch(d){if(d&&k&&typeof d.stack=="string")return[d.stack,k.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var t=u.DetermineComponentFrameRoot(),c=t[0],y=t[1];if(c&&y){var l=c.split(`
`),T=y.split(`
`);for(t=a=0;a<l.length&&!l[a].includes("DetermineComponentFrameRoot");)a++;for(;t<T.length&&!T[t].includes("DetermineComponentFrameRoot");)t++;if(a===l.length||t===T.length)for(a=l.length-1,t=T.length-1;1<=a&&0<=t&&l[a]!==T[t];)t--;for(;1<=a&&0<=t;a--,t--)if(l[a]!==T[t]){if(a!==1||t!==1)do if(a--,t--,0>t||l[a]!==T[t]){var h=`
`+l[a].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),typeof e=="function"&&H.set(e,h),h}while(1<=a&&0<=t);break}}}finally{J=!1,g.H=n,s(),Error.prepareStackTrace=o}return l=(l=e?e.displayName||e.name:"")?E(l):"",typeof e=="function"&&H.set(e,l),l}function A(e){if(e==null)return"";if(typeof e=="function"){var r=e.prototype;return _(e,!(!r||!r.isReactComponent))}if(typeof e=="string")return E(e);switch(e){case W:return E("Suspense");case U:return E("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case $:return e=_(e.render,!1),e;case q:return A(e.type);case z:r=e._payload,e=e._init;try{return A(e(r))}catch{}}return""}function N(){var e=g.A;return e===null?null:e.getOwner()}function Te(e){if(re.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function _e(e,r){function o(){se||(se=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",r))}o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}function ye(){var e=i(this.type);return ce[e]||(ce[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function xe(e,r,o,n,u,a){return o=a.ref,e={$$typeof:Y,type:e,key:r,props:a,_owner:u},(o!==void 0?o:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:ye}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function F(e,r,o,n,u,a){if(typeof e=="string"||typeof e=="function"||e===M||e===Q||e===Z||e===W||e===U||e===Re||typeof e=="object"&&e!==null&&(e.$$typeof===z||e.$$typeof===q||e.$$typeof===D||e.$$typeof===K||e.$$typeof===$||e.$$typeof===Ce||e.getModuleId!==void 0)){var t=r.children;if(t!==void 0)if(n)if(V(t)){for(n=0;n<t.length;n++)L(t[n],e);Object.freeze&&Object.freeze(t)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else L(t,e)}else t="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(t+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?n="null":V(e)?n="array":e!==void 0&&e.$$typeof===Y?(n="<"+(i(e.type)||"Unknown")+" />",t=" Did you accidentally export a JSX literal instead of a component?"):n=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",n,t);if(re.call(r,"key")){t=i(e);var c=Object.keys(r).filter(function(l){return l!=="key"});n=0<c.length?"{key: someKey, "+c.join(": ..., ")+": ...}":"{key: someKey}",de[t+n]||(c=0<c.length?"{"+c.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,n,t,c,t),de[t+n]=!0)}if(t=null,o!==void 0&&(j(o),t=""+o),Te(r)&&(j(r.key),t=""+r.key),"key"in r){o={};for(var y in r)y!=="key"&&(o[y]=r[y])}else o=r;return t&&_e(o,typeof e=="function"?e.displayName||e.name||"Unknown":e),xe(e,t,a,u,N(),o)}function L(e,r){if(typeof e=="object"&&e&&e.$$typeof!==Se){if(V(e))for(var o=0;o<e.length;o++){var n=e[o];P(n)&&I(n,r)}else if(P(e))e._store&&(e._store.validated=1);else if(e===null||typeof e!="object"?o=null:(o=ee&&e[ee]||e["@@iterator"],o=typeof o=="function"?o:null),typeof o=="function"&&o!==e.entries&&(o=o.call(e),o!==e))for(;!(e=o.next()).done;)P(e.value)&&I(e.value,r)}}function P(e){return typeof e=="object"&&e!==null&&e.$$typeof===Y}function I(e,r){if(e._store&&!e._store.validated&&e.key==null&&(e._store.validated=1,r=pe(r),!Ee[r])){Ee[r]=!0;var o="";e&&e._owner!=null&&e._owner!==N()&&(o=null,typeof e._owner.tag=="number"?o=i(e._owner.type):typeof e._owner.name=="string"&&(o=e._owner.name),o=" It was passed a child from "+o+".");var n=g.getCurrentStack;g.getCurrentStack=function(){var u=A(e.type);return n&&(u+=n()||""),u},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',r,o),g.getCurrentStack=n}}function pe(e){var r="",o=N();return o&&(o=i(o.type))&&(r=`

Check the render method of \``+o+"`."),r||(e=i(e))&&(r=`

Check the top-level render call using <`+e+">."),r}var we=x,Y=Symbol.for("react.transitional.element"),je=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),D=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),Re=Symbol.for("react.offscreen"),ee=Symbol.iterator,he=Symbol.for("react.client.reference"),g=we.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=Object.prototype.hasOwnProperty,m=Object.assign,Ce=Symbol.for("react.client.reference"),V=Array.isArray,R=0,oe,te,ne,ae,ue,le,ie;S.__reactDisabledLog=!0;var G,fe,J=!1,H=new(typeof WeakMap=="function"?WeakMap:Map),Se=Symbol.for("react.client.reference"),se,ce={},de={},Ee={};w.Fragment=M,w.jsx=function(e,r,o,n,u){return F(e,r,o,!1,n,u)},w.jsxs=function(e,r,o,n,u){return F(e,r,o,!0,n,u)}}()),w}process.env.NODE_ENV==="production"?O.exports=ve():O.exports=be();var ge=O.exports;const me=({label:i})=>ge.jsx("div",{children:i});b.Text=me,Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});
