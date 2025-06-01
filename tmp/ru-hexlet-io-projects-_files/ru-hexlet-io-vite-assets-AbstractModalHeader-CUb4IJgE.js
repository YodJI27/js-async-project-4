import{r as s,j as m,R as de}from"./index-f3ZQ7e7G.js";import{R as Re}from"./index-OAUcaBCa.js";import{u as y}from"./useEventCallback-B1KjAgOW.js";import{d as Be,r as _e,T as Pe,E as We,a as Ie}from"./Transition-3MOmxWZM.js";import{c as be}from"./ThemeProvider-BCC4u8C0.js";import{P as U}from"./index-BfM5NbKg.js";const P=!!(typeof window<"u"&&window.document&&window.document.createElement);var J=!1,Q=!1;try{
var X={get passive(){
return J=!0
},get once(){
return Q=J=!0
}};P&&(window.addEventListener("test",X,X),window.removeEventListener("test",X,!0))
}catch{}function $e(e,t,n,r){
if(r&&typeof r!="boolean"&&!Q){
var o=r.once,i=r.capture,a=n;!Q&&o&&(a=n.__once||function u(c){
this.removeEventListener(t,u,i),n.call(this,c)
},n.__once=a),e.addEventListener(t,a,J?r:i)
}e.addEventListener(t,n,r)
}function ee(e){
return e&&e.ownerDocument||document
}function Ge(e,t,n,r){
var o=r&&typeof r!="boolean"?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)
}function He(e){
const t=s.useRef(e);return s.useEffect(()=>{
t.current=e
},[e]),t
}function Ke(e){
const t=He(e);return s.useCallback(function(...n){
return t.current&&t.current(...n)
},[t])
}const fe=e=>!e||typeof e=="function"?e:t=>{
e.current=t
};function Ve(e,t){
const n=fe(e),r=fe(t);return o=>{
n&&n(o),r&&r(o)
}
}function Ue(e,t){
return s.useMemo(()=>Ve(e,t),[e,t])
}function Xe(e){
var t=ee(e);return t&&t.defaultView||window
}function Ye(e,t){
return Xe(e).getComputedStyle(e,t)
}var qe=/([A-Z])/g;function ze(e){
return e.replace(qe,"-$1").toLowerCase()
}var Ze=/^ms-/;function B(e){
return ze(e).replace(Ze,"-ms-")
}var Je=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function Qe(e){
return!!(e&&Je.test(e))
}function x(e,t){
var n="",r="";if(typeof t=="string")return e.style.getPropertyValue(B(t))||Ye(e).getPropertyValue(B(t));Object.keys(t).forEach(function(o){
var i=t[o];!i&&i!==0?e.style.removeProperty(B(o)):Qe(o)?r+=o+"("+i+") ":n+=B(o)+": "+i+";"
}),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n
}function _(e,t,n,r){
return $e(e,t,n,r),function(){
Ge(e,t,n,r)
}
}function et(e,t,n,r){
if(r===void 0&&(r=!0),e){
var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)
}
}function tt(e){
var t=x(e,"transitionDuration")||"",n=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*n
}function nt(e,t,n){
n===void 0&&(n=5);var r=!1,o=setTimeout(function(){
r||et(e,"transitionend",!0)
},t+n),i=_(e,"transitionend",function(){
r=!0
},{once:!0});return function(){
clearTimeout(o),i()
}
}function rt(e,t,n,r){
n==null&&(n=tt(e)||0);var o=nt(e,n,r),i=_(e,"transitionend",t);return function(){
o(),i()
}
}function Y(e){
e===void 0&&(e=ee());try{
var t=e.activeElement;return!t||!t.nodeName?null:t
}catch{
return e.body
}
}function me(e,t){
if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return e===t||!!(e.compareDocumentPosition(t)&16)
}function ot(){
const e=s.useRef(!0),t=s.useRef(()=>e.current);return s.useEffect(()=>(e.current=!0,()=>{
e.current=!1
}),[]),t.current
}function st(e){
const t=s.useRef(e);return t.current=e,t
}function it(e){
const t=st(e);s.useEffect(()=>()=>t.current(),[])
}function at(e){
const t=s.useRef(null);return s.useEffect(()=>{
t.current=e
}),t.current
}const ut="data-rr-ui-";function ct(e){
return`${ut}${e}`
}function lt(e=document){
const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)
}const he=ct("modal-open");class te{
constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:r=!1}={}){
this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=t
}getScrollbarWidth(){
return lt(this.ownerDocument)
}getElement(){
return(this.ownerDocument||document).body
}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){
const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",o=this.getElement();t.style={overflow:o.style.overflow,[r]:o.style[r]},t.scrollBarWidth&&(n[r]=`${parseInt(x(o,r)||"0",10)+t.scrollBarWidth}px`),o.setAttribute(he,""),x(o,n)
}reset(){
[...this.modals].forEach(t=>this.remove(t))
}removeContainerStyle(t){
const n=this.getElement();n.removeAttribute(he),Object.assign(n.style,t.style)
}add(t){
let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n
}remove(t){
const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))
}isTopModal(t){
return!!this.modals.length&&this.modals[this.modals.length-1]===t
}
}const ye=s.createContext(P?window:void 0);ye.Provider;function ne(){
return s.useContext(ye)
}const q=(e,t)=>P?e==null?(t||ee()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function dt(e,t){
const n=ne(),[r,o]=s.useState(()=>q(e,n==null?void 0:n.document));if(!r){
const i=q(e);i&&o(i)
}return s.useEffect(()=>{},[t,r]),s.useEffect(()=>{
const i=q(e);i!==r&&o(i)
},[e,r]),r
}const Ee=e=>!e||typeof e=="function"?e:t=>{
e.current=t
};function ft(e,t){
const n=Ee(e),r=Ee(t);return o=>{
n&&n(o),r&&r(o)
}
}function re(e,t){
return s.useMemo(()=>ft(e,t),[e,t])
}const mt=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",ht=typeof document<"u",ge=ht||mt?s.useLayoutEffect:s.useEffect;function Et(e){
return e.code==="Escape"||e.keyCode===27
}function gt(){
const e=s.version.split(".");return{major:+e[0],minor:+e[1],patch:+e[2]}
}function W(e){
if(!e||typeof e=="function")return null;const{major:t}=gt();return t>=19?e.props.ref:e.ref
}function vt({children:e,in:t,onExited:n,mountOnEnter:r,unmountOnExit:o}){
const i=s.useRef(null),a=s.useRef(t),u=y(n);s.useEffect(()=>{
t?a.current=!0:u(i.current)
},[t,u]);const c=re(i,W(e)),l=s.cloneElement(e,{ref:c});return t?l:o||!a.current&&r?null:l
}const pt=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function Rt(e,t){
if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){
if(t.indexOf(r)>=0)continue;n[r]=e[r]
}return n
}function bt(e){
let{onEnter:t,onEntering:n,onEntered:r,onExit:o,onExiting:i,onExited:a,addEndListener:u,children:c}=e,l=Rt(e,pt);const h=s.useRef(null),E=re(h,W(c)),g=p=>b=>{
p&&h.current&&p(h.current,b)
},T=s.useCallback(g(t),[t]),v=s.useCallback(g(n),[n]),L=s.useCallback(g(r),[r]),j=s.useCallback(g(o),[o]),N=s.useCallback(g(i),[i]),D=s.useCallback(g(a),[a]),C=s.useCallback(g(u),[u]);return Object.assign({},l,{nodeRef:h},t&&{onEnter:T},n&&{onEntering:v},r&&{onEntered:L},o&&{onExit:j},i&&{onExiting:N},a&&{onExited:D},u&&{addEndListener:C},{children:typeof c=="function"?(p,b)=>c(p,Object.assign({},b,{ref:E})):s.cloneElement(c,{ref:E})})
}const yt=["component"];function xt(e,t){
if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){
if(t.indexOf(r)>=0)continue;n[r]=e[r]
}return n
}const Tt=s.forwardRef((e,t)=>{
let{component:n}=e,r=xt(e,yt);const o=bt(r);return m.jsx(n,Object.assign({ref:t},o))
});function Ct({in:e,onTransition:t}){
const n=s.useRef(null),r=s.useRef(!0),o=y(t);return ge(()=>{
if(!n.current)return;let i=!1;return o({in:e,element:n.current,initial:r.current,isStale:()=>i}),()=>{
i=!0
}
},[e,o]),ge(()=>(r.current=!1,()=>{
r.current=!0
}),[]),n
}function wt({children:e,in:t,onExited:n,onEntered:r,transition:o}){
const[i,a]=s.useState(!t);t&&i&&a(!1);const u=Ct({in:!!t,onTransition:l=>{
const h=()=>{
l.isStale()||(l.in?r==null||r(l.element,l.initial):(a(!0),n==null||n(l.element)))
};Promise.resolve(o(l)).then(h,E=>{
throw l.in||a(!0),E
})
}}),c=re(u,W(e));return i&&!t?null:s.cloneElement(e,{ref:c})
}function ve(e,t,n){
return e?m.jsx(Tt,Object.assign({},n,{component:e})):t?m.jsx(wt,Object.assign({},n,{transition:t})):m.jsx(vt,Object.assign({},n))
}const Ot=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function kt(e,t){
if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){
if(t.indexOf(r)>=0)continue;n[r]=e[r]
}return n
}let z;function Mt(e){
return z||(z=new te({ownerDocument:e==null?void 0:e.document})),z
}function Lt(e){
const t=ne(),n=e||Mt(t),r=s.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:s.useCallback(o=>{
r.current.dialog=o
},[]),setBackdropRef:s.useCallback(o=>{
r.current.backdrop=o
},[])})
}const xe=s.forwardRef((e,t)=>{
let{show:n=!1,role:r="dialog",className:o,style:i,children:a,backdrop:u=!0,keyboard:c=!0,onBackdropClick:l,onEscapeKeyDown:h,transition:E,runTransition:g,backdropTransition:T,runBackdropTransition:v,autoFocus:L=!0,enforceFocus:j=!0,restoreFocus:N=!0,restoreFocusOptions:D,renderDialog:C,renderBackdrop:p=d=>m.jsx("div",Object.assign({},d)),manager:b,container:R,onShow:w,onHide:se=()=>{},onExit:Ce,onExited:ie,onExiting:we,onEnter:Oe,onEntering:ke,onEntered:Me}=e,Le=kt(e,Ot);const O=ne(),S=dt(R),f=Lt(b),je=ot(),Ne=at(n),[I,ae]=s.useState(!n),A=s.useRef(null);s.useImperativeHandle(t,()=>f,[f]),P&&!Ne&&n&&(A.current=Y(O==null?void 0:O.document)),n&&I&&ae(!1);const ue=y(()=>{
if(f.add(),H.current=_(document,"keydown",Ae),G.current=_(document,"focus",()=>setTimeout(De),!0),w&&w(),L){
var d,le;const V=Y((d=(le=f.dialog)==null?void 0:le.ownerDocument)!=null?d:O==null?void 0:O.document);f.dialog&&V&&!me(f.dialog,V)&&(A.current=V,f.dialog.focus())
}
}),$=y(()=>{
if(f.remove(),H.current==null||H.current(),G.current==null||G.current(),N){
var d;(d=A.current)==null||d.focus==null||d.focus(D),A.current=null
}
});s.useEffect(()=>{
!n||!S||ue()
},[n,S,ue]),s.useEffect(()=>{
I&&$()
},[I,$]),it(()=>{
$()
});const De=y(()=>{
if(!j||!je()||!f.isTopModal())return;const d=Y(O==null?void 0:O.document);f.dialog&&d&&!me(f.dialog,d)&&f.dialog.focus()
}),Se=y(d=>{
d.target===d.currentTarget&&(l==null||l(d),u===!0&&se())
}),Ae=y(d=>{
c&&Et(d)&&f.isTopModal()&&(h==null||h(d),d.defaultPrevented||se())
}),G=s.useRef(),H=s.useRef(),Fe=(...d)=>{
ae(!0),ie==null||ie(...d)
};if(!S)return null;const ce=Object.assign({role:r,ref:f.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},Le,{style:i,className:o,tabIndex:-1});let K=C?C(ce):m.jsx("div",Object.assign({},ce,{children:s.cloneElement(a,{role:"document"})}));K=ve(E,g,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:Ce,onExiting:we,onExited:Fe,onEnter:Oe,onEntering:ke,onEntered:Me,children:K});let F=null;return u&&(F=p({ref:f.setBackdropRef,onClick:Se}),F=ve(T,v,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:F})),m.jsx(m.Fragment,{children:Re.createPortal(m.jsxs(m.Fragment,{children:[F,K]}),S)})
});xe.displayName="Modal";const Ut=Object.assign(xe,{Manager:te});var jt=Function.prototype.bind.call(Function.prototype.call,[].slice);function k(e,t){
return jt(e.querySelectorAll(t))
}const M={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Nt extends te{
adjustAndStore(t,n,r){
const o=n.style[t];n.dataset[t]=o,x(n,{[t]:`${parseFloat(x(n,t))+r}px`})
}restore(t,n){
const r=n.dataset[t];r!==void 0&&(delete n.dataset[t],x(n,{[t]:r}))
}setContainerStyle(t){
super.setContainerStyle(t);const n=this.getElement();if(Be(n,"modal-open"),!t.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";k(n,M.FIXED_CONTENT).forEach(i=>this.adjustAndStore(r,i,t.scrollBarWidth)),k(n,M.STICKY_CONTENT).forEach(i=>this.adjustAndStore(o,i,-t.scrollBarWidth)),k(n,M.NAVBAR_TOGGLER).forEach(i=>this.adjustAndStore(o,i,t.scrollBarWidth))
}removeContainerStyle(t){
super.removeContainerStyle(t);const n=this.getElement();_e(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";k(n,M.FIXED_CONTENT).forEach(i=>this.restore(r,i)),k(n,M.STICKY_CONTENT).forEach(i=>this.restore(o,i)),k(n,M.NAVBAR_TOGGLER).forEach(i=>this.restore(o,i))
}
}let Z;function Xt(e){
return Z||(Z=new Nt(e)),Z
}function pe(e,t){
const n=x(e,t)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r
}function Dt(e,t){
const n=pe(e,"transitionDuration"),r=pe(e,"transitionDelay"),o=rt(e,i=>{
i.target===e&&(o(),t(i))
},n+r)
}function St(e){
e.offsetHeight
}function At(e){
return e&&"setState"in e?Re.findDOMNode(e):e??null
}const Te=de.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:o,onExited:i,addEndListener:a,children:u,childRef:c,...l},h)=>{
const E=s.useRef(null),g=Ue(E,c),T=R=>{
g(At(R))
},v=R=>w=>{
R&&E.current&&R(E.current,w)
},L=s.useCallback(v(e),[e]),j=s.useCallback(v(t),[t]),N=s.useCallback(v(n),[n]),D=s.useCallback(v(r),[r]),C=s.useCallback(v(o),[o]),p=s.useCallback(v(i),[i]),b=s.useCallback(v(a),[a]);return m.jsx(Pe,{ref:h,...l,onEnter:L,onEntered:N,onEntering:j,onExit:D,onExited:p,onExiting:C,addEndListener:b,nodeRef:E,children:typeof u=="function"?(R,w)=>u(R,{...w,ref:T}):de.cloneElement(u,{ref:T})})
});Te.displayName="TransitionWrapper";const Ft={[Ie]:"show",[We]:"show"},Bt=s.forwardRef(({className:e,children:t,transitionClasses:n={},onEnter:r,...o},i)=>{
const a={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...o},u=s.useCallback((c,l)=>{
St(c),r==null||r(c,l)
},[r]);return m.jsx(Te,{ref:i,addEndListener:Dt,...a,onEnter:u,childRef:W(t),children:(c,l)=>s.cloneElement(t,{...l,className:be("fade",e,t.props.className,Ft[c],n[c])})})
});Bt.displayName="Fade";const _t=s.createContext({onHide(){}}),Pt={"aria-label":U.string,onClick:U.func,variant:U.oneOf(["white"])},oe=s.forwardRef(({className:e,variant:t,"aria-label":n="Close",...r},o)=>m.jsx("button",{ref:o,type:"button",className:be("btn-close",t&&`btn-close-${t}`,e),"aria-label":n,...r}));oe.displayName="CloseButton";oe.propTypes=Pt;const Wt=s.forwardRef(({closeLabel:e="Close",closeVariant:t,closeButton:n=!1,onHide:r,children:o,...i},a)=>{
const u=s.useContext(_t),c=Ke(()=>{
u==null||u.onHide(),r==null||r()
});return m.jsxs("div",{ref:a,...i,children:[o,n&&m.jsx(oe,{"aria-label":e,variant:t,onClick:c})]})
});Wt.displayName="AbstractModalHeader";export{Wt as A,Ut as B,Bt as F,_t as M,Te as T,St as a,Ke as b,P as c,Xt as d,$e as e,rt as f,W as g,Nt as h,ee as o,Ge as r,x as s,Dt as t,Ue as u};
