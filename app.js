var Fc=Object.create;var{getPrototypeOf:Bc,defineProperty:_l,getOwnPropertyNames:Wc}=Object;var Vc=Object.prototype.hasOwnProperty;var pt=(e,t,n)=>{n=e!=null?Fc(Bc(e)):{};let r=t||!e||!e.__esModule?_l(n,"default",{value:e,enumerable:!0}):n;for(let l of Wc(e))if(!Vc.call(r,l))_l(r,l,{get:()=>e[l],enumerable:!0});return r};var ur=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Yc=(e,t)=>{for(var n in t)_l(e,n,{get:t[n],enumerable:!0,configurable:!0,set:(r)=>t[n]=()=>r})};var Hc=(e,t)=>()=>(e&&(t=e(e=0)),t);var sn=ur((af)=>{var an=Symbol.for("react.element"),Kc=Symbol.for("react.portal"),$c=Symbol.for("react.fragment"),Qc=Symbol.for("react.strict_mode"),Xc=Symbol.for("react.profiler"),Jc=Symbol.for("react.provider"),Zc=Symbol.for("react.context"),qc=Symbol.for("react.forward_ref"),bc=Symbol.for("react.suspense"),ef=Symbol.for("react.memo"),tf=Symbol.for("react.lazy"),qu=Symbol.iterator;function nf(e){if(e===null||typeof e!=="object")return null;return e=qu&&e[qu]||e["@@iterator"],typeof e==="function"?e:null}var to={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},no=Object.assign,ro={};function Rt(e,t,n){this.props=e,this.context=t,this.refs=ro,this.updater=n||to}Rt.prototype.isReactComponent={};Rt.prototype.setState=function(e,t){if(typeof e!=="object"&&typeof e!=="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Rt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lo(){}lo.prototype=Rt.prototype;function Rl(e,t,n){this.props=e,this.context=t,this.refs=ro,this.updater=n||to}var zl=Rl.prototype=new lo;zl.constructor=Rl;no(zl,Rt.prototype);zl.isPureReactComponent=!0;var bu=Array.isArray,io=Object.prototype.hasOwnProperty,Gl={current:null},uo={key:!0,ref:!0,__self:!0,__source:!0};function oo(e,t,n){var r,l={},i=null,u=null;if(t!=null)for(r in t.ref!==void 0&&(u=t.ref),t.key!==void 0&&(i=""+t.key),t)io.call(t,r)&&!uo.hasOwnProperty(r)&&(l[r]=t[r]);var o=arguments.length-2;if(o===1)l.children=n;else if(1<o){for(var a=Array(o),f=0;f<o;f++)a[f]=arguments[f+2];l.children=a}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)l[r]===void 0&&(l[r]=o[r]);return{$$typeof:an,type:e,key:i,ref:u,props:l,_owner:Gl.current}}function rf(e,t){return{$$typeof:an,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Tl(e){return typeof e==="object"&&e!==null&&e.$$typeof===an}function lf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var eo=/\/+/g;function Ll(e,t){return typeof e==="object"&&e!==null&&e.key!=null?lf(""+e.key):t.toString(36)}function ar(e,t,n,r,l){var i=typeof e;if(i==="undefined"||i==="boolean")e=null;var u=!1;if(e===null)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case an:case Kc:u=!0}}if(u)return u=e,l=l(u),e=r===""?"."+Ll(u,0):r,bu(l)?(n="",e!=null&&(n=e.replace(eo,"$&/")+"/"),ar(l,t,n,"",function(f){return f})):l!=null&&(Tl(l)&&(l=rf(l,n+(!l.key||u&&u.key===l.key?"":(""+l.key).replace(eo,"$&/")+"/")+e)),t.push(l)),1;if(u=0,r=r===""?".":r+":",bu(e))for(var o=0;o<e.length;o++){i=e[o];var a=r+Ll(i,o);u+=ar(i,t,n,a,l)}else if(a=nf(e),typeof a==="function")for(e=a.call(e),o=0;!(i=e.next()).done;)i=i.value,a=r+Ll(i,o++),u+=ar(i,t,n,a,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function or(e,t,n){if(e==null)return e;var r=[],l=0;return ar(e,r,"","",function(i){return t.call(n,i,l++)}),r}function uf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){if(e._status===0||e._status===-1)e._status=1,e._result=n},function(n){if(e._status===0||e._status===-1)e._status=2,e._result=n}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ee={current:null},sr={transition:null},of={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:sr,ReactCurrentOwner:Gl};function ao(){throw Error("act(...) is not supported in production builds of React.")}af.Children={map:or,forEach:function(e,t,n){or(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return or(e,function(){t++}),t},toArray:function(e){return or(e,function(t){return t})||[]},only:function(e){if(!Tl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};af.Component=Rt;af.Fragment=$c;af.Profiler=Xc;af.PureComponent=Rl;af.StrictMode=Qc;af.Suspense=bc;af.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=of;af.act=ao;af.cloneElement=function(e,t,n){if(e===null||e===void 0)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=no({},e.props),l=e.key,i=e.ref,u=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,u=Gl.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(a in t)io.call(t,a)&&!uo.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&o!==void 0?o[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){o=Array(a);for(var f=0;f<a;f++)o[f]=arguments[f+2];r.children=o}return{$$typeof:an,type:e.type,key:l,ref:i,props:r,_owner:u}};af.createContext=function(e){return e={$$typeof:Zc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jc,_context:e},e.Consumer=e};af.createElement=oo;af.createFactory=function(e){var t=oo.bind(null,e);return t.type=e,t};af.createRef=function(){return{current:null}};af.forwardRef=function(e){return{$$typeof:qc,render:e}};af.isValidElement=Tl;af.lazy=function(e){return{$$typeof:tf,_payload:{_status:-1,_result:e},_init:uf}};af.memo=function(e,t){return{$$typeof:ef,type:e,compare:t===void 0?null:t}};af.startTransition=function(e){var t=sr.transition;sr.transition={};try{e()}finally{sr.transition=t}};af.unstable_act=ao;af.useCallback=function(e,t){return ee.current.useCallback(e,t)};af.useContext=function(e){return ee.current.useContext(e)};af.useDebugValue=function(){};af.useDeferredValue=function(e){return ee.current.useDeferredValue(e)};af.useEffect=function(e,t){return ee.current.useEffect(e,t)};af.useId=function(){return ee.current.useId()};af.useImperativeHandle=function(e,t,n){return ee.current.useImperativeHandle(e,t,n)};af.useInsertionEffect=function(e,t){return ee.current.useInsertionEffect(e,t)};af.useLayoutEffect=function(e,t){return ee.current.useLayoutEffect(e,t)};af.useMemo=function(e,t){return ee.current.useMemo(e,t)};af.useReducer=function(e,t,n){return ee.current.useReducer(e,t,n)};af.useRef=function(e){return ee.current.useRef(e)};af.useState=function(e){return ee.current.useState(e)};af.useSyncExternalStore=function(e,t,n){return ee.current.useSyncExternalStore(e,t,n)};af.useTransition=function(){return ee.current.useTransition()};af.version="18.3.1"});var ho=ur((Kf)=>{function Dl(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,l=e[r];if(0<cr(l,t))e[r]=t,e[n]=l,n=r;else break e}}function Se(e){return e.length===0?null:e[0]}function vr(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,l=e.length,i=l>>>1;r<i;){var u=2*(r+1)-1,o=e[u],a=u+1,f=e[a];if(0>cr(o,n))a<l&&0>cr(f,o)?(e[r]=f,e[a]=n,r=a):(e[r]=o,e[u]=n,r=u);else if(a<l&&0>cr(f,n))e[r]=f,e[a]=n,r=a;else break e}}return t}function cr(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}if(typeof performance==="object"&&typeof performance.now==="function")jl=performance,Kf.unstable_now=function(){return jl.now()};else fr=Date,Ml=fr.now(),Kf.unstable_now=function(){return fr.now()-Ml};var jl,fr,Ml,_e=[],He=[],Hf=1,pe=null,X=3,mr=!1,vt=!1,fn=!1,co=typeof setTimeout==="function"?setTimeout:null,fo=typeof clearTimeout==="function"?clearTimeout:null,so=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ul(e){for(var t=Se(He);t!==null;){if(t.callback===null)vr(He);else if(t.startTime<=e)vr(He),t.sortIndex=t.expirationTime,Dl(_e,t);else break;t=Se(He)}}function Fl(e){if(fn=!1,Ul(e),!vt)if(Se(_e)!==null)vt=!0,Wl(Bl);else{var t=Se(He);t!==null&&Vl(Fl,t.startTime-e)}}function Bl(e,t){vt=!1,fn&&(fn=!1,fo(dn),dn=-1),mr=!0;var n=X;try{Ul(t);for(pe=Se(_e);pe!==null&&(!(pe.expirationTime>t)||e&&!mo());){var r=pe.callback;if(typeof r==="function"){pe.callback=null,X=pe.priorityLevel;var l=r(pe.expirationTime<=t);t=Kf.unstable_now(),typeof l==="function"?pe.callback=l:pe===Se(_e)&&vr(_e),Ul(t)}else vr(_e);pe=Se(_e)}if(pe!==null)var i=!0;else{var u=Se(He);u!==null&&Vl(Fl,u.startTime-t),i=!1}return i}finally{pe=null,X=n,mr=!1}}var hr=!1,dr=null,dn=-1,po=5,vo=-1;function mo(){return Kf.unstable_now()-vo<po?!1:!0}function Il(){if(dr!==null){var e=Kf.unstable_now();vo=e;var t=!0;try{t=dr(!0,e)}finally{t?cn():(hr=!1,dr=null)}}else hr=!1}var cn;if(typeof so==="function")cn=function(){so(Il)};else if(typeof MessageChannel<"u")pr=new MessageChannel,Ol=pr.port2,pr.port1.onmessage=Il,cn=function(){Ol.postMessage(null)};else cn=function(){co(Il,0)};var pr,Ol;function Wl(e){dr=e,hr||(hr=!0,cn())}function Vl(e,t){dn=co(function(){e(Kf.unstable_now())},t)}Kf.unstable_IdlePriority=5;Kf.unstable_ImmediatePriority=1;Kf.unstable_LowPriority=4;Kf.unstable_NormalPriority=3;Kf.unstable_Profiling=null;Kf.unstable_UserBlockingPriority=2;Kf.unstable_cancelCallback=function(e){e.callback=null};Kf.unstable_continueExecution=function(){vt||mr||(vt=!0,Wl(Bl))};Kf.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):po=0<e?Math.floor(1000/e):5};Kf.unstable_getCurrentPriorityLevel=function(){return X};Kf.unstable_getFirstCallbackNode=function(){return Se(_e)};Kf.unstable_next=function(e){switch(X){case 1:case 2:case 3:var t=3;break;default:t=X}var n=X;X=t;try{return e()}finally{X=n}};Kf.unstable_pauseExecution=function(){};Kf.unstable_requestPaint=function(){};Kf.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=X;X=e;try{return t()}finally{X=n}};Kf.unstable_scheduleCallback=function(e,t,n){var r=Kf.unstable_now();switch(typeof n==="object"&&n!==null?(n=n.delay,n=typeof n==="number"&&0<n?r+n:r):n=r,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5000}return l=n+l,e={id:Hf++,callback:t,priorityLevel:e,startTime:n,expirationTime:l,sortIndex:-1},n>r?(e.sortIndex=n,Dl(He,e),Se(_e)===null&&e===Se(He)&&(fn?(fo(dn),dn=-1):fn=!0,Vl(Fl,n-r))):(e.sortIndex=l,Dl(_e,e),vt||mr||(vt=!0,Wl(Bl))),e};Kf.unstable_shouldYield=mo;Kf.unstable_wrapCallback=function(e){var t=X;return function(){var n=X;X=t;try{return e.apply(this,arguments)}finally{X=n}}}});var Xu={};Yc(Xu,{version:()=>Rc,unstable_renderSubtreeIntoContainer:()=>Lc,unstable_batchedUpdates:()=>_c,unmountComponentAtNode:()=>Cc,render:()=>Pc,hydrateRoot:()=>xc,hydrate:()=>Ec,flushSync:()=>Nc,findDOMNode:()=>kc,createRoot:()=>wc,createPortal:()=>Sc,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>Ac});function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _t(e,t){qt(e,t),qt(e+"Capture",t)}function qt(e,t){Mn[e]=t;for(e=0;e<t.length;e++)ka.add(t[e])}function dd(e){if(fi.call(go,e))return!0;if(fi.call(yo,e))return!1;if(fd.test(e))return go[e]=!0;return yo[e]=!0,!1}function pd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":if(r)return!1;if(n!==null)return!n.acceptsBooleans;return e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-";default:return!1}}function vd(e,t,n,r){if(t===null||typeof t>"u"||pd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function re(e,t,n,r,l,i,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=u}function uu(e){return e[1].toUpperCase()}function ou(e,t,n,r){var l=Q.hasOwnProperty(t)?Q[t]:null;if(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")vd(t,n,l,r)&&(n=null),r||l===null?dd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n)))}function pn(e){if(e===null||typeof e!=="object")return null;return e=Ao&&e[Ao]||e["@@iterator"],typeof e==="function"?e:null}function Sn(e){if(Yl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yl=t&&t[1]||""}return`
`+Yl+e}function Kl(e,t){if(!e||Hl)return"";Hl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack==="string"){for(var l=f.stack.split(`
`),i=r.stack.split(`
`),u=l.length-1,o=i.length-1;1<=u&&0<=o&&l[u]!==i[o];)o--;for(;1<=u&&0<=o;u--,o--)if(l[u]!==i[o]){if(u!==1||o!==1)do if(u--,o--,0>o||l[u]!==i[o]){var a=`
`+l[u].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=u&&0<=o);break}}}finally{Hl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Sn(e):""}function md(e){switch(e.tag){case 5:return Sn(e.type);case 16:return Sn("Lazy");case 13:return Sn("Suspense");case 19:return Sn("SuspenseList");case 0:case 2:case 15:return e=Kl(e.type,!1),e;case 11:return e=Kl(e.type.render,!1),e;case 1:return e=Kl(e.type,!0),e;default:return""}}function mi(e){if(e==null)return null;if(typeof e==="function")return e.displayName||e.name||null;if(typeof e==="string")return e;switch(e){case Dt:return"Fragment";case It:return"Portal";case di:return"Profiler";case au:return"StrictMode";case pi:return"Suspense";case vi:return"SuspenseList"}if(typeof e==="object")switch(e.$$typeof){case Ea:return(e.displayName||"Context")+".Consumer";case Na:return(e._context.displayName||"Context")+".Provider";case su:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cu:return t=e.displayName||null,t!==null?t:mi(e.type)||"Memo";case $e:t=e._payload,e=e._init;try{return mi(e(t))}catch(n){}}return null}function hd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mi(t);case 8:return t===au?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==="function")return t.displayName||t.name||null;if(typeof t==="string")return t}return null}function ot(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pa(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yd(e){var t=Pa(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get==="function"&&typeof n.set==="function"){var{get:l,set:i}=n;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(u){r=""+u,i.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gr(e){e._valueTracker||(e._valueTracker=yd(e))}function Ca(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Pa(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch(t){return e.body}}function hi(e,t){var n=t.checked;return j({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function So(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ot(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _a(e,t){t=t.checked,t!=null&&ou(e,"checked",t,!1)}function yi(e,t){_a(e,t);var n=ot(t.value),r=t.type;if(n!=null)if(r==="number"){if(n===0&&e.value===""||e.value!=n)e.value=""+n}else e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?gi(e,t.type,n):t.hasOwnProperty("defaultValue")&&gi(e,t.type,ot(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function gi(e,t,n){if(t!=="number"||Vr(e.ownerDocument)!==e)n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n)}function Kt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{n=""+ot(n),t=null;for(l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Ai(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return j({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ko(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(h(92));if(wn(n)){if(1<n.length)throw Error(h(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ot(n)}}function La(e,t){var n=ot(t.value),r=ot(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function No(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ra(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Si(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ra(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}function Un(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}function Ga(e,t,n){return t==null||typeof t==="boolean"||t===""?"":n||typeof t!=="number"||t===0||_n.hasOwnProperty(e)&&_n[e]?(""+t).trim():t+"px"}function Ta(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ga(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}function wi(e,t){if(t){if(Ad[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(typeof t.dangerouslySetInnerHTML!=="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!=="object")throw Error(h(62))}}function ki(e,t){if(e.indexOf("-")===-1)return typeof t.is==="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}function Eo(e){if(e=nr(e)){if(typeof Ei!=="function")throw Error(h(280));var t=e.stateNode;t&&(t=yl(t),Ei(e.stateNode,e.type,t))}}function Ia(e){$t?Qt?Qt.push(e):Qt=[e]:$t=e}function Da(){if($t){var e=$t,t=Qt;if(Qt=$t=null,Eo(e),t)for(e=0;e<t.length;e++)Eo(t[e])}}function ja(e,t){return e(t)}function Ma(){}function Ua(e,t,n){if($l)return e(t,n);$l=!0;try{return ja(e,t,n)}finally{if($l=!1,$t!==null||Qt!==null)Ma(),Da()}}function On(e,t){var n=e.stateNode;if(n===null)return null;var r=yl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!=="function")throw Error(h(231,t,typeof n));return n}function Sd(e,t,n,r,l,i,u,o,a){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(v){this.onError(v)}}function kd(e,t,n,r,l,i,u,o,a){Ln=!1,Yr=null,Sd.apply(wd,arguments)}function Nd(e,t,n,r,l,i,u,o,a){if(kd.apply(this,arguments),Ln){if(Ln){var f=Yr;Ln=!1,Yr=null}else throw Error(h(198));Hr||(Hr=!0,Pi=f)}}function Lt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Oa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xo(e){if(Lt(e)!==e)throw Error(h(188))}function Ed(e){var t=e.alternate;if(!t){if(t=Lt(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return xo(l),e;if(i===r)return xo(l),t;i=i.sibling}throw Error(h(188))}if(n.return!==r.return)n=l,r=i;else{for(var u=!1,o=l.child;o;){if(o===n){u=!0,n=l,r=i;break}if(o===r){u=!0,r=l,n=i;break}o=o.sibling}if(!u){for(o=i.child;o;){if(o===n){u=!0,n=i,r=l;break}if(o===r){u=!0,r=i,n=l;break}o=o.sibling}if(!u)throw Error(h(189))}}if(n.alternate!==r)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function Fa(e){return e=Ed(e),e!==null?Ba(e):null}function Ba(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ba(e);if(t!==null)return t;e=e.sibling}return null}function Ld(e){if(Ge&&typeof Ge.onCommitFiberRoot==="function")try{Ge.onCommitFiberRoot(pl,e,void 0,(e.current.flags&128)===128)}catch(t){}}function Gd(e){return e>>>=0,e===0?32:31-(Rd(e)/zd|0)|0}function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $r(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,u=n&268435455;if(u!==0){var o=u&~l;o!==0?r=kn(o):(i&=u,i!==0&&(r=kn(i)))}else u=n&~l,u!==0?r=kn(u):i!==0&&(r=kn(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xe(t),l=1<<n,r|=e[n],t&=~l;return r}function Td(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5000;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Id(e,t){for(var{suspendedLanes:n,pingedLanes:r,expirationTimes:l,pendingLanes:i}=e;0<i;){var u=31-xe(i),o=1<<u,a=l[u];if(a===-1){if((o&n)===0||(o&r)!==0)l[u]=Td(o,t)}else a<=t&&(e.expiredLanes|=o);i&=~o}}function Ci(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ha(){var e=Sr;return Sr<<=1,(Sr&4194240)===0&&(Sr=64),e}function Ql(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function er(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xe(t),e[t]=n}function Dd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-xe(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function pu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xe(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}function Ka(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}function Co(e,t){switch(e){case"focusin":case"focusout":be=null;break;case"dragenter":case"dragleave":et=null;break;case"mouseover":case"mouseout":tt=null;break;case"pointerover":case"pointerout":Fn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bn.delete(t.pointerId)}}function vn(e,t,n,r,l,i){if(e===null||e.nativeEvent!==i)return e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=nr(t),t!==null&&vu(t)),e;return e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e}function Md(e,t,n,r,l){switch(t){case"focusin":return be=vn(be,e,t,n,r,l),!0;case"dragenter":return et=vn(et,e,t,n,r,l),!0;case"mouseover":return tt=vn(tt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Fn.set(i,vn(Fn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Bn.set(i,vn(Bn.get(i)||null,e,t,n,r,l)),!0}return!1}function Za(e){var t=gt(e.target);if(t!==null){var n=Lt(t);if(n!==null){if(t=n.tag,t===13){if(t=Oa(n),t!==null){e.blockedOn=t,Ja(e.priority,function(){Qa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Li(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ni=r,n.target.dispatchEvent(r),Ni=null}else return t=nr(n),t!==null&&vu(t),e.blockedOn=n,!1;t.shift()}return!0}function _o(e,t,n){Gr(e)&&n.delete(t)}function Ud(){_i=!1,be!==null&&Gr(be)&&(be=null),et!==null&&Gr(et)&&(et=null),tt!==null&&Gr(tt)&&(tt=null),Fn.forEach(_o),Bn.forEach(_o)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,_i||(_i=!0,T.unstable_scheduleCallback(T.unstable_NormalPriority,Ud)))}function Wn(e){function t(l){return mn(l,e)}if(0<kr.length){mn(kr[0],e);for(var n=1;n<kr.length;n++){var r=kr[n];r.blockedOn===e&&(r.blockedOn=null)}}be!==null&&mn(be,e),et!==null&&mn(et,e),tt!==null&&mn(tt,e),Fn.forEach(t),Bn.forEach(t);for(n=0;n<Xe.length;n++)r=Xe[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xe.length&&(n=Xe[0],n.blockedOn===null);)Za(n),n.blockedOn===null&&Xe.shift()}function Od(e,t,n,r){var l=_,i=Xt.transition;Xt.transition=null;try{_=1,mu(e,t,n,r)}finally{_=l,Xt.transition=i}}function Fd(e,t,n,r){var l=_,i=Xt.transition;Xt.transition=null;try{_=4,mu(e,t,n,r)}finally{_=l,Xt.transition=i}}function mu(e,t,n,r){if(Qr){var l=Li(e,t,n,r);if(l===null)ei(e,t,r,Xr,n),Co(e,r);else if(Md(l,e,t,n,r))r.stopPropagation();else if(Co(e,r),t&4&&-1<jd.indexOf(e)){for(;l!==null;){var i=nr(l);if(i!==null&&$a(i),i=Li(e,t,n,r),i===null&&ei(e,t,r,Xr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else ei(e,t,r,null,n)}}function Li(e,t,n,r){if(Xr=null,e=fu(r),e=gt(e),e!==null)if(t=Lt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Oa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xr=e,null}function qa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cd()){case du:return 1;case Va:return 4;case Kr:case _d:return 16;case Ya:return 536870912;default:return 16}default:return 16}}function ba(){if(Tr)return Tr;var e,t=hu,n=t.length,r,l="value"in Ze?Ze.value:Ze.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var u=n-e;for(r=1;r<=u&&t[n-r]===l[i-r];r++);return Tr=l.slice(e,1<r?1-r:void 0)}function Ir(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nr(){return!0}function Lo(){return!1}function de(e){function t(n,r,l,i,u){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Nr:Lo,this.isPropagationStopped=Lo,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!=="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!=="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nr)},persist:function(){},isPersistent:Nr}),t}function bd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qd[e])?!!t[e]:!1}function gu(){return bd}function ts(e,t){switch(e){case"keyup":return sp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ns(e){return e=e.detail,typeof e==="object"&&"data"in e?e.data:null}function fp(e,t){switch(e){case"compositionend":return ns(t);case"keypress":if(t.which!==32)return null;return Io=!0,To;case"textInput":return e=t.data,e===To&&Io?null:e;default:return null}}function dp(e,t){if(jt)return e==="compositionend"||!Au&&ts(e,t)?(e=ba(),Tr=hu=Ze=null,jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return es&&t.locale!=="ko"?null:t.data;default:return null}}function Do(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pp[e.type]:t==="textarea"?!0:!1}function rs(e,t,n,r){Ia(r),t=Jr(t,"onChange"),0<t.length&&(n=new yu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}function vp(e){vs(e,0)}function ml(e){var t=Ot(e);if(Ca(t))return e}function mp(e,t){if(e==="change")return t}function jo(){zn&&(zn.detachEvent("onpropertychange",is),Vn=zn=null)}function is(e){if(e.propertyName==="value"&&ml(Vn)){var t=[];rs(t,Vn,e,fu(e)),Ua(vp,t)}}function hp(e,t,n){e==="focusin"?(jo(),zn=t,Vn=n,zn.attachEvent("onpropertychange",is)):e==="focusout"&&jo()}function yp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ml(Vn)}function gp(e,t){if(e==="click")return ml(t)}function Ap(e,t){if(e==="input"||e==="change")return ml(t)}function Sp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}function Yn(e,t){if(Ce(e,t))return!0;if(typeof e!=="object"||e===null||typeof t!=="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!fi.call(t,l)||!Ce(e[l],t[l]))return!1}return!0}function Mo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uo(e,t){var n=Mo(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mo(n)}}function us(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?us(e,t.parentNode):("contains"in e)?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function os(){for(var e=window,t=Vr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==="string"}catch(r){n=!1}if(n)e=t.contentWindow;else break;t=Vr(e.document)}return t}function Su(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wp(e){var t=os(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&us(n.ownerDocument.documentElement,n)){if(r!==null&&Su(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Uo(n,i);var u=Uo(n,r);l&&u&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}t=[];for(e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});typeof n.focus==="function"&&n.focus();for(n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}function Oo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zi||Mt==null||Mt!==Vr(r)||(r=Mt,("selectionStart"in r)&&Su(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gn&&Yn(Gn,r)||(Gn=r,r=Jr(Ri,"onSelect"),0<r.length&&(t=new yu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mt)))}function Er(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}function hl(e){if(ql[e])return ql[e];if(!Ut[e])return e;var t=Ut[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in as)return ql[e]=t[n];return e}function st(e,t){ps.set(e,t),_t(t,[e])}function Bo(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Nd(r,t,void 0,e),e.currentTarget=null}function vs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var u=r.length-1;0<=u;u--){var o=r[u],a=o.instance,f=o.currentTarget;if(o=o.listener,a!==i&&l.isPropagationStopped())break e;Bo(l,o,f),i=a}else for(u=0;u<r.length;u++){if(o=r[u],a=o.instance,f=o.currentTarget,o=o.listener,a!==i&&l.isPropagationStopped())break e;Bo(l,o,f),i=a}}}if(Hr)throw e=Pi,Hr=!1,Pi=null,e}function R(e,t){var n=t[Ui];n===void 0&&(n=t[Ui]=new Set);var r=e+"__bubble";n.has(r)||(ms(t,e,2,!1),n.add(r))}function bl(e,t,n){var r=0;t&&(r|=4),ms(n,e,r,t)}function Hn(e){if(!e[xr]){e[xr]=!0,ka.forEach(function(n){n!=="selectionchange"&&(Np.has(n)||bl(n,!1,e),bl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xr]||(t[xr]=!0,bl("selectionchange",!1,t))}}function ms(e,t,n,r){switch(qa(t)){case 1:var l=Od;break;case 4:l=Fd;break;default:l=mu}n=l.bind(null,t,n,e),l=void 0,!xi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ei(e,t,n,r,l){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var o=r.stateNode.containerInfo;if(o===l||o.nodeType===8&&o.parentNode===l)break;if(u===4)for(u=r.return;u!==null;){var a=u.tag;if(a===3||a===4){if(a=u.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l)return}u=u.return}for(;o!==null;){if(u=gt(o),u===null)return;if(a=u.tag,a===5||a===6){r=i=u;continue e}o=o.parentNode}}r=r.return}Ua(function(){var f=i,v=fu(n),m=[];e:{var p=ps.get(e);if(p!==void 0){var g=yu,S=e;switch(e){case"keypress":if(Ir(n)===0)break e;case"keydown":case"keyup":g=tp;break;case"focusin":S="focus",g=Zl;break;case"focusout":S="blur",g=Zl;break;case"beforeblur":case"afterblur":g=Zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ro;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Vd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=lp;break;case ss:case cs:case fs:g=Kd;break;case ds:g=up;break;case"scroll":g=Bd;break;case"wheel":g=ap;break;case"copy":case"cut":case"paste":g=Qd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Go}var w=(t&4)!==0,U=!w&&e==="scroll",c=w?p!==null?p+"Capture":null:p;w=[];for(var s=f,d;s!==null;){d=s;var y=d.stateNode;if(d.tag===5&&y!==null&&(d=y,c!==null&&(y=On(s,c),y!=null&&w.push(Kn(s,y,d)))),U)break;s=s.return}0<w.length&&(p=new g(p,S,null,n,v),m.push({event:p,listeners:w}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==Ni&&(S=n.relatedTarget||n.fromElement)&&(gt(S)||S[Fe]))break e;if(g||p){if(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,g){if(S=n.relatedTarget||n.toElement,g=f,S=S?gt(S):null,S!==null&&(U=Lt(S),S!==U||S.tag!==5&&S.tag!==6))S=null}else g=null,S=f;if(g!==S){if(w=Ro,y="onMouseLeave",c="onMouseEnter",s="mouse",e==="pointerout"||e==="pointerover")w=Go,y="onPointerLeave",c="onPointerEnter",s="pointer";if(U=g==null?p:Ot(g),d=S==null?p:Ot(S),p=new w(y,s+"leave",g,n,v),p.target=U,p.relatedTarget=d,y=null,gt(v)===f&&(w=new w(c,s+"enter",S,n,v),w.target=d,w.relatedTarget=U,y=w),U=y,g&&S)t:{w=g,c=S,s=0;for(d=w;d;d=Gt(d))s++;d=0;for(y=c;y;y=Gt(y))d++;for(;0<s-d;)w=Gt(w),s--;for(;0<d-s;)c=Gt(c),d--;for(;s--;){if(w===c||c!==null&&w===c.alternate)break t;w=Gt(w),c=Gt(c)}w=null}else w=null;g!==null&&Wo(m,p,g,w,!1),S!==null&&U!==null&&Wo(m,U,S,w,!0)}}}e:{if(p=f?Ot(f):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var k=mp;else if(Do(p))if(ls)k=Ap;else{k=yp;var N=hp}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=gp);if(k&&(k=k(e,f))){rs(m,k,n,v);break e}N&&N(e,p,f),e==="focusout"&&(N=p._wrapperState)&&N.controlled&&p.type==="number"&&gi(p,"number",p.value)}switch(N=f?Ot(f):window,e){case"focusin":if(Do(N)||N.contentEditable==="true")Mt=N,Ri=f,Gn=null;break;case"focusout":Gn=Ri=Mt=null;break;case"mousedown":zi=!0;break;case"contextmenu":case"mouseup":case"dragend":zi=!1,Oo(m,n,v);break;case"selectionchange":if(kp)break;case"keydown":case"keyup":Oo(m,n,v)}var E;if(Au)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else jt?ts(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");if(x&&(es&&n.locale!=="ko"&&(jt||x!=="onCompositionStart"?x==="onCompositionEnd"&&jt&&(E=ba()):(Ze=v,hu=("value"in Ze)?Ze.value:Ze.textContent,jt=!0)),N=Jr(f,x),0<N.length&&(x=new zo(x,e,null,n,v),m.push({event:x,listeners:N}),E?x.data=E:(E=ns(n),E!==null&&(x.data=E)))),E=cp?fp(e,n):dp(e,n))f=Jr(f,"onBeforeInput"),0<f.length&&(v=new zo("onBeforeInput","beforeinput",null,n,v),m.push({event:v,listeners:f}),v.data=E)}vs(m,t)})}function Kn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=On(e,n),i!=null&&r.unshift(Kn(e,i,l)),i=On(e,t),i!=null&&r.push(Kn(e,i,l))),e=e.return}return r}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e?e:null}function Wo(e,t,n,r,l){for(var i=t._reactName,u=[];n!==null&&n!==r;){var o=n,a=o.alternate,f=o.stateNode;if(a!==null&&a===r)break;o.tag===5&&f!==null&&(o=f,l?(a=On(n,i),a!=null&&u.unshift(Kn(n,a,o))):l||(a=On(n,i),a!=null&&u.push(Kn(n,a,o)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}function Vo(e){return(typeof e==="string"?e:""+e).replace(Ep,`
`).replace(xp,"")}function Pr(e,t,n){if(t=Vo(t),Vo(e)!==t&&n)throw Error(h(425))}function Zr(){}function ji(e,t){return e==="textarea"||e==="noscript"||typeof t.children==="string"||typeof t.children==="number"||typeof t.dangerouslySetInnerHTML==="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}function _p(e){setTimeout(function(){throw e})}function ti(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Wn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Wn(t)}function nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ho(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function gt(e){var t=e[ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Fe]||n[ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ho(e);e!==null;){if(n=e[ze])return n;e=Ho(e)}return t}e=n,n=e.parentNode}return null}function nr(e){return e=e[ze]||e[Fe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ot(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function yl(e){return e[$n]||null}function ct(e){return{current:e}}function z(e){0>Ft||(e.current=Oi[Ft],Oi[Ft]=null,Ft--)}function L(e,t){Ft++,Oi[Ft]=e.current,e.current=t}function bt(e,t){var n=e.type.contextTypes;if(!n)return at;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function oe(e){return e=e.childContextTypes,e!==null&&e!==void 0}function qr(){z(ue),z(b)}function Ko(e,t,n){if(b.current!==at)throw Error(h(168));L(b,t),L(ue,n)}function hs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!=="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(h(108,hd(e)||"Unknown",l));return j({},n,r)}function br(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||at,Nt=b.current,L(b,e),L(ue,ue.current),!0}function $o(e,t,n){var r=e.stateNode;if(!r)throw Error(h(169));n?(e=hs(e,t,Nt),r.__reactInternalMemoizedMergedChildContext=e,z(ue),z(b),L(b,e)):z(ue),L(ue,n)}function ys(e){De===null?De=[e]:De.push(e)}function zp(e){gl=!0,ys(e)}function ft(){if(!ni&&De!==null){ni=!0;var e=0,t=_;try{var n=De;for(_=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}De=null,gl=!1}catch(l){throw De!==null&&(De=De.slice(e+1)),Wa(du,ft),l}finally{_=t,ni=!1}}return null}function ht(e,t){Bt[Wt++]=tl,Bt[Wt++]=el,el=e,tl=t}function gs(e,t,n){ve[me++]=je,ve[me++]=Me,ve[me++]=Et,Et=e;var r=je;e=Me;var l=32-xe(r)-1;r&=~(1<<l),n+=1;var i=32-xe(t)+l;if(30<i){var u=l-l%5;i=(r&(1<<u)-1).toString(32),r>>=u,l-=u,je=1<<32-xe(t)+l|n<<l|r,Me=i+e}else je=1<<i|n<<l|r,Me=e}function wu(e){e.return!==null&&(ht(e,1),gs(e,1,0))}function ku(e){for(;e===el;)el=Bt[--Wt],Bt[Wt]=null,tl=Bt[--Wt],Bt[Wt]=null;for(;e===Et;)Et=ve[--me],ve[me]=null,Me=ve[--me],ve[me]=null,je=ve[--me],ve[me]=null}function As(e,t){var n=he(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Qo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,fe=e,ce=nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,fe=e,ce=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Et!==null?{id:je,overflow:Me}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=he(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,fe=e,ce=null,!0):!1;default:return!1}}function Fi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bi(e){if(G){var t=ce;if(t){var n=t;if(!Qo(e,t)){if(Fi(e))throw Error(h(418));t=nt(n.nextSibling);var r=fe;t&&Qo(e,t)?As(r,n):(e.flags=e.flags&-4097|2,G=!1,fe=e)}}else{if(Fi(e))throw Error(h(418));e.flags=e.flags&-4097|2,G=!1,fe=e}}}function Xo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;fe=e}function Cr(e){if(e!==fe)return!1;if(!G)return Xo(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ji(e.type,e.memoizedProps)),t&&(t=ce)){if(Fi(e))throw Ss(),Error(h(418));for(;t;)As(e,t),t=nt(t.nextSibling)}if(Xo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{e=e.nextSibling;for(t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ce=nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ce=null}}else ce=fe?nt(e.stateNode.nextSibling):null;return!0}function Ss(){for(var e=ce;e;)e=nt(e.nextSibling)}function en(){ce=fe=null,G=!1}function Nu(e){Ee===null?Ee=[e]:Ee.push(e)}function yn(e,t,n){if(e=n.ref,e!==null&&typeof e!=="function"&&typeof e!=="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var r=n.stateNode}if(!r)throw Error(h(147,e));var l=r,i=""+e;if(t!==null&&t.ref!==null&&typeof t.ref==="function"&&t.ref._stringRef===i)return t.ref;return t=function(u){var o=l.refs;u===null?delete o[i]:o[i]=u},t._stringRef=i,t}if(typeof e!=="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}function _r(e,t){throw e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Jo(e){var t=e._init;return t(e._payload)}function ws(e){function t(c,s){if(e){var d=c.deletions;d===null?(c.deletions=[s],c.flags|=16):d.push(s)}}function n(c,s){if(!e)return null;for(;s!==null;)t(c,s),s=s.sibling;return null}function r(c,s){for(c=new Map;s!==null;)s.key!==null?c.set(s.key,s):c.set(s.index,s),s=s.sibling;return c}function l(c,s){return c=ut(c,s),c.index=0,c.sibling=null,c}function i(c,s,d){if(c.index=d,!e)return c.flags|=1048576,s;if(d=c.alternate,d!==null)return d=d.index,d<s?(c.flags|=2,s):d;return c.flags|=2,s}function u(c){return e&&c.alternate===null&&(c.flags|=2),c}function o(c,s,d,y){if(s===null||s.tag!==6)return s=si(d,c.mode,y),s.return=c,s;return s=l(s,d),s.return=c,s}function a(c,s,d,y){var k=d.type;if(k===Dt)return v(c,s,d.props.children,y,d.key);if(s!==null&&(s.elementType===k||typeof k==="object"&&k!==null&&k.$$typeof===$e&&Jo(k)===s.type))return y=l(s,d.props),y.ref=yn(c,s,d),y.return=c,y;return y=Wr(d.type,d.key,d.props,null,c.mode,y),y.ref=yn(c,s,d),y.return=c,y}function f(c,s,d,y){if(s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation)return s=ci(d,c.mode,y),s.return=c,s;return s=l(s,d.children||[]),s.return=c,s}function v(c,s,d,y,k){if(s===null||s.tag!==7)return s=kt(d,c.mode,y,k),s.return=c,s;return s=l(s,d),s.return=c,s}function m(c,s,d){if(typeof s==="string"&&s!==""||typeof s==="number")return s=si(""+s,c.mode,d),s.return=c,s;if(typeof s==="object"&&s!==null){switch(s.$$typeof){case yr:return d=Wr(s.type,s.key,s.props,null,c.mode,d),d.ref=yn(c,null,s),d.return=c,d;case It:return s=ci(s,c.mode,d),s.return=c,s;case $e:var y=s._init;return m(c,y(s._payload),d)}if(wn(s)||pn(s))return s=kt(s,c.mode,d,null),s.return=c,s;_r(c,s)}return null}function p(c,s,d,y){var k=s!==null?s.key:null;if(typeof d==="string"&&d!==""||typeof d==="number")return k!==null?null:o(c,s,""+d,y);if(typeof d==="object"&&d!==null){switch(d.$$typeof){case yr:return d.key===k?a(c,s,d,y):null;case It:return d.key===k?f(c,s,d,y):null;case $e:return k=d._init,p(c,s,k(d._payload),y)}if(wn(d)||pn(d))return k!==null?null:v(c,s,d,y,null);_r(c,d)}return null}function g(c,s,d,y,k){if(typeof y==="string"&&y!==""||typeof y==="number")return c=c.get(d)||null,o(s,c,""+y,k);if(typeof y==="object"&&y!==null){switch(y.$$typeof){case yr:return c=c.get(y.key===null?d:y.key)||null,a(s,c,y,k);case It:return c=c.get(y.key===null?d:y.key)||null,f(s,c,y,k);case $e:var N=y._init;return g(c,s,d,N(y._payload),k)}if(wn(y)||pn(y))return c=c.get(d)||null,v(s,c,y,k,null);_r(s,y)}return null}function S(c,s,d,y){for(var k=null,N=null,E=s,x=s=0,V=null;E!==null&&x<d.length;x++){E.index>x?(V=E,E=null):V=E.sibling;var C=p(c,E,d[x],y);if(C===null){E===null&&(E=V);break}e&&E&&C.alternate===null&&t(c,E),s=i(C,s,x),N===null?k=C:N.sibling=C,N=C,E=V}if(x===d.length)return n(c,E),G&&ht(c,x),k;if(E===null){for(;x<d.length;x++)E=m(c,d[x],y),E!==null&&(s=i(E,s,x),N===null?k=E:N.sibling=E,N=E);return G&&ht(c,x),k}for(E=r(c,E);x<d.length;x++)V=g(E,c,x,d[x],y),V!==null&&(e&&V.alternate!==null&&E.delete(V.key===null?x:V.key),s=i(V,s,x),N===null?k=V:N.sibling=V,N=V);return e&&E.forEach(function(Ye){return t(c,Ye)}),G&&ht(c,x),k}function w(c,s,d,y){var k=pn(d);if(typeof k!=="function")throw Error(h(150));if(d=k.call(d),d==null)throw Error(h(151));for(var N=k=null,E=s,x=s=0,V=null,C=d.next();E!==null&&!C.done;x++,C=d.next()){E.index>x?(V=E,E=null):V=E.sibling;var Ye=p(c,E,C.value,y);if(Ye===null){E===null&&(E=V);break}e&&E&&Ye.alternate===null&&t(c,E),s=i(Ye,s,x),N===null?k=Ye:N.sibling=Ye,N=Ye,E=V}if(C.done)return n(c,E),G&&ht(c,x),k;if(E===null){for(;!C.done;x++,C=d.next())C=m(c,C.value,y),C!==null&&(s=i(C,s,x),N===null?k=C:N.sibling=C,N=C);return G&&ht(c,x),k}for(E=r(c,E);!C.done;x++,C=d.next())C=g(E,c,x,C.value,y),C!==null&&(e&&C.alternate!==null&&E.delete(C.key===null?x:C.key),s=i(C,s,x),N===null?k=C:N.sibling=C,N=C);return e&&E.forEach(function(Oc){return t(c,Oc)}),G&&ht(c,x),k}function U(c,s,d,y){if(typeof d==="object"&&d!==null&&d.type===Dt&&d.key===null&&(d=d.props.children),typeof d==="object"&&d!==null){switch(d.$$typeof){case yr:e:{for(var k=d.key,N=s;N!==null;){if(N.key===k){if(k=d.type,k===Dt){if(N.tag===7){n(c,N.sibling),s=l(N,d.props.children),s.return=c,c=s;break e}}else if(N.elementType===k||typeof k==="object"&&k!==null&&k.$$typeof===$e&&Jo(k)===N.type){n(c,N.sibling),s=l(N,d.props),s.ref=yn(c,N,d),s.return=c,c=s;break e}n(c,N);break}else t(c,N);N=N.sibling}d.type===Dt?(s=kt(d.props.children,c.mode,y,d.key),s.return=c,c=s):(y=Wr(d.type,d.key,d.props,null,c.mode,y),y.ref=yn(c,s,d),y.return=c,c=y)}return u(c);case It:e:{for(N=d.key;s!==null;){if(s.key===N)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){n(c,s.sibling),s=l(s,d.children||[]),s.return=c,c=s;break e}else{n(c,s);break}else t(c,s);s=s.sibling}s=ci(d,c.mode,y),s.return=c,c=s}return u(c);case $e:return N=d._init,U(c,s,N(d._payload),y)}if(wn(d))return S(c,s,d,y);if(pn(d))return w(c,s,d,y);_r(c,d)}return typeof d==="string"&&d!==""||typeof d==="number"?(d=""+d,s!==null&&s.tag===6?(n(c,s.sibling),s=l(s,d),s.return=c,c=s):(n(c,s),s=si(d,c.mode,y),s.return=c,c=s),u(c)):n(c,s)}return U}function xu(){Eu=Vt=rl=null}function Pu(e){var t=nl.current;z(nl),e._currentValue=t}function Wi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jt(e,t){rl=e,Eu=Vt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ie=!0),e.firstContext=null)}function ge(e){var t=e._currentValue;if(Eu!==e)if(e={context:e,memoizedValue:t,next:null},Vt===null){if(rl===null)throw Error(h(308));Vt=e,rl.dependencies={lanes:0,firstContext:e}}else Vt=Vt.next=e;return t}function Cu(e){At===null?At=[e]:At.push(e)}function Ns(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Cu(t)):(n.next=l.next,l.next=n),t.interleaved=n,Be(e,r)}function Be(e,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),n=e;for(e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function _u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Es(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ue(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function rt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(P&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Be(e,n)}return l=r.interleaved,l===null?(t.next=t,Cu(r)):(t.next=l.next,l.next=t),r.interleaved=t,Be(e,n)}function jr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pu(e,n)}}function Zo(e,t){var{updateQueue:n,alternate:r}=e;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=u:i=i.next=u,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ll(e,t,n,r){var l=e.updateQueue;Qe=!1;var{firstBaseUpdate:i,lastBaseUpdate:u}=l,o=l.shared.pending;if(o!==null){l.shared.pending=null;var a=o,f=a.next;a.next=null,u===null?i=f:u.next=f,u=a;var v=e.alternate;v!==null&&(v=v.updateQueue,o=v.lastBaseUpdate,o!==u&&(o===null?v.firstBaseUpdate=f:o.next=f,v.lastBaseUpdate=a))}if(i!==null){var m=l.baseState;u=0,v=f=a=null,o=i;do{var{lane:p,eventTime:g}=o;if((r&p)===p){v!==null&&(v=v.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var S=e,w=o;switch(p=t,g=n,w.tag){case 1:if(S=w.payload,typeof S==="function"){m=S.call(g,m,p);break e}m=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=w.payload,p=typeof S==="function"?S.call(g,m,p):S,p===null||p===void 0)break e;m=j({},m,p);break e;case 2:Qe=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[o]:p.push(o))}else g={eventTime:g,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},v===null?(f=v=g,a=m):v=v.next=g,u|=p;if(o=o.next,o===null)if(o=l.shared.pending,o===null)break;else p=o,o=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}while(1);if(v===null&&(a=m),l.baseState=a,l.firstBaseUpdate=f,l.lastBaseUpdate=v,t=l.shared.interleaved,t!==null){l=t;do u|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Pt|=u,e.lanes=u,e.memoizedState=m}}function qo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!=="function")throw Error(h(191,l));l.call(r)}}}function St(e){if(e===rr)throw Error(h(174));return e}function Lu(e,t){switch(L(Xn,t),L(Qn,e),L(Te,rr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Si(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Si(t,e)}z(Te),L(Te,t)}function nn(){z(Te),z(Qn),z(Xn)}function xs(e){St(Xn.current);var t=St(Te.current),n=Si(t,e.type);t!==n&&(L(Qn,e),L(Te,n))}function Ru(e){Qn.current===e&&(z(Te),z(Qn))}function il(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function zu(){for(var e=0;e<ri.length;e++)ri[e]._workInProgressVersionPrimary=null;ri.length=0}function J(){throw Error(h(321))}function Gu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ce(e[n],t[n]))return!1;return!0}function Tu(e,t,n,r,l,i){if(xt=i,D=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Mr.current=e===null||e.memoizedState===null?Mp:Up,e=n(r,l),Tn){i=0;do{if(Tn=!1,Jn=0,25<=i)throw Error(h(301));i+=1,Y=B=null,t.updateQueue=null,Mr.current=Op,e=n(r,l)}while(Tn)}if(Mr.current=ol,t=B!==null&&B.next!==null,xt=0,Y=B=D=null,ul=!1,t)throw Error(h(300));return e}function Iu(){var e=Jn!==0;return Jn=0,e}function Re(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?D.memoizedState=Y=e:Y=Y.next=e,Y}function Ae(){if(B===null){var e=D.alternate;e=e!==null?e.memoizedState:null}else e=B.next;var t=Y===null?D.memoizedState:Y.next;if(t!==null)Y=t,B=e;else{if(e===null)throw Error(h(310));B=e,e={memoizedState:B.memoizedState,baseState:B.baseState,baseQueue:B.baseQueue,queue:B.queue,next:null},Y===null?D.memoizedState=Y=e:Y=Y.next=e}return Y}function Zn(e,t){return typeof t==="function"?t(e):t}function ii(e){var t=Ae(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=B,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var u=l.next;l.next=i.next,i.next=u}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var o=u=null,a=null,f=i;do{var v=f.lane;if((xt&v)===v)a!==null&&(a=a.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var m={lane:v,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};a===null?(o=a=m,u=r):a=a.next=m,D.lanes|=v,Pt|=v}f=f.next}while(f!==null&&f!==i);a===null?u=r:a.next=o,Ce(r,t.memoizedState)||(ie=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,D.lanes|=i,Pt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ui(e){var t=Ae(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var{dispatch:r,pending:l}=n,i=t.memoizedState;if(l!==null){n.pending=null;var u=l=l.next;do i=e(i,u.action),u=u.next;while(u!==l);Ce(i,t.memoizedState)||(ie=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ps(){}function Cs(e,t){var n=D,r=Ae(),l=t(),i=!Ce(r.memoizedState,l);if(i&&(r.memoizedState=l,ie=!0),r=r.queue,Du(Rs.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Y!==null&&Y.memoizedState.tag&1){if(n.flags|=2048,qn(9,Ls.bind(null,n,r,l,t),void 0,null),H===null)throw Error(h(349));(xt&30)!==0||_s(n,t,l)}return l}function _s(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=D.updateQueue,t===null?(t={lastEffect:null,stores:null},D.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ls(e,t,n,r){t.value=n,t.getSnapshot=r,zs(t)&&Gs(e)}function Rs(e,t,n){return n(function(){zs(t)&&Gs(e)})}function zs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ce(e,n)}catch(r){return!0}}function Gs(e){var t=Be(e,1);t!==null&&Pe(t,e,1,-1)}function bo(e){var t=Re();return typeof e==="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:e},t.queue=e,e=e.dispatch=jp.bind(null,D,e),[t.memoizedState,e]}function qn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=D.updateQueue,t===null?(t={lastEffect:null,stores:null},D.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ts(){return Ae().memoizedState}function Ur(e,t,n,r){var l=Re();D.flags|=e,l.memoizedState=qn(1|t,n,void 0,r===void 0?null:r)}function Al(e,t,n,r){var l=Ae();r=r===void 0?null:r;var i=void 0;if(B!==null){var u=B.memoizedState;if(i=u.destroy,r!==null&&Gu(r,u.deps)){l.memoizedState=qn(t,n,i,r);return}}D.flags|=e,l.memoizedState=qn(1|t,n,i,r)}function ea(e,t){return Ur(8390656,8,e,t)}function Du(e,t){return Al(2048,8,e,t)}function Is(e,t){return Al(4,2,e,t)}function Ds(e,t){return Al(4,4,e,t)}function js(e,t){if(typeof t==="function")return e=e(),t(e),function(){t(null)};if(t!==null&&t!==void 0)return e=e(),t.current=e,function(){t.current=null}}function Ms(e,t,n){return n=n!==null&&n!==void 0?n.concat([e]):null,Al(4,4,js.bind(null,t,e),n)}function ju(){}function Us(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;if(r!==null&&t!==null&&Gu(t,r[1]))return r[0];return n.memoizedState=[e,t],e}function Os(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;if(r!==null&&t!==null&&Gu(t,r[1]))return r[0];return e=e(),n.memoizedState=[e,t],e}function Fs(e,t,n){if((xt&21)===0)return e.baseState&&(e.baseState=!1,ie=!0),e.memoizedState=n;return Ce(n,t)||(n=Ha(),D.lanes|=n,Pt|=n,e.baseState=!0),t}function Ip(e,t){var n=_;_=n!==0&&4>n?n:4,e(!0);var r=li.transition;li.transition={};try{e(!1),t()}finally{_=n,li.transition=r}}function Bs(){return Ae().memoizedState}function Dp(e,t,n){var r=it(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ws(e))Vs(t,n);else if(n=Ns(e,t,n,r),n!==null){var l=ne();Pe(n,e,r,l),Ys(n,t,r)}}function jp(e,t,n){var r=it(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ws(e))Vs(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,o=i(u,n);if(l.hasEagerState=!0,l.eagerState=o,Ce(o,u)){var a=t.interleaved;a===null?(l.next=l,Cu(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch(f){}finally{}n=Ns(e,t,l,r),n!==null&&(l=ne(),Pe(n,e,r,l),Ys(n,t,r))}}function Ws(e){var t=e.alternate;return e===D||t!==null&&t===D}function Vs(e,t){Tn=ul=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ys(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pu(e,n)}}function ke(e,t){if(e&&e.defaultProps){t=j({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Vi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n===null||n===void 0?t:j({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}function ta(e,t,n,r,l,i,u){return e=e.stateNode,typeof e.shouldComponentUpdate==="function"?e.shouldComponentUpdate(r,i,u):t.prototype&&t.prototype.isPureReactComponent?!Yn(n,r)||!Yn(l,i):!0}function Hs(e,t,n){var r=!1,l=at,i=t.contextType;return typeof i==="object"&&i!==null?i=ge(i):(l=oe(t)?Nt:b.current,r=t.contextTypes,i=(r=r!==null&&r!==void 0)?bt(e,l):at),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Sl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function na(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Sl.enqueueReplaceState(t,t.state,null)}function Yi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},_u(e);var i=t.contextType;typeof i==="object"&&i!==null?l.context=ge(i):(i=oe(t)?Nt:b.current,l.context=bt(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i==="function"&&(Vi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps==="function"||typeof l.getSnapshotBeforeUpdate==="function"||typeof l.UNSAFE_componentWillMount!=="function"&&typeof l.componentWillMount!=="function"||(t=l.state,typeof l.componentWillMount==="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount==="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Sl.enqueueReplaceState(l,l.state,null),ll(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount==="function"&&(e.flags|=4194308)}function rn(e,t){try{var n="",r=t;do n+=md(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function oi(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Hi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}function Ks(e,t,n){n=Ue(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sl||(sl=!0,tu=r),Hi(e,t)},n}function $s(e,t,n){n=Ue(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Hi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch==="function"&&(n.callback=function(){Hi(e,t),typeof r!=="function"&&(lt===null?lt=new Set([this]):lt.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function ra(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Fp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=ev.bind(null,e,t,n),t.then(e,e))}function la(e){do{var t;if(t=e.tag===13)t=e.memoizedState,t=t!==null?t.dehydrated!==null?!0:!1:!0;if(t)return e;e=e.return}while(e!==null);return null}function ia(e,t,n,r,l){if((e.mode&1)===0)return e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ue(-1,1),t.tag=2,rt(n,t,1))),n.lanes|=1),e;return e.flags|=65536,e.lanes=l,e}function te(e,t,n,r){t.child=e===null?ks(t,null,n,r):tn(t,e.child,n,r)}function ua(e,t,n,r,l){n=n.render;var i=t.ref;if(Jt(t,l),r=Tu(e,t,n,r,i,l),n=Iu(),e!==null&&!ie)return t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,We(e,t,l);return G&&n&&wu(t),t.flags|=1,te(e,t,r,l),t.child}function oa(e,t,n,r,l){if(e===null){var i=n.type;if(typeof i==="function"&&!Yu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0)return t.tag=15,t.type=i,Qs(e,t,i,r,l);return e=Wr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e}if(i=e.child,(e.lanes&l)===0){var u=i.memoizedProps;if(n=n.compare,n=n!==null?n:Yn,n(u,r)&&e.ref===t.ref)return We(e,t,l)}return t.flags|=1,e=ut(i,r),e.ref=t.ref,e.return=t,t.child=e}function Qs(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Yn(i,r)&&e.ref===t.ref)if(ie=!1,t.pendingProps=r=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(ie=!0);else return t.lanes=e.lanes,We(e,t,l)}return Ki(e,t,n,r,l)}function Xs(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},L(Ht,se),se|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,L(Ht,se),se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,L(Ht,se),se|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,L(Ht,se),se|=r;return te(e,t,l,n),t.child}function Js(e,t){var n=t.ref;if(e===null&&n!==null||e!==null&&e.ref!==n)t.flags|=512,t.flags|=2097152}function Ki(e,t,n,r,l){var i=oe(n)?Nt:b.current;if(i=bt(t,i),Jt(t,l),n=Tu(e,t,n,r,i,l),r=Iu(),e!==null&&!ie)return t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,We(e,t,l);return G&&r&&wu(t),t.flags|=1,te(e,t,n,l),t.child}function aa(e,t,n,r,l){if(oe(n)){var i=!0;br(t)}else i=!1;if(Jt(t,l),t.stateNode===null)Or(e,t),Hs(t,n,r),Yi(t,n,r,l),r=!0;else if(e===null){var{stateNode:u,memoizedProps:o}=t;u.props=o;var a=u.context,f=n.contextType;typeof f==="object"&&f!==null?f=ge(f):(f=oe(n)?Nt:b.current,f=bt(t,f));var v=n.getDerivedStateFromProps,m=typeof v==="function"||typeof u.getSnapshotBeforeUpdate==="function";m||typeof u.UNSAFE_componentWillReceiveProps!=="function"&&typeof u.componentWillReceiveProps!=="function"||(o!==r||a!==f)&&na(t,u,r,f),Qe=!1;var p=t.memoizedState;u.state=p,ll(t,r,u,l),a=t.memoizedState,o!==r||p!==a||ue.current||Qe?(typeof v==="function"&&(Vi(t,n,v,r),a=t.memoizedState),(o=Qe||ta(t,n,o,r,p,a,f))?(m||typeof u.UNSAFE_componentWillMount!=="function"&&typeof u.componentWillMount!=="function"||(typeof u.componentWillMount==="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount==="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount==="function"&&(t.flags|=4194308)):(typeof u.componentDidMount==="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),u.props=r,u.state=a,u.context=f,r=o):(typeof u.componentDidMount==="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,Es(e,t),o=t.memoizedProps,f=t.type===t.elementType?o:ke(t.type,o),u.props=f,m=t.pendingProps,p=u.context,a=n.contextType,typeof a==="object"&&a!==null?a=ge(a):(a=oe(n)?Nt:b.current,a=bt(t,a));var g=n.getDerivedStateFromProps;(v=typeof g==="function"||typeof u.getSnapshotBeforeUpdate==="function")||typeof u.UNSAFE_componentWillReceiveProps!=="function"&&typeof u.componentWillReceiveProps!=="function"||(o!==m||p!==a)&&na(t,u,r,a),Qe=!1,p=t.memoizedState,u.state=p,ll(t,r,u,l);var S=t.memoizedState;o!==m||p!==S||ue.current||Qe?(typeof g==="function"&&(Vi(t,n,g,r),S=t.memoizedState),(f=Qe||ta(t,n,f,r,p,S,a)||!1)?(v||typeof u.UNSAFE_componentWillUpdate!=="function"&&typeof u.componentWillUpdate!=="function"||(typeof u.componentWillUpdate==="function"&&u.componentWillUpdate(r,S,a),typeof u.UNSAFE_componentWillUpdate==="function"&&u.UNSAFE_componentWillUpdate(r,S,a)),typeof u.componentDidUpdate==="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate==="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!=="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!=="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),u.props=r,u.state=S,u.context=a,r=f):(typeof u.componentDidUpdate!=="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!=="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return $i(e,t,n,r,i,l)}function $i(e,t,n,r,l,i){Js(e,t);var u=(t.flags&128)!==0;if(!r&&!u)return l&&$o(t,n,!1),We(e,t,i);r=t.stateNode,Bp.current=t;var o=u&&typeof n.getDerivedStateFromError!=="function"?null:r.render();return t.flags|=1,e!==null&&u?(t.child=tn(t,e.child,null,i),t.child=tn(t,null,o,i)):te(e,t,o,i),t.memoizedState=r.state,l&&$o(t,n,!0),t.child}function Zs(e){var t=e.stateNode;t.pendingContext?Ko(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ko(e,t.context,!1),Lu(e,t.containerInfo)}function sa(e,t,n,r,l){return en(),Nu(l),t.flags|=256,te(e,t,n,r),t.child}function Xi(e){return{baseLanes:e,cachePool:null,transitions:null}}function qs(e,t,n){var r=t.pendingProps,l=I.current,i=!1,u=(t.flags&128)!==0,o;if((o=u)||(o=e!==null&&e.memoizedState===null?!1:(l&2)!==0),o)i=!0,t.flags&=-129;else if(e===null||e.memoizedState!==null)l|=1;if(L(I,l&1),e===null){if(Bi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null))return(t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null;return u=r.children,e=r.fallback,i?(r=t.mode,i=t.child,u={mode:"hidden",children:u},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=u):i=Nl(u,r,0,null),e=kt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Xi(n),t.memoizedState=Qi,e):Mu(t,u)}if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null))return Wp(e,t,u,r,o,l,n);if(i){i=r.fallback,u=t.mode,l=e.child,o=l.sibling;var a={mode:"hidden",children:r.children};return(u&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=ut(l,a),r.subtreeFlags=l.subtreeFlags&14680064),o!==null?i=ut(o,i):(i=kt(i,u,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,u=e.child.memoizedState,u=u===null?Xi(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},i.memoizedState=u,i.childLanes=e.childLanes&~n,t.memoizedState=Qi,r}return i=e.child,e=i.sibling,r=ut(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Mu(e,t){return t=Nl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Lr(e,t,n,r){return r!==null&&Nu(r),tn(t,e.child,null,n),e=Mu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wp(e,t,n,r,l,i,u){if(n){if(t.flags&256)return t.flags&=-257,r=oi(Error(h(422))),Lr(e,t,u,r);if(t.memoizedState!==null)return t.child=e.child,t.flags|=128,null;return i=r.fallback,l=t.mode,r=Nl({mode:"visible",children:r.children},l,0,null),i=kt(i,l,u,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&tn(t,e.child,null,u),t.child.memoizedState=Xi(u),t.memoizedState=Qi,i}if((t.mode&1)===0)return Lr(e,t,u,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var o=r.dgst;return r=o,i=Error(h(419)),r=oi(i,r,void 0),Lr(e,t,u,r)}if(o=(u&e.childLanes)!==0,ie||o){if(r=H,r!==null){switch(u&-u){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|u))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Be(e,l),Pe(r,e,l,-1))}return Vu(),r=oi(Error(h(421))),Lr(e,t,u,r)}if(l.data==="$?")return t.flags|=128,t.child=e.child,t=tv.bind(null,e),l._reactRetry=t,null;return e=i.treeContext,ce=nt(l.nextSibling),fe=t,G=!0,Ee=null,e!==null&&(ve[me++]=je,ve[me++]=Me,ve[me++]=Et,je=e.id,Me=e.overflow,Et=t),t=Mu(t,r.children),t.flags|=4096,t}function ca(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Wi(e.return,t,n)}function ai(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function bs(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(te(e,t,r.children,n),r=I.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ca(e,n,t);else if(e.tag===19)ca(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(L(I,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":n=t.child;for(l=null;n!==null;)e=n.alternate,e!==null&&il(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ai(t,!1,l,n,i);break;case"backwards":n=null,l=t.child;for(t.child=null;l!==null;){if(e=l.alternate,e!==null&&il(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ai(t,!0,n,null,i);break;case"together":ai(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Or(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function We(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){e=t.child,n=ut(e,e.pendingProps),t.child=n;for(n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Vp(e,t,n){switch(t.tag){case 3:Zs(t),en();break;case 5:xs(t);break;case 1:oe(t.type)&&br(t);break;case 4:Lu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;L(nl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null){if(r.dehydrated!==null)return L(I,I.current&1),t.flags|=128,null;if((n&t.child.childLanes)!==0)return qs(e,t,n);return L(I,I.current&1),e=We(e,t,n),e!==null?e.sibling:null}L(I,I.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return bs(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),L(I,I.current),r)break;else return null;case 22:case 23:return t.lanes=0,Xs(e,t,n)}return We(e,t,n)}function gn(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Z(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Yp(e,t,n){var r=t.pendingProps;switch(ku(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Z(t),null;case 1:return oe(t.type)&&qr(),Z(t),null;case 3:if(r=t.stateNode,nn(),z(ue),z(b),zu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),e===null||e.child===null)Cr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ee!==null&&(lu(Ee),Ee=null));return Ji(e,t),Z(t),null;case 5:Ru(t);var l=St(Xn.current);if(n=t.type,e!==null&&t.stateNode!=null)tc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(h(166));return Z(t),null}if(e=St(Te.current),Cr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ze]=t,r[$n]=i,e=(t.mode&1)!==0,n){case"dialog":R("cancel",r),R("close",r);break;case"iframe":case"object":case"embed":R("load",r);break;case"video":case"audio":for(l=0;l<Cn.length;l++)R(Cn[l],r);break;case"source":R("error",r);break;case"img":case"image":case"link":R("error",r),R("load",r);break;case"details":R("toggle",r);break;case"input":So(r,i),R("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},R("invalid",r);break;case"textarea":ko(r,i),R("invalid",r)}wi(n,i),l=null;for(var u in i)if(i.hasOwnProperty(u)){var o=i[u];u==="children"?typeof o==="string"?r.textContent!==o&&(i.suppressHydrationWarning!==!0&&Pr(r.textContent,o,e),l=["children",o]):typeof o==="number"&&r.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&Pr(r.textContent,o,e),l=["children",""+o]):Mn.hasOwnProperty(u)&&o!=null&&u==="onScroll"&&R("scroll",r)}switch(n){case"input":gr(r),wo(r,i,!0);break;case"textarea":gr(r),No(r);break;case"select":case"option":break;default:typeof i.onClick==="function"&&(r.onclick=Zr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{u=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ra(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is==="string"?e=u.createElement(n,{is:r.is}):(e=u.createElement(n),n==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,n),e[ze]=t,e[$n]=r,ec(e,t,!1,!1),t.stateNode=e;e:{switch(u=ki(n,r),n){case"dialog":R("cancel",e),R("close",e),l=r;break;case"iframe":case"object":case"embed":R("load",e),l=r;break;case"video":case"audio":for(l=0;l<Cn.length;l++)R(Cn[l],e);l=r;break;case"source":R("error",e),l=r;break;case"img":case"image":case"link":R("error",e),R("load",e),l=r;break;case"details":R("toggle",e),l=r;break;case"input":So(e,r),l=hi(e,r),R("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=j({},r,{value:void 0}),R("invalid",e);break;case"textarea":ko(e,r),l=Ai(e,r),R("invalid",e);break;default:l=r}wi(n,l),o=l;for(i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="style"?Ta(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&za(e,a)):i==="children"?typeof a==="string"?(n!=="textarea"||a!=="")&&Un(e,a):typeof a==="number"&&Un(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mn.hasOwnProperty(i)?a!=null&&i==="onScroll"&&R("scroll",e):a!=null&&ou(e,i,a,u))}switch(n){case"input":gr(e),wo(e,r,!1);break;case"textarea":gr(e),No(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ot(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Kt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick==="function"&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Z(t),null;case 6:if(e&&t.stateNode!=null)nc(e,t,e.memoizedProps,r);else{if(typeof r!=="string"&&t.stateNode===null)throw Error(h(166));if(n=St(Xn.current),St(Te.current),Cr(t)){if(r=t.stateNode,n=t.memoizedProps,r[ze]=t,i=r.nodeValue!==n){if(e=fe,e!==null)switch(e.tag){case 3:Pr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pr(r.nodeValue,n,(e.mode&1)!==0)}}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ze]=t,t.stateNode=r}return Z(t),null;case 13:if(z(I),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&ce!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Ss(),en(),t.flags|=98560,i=!1;else if(i=Cr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(h(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(h(317));i[ze]=t}else en(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Z(t),i=!1}else Ee!==null&&(lu(Ee),Ee=null),i=!0;if(!i)return t.flags&65536?t:null}if((t.flags&128)!==0)return t.lanes=n,t;return r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(I.current&1)!==0?W===0&&(W=3):Vu())),t.updateQueue!==null&&(t.flags|=4),Z(t),null;case 4:return nn(),Ji(e,t),e===null&&Hn(t.stateNode.containerInfo),Z(t),null;case 10:return Pu(t.type._context),Z(t),null;case 17:return oe(t.type)&&qr(),Z(t),null;case 19:if(z(I),i=t.memoizedState,i===null)return Z(t),null;if(r=(t.flags&128)!==0,u=i.rendering,u===null)if(r)gn(i,!1);else{if(W!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=il(e),u!==null){t.flags|=128,gn(i,!1),r=u.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n;for(n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,u=i.alternate,u===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=u.childLanes,i.lanes=u.lanes,i.child=u.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=u.memoizedProps,i.memoizedState=u.memoizedState,i.updateQueue=u.updateQueue,i.type=u.type,e=u.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return L(I,I.current&1|2),t.child}e=e.sibling}i.tail!==null&&O()>ln&&(t.flags|=128,r=!0,gn(i,!1),t.lanes=4194304)}else{if(!r)if(e=il(u),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!G)return Z(t),null}else 2*O()-i.renderingStartTime>ln&&n!==1073741824&&(t.flags|=128,r=!0,gn(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(n=i.last,n!==null?n.sibling=u:t.child=u,i.last=u)}if(i.tail!==null)return t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=O(),t.sibling=null,n=I.current,L(I,r?n&1|2:n&1),t;return Z(t),null;case 22:case 23:return Wu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(se&1073741824)!==0&&(Z(t),t.subtreeFlags&6&&(t.flags|=8192)):Z(t),null;case 24:return null;case 25:return null}throw Error(h(156,t.tag))}function Hp(e,t){switch(ku(t),t.tag){case 1:return oe(t.type)&&qr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),z(ue),z(b),zu(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ru(t),null;case 13:if(z(I),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(I),null;case 4:return nn(),null;case 10:return Pu(t.type._context),null;case 22:case 23:return Wu(),null;case 24:return null;default:return null}}function Yt(e,t){var n=e.ref;if(n!==null)if(typeof n==="function")try{n(null)}catch(r){M(e,t,r)}else n.current=null}function Zi(e,t,n){try{n()}catch(r){M(e,t,r)}}function $p(e,t){if(Ii=Qr,e=os(),Su(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var{anchorOffset:l,focusNode:i}=r;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(y){n=null;break e}var u=0,o=-1,a=-1,f=0,v=0,m=e,p=null;t:for(;;){for(var g;;){if(m!==n||l!==0&&m.nodeType!==3||(o=u+l),m!==i||r!==0&&m.nodeType!==3||(a=u+r),m.nodeType===3&&(u+=m.nodeValue.length),(g=m.firstChild)===null)break;p=m,m=g}for(;;){if(m===e)break t;if(p===n&&++f===l&&(o=u),p===i&&++v===r&&(a=u),(g=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=g}n=o===-1||a===-1?null:{start:o,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;Di={focusedElem:e,selectionRange:n},Qr=!1;for(A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var S=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var{memoizedProps:w,memoizedState:U}=S,c=t.stateNode,s=c.getSnapshotBeforeUpdate(t.elementType===t.type?w:ke(t.type,w),U);c.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(y){M(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return S=fa,fa=!1,S}function In(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Zi(t,n,i)}l=l.next}while(l!==r)}}function wl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function qi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==="function"?t(e):t.current=e}}function rc(e){var t=e.alternate;t!==null&&(e.alternate=null,rc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ze],delete t[$n],delete t[Ui],delete t[Lp],delete t[Rp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lc(e){return e.tag===5||e.tag===3||e.tag===4}function da(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lc(e.return))return null;e=e.return}e.sibling.return=e.return;for(e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2)continue e;if(e.child===null||e.tag===4)continue e;else e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!==null&&n!==void 0||t.onclick!==null||(t.onclick=Zr));else if(r!==4&&(e=e.child,e!==null))for(bi(e,t,n),e=e.sibling;e!==null;)bi(e,t,n),e=e.sibling}function eu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(eu(e,t,n),e=e.sibling;e!==null;)eu(e,t,n),e=e.sibling}function Ke(e,t,n){for(n=n.child;n!==null;)ic(e,t,n),n=n.sibling}function ic(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==="function")try{Ge.onCommitFiberUnmount(pl,n)}catch(o){}switch(n.tag){case 5:q||Yt(n,t);case 6:var r=K,l=Ne;K=null,Ke(e,t,n),K=r,Ne=l,K!==null&&(Ne?(e=K,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):K.removeChild(n.stateNode));break;case 18:K!==null&&(Ne?(e=K,n=n.stateNode,e.nodeType===8?ti(e.parentNode,n):e.nodeType===1&&ti(e,n),Wn(e)):ti(K,n.stateNode));break;case 4:r=K,l=Ne,K=n.stateNode.containerInfo,Ne=!0,Ke(e,t,n),K=r,Ne=l;break;case 0:case 11:case 14:case 15:if(!q&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,u=i.destroy;i=i.tag,u!==void 0&&((i&2)!==0?Zi(n,t,u):(i&4)!==0&&Zi(n,t,u)),l=l.next}while(l!==r)}Ke(e,t,n);break;case 1:if(!q&&(Yt(n,t),r=n.stateNode,typeof r.componentWillUnmount==="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){M(n,t,o)}Ke(e,t,n);break;case 21:Ke(e,t,n);break;case 22:n.mode&1?(q=(r=q)||n.memoizedState!==null,Ke(e,t,n),q=r):Ke(e,t,n);break;default:Ke(e,t,n)}}function pa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Kp),t.forEach(function(r){var l=nv.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function we(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,u=t,o=u;e:for(;o!==null;){switch(o.tag){case 5:K=o.stateNode,Ne=!1;break e;case 3:K=o.stateNode.containerInfo,Ne=!0;break e;case 4:K=o.stateNode.containerInfo,Ne=!0;break e}o=o.return}if(K===null)throw Error(h(160));ic(i,u,l),K=null,Ne=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(f){M(l,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)uc(t,e),t=t.sibling}function uc(e,t){var{alternate:n,flags:r}=e;switch(e.tag){case 0:case 11:case 14:case 15:if(we(t,e),Le(e),r&4){try{In(3,e,e.return),wl(3,e)}catch(w){M(e,e.return,w)}try{In(5,e,e.return)}catch(w){M(e,e.return,w)}}break;case 1:we(t,e),Le(e),r&512&&n!==null&&Yt(n,n.return);break;case 5:if(we(t,e),Le(e),r&512&&n!==null&&Yt(n,n.return),e.flags&32){var l=e.stateNode;try{Un(l,"")}catch(w){M(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,u=n!==null?n.memoizedProps:i,o=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&_a(l,i),ki(o,u);var f=ki(o,i);for(u=0;u<a.length;u+=2){var v=a[u],m=a[u+1];v==="style"?Ta(l,m):v==="dangerouslySetInnerHTML"?za(l,m):v==="children"?Un(l,m):ou(l,v,m,f)}switch(o){case"input":yi(l,i);break;case"textarea":La(l,i);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Kt(l,!!i.multiple,g,!1):p!==!!i.multiple&&(i.defaultValue!=null?Kt(l,!!i.multiple,i.defaultValue,!0):Kt(l,!!i.multiple,i.multiple?[]:"",!1))}l[$n]=i}catch(w){M(e,e.return,w)}}break;case 6:if(we(t,e),Le(e),r&4){if(e.stateNode===null)throw Error(h(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){M(e,e.return,w)}}break;case 3:if(we(t,e),Le(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wn(t.containerInfo)}catch(w){M(e,e.return,w)}break;case 4:we(t,e),Le(e);break;case 13:we(t,e),Le(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Fu=O())),r&4&&pa(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(q=(f=q)||v,we(t,e),q=f):we(t,e),Le(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!v&&(e.mode&1)!==0)for(A=e,v=e.child;v!==null;){for(m=A=v;A!==null;){switch(p=A,g=p.child,p.tag){case 0:case 11:case 14:case 15:In(4,p,p.return);break;case 1:Yt(p,p.return);var S=p.stateNode;if(typeof S.componentWillUnmount==="function"){r=p,n=p.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(w){M(r,n,w)}}break;case 5:Yt(p,p.return);break;case 22:if(p.memoizedState!==null){ma(m);continue}}g!==null?(g.return=p,A=g):ma(m)}v=v.sibling}e:for(v=null,m=e;;){if(m.tag===5){if(v===null){v=m;try{l=m.stateNode,f?(i=l.style,typeof i.setProperty==="function"?i.setProperty("display","none","important"):i.display="none"):(o=m.stateNode,a=m.memoizedProps.style,u=a!==void 0&&a!==null&&a.hasOwnProperty("display")?a.display:null,o.style.display=Ga("display",u))}catch(w){M(e,e.return,w)}}}else if(m.tag===6){if(v===null)try{m.stateNode.nodeValue=f?"":m.memoizedProps}catch(w){M(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;v===m&&(v=null),m=m.return}v===m&&(v=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:we(t,e),Le(e),r&4&&pa(e);break;case 21:break;default:we(t,e),Le(e)}}function Le(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(lc(n)){var r=n;break e}n=n.return}throw Error(h(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Un(l,""),r.flags&=-33);var i=da(e);eu(e,i,l);break;case 3:case 4:var u=r.stateNode.containerInfo,o=da(e);bi(e,o,u);break;default:throw Error(h(161))}}catch(a){M(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qp(e,t,n){A=e,oc(e,t,n)}function oc(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var l=A,i=l.child;if(l.tag===22&&r){var u=l.memoizedState!==null||Rr;if(!u){var o=l.alternate,a=o!==null&&o.memoizedState!==null||q;o=Rr;var f=q;if(Rr=u,(q=a)&&!f)for(A=l;A!==null;)u=A,a=u.child,u.tag===22&&u.memoizedState!==null?ha(l):a!==null?(a.return=u,A=a):ha(l);for(;i!==null;)A=i,oc(i,t,n),i=i.sibling;A=l,Rr=o,q=f}va(e,t,n)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,A=i):va(e,t,n)}}function va(e){for(;A!==null;){var t=A;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:q||wl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!q)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ke(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&qo(t,i,r);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qo(t,u,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var v=f.memoizedState;if(v!==null){var m=v.dehydrated;m!==null&&Wn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}q||t.flags&512&&qi(t)}catch(p){M(t,t.return,p)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function ma(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function ha(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{wl(4,t)}catch(a){M(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==="function"){var l=t.return;try{r.componentDidMount()}catch(a){M(t,l,a)}}var i=t.return;try{qi(t)}catch(a){M(t,i,a)}break;case 5:var u=t.return;try{qi(t)}catch(a){M(t,u,a)}}}catch(a){M(t,t.return,a)}if(t===e){A=null;break}var o=t.sibling;if(o!==null){o.return=t.return,A=o;break}A=t.return}}function ne(){return(P&6)!==0?O():Fr!==-1?Fr:Fr=O()}function it(e){if((e.mode&1)===0)return 1;if((P&2)!==0&&$!==0)return $&-$;if(Gp.transition!==null)return Br===0&&(Br=Ha()),Br;if(e=_,e!==0)return e;return e=window.event,e=e===void 0?16:qa(e.type),e}function Pe(e,t,n,r){if(50<jn)throw jn=0,nu=null,Error(h(185));if(er(e,n,r),(P&2)===0||e!==H)e===H&&((P&2)===0&&(kl|=n),W===4&&Je(e,$)),ae(e,r),n===1&&P===0&&(t.mode&1)===0&&(ln=O()+500,gl&&ft())}function ae(e,t){var n=e.callbackNode;Id(e,t);var r=$r(e,e===H?$:0);if(r===0)n!==null&&Po(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Po(n),t===1)e.tag===0?zp(ya.bind(null,e)):ys(ya.bind(null,e)),Cp(function(){(P&6)===0&&ft()}),n=null;else{switch(Ka(r)){case 1:n=du;break;case 4:n=Va;break;case 16:n=Kr;break;case 536870912:n=Ya;break;default:n=Kr}n=mc(n,ac.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ac(e,t){if(Fr=-1,Br=0,(P&6)!==0)throw Error(h(327));var n=e.callbackNode;if(Zt()&&e.callbackNode!==n)return null;var r=$r(e,e===H?$:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=fl(e,r);else{t=r;var l=P;P|=2;var i=cc();if(H!==e||$!==t)Ie=null,ln=O()+500,wt(e,t);do try{qp();break}catch(o){sc(e,o)}while(1);xu(),al.current=i,P=l,F!==null?t=0:(H=null,$=0,t=W)}if(t!==0){if(t===2&&(l=Ci(e),l!==0&&(r=l,t=ru(e,l))),t===1)throw n=bn,wt(e,0),Je(e,r),ae(e,O()),n;if(t===6)Je(e,r);else{if(l=e.current.alternate,(r&30)===0&&!Jp(l)&&(t=fl(e,r),t===2&&(i=Ci(e),i!==0&&(r=i,t=ru(e,i))),t===1))throw n=bn,wt(e,0),Je(e,r),ae(e,O()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(h(345));case 2:yt(e,le,Ie);break;case 3:if(Je(e,r),(r&130023424)===r&&(t=Fu+500-O(),10<t)){if($r(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ne(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Mi(yt.bind(null,e,le,Ie),t);break}yt(e,le,Ie);break;case 4:if(Je(e,r),(r&4194240)===r)break;t=e.eventTimes;for(l=-1;0<r;){var u=31-xe(r);i=1<<u,u=t[u],u>l&&(l=u),r&=~i}if(r=l,r=O()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3000>r?3000:4320>r?4320:1960*Xp(r/1960))-r,10<r){e.timeoutHandle=Mi(yt.bind(null,e,le,Ie),r);break}yt(e,le,Ie);break;case 5:yt(e,le,Ie);break;default:throw Error(h(329))}}}return ae(e,O()),e.callbackNode===n?ac.bind(null,e):null}function ru(e,t){var n=Dn;return e.current.memoizedState.isDehydrated&&(wt(e,t).flags|=256),e=fl(e,t),e!==2&&(t=le,le=n,t!==null&&lu(t)),e}function lu(e){le===null?le=e:le.push.apply(le,e)}function Jp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ce(i(),l))return!1}catch(u){return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Je(e,t){t&=~Ou,t&=~kl,e.suspendedLanes|=t,e.pingedLanes&=~t;for(e=e.expirationTimes;0<t;){var n=31-xe(t),r=1<<n;e[n]=-1,t&=~r}}function ya(e){if((P&6)!==0)throw Error(h(327));Zt();var t=$r(e,0);if((t&1)===0)return ae(e,O()),null;var n=fl(e,t);if(e.tag!==0&&n===2){var r=Ci(e);r!==0&&(t=r,n=ru(e,r))}if(n===1)throw n=bn,wt(e,0),Je(e,t),ae(e,O()),n;if(n===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,yt(e,le,Ie),ae(e,O()),null}function Bu(e,t){var n=P;P|=1;try{return e(t)}finally{P=n,P===0&&(ln=O()+500,gl&&ft())}}function Ct(e){qe!==null&&qe.tag===0&&(P&6)===0&&Zt();var t=P;P|=1;var n=ye.transition,r=_;try{if(ye.transition=null,_=1,e)return e()}finally{_=r,ye.transition=n,P=t,(P&6)===0&&ft()}}function Wu(){se=Ht.current,z(Ht)}function wt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Pp(n)),F!==null)for(n=F.return;n!==null;){var r=n;switch(ku(r),r.tag){case 1:r=r.type.childContextTypes,r!==null&&r!==void 0&&qr();break;case 3:nn(),z(ue),z(b),zu();break;case 5:Ru(r);break;case 4:nn();break;case 13:z(I);break;case 19:z(I);break;case 10:Pu(r.type._context);break;case 22:case 23:Wu()}n=n.return}if(H=e,F=e=ut(e.current,null),$=se=t,W=0,bn=null,Ou=kl=Pt=0,le=Dn=null,At!==null){for(t=0;t<At.length;t++)if(n=At[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var u=i.next;i.next=l,r.next=u}n.pending=r}At=null}return e}function sc(e,t){do{var n=F;try{if(xu(),Mr.current=ol,ul){for(var r=D.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ul=!1}if(xt=0,Y=B=D=null,Tn=!1,Jn=0,Uu.current=null,n===null||n.return===null){W=1,bn=t,F=null;break}e:{var i=e,u=n.return,o=n,a=t;if(t=$,o.flags|=32768,a!==null&&typeof a==="object"&&typeof a.then==="function"){var f=a,v=o,m=v.tag;if((v.mode&1)===0&&(m===0||m===11||m===15)){var p=v.alternate;p?(v.updateQueue=p.updateQueue,v.memoizedState=p.memoizedState,v.lanes=p.lanes):(v.updateQueue=null,v.memoizedState=null)}var g=la(u);if(g!==null){g.flags&=-257,ia(g,u,o,i,t),g.mode&1&&ra(i,f,t),t=g,a=f;var S=t.updateQueue;if(S===null){var w=new Set;w.add(a),t.updateQueue=w}else S.add(a);break e}else{if((t&1)===0){ra(i,f,t),Vu();break e}a=Error(h(426))}}else if(G&&o.mode&1){var U=la(u);if(U!==null){(U.flags&65536)===0&&(U.flags|=256),ia(U,u,o,i,t),Nu(rn(a,o));break e}}i=a=rn(a,o),W!==4&&(W=2),Dn===null?Dn=[i]:Dn.push(i),i=u;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var c=Ks(i,a,t);Zo(i,c);break e;case 1:o=a;var{type:s,stateNode:d}=i;if((i.flags&128)===0&&(typeof s.getDerivedStateFromError==="function"||d!==null&&typeof d.componentDidCatch==="function"&&(lt===null||!lt.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=$s(i,o,t);Zo(i,y);break e}}i=i.return}while(i!==null)}dc(n)}catch(k){t=k,F===n&&n!==null&&(F=n=n.return);continue}break}while(1)}function cc(){var e=al.current;return al.current=ol,e===null?ol:e}function Vu(){if(W===0||W===3||W===2)W=4;H===null||(Pt&268435455)===0&&(kl&268435455)===0||Je(H,$)}function fl(e,t){var n=P;P|=2;var r=cc();if(H!==e||$!==t)Ie=null,wt(e,t);do try{Zp();break}catch(l){sc(e,l)}while(1);if(xu(),P=n,al.current=r,F!==null)throw Error(h(261));return H=null,$=0,W}function Zp(){for(;F!==null;)fc(F)}function qp(){for(;F!==null&&!xd();)fc(F)}function fc(e){var t=vc(e.alternate,e,se);e.memoizedProps=e.pendingProps,t===null?dc(e):F=t,Uu.current=null}function dc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Yp(n,t,se),n!==null){F=n;return}}else{if(n=Hp(n,t),n!==null){n.flags&=32767,F=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{W=6,F=null;return}}if(t=t.sibling,t!==null){F=t;return}F=t=e}while(t!==null);W===0&&(W=5)}function yt(e,t,n){var r=_,l=ye.transition;try{ye.transition=null,_=1,bp(e,t,n,r)}finally{ye.transition=l,_=r}return null}function bp(e,t,n,r){do Zt();while(qe!==null);if((P&6)!==0)throw Error(h(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Dd(e,i),e===H&&(F=H=null,$=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||zr||(zr=!0,mc(Kr,function(){return Zt(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=ye.transition,ye.transition=null;var u=_;_=1;var o=P;P|=4,Uu.current=null,$p(e,n),uc(n,e),wp(Di),Qr=!!Ii,Di=Ii=null,e.current=n,Qp(n,e,l),Pd(),P=o,_=u,ye.transition=i}else e.current=n;if(zr&&(zr=!1,qe=e,cl=l),i=e.pendingLanes,i===0&&(lt=null),Ld(n.stateNode,r),ae(e,O()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(sl)throw sl=!1,e=tu,tu=null,e;return(cl&1)!==0&&e.tag!==0&&Zt(),i=e.pendingLanes,(i&1)!==0?e===nu?jn++:(jn=0,nu=e):jn=0,ft(),null}function Zt(){if(qe!==null){var e=Ka(cl),t=ye.transition,n=_;try{if(ye.transition=null,_=16>e?16:e,qe===null)var r=!1;else{if(e=qe,qe=null,cl=0,(P&6)!==0)throw Error(h(331));var l=P;P|=4;for(A=e.current;A!==null;){var i=A,u=i.child;if((A.flags&16)!==0){var o=i.deletions;if(o!==null){for(var a=0;a<o.length;a++){var f=o[a];for(A=f;A!==null;){var v=A;switch(v.tag){case 0:case 11:case 15:In(8,v,i)}var m=v.child;if(m!==null)m.return=v,A=m;else for(;A!==null;){v=A;var{sibling:p,return:g}=v;if(rc(v),v===f){A=null;break}if(p!==null){p.return=g,A=p;break}A=g}}}var S=i.alternate;if(S!==null){var w=S.child;if(w!==null){S.child=null;do{var U=w.sibling;w.sibling=null,w=U}while(w!==null)}}A=i}}if((i.subtreeFlags&2064)!==0&&u!==null)u.return=i,A=u;else e:for(;A!==null;){if(i=A,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:In(9,i,i.return)}var c=i.sibling;if(c!==null){c.return=i.return,A=c;break e}A=i.return}}var s=e.current;for(A=s;A!==null;){u=A;var d=u.child;if((u.subtreeFlags&2064)!==0&&d!==null)d.return=u,A=d;else e:for(u=s;A!==null;){if(o=A,(o.flags&2048)!==0)try{switch(o.tag){case 0:case 11:case 15:wl(9,o)}}catch(k){M(o,o.return,k)}if(o===u){A=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,A=y;break e}A=o.return}}if(P=l,ft(),Ge&&typeof Ge.onPostCommitFiberRoot==="function")try{Ge.onPostCommitFiberRoot(pl,e)}catch(k){}r=!0}return r}finally{_=n,ye.transition=t}}return!1}function ga(e,t,n){t=rn(n,t),t=Ks(e,t,1),e=rt(e,t,1),t=ne(),e!==null&&(er(e,1,t),ae(e,t))}function M(e,t,n){if(e.tag===3)ga(e,e,n);else for(;t!==null;){if(t.tag===3){ga(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==="function"||typeof r.componentDidCatch==="function"&&(lt===null||!lt.has(r))){e=rn(n,e),e=$s(t,e,1),t=rt(t,e,1),e=ne(),t!==null&&(er(t,1,e),ae(t,e));break}}t=t.return}}function ev(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ne(),e.pingedLanes|=e.suspendedLanes&n,H===e&&($&n)===n&&(W===4||W===3&&($&130023424)===$&&500>O()-Fu?wt(e,0):Ou|=n),ae(e,t)}function pc(e,t){t===0&&((e.mode&1)===0?t=1:(t=wr,wr<<=1,(wr&130023424)===0&&(wr=4194304)));var n=ne();e=Be(e,t),e!==null&&(er(e,t,n),ae(e,n))}function tv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),pc(e,n)}function nv(e,t){var n=0;switch(e.tag){case 13:var{stateNode:r,memoizedState:l}=e;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(t),pc(e,n)}function mc(e,t){return Wa(e,t)}function rv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function he(e,t,n,r){return new rv(e,t,n,r)}function Yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lv(e){if(typeof e==="function")return Yu(e)?1:0;if(e!==void 0&&e!==null){if(e=e.$$typeof,e===su)return 11;if(e===cu)return 14}return 2}function ut(e,t){var n=e.alternate;return n===null?(n=he(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wr(e,t,n,r,l,i){var u=2;if(r=e,typeof e==="function")Yu(e)&&(u=1);else if(typeof e==="string")u=5;else e:switch(e){case Dt:return kt(n.children,l,i,t);case au:u=8,l|=8;break;case di:return e=he(12,n,t,l|2),e.elementType=di,e.lanes=i,e;case pi:return e=he(13,n,t,l),e.elementType=pi,e.lanes=i,e;case vi:return e=he(19,n,t,l),e.elementType=vi,e.lanes=i,e;case xa:return Nl(n,l,i,t);default:if(typeof e==="object"&&e!==null)switch(e.$$typeof){case Na:u=10;break e;case Ea:u=9;break e;case su:u=11;break e;case cu:u=14;break e;case $e:u=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=he(u,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function kt(e,t,n,r){return e=he(7,e,r,t),e.lanes=n,e}function Nl(e,t,n,r){return e=he(22,e,r,t),e.elementType=xa,e.lanes=n,e.stateNode={isHidden:!1},e}function si(e,t,n){return e=he(6,e,null,t),e.lanes=n,e}function ci(e,t,n){return t=he(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function iv(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ql(0),this.expirationTimes=Ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ql(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Hu(e,t,n,r,l,i,u,o,a){return e=new iv(e,t,n,o,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=he(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_u(i),e}function uv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:It,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function hc(e){if(!e)return at;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(h(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(oe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(h(171))}if(e.tag===1){var n=e.type;if(oe(n))return hs(e,n,t)}return t}function yc(e,t,n,r,l,i,u,o,a){return e=Hu(n,r,!0,e,l,i,u,o,a),e.context=hc(null),n=e.current,r=ne(),l=it(n),i=Ue(r,l),i.callback=t!==void 0&&t!==null?t:null,rt(n,i,l),e.current.lanes=l,er(e,l,r),ae(e,r),e}function El(e,t,n,r){var l=t.current,i=ne(),u=it(l);return n=hc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ue(i,u),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=rt(l,t,u),e!==null&&(Pe(e,l,u,i),jr(e,l,u)),u}function dl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Aa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ku(e,t){Aa(e,t),(e=e.alternate)&&Aa(e,t)}function ov(){return null}function $u(e){this._internalRoot=e}function xl(e){this._internalRoot=e}function Qu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Sa(){}function av(e,t,n,r,l){if(l){if(typeof r==="function"){var i=r;r=function(){var f=dl(u);i.call(f)}}var u=yc(t,r,e,0,null,!1,!1,"",Sa);return e._reactRootContainer=u,e[Fe]=u.current,Hn(e.nodeType===8?e.parentNode:e),Ct(),u}for(;l=e.lastChild;)e.removeChild(l);if(typeof r==="function"){var o=r;r=function(){var f=dl(a);o.call(f)}}var a=Hu(e,0,!1,null,null,!1,!1,"",Sa);return e._reactRootContainer=a,e[Fe]=a.current,Hn(e.nodeType===8?e.parentNode:e),Ct(function(){El(t,a,n,r)}),a}function Cl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var u=i;if(typeof l==="function"){var o=l;l=function(){var a=dl(u);o.call(a)}}El(t,u,e,l)}else u=av(n,t,e,l,r);return dl(u)}var wa,T,ka,Mn,Oe,fi,fd,yo,go,Q,iu,Ve,yr,It,Dt,au,di,Na,Ea,su,pi,vi,cu,$e,xa,Ao,j,Yl,Hl=!1,wn,Ar,za,_n,gd,Ad,Ni=null,Ei=null,$t=null,Qt=null,$l=!1,xi=!1,mt,Ln=!1,Yr=null,Hr=!1,Pi=null,wd,Wa,Po,xd,Pd,O,Cd,du,Va,Kr,_d,Ya,pl=null,Ge=null,xe,Rd,zd,Sr=64,wr=4194304,_=0,$a,vu,Qa,Xa,Ja,_i=!1,kr,be=null,et=null,tt=null,Fn,Bn,Xe,jd,Xt,Qr=!0,Xr=null,Ze=null,hu=null,Tr=null,un,yu,tr,Bd,Xl,Jl,hn,vl,Ro,Wd,Vd,Yd,Zl,Hd,Kd,$d,Qd,Xd,zo,Jd,Zd,qd,ep,tp,np,Go,rp,lp,ip,up,op,ap,sp,Au,Rn=null,cp,es,To,Io=!1,jt=!1,pp,zn=null,Vn=null,ls=!1,Nn,En,Dr,Ce,kp,Mt=null,Ri=null,Gn=null,zi=!1,Ut,ql,as,ss,cs,fs,ds,ps,Fo,Pn,Gi,Ti,xn,Cn,Np,xr,Ep,xp,Ii=null,Di=null,Mi,Pp,Yo,Cp,on,ze,$n,Fe,Ui,Lp,Rp,Oi,Ft=-1,at,b,ue,Nt,De=null,gl=!1,ni=!1,Bt,Wt=0,el=null,tl=0,ve,me=0,Et=null,je=1,Me="",fe=null,ce=null,G=!1,Ee=null,Gp,tn,ks,nl,rl=null,Vt=null,Eu=null,At=null,Qe=!1,rr,Te,Qn,Xn,I,ri,Mr,li,xt=0,D=null,B=null,Y=null,ul=!1,Tn=!1,Jn=0,Tp=0,ol,Mp,Up,Op,Sl,Fp,Bp,ie=!1,Qi,ec,Ji,tc,nc,Rr=!1,q=!1,Kp,A=null,fa=!1,K=null,Ne=!1,Xp,al,Uu,ye,P=0,H=null,F=null,$=0,se=0,Ht,W=0,bn=null,Pt=0,kl=0,Ou=0,Dn=null,le=null,Fu=0,ln=1/0,Ie=null,sl=!1,tu=null,lt=null,zr=!1,qe=null,cl=0,jn=0,nu=null,Fr=-1,Br=0,vc,gc,sv,An,cv,Tt,Ac,Sc=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qu(t))throw Error(h(200));return uv(e,t,null,n)},wc=function(e,t){if(!Qu(e))throw Error(h(299));var n=!1,r="",l=gc;return t!==null&&t!==void 0&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Hu(e,1,!1,null,null,n,!1,r,l),e[Fe]=t.current,Hn(e.nodeType===8?e.parentNode:e),new $u(t)},kc=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0){if(typeof e.render==="function")throw Error(h(188));throw e=Object.keys(e).join(","),Error(h(268,e))}return e=Fa(t),e=e===null?null:e.stateNode,e},Nc=function(e){return Ct(e)},Ec=function(e,t,n){if(!Pl(t))throw Error(h(200));return Cl(null,e,t,!0,n)},xc=function(e,t,n){if(!Qu(e))throw Error(h(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",u=gc;if(n!==null&&n!==void 0&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=yc(t,null,e,1,n!=null?n:null,l,!1,i,u),e[Fe]=t.current,Hn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new xl(t)},Pc=function(e,t,n){if(!Pl(t))throw Error(h(200));return Cl(null,e,t,!1,n)},Cc=function(e){if(!Pl(e))throw Error(h(40));return e._reactRootContainer?(Ct(function(){Cl(null,null,e,!1,function(){e._reactRootContainer=null,e[Fe]=null})}),!0):!1},_c,Lc=function(e,t,n,r){if(!Pl(n))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return Cl(e,t,n,!1,r)},Rc="18.3.1-next-f1338f8080-20240426";var zc=Hc(()=>{wa=pt(sn(),1),T=pt(ho(),1);ka=new Set,Mn={};Oe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fi=Object.prototype.hasOwnProperty,fd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yo={},go={};Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Q[e]=new re(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Q[t]=new re(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Q[e]=new re(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Q[e]=new re(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Q[e]=new re(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Q[e]=new re(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Q[e]=new re(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Q[e]=new re(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Q[e]=new re(e,5,!1,e.toLowerCase(),null,!1,!1)});iu=/[\-:]([a-z])/g;"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(iu,uu);Q[t]=new re(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(iu,uu);Q[t]=new re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(iu,uu);Q[t]=new re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Q[e]=new re(e,1,!1,e.toLowerCase(),null,!1,!1)});Q.xlinkHref=new re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Q[e]=new re(e,1,!1,e.toLowerCase(),null,!0,!0)});Ve=wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yr=Symbol.for("react.element"),It=Symbol.for("react.portal"),Dt=Symbol.for("react.fragment"),au=Symbol.for("react.strict_mode"),di=Symbol.for("react.profiler"),Na=Symbol.for("react.provider"),Ea=Symbol.for("react.context"),su=Symbol.for("react.forward_ref"),pi=Symbol.for("react.suspense"),vi=Symbol.for("react.suspense_list"),cu=Symbol.for("react.memo"),$e=Symbol.for("react.lazy"),xa=Symbol.for("react.offscreen"),Ao=Symbol.iterator;j=Object.assign;wn=Array.isArray;za=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{Ar=Ar||document.createElement("div"),Ar.innerHTML="<svg>"+t.valueOf().toString()+"</svg>";for(t=Ar.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});_n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gd=["Webkit","ms","Moz","O"];Object.keys(_n).forEach(function(e){gd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_n[t]=_n[e]})});Ad=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});if(Oe)try{mt={},Object.defineProperty(mt,"passive",{get:function(){xi=!0}}),window.addEventListener("test",mt,mt),window.removeEventListener("test",mt,mt)}catch(e){xi=!1}wd={onError:function(e){Ln=!0,Yr=e}};Wa=T.unstable_scheduleCallback,Po=T.unstable_cancelCallback,xd=T.unstable_shouldYield,Pd=T.unstable_requestPaint,O=T.unstable_now,Cd=T.unstable_getCurrentPriorityLevel,du=T.unstable_ImmediatePriority,Va=T.unstable_UserBlockingPriority,Kr=T.unstable_NormalPriority,_d=T.unstable_LowPriority,Ya=T.unstable_IdlePriority;xe=Math.clz32?Math.clz32:Gd,Rd=Math.log,zd=Math.LN2;kr=[],Fn=new Map,Bn=new Map,Xe=[],jd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");Xt=Ve.ReactCurrentBatchConfig;un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yu=de(un),tr=j({},un,{view:0,detail:0}),Bd=de(tr),vl=j({},tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){if("movementX"in e)return e.movementX;return e!==hn&&(hn&&e.type==="mousemove"?(Xl=e.screenX-hn.screenX,Jl=e.screenY-hn.screenY):Jl=Xl=0,hn=e),Xl},movementY:function(e){return"movementY"in e?e.movementY:Jl}}),Ro=de(vl),Wd=j({},vl,{dataTransfer:0}),Vd=de(Wd),Yd=j({},tr,{relatedTarget:0}),Zl=de(Yd),Hd=j({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),Kd=de(Hd),$d=j({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qd=de($d),Xd=j({},un,{data:0}),zo=de(Xd),Jd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};ep=j({},tr,{key:function(e){if(e.key){var t=Jd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ir(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(e){return e.type==="keypress"?Ir(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ir(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tp=de(ep),np=j({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Go=de(np),rp=j({},tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),lp=de(rp),ip=j({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),up=de(ip),op=j({},vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:("wheelDeltaX"in e)?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:("wheelDeltaY"in e)?-e.wheelDeltaY:("wheelDelta"in e)?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ap=de(op),sp=[9,13,27,32],Au=Oe&&"CompositionEvent"in window;Oe&&"documentMode"in document&&(Rn=document.documentMode);cp=Oe&&"TextEvent"in window&&!Rn,es=Oe&&(!Au||Rn&&8<Rn&&11>=Rn),To=String.fromCharCode(32);pp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};if(Oe){if(Oe){if(En="oninput"in document,!En)Dr=document.createElement("div"),Dr.setAttribute("oninput","return;"),En=typeof Dr.oninput==="function";Nn=En}else Nn=!1;ls=Nn&&(!document.documentMode||9<document.documentMode)}Ce=typeof Object.is==="function"?Object.is:Sp;kp=Oe&&"documentMode"in document&&11>=document.documentMode;Ut={animationend:Er("Animation","AnimationEnd"),animationiteration:Er("Animation","AnimationIteration"),animationstart:Er("Animation","AnimationStart"),transitionend:Er("Transition","TransitionEnd")},ql={},as={};Oe&&(as=document.createElement("div").style,("AnimationEvent"in window)||(delete Ut.animationend.animation,delete Ut.animationiteration.animation,delete Ut.animationstart.animation),("TransitionEvent"in window)||delete Ut.transitionend.transition);ss=hl("animationend"),cs=hl("animationiteration"),fs=hl("animationstart"),ds=hl("transitionend"),ps=new Map,Fo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");for(xn=0;xn<Fo.length;xn++)Pn=Fo[xn],Gi=Pn.toLowerCase(),Ti=Pn[0].toUpperCase()+Pn.slice(1),st(Gi,"on"+Ti);st(ss,"onAnimationEnd");st(cs,"onAnimationIteration");st(fs,"onAnimationStart");st("dblclick","onDoubleClick");st("focusin","onFocus");st("focusout","onBlur");st(ds,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);_t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_t("onBeforeInput",["compositionend","keypress","textInput","paste"]);_t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));Cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Np=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));xr="_reactListening"+Math.random().toString(36).slice(2);Ep=/\r\n?/g,xp=/\u0000|\uFFFD/g;Mi=typeof setTimeout==="function"?setTimeout:void 0,Pp=typeof clearTimeout==="function"?clearTimeout:void 0,Yo=typeof Promise==="function"?Promise:void 0,Cp=typeof queueMicrotask==="function"?queueMicrotask:typeof Yo<"u"?function(e){return Yo.resolve(null).then(e).catch(_p)}:Mi;on=Math.random().toString(36).slice(2),ze="__reactFiber$"+on,$n="__reactProps$"+on,Fe="__reactContainer$"+on,Ui="__reactEvents$"+on,Lp="__reactListeners$"+on,Rp="__reactHandles$"+on;Oi=[];at={},b=ct(at),ue=ct(!1),Nt=at;Bt=[],ve=[];Gp=Ve.ReactCurrentBatchConfig;tn=ws(!0),ks=ws(!1),nl=ct(null);rr={},Te=ct(rr),Qn=ct(rr),Xn=ct(rr);I=ct(0);ri=[];Mr=Ve.ReactCurrentDispatcher,li=Ve.ReactCurrentBatchConfig;ol={readContext:ge,useCallback:J,useContext:J,useEffect:J,useImperativeHandle:J,useInsertionEffect:J,useLayoutEffect:J,useMemo:J,useReducer:J,useRef:J,useState:J,useDebugValue:J,useDeferredValue:J,useTransition:J,useMutableSource:J,useSyncExternalStore:J,useId:J,unstable_isNewReconciler:!1},Mp={readContext:ge,useCallback:function(e,t){return Re().memoizedState=[e,t===void 0?null:t],e},useContext:ge,useEffect:ea,useImperativeHandle:function(e,t,n){return n=n!==null&&n!==void 0?n.concat([e]):null,Ur(4194308,4,js.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ur(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ur(4,2,e,t)},useMemo:function(e,t){var n=Re();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Re();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Dp.bind(null,D,e),[r.memoizedState,e]},useRef:function(e){var t=Re();return e={current:e},t.memoizedState=e},useState:bo,useDebugValue:ju,useDeferredValue:function(e){return Re().memoizedState=e},useTransition:function(){var e=bo(!1),t=e[0];return e=Ip.bind(null,e[1]),Re().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=D,l=Re();if(G){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),H===null)throw Error(h(349));(xt&30)!==0||_s(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,ea(Rs.bind(null,r,i,e),[e]),r.flags|=2048,qn(9,Ls.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Re(),t=H.identifierPrefix;if(G){var n=Me,r=je;n=(r&~(1<<32-xe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Jn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Tp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Up={readContext:ge,useCallback:Us,useContext:ge,useEffect:Du,useImperativeHandle:Ms,useInsertionEffect:Is,useLayoutEffect:Ds,useMemo:Os,useReducer:ii,useRef:Ts,useState:function(){return ii(Zn)},useDebugValue:ju,useDeferredValue:function(e){var t=Ae();return Fs(t,B.memoizedState,e)},useTransition:function(){var e=ii(Zn)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Ps,useSyncExternalStore:Cs,useId:Bs,unstable_isNewReconciler:!1},Op={readContext:ge,useCallback:Us,useContext:ge,useEffect:Du,useImperativeHandle:Ms,useInsertionEffect:Is,useLayoutEffect:Ds,useMemo:Os,useReducer:ui,useRef:Ts,useState:function(){return ui(Zn)},useDebugValue:ju,useDeferredValue:function(e){var t=Ae();return B===null?t.memoizedState=e:Fs(t,B.memoizedState,e)},useTransition:function(){var e=ui(Zn)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Ps,useSyncExternalStore:Cs,useId:Bs,unstable_isNewReconciler:!1};Sl={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ne(),l=it(e),i=Ue(r,l);i.payload=t,n!==void 0&&n!==null&&(i.callback=n),t=rt(e,i,l),t!==null&&(Pe(t,e,l,r),jr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ne(),l=it(e),i=Ue(r,l);i.tag=1,i.payload=t,n!==void 0&&n!==null&&(i.callback=n),t=rt(e,i,l),t!==null&&(Pe(t,e,l,r),jr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ne(),r=it(e),l=Ue(n,r);l.tag=2,t!==void 0&&t!==null&&(l.callback=t),t=rt(e,l,r),t!==null&&(Pe(t,e,r,n),jr(t,e,r))}};Fp=typeof WeakMap==="function"?WeakMap:Map;Bp=Ve.ReactCurrentOwner;Qi={dehydrated:null,treeContext:null,retryLane:0};ec=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ji=function(){};tc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,St(Te.current);var i=null;switch(n){case"input":l=hi(e,l),r=hi(e,r),i=[];break;case"select":l=j({},l,{value:void 0}),r=j({},r,{value:void 0}),i=[];break;case"textarea":l=Ai(e,l),r=Ai(e,r),i=[];break;default:typeof l.onClick!=="function"&&typeof r.onClick==="function"&&(e.onclick=Zr)}wi(n,r);var u;n=null;for(f in l)if(!r.hasOwnProperty(f)&&l.hasOwnProperty(f)&&l[f]!=null)if(f==="style"){var o=l[f];for(u in o)o.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Mn.hasOwnProperty(f)?i||(i=[]):(i=i||[]).push(f,null));for(f in r){var a=r[f];if(o=l!=null?l[f]:void 0,r.hasOwnProperty(f)&&a!==o&&(a!=null||o!=null))if(f==="style")if(o){for(u in o)!o.hasOwnProperty(u)||a&&a.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in a)a.hasOwnProperty(u)&&o[u]!==a[u]&&(n||(n={}),n[u]=a[u])}else n||(i||(i=[]),i.push(f,n)),n=a;else f==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,o=o?o.__html:void 0,a!=null&&o!==a&&(i=i||[]).push(f,a)):f==="children"?typeof a!=="string"&&typeof a!=="number"||(i=i||[]).push(f,""+a):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Mn.hasOwnProperty(f)?(a!=null&&f==="onScroll"&&R("scroll",e),i||o===a||(i=[])):(i=i||[]).push(f,a))}n&&(i=i||[]).push("style",n);var f=i;if(t.updateQueue=f)t.flags|=4}};nc=function(e,t,n,r){n!==r&&(t.flags|=4)};Kp=typeof WeakSet==="function"?WeakSet:Set;Xp=Math.ceil,al=Ve.ReactCurrentDispatcher,Uu=Ve.ReactCurrentOwner,ye=Ve.ReactCurrentBatchConfig,Ht=ct(0);vc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ue.current)ie=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ie=!1,Vp(e,t,n);ie=(e.flags&131072)!==0?!0:!1}else ie=!1,G&&(t.flags&1048576)!==0&&gs(t,tl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Or(e,t),e=t.pendingProps;var l=bt(t,b.current);Jt(t,n),l=Tu(null,t,r,e,l,n);var i=Iu();return t.flags|=1,typeof l==="object"&&l!==null&&typeof l.render==="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,oe(r)?(i=!0,br(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,_u(t),l.updater=Sl,t.stateNode=l,l._reactInternals=t,Yi(t,r,e,n),t=$i(null,t,r,!0,i,n)):(t.tag=0,G&&i&&wu(t),te(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Or(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=lv(r),e=ke(r,e),l){case 0:t=Ki(null,t,r,e,n);break e;case 1:t=aa(null,t,r,e,n);break e;case 11:t=ua(null,t,r,e,n);break e;case 14:t=oa(null,t,r,ke(r.type,e),n);break e}throw Error(h(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ke(r,l),Ki(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ke(r,l),aa(e,t,r,l,n);case 3:e:{if(Zs(t),e===null)throw Error(h(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Es(e,t),ll(t,r,null,n);var u=t.memoizedState;if(r=u.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=rn(Error(h(423)),t),t=sa(e,t,r,n,l);break e}else if(r!==l){l=rn(Error(h(424)),t),t=sa(e,t,r,n,l);break e}else for(ce=nt(t.stateNode.containerInfo.firstChild),fe=t,G=!0,Ee=null,n=ks(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),r===l){t=We(e,t,n);break e}te(e,t,r,n)}t=t.child}return t;case 5:return xs(t),e===null&&Bi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,u=l.children,ji(r,l)?u=null:i!==null&&ji(r,i)&&(t.flags|=32),Js(e,t),te(e,t,u,n),t.child;case 6:return e===null&&Bi(t),null;case 13:return qs(e,t,n);case 4:return Lu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tn(t,null,r,n):te(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ke(r,l),ua(e,t,r,l,n);case 7:return te(e,t,t.pendingProps,n),t.child;case 8:return te(e,t,t.pendingProps.children,n),t.child;case 12:return te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,u=l.value,L(nl,r._currentValue),r._currentValue=u,i!==null)if(Ce(i.value,u)){if(i.children===l.children&&!ue.current){t=We(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){u=i.child;for(var a=o.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Ue(-1,n&-n),a.tag=2;var f=i.updateQueue;if(f!==null){f=f.shared;var v=f.pending;v===null?a.next=a:(a.next=v.next,v.next=a),f.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Wi(i.return,n,t),o.lanes|=n;break}a=a.next}}else if(i.tag===10)u=i.type===t.type?null:i.child;else if(i.tag===18){if(u=i.return,u===null)throw Error(h(341));u.lanes|=n,o=u.alternate,o!==null&&(o.lanes|=n),Wi(u,n,t),u=i.sibling}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===t){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}te(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Jt(t,n),l=ge(l),r=r(l),t.flags|=1,te(e,t,r,n),t.child;case 14:return r=t.type,l=ke(r,t.pendingProps),l=ke(r.type,l),oa(e,t,r,l,n);case 15:return Qs(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ke(r,l),Or(e,t),t.tag=1,oe(r)?(e=!0,br(t)):e=!1,Jt(t,n),Hs(t,r,l),Yi(t,r,l,n),$i(null,t,r,!0,e,n);case 19:return bs(e,t,n);case 22:return Xs(e,t,n)}throw Error(h(156,t.tag))};gc=typeof reportError==="function"?reportError:function(e){console.error(e)};xl.prototype.render=$u.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));El(e,t,null,null)};xl.prototype.unmount=$u.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ct(function(){El(null,e,null,null)}),t[Fe]=null}};xl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xe.length&&t!==0&&t<Xe[n].priority;n++);Xe.splice(n,0,e),n===0&&Za(e)}};$a=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kn(t.pendingLanes);n!==0&&(pu(t,n|1),ae(t,O()),(P&6)===0&&(ln=O()+500,ft()))}break;case 13:Ct(function(){var r=Be(e,1);if(r!==null){var l=ne();Pe(r,e,1,l)}}),Ku(e,1)}};vu=function(e){if(e.tag===13){var t=Be(e,134217728);if(t!==null){var n=ne();Pe(t,e,134217728,n)}Ku(e,134217728)}};Qa=function(e){if(e.tag===13){var t=it(e),n=Be(e,t);if(n!==null){var r=ne();Pe(n,e,t,r)}Ku(e,t)}};Xa=function(){return _};Ja=function(e,t){var n=_;try{return _=e,t()}finally{_=n}};Ei=function(e,t,n){switch(t){case"input":if(yi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]');for(t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=yl(r);if(!l)throw Error(h(90));Ca(r),yi(r,l)}}}break;case"textarea":La(e,n);break;case"select":t=n.value,t!=null&&Kt(e,!!n.multiple,t,!1)}};ja=Bu;Ma=Ct;sv={usingClientEntryPoint:!1,Events:[nr,Ot,yl,Ia,Da,Bu]},An={findFiberByHostInstance:gt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cv={bundleType:An.bundleType,version:An.version,rendererPackageName:An.rendererPackageName,rendererConfig:An.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ve.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fa(e),e===null?null:e.stateNode},findFiberByHostInstance:An.findFiberByHostInstance||ov,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){if(Tt=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Tt.isDisabled&&Tt.supportsFiber)try{pl=Tt.inject(cv),Ge=Tt}catch(e){}}Ac=sv,_c=Bu});var Ic=ur((wv,Tc)=>{zc();function Gc(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=="function")return;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gc)}catch(e){console.error(e)}}Gc(),Tc.exports=Xu});var Dc=ur((dv)=>{var lr=pt(Ic(),1);dv.createRoot=lr.createRoot,dv.hydrateRoot=lr.hydrateRoot;var fv});var Mc=pt(sn(),1),Uc=pt(Dc(),1);var ir=pt(sn(),1);var jc=pt(sn(),1),pv=Symbol.for("react.element");var vv=Object.prototype.hasOwnProperty,mv=jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hv={key:!0,ref:!0,__self:!0,__source:!0};function yv(e,t,n){var r,l={},i=null,u=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(u=t.ref);for(r in t)vv.call(t,r)&&!hv.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:pv,type:e,key:i,ref:u,props:l,_owner:mv.current}}var dt=yv;function Ju(){let e=ir.useRef(null),t=ir.useRef(!1);return ir.useEffect(()=>{if(t.current)return;t.current=!0;let n=e.current;if(!n)return;n.innerHTML=`
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Noto+Sans+Javanese:wght@400;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        :root{
          --cream:#FFF8E7;
          --brown:#5D4037;
          --gold:#D4A017;
          --gold2:#FFD54F;
          --green:#2E7D32;
          --red:#C62828;
          --yellow:#F9A825;
          --blue:#1565C0;
          --orange:#EF6C00;
          --purple:#6A1B9A;
        }
        body{background:var(--cream)}
        .jawa{font-family:'Noto Sans Javanese','Plus Jakarta Sans',serif}
        .sans{font-family:'Plus Jakarta Sans',sans-serif}
        #wrap{max-width:760px;margin:0 auto;background:var(--cream);min-height:100vh;position:relative;overflow-x:clip}
        .topbar{position:sticky;top:0;z-index:20;background:rgba(255,248,231,0.92);backdrop-filter:blur(12px);border-bottom:2px solid #3E272314;padding:12px 16px;display:flex;justify-content:space-between;align-items:center}
        .pill{font-size:11px;font-weight:800;letter-spacing:.08em;padding:6px 10px;border-radius:999px;display:inline-flex;align-items:center;gap:6px}
        .btn{border:0;border-radius:16px;padding:14px 18px;font-family:'Plus Jakarta Sans';font-weight:800;cursor:pointer;transition:.15s;user-select:none}
        .btn:active{transform:scale(.97)}
        .btn-primary{background:var(--brown);color:#fff;box-shadow:0 6px 0 #3E2723, 0 10px 20px #3E272333}
        .btn-gold{background:var(--gold);color:var(--brown);box-shadow:0 6px 0 #9E7600}
        .btn-ghost{background:#fff;border:2px dashed #5D403740;color:var(--brown)}
        .btn-big{width:100%;font-size:18px;padding:18px;border-radius:20px}
        .card{background:#fff;border:2px solid #5D403710;border-radius:24px;padding:18px;box-shadow:0 4px 0 #5D40370D}
        .writeBox{min-height:88px;background:#fff;border:2.5px dashed #5D403740;border-radius:20px;display:flex;align-items:center;justify-content:center;padding:16px;text-align:center;font-size:34px;line-height:1.2;transition:.2s;word-break:break-all}
        .writeBox.filled{border-style:solid;border-color:var(--brown)}
        .writeBox.correct{border-color:var(--green);background:#E8F5E9}
        .writeBox.wrong{border-color:var(--red);background:#FFEBEE;animation:shake .35s}
        @keyframes shake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}
        .aksGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:14px}
        .aksBtn{height:72px;border-radius:18px;border:2px solid #5D403715;background:#fff;font-family:'Noto Sans Javanese';font-size:28px;font-weight:700;color:var(--brown);cursor:pointer;transition:.12s;box-shadow:0 3px 0 #5D40370F}
        .aksBtn:active{transform:translateY(2px);box-shadow:0 1px 0 #5D40370F}
        .badge{display:inline-block;padding:5px 10px;border-radius:999px;font-size:11px;font-weight:800;letter-spacing:.04em}
        .b-ng{background:#E3F2FD;color:var(--blue)}
        .b-su{background:#E8F5E9;color:var(--green)}
        .b-pa{background:#FFF3E0;color:var(--orange)}
        .b-pas{background:#F3E5F5;color:var(--purple)}
        .b-campur{background:#FFF8E0;color:#5D4037;border:1px solid #D4A01755}
        .prog{height:8px;background:#5D403710;border-radius:99px;overflow:hidden}
        .prog>div{height:100%;transition:width .4s}
        .view{display:none}
        .view.active{display:block;animation:fade .25s}
        @keyframes fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        .qrBox{width:132px;height:132px;background:#fff;border-radius:18px;display:flex;align-items:center;justify-content:center;border:2px solid #5D403710;overflow:hidden}
        .studentRow{display:flex;gap:10px;align-items:center;padding:10px 12px;background:#fff;border-radius:16px;border:1.5px solid #5D40370D;margin-bottom:8px}
        .dot{width:10px;height:10px;border-radius:50%}
        .latin{font-weight:800;letter-spacing:.12em;color:var(--brown);font-size:26px;line-height:1.1}
        .levelGrid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
        @media(max-width:560px){.levelGrid{grid-template-columns:1fr}}
        .levelItem{display:flex;gap:10px;align-items:flex-start;padding:10px 12px;background:#FFF8E7;border:1.5px solid #5D403718;border-radius:14px;cursor:pointer;transition:.12s}
        .levelItem:has(input:checked){background:#FFFBEB;border-color:#D4A017;box-shadow:0 2px 0 #D4A01722}
        .levelItem input{margin-top:4px;width:16px;height:16px;accent-color:#5D4037}
        .qCountGroup{display:flex;gap:8px;flex-wrap:wrap}
        .qCountBtn{padding:10px 16px;border-radius:12px;border:2px solid #5D403720;background:#fff;font-weight:800;cursor:pointer;font-size:13px;transition:.12s}
        .qCountBtn.active{background:#5D4037;color:#fff;border-color:#5D4037;box-shadow:0 3px 0 #3E2723}
        .orderGroup{display:flex;gap:8px;margin-top:10px}
        .orderBtn{flex:1;padding:10px 12px;border-radius:12px;border:2px solid #5D403720;background:#fff;font-weight:800;cursor:pointer;font-size:12px;transition:.12s}
        .orderBtn.active{background:#FFF8E7;border-color:#D4A017;color:#5D4037;box-shadow:0 2px 0 #D4A01733}
        @media(max-width:390px){.latin{font-size:20px}.aksBtn{height:64px;font-size:24px}.writeBox{font-size:28px;min-height:76px}}
      </style>

      <div id="wrap" class="sans">
        <div class="topbar">
          <div style="display:flex;align-items:center;gap:10px">
            <div style="width:36px;height:36px;border-radius:12px;background:#5D4037;color:#FFF8E7;display:grid;place-items:center;font-weight:800" class="jawa">ꦲ</div>
            <div>
              <div style="font-weight:800;line-height:1;color:#5D4037">HANACARAKA SPRINT</div>
              <div style="font-size:11px;opacity:.7;font-weight:700;letter-spacing:.08em">8 LEVEL • 100+ SOAL • P2P 30 SISWA</div>
            </div>
          </div>
          <div style="display:flex;gap:8px">
            <button id="btnHome" class="btn" style="padding:8px 12px;background:#fff;border:1.5px solid #5D403720;font-size:12px">BERANDA</button>
            <div class="pill" style="background:#5D4037;color:#FFF8E7">MAX 30</div>
          </div>
        </div>

        <div id="v-landing" class="view active" style="padding:18px">
          <div style="text-align:center;padding:18px 6px 10px">
            <div style="display:inline-flex;gap:6px;margin-bottom:14px;flex-wrap:wrap;justify-content:center">
              <span class="badge b-ng">1 Nglegena</span>
              <span class="badge b-su">2 Swara</span>
              <span class="badge b-pa">3 Panyigeg</span>
              <span class="badge b-pas">4 Wyanjana</span>
              <span class="badge b-pas">5 Pasangan</span>
              <span class="badge b-su">6 Pas+Swara</span>
              <span class="badge b-pa">7 Pas+Panyigeg</span>
              <span class="badge b-campur">8 Campur</span>
            </div>
            <h1 style="font-size:34px;line-height:.95;font-weight:800;color:#5D4037;letter-spacing:-.02em">Tulis ꦗꦮ,<br>Submit, Dapat Skor!</h1>
            <p style="margin-top:12px;color:#5D4037CC;font-weight:600;line-height:1.5;font-size:14px">Guru kini bisa <b>pilih level</b> sebelum mulai: centang level yang mau dilatih, pilih jumlah soal 5/10/15/20, pilih acak atau berurutan. Bank soal sudah <b>101 soal</b> lengkap pasangan, sandhangan, panyigeg.</p>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:8px">
            <button id="goHost" class="btn btn-primary btn-big" style="display:flex;flex-direction:column;align-items:center;gap:4px">
              <span style="font-size:22px">\uD83C\uDF93</span> JADI HOST
              <span style="font-size:11px;opacity:.8;font-weight:600">Pilih Level & Buat Room</span>
            </button>
            <button id="goJoin" class="btn btn-gold btn-big" style="display:flex;flex-direction:column;align-items:center;gap:4px">
              <span style="font-size:22px">✍️</span> JOIN SISWA
              <span style="font-size:11px;opacity:.9;font-weight:600">Kode 4 Huruf</span>
            </button>
          </div>

          <button id="goSim" class="btn btn-ghost btn-big" style="margin-top:12px">\uD83C\uDFAE SIMULASI LOKAL (8 Level, 101 Soal) + 2 BOT</button>

          <div class="card" style="margin-top:16px">
            <div style="font-weight:800;color:#5D4037;margin-bottom:10px">\uD83E\uDDE9 Fitur Guru Pilih Level</div>
            <div style="display:grid;gap:10px;font-size:13px;line-height:1.5;color:#5D4037DB;font-weight:600">
              <div>• <b>8 Kategori:</b> Nglegena Dasar, Sandhangan Swara, Panyigeg, Wyanjana, Pasangan Dasar, Pasangan+Swara, Pasangan+Panyigeg, Campur Lengkap.</div>
              <div>• <b>Jumlah Soal:</b> 5 / 10 / 15 / 20 – sistem ambil acak dari level yang dicentang, atau berurutan sesuai bank.</div>
              <div>• <b>101 Soal</b> dengan unicode Jawa valid, parts terpecah untuk model tap-rangkai, hint sandhangan, dan feedback detail.</div>
              <div>• <b>Tetap P2P max 30</b>, tulis → submit, 3x kesempatan -15 poin, setelah 3x salah dapat 10 poin + lihat jawaban.</div>
            </div>
          </div>

          <div style="text-align:center;margin-top:18px;font-size:11px;color:#5D403780;font-weight:700;letter-spacing:.06em">VANILLA JS • 8 LEVEL • 101 SOAL • FILE:// & HTTPS • PEERJS 1.5.4</div>
        </div>

        <div id="v-host" class="view" style="padding:16px">
          <div class="card">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px">
              <div>
                <div style="font-size:11px;font-weight:800;letter-spacing:.12em;opacity:.6">KODE ROOM</div>
                <div id="hostCode" style="font-size:44px;font-weight:800;letter-spacing:.18em;color:#5D4037;line-height:1">----</div>
                <div id="hostPeerId" style="font-size:10px;opacity:.5;word-break:break-all;margin-top:4px"></div>
                <div style="display:flex;gap:8px;margin-top:12px;align-items:center">
                  <button id="hostCopy" class="btn" style="padding:8px 12px;background:#5D4037;color:#fff;font-size:12px">SALIN KODE</button>
                  <div style="font-size:12px;font-weight:700" id="hostCount">0 / 30 siswa</div>
                </div>
              </div>
              <div class="qrBox"><img id="hostQr" style="width:100%;height:100%;object-fit:cover" alt="qr"/><div id="hostQrFallback" style="display:none;text-align:center;padding:10px"><div style="font-size:32px" class="jawa">ꦲ</div><div style="font-size:10px;font-weight:800">SCAN CODE</div></div></div>
            </div>
          </div>

          <div id="hostLevelCard" class="card" style="margin-top:12px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;gap:8px;flex-wrap:wrap">
              <div style="font-weight:800;color:#5D4037">\uD83C\uDF9A️ PILIH LEVEL (GURU)</div>
              <div style="display:flex;gap:6px">
                <button id="btnCheckAll" class="btn" style="padding:6px 10px;font-size:11px;background:#FFF8E7;border:1.5px solid #5D403720">SEMUA</button>
                <button id="btnUncheckAll" class="btn" style="padding:6px 10px;font-size:11px;background:#fff;border:1.5px solid #5D403720">KOSONGKAN</button>
              </div>
            </div>
            <div class="levelGrid" id="levelGrid">
              <label class="levelItem"><input type="checkbox" class="levelChk" data-level="NGLEGENA" checked><div><div style="font-weight:800;font-size:13px">1. NGLEGENA DASAR (20 aksara)</div><div style="font-size:11px;opacity:.7">HA NA CA RA KA • 10 soal</div><div style="margin-top:4px"><span class="badge b-ng">Nglegena</span> <span style="font-size:10px;opacity:.6">ꦲꦤꦕꦫꦏ</span></div></div></label>
              <label class="levelItem"><input type="checkbox" class="levelChk" data-level="SWARA" checked><div><div style="font-weight:800;font-size:13px">2. SANDHANGAN SWARA</div><div style="font-size:11px;opacity:.7">wulu ꦶ suku ꦸ taling ꦺ pepet ꦼ • 15 soal</div><div style="margin-top:4px"><span class="badge b-su">Swara</span> <span style="font-size:10px;opacity:.6">ꦧꦸꦏꦸ ꦱꦠꦺ</span></div></div></label>
              <label class="levelItem"><input type="checkbox" class="levelChk" data-level="PANYIGEG" checked><div><div style="font-weight:800;font-size:13px">3. PANYIGEG</div><div style="font-size:11px;opacity:.7">cecak ꦁ layar ꦂ wignyan ꦃ pangkon ꧀ • 15 soal</div><div style="margin-top:4px"><span class="badge b-pa">Panyigeg</span> <span style="font-size:10px;opacity:.6">ꦒꦺꦴꦁ ꦮꦂꦒ</span></div></div></label>
              <label class="levelItem"><input type="checkbox" class="levelChk" data-level="WYANJANA" checked><div><div style="font-weight:800;font-size:13px">4. WYANJANA</div><div style="font-size:11px;opacity:.7">cakra ꦿ pengkal ꦾ • 10 soal</div><div style="margin-top:4px"><span class="badge b-pas">Wyanjana</span> <span style="font-size:10px;opacity:.6">ꦏꦿꦠꦺꦴꦤ꧀ ꦢ꧀ꦮꦶ</span></div></div></label>
              <label class="levelItem"><input type="checkbox" class="levelChk" data-level="PASANGAN" checked><div><div style="font-weight:800;font-size:13px">5. PASANGAN DASAR</div><div style="font-size:11px;opacity:.7">꧀ꦏ ꧀ꦱ ꧀ꦢ ꧀ꦩ • 12 soal</div><div style="margin-top:4px"><span class="badge b-pas">Pasangan</span> <span style="font-size:10px;opacity:.6">ꦲꦏ꧀ꦱ ꦱꦧ꧀ꦢ</span></div></div></label>
              <label class="levelItem"><input type="checkbox" class="levelChk" data-level="PASANGAN_SWARA" checked><div><div style="font-weight:800;font-size:13px">6. PASANGAN + SWARA</div><div style="font-size:11px;opacity:.7">pasangan + wulu/suku/taling • 12 soal</div><div style="margin-top:4px"><span class="badge b-su">Pas+Swara</span> <span style="font-size:10px;opacity:.6">ꦩꦤ꧀ꦢꦶ ꦥꦸꦠꦿꦶ</span></div></div></label>
              <label class="levelItem"><input type="checkbox" class="levelChk" data-level="PASANGAN_PANYIGEG" checked><div><div style="font-weight:800;font-size:13px">7. PASANGAN + PANYIGEG</div><div style="font-size:11px;opacity:.7">pasangan + cecak/layar/pangkon • 12 soal</div><div style="margin-top:4px"><span class="badge b-pa">Pas+Panyigeg</span> <span style="font-size:10px;opacity:.6">ꦱꦁꦏꦤ꧀ ꦩꦤ꧀ꦠꦿ</span></div></div></label>
              <label class="levelItem"><input type="checkbox" class="levelChk" data-level="CAMPUR" checked><div><div style="font-weight:800;font-size:13px">8. CAMPUR LENGKAP</div><div style="font-size:11px;opacity:.7">semua kombinasi sulit • 15 soal</div><div style="margin-top:4px"><span class="badge b-campur">Campur</span> <span style="font-size:10px;opacity:.6">ꦩꦭꦶꦪꦺꦴꦧꦺꦴꦫꦺꦴ</span></div></div></label>
            </div>

            <div style="margin-top:16px">
              <div style="font-weight:800;font-size:12px;letter-spacing:.06em;opacity:.7">JUMLAH SOAL</div>
              <div class="qCountGroup" style="margin-top:8px">
                <button class="qCountBtn" data-count="5">5 Soal</button>
                <button class="qCountBtn active" data-count="10">10 Soal</button>
                <button class="qCountBtn" data-count="15">15 Soal</button>
                <button class="qCountBtn" data-count="20">20 Soal</button>
              </div>
              <div class="orderGroup">
                <button class="orderBtn active" id="orderRandom" data-order="random">\uD83D\uDD00 Pilih Acak</button>
                <button class="orderBtn" id="orderSeq" data-order="seq">\uD83D\uDCCB Berurutan</button>
              </div>
              <div id="levelSummary" style="margin-top:12px;font-size:12px;font-weight:700;color:#5D4037CC;background:#FFF8E7;border:1px dashed #5D403740;border-radius:12px;padding:10px">101 soal tersedia • akan dipakai 10 soal acak</div>
            </div>

            <div style="margin-top:14px;display:flex;gap:8px">
              <button id="hostStart" class="btn btn-primary" style="flex:1">MULAI BALAPAN ▶</button>
            </div>
            <div style="margin-top:8px;display:flex;gap:8px">
              <button id="hostLeave" class="btn btn-ghost" style="flex:1;font-size:13px;padding:10px">KELUAR & BERSIHKAN</button>
            </div>
          </div>

          <div id="hostLobbyList" class="card" style="margin-top:12px">
            <div style="font-weight:800;color:#5D4037;margin-bottom:10px">Daftar Siswa (<span id="hostLobbyCount">0</span>)</div>
            <div id="hostPlayers"></div>
            <div id="hostEmpty" style="text-align:center;padding:18px;color:#5D403760;font-weight:700;font-size:13px">Belum ada siswa join. Bagikan kode 4 huruf.</div>
          </div>

          <div id="hostGame" class="card" style="margin-top:12px;display:none">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:8px">
              <div style="display:flex;gap:8px;align-items:center"><span id="hostQIdx" class="pill" style="background:#5D4037;color:#fff">SOAL 1/10</span><span id="hostLevel" class="badge b-ng">Nglegena</span></div>
              <div id="hostTimer" style="font-weight:800;color:#C62828">90s</div>
            </div>
            <div style="text-align:center;padding:8px 0">
              <div id="hostLatin" class="latin">HA NA CA RA KA</div>
              <div style="margin-top:6px"><span class="jawa" id="hostJawa" style="font-size:28px;color:#5D4037">ꦲꦤꦕꦫꦏ</span> <span style="font-size:11px;opacity:.6" id="hostHint">hint</span></div>
              <div class="prog" style="margin-top:12px"><div id="hostProgGlobal" style="width:0%;background:var(--gold)"></div></div>
              <div style="font-size:11px;margin-top:6px;opacity:.7;font-weight:700"><span id="hostFinishedCount">0</span> sudah submit benar • <span id="hostTotalCount">0</span> total</div>
            </div>
            <div style="display:flex;gap:8px;margin-top:12px">
              <button id="hostNext" class="btn btn-primary" style="flex:1">NEXT SOAL →</button>
              <button id="hostEndQ" class="btn" style="background:#fff;border:1.5px solid #5D403720;flex:1">AKHIRI SOAL</button>
            </div>
          </div>

          <div id="hostTrack" style="margin-top:12px;display:none"></div>
          <div id="hostPodium" class="card" style="margin-top:12px;display:none"></div>
          <div id="hostFinal" class="card" style="margin-top:12px;display:none"></div>
        </div>

        <div id="v-player" class="view" style="padding:16px">
          <div class="card" id="playerJoinCard">
            <div style="font-weight:800;font-size:18px;color:#5D4037">Masuk Kelas</div>
            <div style="margin-top:12px;display:grid;gap:10px">
              <input id="joinCode" placeholder="KODE 4 HURUF (contoh: AB CD)" maxlength="4" style="padding:14px 16px;border-radius:14px;border:2px solid #5D403720;font-family:'Plus Jakarta Sans';font-weight:800;letter-spacing:.2em;text-transform:uppercase;font-size:18px;text-align:center"/>
              <input id="joinName" placeholder="Nama kamu" maxlength="14" style="padding:14px 16px;border-radius:14px;border:2px solid #5D403720;font-family:'Plus Jakarta Sans';font-weight:700;font-size:15px"/>
              <button id="btnJoin" class="btn btn-primary btn-big">GABUNG \uD83D\uDE80</button>
              <button id="btnJoinBack" class="btn btn-ghost">Kembali</button>
              <div id="joinErr" style="font-size:12px;color:#C62828;font-weight:700;display:none"></div>
            </div>
          </div>

          <div id="playerLobby" class="card" style="margin-top:12px;display:none;text-align:center">
            <div style="font-size:36px">⏳</div>
            <div style="font-weight:800;margin-top:6px;color:#5D4037">Menunggu guru memulai...</div>
            <div style="font-size:13px;opacity:.7;margin-top:6px;font-weight:600">Kamu: <span id="playerLobbyName"></span> • Skor total: <span id="playerLobbyScore">0</span></div>
            <div style="margin-top:12px" class="prog"><div style="width:60%;background:var(--gold)" id="playerLobbyBar"></div></div>
          </div>

          <div id="playerGame" style="display:none;margin-top:12px">
            <div class="card">
              <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;flex-wrap:wrap">
                <div style="display:flex;gap:6px;align-items:center"><span id="pQIdx" class="pill" style="background:#5D4037;color:#fff">1/10</span><span id="pLevel" class="badge b-ng">Nglegena</span></div>
                <div style="font-size:12px;font-weight:800"><span id="pStreak">\uD83D\uDD250</span> • <span id="pTotal">0 poin</span></div>
              </div>
              <div style="text-align:center;margin-top:14px">
                <div id="pLatin" class="latin">HA NA CA RA KA</div>
                <div style="font-size:11px;margin-top:6px;font-weight:700;opacity:.7" id="pHint">hint</div>
                <div style="margin-top:6px;font-size:11px;opacity:.6">Target: <span class="jawa" id="pTargetJawa" style="font-size:14px;color:#5D4037">ꦲꦤꦕꦫꦏ</span></div>
              </div>

              <div style="margin-top:14px">
                <div style="font-size:11px;font-weight:800;letter-spacing:.08em;opacity:.6;margin-bottom:6px">TULISAN KAMU:</div>
                <div id="pWrite" class="writeBox jawa">- ketuk aksara di bawah -</div>
                <div style="display:flex;gap:8px;margin-top:8px">
                  <button id="pDelOne" class="btn" style="flex:1;background:#fff;border:1.5px solid #5D403720;font-size:13px">⌫ Hapus Satu</button>
                  <button id="pDelAll" class="btn" style="flex:1;background:#fff;border:1.5px solid #5D403720;font-size:13px">\uD83D\uDDD1️ Hapus Semua</button>
                </div>
              </div>

              <div id="pGrid" class="aksGrid"></div>
              <button id="pSubmit" class="btn btn-gold btn-big" style="margin-top:14px;box-shadow:0 6px 0 #9E7600">SUBMIT JAWABAN ✔</button>
              <div id="pFeedback" style="margin-top:12px;display:none"></div>
              <div id="pContinue" style="display:none;margin-top:12px">
                <button id="pNextForce" class="btn btn-primary btn-big">LANJUT DENGAN 10 POIN →</button>
              </div>
            </div>

            <div class="card" style="margin-top:12px">
              <div style="font-size:11px;font-weight:800;opacity:.6">RIWAYAT SOAL INI</div>
              <div id="pHistory" style="margin-top:8px;font-size:12px;font-weight:600;color:#5D4037CC"></div>
            </div>
          </div>

          <div id="playerDone" class="card" style="margin-top:12px;display:none;text-align:center">
            <div style="font-size:42px">\uD83C\uDF89</div>
            <div style="font-weight:800;font-size:18px;color:#5D4037;margin-top:6px">Kamu selesai!</div>
            <div style="font-size:13px;margin-top:6px">Total poin: <b id="playerDoneScore">0</b> • Streak terbaik: <b id="playerDoneStreak">0</b></div>
            <div style="margin-top:10px;font-size:12px;opacity:.7">Tunggu klasemen akhir dari guru</div>
          </div>
        </div>

        <div id="v-sim" class="view" style="padding:16px">
          <div class="card" style="display:flex;justify-content:space-between;align-items:center">
            <div style="font-weight:800;color:#5D4037">Simulasi Lokal 8 Level</div>
            <div style="display:flex;gap:6px"><span class="pill" style="background:#E8F5E9;color:#2E7D32">101 SOAL</span><span class="pill" style="background:#5D4037;color:#fff">BOT 2</span></div>
          </div>
          <div class="card" style="margin-top:12px">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;flex-wrap:wrap">
              <div style="display:flex;gap:6px;align-items:center"><span id="sQIdx" class="pill" style="background:#5D4037;color:#fff">1/10</span><span id="sLevel" class="badge b-ng">Nglegena</span></div>
              <div style="font-size:12px;font-weight:800">Skor: <span id="sTotal">0</span> • <span id="sStreak">\uD83D\uDD250</span></div>
            </div>
            <div style="text-align:center;margin-top:12px">
              <div id="sLatin" class="latin">HA NA CA RA KA</div>
              <div id="sHint" style="font-size:11px;opacity:.6;margin-top:4px;font-weight:700">hint</div>
              <div class="jawa" id="sTarget" style="font-size:18px;margin-top:6px;opacity:.7">ꦲꦤꦕꦫꦏ</div>
            </div>
            <div style="margin-top:12px"><div id="sWrite" class="writeBox jawa">- ketuk aksara -</div>
            <div style="display:flex;gap:8px;margin-top:8px"><button id="sDelOne" class="btn" style="flex:1;background:#fff;border:1.5px solid #5D403720">⌫ Satu</button><button id="sDelAll" class="btn" style="flex:1;background:#fff;border:1.5px solid #5D403720">\uD83D\uDDD1️ Semua</button></div></div>
            <div id="sGrid" class="aksGrid"></div>
            <button id="sSubmit" class="btn btn-gold btn-big" style="margin-top:12px">SUBMIT ✔</button>
            <div id="sFeedback" style="margin-top:10px;display:none"></div>
            <div style="display:flex;gap:8px;margin-top:12px"><button id="sNext" class="btn btn-primary" style="flex:1;display:none">NEXT →</button><button id="sForce" class="btn btn-ghost" style="flex:1;display:none">Lanjut 10 poin</button></div>
          </div>
          <div class="card" style="margin-top:12px">
            <div style="font-weight:800;font-size:13px;color:#5D4037">Klasemen Simulasi (Kamu + 2 Bot)</div>
            <div id="sBoard" style="margin-top:10px"></div>
          </div>
          <button id="simBack" class="btn btn-ghost" style="width:100%;margin-top:12px">Kembali ke Beranda</button>
        </div>

        <footer style="padding:18px;text-align:center">
          <div style="font-size:11px;font-weight:800;letter-spacing:.08em;color:#5D4037;opacity:.8">GURU PILIH LEVEL • 8 KATEGORI • 101 SOAL • MAX 30 SISWA</div>
          <div style="font-size:11px;line-height:1.6;color:#5D4037CC;margin-top:8px;font-weight:600;max-width:600px;margin-inline:auto">
            Pilih level sebelum Mulai Balapan: centang level, pilih 5/10/15/20 soal, acak atau berurutan. P2P tetap jalan via PeerJS, simpan file sebagai index.html untuk GitHub Pages.
          </div>
          <div style="margin-top:12px;font-size:10px;opacity:.5">© Hanacaraka Sprint Lengkap • 101 Soal • Cream #FFF8E7 • Brown #5D4037 • Gold #D4A017</div>
        </footer>
      </div>

      <script src="https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js"><\/script>
      <script>
        window.peer = window.peer || null;
        window.conns = window.conns || {};
        window.timerInterval = window.timerInterval || null;
        window.hostTimerInterval = window.hostTimerInterval || null;
        function cleanupAll(){
          try{ if(window.timerInterval) clearInterval(window.timerInterval); }catch(e){}
          try{ if(window.hostTimerInterval) clearInterval(window.hostTimerInterval); }catch(e){}
          try{ Object.values(window.conns||{}).forEach(c=>{ try{c.close()}catch(e){} }); }catch(e){}
          try{ if(window.peer){ window.peer.destroy(); } }catch(e){}
          window.peer=null; window.conns={}; window.timerInterval=null; window.hostTimerInterval=null;
        }
        const QB_BY_LEVEL = {
          NGLEGENA: [
            {latin:"HA NA CA RA KA", jawa:"ꦲꦤꦕꦫꦏ", parts:["ꦲ","ꦤ","ꦕ","ꦫ","ꦏ"], level:"NGLEGENA DASAR", hint:"20 aksara dasar"},
            {latin:"DA TA SA WA LA", jawa:"ꦢꦠꦱꦮꦭ", parts:["ꦢ","ꦠ","ꦱ","ꦮ","ꦭ"], level:"NGLEGENA DASAR", hint:"da-ta-sa-wa-la"},
            {latin:"PA DHA JA YA NYA", jawa:"ꦥꦝꦗꦪꦚ", parts:["ꦥ","ꦝ","ꦗ","ꦪ","ꦚ"], level:"NGLEGENA DASAR", hint:"pa-dha-ja-ya-nya"},
            {latin:"MA GA BA THA NGA", jawa:"ꦩꦒꦧꦛꦔ", parts:["ꦩ","ꦒ","ꦧ","ꦛ","ꦔ"], level:"NGLEGENA DASAR", hint:"ma-ga-ba-tha-nga"},
            {latin:"HANACARAKA", jawa:"ꦲꦤꦕꦫꦏ", parts:["ꦲ","ꦤ","ꦕ","ꦫ","ꦏ"], level:"NGLEGENA DASAR", hint:"Ha-na-ca-ra-ka"},
            {latin:"DATASAWALA", jawa:"ꦢꦠꦱꦮꦭ", parts:["ꦢ","ꦠ","ꦱ","ꦮ","ꦭ"], level:"NGLEGENA DASAR", hint:"da-ta-sa-wa-la"},
            {latin:"PADHAJAYANYA", jawa:"ꦥꦝꦗꦪꦚ", parts:["ꦥ","ꦝ","ꦗ","ꦪ","ꦚ"], level:"NGLEGENA DASAR", hint:"pa-dha-ja-ya-nya"},
            {latin:"MAGABATHANGA", jawa:"ꦩꦒꦧꦛꦔ", parts:["ꦩ","ꦒ","ꦧ","ꦛ","ꦔ"], level:"NGLEGENA DASAR", hint:"ma-ga-ba-tha-nga"},
            {latin:"CARAKA", jawa:"ꦕꦫꦏ", parts:["ꦕ","ꦫ","ꦏ"], level:"NGLEGENA DASAR", hint:"ca-ra-ka"},
            {latin:"JAWI", jawa:"ꦗꦮꦶ", parts:["ꦗ","ꦮꦶ"], level:"NGLEGENA DASAR", hint:"ja-wi pakai wulu i, dasar"}
          ],
          SWARA: [
            {latin:"BUKU", jawa:"ꦧꦸꦏꦸ", parts:["ꦧꦸ","ꦏꦸ"], level:"SANDHANGAN SWARA", hint:"Suku u ꦸ di bawah"},
            {latin:"SATE", jawa:"ꦱꦠꦺ", parts:["ꦱ","ꦠꦺ"], level:"SANDHANGAN SWARA", hint:"Taling e ꦺ depan"},
            {latin:"MIE", jawa:"ꦩꦶ", parts:["ꦩꦶ"], level:"SANDHANGAN SWARA", hint:"Wulu i ꦶ di atas"},
            {latin:"SEGO", jawa:"ꦱꦼꦒ", parts:["ꦱꦼ","ꦒ"], level:"SANDHANGAN SWARA", hint:"Pepet ê ꦼ"},
            {latin:"MOTO", jawa:"ꦩꦺꦴꦠ", parts:["ꦩꦺꦴ","ꦠ"], level:"SANDHANGAN SWARA", hint:"Taling Tarung o ꦺꦴ"},
            {latin:"GULA", jawa:"ꦒꦸꦭ", parts:["ꦒꦸ","ꦭ"], level:"SANDHANGAN SWARA", hint:"Suku u"},
            {latin:"KALI", jawa:"ꦏꦭꦶ", parts:["ꦏ","ꦭꦶ"], level:"SANDHANGAN SWARA", hint:"Wulu i"},
            {latin:"PADI", jawa:"ꦥꦢꦶ", parts:["ꦥ","ꦢꦶ"], level:"SANDHANGAN SWARA", hint:"Wulu i di akhir"},
            {latin:"BOLA", jawa:"ꦧꦺꦴꦭ", parts:["ꦧꦺꦴ","ꦭ"], level:"SANDHANGAN SWARA", hint:"Taling Tarung o"},
            {latin:"SOTO", jawa:"ꦱꦺꦴꦠ", parts:["ꦱꦺꦴ","ꦠ"], level:"SANDHANGAN SWARA", hint:"Taling Tarung o"},
            {latin:"SUSU", jawa:"ꦱꦸꦱꦸ", parts:["ꦱꦸ","ꦱꦸ"], level:"SANDHANGAN SWARA", hint:"Suku u ganda"},
            {latin:"KIKI", jawa:"ꦏꦶꦏꦶ", parts:["ꦏꦶ","ꦏꦶ"], level:"SANDHANGAN SWARA", hint:"Wulu i ganda"},
            {latin:"LELE", jawa:"ꦭꦺꦭꦺ", parts:["ꦭꦺ","ꦭꦺ"], level:"SANDHANGAN SWARA", hint:"Taling e ganda"},
            {latin:"PEPE", jawa:"ꦥꦼꦥꦼ", parts:["ꦥꦼ","ꦥꦼ"], level:"SANDHANGAN SWARA", hint:"Pepet ê ganda"},
            {latin:"LARI", jawa:"ꦭꦫꦶ", parts:["ꦭ","ꦫꦶ"], level:"SANDHANGAN SWARA", hint:"Wulu i di ri"}
          ],
          PANYIGEG: [
            {latin:"GONG", jawa:"ꦒꦺꦴꦁ", parts:["ꦒꦺꦴꦁ"], level:"PANYIGEG", hint:"Cecak ng ꦁ"},
            {latin:"SARUNG", jawa:"ꦱꦫꦸꦁ", parts:["ꦱ","ꦫꦸ","ꦁ"], level:"PANYIGEG", hint:"Cecak + Suku"},
            {latin:"RUMAH", jawa:"ꦫꦸꦩꦃ", parts:["ꦫꦸ","ꦩ","ꦃ"], level:"PANYIGEG", hint:"Wignyan h ꦃ"},
            {latin:"WARGA", jawa:"ꦮꦂꦒ", parts:["ꦮ","ꦂ","ꦒ"], level:"PANYIGEG", hint:"Layar r ꦂ"},
            {latin:"TUTUP", jawa:"ꦠꦸꦠꦸꦥ꧀", parts:["ꦠꦸ","ꦠꦸ","ꦥ꧀"], level:"PANYIGEG", hint:"Pangkon mati ꧀"},
            {latin:"ANJING", jawa:"ꦲꦚ꧀ꦗꦶꦁ", parts:["ꦲ","ꦚ꧀ꦗꦶ","ꦁ"], level:"PANYIGEG", hint:"Pasangan + cecak"},
            {latin:"KARSA", jawa:"ꦏꦂꦱ", parts:["ꦏ","ꦂ","ꦱ"], level:"PANYIGEG", hint:"Layar r"},
            {latin:"BUDHAL", jawa:"ꦧꦸꦝꦭ꧀", parts:["ꦧꦸ","ꦝ","ꦭ꧀"], level:"PANYIGEG", hint:"Pangkon l mati"},
            {latin:"GULUNG", jawa:"ꦒꦸꦭꦸꦁ", parts:["ꦒꦸ","ꦭꦸ","ꦁ"], level:"PANYIGEG", hint:"Suku + cecak"},
            {latin:"JANGKUNG", jawa:"ꦗꦁꦏꦸꦁ", parts:["ꦗ","ꦁ","ꦏꦸ","ꦁ"], level:"PANYIGEG", hint:"Cecak ganda"},
            {latin:"HADIAH", jawa:"ꦲꦢꦶꦪꦃ", parts:["ꦲ","ꦢꦶ","ꦪ","ꦃ"], level:"PANYIGEG", hint:"Wignyan h akhir"},
            {latin:"SANGKAR", jawa:"ꦱꦁꦏꦂ", parts:["ꦱ","ꦁ","ꦏ","ꦂ"], level:"PANYIGEG", hint:"Cecak + Layar"},
            {latin:"GAMPANG", jawa:"ꦒꦩ꧀ꦥꦁ", parts:["ꦒ","ꦩ꧀ꦥ","ꦁ"], level:"PANYIGEG", hint:"Pasangan ma+pa + cecak"},
            {latin:"TUMBUH", jawa:"ꦠꦸꦩ꧀ꦧꦸꦃ", parts:["ꦠꦸ","ꦩ꧀ꦧꦸ","ꦃ"], level:"PANYIGEG", hint:"Wignyan + pasangan"},
            {latin:"ANGGUR", jawa:"ꦲꦁꦒꦸꦂ", parts:["ꦲ","ꦁ","ꦒꦸ","ꦂ"], level:"PANYIGEG", hint:"Cecak + Layar"}
          ],
          WYANJANA: [
            {latin:"KRATON", jawa:"ꦏꦿꦠꦺꦴꦤ꧀", parts:["ꦏꦿ","ꦠꦺꦴ","ꦤ꧀"], level:"WYANJANA", hint:"Cakra ra ꦿ"},
            {latin:"PRABU", jawa:"ꦥꦿꦧꦸ", parts:["ꦥꦿ","ꦧꦸ"], level:"WYANJANA", hint:"Cakra + Suku"},
            {latin:"BRAHMA", jawa:"ꦧꦿꦃꦩ", parts:["ꦧꦿ","ꦃ","ꦩ"], level:"WYANJANA", hint:"Cakra + Wignyan"},
            {latin:"DWI", jawa:"ꦢ꧀ꦮꦶ", parts:["ꦢ꧀ꦮ","ꦶ"], level:"WYANJANA", hint:"Pengkal ya + pasangan wa"},
            {latin:"TRYA", jawa:"ꦠꦿꦪ", parts:["ꦠꦿ","ꦪ"], level:"WYANJANA", hint:"Cakra ra + ya"},
            {latin:"KRYA", jawa:"ꦏꦿꦪ", parts:["ꦏꦿ","ꦪ"], level:"WYANJANA", hint:"Cakra"},
            {latin:"SWARA", jawa:"ꦱ꧀ꦮꦫ", parts:["ꦱ꧀ꦮ","ꦫ"], level:"WYANJANA", hint:"Pasangan wa + cakra"},
            {latin:"NYAYA", jawa:"ꦚꦪ", parts:["ꦚ","ꦪ"], level:"WYANJANA", hint:"Pengkal ya?"},
            {latin:"BYASA", jawa:"ꦧꦾꦱ", parts:["ꦧꦾ","ꦱ"], level:"WYANJANA", hint:"Pengkal ya ꦾ"},
            {latin:"KWAR", jawa:"ꦏ꧀ꦮꦂ", parts:["ꦏ꧀ꦮ","ꦂ"], level:"WYANJANA", hint:"Pasangan wa + layar"}
          ],
          PASANGAN: [
            {latin:"AKSA", jawa:"ꦲꦏ꧀ꦱ", parts:["ꦲ","ꦏ꧀ꦱ"], level:"PASANGAN DASAR", hint:"Pasangan sa ꧀ꦱ"},
            {latin:"ATMA", jawa:"ꦲꦠ꧀ꦩ", parts:["ꦲ","ꦠ꧀ꦩ"], level:"PASANGAN DASAR", hint:"Pasangan ma"},
            {latin:"PADMA", jawa:"ꦥꦢ꧀ꦩ", parts:["ꦥ","ꦢ꧀ꦩ"], level:"PASANGAN DASAR", hint:"Pasangan ma menempel"},
            {latin:"RATNA", jawa:"ꦫꦠ꧀ꦤ", parts:["ꦫ","ꦠ꧀ꦤ"], level:"PASANGAN DASAR", hint:"Pasangan na"},
            {latin:"SABDA", jawa:"ꦱꦧ꧀ꦢ", parts:["ꦱ","ꦧ꧀ꦢ"], level:"PASANGAN DASAR", hint:"Pasangan da"},
            {latin:"MAGSA", jawa:"ꦩꦒ꧀ꦱ", parts:["ꦩ","ꦒ꧀ꦱ"], level:"PASANGAN DASAR", hint:"Pasangan sa"},
            {latin:"YOGYA", jawa:"ꦪꦺꦴꦒꦾ", parts:["ꦪꦺꦴ","ꦒꦾ"], level:"PASANGAN DASAR", hint:"Pengkal ya + taling tarung"},
            {latin:"WAKSA", jawa:"ꦮꦏ꧀ꦱ", parts:["ꦮ","ꦏ꧀ꦱ"], level:"PASANGAN DASAR", hint:"Pasangan sa"},
            {latin:"BAKSA", jawa:"ꦧꦏ꧀ꦱ", parts:["ꦧ","ꦏ꧀ꦱ"], level:"PASANGAN DASAR", hint:"Pasangan sa"},
            {latin:"JAGAD", jawa:"ꦗꦒꦢ꧀", parts:["ꦗ","ꦒ","ꦢ꧀"], level:"PASANGAN DASAR", hint:"Pangkon mati"},
            {latin:"ARGA", jawa:"ꦲꦂꦒ", parts:["ꦲ","ꦂ","ꦒ"], level:"PASANGAN DASAR", hint:"Layar r tapi mirip pasangan"},
            {latin:"DARMA", jawa:"ꦢꦂꦩ", parts:["ꦢ","ꦂ","ꦩ"], level:"PASANGAN DASAR", hint:"Layar + ma"}
          ],
          PASANGAN_SWARA: [
            {latin:"MANDI", jawa:"ꦩꦤ꧀ꦢꦶ", parts:["ꦩ","ꦤ꧀ꦢꦶ"], level:"PASANGAN + SWARA", hint:"Pasangan Da + Wulu i"},
            {latin:"BUDHI", jawa:"ꦧꦸꦢ꧀ꦝꦶ", parts:["ꦧꦸ","ꦢ꧀ꦝꦶ"], level:"PASANGAN + SWARA", hint:"Suku + pasangan + wulu"},
            {latin:"PUTRI", jawa:"ꦥꦸꦠꦿꦶ", parts:["ꦥꦸ","ꦠꦿꦶ"], level:"PASANGAN + SWARA", hint:"Cakra + Wulu i"},
            {latin:"GUNDHI", jawa:"ꦒꦸꦤ꧀ꦝꦶ", parts:["ꦒꦸ","ꦤ꧀ꦝꦶ"], level:"PASANGAN + SWARA", hint:"Pasangan + wulu"},
            {latin:"WIGATI", jawa:"ꦮꦶꦒꦠꦶ", parts:["ꦮꦶ","ꦒ","ꦠꦶ"], level:"PASANGAN + SWARA", hint:"Wulu i ganda"},
            {latin:"KURSI", jawa:"ꦏꦸꦂꦱꦶ", parts:["ꦏꦸ","ꦂ","ꦱꦶ"], level:"PASANGAN + SWARA", hint:"Suku + Layar + Wulu"},
            {latin:"MURTI", jawa:"ꦩꦸꦂꦠꦶ", parts:["ꦩꦸ","ꦂ","ꦠꦶ"], level:"PASANGAN + SWARA", hint:"Suku + Layar + Wulu"},
            {latin:"BAKMI", jawa:"ꦧꦏ꧀ꦩꦶ", parts:["ꦧ","ꦏ꧀ꦩꦶ"], level:"PASANGAN + SWARA", hint:"Pasangan ma + wulu"},
            {latin:"GANTI", jawa:"ꦒꦤ꧀ꦠꦶ", parts:["ꦒ","ꦤ꧀ꦠꦶ"], level:"PASANGAN + SWARA", hint:"Pasangan ta + wulu"},
            {latin:"KANTI", jawa:"ꦏꦤ꧀ꦠꦶ", parts:["ꦏ","ꦤ꧀ꦠꦶ"], level:"PASANGAN + SWARA", hint:"Pasangan + wulu"},
            {latin:"SANTI", jawa:"ꦱꦤ꧀ꦠꦶ", parts:["ꦱ","ꦤ꧀ꦠꦶ"], level:"PASANGAN + SWARA", hint:"Pasangan + wulu"},
            {latin:"SIGRA", jawa:"ꦱꦶꦒꦿ", parts:["ꦱꦶ","ꦒꦿ"], level:"PASANGAN + SWARA", hint:"Wulu + Cakra"}
          ],
          PASANGAN_PANYIGEG: [
            {latin:"KANTHI", jawa:"ꦏꦤ꧀ꦛꦶ", parts:["ꦏ","ꦤ꧀ꦛꦶ"], level:"PASANGAN + PANYIGEG", hint:"Pasangan tha + wulu"},
            {latin:"SANGKAN", jawa:"ꦱꦁꦏꦤ꧀", parts:["ꦱ","ꦁ","ꦏ","ꦤ꧀"], level:"PASANGAN + PANYIGEG", hint:"Cecak + pangkon"},
            {latin:"BANGKING", jawa:"ꦧꦁꦏꦶꦁ", parts:["ꦧ","ꦁ","ꦏꦶ","ꦁ"], level:"PASANGAN + PANYIGEG", hint:"Cecak ganda + wulu"},
            {latin:"PANGKON", jawa:"ꦥꦁꦏꦺꦴꦤ꧀", parts:["ꦥ","ꦁ","ꦏꦺꦴ","ꦤ꧀"], level:"PASANGAN + PANYIGEG", hint:"Cecak + Taling Tarung + pangkon"},
            {latin:"TANGGUNG", jawa:"ꦠꦁꦒꦸꦁ", parts:["ꦠ","ꦁ","ꦒꦸ","ꦁ"], level:"PASANGAN + PANYIGEG", hint:"Cecak + suku + cecak"},
            {latin:"GAMBANG", jawa:"ꦒꦩ꧀ꦧꦁ", parts:["ꦒ","ꦩ꧀ꦧ","ꦁ"], level:"PASANGAN + PANYIGEG", hint:"Pasangan ba + cecak"},
            {latin:"SAMBUNG", jawa:"ꦱꦩ꧀ꦧꦸꦁ", parts:["ꦱ","ꦩ꧀ꦧꦸ","ꦁ"], level:"PASANGAN + PANYIGEG", hint:"Pasangan ba + suku + cecak"},
            {latin:"LONTAR", jawa:"ꦭꦺꦴꦤ꧀ꦠꦂ", parts:["ꦭꦺꦴ","ꦤ꧀ꦠ","ꦂ"], level:"PASANGAN + PANYIGEG", hint:"Taling Tarung + pasangan + layar"},
            {latin:"MANTRA", jawa:"ꦩꦤ꧀ꦠꦿ", parts:["ꦩ","ꦤ꧀ꦠꦿ"], level:"PASANGAN + PANYIGEG", hint:"Pasangan + cakra"},
            {latin:"SANTRA", jawa:"ꦱꦤ꧀ꦠꦿ", parts:["ꦱ","ꦤ꧀ꦠꦿ"], level:"PASANGAN + PANYIGEG", hint:"Pasangan + cakra"},
            {latin:"KONTHA", jawa:"ꦏꦺꦴꦤ꧀ꦛ", parts:["ꦏꦺꦴ","ꦤ꧀ꦛ"], level:"PASANGAN + PANYIGEG", hint:"Taling Tarung + pasangan tha"},
            {latin:"BANTAR", jawa:"ꦧꦤ꧀ꦠꦂ", parts:["ꦧ","ꦤ꧀ꦠ","ꦂ"], level:"PASANGAN + PANYIGEG", hint:"Pasangan ta + layar"}
          ],
          CAMPUR: [
            {latin:"MALIOBORO", jawa:"ꦩꦭꦶꦪꦺꦴꦧꦺꦴꦫꦺꦴ", parts:["ꦩ","ꦭꦶ","ꦪꦺꦴ","ꦧꦺꦴ","ꦫꦺꦴ"], level:"CAMPUR LENGKAP", hint:"Taling Tarung ganda"},
            {latin:"KERATON", jawa:"ꦏꦿꦠꦺꦴꦤ꧀", parts:["ꦏꦿ","ꦠꦺꦴ","ꦤ꧀"], level:"CAMPUR LENGKAP", hint:"Cakra + taling tarung + pangkon"},
            {latin:"HANACARAKA DATASAWALA", jawa:"ꦲꦤꦕꦫꦏꦢꦠꦱꦮꦭ", parts:["ꦲ","ꦤ","ꦕ","ꦫ","ꦏ","ꦢ","ꦠ","ꦱ","ꦮ","ꦭ"], level:"CAMPUR LENGKAP", hint:"Nglegena panjang"},
            {latin:"GUDEG JOGJA", jawa:"ꦒꦸꦝꦼꦒ꧀ꦗꦺꦴꦒ꧀ꦗ", parts:["ꦒꦸ","ꦝꦼ","ꦒ꧀","ꦗꦺꦴ","ꦒ꧀","ꦗ"], level:"CAMPUR LENGKAP", hint:"Campur pepet + pasangan + taling tarung"},
            {latin:"NGAYOGYAKARTA", jawa:"ꦔꦪꦺꦴꦒꦾꦏꦂꦠ", parts:["ꦔ","ꦪꦺꦴ","ꦒꦾ","ꦏ","ꦂ","ꦠ"], level:"CAMPUR LENGKAP", hint:"Pengkal ya + layar"},
            {latin:"CANDI BOROBUDUR", jawa:"ꦕꦤ꧀ꦢꦶꦧꦺꦴꦫꦺꦴꦧꦸꦢꦸꦂ", parts:["ꦕ","ꦤ꧀ꦢꦶ","ꦧꦺꦴ","ꦫꦺꦴ","ꦧꦸ","ꦢꦸ","ꦂ"], level:"CAMPUR LENGKAP", hint:"Pasangan + wulu + taling tarung + layar"},
            {latin:"WAYANG KULIT", jawa:"ꦮꦪꦁꦏꦸꦭꦶꦠ꧀", parts:["ꦮ","ꦪ","ꦁ","ꦏꦸ","ꦭꦶ","ꦠ꧀"], level:"CAMPUR LENGKAP", hint:"Cecak + suku + wulu + pangkon"},
            {latin:"BATIK TULIS", jawa:"ꦧꦠꦶꦏ꧀ꦠꦸꦭꦶꦱ꧀", parts:["ꦧ","ꦠꦶ","ꦏ꧀","ꦠꦸ","ꦭꦶ","ꦱ꧀"], level:"CAMPUR LENGKAP", hint:"Wulu + suku + pasangan + pangkon"},
            {latin:"SEKOLAH JOGJA", jawa:"ꦱꦼꦏꦺꦴꦭꦃꦗꦺꦴꦒ꧀ꦗ", parts:["ꦱꦼ","ꦏꦺꦴ","ꦭ","ꦃ","ꦗꦺꦴ","ꦒ꧀","ꦗ"], level:"CAMPUR LENGKAP", hint:"Pepet + taling tarung + wignyan + pasangan"},
            {latin:"GEREJA BINTARAN", jawa:"ꦒꦼꦫꦺꦗꦧꦶꦤ꧀ꦠꦫꦤ꧀", parts:["ꦒꦼ","ꦫꦺ","ꦗ","ꦧ","ꦶ","ꦤ꧀","ꦠ","ꦫ","ꦤ꧀"], level:"CAMPUR LENGKAP", hint:"Pepet + taling + pangkon ganda"},
            {latin:"PUSTAKA", jawa:"ꦥꦸꦱ꧀ꦠꦏ", parts:["ꦥꦸ","ꦱ꧀ꦠ","ꦏ"], level:"CAMPUR LENGKAP", hint:"Suku + pasangan ta"},
            {latin:"YOGYAKARTA", jawa:"ꦪꦺꦴꦒꦾꦏꦂꦠ", parts:["ꦪꦺꦴ","ꦒꦾ","ꦏ","ꦂ","ꦠ"], level:"CAMPUR LENGKAP", hint:"Taling tarung + pengkal + layar"},
            {latin:"KARMA", jawa:"ꦏꦂꦩ", parts:["ꦏ","ꦂ","ꦩ"], level:"CAMPUR LENGKAP", hint:"Layar r"},
            {latin:"DHARMA", jawa:"ꦝꦂꦩ", parts:["ꦝ","ꦂ","ꦩ"], level:"CAMPUR LENGKAP", hint:"Layar + ma"},
            {latin:"SANSKARA", jawa:"ꦱꦁꦱ꧀ꦏꦫ", parts:["ꦱ","ꦁ","ꦱ꧀ꦏ","ꦫ"], level:"CAMPUR LENGKAP", hint:"Cecak + pasangan ka + ra"}
          ]
        };
        const QB_ALL = Object.values(QB_BY_LEVEL).flat();
        const ALL_PARTS = [...new Set(QB_ALL.flatMap(q=>q.parts))];
        const POOL = ALL_PARTS;
        const QB = QB_ALL;

        function shuffle(a){ const b=[...a]; for(let i=b.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [b[i],b[j]]=[b[j],b[i]];} return b; }
        function genCode(){ const chars="ABCDEFGHJKLMNPQRSTUVWXYZ"; let s=""; for(let i=0;i<4;i++) s+=chars[Math.floor(Math.random()*chars.length)]; return s; }
        function badgeClass(level){
          const l = (level||"").toUpperCase();
          if(l.includes("NGLEGENA")) return "b-ng";
          if(l.includes("SWARA")) return "b-su";
          if(l.includes("PANYIGEG")) return "b-pa";
          if(l.includes("WYANJANA")) return "b-pas";
          if(l.includes("PASANGAN") && l.includes("SWARA")) return "b-su";
          if(l.includes("PASANGAN") && l.includes("PANYIGEG")) return "b-pa";
          if(l.includes("PASANGAN")) return "b-pas";
          if(l.includes("CAMPUR")) return "b-campur";
          return "b-ng";
        }
        function showView(id){ document.querySelectorAll(".view").forEach(v=>v.classList.remove("active")); document.getElementById(id).classList.add("active"); window.scrollTo(0,0); }

        let hostState = { code:"", peerId:"", questions:[], qIndex:0, players:{}, timer:90, timerInt:null };
        let playerState = { conn:null, name:"", code:"", qIndex:0, questions:[], writtenParts:[], startTime:0, attempts:0, totalPoints:0, streak:0, bestStreak:0, finished:false };
        let simState = { questions:[], qIndex:0, writtenParts:[], attempts:0, total:0, streak:0, best:0, bots:[], startTime:0 };
        let hostConfig = { qCount:10, order:"random" };

        document.getElementById("btnHome").onclick = ()=>{ cleanupAll(); resetAll(); showView("v-landing"); };
        document.getElementById("goHost").onclick = ()=>{ initHost(); };
        document.getElementById("goJoin").onclick = ()=>{ showView("v-player"); document.getElementById("playerJoinCard").style.display="block"; document.getElementById("playerLobby").style.display="none"; document.getElementById("playerGame").style.display="none"; document.getElementById("playerDone").style.display="none"; };
        document.getElementById("goSim").onclick = ()=>{ initSim(); };
        document.getElementById("btnJoinBack").onclick = ()=> showView("v-landing");
        document.getElementById("simBack").onclick = ()=> { showView("v-landing"); };

        function resetAll(){
          hostState={code:"",peerId:"",questions:[],qIndex:0,players:{},timer:90,timerInt:null};
          playerState={conn:null,name:"",code:"",qIndex:0,questions:[],writtenParts:[],startTime:0,attempts:0,totalPoints:0,streak:0,bestStreak:0,finished:false};
          hostConfig={qCount:10,order:"random"};
        }
        function getSelectedLevelKeys(){
          const chks = document.querySelectorAll('.levelChk');
          const keys=[];
          chks.forEach(c=>{ if(c.checked) keys.push(c.dataset.level); });
          return keys;
        }
        function updateLevelSummary(){
          const keys = getSelectedLevelKeys();
          let total=0;
          keys.forEach(k=>{ total += (QB_BY_LEVEL[k]?.length||0); });
          const toUse = Math.min(total, hostConfig.qCount);
          const modeText = hostConfig.order==='random'?'acak':'berurutan';
          const el = document.getElementById('levelSummary');
          if(el){
            if(keys.length===0) el.textContent='Pilih minimal 1 level • 0 soal tersedia';
            else el.textContent = total+' soal tersedia dari '+keys.length+' level • akan dipakai '+toUse+' soal '+modeText+' • '+keys.join(', ');
          }
        }
        function buildQuestionsFromLevels(){
          const keys = getSelectedLevelKeys();
          if(keys.length===0){ alert('Pilih minimal 1 level dulu!'); return null; }
          let pool=[];
          keys.forEach(k=>{ if(QB_BY_LEVEL[k]) pool = pool.concat(QB_BY_LEVEL[k]); });
          let selected=[...pool];
          if(hostConfig.order==='random') selected = shuffle(selected);
          if(selected.length > hostConfig.qCount) selected = selected.slice(0, hostConfig.qCount);
          return selected;
        }

        function initHost(){
          cleanupAll();
          showView("v-host");
          hostState.code = genCode();
          hostState.qIndex=0;
          hostState.players={};
          hostState.timer=90;
          hostState.questions=[];

          document.getElementById("hostCode").textContent = hostState.code;
          document.getElementById("hostCount").textContent = "0 / 30 siswa";
          document.getElementById("hostLobbyCount").textContent="0";
          document.getElementById("hostPlayers").innerHTML="";
          document.getElementById("hostEmpty").style.display="block";
          document.getElementById("hostGame").style.display="none";
          document.getElementById("hostTrack").style.display="none";
          document.getElementById("hostPodium").style.display="none";
          document.getElementById("hostFinal").style.display="none";
          document.getElementById("hostLevelCard").style.display="block";
          document.getElementById("hostLobbyList").style.display="block";

          const fixedPeerId = "hanacaraka-" + hostState.code.toLowerCase();
          hostState.peerId = fixedPeerId;
          document.getElementById("hostPeerId").textContent = fixedPeerId;
          const qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=" + encodeURIComponent(fixedPeerId);
          const img = document.getElementById("hostQr");
          img.src = qrUrl;
          img.style.display="block";
          img.onerror = ()=>{ img.style.display="none"; document.getElementById("hostQrFallback").style.display="block"; };

          document.querySelectorAll('.levelChk').forEach(chk=>{
            chk.onchange = updateLevelSummary;
          });
          document.querySelectorAll('.qCountBtn').forEach(btn=>{
            btn.onclick = ()=>{
              document.querySelectorAll('.qCountBtn').forEach(b=>b.classList.remove('active'));
              btn.classList.add('active');
              hostConfig.qCount = parseInt(btn.dataset.count);
              updateLevelSummary();
            };
          });
          document.getElementById('orderRandom').onclick = ()=>{
            document.getElementById('orderRandom').classList.add('active');
            document.getElementById('orderSeq').classList.remove('active');
            hostConfig.order='random';
            updateLevelSummary();
          };
          document.getElementById('orderSeq').onclick = ()=>{
            document.getElementById('orderSeq').classList.add('active');
            document.getElementById('orderRandom').classList.remove('active');
            hostConfig.order='seq';
            updateLevelSummary();
          };
          document.getElementById('btnCheckAll').onclick = ()=>{
            document.querySelectorAll('.levelChk').forEach(c=>c.checked=true);
            updateLevelSummary();
          };
          document.getElementById('btnUncheckAll').onclick = ()=>{
            document.querySelectorAll('.levelChk').forEach(c=>c.checked=false);
            updateLevelSummary();
          };
          updateLevelSummary();

          function createPeer(id){
            const peer = new Peer(id, {debug:0});
            window.peer = peer;
            window.conns = {};
            peer.on("open", (openId)=>{
              hostState.peerId = openId;
              document.getElementById("hostPeerId").textContent = openId;
              const qr2 = "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=" + encodeURIComponent(openId);
              document.getElementById("hostQr").src = qr2;
            });
            peer.on("connection", (conn)=>{
              if(Object.keys(hostState.players).length >= 30){
                try{ conn.on("open", ()=>{ conn.send({type:"rejected", reason:"Penuh, max 30 siswa"}); setTimeout(()=>conn.close(),400); }); }catch(e){}
                return;
              }
              conn.on("open", ()=>{ window.conns[conn.peer] = conn; });
              conn.on("data", (data)=> handleHostData(conn.peer, data));
              conn.on("close", ()=>{ delete window.conns[conn.peer]; delete hostState.players[conn.peer]; renderHostPlayers(); renderHostTrack(); });
            });
            peer.on("error", (err)=>{
              if(err.type==='unavailable-id'){
                try{ peer.destroy(); }catch(e){}
                const suffixId = fixedPeerId + "-" + Math.floor(Math.random()*9000);
                setTimeout(()=>createPeer(suffixId), 500);
              }
            });
          }
          createPeer(fixedPeerId);

          document.getElementById("hostCopy").onclick = ()=>{
            navigator.clipboard.writeText(hostState.code).then(()=>{
              const b=document.getElementById("hostCopy");
              const old=b.textContent;
              b.textContent="DISALIN!";
              setTimeout(()=>b.textContent=old,1200);
            });
          };
          document.getElementById("hostStart").onclick = startHostGame;
          document.getElementById("hostNext").onclick = nextHostQuestion;
          document.getElementById("hostEndQ").onclick = finishHostQuestion;
          document.getElementById("hostLeave").onclick = ()=>{ cleanupAll(); showView("v-landing"); };
        }

        function handleHostData(peerId, data){
          if(data.type==="join"){
            if(Object.keys(hostState.players).length>=30){
              const conn = window.conns[peerId];
              if(conn){ try{conn.send({type:"rejected", reason:"Penuh, max 30 siswa"}); setTimeout(()=>conn.close(),400);}catch(e){} }
              return;
            }
            hostState.players[peerId]={name:data.name||"Siswa", percent:0, finished:false, time:0, points:0, totalPoints:0, attempts:0, correct:false, streak:0, history:[]};
            renderHostPlayers(); renderHostTrack();
            if(document.getElementById("hostGame").style.display!=="none"){
              const q=hostState.questions[hostState.qIndex];
              const conn=window.conns[peerId];
              if(conn && q) conn.send({type:"question", qIndex:hostState.qIndex, total:hostState.questions.length, question:q});
            }
            return;
          }
          if(!hostState.players[peerId]) return;
          if(data.type==="progress"){
            const p = hostState.players[peerId];
            p.percent = data.percent||0;
            p.finished = !!data.finished;
            p.attempts = data.attempts||0;
            p.correct = !!data.correct;
            if(data.finished){
              p.time = data.time||0;
              p.points = data.points||0;
              p.totalPoints = data.totalPoints||0;
              p.history = p.history||[];
              p.history.push({q:hostState.qIndex, points:p.points, time:p.time, correct:p.correct});
            }
            renderHostTrack();
            checkAllFinished();
          }
        }

        function renderHostPlayers(){
          const cont = document.getElementById("hostPlayers");
          const count = Object.keys(hostState.players).length;
          document.getElementById("hostCount").textContent = count+" / 30 siswa";
          document.getElementById("hostLobbyCount").textContent = count;
          document.getElementById("hostEmpty").style.display = count===0? "block":"none";
          cont.innerHTML = Object.entries(hostState.players).map(([id,p])=>{
            return \`<div class="studentRow"><div class="dot" style="background:\${p.finished? (p.correct?'#2E7D32':'#F9A825') : '#D4A017'}"></div><div style="flex:1"><div style="font-weight:800;font-size:13px">\${p.name}</div><div style="font-size:11px;opacity:.6">Total: \${p.totalPoints||0} poin • Streak \${p.streak||0}</div></div><div class="pill" style="background:#FFF8E7;border:1.5px solid #5D403720">\${p.finished? (p.correct?'✅':'⚠️') : '⏳'}</div></div>\`;
          }).join("");
        }

        function startHostGame(){
          const built = buildQuestionsFromLevels();
          if(!built || built.length===0){ alert('Tidak ada soal dari level yang dipilih'); return; }
          hostState.questions = built.map(q=>({...q}));
          document.getElementById("hostGame").style.display="block";
          document.getElementById("hostTrack").style.display="block";
          document.getElementById("hostLevelCard").style.display="none";
          document.getElementById("hostLobbyList").style.display="none";
          hostState.qIndex=0;
          broadcastQuestion();
          startHostTimer();
        }

        function broadcastQuestion(){
          const q = hostState.questions[hostState.qIndex];
          if(!q) return;
          document.getElementById("hostQIdx").textContent = "SOAL "+(hostState.qIndex+1)+"/"+hostState.questions.length;
          document.getElementById("hostLatin").textContent = q.latin;
          document.getElementById("hostJawa").textContent = q.jawa;
          document.getElementById("hostLevel").textContent = q.level;
          document.getElementById("hostLevel").className = "badge "+badgeClass(q.level);
          document.getElementById("hostHint").textContent = q.hint;
          document.getElementById("hostFinishedCount").textContent="0";
          document.getElementById("hostTotalCount").textContent = Object.keys(hostState.players).length;
          const prog = document.getElementById("hostProgGlobal");
          if(prog) prog.style.width="0%";
          Object.values(hostState.players).forEach(p=>{ p.percent=0; p.finished=false; p.time=0; p.points=0; p.attempts=0; p.correct=false; });
          renderHostTrack();
          const podium = document.getElementById("hostPodium");
          if(podium) podium.style.display="none";
          const payload = {type:"question", qIndex:hostState.qIndex, total:hostState.questions.length, question:q};
          Object.values(window.conns).forEach(conn=>{ try{conn.send(payload);}catch(e){} });
          hostState.timer=90;
          startHostTimer();
        }

        function startHostTimer(){
          if(window.hostTimerInterval) clearInterval(window.hostTimerInterval);
          window.hostTimerInterval = setInterval(()=>{
            hostState.timer--;
            const timerEl = document.getElementById("hostTimer");
            if(timerEl) timerEl.textContent = hostState.timer+"s";
            const fin = Object.values(hostState.players).filter(p=>p.finished).length;
            const tot = Object.keys(hostState.players).length||1;
            const prog = document.getElementById("hostProgGlobal");
            if(prog) prog.style.width = Math.round(fin/tot*100)+"%";
            const fc = document.getElementById("hostFinishedCount");
            if(fc) fc.textContent = fin;
            if(hostState.timer<=0){
              clearInterval(window.hostTimerInterval);
              finishHostQuestion();
            }
          },1000);
        }

        function renderHostTrack(){
          const track = document.getElementById("hostTrack");
          if(!track) return;
          const entries = Object.entries(hostState.players);
          if(entries.length===0){ track.innerHTML='<div class="card" style="text-align:center;color:#5D403760;font-weight:700">Belum ada progress</div>'; return; }
          track.innerHTML = \`<div class="card"><div style="font-weight:800;margin-bottom:10px">Progress Soal \${hostState.qIndex+1} - Realtime 30 Siswa</div>\${entries.map(([id,p])=>{
            let status="";
            if(p.finished && p.correct) status = \`✅ Benar \${p.points} poin (\${(p.time||0).toFixed(1)}s)\`;
            else if(p.finished && !p.correct) status = \`⚠️ Selesai \${p.points} poin (3x salah)\`;
            else status = \`Menulis \${Math.round(p.percent||0)}% • \${p.attempts||0}x salah\`;
            const color = p.finished? (p.correct?'#2E7D32':'#F9A825') : '#D4A017';
            return \`<div class="studentRow"><div style="width:32px;height:32px;border-radius:50%;background:#FFF8E7;border:1.5px solid #5D403720;display:grid;place-items:center;font-weight:800;font-size:12px">\${(p.name||"?")[0].toUpperCase()}</div><div style="flex:1"><div style="display:flex;justify-content:space-between;gap:8px"><div style="font-weight:700;font-size:13px">\${p.name}</div><div style="font-size:11px;font-weight:800;color:\${color}">\${status}</div></div><div class="prog" style="margin-top:6px"><div style="width:\${p.percent||0}%;background:\${color}"></div></div></div><div style="font-weight:800;font-size:12px">\${p.totalPoints||0}</div></div>\`;
          }).join("")}</div>\`;
        }

        function checkAllFinished(){
          const players = Object.values(hostState.players);
          if(players.length===0) return;
          if(players.every(p=>p.finished)){
            setTimeout(()=>finishHostQuestion(),600);
          }
          const fin = players.filter(p=>p.finished).length;
          const fc = document.getElementById("hostFinishedCount");
          if(fc) fc.textContent=fin;
          const prog = document.getElementById("hostProgGlobal");
          if(prog) prog.style.width = Math.round(fin/players.length*100)+"%";
        }

        function finishHostQuestion(){
          if(window.hostTimerInterval) clearInterval(window.hostTimerInterval);
          const players = Object.entries(hostState.players).map(([id,p])=>({id,...p}));
          const sorted = [...players].sort((a,b)=> (b.points||0)-(a.points||0) || (a.time||99)-(b.time||99));
          const podium = document.getElementById("hostPodium");
          if(!podium) return;
          podium.style.display="block";
          podium.innerHTML = \`
            <div style="font-weight:800;color:#5D4037;margin-bottom:10px">\uD83C\uDFC6 Podium Soal \${hostState.qIndex+1}</div>
            \${sorted.length===0? '<div style="color:#5D403760;font-weight:700">Tidak ada data</div>' : sorted.slice(0,5).map((p,i)=>{
              return \`<div class="studentRow" style="\${i===0?'border:2px solid #D4A017;background:#FFFBEB':''}"><div style="font-weight:800;width:24px">\${i+1}</div><div style="flex:1"><div style="font-weight:800">\${p.name}</div><div style="font-size:11px;opacity:.7">\${p.correct?'✅ Benar':'⚠️'} \${p.points||0} poin • \${(p.time||0).toFixed(1)}s • \${p.attempts||0}x salah</div></div><div class="pill" style="background:\${i===0?'#D4A017':'#FFF8E7'};color:\${i===0?'#5D4037':'#5D4037'}">\${p.points||0}</div></div>\`;
+                        }).join("")}
            <div style="margin-top:10px;font-size:11px;opacity:.6">Ranking per soal: points desc lalu time asc.</div>
          \`;
          if(hostState.qIndex >= hostState.questions.length-1){
            const finalSorted = [...players].sort((a,b)=> (b.totalPoints||0)-(a.totalPoints||0));
            const finalDiv = document.getElementById("hostFinal");
            finalDiv.style.display="block";
            finalDiv.innerHTML = `
              <div style="font-weight:800;color:#5D4037;margin-bottom:10px">🏁 Klasemen Akhir Total Poin (${hostState.questions.length} soal)</div>
              ${finalSorted.map((p,i)=>`<div class="studentRow" style="${i<3?'background:#FFFBEB;border:2px solid #D4A017':''}"><div style="width:28px;height:28px;border-radius:50%;background:${i===0?'#D4A017':i===1?'#9E9E9E':i===2?'#8D6E63':'#EEE'};color:#fff;display:grid;place-items:center;font-weight:800;font-size:12px">${i+1}</div><div style="flex:1"><div style="font-weight:800">${p.name}</div><div style="font-size:11px;opacity:.7">Total ${p.totalPoints||0} poin • ${(p.history\vert{}\vert{}[]).filter(h=>h.correct).length} benar dari${hostState.questions.length}</div></div><div style="font-weight:800">${p.totalPoints||0}</div></div>`).join("")}
              <div style="display:flex;gap:8px;margin-top:12px"><button id="hostRestart" class="btn btn-primary btn-big" style="flex:1">ULANG DENGAN LEVEL SAMA</button><button id="hostBackToLevel" class="btn btn-ghost" style="flex:1">GANTI LEVEL</button></div>
            `;
+            document.getElementById("hostRestart").onclick = ()=>{ hostState.qIndex=0; Object.values(hostState.players).forEach(p=>{ p.totalPoints=0; p.history=[]; p.streak=0; }); broadcastQuestion(); document.getElementById("hostFinal").style.display="none"; };
+            document.getElementById("hostBackToLevel").onclick = ()=>{
+              document.getElementById("hostLevelCard").style.display="block";
+              document.getElementById("hostLobbyList").style.display="block";
+              document.getElementById("hostGame").style.display="none";
+              document.getElementById("hostTrack").style.display="none";
+              document.getElementById("hostPodium").style.display="none";
+              document.getElementById("hostFinal").style.display="none";
+            };
+          }
+        }
+
+        function nextHostQuestion(){
+          if(hostState.qIndex < hostState.questions.length-1){
+            hostState.qIndex++;
+            broadcastQuestion();
+          } else {
+            finishHostQuestion();
+          }
+        }
+
+        document.getElementById("btnJoin").onclick = joinAsPlayer;
+        async function joinAsPlayer(){
  const rawCode = document.getElementById("joinCode").value.trim().toUpperCase();
  // Sanitasi: Hapus spasi dan karakter khusus agar hanya tersisa huruf/angka
  const code = rawCode.replace(/[^A-Z0-9]/g, '');
  const name = document.getElementById("joinName").value.trim() || "Siswa";
  const errBox = document.getElementById("joinErr");

  if(code.length !== 4){ 
    errBox.style.display = "block"; 
    errBox.textContent = "Kode harus 4 huruf/angka"; 
    return; 
  }
+          if(name.length<2){ errBox.style.display="block"; errBox.textContent="Nama minimal 2 huruf"; return; }
+          errBox.style.display="none";
+          cleanupAll();
+          playerState.name=name; playerState.code=code; playerState.totalPoints=0; playerState.streak=0; playerState.bestStreak=0;
+          const fixedId = "hanacaraka-" + code.toLowerCase();
+          const myPeer = new Peer(null, {debug:0});
+          window.peer = myPeer;
+          document.getElementById("btnJoin").textContent="MENGHUBUNGKAN...";
+          const joinBtn = document.getElementById("btnJoin");
+          if(joinBtn) joinBtn.disabled=true;
+          myPeer.on("open", ()=>{
+            let attempted = false;
+            function tryConnect(targetId){
+              const conn = myPeer.connect(targetId, {reliable:true});
+              window.conns[targetId]=conn;
+              let timeout = setTimeout(()=>{ try{conn.close()}catch(e){}; if(!attempted){ attemptFullScan(); } }, 3500);
+              conn.on("open", ()=>{
+                clearTimeout(timeout);
+                playerState.conn=conn;
+                conn.send({type:"join", name:name});
+                document.getElementById("playerLobby").style.display="block";
+                document.getElementById("playerLobbyName").textContent=name;
+                const b=document.getElementById("btnJoin");
+                if(b){ b.textContent="GABUNG \uD83D\uDE80"; b.disabled=false; }
+                document.getElementById("playerJoinCard").style.display="none";
+              });
+              conn.on("data", (d)=> handlePlayerData(d));
+            }
+            function attemptFullScan(){
+              if(attempted) return;
+              attempted=true;
+              errBox.style.display="block";
+              errBox.innerHTML = 'Kode 4 huruf tidak langsung ketemu. Mungkin host pakai suffix. Minta guru <b>Peer ID lengkap</b> dari layar host (contoh hanacaraka-abcd-1234) dan tempel di bawah.<br><br><input id="fullIdInput" placeholder="Tempel Peer ID lengkap" style="width:100%;padding:10px;border-radius:10px;border:1.5px solid #5D403720;margin-top:8px"/><button id="tryFull" class="btn btn-primary" style="margin-top:8px;width:100%">COBA LAGI DENGAN PEER ID</button>';
+              const tryBtn = document.getElementById("tryFull");
+              if(tryBtn){
+                tryBtn.onclick = ()=>{
+                  const fid = document.getElementById("fullIdInput").value.trim();
+                  if(fid) tryConnect(fid);
+                };
+              }
+              const b=document.getElementById("btnJoin");
+              if(b){ b.textContent="GABUNG \uD83D\uDE80"; b.disabled=false; }
+            }
+            tryConnect(fixedId);
+          });
+          myPeer.on("error", (e)=>{
+            errBox.style.display="block";
+            errBox.textContent="Gagal konek: "+e.type+" "+(e.message||"");
+            const b=document.getElementById("btnJoin");
+            if(b){ b.textContent="GABUNG \uD83D\uDE80"; b.disabled=false; }
+          });
+        }
+
+        function handlePlayerData(data){
+          if(data.type==="rejected"){
+            const errBox=document.getElementById("joinErr");
+            errBox.style.display="block";
+            errBox.textContent=data.reason;
+            cleanupAll();
+            document.getElementById("playerJoinCard").style.display="block";
+            document.getElementById("playerLobby").style.display="none";
+          } else if(data.type==="question"){
+            const q = data.question;
+            playerState.qIndex = data.qIndex;
+            playerState.totalQuestions = data.total;
+            playerState.writtenParts=[];
+            playerState.attempts=0;
+            playerState.startTime=Date.now();
+            playerState.finished=false;
+            renderPlayerQuestion(q, data.qIndex, data.total);
+            document.getElementById("playerLobby").style.display="none";
+            document.getElementById("playerGame").style.display="block";
+          }
+        }
+
+        function renderPlayerQuestion(q, idx, total){
+          document.getElementById("pQIdx").textContent = (idx+1)+"/"+total;
+          document.getElementById("pLevel").textContent = q.level;
+          document.getElementById("pLevel").className="badge "+badgeClass(q.level);
+          document.getElementById("pLatin").textContent = q.latin;
+          document.getElementById("pHint").textContent = q.hint;
+          document.getElementById("pTargetJawa").textContent = q.jawa;
+          document.getElementById("pStreak").textContent = "\uD83D\uDD25"+playerState.streak;
+          document.getElementById("pTotal").textContent = playerState.totalPoints+" poin";
+          const writeEl = document.getElementById("pWrite");
+          if(writeEl){ writeEl.textContent = "- ketuk aksara di bawah -"; writeEl.className="writeBox jawa"; }
+          const fb = document.getElementById("pFeedback");
+          if(fb) fb.style.display="none";
+          const cont = document.getElementById("pContinue");
+          if(cont) cont.style.display="none";
+          const hist = document.getElementById("pHistory");
+          if(hist) hist.innerHTML="";
+          buildGrid("pGrid", q, "player");
+          playerState.writtenParts=[];
+          playerState.attempts=0;
+        }
+
+        function buildGrid(gridId, q, who){
+          const grid = document.getElementById(gridId);
+          if(!grid) return;
+          const decoys = POOL.filter(x=> !q.parts.includes(x));
+          const four = shuffle(decoys).slice(0, Math.max(4, 8 - q.parts.length));
+          const buttons = shuffle([...q.parts, ...four]).slice(0,8);
+          grid.innerHTML = buttons.map(b=>\`<button class="aksBtn" data-char="\${b}">\${b}</button>\`).join("");
+          grid.querySelectorAll(".aksBtn").forEach(btn=>{
+            btn.onclick = ()=>{
+              if(who==="player" && playerState.finished) return;
+              if(who==="sim" && simState.finished) return;
+              const ch = btn.getAttribute("data-char");
+              if(who==="player"){
+                playerState.writtenParts.push(ch);
+                updateWriteBox("pWrite", playerState.writtenParts);
+                const percent = Math.min(100, (playerState.writtenParts.length / q.parts.length)*50);
+                if(playerState.conn) try{ playerState.conn.send({type:"progress", percent, finished:false, attempts:playerState.attempts, correct:false}); }catch(e){}
+              } else {
+                simState.writtenParts.push(ch);
+                updateWriteBox("sWrite", simState.writtenParts);
+              }
+            };
+          });
+        }
+
+        function updateWriteBox(boxId, parts){
+          const box = document.getElementById(boxId);
+          if(!box) return;
+          if(parts.length===0){ box.textContent="- ketuk aksara di bawah -"; box.className="writeBox jawa"; return; }
+          box.textContent = parts.join("");
+          box.className="writeBox jawa filled";
+        }
+
+        document.getElementById("pDelOne").onclick = ()=>{
+          if(playerState.finished) return;
+          playerState.writtenParts.pop();
+          updateWriteBox("pWrite", playerState.writtenParts);
+        };
+        document.getElementById("pDelAll").onclick = ()=>{
+          if(playerState.finished) return;
+          playerState.writtenParts=[];
+          updateWriteBox("pWrite", playerState.writtenParts);
+        };
+        document.getElementById("sDelOne").onclick = ()=>{ if(simState.finished) return; simState.writtenParts.pop(); updateWriteBox("sWrite", simState.writtenParts); };
+        document.getElementById("sDelAll").onclick = ()=>{ simState.writtenParts=[]; updateWriteBox("sWrite", simState.writtenParts); };
+
+        function checkAnswer(writtenParts, q){
+          const written = writtenParts.join("");
+          const expected = q.jawa;
+          const partsMatch = writtenParts.length===q.parts.length && writtenParts.every((p,i)=>p===q.parts[i]);
+          return written===expected || partsMatch;
+        }
+        function detailedFeedback(writtenParts, q){
+          const written = writtenParts.join("");
+          const exp = q.jawa;
+          if(written===exp) return "Persis cocok!";
+          let msg = "Belum tepat, cek: ";
+          const lvl = (q.level||"").toUpperCase();
+          if(lvl.includes("SUKU")||lvl.includes("SWARA")) msg += "sandhangan swara, ";
+          if(lvl.includes("PEPET")) msg += "pepet ꦼ, ";
+          if(lvl.includes("PASANGAN")) msg += "pasangan ꧀ belum pas, ";
+          if(lvl.includes("CAKRA")||lvl.includes("WYANJANA")) msg += "cakra ꦿ / pengkal ꦾ, ";
+          if(lvl.includes("PANYIGEG")||lvl.includes("CECAK")) msg += "panyigeg (ꦁ ꦂ ꦃ ꧀), ";
+          if(lvl.includes("TALING")) msg += "taling ꦺ, ";
+          if(lvl.includes("WULU")) msg += "wulu ꦶ, ";
+          msg += " | Kamu: "+written+" vs Harus: "+exp;
+          return msg;
+        }
+
+        document.getElementById("pSubmit").onclick = ()=>{
+          if(playerState.finished) return;
+          const targetJawa = document.getElementById("pTargetJawa").textContent;
+          const qObj = QB_ALL.find(x=>x.jawa===targetJawa) || QB_ALL[0];
+          const correct = checkAnswer(playerState.writtenParts, qObj);
+          const feedback = document.getElementById("pFeedback");
+          feedback.style.display="block";
+          if(correct){
+            const time = (Date.now()-playerState.startTime)/1000;
+            const wrongCount = playerState.attempts;
+            let points = 100 - Math.floor(time*1.5) - wrongCount*15;
+            if(time < 5) points += 20;
+            if(playerState.streak>=2) points += 10;
+            points = Math.max(20, Math.min(120, points));
+            playerState.streak++;
+            if(playerState.streak>playerState.bestStreak) playerState.bestStreak=playerState.streak;
+            playerState.totalPoints+=points;
+            playerState.finished=true;
+            feedback.innerHTML = \`<div style="background:#E8F5E9;border:2px solid #2E7D32;border-radius:16px;padding:12px;text-align:center"><div style="font-weight:800;color:#2E7D32;font-size:18px">BENAR! +\${points} poin \uD83C\uDF89</div><div style="font-size:12px;margin-top:4px;color:#2E7D32">Waktu \${time.toFixed(1)}s • \${wrongCount}x salah sebelumnya • Streak \${playerState.streak}</div></div>\`;
+            const w = document.getElementById("pWrite");
+            if(w) w.className="writeBox jawa correct";
+            document.getElementById("pTotal").textContent=playerState.totalPoints+" poin";
+            document.getElementById("pStreak").textContent="\uD83D\uDD25"+playerState.streak;
+            if(playerState.conn) try{ playerState.conn.send({type:"progress", percent:100, finished:true, time, points, totalPoints:playerState.totalPoints, attempts:playerState.attempts, correct:true}); }catch(e){}
+            const hist = document.getElementById("pHistory");
+            if(hist) hist.innerHTML += \`<div style="color:#2E7D32">✅ Submit \${playerState.attempts+1}: Benar +\${points} (\${time.toFixed(1)}s)</div>\`;
+          } else {
+            playerState.attempts++;
+            const remaining = 3 - playerState.attempts;
+            const potential = Math.max(0, 100 - playerState.attempts*15);
+            feedback.innerHTML = \`<div style="background:#FFF8E0;border:2px solid #F9A825;border-radius:16px;padding:12px"><div style="font-weight:800;color:#C62828">SALAH, coba lagi! -15 poin potensial, sisa \${remaining} coba</div><div style="font-size:11px;margin-top:6px;line-height:1.5;color:#5D4037">\${detailedFeedback(playerState.writtenParts, qObj)}</div><div style="margin-top:8px;display:flex;gap:8px"><div style="flex:1;background:#fff;border-radius:10px;padding:8px;border:1px solid #5D403720"><div style="font-size:10px;opacity:.6">KAMU</div><div class="jawa" style="font-size:16px">\${playerState.writtenParts.join("")||"-"}</div></div><div style="flex:1;background:#E8F5E9;border-radius:10px;padding:8px;border:1px solid #2E7D32"><div style="font-size:10px;opacity:.6">SEHARUSNYA</div><div class="jawa" style="font-size:16px">\${qObj.jawa}</div></div></div></div>\`;
+            const w = document.getElementById("pWrite");
+            if(w){ w.classList.add("wrong"); setTimeout(()=>w.classList.remove("wrong"),400); }
+            if(playerState.conn) try{ playerState.conn.send({type:"progress", percent: Math.min(90, playerState.writtenParts.length/qObj.parts.length*50), finished:false, attempts:playerState.attempts, correct:false}); }catch(e){}
+            const hist = document.getElementById("pHistory");
+            if(hist) hist.innerHTML += \`<div style="color:#C62828">❌ Submit \${playerState.attempts}: Salah (potensi \${potential})</div>\`;
+            if(playerState.attempts>=3){
+              feedback.innerHTML += \`<div style="margin-top:10px;background:#FFEBEE;border:1px solid #C62828;border-radius:12px;padding:10px;text-align:center"><div style="font-size:12px;font-weight:700">Lihat jawaban: <span class="jawa" style="font-size:16px">\${qObj.jawa}</span></div></div>\`;
+              document.getElementById("pContinue").style.display="block";
+            }
+          }
+        };
+        document.getElementById("pNextForce").onclick = ()=>{
+          const targetJawa = document.getElementById("pTargetJawa").textContent;
+          const qObj = QB_ALL.find(x=>x.jawa===targetJawa) || QB_ALL[0];
+          playerState.totalPoints+=10;
+          playerState.streak=0;
+          playerState.finished=true;
+          document.getElementById("pFeedback").innerHTML = \`<div style="background:#FFF3E0;border:2px solid #EF6C00;border-radius:16px;padding:12px;text-align:center"><div style="font-weight:800">Lanjut dengan 10 poin</div><div class="jawa" style="margin-top:4px">\${qObj.jawa}</div></div>\`;
+          document.getElementById("pContinue").style.display="none";
+          document.getElementById("pTotal").textContent=playerState.totalPoints+" poin";
+          if(playerState.conn) try{ playerState.conn.send({type:"progress", percent:100, finished:true, time:0, points:10, totalPoints:playerState.totalPoints, attempts:playerState.attempts, correct:false}); }catch(e){}
+        };
+
+        function initSim(){
+          showView("v-sim");
+          const all = shuffle(QB_ALL);
+          simState.questions = all.slice(0,10).map(q=>({...q}));
+          simState.qIndex=0;
+          simState.total=0;
+          simState.streak=0;
+          simState.best=0;
+          simState.writtenParts=[];
+          simState.finished=false;
+          simState.startTime=Date.now();
+          simState.attempts=0;
+          simState.bots = [
+            {name:"Bot Sari", total:0, streak:0, attempts:0, finished:false, time:0, points:0},
+            {name:"Bot Budi", total:0, streak:0, attempts:0, finished:false, time:0, points:0}
+          ];
+          renderSimQuestion();
+          renderSimBoard();
+        }
+        function renderSimQuestion(){
+          const q = simState.questions[simState.qIndex];
+          if(!q) return;
+          document.getElementById("sQIdx").textContent = (simState.qIndex+1)+"/"+simState.questions.length;
+          document.getElementById("sLevel").textContent = q.level;
+          document.getElementById("sLevel").className="badge "+badgeClass(q.level);
+          document.getElementById("sLatin").textContent = q.latin;
+          document.getElementById("sHint").textContent = q.hint;
+          document.getElementById("sTarget").textContent = q.jawa;
+          const w = document.getElementById("sWrite");
+          if(w){ w.textContent="- ketuk aksara -"; w.className="writeBox jawa"; }
+          const fb = document.getElementById("sFeedback");
+          if(fb) fb.style.display="none";
+          const nxt = document.getElementById("sNext");
+          if(nxt) nxt.style.display="none";
+          const fr = document.getElementById("sForce");
+          if(fr) fr.style.display="none";
+          simState.writtenParts=[];
+          simState.finished=false;
+          simState.startTime=Date.now();
+          simState.attempts=0;
+          buildGrid("sGrid", q, "sim");
+          document.getElementById("sTotal").textContent=simState.total;
+          document.getElementById("sStreak").textContent="\uD83D\uDD25"+simState.streak;
+          simState.bots.forEach(b=>{ b.finished=false; b.attempts=0; b.time = 4 + Math.random()*8; b.points=0; });
+          simState.bots.forEach((bot, idx)=>{
+            setTimeout(()=>{
+              const willFailOnce = Math.random()<0.5;
+              if(willFailOnce && bot.attempts===0){
+                bot.attempts=1;
+                setTimeout(()=>{
+                  bot.finished=true;
+                  const pts = 100 - Math.floor(bot.time*1.5) - bot.attempts*15 + (bot.time<5?20:0);
+                  bot.points = Math.max(20, Math.min(120, pts));
+                  bot.total+=bot.points;
+                  renderSimBoard();
+                }, 1200);
+              } else {
+                bot.finished=true;
+                const pts = 100 - Math.floor(bot.time*1.5) + (bot.time<5?20:0);
+                bot.points = Math.max(20, Math.min(120, pts));
+                bot.total+=bot.points;
+                renderSimBoard();
+              }
+            }, bot.time*400 + idx*800);
+          });
+        }
+        function renderSimBoard(){
+          const board = document.getElementById("sBoard");
+          if(!board) return;
+          const all = [
+            {name:"Kamu", total:simState.total, streak:simState.streak, finished:simState.finished, points:simState.total, isYou:true},
+            ...simState.bots
+          ].sort((a,b)=>b.total-a.total);
+          board.innerHTML = all.map((p,i)=>\`
+            <div class="studentRow" style="\${p.isYou?'border:2px solid #5D4037':''}"><div style="width:24px;font-weight:800">\${i+1}</div><div style="flex:1"><div style="font-weight:800">\${p.name} \${p.isYou?'(Kamu)':''}</div><div style="font-size:11px;opacity:.6">\${p.finished?'✅ Selesai '+ (p.points||0)+' poin':'Menulis...'} • Streak \${p.streak||0}</div></div><div style="font-weight:800">\${p.total||0}</div></div>
+          \`).join("");
+        }
+        document.getElementById("sSubmit").onclick = ()=>{
+          const q = simState.questions[simState.qIndex];
+          if(!q) return;
+          const correct = checkAnswer(simState.writtenParts, q);
+          const fb = document.getElementById("sFeedback");
+          fb.style.display="block";
+          if(correct){
+            const time = (Date.now()-simState.startTime)/1000;
+            const wrong = simState.attempts||0;
+            let pts = 100 - Math.floor(time*1.5) - wrong*15;
+            if(time<5) pts+=20;
+            if(simState.streak>=2) pts+=10;
+            pts = Math.max(20, Math.min(120, pts));
+            simState.total+=pts;
+            simState.streak++;
+            if(simState.streak>simState.best) simState.best=simState.streak;
+            simState.finished=true;
+            fb.innerHTML = \`<div style="background:#E8F5E9;border:2px solid #2E7D32;border-radius:14px;padding:10px;text-align:center"><b style="color:#2E7D32">BENAR! +\${pts} poin \uD83C\uDF89</b><div style="font-size:11px;margin-top:4px">\${time.toFixed(1)}s • \${wrong}x salah</div></div>\`;
+            const w=document.getElementById("sWrite");
+            if(w) w.className="writeBox jawa correct";
+            document.getElementById("sNext").style.display="block";
+            renderSimBoard();
+          } else {
+            simState.attempts = (simState.attempts||0)+1;
+            const rem = 3 - simState.attempts;
+            fb.innerHTML = \`<div style="background:#FFF8E0;border:2px solid #F9A825;border-radius:14px;padding:10px"><div style="font-weight:800;color:#C62828">SALAH, coba lagi! -15 poin, sisa \${rem}</div><div style="font-size:11px;margin-top:4px">\${detailedFeedback(simState.writtenParts,q)}</div><div style="display:flex;gap:8px;margin-top:8px"><div style="flex:1;background:#fff;border-radius:8px;padding:6px"><div style="font-size:10px">KAMU</div><div class="jawa">\${simState.writtenParts.join("")}</div></div><div style="flex:1;background:#E8F5E9;border-radius:8px;padding:6px"><div style="font-size:10px">BENAR</div><div class="jawa">\${q.jawa}</div></div></div></div>\`;
+            const w=document.getElementById("sWrite");
+            if(w){ w.classList.add("wrong"); setTimeout(()=>w.classList.remove("wrong"),400); }
+            if(simState.attempts>=3){
+              document.getElementById("sForce").style.display="block";
+              fb.innerHTML += \`<div style="margin-top:8px;text-align:center;font-size:12px">Jawaban: <span class="jawa">\${q.jawa}</span></div>\`;
+            }
+            renderSimBoard();
+          }
+        };
+        document.getElementById("sNext").onclick = ()=>{
+          if(simState.qIndex < simState.questions.length-1){
+            simState.qIndex++;
+            renderSimQuestion();
+          } else {
+            document.getElementById("sFeedback").style.display="block";
+            document.getElementById("sFeedback").innerHTML = \`<div style="background:#E3F2FD;border:2px solid #1565C0;border-radius:14px;padding:12px;text-align:center"><div style="font-weight:800">Selesai! Total \${simState.total} poin • Best streak \${simState.best}</div><div style="font-size:11px;margin-top:4px">Kamu telah menyelesaikan \${simState.questions.length} soal dari 101 bank soal</div></div>\`;
+            document.getElementById("sNext").style.display="none";
+          }
+        };
+        document.getElementById("sForce").onclick = ()=>{
+          simState.total+=10;
+          simState.streak=0;
+          simState.finished=true;
+          document.getElementById("sFeedback").innerHTML = \`<div style="background:#FFF3E0;border-radius:12px;padding:10px;text-align:center">Lanjut dengan 10 poin • Jawaban: <span class="jawa">\${simState.questions[simState.qIndex].jawa}</span></div>\`;
+          document.getElementById("sNext").style.display="block";
+          document.getElementById("sForce").style.display="none";
+          renderSimBoard();
+        };
+
+        showView("v-landing");
+        console.log("Hanacaraka Sprint 8 Level 101 Soal loaded");
+      <\/script>
+    `,n.querySelectorAll("script").forEach((l)=>{let i=document.createElement("script");if(l.src)i.src=l.src,i.async=!1;else i.textContent=l.textContent;document.body.appendChild(i)})},[]),dt("div",{ref:e,style:{background:"#FFF8E7",minHeight:"100vh"}})}function Zu(){return dt(Ju,{})}Uc.createRoot(document.getElementById("root")).render(dt(Mc.default.StrictMode,{children:dt(Zu,{})}));
