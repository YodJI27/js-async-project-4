const a=(()=>{
const g=(r,t)=>Object.prototype.hasOwnProperty.call(r,t);let u;(function(r){
r[r.GROUP=1]="GROUP",r[r.CAT=2]="CAT",r[r.SYMBOL=3]="SYMBOL",r[r.OR=4]="OR",r[r.STAR=5]="STAR",r[r.LITERAL=6]="LITERAL",r[r.SLASH=7]="SLASH",r[r.DOT=8]="DOT"
})(u||(u={}));const y=typeof window<"u",A="-._~!$&'()*+,;=:@".split("").map(r=>r.charCodeAt(0)),R=[["a","z"],["A","Z"],["0","9"]].map(r=>r.map(t=>t.charCodeAt(0))),h={CJS:{define(r){
module&&(module.exports=r)
},isSupported(){
return typeof module=="object"
}},AMD:{define(r){
define&&define([],function(){
return r
})
},isSupported(){
return typeof define=="function"&&!!define.amd
}},UMD:{define(r){
if(h.AMD.isSupported())h.AMD.define(r);else if(h.CJS.isSupported())try{
h.CJS.define(r)
}catch(t){
if(t.name!=="TypeError")throw t
}
},isSupported(){
return h.AMD.isSupported()||h.CJS.isSupported()
}},ESM:{define(){},isSupported(){
return!0
}},NIL:{define(){},isSupported(){
return!0
}},DTS:{define(r){
h.ESM.define(r)
},isSupported(){
return h.ESM.isSupported()
}}};class S extends Error{
constructor(...t){
super(`Route missing required keys: ${t.join(", ")}`),this.keys=t,Object.setPrototypeOf(this,Object.getPrototypeOf(this)),this.name=S.name
}
}const O=["anchor","trailing_slash","subdomain","host","port","protocol","script_name"];class k{
constructor(){
this.configuration={prefix:"",default_url_options:{},special_options_key:"_options",serializer:this.default_serializer.bind(this)}
}default_serializer(t,i){
if(this.is_nullable(t))return"";if(!i&&!this.is_object(t))throw new Error("Url parameters should be a javascript hash");i=i||"";const e=[];if(this.is_array(t))for(const n of t)e.push(this.default_serializer(n,i+"[]"));else if(this.is_object(t))for(let n in t){
if(!g(t,n))continue;let s=t[n];this.is_nullable(s)&&i&&(s=""),this.is_not_nullable(s)&&(i&&(n=i+"["+n+"]"),e.push(this.default_serializer(s,n)))
}else this.is_not_nullable(t)&&e.push(encodeURIComponent(i)+"="+encodeURIComponent(""+t));return e.join("&")
}serialize(t){
return this.configuration.serializer(t)
}extract_options(t,i){
const e=i[i.length-1];return i.length>t&&e===0||this.is_object(e)&&!this.looks_like_serialized_model(e)?(this.is_object(e)&&delete e[this.configuration.special_options_key],{args:i.slice(0,i.length-1),options:e}):{args:i,options:{}}
}looks_like_serialized_model(t){
return this.is_object(t)&&!(this.configuration.special_options_key in t)&&("id"in t||"to_param"in t||"toParam"in t)
}path_identifier(t){
const i=this.unwrap_path_identifier(t);return this.is_nullable(i)?"":""+i
}unwrap_path_identifier(t){
let i=t;return this.is_object(t)?("to_param"in t?i=t.to_param:"toParam"in t?i=t.toParam:"id"in t?i=t.id:i=t,this.is_callable(i)?i.call(t):i):t
}partition_parameters(t,i,e,n){
let{args:s,options:_}=this.extract_options(t.length,n);if(s.length>t.length)throw new Error("Too many parameters provided for path");let l=s.length>i.length;const c={...this.configuration.default_url_options};for(const o in _){
const d=_[o];g(_,o)&&(l=!0,t.includes(o)&&(c[o]=d))
}_={...this.configuration.default_url_options,...e,..._};const m={};let p={};for(const o in _){
if(!g(_,o))continue;const d=_[o];if(o==="params")if(this.is_object(d))p={...p,...d};else throw new Error("params value should always be an object");else this.is_reserved_option(o)?m[o]=d:!this.is_nullable(d)&&(d!==e[o]||i.includes(o))&&(p[o]=d)
}const f=l?t:i;let w=0;for(const o of f)if(w<s.length){
const d=s[w];g(c,o)||(p[o]=d,++w)
}return{keyword_parameters:m,query_parameters:p}
}build_route(t,i,e,n,s,_){
const{keyword_parameters:l,query_parameters:c}=this.partition_parameters(t,i,e,_);let{trailing_slash:m,anchor:p,script_name:f}=l;const w=i.filter(v=>!g(c,v)||this.is_nullable(c[v]));if(w.length)throw new S(...w);let o=this.get_prefix()+this.visit(n,c);m&&(o=o.replace(/(.*?)[/]?$/,"$1/"));const d=this.serialize(c);if(d.length&&(o+="?"+d),p&&(o+="#"+p),f){
const v=f.length-1;f[v]=="/"&&o[0]=="/"&&(f=f.slice(0,v)),o=f+o
}return s&&(o=this.route_url(l)+o),o
}visit(t,i,e=!1){
switch(t[0]){
case u.GROUP:return this.visit(t[1],i,!0);case u.CAT:return this.visit_cat(t,i,e);case u.SYMBOL:return this.visit_symbol(t,i,e);case u.STAR:return this.visit_globbing(t[1],i,!0);case u.LITERAL:case u.SLASH:case u.DOT:return t[1];default:throw new Error("Unknown Rails node type")
}
}is_not_nullable(t){
return!this.is_nullable(t)
}is_nullable(t){
return t==null
}visit_cat([t,i,e],n,s){
const _=this.visit(i,n,s);let l=this.visit(e,n,s);return s&&(this.is_optional_node(i[0])&&!_||this.is_optional_node(e[0])&&!l)?"":(_[_.length-1]==="/"&&l[0]==="/"&&(l=l.substring(1)),_+l)
}visit_symbol([t,i],e,n){
const s=this.path_identifier(e[i]);if(delete e[i],s.length)return this.encode_segment(s);if(n)return"";throw new S(i)
}encode_segment(t){
return t.match(/^[a-zA-Z0-9-]$/)?t:(t.match(/./gu)||[]).map(i=>{
const e=i.charCodeAt(0);return R.find(n=>e>=n[0]&&e<=n[1])||A.includes(e)?i:encodeURIComponent(i)
}).join("")
}is_optional_node(t){
return[u.STAR,u.SYMBOL,u.CAT].includes(t)
}build_path_spec(t,i=!1){
let e;switch(t[0]){
case u.GROUP:return`(${this.build_path_spec(t[1])})`;case u.CAT:return this.build_path_spec(t[1])+this.build_path_spec(t[2]);case u.STAR:return this.build_path_spec(t[1],!0);case u.SYMBOL:return e=t[1],i?(e.startsWith("*")?"":"*")+e:":"+e;case u.SLASH:case u.DOT:case u.LITERAL:return t[1];default:throw new Error("Unknown Rails node type")
}
}visit_globbing(t,i,e){
const n=t[1];let s=i[n];if(delete i[n],this.is_nullable(s))return this.visit(t,i,e);this.is_array(s)&&(s=s.join("/"));const _=this.path_identifier(s);return encodeURI(_)
}get_prefix(){
const t=this.configuration.prefix;return t.match("/$")?t.substring(0,t.length-1):t
}route(t,i,e=!1){
const n=[],s=[],_={};for(const[c,{r:m,d:p}]of Object.entries(t))s.push(c),m&&n.push(c),this.is_not_nullable(p)&&(_[c]=p);const l=(...c)=>this.build_route(s,n,_,i,e,c);return l.requiredParams=()=>n,l.toString=()=>this.build_path_spec(i),l
}route_url(t){
const i=t.host||this.current_host();if(!i)return"";const e=t.subdomain?t.subdomain+".":"",n=t.protocol||this.current_protocol();let s=t.port||(t.host?void 0:this.current_port());return s=s?":"+s:"",n+"://"+e+i+s
}current_host(){
var t;return y&&((t=window==null?void 0:window.location)===null||t===void 0?void 0:t.hostname)||""
}current_protocol(){
var t,i;return y&&((i=(t=window==null?void 0:window.location)===null||t===void 0?void 0:t.protocol)===null||i===void 0?void 0:i.replace(/:$/,""))||"http"
}current_port(){
var t;return y&&((t=window==null?void 0:window.location)===null||t===void 0?void 0:t.port)||""
}is_object(t){
return typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"
}is_array(t){
return t instanceof Array
}is_callable(t){
return typeof t=="function"&&!!t.call
}is_reserved_option(t){
return O.includes(t)
}configure(t){
return t.prefix&&console.warn("JsRoutes configuration prefix option is deprecated in favor of default_url_options.script_name."),this.configuration={...this.configuration,...t},this.configuration
}config(){
return{...this.configuration}
}is_module_supported(t){
return h[t].isSupported()
}ensure_module_supported(t){
if(!this.is_module_supported(t))throw new Error(`${t} is not supported by runtime`)
}define_module(t,i){
return this.ensure_module_supported(t),h[t].define(i),i
}
}const b=new k,L={r(r,t,i){
return b.route(r,t,i)
}};return b.define_module("ESM",{...L,configure:r=>b.configure(r),config:()=>b.config(),serialize:r=>b.serialize(r)})
})();a.configure;a.config;a.serialize;const C=a.r({assistant_thread_id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"ai"],[2,[7,"/"],[2,[6,"assistant_threads"],[2,[7,"/"],[2,[3,"assistant_thread_id"],[2,[7,"/"],[2,[6,"messages"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]),E=a.r({instance_id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"instances"],[2,[7,"/"],[2,[3,"instance_id"],[2,[7,"/"],[2,[6,"results"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]),z=a.r({instance_id:{r:!0},id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"instances"],[2,[7,"/"],[2,[3,"instance_id"],[2,[7,"/"],[2,[6,"runs"],[2,[7,"/"],[2,[3,"id"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]),M=a.r({instance_id:{r:!0},run_id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"instances"],[2,[7,"/"],[2,[3,"instance_id"],[2,[7,"/"],[2,[6,"runs"],[2,[7,"/"],[2,[3,"run_id"],[2,[7,"/"],[2,[6,"code_reviews"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]),U=a.r({format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"leads"],[1,[2,[8,"."],[3,"format"]]]]]]]),q=a.r({format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"user"],[1,[2,[8,"."],[3,"format"]]]]]]]),P=a.r({format:{}},[2,[7,"/"],[2,[6,"auth_vk_id"],[2,[7,"/"],[2,[6,"callback"],[1,[2,[8,"."],[3,"format"]]]]]]]),x=a.r({format:{}},[2,[7,"/"],[2,[6,"auth_yandex_id"],[2,[7,"/"],[2,[6,"callback"],[1,[2,[8,"."],[3,"format"]]]]]]]),j=a.r({id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"code_reviews"],[2,[7,"/"],[2,[3,"id"],[1,[2,[8,"."],[3,"format"]]]]]]]),D=a.r({format:{}},[2,[7,"/"],[2,[6,"code_reviews"],[1,[2,[8,"."],[3,"format"]]]]]),I=a.r({id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"instances"],[2,[7,"/"],[2,[3,"id"],[2,[7,"/"],[2,[6,"heartbeat"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]),$=a.r({id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"instances"],[2,[7,"/"],[2,[3,"id"],[1,[2,[8,"."],[3,"format"]]]]]]]),T=a.r({format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"user"],[2,[7,"/"],[2,[6,"last_viewed_notification"],[1,[2,[8,"."],[3,"format"]]]]]]]]]),B=a.r({format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"user"],[2,[7,"/"],[2,[6,"lead_modal_shown"],[1,[2,[8,"."],[3,"format"]]]]]]]]]),J=a.r({format:{}},[2,[7,"/"],[2,[6,"management"],[2,[7,"/"],[2,[6,"assistant_thread_messages"],[1,[2,[8,"."],[3,"format"]]]]]]]),Y=a.r({instance_id:{r:!0},id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"instances"],[2,[7,"/"],[2,[3,"instance_id"],[2,[7,"/"],[2,[6,"runs"],[2,[7,"/"],[2,[3,"id"],[2,[7,"/"],[2,[6,"restart"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]),G=a.r({},[7,"/"]),H=a.r({id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api"],[2,[7,"/"],[2,[6,"instances"],[2,[7,"/"],[2,[3,"id"],[2,[7,"/"],[2,[6,"solution"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]),Z=a.r({id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api_internal"],[2,[7,"/"],[2,[6,"assignments"],[2,[7,"/"],[2,[3,"id"],[2,[7,"/"],[2,[6,"solution"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]),W=a.r({format:{}},[2,[7,"/"],[2,[6,"payments"],[2,[7,"/"],[2,[6,"success"],[1,[2,[8,"."],[3,"format"]]]]]]]),F=a.r({team_id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"teams"],[2,[7,"/"],[2,[3,"team_id"],[2,[7,"/"],[2,[6,"orders"],[1,[2,[8,"."],[3,"format"]]]]]]]]]),K=a.r({format:{}},[2,[7,"/"],[2,[6,"auth_yandex_id"],[2,[7,"/"],[2,[6,"token"],[1,[2,[8,"."],[3,"format"]]]]]]]),Q=a.r({question_id:{r:!0},id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api_internal"],[2,[7,"/"],[2,[6,"questions"],[2,[7,"/"],[2,[3,"question_id"],[2,[7,"/"],[2,[6,"answers"],[2,[7,"/"],[2,[3,"id"],[2,[7,"/"],[2,[6,"unvote"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]),V=a.r({user_id:{r:!0}},[2,[7,"/"],[2,[6,"u"],[2,[7,"/"],[3,"user_id"]]]]),X=a.r({question_id:{r:!0},id:{r:!0},format:{}},[2,[7,"/"],[2,[6,"api_internal"],[2,[7,"/"],[2,[6,"questions"],[2,[7,"/"],[2,[3,"question_id"],[2,[7,"/"],[2,[6,"answers"],[2,[7,"/"],[2,[3,"id"],[2,[7,"/"],[2,[6,"vote"],[1,[2,[8,"."],[3,"format"]]]]]]]]]]]]]]]);export{C as a,H as b,q as c,z as d,M as e,j as f,E as g,I as h,$ as i,D as j,W as k,U as l,B as m,T as n,Q as o,G as p,P as q,Y as r,Z as s,F as t,V as u,X as v,K as w,x,J as y};
