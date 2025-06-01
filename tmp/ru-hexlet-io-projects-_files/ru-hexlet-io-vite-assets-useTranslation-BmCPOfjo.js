import{r as f}from"./index-f3ZQ7e7G.js";import{g as j,a as F}from"./i18nInstance-DBIXdvxg.js";const M=(e,s,a,n)=>{
var t,d,h,w;const o=[a,{code:s,...n||{}}];if((d=(t=e==null?void 0:e.services)==null?void 0:t.logger)!=null&&d.forward)return e.services.logger.forward(o,"warn","react-i18next::",!0);N(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),(w=(h=e==null?void 0:e.services)==null?void 0:h.logger)!=null&&w.warn?e.services.logger.warn(...o):console!=null&&console.warn&&console.warn(...o)
},L={},E=(e,s,a,n)=>{
N(a)&&L[a]||(N(a)&&(L[a]=new Date),M(e,s,a,n))
},k=(e,s)=>()=>{
if(e.isInitialized)s();else{
const a=()=>{
setTimeout(()=>{
e.off("initialized",a)
},0),s()
};e.on("initialized",a)
}
},S=(e,s,a)=>{
e.loadNamespaces(s,k(e,a))
},A=(e,s,a,n)=>{
if(N(a)&&(a=[a]),e.options.preload&&e.options.preload.indexOf(s)>-1)return S(e,a,n);a.forEach(o=>{
e.options.ns.indexOf(o)<0&&e.options.ns.push(o)
}),e.loadLanguages(s,k(e,n))
},_=(e,s,a={})=>!s.languages||!s.languages.length?(E(s,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:s.languages}),!0):s.hasLoadedNamespace(e,{lng:a.lng,precheck:(n,o)=>{
var t;if(((t=a.bindI18n)==null?void 0:t.indexOf("languageChanging"))>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!o(n.isLanguageChangingTo,e))return!1
}}),q=e=>e.displayName||e.name||(N(e)&&e.length>0?e:"Unknown"),N=e=>typeof e=="string",G=e=>typeof e=="object"&&e!==null,$=f.createContext();class D{
constructor(){
this.usedNamespaces={}
}addUsedNamespaces(s){
s.forEach(a=>{
this.usedNamespaces[a]||(this.usedNamespaces[a]=!0)
})
}getUsedNamespaces(){
return Object.keys(this.usedNamespaces)
}
}const J=(e,s)=>{
const a=f.useRef();return f.useEffect(()=>{
a.current=e
},[e,s]),a.current
},P=(e,s,a,n)=>e.getFixedT(s,a,n),W=(e,s,a,n)=>f.useCallback(P(e,s,a,n),[e,s,a,n]),B=(e,s={})=>{
var O,R,v,z;const{i18n:a}=s,{i18n:n,defaultNS:o}=f.useContext($)||{},t=a||n||j();if(t&&!t.reportNamespaces&&(t.reportNamespaces=new D),!t){
E(t,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const i=(u,l)=>N(l)?l:G(l)&&N(l.defaultValue)?l.defaultValue:Array.isArray(u)?u[u.length-1]:u,c=[i,{},!1];return c.t=i,c.i18n={},c.ready=!1,c
}(O=t.options.react)!=null&&O.wait&&E(t,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const d={...F(),...t.options.react,...s},{useSuspense:h,keyPrefix:w}=d;let r=o||((R=t.options)==null?void 0:R.defaultNS);r=N(r)?[r]:r||["translation"],(z=(v=t.reportNamespaces).addUsedNamespaces)==null||z.call(v,r);const g=(t.isInitialized||t.initializedStoreOnce)&&r.every(i=>_(i,t,d)),U=W(t,s.lng||null,d.nsMode==="fallback"?r:r[0],w),b=()=>U,x=()=>P(t,s.lng||null,d.nsMode==="fallback"?r:r[0],w),[C,p]=f.useState(b);let y=r.join();s.lng&&(y=`${s.lng}${y}`);const I=J(y),m=f.useRef(!0);f.useEffect(()=>{
const{bindI18n:i,bindI18nStore:c}=d;m.current=!0,!g&&!h&&(s.lng?A(t,s.lng,r,()=>{
m.current&&p(x)
}):S(t,r,()=>{
m.current&&p(x)
})),g&&I&&I!==y&&m.current&&p(x);const u=()=>{
m.current&&p(x)
};return i&&(t==null||t.on(i,u)),c&&(t==null||t.store.on(c,u)),()=>{
m.current=!1,t&&(i==null||i.split(" ").forEach(l=>t.off(l,u))),c&&t&&c.split(" ").forEach(l=>t.store.off(l,u))
}
},[t,y]),f.useEffect(()=>{
m.current&&g&&p(b)
},[t,w,g]);const T=[C,t,g];if(T.t=C,T.i18n=t,T.ready=g,g||!g&&!h)return T;throw new Promise(i=>{
s.lng?A(t,s.lng,r,()=>i()):S(t,r,()=>i())
})
};export{$ as I,M as a,G as b,q as g,N as i,B as u,E as w};
