import{a as l}from"./js.cookie-Cz0CWeBA.js";window.addEventListener("load",()=>{
const{carrotquest:t}=window,{current_user:a,carrotquest:{user_hash:_},fired_events:o={}}=window.gon;if(!t){
Sentry.captureMessage("Failed to load Carrotquest");return
}const n={signed_in:"$authorized",signed_out:"$logout"},u=r=>{
Object.keys(n).filter(e=>Object.keys(r).includes(e)).forEach(e=>t.track(n[e]))
},p=r=>{
const{can_use_paid_features:e,email:s,current_company:c,current_program:h}=r,i=l.get("_ym_uid"),d=l.get("_rid_anm_id");return[{op:"update_or_create",key:"Платный доступ",value:e},s?{op:"update_or_create",key:"$email",value:s}:null,c?{op:"update_or_create",key:"Компания",value:c}:{op:"delete",key:"Компания",value:null},h?{op:"update_or_create",key:"Текущая программа",value:r.current_program}:{op:"delete",key:"Текущая программа",value:null},i?{op:"update_or_create",key:"_ym_uid",value:i}:null,d?{op:"update_or_create",key:"_rid_anm_id",value:d}:null].filter(v=>v)
},y=r=>{
const e=window.location.search.includes("chat=1");r.current_company&&!e&&typeof t.removeChat=="function"&&t.removeChat()
},m=p(a);a.is_guest?u(o):(t.auth(a.id.toString(),_),u(o),y(a)),t.identify(m)
});
