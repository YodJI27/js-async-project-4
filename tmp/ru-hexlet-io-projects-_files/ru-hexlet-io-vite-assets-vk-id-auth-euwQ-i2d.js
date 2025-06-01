var ke=Object.defineProperty;var Oe=(t,e,n)=>e in t?ke(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var d=(t,e,n)=>Oe(t,typeof e!="symbol"?e+"":e,n);import{c as kt,g as ie}from"./_commonjsHelpers-D6-XlEtG.js";import{r as Te}from"./___vite-browser-external_commonjs-proxy-DDYoOVPM.js";import{p as Ae,q as Ce}from"./routes-CXA-Fm45.js";function De(t,e){
var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:window,i,r,s=function(){
return t.apply(n,r)
};return function(){
for(var l=arguments.length,u=new Array(l),f=0;f<l;f++)u[f]=arguments[f];r=u,clearTimeout(i),i=setTimeout(s,e)
}
}function X(t){
"@babel/helpers - typeof";return X=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){
return typeof e
}:function(e){
return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e
},X(t)
}function Ne(t,e){
if(X(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){
var i=n.call(t,e);if(X(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")
}return(e==="string"?String:Number)(t)
}function Ve(t){
var e=Ne(t,"string");return X(e)==="symbol"?e:String(e)
}function Ke(t,e,n){
return e=Ve(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t
}function Mt(t,e){
var n=Object.keys(t);if(Object.getOwnPropertySymbols){
var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){
return Object.getOwnPropertyDescriptor(t,r).enumerable
})),n.push.apply(n,i)
}return n
}function Le(t){
for(var e=1;e<arguments.length;e++){
var n=arguments[e]!=null?arguments[e]:{};e%2?Mt(Object(n),!0).forEach(function(i){
Ke(t,i,n[i])
}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Mt(Object(n)).forEach(function(i){
Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))
})
}return t
}function Ue(t){
if(typeof t!="string")return{};if(t=t.trim().replace(/^[?#&]/,""),!t)return{};var e=/\?(.+)$/ig.exec(t),n=e?e[1]:t;return n.split("&").reduce(function(i,r){
var s=r.split("=");return s[1]&&(i[s[0]]=decodeURIComponent(s[1])),i
},{})
}function Pe(t){
var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(X(t)!=="object"||t===null)return"";e=Le({encode:!0},e);var n=function(r){
return e.encode?encodeURIComponent(r):String(r)
};return Object.keys(t).reduce(function(i,r){
var s=t[r];return s===void 0?i:s===null?(e.skipNull||i.push([n(r),""].join("=")),i):Array.isArray(s)?(s.map(function(l){
i.push("".concat(n(r),"[]=").concat(n(l)))
}).join(),i):(i.push([n(r),n(s)].join("=")),i)
},[]).join("&")
}var Z={parse:Ue,stringify:Pe},ht;(function(t){
t.TYPE_ACTION="type_action"
})(ht||(ht={}));var J;(function(t){
t.TYPE_REGISTRATION_ITEM="type_registration_item",t.TYPE_SAK_SESSION_EVENT_ITEM="type_sak_sessions_event_item"
})(J||(J={}));var P;(function(t){
t.NOWHERE="nowhere",t.FLOATING_ONE_TAP="floating_one_tap",t.MULTIBRANDING="multibranding_widget"
})(P||(P={}));class Vt{
constructor(e){
d(this,"actionStatsCollector");this.actionStatsCollector=e
}logEvent(e,n){
const i={type:J.TYPE_REGISTRATION_ITEM,[J.TYPE_REGISTRATION_ITEM]:n};return this.actionStatsCollector.logEvent({screen:e,event:i})
}
}const oe="2.5.2",Et="vk.com",xe=`login.${Et}`,Be=`oauth.${Et}`,$e=`id.${Et}`,Me=`api.${Et}`,Fe=9e5,re=(t,e)=>{
const{__vkidDomain:n,app:i}=e.get();return`https://${n}/${t}?app_id=${i}`
},He=(t,e)=>{
const{__apiDomain:n}=e.get();return`https://${n}/method/${t}`
},Ge=t=>{
const e=Object.keys(t).map(n=>{
let i=t[n];return n=encodeURIComponent(n||""),i=encodeURIComponent(i===void 0?"":i),`${n}=${i}`
});return e.push("v=5.207"),e.join("&")
},se=(t,e)=>{
const n=Ge(e);return fetch(t,{method:"POST",body:n,mode:"cors",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(i=>i.json())
},bt=class bt{
constructor(e,n){
d(this,"timeoutId",null);d(this,"lastEvent");d(this,"config");d(this,"stackEvents",[]);d(this,"accessToken");this.config=e,this.accessToken=n
}getIntId(){
return Math.floor(Math.random()*bt.MAX_INT32)
}getCurrentTime(e=!0){
const n=Date.now().toString(10);return e?n+"000":n
}sendStats(e){
return this.stackEvents.push(e),this.timeoutId&&window.clearTimeout(this.timeoutId),new Promise((n,i)=>{
this.timeoutId=window.setTimeout(()=>{
let r={events:JSON.stringify(this.stackEvents),sak_version:oe};this.stackEvents=[];let s=re("stat_events_vkid_sdk",this.config);this.accessToken&&(r.access_token=this.accessToken,s=He("statEvents.addVKID",this.config)),se(s,r).then(n).catch(i)
},0)
})
}getBaseEvent(e){
var n;return{id:this.getIntId(),prev_event_id:((n=this.lastEvent)==null?void 0:n.id)||0,prev_nav_id:0,timestamp:this.getCurrentTime(),url:window.location.href,screen:e}
}logEvent(e){
return this.lastEvent=e,this.sendStats(e)
}
};d(bt,"MAX_INT32",2147483647);let tt=bt;class yt{
constructor(e){
d(this,"productStatsCollector");this.productStatsCollector=e
}logEvent(e){
const n={...this.productStatsCollector.getBaseEvent(e.screen),type:ht.TYPE_ACTION,[ht.TYPE_ACTION]:e.event};return this.productStatsCollector.logEvent(n)
}
}class We{
constructor(e){
d(this,"registrationStatsCollector");d(this,"uniqueSessionId");const n=new tt(e),i=new yt(n);this.registrationStatsCollector=new Vt(i)
}setUniqueSessionId(e){
this.uniqueSessionId=e
}getFields(){
const e=[{name:"sdk_type",value:"vkid"}];return this.uniqueSessionId&&e.push({name:"unique_session_id",value:this.uniqueSessionId}),e
}sendCustomAuthStart(e){
const n=this.getFields();return e&&n.push({name:"oauth_service",value:e}),this.registrationStatsCollector.logEvent(P.NOWHERE,{event_type:"custom_auth_start",fields:n})
}
}class ze{
constructor(){
d(this,"promise");d(this,"callback");d(this,"resolve");d(this,"reject");d(this,"setCallback",e=>{
this.callback=e
});d(this,"removeCallback",()=>{
this.callback=null
});d(this,"sendSuccess",e=>{
this.resolve(e),this.callback&&this.callback()
});d(this,"sendError",e=>{
this.reject(e),this.callback&&this.callback()
});this.promise=new Promise((e,n)=>{
this.resolve=e,this.reject=n
})
}get value(){
return this.promise
}
}let qe="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",je=(t,e=21)=>(n=e)=>{
let i="",r=n;for(;r--;)i+=t[Math.random()*t.length|0];return i
},Ze=(t=21)=>{
let e="",n=t;for(;n--;)e+=qe[Math.random()*64|0];return e
};function Ye(t){
try{
let e=document.cookie.match(new RegExp("(?:^|; )"+("vkid_sdk:"+t).replace(/([.$?*|{}()\[\]\\\/+^])/g,"\\$1")+"=([^;]*)"));return e?decodeURIComponent(e[1]):void 0
}catch{
return
}
}function Ft(t,e){
try{
const n=new Date(new Date().getTime()+(e.expires||Fe)).toUTCString(),i=location.host.split(".").slice(-2).join(".");document.cookie=[`vkid_sdk:${t}=${encodeURIComponent(e.value||"")}`,`expires=${n}`,"path=/",`domain=.${i}`,"SameSite=Strict","Secure"].join("; ")
}catch{}
}function ae(t){
const e=location.host.split(".").slice(-2).join(".");try{
document.cookie=[`vkid_sdk:${t}=`,"expires=Thu, 01 Jan 1970 00:00:00 UTC","path=/","SameSite=Strict","Secure",`domain=.${e}`].join("; ")
}catch{}
}function ce(t,e){
if(e.value)return Ft(t,e),e.value;let n;return n=Ye(t),n||(n=Ze(48),Ft(t,{...e,value:n})),n
}const ct=t=>ce("state",{value:t}),Ht=t=>ce("codeVerifier",{value:t}),Gt=()=>ae("state"),Qe=()=>ae("codeVerifier"),Xe=31536e6;function Je(t){
if(t)try{
const e=new Date(new Date().getTime()+Xe).toUTCString(),n=location.host.split(".").slice(-2).join(".");document.cookie=[`vkidExtId=${encodeURIComponent(t||"")}`,`expires=${e}`,"path=/",`domain=.${n}`,"SameSite=Strict","Secure"].join("; ")
}catch{}
}var F;(function(t){
t.AUTH="from_custom_auth",t.BUTTON_ONE_TAP="from_one_tap",t.FLOATING_ONE_TAP="from_floating_one_tap",t.MULTIBRANDING="from_multibranding"
})(F||(F={}));var A;(function(t){
t[t.EventNotSupported=100]="EventNotSupported",t[t.CannotCreateNewTab=101]="CannotCreateNewTab",t[t.NewTabHasBeenClosed=102]="NewTabHasBeenClosed",t[t.AuthorizationFailed=103]="AuthorizationFailed",t[t.StateMismatch=104]="StateMismatch"
})(A||(A={}));const tn="code",Y={[A.EventNotSupported]:"Event is not supported",[A.CannotCreateNewTab]:"Cannot create new tab. Try checking your browser settings",[A.NewTabHasBeenClosed]:"New tab has been closed",[A.AuthorizationFailed]:"Authorization failed with an error",[A.StateMismatch]:"The received state does not match the expected state"},en="oauth2_authorize_response";class nn extends ze{
constructor(){
super(...arguments);d(this,"state",ct());d(this,"sendSuccessData",n=>{
this.sendSuccess({type:n.type,code:n.code,state:n.state,device_id:n.device_id,expires_in:n.expires_in,ext_id:n.ext_id})
});d(this,"sendNewTabHasBeenClosed",()=>{
this.sendError({code:A.NewTabHasBeenClosed,error:Y[A.NewTabHasBeenClosed],state:this.state})
});d(this,"sendAuthorizationFailed",n=>{
this.sendError({code:A.AuthorizationFailed,error:Y[A.AuthorizationFailed],error_description:JSON.stringify(n),state:this.state})
});d(this,"sendEventNotSupported",()=>{
this.sendError({code:A.EventNotSupported,error:Y[A.EventNotSupported],state:this.state})
});d(this,"sendCannotCreateNewTab",()=>{
this.sendError({code:A.CannotCreateNewTab,error:Y[A.CannotCreateNewTab],state:this.state})
});d(this,"sendStateMismatchError",()=>{
this.sendError({code:A.StateMismatch,error:Y[A.StateMismatch],state:this.state})
})
}
}class on{
constructor(e){
d(this,"actionStatsCollector");this.actionStatsCollector=e
}logEvent(e){
const n={type:J.TYPE_SAK_SESSION_EVENT_ITEM,[J.TYPE_SAK_SESSION_EVENT_ITEM]:e};return this.actionStatsCollector.logEvent({screen:P.NOWHERE,event:n})
}sendSdkInit(e){
this.logEvent({step:"vkid_sdk_init",additional_info:e})
}
}const It=t=>(e,n,i)=>{
const r=i.value;i.value=function(s){
const l=Object.keys(t);for(let u of l){
const f=t[u];f==null||f.forEach(g=>{
const{result:y,makeError:S}=g(s[u]);if(!y)throw new Error(S(u))
})
}return r==null?void 0:r.apply(this,arguments)
}
},Tt=t=>{
let e=!0;return(typeof t=="string"&&t.trim()===""||t===void 0||t==null)&&(e=!1),{result:e,makeError:n=>`${n} is required parameter`}
},le=t=>({result:["number","string"].includes(typeof t)&&!isNaN(parseInt(t)),makeError:e=>`${e} should be number`}),rn=t=>({result:t!==void 0&&t.height!==void 0&&le(t.height)&&t.height<57&&t.height>31||t===void 0||t.height===void 0,makeError:()=>"The height should correspond to the range from 32 to 56"}),sn=t=>({result:(t==null?void 0:t.length)&&t.length>=1,makeError:()=>"OAuth list can't be empty"});var At;(function(t){
t[t.OFF=0]="OFF",t[t.ON=1]="ON",t[t.IN_PROGRESS=2]="IN_PROGRESS"
})(At||(At={}));class an{
constructor(e){
d(this,"config");this.config=e
}init(){
this.getTrackerId().then(e=>{
var n;((n=e==null?void 0:e.response)==null?void 0:n.active)===At.ON&&this.includeOnPage(e.response.tracker_id)
}).catch(console.error)
}getTrackerId(){
const e=re("vkid_sdk_get_config",this.config);return se(e,{})
}includeOnPage(e){
if((window._tmr||(window._tmr=[])).push({id:e,type:"pageView",start:new Date().getTime()}),document.getElementById("tmr-code"))return;const i=document.createElement("script");i.type="text/javascript",i.async=!0,i.id="tmr-code",i.src="https://mytopf.com/js/code.js";const r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(i,r)
}
}var z;(function(t){
t.Redirect="redirect",t.InNewTab="new_tab",t.InNewWindow="new_window"
})(z||(z={}));var ot;(function(t){
t.Redirect="redirect",t.Callback="callback"
})(ot||(ot={}));var Ct;(function(t){
t.LOWCODE="lowcode"
})(Ct||(Ct={}));var ft;(function(t){
t.Default="",t.None="none",t.Login="login",t.Consent="consent",t.SelectAccount="select_account"
})(ft||(ft={}));function cn(t,e,n,i){
var r=arguments.length,s=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,i);else for(var u=t.length-1;u>=0;u--)(l=t[u])&&(s=(r<3?l(s):r>3?l(e,n,s):l(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s
}class de{
constructor(){
d(this,"sakSessionStatsCollector");d(this,"store",{app:0,redirectUrl:"",mode:z.InNewTab,responseMode:ot.Redirect,codeVerifier:"",state:"",prompt:[ft.Default],__loginDomain:xe,__oauthDomain:Be,__vkidDomain:$e,__apiDomain:Me});d(this,"myTrackerService");const e=new tt(this),n=new yt(e);this.sakSessionStatsCollector=new on(n),this.myTrackerService=new an(this)
}init(e){
return this.set(e),this.sakSessionStatsCollector.sendSdkInit(e.source),this.myTrackerService.init(),this
}update(e){
return this.set(e)
}set(e){
return this.store={...this.store,...e},this
}get(){
return this.store
}
}cn([It({app:[Tt,le],redirectUrl:[Tt]})],de.prototype,"init",null);const ln=[".vk.com",".vk.ru"],dn=t=>!!ln.find(e=>t.endsWith(e));var lt={exports:{}};function un(t){
throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}var dt={exports:{}},hn=dt.exports,Wt;function ue(){
return Wt||(Wt=1,function(t,e){
(function(n,i){
t.exports=i()
})(hn,function(){
var n=n||function(i,r){
var s;if(typeof window<"u"&&window.crypto&&(s=window.crypto),typeof self<"u"&&self.crypto&&(s=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(s=globalThis.crypto),!s&&typeof window<"u"&&window.msCrypto&&(s=window.msCrypto),!s&&typeof kt<"u"&&kt.crypto&&(s=kt.crypto),!s&&typeof un=="function")try{
s=Te
}catch{}var l=function(){
if(s){
if(typeof s.getRandomValues=="function")try{
return s.getRandomValues(new Uint32Array(1))[0]
}catch{}if(typeof s.randomBytes=="function")try{
return s.randomBytes(4).readInt32LE()
}catch{}
}throw new Error("Native crypto module could not be used to get secure random number.")
},u=Object.create||function(){
function c(){}return function(h){
var p;return c.prototype=h,p=new c,c.prototype=null,p
}
}(),f={},g=f.lib={},y=g.Base=function(){
return{extend:function(c){
var h=u(this);return c&&h.mixIn(c),(!h.hasOwnProperty("init")||this.init===h.init)&&(h.init=function(){
h.$super.init.apply(this,arguments)
}),h.init.prototype=h,h.$super=this,h
},create:function(){
var c=this.extend();return c.init.apply(c,arguments),c
},init:function(){},mixIn:function(c){
for(var h in c)c.hasOwnProperty(h)&&(this[h]=c[h]);c.hasOwnProperty("toString")&&(this.toString=c.toString)
},clone:function(){
return this.init.prototype.extend(this)
}}
}(),S=g.WordArray=y.extend({init:function(c,h){
c=this.words=c||[],h!=r?this.sigBytes=h:this.sigBytes=c.length*4
},toString:function(c){
return(c||_).stringify(this)
},concat:function(c){
var h=this.words,p=c.words,m=this.sigBytes,k=c.sigBytes;if(this.clamp(),m%4)for(var O=0;O<k;O++){
var I=p[O>>>2]>>>24-O%4*8&255;h[m+O>>>2]|=I<<24-(m+O)%4*8
}else for(var w=0;w<k;w+=4)h[m+w>>>2]=p[w>>>2];return this.sigBytes+=k,this
},clamp:function(){
var c=this.words,h=this.sigBytes;c[h>>>2]&=4294967295<<32-h%4*8,c.length=i.ceil(h/4)
},clone:function(){
var c=y.clone.call(this);return c.words=this.words.slice(0),c
},random:function(c){
for(var h=[],p=0;p<c;p+=4)h.push(l());return new S.init(h,c)
}}),a=f.enc={},_=a.Hex={stringify:function(c){
for(var h=c.words,p=c.sigBytes,m=[],k=0;k<p;k++){
var O=h[k>>>2]>>>24-k%4*8&255;m.push((O>>>4).toString(16)),m.push((O&15).toString(16))
}return m.join("")
},parse:function(c){
for(var h=c.length,p=[],m=0;m<h;m+=2)p[m>>>3]|=parseInt(c.substr(m,2),16)<<24-m%8*4;return new S.init(p,h/2)
}},R=a.Latin1={stringify:function(c){
for(var h=c.words,p=c.sigBytes,m=[],k=0;k<p;k++){
var O=h[k>>>2]>>>24-k%4*8&255;m.push(String.fromCharCode(O))
}return m.join("")
},parse:function(c){
for(var h=c.length,p=[],m=0;m<h;m++)p[m>>>2]|=(c.charCodeAt(m)&255)<<24-m%4*8;return new S.init(p,h)
}},v=a.Utf8={stringify:function(c){
try{
return decodeURIComponent(escape(R.stringify(c)))
}catch{
throw new Error("Malformed UTF-8 data")
}
},parse:function(c){
return R.parse(unescape(encodeURIComponent(c)))
}},b=g.BufferedBlockAlgorithm=y.extend({reset:function(){
this._data=new S.init,this._nDataBytes=0
},_append:function(c){
typeof c=="string"&&(c=v.parse(c)),this._data.concat(c),this._nDataBytes+=c.sigBytes
},_process:function(c){
var h,p=this._data,m=p.words,k=p.sigBytes,O=this.blockSize,I=O*4,w=k/I;c?w=i.ceil(w):w=i.max((w|0)-this._minBufferSize,0);var B=w*O,D=i.min(B*4,k);if(B){
for(var $=0;$<B;$+=O)this._doProcessBlock(m,$);h=m.splice(0,B),p.sigBytes-=D
}return new S.init(h,D)
},clone:function(){
var c=y.clone.call(this);return c._data=this._data.clone(),c
},_minBufferSize:0});g.Hasher=b.extend({cfg:y.extend(),init:function(c){
this.cfg=this.cfg.extend(c),this.reset()
},reset:function(){
b.reset.call(this),this._doReset()
},update:function(c){
return this._append(c),this._process(),this
},finalize:function(c){
c&&this._append(c);var h=this._doFinalize();return h
},blockSize:16,_createHelper:function(c){
return function(h,p){
return new c.init(p).finalize(h)
}
},_createHmacHelper:function(c){
return function(h,p){
return new C.HMAC.init(c,p).finalize(h)
}
}});var C=f.algo={};return f
}(Math);return n
})
}(dt)),dt.exports
}var fn=lt.exports,zt;function vn(){
return zt||(zt=1,function(t,e){
(function(n,i){
t.exports=i(ue())
})(fn,function(n){
return function(){
var i=n,r=i.lib,s=r.WordArray,l=i.enc;l.Base64={stringify:function(f){
var g=f.words,y=f.sigBytes,S=this._map;f.clamp();for(var a=[],_=0;_<y;_+=3)for(var R=g[_>>>2]>>>24-_%4*8&255,v=g[_+1>>>2]>>>24-(_+1)%4*8&255,b=g[_+2>>>2]>>>24-(_+2)%4*8&255,C=R<<16|v<<8|b,c=0;c<4&&_+c*.75<y;c++)a.push(S.charAt(C>>>6*(3-c)&63));var h=S.charAt(64);if(h)for(;a.length%4;)a.push(h);return a.join("")
},parse:function(f){
var g=f.length,y=this._map,S=this._reverseMap;if(!S){
S=this._reverseMap=[];for(var a=0;a<y.length;a++)S[y.charCodeAt(a)]=a
}var _=y.charAt(64);if(_){
var R=f.indexOf(_);R!==-1&&(g=R)
}return u(f,g,S)
},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function u(f,g,y){
for(var S=[],a=0,_=0;_<g;_++)if(_%4){
var R=y[f.charCodeAt(_-1)]<<_%4*2,v=y[f.charCodeAt(_)]>>>6-_%4*2,b=R|v;S[a>>>2]|=b<<24-a%4*8,a++
}return s.create(S,a)
}
}(),n.enc.Base64
})
}(lt)),lt.exports
}var _n=vn();const pn=ie(_n);var ut={exports:{}},gn=ut.exports,qt;function mn(){
return qt||(qt=1,function(t,e){
(function(n,i){
t.exports=i(ue())
})(gn,function(n){
return function(i){
var r=n,s=r.lib,l=s.WordArray,u=s.Hasher,f=r.algo,g=[],y=[];(function(){
function _(C){
for(var c=i.sqrt(C),h=2;h<=c;h++)if(!(C%h))return!1;return!0
}function R(C){
return(C-(C|0))*4294967296|0
}for(var v=2,b=0;b<64;)_(v)&&(b<8&&(g[b]=R(i.pow(v,1/2))),y[b]=R(i.pow(v,1/3)),b++),v++
})();var S=[],a=f.SHA256=u.extend({_doReset:function(){
this._hash=new l.init(g.slice(0))
},_doProcessBlock:function(_,R){
for(var v=this._hash.words,b=v[0],C=v[1],c=v[2],h=v[3],p=v[4],m=v[5],k=v[6],O=v[7],I=0;I<64;I++){
if(I<16)S[I]=_[R+I]|0;else{
var w=S[I-15],B=(w<<25|w>>>7)^(w<<14|w>>>18)^w>>>3,D=S[I-2],$=(D<<15|D>>>17)^(D<<13|D>>>19)^D>>>10;S[I]=B+S[I-7]+$+S[I-16]
}var N=p&m^~p&k,j=b&C^b&c^C&c,L=(b<<30|b>>>2)^(b<<19|b>>>13)^(b<<10|b>>>22),U=(p<<26|p>>>6)^(p<<21|p>>>11)^(p<<7|p>>>25),H=O+U+N+y[I]+S[I],G=L+j;O=k,k=m,m=p,p=h+H|0,h=c,c=C,C=b,b=H+G|0
}v[0]=v[0]+b|0,v[1]=v[1]+C|0,v[2]=v[2]+c|0,v[3]=v[3]+h|0,v[4]=v[4]+p|0,v[5]=v[5]+m|0,v[6]=v[6]+k|0,v[7]=v[7]+O|0
},_doFinalize:function(){
var _=this._data,R=_.words,v=this._nDataBytes*8,b=_.sigBytes*8;return R[b>>>5]|=128<<24-b%32,R[(b+64>>>9<<4)+14]=i.floor(v/4294967296),R[(b+64>>>9<<4)+15]=v,_.sigBytes=R.length*4,this._process(),this._hash
},clone:function(){
var _=u.clone.call(this);return _._hash=this._hash.clone(),_
}});r.SHA256=u._createHelper(a),r.HmacSHA256=u._createHmacHelper(a)
}(Math),n.SHA256
})
}(ut)),ut.exports
}var Sn=mn();const bn=ie(Sn),En=t=>{
const e=bn(t);return pn.stringify(e).replace(/=*$/g,"").replace(/\+/g,"-").replace(/\//g,"_")
},he=(t,e,n)=>{
const i={...e,v:oe,sdk_type:"vkid",app_id:n.app,redirect_uri:n.redirectUrl,debug:n.__debug?1:null,localhost:n.__localhost?1:null},r=Z.stringify(i,{skipNull:!0});return`https://${n.__vkidDomain}/${t}?${r}`
},fe=(t,e)=>{
const n=e.get().redirectUrl,i=n.includes("?"),r=Object.keys(t).map(s=>encodeURIComponent(s)+"="+encodeURIComponent(t[s])).join("&");return`${n}${i?"&":"?"}${r}`
},yn=t=>{
if(Object.values(t).filter(Boolean).length)return btoa(JSON.stringify(t))
},ve=je("qazwsxedcrfvtgbyhnujmikol",6);function In(t){
return t=t||Object.create(null),{on:function(n,i){
(t[n]||(t[n]=[])).push(i)
},off:function(n,i){
t[n]&&t[n].splice(t[n].indexOf(i)>>>0,1)
},emit:function(n,i){
(t[n]||[]).slice().map(function(r){
r(i)
}),(t["*"]||[]).slice().map(function(r){
r(n,i)
})
}}
}class _e{
constructor(){
d(this,"events",In())
}on(e,n){
return this.events.on(e,n),this
}off(e,n){
return this.events.off(e,n),this
}
}var rt;(function(t){
t.MESSAGE="message",t.UNSUPPORTED_MESSAGE="unsupported_message"
})(rt||(rt={}));const jt="vk-sak-sdk";class wn extends _e{
constructor(n){
super();d(this,"config");this.config=n,this.handleMessage=this.handleMessage.bind(this),window.addEventListener("message",this.handleMessage)
}destroy(){
delete this.config,window.removeEventListener("message",this.handleMessage)
}sendMessage(n){
var i;(i=this.config.iframe.contentWindow)==null||i.postMessage({type:jt,...n},this.config.origin)
}handleMessage(n){
var r;if(!this.config.origin||n.origin!==this.config.origin||n.source!==this.config.iframe.contentWindow||((r=n.data)==null?void 0:r.type)!==jt){
this.events.emit(rt.UNSUPPORTED_MESSAGE,n.data);return
}this.events.emit(rt.MESSAGE,n.data)
}
}var M;(function(t){
t.LOGIN_SUCCESS="onetap: success login",t.SHOW_FULL_AUTH="onetap: show full auth",t.START_AUTHORIZE="onetap: start authorize",t.NOT_AUTHORIZED="onetap: not authorized",t.AUTHENTICATION_INFO="onetap: authentication_info"
})(M||(M={}));var W;(function(t){
t.LOADING="loading",t.LOADED="loaded",t.NOT_LOADED="not_loaded"
})(W||(W={}));var x;(function(t){
t[t.TimeoutExceeded=0]="TimeoutExceeded",t[t.InternalError=1]="InternalError",t[t.AuthError=2]="AuthError"
})(x||(x={}));const Zt={[x.TimeoutExceeded]:"timeout",[x.InternalError]:"internal error",[x.AuthError]:"auth error"};var V;(function(t){
t.START_LOAD="common: start load",t.LOAD="common: load",t.SHOW="common: show",t.HIDE="common: hide",t.CLOSE="common: close",t.ERROR="common: error",t.RESIZE="common: resize"
})(V||(V={}));const Rn=t=>`
<div id="${t}" data-test-id="widget">
  <style>
    #${t} {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
    }

    #${t} iframe {
      border: none;
      color-scheme: auto;
    }

    #${t} .loader,
    #${t} .error {
      display: none;
      width: 100%;
      height: 100%;
      text-align: center;
    }
  </style>
  <div class="loader"></div>
  <div class="error"></div>
  <iframe width="100%" height="100%"></iframe>
</div>
  `;function kn(t,e,n,i){
var r=arguments.length,s=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,i);else for(var u=t.length-1;u>=0;u--)(l=t[u])&&(s=(r<3?l(s):r>3?l(e,n,s):l(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s
}const On=5e3,Tn=300,Q=class Q extends _e{
constructor(){
super();d(this,"id",ve());d(this,"lang");d(this,"scheme");d(this,"vkidAppName","");d(this,"config");d(this,"timeoutTimer");d(this,"bridge");d(this,"container");d(this,"templateRenderer",Rn);d(this,"elements");this.config=Q.config
}render(n){
const{container:i,...r}=n;return this.container=i,this.renderTemplate(),this.registerElements(),"fastAuthDisabled"in n&&n.fastAuthDisabled?(this.setState(W.NOT_LOADED),this):(this.loadWidgetFrame(r),this)
}close(){
var n,i,r;clearTimeout(this.timeoutTimer),(i=(n=this.elements)==null?void 0:n.root)==null||i.remove(),(r=this.bridge)==null||r.destroy(),this.events.emit(V.CLOSE)
}show(){
return this.elements.root&&(this.elements.root.style.display="block",this.events.emit(V.SHOW)),this
}hide(){
return this.elements.root&&(this.elements.root.style.display="none",this.events.emit(V.HIDE)),this
}onStartLoadHandler(){
this.setState(W.LOADING),this.timeoutTimer=setTimeout(()=>{
this.onErrorHandler({code:x.TimeoutExceeded,text:Zt[x.TimeoutExceeded]})
},On),this.events.emit(V.START_LOAD)
}onLoadHandler(){
clearTimeout(this.timeoutTimer),setTimeout(()=>{
this.setState(W.LOADED)
},Tn),this.events.emit(V.LOAD)
}onErrorHandler(n){
var i,r;clearTimeout(this.timeoutTimer),this.setState(W.NOT_LOADED),this.events.emit(M.AUTHENTICATION_INFO,{is_online:!1}),this.events.emit(V.ERROR,n),(r=(i=this.elements)==null?void 0:i.iframe)==null||r.remove()
}onBridgeMessageHandler(n){
switch(n.handler){
case V.LOAD:{this.onLoadHandler();break}case V.CLOSE:{this.close();break}case V.ERROR:{this.onErrorHandler({code:x.InternalError,text:Zt[x.InternalError],details:n.params});break}case V.RESIZE:{this.elements.root.style.height=`${n.params.height}px`;break}
}
}renderTemplate(){
this.container.insertAdjacentHTML("beforeend",this.templateRenderer(this.id))
}loadWidgetFrame(n){
this.onStartLoadHandler(),this.bridge=new wn({iframe:this.elements.iframe,origin:`https://${this.config.get().__vkidDomain}`}),this.bridge.on(rt.MESSAGE,i=>this.onBridgeMessageHandler(i)),this.elements.iframe.src=this.getWidgetFrameSrc(this.config.get(),n)
}getWidgetFrameSrc(n,i){
const r={...i,origin:location.protocol+"//"+location.host,oauth_version:2};return he(this.vkidAppName,r,n)
}setState(n){
this.elements.root.setAttribute("data-state",n)
}registerElements(){
const n=document.getElementById(this.id);this.elements={root:n,iframe:n.querySelector("iframe")}
}redirectWithPayload(n){
location.assign(fe(n,Q.config))
}
};d(Q,"config"),d(Q,"auth");let q=Q;kn([It({container:[Tt]})],q.prototype,"render",null);var o;(function(t){
t[t.RUS=0]="RUS",t[t.UKR=1]="UKR",t[t.ENG=3]="ENG",t[t.SPA=4]="SPA",t[t.GERMAN=6]="GERMAN",t[t.POL=15]="POL",t[t.FRA=16]="FRA",t[t.UZB=65]="UZB",t[t.TURKEY=82]="TURKEY",t[t.KAZ=97]="KAZ",t[t.BEL=114]="BEL"
})(o||(o={}));var vt;(function(t){
t.LIGHT="light",t.DARK="dark"
})(vt||(vt={}));class An{
constructor(e){
d(this,"registrationStatsCollector");d(this,"uniqueSessionId");const n=new tt(e),i=new yt(n);this.registrationStatsCollector=new Vt(i)
}setUniqueSessionId(e){
this.uniqueSessionId=e
}getFields(){
const e=[{name:"sdk_type",value:"vkid"}];return this.uniqueSessionId&&e.push({name:"unique_session_id",value:this.uniqueSessionId}),e
}sendMultibrandingOauthAdded({screen:e,fields:n}){
this.registrationStatsCollector.logEvent(e,{event_type:"multibranding_oauth_added",fields:[...this.getFields(),...n]})
}sendOkButtonShow({screen:e,isIcon:n}){
this.registrationStatsCollector.logEvent(e,{event_type:"ok_button_show",fields:[...this.getFields(),{name:"button_type",value:n?"icon":"default"}]})
}sendVkButtonShow({screen:e,isIcon:n}){
this.registrationStatsCollector.logEvent(e,{event_type:"vk_button_show",fields:[...this.getFields(),{name:"button_type",value:n?"icon":"default"}]})
}sendMailButtonShow({screen:e,isIcon:n}){
this.registrationStatsCollector.logEvent(e,{event_type:"mail_button_show",fields:[...this.getFields(),{name:"button_type",value:n?"icon":"default"}]})
}sendVkButtonTap({screen:e,isIcon:n}){
return this.registrationStatsCollector.logEvent(e,{event_type:"vk_button_tap",fields:[...this.getFields(),{name:"button_type",value:n?"icon":"default"}]})
}sendOkButtonTap({screen:e,isIcon:n}){
return this.registrationStatsCollector.logEvent(e,{event_type:"ok_button_tap",fields:[...this.getFields(),{name:"button_type",value:n?"icon":"default"}]})
}sendMailButtonTap({screen:e,isIcon:n}){
return this.registrationStatsCollector.logEvent(e,{event_type:"mail_button_tap",fields:[...this.getFields(),{name:"button_type",value:n?"icon":"default"}]})
}
}var it;(function(t){
t.VK="vk",t.OK="ok_ru",t.MAIL="mail_ru"
})(it||(it={}));var _t;(function(t){
t.LOGIN_SUCCESS="oauthlist: success login"
})(_t||(_t={}));const pe=t=>t==null;var T;(function(t){
t.OK="ok_ru",t.MAIL="mail_ru",t.VK="vkid"
})(T||(T={}));var Dt;(function(t){
t[t.OK=T.OK]="OK",t[t.MAIL=T.MAIL]="MAIL"
})(Dt||(Dt={}));const Cn={[T.OK]:"OK",[T.MAIL]:"Mail",[T.VK]:"VK ID"},Dn={[o.RUS]:"или войти через VK ID с использованием данных из сервиса",[o.UKR]:"або увійти через VK ID з використанням даних із сервісу",[o.BEL]:"ці ўвайсці праз VK ID з выкарыстаннем даных з сэрвісу",[o.KAZ]:"сервистегі деректерді пайдаланып VK ID арқылы кіру",[o.UZB]:"yoki xizmatning maʼlumotlaridan foydalangan holda VK ID orqali kirish",[o.ENG]:"or sign in with VK ID using information from a service",[o.SPA]:"o iniciar sesión con VK ID utilizando la información de un servicio",[o.GERMAN]:"oder melden Sie sich mit Ihrer VK-ID an, indem Sie Informationen aus dem Dienst verwenden",[o.POL]:"lub wejdź poprzez VK ID przy użyciu danych z serwisu",[o.FRA]:"ou se connecter avec VK ID en utilisant les informations d'un service",[o.TURKEY]:"Ya da hizmetteki verileri kullanarak VK ID hizmeti yardımıyla gir"},Yt={[o.RUS]:{[T.OK]:"Войти через OK",[T.MAIL]:"Войти с Mail",[T.VK]:"Войти с VK ID"},[o.UKR]:"Увійти з {provider}",[o.BEL]:"Увайсці з {provider}",[o.KAZ]:"{provider} кіру",[o.UZB]:"{provider} orqali kirish",[o.ENG]:"Sign in with {provider}",[o.SPA]:"Iniciar sesión con {provider}",[o.GERMAN]:"Mit {provider} anmelden",[o.POL]:"Zaloguj się z {provider}",[o.FRA]:"Se connecter avec {provider}",[o.TURKEY]:"{provider}'den gir"},Nn=`
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 22C13.4477 22 13 21.5523 13 21C13 20.4477 13.4477 20 14 20C17.3137 20 20 17.3137 20 14C20 10.6863 17.3137 8 14 8C10.6863 8 8 10.6863 8 14C8 14.6472 8.10214 15.2793 8.3002 15.8802C8.4731 16.4047 8.18807 16.9701 7.66355 17.143C7.13902 17.3159 6.57365 17.0308 6.40074 16.5063C6.13628 15.7041 6 14.8606 6 14C6 9.58172 9.58172 6 14 6C18.4183 6 22 9.58172 22 14C22 18.4183 18.4183 22 14 22Z" fill="currentColor"/>
  </svg>
`,Vn={[T.VK]:t=>`
<svg width="${t+1}" height="${t}" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.33331 13.56C3.33331 8.58197 3.33331 6.09295 4.87979 4.54648C6.42627 3 8.91528 3 13.8933 3H14.7733C19.7513 3 22.2404 3 23.7868 4.54648C25.3333 6.09295 25.3333 8.58197 25.3333 13.56V14.44C25.3333 19.418 25.3333 21.907 23.7868 23.4535C22.2404 25 19.7513 25 14.7733 25H13.8933C8.91528 25 6.42627 25 4.87979 23.4535C3.33331 21.907 3.33331 19.418 3.33331 14.44V13.56Z" fill="#0077FF" style="fill:#0077FF;fill:color(display-p3 0.0000 0.4667 1.0000);fill-opacity:1;"/>
  <path d="M15.0398 18.9C10.0174 18.9 7.15269 15.4466 7.03333 9.70001H9.54912C9.63175 13.9178 11.4864 15.7044 12.9555 16.0728V9.70001H15.3245V13.3376C16.7752 13.1811 18.2992 11.5234 18.8134 9.70001H21.1823C20.7875 11.9471 19.1348 13.6047 17.9595 14.2862C19.1348 14.8387 21.0171 16.2846 21.7333 18.9H19.1256C18.5655 17.1503 17.17 15.7965 15.3245 15.6123V18.9H15.0398Z" fill="white" style="fill:white;fill:white;fill-opacity:1;"/>
</svg>
  `,[T.OK]:t=>`
<svg width="${t}" height="${t}" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.67554 3.67638C2 5.36482 2 8.09045 2 13.5176V14.4824C2 19.9216 2 22.6352 3.68759 24.3236C5.37519 26 8.09944 26 13.5238 26H14.4882C19.9126 26 22.6489 26 24.3245 24.3236C26 22.6352 26 19.9095 26 14.4824V13.5176C26 8.09045 26 5.35276 24.3245 3.67638C22.6369 2 19.9126 2 14.4882 2H13.5239C8.08739 2 5.37519 2 3.67554 3.67638Z" fill="#EE8208" style="fill:#EE8208;fill:color(display-p3 0.9333 0.5098 0.0314);fill-opacity:1;"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1157 12.621C16.3239 13.4108 15.218 13.9122 13.999 13.9122C12.7926 13.9122 11.6741 13.4108 10.8823 12.621C10.0906 11.8313 9.58793 10.7407 9.58793 9.51224C9.58793 8.28377 10.0906 7.18065 10.8823 6.40345C11.6741 5.61372 12.78 5.1123 13.999 5.1123C15.218 5.1123 16.3239 5.61372 17.1157 6.40345C17.9074 7.19319 18.4101 8.2963 18.4101 9.51224C18.4101 10.7282 17.9074 11.8313 17.1157 12.621ZM14.0116 7.49404C13.4586 7.49404 12.9559 7.71967 12.5915 8.0832C12.2396 8.44673 12.0008 8.94814 12.0008 9.4997C12.0008 10.0513 12.227 10.5527 12.5915 10.9162C12.9559 11.2797 13.446 11.5054 14.0116 11.5054C14.5645 11.5054 15.0672 11.2797 15.4317 10.9162C15.7961 10.5527 16.0223 10.0638 16.0223 9.4997C16.0223 8.94814 15.7961 8.44673 15.4317 8.0832C15.0672 7.71967 14.5771 7.49404 14.0116 7.49404Z" fill="white" style="fill:white;fill:white;fill-opacity:1;"/>
  <path d="M18.6614 13.9247L19.9558 15.6922C20.0312 15.7799 20.0187 15.8927 19.8553 15.968C18.762 16.8705 17.4927 17.4471 16.1731 17.7605L18.9128 22.5741C18.9882 22.7246 18.9002 22.8875 18.7368 22.8875H16.06C15.9721 22.8875 15.8967 22.8248 15.8715 22.7496L13.9613 18.4876L12.0511 22.7496C12.026 22.8374 11.9506 22.8875 11.8626 22.8875H9.1858C9.03499 22.8875 8.93445 22.712 9.00986 22.5741L11.7495 17.7605C10.4299 17.4471 9.16066 16.8454 8.06732 15.968C7.99192 15.8927 7.97935 15.7799 8.04219 15.6922L9.3366 13.9247C9.412 13.8369 9.56281 13.8244 9.65078 13.8996C10.8824 14.9401 12.3779 15.617 13.999 15.617C15.6202 15.617 17.1282 14.9401 18.3472 13.8996C18.4352 13.8119 18.586 13.8244 18.6614 13.9247Z" fill="white" style="fill:white;fill:white;fill-opacity:1;"/>
</svg>
  `,[T.MAIL]:t=>`
<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" fill="none" viewBox="0 0 28 28">
    <path fill="#07F" d="M17.61 14a3.61 3.61 0 0 1-7.22 0A3.61 3.61 0 0 1 14 10.39a3.62 3.62 0 0 1 3.61 3.6Zm-3.6-12C7.37 2 2 7.38 2 14a12.01 12.01 0 0 0 18.77 9.91l.03-.02L19.2 22l-.03.01A9.54 9.54 0 0 1 14 23.53a9.55 9.55 0 0 1 0-19.07 9.55 9.55 0 0 1 9.31 11.59c-.3 1.24-1.16 1.62-1.82 1.56-.65-.05-1.42-.51-1.43-1.66V14A6.08 6.08 0 0 0 14 7.93 6.08 6.08 0 0 0 7.93 14 6.08 6.08 0 0 0 14 20.07c1.62 0 3.15-.64 4.3-1.8a3.9 3.9 0 0 0 3 1.8l.32.01a4.08 4.08 0 0 0 2.44-.82 4.5 4.5 0 0 0 1.55-2.28l.13-.5v-.02A12 12 0 0 0 14 2Z"/>
</svg>
  `},Qt={height:44,borderRadius:8},Kn=t=>e=>{
const n=t.lang||o.RUS,i=t.scheme||"light",r=pe(t.borderRadius)?Qt.borderRadius:t.borderRadius,s=t.height||Qt.height,l=s<40?24:28,u=s<40?6:s<48?8:12,f=t.oauthList.map(a=>{
const _=n===o.RUS?Yt[n][a]:`${Yt[n].replace("{provider}",Cn[a])}`;return`
      <div class="VkIdSdk_oauth_item" data-oauth="${a}">
        ${Vn[a](l)}
        <div class="VkIdSdk_oauth_button_text">${_}</div>
      </div>
    `
}).join(""),g=()=>{
var v;const a=document.querySelector(`#${e} .VkIdSdk_oauth_button_text`),_=document.querySelector(`#${e} .VkIdSdk_oauth_item`);if(!a||!_)return;a.clientWidth>=_.clientWidth-l*2-32-u*2&&((v=document.querySelector(`#${e} .VkIdSdk_oauth_list`))==null||v.removeAttribute("data-single-mode"))
};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",g):setTimeout(g,0);const y=t.oauthList.length===1?"data-single-mode":"",S=Dn[n];return`
    <div id="${e}" class="VkIdSdk_oauth_container" data-test-id="oauthList" data-scheme="${i}">
      <style>
        :root #${e}[data-scheme=light] {
          --oauthlist--item_border_color: rgba(0, 0, 0, .12);
          --oauthlist--color_text_secondary: #818c99;
          --oauthlist--color_text_primary: #000;
          --oauthlist--item_background_color: #fff;
        }

        :root #${e}[data-scheme=dark] {
          --oauthlist--item_border_color: rgba(255, 255, 255, 0.12);
          --oauthlist--color_text_secondary: #76787a;
          --oauthlist--color_text_primary: #e1e3e6;
          --oauthlist--item_background_color: unset;
        }

        #${e}.VkIdSdk_oauth_container {
          position: relative;
        }

        #${e} .VkIdSdk_oauth_list {
          display: flex;
          height: ${s}px;
        }

        #${e} .VkIdSdk_oauth_item {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: ${u}px;
          margin-right: 12px;
          width: 100%;
          border: 1px solid var(--oauthlist--item_border_color);
          background: var(--oauthlist--item_background_color);
          border-radius: ${r}px;
          cursor: pointer;
        }

        #${e} .VkIdSdk_oauth_item:last-child {
          margin-right: 0;
        }

        #${e} .VkIdSdk_oauth_link_text {
          display: flex;
          font-family: -apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif;
          color: var(--oauthlist--color_text_secondary);
          font-size: 13px;
          line-height: 16px;
          margin-bottom: 16px;
          justify-content: center;
          text-align: center;
        }

        #${e} .VkIdSdk_spinner {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background: #fff;
        }

        #${e}[data-state=loaded] .VkIdSdk_spinner {
          transition: .2s;
          opacity: 0;
          pointer-events: none;
        }

        #${e} .VkIdSdk_spinner > svg {
          animation: vkIdSdkButtonSpinner 0.7s linear infinite;
        }

        #${e} .VkIdSdk_oauth_button_text {
          display: none;
          font-family: -apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif;
          color: var(--oauthlist--color_text_primary);
          padding-left: 8px;
        }

        #${e} .VkIdSdk_oauth_list[data-single-mode] .VkIdSdk_oauth_button_text {
          display: block;
        }

        @keyframes vkIdSdkButtonSpinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      </style>
      <div class="VkIdSdk_spinner">
        ${Nn}
      </div>
      <div class="VkIdSdk_oauth_link_text">${S}</div>
      <div class="VkIdSdk_oauth_list" ${y}>${f}</div>
    </div>
  `
};function Ln(t,e,n,i){
var r=arguments.length,s=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,i);else for(var u=t.length-1;u>=0;u--)(l=t[u])&&(s=(r<3?l(s):r>3?l(e,n,s):l(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s
}class wt extends q{
constructor(){
super();d(this,"analytics");d(this,"providers");d(this,"flowSource");d(this,"uniqueSessionId");this.analytics=new An(this.config)
}sendStartAnalytics(){
const n=new Set(this.providers);this.analytics.sendMultibrandingOauthAdded({screen:this.flowSource,fields:[{name:it.VK,value:(+n.has(T.VK)).toString()},{name:it.OK,value:(+n.has(T.OK)).toString()},{name:it.MAIL,value:(+n.has(T.MAIL)).toString()}]}),n.has(T.VK)&&this.analytics.sendVkButtonShow({screen:this.flowSource,isIcon:n.size>1}),n.has(T.OK)&&this.analytics.sendOkButtonShow({screen:this.flowSource,isIcon:n.size>1}),n.has(T.MAIL)&&this.analytics.sendMailButtonShow({screen:this.flowSource,isIcon:n.size>1})
}render(n){
var i,r;return this.lang=(n==null?void 0:n.lang)||o.RUS,this.scheme=(n==null?void 0:n.scheme)||vt.LIGHT,this.providers=n.oauthList,this.flowSource=(n==null?void 0:n.flowSource)||P.MULTIBRANDING,this.uniqueSessionId=(n==null?void 0:n.uniqueSessionId)||this.id,this.analytics.setUniqueSessionId(this.uniqueSessionId),this.templateRenderer=Kn({lang:this.lang,oauthList:n.oauthList,height:(i=n.styles)==null?void 0:i.height,borderRadius:(r=n.styles)==null?void 0:r.borderRadius,scheme:this.scheme}),this.container=n.container,this.renderTemplate(),this.registerElements(),this.setState(W.LOADED),this.sendStartAnalytics(),this.elements.root.addEventListener("click",this.handleClick.bind(this)),this
}handleClick(n){
const i=n.target.closest("[data-oauth]");if(!i)return;const r=i.getAttribute("data-oauth"),s={lang:this.lang,scheme:this.scheme,provider:r,statsFlowSource:F.MULTIBRANDING,uniqueSessionId:this.uniqueSessionId};let l;switch(r){
case T.VK:l=this.analytics.sendVkButtonTap.bind(this.analytics);break;case T.OK:l=this.analytics.sendOkButtonTap.bind(this.analytics);break;case T.MAIL:l=this.analytics.sendMailButtonTap.bind(this.analytics);break
}const u=()=>{
wt.auth.login(s).then(g=>{
this.events.emit(_t.LOGIN_SUCCESS,g)
}).catch(g=>{
this.events.emit(V.ERROR,{code:x.AuthError,text:g.error})
})
},f={screen:this.flowSource,isIcon:this.providers.length>1};this.config.get().mode===z.Redirect?l(f).finally(u):(l(f),u())
}
}Ln([It({oauthList:[sn]})],wt.prototype,"render",null);const Un="s256",K=class K{
constructor(){
d(this,"dataService");d(this,"opener");d(this,"interval");d(this,"id",ve());d(this,"analytics");d(this,"state");d(this,"codeVerifier");d(this,"close",()=>{
this.opener&&this.opener.close()
});d(this,"handleMessage",({origin:e,source:n,data:i})=>{
if(!(n!==this.opener||!this.opener||!dn(e))){
if(this.unsubscribe(),i.payload.error){
this.dataService.sendAuthorizationFailed(i.payload.error);return
}if(i.action===en+this.state){
if(this.state!==i.payload.state)this.dataService.sendStateMismatchError();else{
Je(i.payload.ext_id),delete i.payload.ext_id,Gt(),this.state="";const{responseMode:r}=K.config.get();r===ot.Redirect?(this.redirectWithPayload(i.payload),this.close()):this.dataService.sendSuccessData(i.payload)
}return
}this.dataService.sendEventNotSupported()
}
});d(this,"handleInterval",()=>{
var e;(e=this.opener)!=null&&e.closed&&(this.unsubscribe(),this.dataService.sendNewTabHasBeenClosed())
});d(this,"subscribe",()=>{
this.interval=window.setInterval(this.handleInterval,1e3),window.addEventListener("message",this.handleMessage),this.dataService.removeCallback()
});d(this,"unsubscribe",()=>{
window.removeEventListener("message",this.handleMessage),clearInterval(this.interval),this.dataService.setCallback(this.close)
});d(this,"loginInNewTab",e=>{
const n=window.open(e,"_blank");return this.handleWindowOpen(n)
});d(this,"loginInNewWindow",e=>{
const r=screen.height/2-400,s=screen.width/2-800/2,l=`top=${r},left=${s},width=800,height=800,location`,u=window.open(e,"_blank",l);return this.handleWindowOpen(u)
});d(this,"handleWindowOpen",e=>(this.dataService=new nn,this.opener=e,this.opener?this.subscribe():this.dataService.sendCannotCreateNewTab(),this.dataService.value));d(this,"loginByRedirect",e=>(location.assign(e),Promise.resolve()));d(this,"login",e=>{
const n=K.config.get(),{scope:i,app:r,codeChallenge:s,prompt:l}=n,u=(e==null?void 0:e.statsFlowSource)||F.AUTH,f=(e==null?void 0:e.uniqueSessionId)||this.id;u===F.AUTH&&this.analytics.setUniqueSessionId(f),this.codeVerifier=Ht(n.codeVerifier),this.state=ct(n.state);const g=[...l];(Object.values(Dt).includes(e==null?void 0:e.provider)||e!=null&&e.screen)&&g.unshift(ft.Login);const S={lang_id:e==null?void 0:e.lang,scheme:e==null?void 0:e.scheme,code_challenge:s||En(this.codeVerifier),code_challenge_method:Un,client_id:r,response_type:tn,scope:i,state:this.state,provider:e==null?void 0:e.provider,prompt:g.join(" ").trim(),stats_info:yn({flow_source:u,session_id:f})};n.mode!==z.Redirect&&(u===F.AUTH&&this.analytics.sendCustomAuthStart(e==null?void 0:e.provider),S.origin=location.protocol+"//"+location.hostname);let a=he("authorize",S,n);switch(n.mode){
case z.InNewWindow:return this.loginInNewWindow(a);case z.InNewTab:return this.loginInNewTab(a);default:return u===F.AUTH?this.analytics.sendCustomAuthStart(e==null?void 0:e.provider).finally(()=>{
this.loginByRedirect(a)
}):this.loginByRedirect(a)
}
});this.analytics=new We(K.config)
}checkState(e){
if(this.state!==e)return{code:A.StateMismatch,error:Y[A.StateMismatch],state:e};Gt(),this.state=""
}exchangeCode(e,n,i){
const r=K.config.get();this.state=ct(r.state);const s={grant_type:"authorization_code",redirect_uri:r.redirectUrl,client_id:r.app,code_verifier:i||this.codeVerifier||Ht(),state:this.state,device_id:n},l=Z.stringify(s);return fetch(`https://${r.__vkidDomain}/oauth2/auth?${l}`,{method:"POST",body:new URLSearchParams({code:e})}).then(u=>this.oauthSectionFetchHandler(u)).then(u=>{
const f=this.checkState(u.state);if(f)throw f;return Qe(),this.codeVerifier="",u
})
}refreshToken(e,n){
const i=K.config.get();this.state=ct(i.state);const r={grant_type:"refresh_token",redirect_uri:i.redirectUrl,client_id:i.app,device_id:n,state:this.state},s=Z.stringify(r);return fetch(`https://${i.__vkidDomain}/oauth2/auth?${s}`,{method:"POST",body:new URLSearchParams({refresh_token:e})}).then(l=>this.oauthSectionFetchHandler(l)).then(l=>{
const u=this.checkState(l.state);if(u)throw u;return K.config.update({state:i.state}),l
})
}logout(e){
const n=K.config.get(),i={client_id:n.app},r=Z.stringify(i);return fetch(`https://${n.__vkidDomain}/oauth2/logout?${r}`,{method:"POST",body:new URLSearchParams({access_token:e})}).then(s=>this.oauthSectionFetchHandler(s))
}userInfo(e){
const n=K.config.get(),i={client_id:n.app},r=Z.stringify(i);return fetch(`https://${n.__vkidDomain}/oauth2/user_info?${r}`,{method:"POST",body:new URLSearchParams({access_token:e})}).then(s=>this.oauthSectionFetchHandler(s))
}publicInfo(e){
const n=K.config.get(),i={client_id:n.app},r=Z.stringify(i);return fetch(`https://${n.__vkidDomain}/oauth2/public_info?${r}`,{method:"POST",body:new URLSearchParams({id_token:e})}).then(s=>this.oauthSectionFetchHandler(s))
}oauthSectionFetchHandler(e){
return e.json().then(n=>{
if("error"in n)throw n;return n
})
}redirectWithPayload(e){
location.assign(fe(e,K.config))
}
};d(K,"config");let pt=K;var gt;(function(t){
t.Primary="primary",t.Secondary="secondary"
})(gt||(gt={}));var E;(function(t){
t[t.SIGN_IN=0]="SIGN_IN",t[t.SIGN_UP=1]="SIGN_UP",t[t.GET=2]="GET",t[t.OPEN=3]="OPEN",t[t.CALCULATE=4]="CALCULATE",t[t.ORDER=5]="ORDER",t[t.PLACE_ORDER=6]="PLACE_ORDER",t[t.SUBMIT_REQUEST=7]="SUBMIT_REQUEST",t[t.PARTICIPATE=8]="PARTICIPATE"
})(E||(E={}));const Pn={[E.SIGN_IN]:"default",[E.SIGN_UP]:"appoint",[E.GET]:"receive",[E.OPEN]:"open",[E.CALCULATE]:"calculate",[E.ORDER]:"order",[E.PLACE_ORDER]:"service_order_placing",[E.SUBMIT_REQUEST]:"request",[E.PARTICIPATE]:"take_part"};class xn{
constructor(e){
d(this,"registrationStatsCollector");d(this,"uniqueSessionId");const n=new tt(e),i=new yt(n);this.registrationStatsCollector=new Vt(i)
}setUniqueSessionId(e){
this.uniqueSessionId=e
}getFields(){
const e=[{name:"sdk_type",value:"vkid"}];return this.uniqueSessionId&&e.push({name:"unique_session_id",value:this.uniqueSessionId}),e
}sendFrameLoadingFailed(){
this.registrationStatsCollector.logEvent(P.NOWHERE,{event_type:"iframe_loading_failed",fields:this.getFields()})
}sendNoSessionFound(){
this.registrationStatsCollector.logEvent(P.NOWHERE,{event_type:"no_session_found",fields:this.getFields()})
}sendOneTapButtonNoUserShow(e="default"){
this.registrationStatsCollector.logEvent(P.NOWHERE,{event_type:"onetap_button_no_user_show",fields:[...this.getFields(),{name:"button_type",value:e}]})
}sendOneTapButtonNoUserTap(e="default"){
return this.registrationStatsCollector.logEvent(P.NOWHERE,{event_type:"onetap_button_no_user_tap",fields:[...this.getFields(),{name:"button_type",value:e}]})
}sendScreenProceed(e){
this.registrationStatsCollector.logEvent(P.NOWHERE,{event_type:"screen_proceed",fields:[...this.getFields(),{name:"theme_type",value:e.scheme},{name:"style_type",value:e.skin},{name:"language",value:e.lang.toString()},{name:"text_type",value:Pn[e.contentId]}]})
}
}var ge=function(){
if(typeof Map<"u")return Map;function t(e,n){
var i=-1;return e.some(function(r,s){
return r[0]===n?(i=s,!0):!1
}),i
}return function(){
function e(){
this.__entries__=[]
}return Object.defineProperty(e.prototype,"size",{get:function(){
return this.__entries__.length
},enumerable:!0,configurable:!0}),e.prototype.get=function(n){
var i=t(this.__entries__,n),r=this.__entries__[i];return r&&r[1]
},e.prototype.set=function(n,i){
var r=t(this.__entries__,n);~r?this.__entries__[r][1]=i:this.__entries__.push([n,i])
},e.prototype.delete=function(n){
var i=this.__entries__,r=t(i,n);~r&&i.splice(r,1)
},e.prototype.has=function(n){
return!!~t(this.__entries__,n)
},e.prototype.clear=function(){
this.__entries__.splice(0)
},e.prototype.forEach=function(n,i){
i===void 0&&(i=null);for(var r=0,s=this.__entries__;r<s.length;r++){
var l=s[r];n.call(i,l[1],l[0])
}
},e
}()
}(),Nt=typeof window<"u"&&typeof document<"u"&&window.document===document,mt=function(){
return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()
}(),Bn=function(){
return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(mt):function(t){
return setTimeout(function(){
return t(Date.now())
},1e3/60)
}
}(),$n=2;function Mn(t,e){
var n=!1,i=!1,r=0;function s(){
n&&(n=!1,t()),i&&u()
}function l(){
Bn(s)
}function u(){
var f=Date.now();if(n){
if(f-r<$n)return;i=!0
}else n=!0,i=!1,setTimeout(l,e);r=f
}return u
}var Fn=20,Hn=["top","right","bottom","left","width","height","size","weight"],Gn=typeof MutationObserver<"u",Wn=function(){
function t(){
this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Mn(this.refresh.bind(this),Fn)
}return t.prototype.addObserver=function(e){
~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()
},t.prototype.removeObserver=function(e){
var n=this.observers_,i=n.indexOf(e);~i&&n.splice(i,1),!n.length&&this.connected_&&this.disconnect_()
},t.prototype.refresh=function(){
var e=this.updateObservers_();e&&this.refresh()
},t.prototype.updateObservers_=function(){
var e=this.observers_.filter(function(n){
return n.gatherActive(),n.hasActive()
});return e.forEach(function(n){
return n.broadcastActive()
}),e.length>0
},t.prototype.connect_=function(){
!Nt||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Gn?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)
},t.prototype.disconnect_=function(){
!Nt||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)
},t.prototype.onTransitionEnd_=function(e){
var n=e.propertyName,i=n===void 0?"":n,r=Hn.some(function(s){
return!!~i.indexOf(s)
});r&&this.refresh()
},t.getInstance=function(){
return this.instance_||(this.instance_=new t),this.instance_
},t.instance_=null,t
}(),me=function(t,e){
for(var n=0,i=Object.keys(e);n<i.length;n++){
var r=i[n];Object.defineProperty(t,r,{value:e[r],enumerable:!1,writable:!1,configurable:!0})
}return t
},et=function(t){
var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||mt
},Se=Rt(0,0,0,0);function St(t){
return parseFloat(t)||0
}function Xt(t){
for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(i,r){
var s=t["border-"+r+"-width"];return i+St(s)
},0)
}function zn(t){
for(var e=["top","right","bottom","left"],n={},i=0,r=e;i<r.length;i++){
var s=r[i],l=t["padding-"+s];n[s]=St(l)
}return n
}function qn(t){
var e=t.getBBox();return Rt(0,0,e.width,e.height)
}function jn(t){
var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return Se;var i=et(t).getComputedStyle(t),r=zn(i),s=r.left+r.right,l=r.top+r.bottom,u=St(i.width),f=St(i.height);if(i.boxSizing==="border-box"&&(Math.round(u+s)!==e&&(u-=Xt(i,"left","right")+s),Math.round(f+l)!==n&&(f-=Xt(i,"top","bottom")+l)),!Yn(t)){
var g=Math.round(u+s)-e,y=Math.round(f+l)-n;Math.abs(g)!==1&&(u-=g),Math.abs(y)!==1&&(f-=y)
}return Rt(r.left,r.top,u,f)
}var Zn=function(){
return typeof SVGGraphicsElement<"u"?function(t){
return t instanceof et(t).SVGGraphicsElement
}:function(t){
return t instanceof et(t).SVGElement&&typeof t.getBBox=="function"
}
}();function Yn(t){
return t===et(t).document.documentElement
}function Qn(t){
return Nt?Zn(t)?qn(t):jn(t):Se
}function Xn(t){
var e=t.x,n=t.y,i=t.width,r=t.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,l=Object.create(s.prototype);return me(l,{x:e,y:n,width:i,height:r,top:n,right:e+i,bottom:r+n,left:e}),l
}function Rt(t,e,n,i){
return{x:t,y:e,width:n,height:i}
}var Jn=function(){
function t(e){
this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Rt(0,0,0,0),this.target=e
}return t.prototype.isActive=function(){
var e=Qn(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight
},t.prototype.broadcastRect=function(){
var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e
},t
}(),ti=function(){
function t(e,n){
var i=Xn(n);me(this,{target:e,contentRect:i})
}return t
}(),ei=function(){
function t(e,n,i){
if(this.activeObservations_=[],this.observations_=new ge,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=i
}return t.prototype.observe=function(e){
if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){
if(!(e instanceof et(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new Jn(e)),this.controller_.addObserver(this),this.controller_.refresh())
}
},t.prototype.unobserve=function(e){
if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){
if(!(e instanceof et(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)&&(n.delete(e),n.size||this.controller_.removeObserver(this))
}
},t.prototype.disconnect=function(){
this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)
},t.prototype.gatherActive=function(){
var e=this;this.clearActive(),this.observations_.forEach(function(n){
n.isActive()&&e.activeObservations_.push(n)
})
},t.prototype.broadcastActive=function(){
if(this.hasActive()){
var e=this.callbackCtx_,n=this.activeObservations_.map(function(i){
return new ti(i.target,i.broadcastRect())
});this.callback_.call(e,n,e),this.clearActive()
}
},t.prototype.clearActive=function(){
this.activeObservations_.splice(0)
},t.prototype.hasActive=function(){
return this.activeObservations_.length>0
},t
}(),be=typeof WeakMap<"u"?new WeakMap:new ge,Ee=function(){
function t(e){
if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=Wn.getInstance(),i=new ei(e,n,this);be.set(this,i)
}return t
}();["observe","unobserve","disconnect"].forEach(function(t){
Ee.prototype[t]=function(){
var e;return(e=be.get(this))[t].apply(e,arguments)
}
});var ni=function(){
return typeof mt.ResizeObserver<"u"?mt.ResizeObserver:Ee
}();const ii=t=>{
const e=(t-30)/2+3;return t<40?e:e-2
},oi=t=>t<40?14:t>47?17:16,ri=t=>t<40?24:28,si={[o.RUS]:"Войти с VK ID",[o.UKR]:"Увійти з VK ID",[o.BEL]:"Увайсці з VК ID",[o.KAZ]:"VK ID арқылы кіру",[o.UZB]:"VK ID dan kirish",[o.ENG]:"Sign in with VK ID",[o.SPA]:"Iniciar sesión con VK ID",[o.GERMAN]:"Mit VK-ID anmelden",[o.POL]:"Wejdź z VK ID",[o.FRA]:"Se connecter avec VK ID",[o.TURKEY]:"VK ID aracılığıyla gir"},ai={[o.RUS]:"Записаться с VK ID",[o.UKR]:"Записатися з VK ID",[o.BEL]:"Запісацца з VK ID",[o.KAZ]:"VK ID арқылы жазылу",[o.UZB]:"VK ID bilan yozilish",[o.ENG]:"Sign up with VK ID",[o.SPA]:"Registrarse con VK ID",[o.GERMAN]:"Mit VK ID anmelden",[o.POL]:"Zapisz się z VK ID",[o.FRA]:"Prendre RDV avec VK ID",[o.TURKEY]:"VK ID ile kaydol"},ci={[o.RUS]:"Получить с VK ID",[o.UKR]:"Отримати з VK ID",[o.BEL]:"Атрымаць з VK ID",[o.KAZ]:"VK ID арқылы алу",[o.UZB]:"VK ID bilan olish",[o.ENG]:"Get with VK ID",[o.SPA]:"Obtener con VK ID",[o.GERMAN]:"Mit VK ID erhalten",[o.POL]:"Otrzymaj z VK ID",[o.FRA]:"Obtenir avec VK ID",[o.TURKEY]:"VK ID ile al"},li={[o.RUS]:"Открыть с VK ID",[o.UKR]:"Відкрити з VK ID",[o.BEL]:"Адкрыць з VK ID",[o.KAZ]:"VK ID арқылы ашу",[o.UZB]:"VK ID bilan ochish",[o.ENG]:"Open with VK ID",[o.SPA]:"Abrir con VK ID",[o.GERMAN]:"Mit VK ID öffnen",[o.POL]:"Otwórz z VK ID",[o.FRA]:"Ouvrir avec VK ID",[o.TURKEY]:"VK ID ile aç"},di={[o.RUS]:"Рассчитать с VK ID",[o.UKR]:"Розрахувати з VK ID",[o.BEL]:"Разлічыць з VK ID",[o.KAZ]:"VK ID арқылы есептеу",[o.UZB]:"VK ID yordamida hisoblash",[o.ENG]:"Calculate with VK ID",[o.SPA]:"Calcular con VK ID",[o.GERMAN]:"Mit VK ID berechnen",[o.POL]:"Oblicz z VK ID",[o.FRA]:"Calculer avec VK ID",[o.TURKEY]:"VK ID ile hesapla"},ui={[o.RUS]:"Заказать с VK ID",[o.UKR]:"Замовити з VK ID",[o.BEL]:"Заказаць з VK ID",[o.KAZ]:"VK ID арқылы тапсырыс беру",[o.UZB]:"VK ID bilan buyurtma berish",[o.ENG]:"Order with VK ID",[o.SPA]:"Pedir con VK ID",[o.GERMAN]:"Mit VK ID bestellen",[o.POL]:"Zamów z VK ID",[o.FRA]:"Commander avec VK ID",[o.TURKEY]:"VK ID ile sipariş ver"},hi={[o.RUS]:"Оформить с VK ID",[o.UKR]:"Оформити з VK ID",[o.BEL]:"Аформіць з VK ID",[o.KAZ]:"VK ID арқылы рәсімдеу",[o.UZB]:"VK ID bilan shakllantirish",[o.ENG]:"Order with VK ID",[o.SPA]:"Pedir con VK ID",[o.GERMAN]:"Mit VK ID Bestellung aufgeben",[o.POL]:"Wypełnij z VK ID",[o.FRA]:"Commander avec VK ID",[o.TURKEY]:"VK ID ile yap"},fi={[o.RUS]:"Оставить заявку с VK ID",[o.UKR]:"Залишити запит з VK ID",[o.BEL]:"Пакінуць заяўку з VK ID",[o.KAZ]:"VK ID арқылы өтінім қалдыру",[o.UZB]:"VK ID bilan talabnoma qoldirish",[o.ENG]:"Send request with VK ID",[o.SPA]:"Enviar solicitud con VK ID",[o.GERMAN]:"Mit VK ID Anfrage stellen",[o.POL]:"Zostaw wniosek z VK ID",[o.FRA]:"Envoyer demande avec VK ID",[o.TURKEY]:"VK ID ile başvuru yap"},vi={[o.RUS]:"Участвовать с VK ID",[o.UKR]:"Брати участь з VK ID",[o.BEL]:"Удзельнічаць з VK ID",[o.KAZ]:"VK ID арқылы қатысу",[o.UZB]:"VK ID ilan ishtirok etish",[o.ENG]:"Participate with VK ID",[o.SPA]:"Participar con VK ID",[o.GERMAN]:"Mit VK ID teilnehmen",[o.POL]:"Uczestnicz z VK ID",[o.FRA]:"Participer avec VK ID",[o.TURKEY]:"VK ID ile katıl"},Jt={[E.SIGN_IN]:si,[E.SIGN_UP]:ai,[E.GET]:ci,[E.OPEN]:li,[E.CALCULATE]:di,[E.ORDER]:ui,[E.PLACE_ORDER]:hi,[E.SUBMIT_REQUEST]:fi,[E.PARTICIPATE]:vi},_i=(t,e)=>{
const n=Jt[t]||Jt[E.SIGN_IN];return n[e]||n[o.RUS]
},pi={[o.RUS]:"Продолжить",[o.UKR]:"Продовжити",[o.BEL]:"Працягнуць",[o.KAZ]:"Жалғастыру",[o.UZB]:"Davom etish",[o.ENG]:"Continue",[o.SPA]:"Continuar",[o.GERMAN]:"Fortfahren",[o.POL]:"Kontynuuj",[o.FRA]:"Continuer",[o.TURKEY]:"Devam"},gi={[o.RUS]:"Записаться",[o.UKR]:"Записатися",[o.BEL]:"Запісацца",[o.KAZ]:"Жазылу",[o.UZB]:"Yozilish",[o.ENG]:"Sign up",[o.SPA]:"Registrarse",[o.GERMAN]:"Anmelden",[o.POL]:"Zapisz się",[o.FRA]:"Prendre RDV",[o.TURKEY]:"Kaydol"},mi={[o.RUS]:"Получить",[o.UKR]:"Отримати",[o.BEL]:"Атрымаць",[o.KAZ]:"Алу",[o.UZB]:"Olish",[o.ENG]:"Get",[o.SPA]:"Obtener",[o.GERMAN]:"Erhalten",[o.POL]:"Otrzymaj",[o.FRA]:"Obtenir",[o.TURKEY]:"Al"},Si={[o.RUS]:"Открыть",[o.UKR]:"Відкрити",[o.BEL]:"Адкрыць",[o.KAZ]:"Ашу",[o.UZB]:"Ochish",[o.ENG]:"Open",[o.SPA]:"Abrir",[o.GERMAN]:"Öffnen",[o.POL]:"Otwórz",[o.FRA]:"Ouvrir",[o.TURKEY]:"Aç"},bi={[o.RUS]:"Рассчитать",[o.UKR]:"Розрахувати",[o.BEL]:"Разлічыць",[o.KAZ]:"Есептеу",[o.UZB]:"Hisoblash",[o.ENG]:"Calculate",[o.SPA]:"Calcular",[o.GERMAN]:"Berechnen",[o.POL]:"Oblicz",[o.FRA]:"Calculer",[o.TURKEY]:"Hesapla"},Ei={[o.RUS]:"Заказать",[o.UKR]:"Замовити",[o.BEL]:"Заказаць",[o.KAZ]:"Тапсырыс беру",[o.UZB]:"Buyurtma berish",[o.ENG]:"Order",[o.SPA]:"Pedir",[o.GERMAN]:"Bestellen",[o.POL]:"Zamów",[o.FRA]:"Commander",[o.TURKEY]:"Sipariş ver"},yi={[o.RUS]:"Оформить заказ",[o.UKR]:"Оформити замовлення",[o.BEL]:"Аформіць заказ",[o.KAZ]:"Тапсырысты рәсімдеу",[o.UZB]:"Buyurtmani shakllantirish",[o.ENG]:"Place order",[o.SPA]:"Hacer pedido",[o.GERMAN]:"Bestellung aufgeben",[o.POL]:"Wypełnij zamówienie",[o.FRA]:"Passer commande",[o.TURKEY]:"Siparişi tamamlar"},Ii={[o.RUS]:"Оставить заявку",[o.UKR]:"Залишити запит",[o.BEL]:"Пакінуць заяўку",[o.KAZ]:"Өтінім қалдыру",[o.UZB]:"Talabnoma qoldirish",[o.ENG]:"Send request",[o.SPA]:"Enviar solicitud",[o.GERMAN]:"Anfrage stellen",[o.POL]:"Pozostaw wniosek",[o.FRA]:"Envoyer demande",[o.TURKEY]:"Başvuru bırak"},wi={[o.RUS]:"Участвовать",[o.UKR]:"Брати участь",[o.BEL]:"Удзельнічаць",[o.KAZ]:"Қатысу",[o.UZB]:"Ishtirok etish",[o.ENG]:"Participate",[o.SPA]:"Participar",[o.GERMAN]:"Teilnehmen",[o.POL]:"Uczestnicz",[o.FRA]:"Participer",[o.TURKEY]:"Katıl"},te={[E.SIGN_IN]:pi,[E.SIGN_UP]:gi,[E.GET]:mi,[E.OPEN]:Si,[E.CALCULATE]:bi,[E.ORDER]:Ei,[E.PLACE_ORDER]:yi,[E.SUBMIT_REQUEST]:Ii,[E.PARTICIPATE]:wi},Ri=(t,e)=>{
const n=te[t]||te[E.SIGN_IN];return n[e]||n[o.RUS]
},ki="VK ID",Oi=`
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="logoBg" fill-rule="evenodd" clip-rule="evenodd" d="M4.2653 4.2653C3 5.5306 3 7.56707 3 11.64V12.36C3 16.4329 3 18.4694 4.2653 19.7347C5.5306 21 7.56706 21 11.64 21H12.36C16.4329 21 18.4694 21 19.7347 19.7347C21 18.4694 21 16.4329 21 12.36V11.64C21 7.56707 21 5.5306 19.7347 4.2653C18.4694 3 16.4329 3 12.36 3H11.64C7.56706 3 5.5306 3 4.2653 4.2653Z" fill="white"/>
    <path id="logoIcon" d="M12.6095 16C8.55576 16 6.09636 13.1823 6 8.5H8.05309C8.1171 11.9395 9.67903 13.397 10.8764 13.6967V8.5H12.8439V11.4683C13.9988 11.3401 15.2076 9.98991 15.614 8.5H17.5505C17.2406 10.3321 15.9246 11.6823 14.9948 12.2392C15.9253 12.6895 17.4225 13.8682 18 16H15.8714C15.4219 14.5749 14.321 13.4712 12.8446 13.3213V16H12.6095Z" fill="#0077FF"/>
  </svg>
`,Ti=`
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 22C13.4477 22 13 21.5523 13 21C13 20.4477 13.4477 20 14 20C17.3137 20 20 17.3137 20 14C20 10.6863 17.3137 8 14 8C10.6863 8 8 10.6863 8 14C8 14.6472 8.10214 15.2793 8.3002 15.8802C8.4731 16.4047 8.18807 16.9701 7.66355 17.143C7.13902 17.3159 6.57365 17.0308 6.40074 16.5063C6.13628 15.7041 6 14.8606 6 14C6 9.58172 9.58172 6 14 6C18.4183 6 22 9.58172 22 14C22 18.4183 18.4183 22 14 22Z" fill="currentColor"/>
  </svg>
`,Ai=({width:t,height:e,iframeHeight:n,borderRadius:i,login:r,skin:s,scheme:l,contentId:u,lang:f,renderOAuthList:g,providers:y,setStatsButtonType:S})=>a=>{
let _=0,R=0,v=0,b=0;const C=Ri(u,f),c=ki,h=_i(u,f),p=8,m=ii(e),k=oi(e),O=ri(e),I=document.createElement("div"),w=document.createElement("button");setTimeout(()=>{
w.classList.add(`VkIdWebSdk__button_animation_${a}`)
},100),w.classList.add(`VkIdWebSdk__button_${a}`),w.classList.add(`VkIdWebSdk__button_reset_${a}`),r&&(w.onclick=r);const B=document.createElement("span");B.classList.add(`VkIdWebSdk__button_in_${a}`);const D=document.createElement("span");D.classList.add(`VkIdWebSdk__button_content_${a}`);const $=document.createElement("span");$.classList.add(`VkIdWebSdk__button_logo_${a}`),$.innerHTML=Oi;const N=document.createElement("span");N.classList.add(`VkIdWebSdk__button_text_${a}`);const j=document.createElement("span");j.innerText=C;const L=document.createElement("span");L.innerText=h;const U=document.createElement("span");U.innerText=c;const H=document.createElement("span");H.classList.add(`VkIdWebSdk__button_spinner_${a}`),H.innerHTML=Ti;const G=document.createElement("div");G.classList.add(`VkIdWebSdk__oauthList_container_${a}`);const Lt=nt=>nt+2*p+2*m+2*O,Ut=()=>{
let nt=0,Pt=!1;const Ie=()=>{
y!=null&&y.length&&!I.contains(G)&&(I.appendChild(G),!Pt&&g({lang:f,scheme:l,container:G,oauthList:y,styles:{borderRadius:i,height:e}}),Pt=!0)
},xt=()=>{
const $t=D.contains(N),we=N.contains(U),Re=N.contains(L),at=I.clientWidth;$t&&at<_&&(I.contains(G)&&I.removeChild(G),S("icon"),w.setAttribute("style",`width: ${e}px;`),N.remove(),H.remove()),!$t&&at>=_&&(w.removeAttribute("style"),D.appendChild(N),D.appendChild(H)),!we&&at<R&&(N.style.width=`${v}px`,L.dataset.active="",U.dataset.active="true",setTimeout(()=>{
L.remove(),N.appendChild(U)
},nt)),!Re&&at>=R&&(N.style.width=`${b}px`,U.dataset.active="",L.dataset.active="true",setTimeout(()=>{
U.remove(),N.appendChild(L)
},nt),Ie()),S("default")
};new ni(De(xt,500)).observe(I);const Bt=document.getElementById(a);Bt&&(Bt.appendChild(I),I.appendChild(w),w.appendChild(B),B.appendChild(D),D.appendChild($),D.appendChild(N),D.appendChild(H),N.appendChild(j),N.appendChild(L),N.appendChild(U),v=U.clientWidth,b=L.clientWidth,_=Lt(j.clientWidth),R=Lt(b),j.remove(),L.remove(),U.remove(),xt(),nt=250)
};return document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ut):setTimeout(Ut,0),`
<div id="${a}" data-test-id="oneTap" data-scheme="${l}" data-skin="${s}">
  <style>
    :root #${a} {
      --onetap--button_background: #0077FF;
      --onetap--button_border: none;
      --onetap--background_hover: #0071F2;
      --onetap--text_and_spinner: #FFF;
      --onetap--logo_icon: #0077FF;
      --onetap--logo_background: #FFF;
    }

    :root #${a}[data-scheme=light][data-skin=primary] {
      --onetap--background_hover: #0071F2;
      --onetap--background_active: #0069E1;
    }

    :root #${a}[data-scheme=dark][data-skin=primary] {
      --onetap--background_hover: #097EFF;
      --onetap--background_active: #1385FF;
    }

    :root #${a}[data-scheme=light][data-skin=secondary] {
      --onetap--button_background: rgba(255, 255, 255, 0.12);
      --onetap--button_border: 1px solid rgba(0, 0, 0, 0.12);
      --onetap--background_hover: #F5F5F7;
      --onetap--background_active: #EBECEF;
      --onetap--text_and_spinner: #000;
      --onetap--logo_icon: #FFF;
      --onetap--logo_background: #0077FF;
    }

    :root #${a}[data-scheme=dark][data-skin=secondary] {
      --onetap--button_background: transparent;
      --onetap--button_border: 1px solid rgba(255, 255, 255, 0.12);
      --onetap--background_hover: rgba(255, 255, 255, 0.06);
      --onetap--background_active: rgba(255, 255, 255, 0.1);
      --onetap--logo_icon: #FFF;
      --onetap--logo_background: #0077FF;
    }

    #${a} {
      position: relative;
      width: ${t?`${t}px`:"100%"};
      min-width: ${e}px;
    }

    #${a}[data-state=loaded] {
      height: ${n}px;
    }

    #${a} iframe {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      pointer-events: none;
      border: none;
      color-scheme: auto;
    }

    #${a} .VkIdWebSdk__button_reset_${a} {
      border: none;
      margin: 0;
      padding: 0;
      width: auto;
      overflow: visible;
      background: transparent;
      color: inherit;
      font: inherit;
      line-height: normal;
      -webkit-font-smoothing: inherit;
      -moz-osx-font-smoothing: inherit;
      -webkit-appearance: none;
    }

    #${a} .VkIdWebSdk__button_${a} {
      padding: ${m}px;
      height: ${e}px;
      width: 100%;
      border-radius: ${i}px;
      box-sizing: border-box;
      overflow: hidden;
    }

    #${a} .VkIdWebSdk__button_animation_${a} {
      transition: .2s ease;
    }

    #${a} .VkIdWebSdk__button_${a}:hover {
      cursor: pointer;
    }

    #${a} .VkIdWebSdk__button_${a} {
      background: var(--onetap--button_background);
      border: var(--onetap--button_border);
    }

    #${a} .VkIdWebSdk__button_${a}:focus,
    #${a} .VkIdWebSdk__button_${a}:hover {
      background: var(--onetap--background_hover);
    }

    #${a} .VkIdWebSdk__button_${a}:active {
      background: var(--onetap--background_active);
    }

    #${a} .VkIdWebSdk__button_in_${a} {
      display: inline-block;
      width: 100%;
      height: 100%;
      min-width: max-content;
      transition: width 0.5s;
    }

    #${a} .VkIdWebSdk__button_content_${a} {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
    }

    #${a} .VkIdWebSdk__button_logo_${a},
    #${a} .VkIdWebSdk__button_spinner_${a},
    #${a} .VkIdWebSdk__button_logo_${a} > svg,
    #${a} .VkIdWebSdk__button_spinner_${a} > svg {
      width: ${O}px;
      height: ${O}px;
    }

    #${a} .VkIdWebSdk__button_spinner_${a} > svg {
      position: absolute;
      right: ${m}px;
      animation: vkIdSdkButtonSpinner 0.7s linear infinite;
    }

    #${a} .VkIdWebSdk__button_text_${a} {
      font-family: -apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif;
      font-weight: 500;
      font-size: ${k}px;
      transition: .2s;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    #${a} .VkIdWebSdk__button_text_${a} > span {
      opacity: 0;
      display: inline-block;
      padding: 0 ${p}px;
      transition: .5s;
    }

    #${a} .VkIdWebSdk__button_text_${a} > span[data-active=true] {
      opacity: 1;
    }

    #${a} .VkIdWebSdk__button_text_${a},
    #${a} .VkIdWebSdk__button_spinner_${a} {
      color: var(--onetap--text_and_spinner);
    }

    .VkIdWebSdk__oauthList_container_${a} {
      margin-top: 16px;
    }

    #${a} #logoBg {
      fill: var(--onetap--logo_background);
    }

    #${a} #logoIcon {
      fill: var(--onetap--logo_icon);
    }

    #${a}[data-state=not_loaded] .VkIdWebSdk__button_in_${a} {
      width: 0;
    }

    #${a}[data-state=not_loaded] .VkIdWebSdk__button_spinner_${a} {
      transition: .2s;
      opacity: 0;
      pointer-events: none;
      width: 0;
    }

    #${a}[data-state=loaded] .VkIdWebSdk__oauthList_container_${a} {
      display: none;
    }

    #${a}[data-state=loaded] iframe {
      position: initial;
      opacity: 100;
      pointer-events: all;
    }

    #${a}[data-state=loaded] .VkIdWebSdk__button_${a} {
      display: none;
    }

    @keyframes vkIdSdkButtonSpinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  </style>
  <iframe width="100%" height="100%" />
</div>
  `
};function Ci(t,e,n,i){
var r=arguments.length,s=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,i);else for(var u=t.length-1;u>=0;u--)(l=t[u])&&(s=(r<3?l(s):r>3?l(e,n,s):l(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s
}const Ot={width:0,height:44,borderRadius:8},Di=12;class st extends q{
constructor(){
super();d(this,"analytics");d(this,"vkidAppName","button_one_tap_auth");d(this,"statsBtnType");d(this,"fastAuthDisabled");d(this,"setStatsButtonType",n=>{
this.statsBtnType||(this.statsBtnType=n,this.fastAuthDisabled&&this.statsBtnType&&this.analytics.sendOneTapButtonNoUserShow(this.statsBtnType))
});d(this,"sendSuccessLoginEvent",n=>{
this.events.emit(M.LOGIN_SUCCESS,n)
});this.analytics=new xn(st.config)
}onBridgeMessageHandler(n){
var i,r;switch(n.handler){
case M.SHOW_FULL_AUTH:{const s=n.params,l={};s.screen&&(l.screen=s.screen),s.sdk_oauth&&(l.provider=s.sdk_oauth,l.statsFlowSource=F.MULTIBRANDING),this.openFullAuth(l);break}case M.NOT_AUTHORIZED:{this.analytics.sendNoSessionFound(),this.setState(W.NOT_LOADED),clearTimeout(this.timeoutTimer),(r=(i=this.elements)==null?void 0:i.iframe)==null||r.remove();break}case M.AUTHENTICATION_INFO:{this.events.emit(M.AUTHENTICATION_INFO,n.params);break}default:{super.onBridgeMessageHandler(n);break}
}
}onErrorHandler(n){
this.analytics.sendFrameLoadingFailed(),this.analytics.sendOneTapButtonNoUserShow(this.statsBtnType),super.onErrorHandler(n)
}openFullAuth(n){
const i={statsFlowSource:F.BUTTON_ONE_TAP,...n,uniqueSessionId:this.id,lang:this.lang,scheme:this.scheme};st.auth.login(i).then(this.sendSuccessLoginEvent).catch(r=>{
this.events.emit(V.ERROR,{code:x.AuthError,text:r.error})
})
}login(n){
this.config.get().mode===z.Redirect?this.analytics.sendOneTapButtonNoUserTap(this.statsBtnType).finally(()=>{
this.openFullAuth(n)
}):(this.analytics.sendOneTapButtonNoUserTap(this.statsBtnType),this.openFullAuth(n))
}renderOAuthList(n){
if(!n.oauthList.length)return;new wt().on(_t.LOGIN_SUCCESS,this.sendSuccessLoginEvent).render({...n,flowSource:P.NOWHERE,uniqueSessionId:this.id})
}render(n){
var s,l,u,f;this.lang=(n==null?void 0:n.lang)||o.RUS,this.scheme=(n==null?void 0:n.scheme)||vt.LIGHT,this.fastAuthDisabled=n.fastAuthEnabled===!1;const i=(n.oauthList||[]).filter(g=>g!==T.VK),r={style_height:((s=n.styles)==null?void 0:s.height)||Ot.height,style_border_radius:pe((l=n.styles)==null?void 0:l.borderRadius)?Ot.borderRadius:(u=n.styles)==null?void 0:u.borderRadius,show_alternative_login:n!=null&&n.showAlternativeLogin?1:0,button_skin:n.skin||gt.Primary,content_id:(n==null?void 0:n.contentId)||E.SIGN_IN,scheme:this.scheme,lang_id:this.lang,providers:i.join(","),uuid:this.id};return this.analytics.setUniqueSessionId(this.id),this.templateRenderer=Ai({width:((f=n.styles)==null?void 0:f.width)||Ot.width,iframeHeight:r.show_alternative_login?r.style_height*2+Di:r.style_height,height:r.style_height,borderRadius:r.style_border_radius,login:this.login.bind(this),skin:r.button_skin,scheme:r.scheme,lang:r.lang_id,contentId:r.content_id,renderOAuthList:this.renderOAuthList.bind(this),providers:i,setStatsButtonType:this.setStatsButtonType.bind(this)}),this.analytics.sendScreenProceed({scheme:this.scheme,lang:this.lang,skin:r.button_skin,contentId:r.content_id}),this.fastAuthDisabled&&(r.fastAuthDisabled=!0),super.render({container:n.container,...r})
}
}Ci([It({styles:[rn]})],st.prototype,"render",null);const Kt=new de;pt.config=Kt;const ye=new pt;q.config=Kt;q.auth=ye;const{origin:Ni}=window.location,Vi=new URL(Ae(),Ni).toString();Kt.init({app:window.gon.vk_id.client_id,redirectUrl:Vi,responseMode:ot.Callback,source:Ct.LOWCODE,scope:"email"});const ee=document.getElementById("vkid-button-auth"),Ki=t=>{
const e=document.createElement("form");e.action=Ce(),e.method="POST";const n={authenticity_token:window.gon.token,"user_vk_id_form[access_token]":t.access_token};Object.entries(n).forEach(([i,r])=>{
const s=document.createElement("input");s.type="hidden",s.name=i,s.value=r,e.append(s)
}),document.body.append(e),e.submit()
},ne=t=>{
console.error(t)
};ee&&new st().render({container:ee,showAlternativeLogin:!1,skin:gt.Secondary,styles:{borderRadius:6,height:40}}).on(M.LOGIN_SUCCESS,e=>{
const{code:n,device_id:i}=e;ye.exchangeCode(n,i).then(Ki).catch(ne)
}).on(V.ERROR,ne);
