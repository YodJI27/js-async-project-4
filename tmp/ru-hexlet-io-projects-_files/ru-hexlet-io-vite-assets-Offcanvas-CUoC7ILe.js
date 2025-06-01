import{u as h,c as v}from"./ThemeProvider-BCC4u8C0.js";import{r as c,j as i}from"./index-f3ZQ7e7G.js";import{T as ee,g as ae,t as te,A as ne,b as se,M as oe,B as re,F as fe,h as ce,d as le}from"./AbstractModalHeader-CUb4IJgE.js";import{a as b,b as ie,E as ue}from"./Transition-3MOmxWZM.js";import{d as de}from"./divWithClassName-DfDkDzue.js";const me=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",ge=typeof document<"u",pe=ge||me?c.useLayoutEffect:c.useEffect,x=new WeakMap,k=(e,a)=>{
if(!e||!a)return;const n=x.get(a)||new Map;x.set(a,n);let r=n.get(e);return r||(r=a.matchMedia(e),r.refCount=0,n.set(r.media,r)),r
};function ve(e,a=typeof window>"u"?void 0:window){
const n=k(e,a),[r,l]=c.useState(()=>n?n.matches:!1);return pe(()=>{
let t=k(e,a);if(!t)return l(!1);let u=x.get(a);const s=()=>{
l(t.matches)
};return t.refCount++,t.addListener(s),s(),()=>{
t.removeListener(s),t.refCount--,t.refCount<=0&&(u==null||u.delete(t.media)),t=void 0
}
},[e]),r
}function he(e){
const a=Object.keys(e);function n(s,o){
return s===o?o:s?`${s} and ${o}`:o
}function r(s){
return a[Math.min(a.indexOf(s)+1,a.length-1)]
}function l(s){
const o=r(s);let f=e[o];return typeof f=="number"?f=`${f-.2}px`:f=`calc(${f} - 0.2px)`,`(max-width: ${f})`
}function t(s){
let o=e[s];return typeof o=="number"&&(o=`${o}px`),`(min-width: ${o})`
}function u(s,o,f){
let m;typeof s=="object"?(m=s,f=o,o=!0):(o=o||!0,m={[s]:o});let O=c.useMemo(()=>Object.entries(m).reduce((g,[E,p])=>((p==="up"||p===!0)&&(g=n(g,t(E))),(p==="down"||p===!0)&&(g=n(g,l(E))),g),""),[JSON.stringify(m)]);return ve(O,f)
}return u
}const Ee=he({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),H=c.forwardRef(({className:e,bsPrefix:a,as:n="div",...r},l)=>(a=h(a,"offcanvas-body"),i.jsx(n,{ref:l,className:v(e,a),...r})));H.displayName="OffcanvasBody";const Oe={[b]:"show",[ue]:"show"},S=c.forwardRef(({bsPrefix:e,className:a,children:n,in:r=!1,mountOnEnter:l=!1,unmountOnExit:t=!1,appear:u=!1,...s},o)=>(e=h(e,"offcanvas"),i.jsx(ee,{ref:o,addEndListener:te,in:r,mountOnEnter:l,unmountOnExit:t,appear:u,...s,childRef:ae(n),children:(f,m)=>c.cloneElement(n,{...m,className:v(a,n.props.className,(f===b||f===ie)&&`${e}-toggling`,Oe[f])})})));S.displayName="OffcanvasToggling";const D=c.forwardRef(({bsPrefix:e,className:a,closeLabel:n="Close",closeButton:r=!1,...l},t)=>(e=h(e,"offcanvas-header"),i.jsx(ne,{ref:t,...l,className:v(a,e),closeLabel:n,closeButton:r})));D.displayName="OffcanvasHeader";const ye=de("h5"),F=c.forwardRef(({className:e,bsPrefix:a,as:n=ye,...r},l)=>(a=h(a,"offcanvas-title"),i.jsx(n,{ref:l,className:v(e,a),...r})));F.displayName="OffcanvasTitle";function Me(e){
return i.jsx(S,{...e})
}function Ne(e){
return i.jsx(fe,{...e})
}const L=c.forwardRef(({bsPrefix:e,className:a,children:n,"aria-labelledby":r,placement:l="start",responsive:t,show:u=!1,backdrop:s=!0,keyboard:o=!0,scroll:f=!1,onEscapeKeyDown:m,onShow:O,onHide:g,container:E,autoFocus:p=!0,enforceFocus:I=!0,restoreFocus:A=!0,restoreFocusOptions:Q,onEntered:G,onExit:J,onExiting:K,onEnter:j,onEntering:X,onExited:w,backdropClassName:B,manager:R,renderStaticNode:z=!1,...U},Y)=>{
const y=c.useRef();e=h(e,"offcanvas");const[$,Z]=c.useState(!1),M=se(g),T=Ee(t||"xs","up");c.useEffect(()=>{
Z(t?u&&!T:u)
},[u,t,T]);const _=c.useMemo(()=>({onHide:M}),[M]);function W(){
return R||(f?(y.current||(y.current=new ce({handleContainerOverflow:!1})),y.current):le())
}const V=(d,...N)=>{
d&&(d.style.visibility="visible"),j==null||j(d,...N)
},q=(d,...N)=>{
d&&(d.style.visibility=""),w==null||w(...N)
},P=c.useCallback(d=>i.jsx("div",{...d,className:v(`${e}-backdrop`,B)}),[B,e]),C=d=>i.jsx("div",{...d,...U,className:v(a,t?`${e}-${t}`:e,`${e}-${l}`),"aria-labelledby":r,children:n});return i.jsxs(i.Fragment,{children:[!$&&(t||z)&&C({}),i.jsx(oe.Provider,{value:_,children:i.jsx(re,{show:$,ref:Y,backdrop:s,container:E,keyboard:o,autoFocus:p,enforceFocus:I&&!f,restoreFocus:A,restoreFocusOptions:Q,onEscapeKeyDown:m,onShow:O,onHide:M,onEnter:V,onEntering:X,onEntered:G,onExit:J,onExiting:K,onExited:q,manager:W(),transition:Me,backdropTransition:Ne,renderBackdrop:P,renderDialog:C})})]})
});L.displayName="Offcanvas";const $e=Object.assign(L,{Body:H,Header:D,Title:F});export{$e as O};
