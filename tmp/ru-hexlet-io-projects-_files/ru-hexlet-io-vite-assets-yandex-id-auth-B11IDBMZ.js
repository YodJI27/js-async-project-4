import{a as d}from"./js.cookie-Cz0CWeBA.js";import{w as r,x as u}from"./routes-CXA-Fm45.js";function g(t){
if(!t||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e===null||e===Object.prototype||Object.getPrototypeOf(e)===null?Object.prototype.toString.call(t)==="[object Object]":!1
}const s="_hide_yandex_id_widget",p=2,l=t=>{
const e="denied",o="not_available";if(t===e){
const n=new Date;n.setHours(n.getHours()+p),d.set(s,!0,{expires:n}),d.remove("_ru_yandex_autofill");return
}const i=[e,o];if(g(t)&&t.code,i.includes(t.code))return;const a=`Yandex ID error: ${JSON.stringify(t)}`;console.error(a),Sentry.captureMessage(a)
},b=t=>{
const e=document.createElement("form");e.action=u(),e.method="POST";const o={"user_yandex_id_form[access_token]":t.access_token,authenticity_token:window.gon.token};Object.entries(o).forEach(([i,a])=>{
const n=document.createElement("input");n.type="hidden",n.name=i,n.value=a,e.append(n)
}),document.body.append(e),e.submit()
},m=()=>{
const{origin:t}=document.location,e=new URL(r(),t).toString(),o="yandex-id-button-container",i=document.getElementById(o)?"button":"widget",a={button:{view:"button",parentId:o,buttonSize:"s",buttonView:window.gon.theme==="dark"?"main":"additional",buttonTheme:window.gon.theme,buttonBorderRadius:"6",buttonIcon:"ya"}};d.get(s)&&i==="widget"||window.YaAuthSuggest.init({client_id:window.gon.yandex_id.client_id,response_type:"token",redirect_uri:e},t,a[i]).then(({handler:c})=>c()).then(b).catch(l)
};window.addEventListener("load",m);
