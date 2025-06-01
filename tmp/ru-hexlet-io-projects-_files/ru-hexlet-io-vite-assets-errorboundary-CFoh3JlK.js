import{r as h,j as et,R as y}from"./index-f3ZQ7e7G.js";import{u as bn}from"./useTranslation-BmCPOfjo.js";import{u as vn,c as xn}from"./ThemeProvider-BCC4u8C0.js";import{r as Cn}from"./index-OAUcaBCa.js";const Pe=h.forwardRef(({bsPrefix:t,fluid:e=!1,as:n="div",className:i,...r},o)=>{
const s=vn(t,"container"),a=typeof e=="string"?`-${e}`:"-fluid";return et.jsx(n,{ref:o,...r,className:xn(i,e?`${s}${a}`:s)})
});Pe.displayName="Container";function Bi(){
const{t}=bn();return et.jsx(Pe,{className:"my-5 py-5 d-flex h-100",children:et.jsxs("div",{className:"m-auto",children:[et.jsx("h1",{children:t("error_boundary.header")}),et.jsx("p",{children:t("error_boundary.body")})]})})
}function Me(t){
var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=Me(t[e]))&&(i&&(i+=" "),i+=n);else for(e in t)t[e]&&(i&&(i+=" "),i+=e);return i
}function B(){
for(var t,e,n=0,i="";n<arguments.length;)(t=arguments[n++])&&(e=Me(t))&&(i&&(i+=" "),i+=e);return i
}let kn={data:""},Tn=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||kn,In=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Dn=/\/\*[^]*?\*\/|  +/g,ie=/\n+/g,F=(t,e)=>{
let n="",i="",r="";for(let o in t){
let s=t[o];o[0]=="@"?o[1]=="i"?n=o+" "+s+";":i+=o[1]=="f"?F(s,o):o+"{"+F(s,o[1]=="k"?"":e)+"}":typeof s=="object"?i+=F(s,e?e.replace(/([^,])+/g,a=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,a):a?a+" "+c:c)):o):s!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=F.p?F.p(o,s):o+":"+s+";")
}return n+(e&&r?e+"{"+r+"}":r)+i
},O={},$e=t=>{
if(typeof t=="object"){
let e="";for(let n in t)e+=n+$e(t[n]);return e
}return t
},wn=(t,e,n,i,r)=>{
let o=$e(t),s=O[o]||(O[o]=(c=>{
let u=0,l=11;for(;u<c.length;)l=101*l+c.charCodeAt(u++)>>>0;return"go"+l
})(o));if(!O[s]){
let c=o!==t?t:(u=>{
let l,f,p=[{}];for(;l=In.exec(u.replace(Dn,""));)l[4]?p.shift():l[3]?(f=l[3].replace(ie," ").trim(),p.unshift(p[0][f]=p[0][f]||{})):p[0][l[1]]=l[2].replace(ie," ").trim();return p[0]
})(t);O[s]=F(r?{["@keyframes "+s]:c}:c,n?"":"."+s)
}let a=n&&O.g?O.g:null;return n&&(O.g=O[s]),((c,u,l,f)=>{
f?u.data=u.data.replace(f,c):u.data.indexOf(c)===-1&&(u.data=l?c+u.data:u.data+c)
})(O[s],e,i,a),s
},Nn=(t,e,n)=>t.reduce((i,r,o)=>{
let s=e[o];if(s&&s.call){
let a=s(n),c=a&&a.props&&a.props.className||/^go/.test(a)&&a;s=c?"."+c:a&&typeof a=="object"?a.props?"":F(a,""):a===!1?"":a
}return i+r+(s??"")
},"");function qt(t){
let e=this||{},n=t.call?t(e.p):t;return wn(n.unshift?n.raw?Nn(n,[].slice.call(arguments,1),e.p):n.reduce((i,r)=>Object.assign(i,r&&r.call?r(e.p):r),{}):n,Tn(e.target),e.g,e.o,e.k)
}qt.bind({g:1});qt.bind({k:1});function Rn(t,e){
for(var n=0;n<e.length;n++){
var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)
}
}function je(t,e,n){
return e&&Rn(t.prototype,e),t
}function E(){
return E=Object.assign||function(t){
for(var e=1;e<arguments.length;e++){
var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])
}return t
},E.apply(this,arguments)
}function Fe(t,e){
t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e
}function ot(t,e){
if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n
}function oe(t){
if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t
}var se=function(){
return""
},Ue=y.createContext({enqueueSnackbar:se,closeSnackbar:se}),j={downXs:"@media (max-width:599.95px)",upSm:"@media (min-width:600px)"},ae=function(e){
return e.charAt(0).toUpperCase()+e.slice(1)
},Yt=function(e){
return""+ae(e.vertical)+ae(e.horizontal)
},ft=function(e){
return!!e||e===0
},dt="unmounted",H="exited",V="entering",Z="entered",ce="exiting",Kt=function(t){
Fe(e,t);function e(i){
var r;r=t.call(this,i)||this;var o=i.appear,s;return r.appearStatus=null,i.in?o?(s=H,r.appearStatus=V):s=Z:i.unmountOnExit||i.mountOnEnter?s=dt:s=H,r.state={status:s},r.nextCallback=null,r
}e.getDerivedStateFromProps=function(r,o){
var s=r.in;return s&&o.status===dt?{status:H}:null
};var n=e.prototype;return n.componentDidMount=function(){
this.updateStatus(!0,this.appearStatus)
},n.componentDidUpdate=function(r){
var o=null;if(r!==this.props){
var s=this.state.status;this.props.in?s!==V&&s!==Z&&(o=V):(s===V||s===Z)&&(o=ce)
}this.updateStatus(!1,o)
},n.componentWillUnmount=function(){
this.cancelNextCallback()
},n.getTimeouts=function(){
var r=this.props.timeout,o=r,s=r;return r!=null&&typeof r!="number"&&typeof r!="string"&&(s=r.exit,o=r.enter),{exit:s,enter:o}
},n.updateStatus=function(r,o){
r===void 0&&(r=!1),o!==null?(this.cancelNextCallback(),o===V?this.performEnter(r):this.performExit()):this.props.unmountOnExit&&this.state.status===H&&this.setState({status:dt})
},n.performEnter=function(r){
var o=this,s=this.props.enter,a=r,c=this.getTimeouts();if(!r&&!s){
this.safeSetState({status:Z},function(){
o.props.onEntered&&o.props.onEntered(o.node,a)
});return
}this.props.onEnter&&this.props.onEnter(this.node,a),this.safeSetState({status:V},function(){
o.props.onEntering&&o.props.onEntering(o.node,a),o.onTransitionEnd(c.enter,function(){
o.safeSetState({status:Z},function(){
o.props.onEntered&&o.props.onEntered(o.node,a)
})
})
})
},n.performExit=function(){
var r=this,o=this.props.exit,s=this.getTimeouts();if(!o){
this.safeSetState({status:H},function(){
r.props.onExited&&r.props.onExited(r.node)
});return
}this.props.onExit&&this.props.onExit(this.node),this.safeSetState({status:ce},function(){
r.props.onExiting&&r.props.onExiting(r.node),r.onTransitionEnd(s.exit,function(){
r.safeSetState({status:H},function(){
r.props.onExited&&r.props.onExited(r.node)
})
})
})
},n.cancelNextCallback=function(){
this.nextCallback!==null&&this.nextCallback.cancel&&(this.nextCallback.cancel(),this.nextCallback=null)
},n.safeSetState=function(r,o){
o=this.setNextCallback(o),this.setState(r,o)
},n.setNextCallback=function(r){
var o=this,s=!0;return this.nextCallback=function(){
s&&(s=!1,o.nextCallback=null,r())
},this.nextCallback.cancel=function(){
s=!1
},this.nextCallback
},n.onTransitionEnd=function(r,o){
this.setNextCallback(o);var s=r==null&&!this.props.addEndListener;if(!this.node||s){
setTimeout(this.nextCallback,0);return
}this.props.addEndListener&&this.props.addEndListener(this.node,this.nextCallback),r!=null&&setTimeout(this.nextCallback,r)
},n.render=function(){
var r=this.state.status;if(r===dt)return null;var o=this.props,s=o.children,a=ot(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return s(r,a)
},je(e,[{key:"node",get:function(){
var r,o=(r=this.props.nodeRef)===null||r===void 0?void 0:r.current;if(!o)throw new Error("notistack - Custom snackbar is not refForwarding");return o
}}]),e
}(y.Component);function W(){}Kt.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:W,onEntering:W,onEntered:W,onExit:W,onExiting:W,onExited:W};function ue(t,e){
typeof t=="function"?t(e):t&&(t.current=e)
}function Ut(t,e){
return h.useMemo(function(){
return t==null&&e==null?null:function(n){
ue(t,n),ue(e,n)
}
},[t,e])
}function bt(t){
var e=t.timeout,n=t.style,i=n===void 0?{}:n,r=t.mode;return{duration:typeof e=="object"?e[r]||0:e,easing:i.transitionTimingFunction,delay:i.transitionDelay}
}var Bt={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Be=function(e){
e.scrollTop=e.scrollTop
},le=function(e){
return Math.round(e)+"ms"
};function G(t,e){
t===void 0&&(t=["all"]);var n=e||{},i=n.duration,r=i===void 0?300:i,o=n.easing,s=o===void 0?Bt.easeInOut:o,a=n.delay,c=a===void 0?0:a,u=Array.isArray(t)?t:[t];return u.map(function(l){
var f=typeof r=="string"?r:le(r),p=typeof c=="string"?c:le(c);return l+" "+f+" "+s+" "+p
}).join(",")
}function On(t){
return t&&t.ownerDocument||document
}function He(t){
var e=On(t);return e.defaultView||window
}function An(t,e){
e===void 0&&(e=166);var n;function i(){
for(var r=this,o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];var c=function(){
t.apply(r,s)
};clearTimeout(n),n=setTimeout(c,e)
}return i.clear=function(){
clearTimeout(n)
},i
}function Ln(t,e){
var n=e.getBoundingClientRect(),i=He(e),r;if(e.fakeTransform)r=e.fakeTransform;else{
var o=i.getComputedStyle(e);r=o.getPropertyValue("-webkit-transform")||o.getPropertyValue("transform")
}var s=0,a=0;if(r&&r!=="none"&&typeof r=="string"){
var c=r.split("(")[1].split(")")[0].split(",");s=parseInt(c[4],10),a=parseInt(c[5],10)
}switch(t){
case"left":return"translateX("+(i.innerWidth+s-n.left)+"px)";case"right":return"translateX(-"+(n.left+n.width-s)+"px)";case"up":return"translateY("+(i.innerHeight+a-n.top)+"px)";default:return"translateY(-"+(n.top+n.height-a)+"px)"
}
}function pt(t,e){
if(e){
var n=Ln(t,e);n&&(e.style.webkitTransform=n,e.style.transform=n)
}
}var Ve=h.forwardRef(function(t,e){
var n=t.children,i=t.direction,r=i===void 0?"down":i,o=t.in,s=t.style,a=t.timeout,c=a===void 0?0:a,u=t.onEnter,l=t.onEntered,f=t.onExit,p=t.onExited,_=ot(t,["children","direction","in","style","timeout","onEnter","onEntered","onExit","onExited"]),d=h.useRef(null),m=Ut(n.ref,d),g=Ut(m,e),v=function(S,w){
pt(r,S),Be(S),u&&u(S,w)
},x=function(S){
var w=(s==null?void 0:s.transitionTimingFunction)||Bt.easeOut,N=bt({timeout:c,mode:"enter",style:E({},s,{transitionTimingFunction:w})});S.style.webkitTransition=G("-webkit-transform",N),S.style.transition=G("transform",N),S.style.webkitTransform="none",S.style.transform="none"
},b=function(S){
var w=(s==null?void 0:s.transitionTimingFunction)||Bt.sharp,N=bt({timeout:c,mode:"exit",style:E({},s,{transitionTimingFunction:w})});S.style.webkitTransition=G("-webkit-transform",N),S.style.transition=G("transform",N),pt(r,S),f&&f(S)
},D=function(S){
S.style.webkitTransition="",S.style.transition="",p&&p(S)
},C=h.useCallback(function(){
d.current&&pt(r,d.current)
},[r]);return h.useEffect(function(){
if(!(o||r==="down"||r==="right")){
var I=An(function(){
d.current&&pt(r,d.current)
}),S=He(d.current);return S.addEventListener("resize",I),function(){
I.clear(),S.removeEventListener("resize",I)
}
}
},[r,o]),h.useEffect(function(){
o||C()
},[o,C]),h.createElement(Kt,Object.assign({appear:!0,nodeRef:d,onEnter:v,onEntered:l,onEntering:x,onExit:b,onExited:D,in:o,timeout:c},_),function(I,S){
return h.cloneElement(n,E({ref:g,style:E({visibility:I==="exited"&&!o?"hidden":void 0},s,{},n.props.style)},S))
})
});Ve.displayName="Slide";var Ct=function(e){
return y.createElement("svg",Object.assign({viewBox:"0 0 24 24",focusable:"false",style:{fontSize:20,marginInlineEnd:8,userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0}},e))
},Pn=function(){
return y.createElement(Ct,null,y.createElement("path",{d:`M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41
        10.59L10 14.17L17.59 6.58L19 8L10 17Z`}))
},Mn=function(){
return y.createElement(Ct,null,y.createElement("path",{d:"M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"}))
},$n=function(){
return y.createElement(Ct,null,y.createElement("path",{d:`M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,
        6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,
        13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z`}))
},jn=function(){
return y.createElement(Ct,null,y.createElement("path",{d:`M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,
        0 22,12A10,10 0 0,0 12,2Z`}))
},Fn={default:void 0,success:y.createElement(Pn,null),warning:y.createElement(Mn,null),error:y.createElement($n,null),info:y.createElement(jn,null)},U={maxSnack:3,persist:!1,hideIconVariant:!1,disableWindowBlurListener:!1,variant:"default",autoHideDuration:5e3,iconVariant:Fn,anchorOrigin:{vertical:"bottom",horizontal:"left"},TransitionComponent:Ve,transitionDuration:{enter:225,exit:195}},Un=function(e,n){
var i=function(o){
return typeof o=="number"||o===null
};return i(e)?e:i(n)?n:U.autoHideDuration
},Bn=function(e,n){
var i=function(o,s){
return s.some(function(a){
return typeof o===a
})
};return i(e,["string","number"])?e:i(e,["object"])?E({},U.transitionDuration,{},i(n,["object"])&&n,{},e):i(n,["string","number"])?n:i(n,["object"])?E({},U.transitionDuration,{},n):U.transitionDuration
},Hn=function(e,n){
return function(i,r){
return r===void 0&&(r=!1),r?E({},U[i],{},n[i],{},e[i]):i==="autoHideDuration"?Un(e.autoHideDuration,n.autoHideDuration):i==="transitionDuration"?Bn(e.transitionDuration,n.transitionDuration):e[i]||n[i]||U[i]
}
};function st(t){
return Object.entries(t).reduce(function(e,n){
var i,r=n[0],o=n[1];return E({},e,(i={},i[r]=qt(o),i))
},{})
}var q={SnackbarContainer:"notistack-SnackbarContainer",Snackbar:"notistack-Snackbar",CollapseWrapper:"notistack-CollapseWrapper",MuiContent:"notistack-MuiContent",MuiContentVariant:function(e){
return"notistack-MuiContent-"+e
}},fe=st({root:{height:0},entered:{height:"auto"}}),Ot="0px",At=175,We=h.forwardRef(function(t,e){
var n=t.children,i=t.in,r=t.onExited,o=h.useRef(null),s=h.useRef(null),a=Ut(e,s),c=function(){
return o.current?o.current.clientHeight:0
},u=function(m){
m.style.height=Ot
},l=function(m){
var g=c(),v=bt({timeout:At,mode:"enter"}),x=v.duration,b=v.easing;m.style.transitionDuration=typeof x=="string"?x:x+"ms",m.style.height=g+"px",m.style.transitionTimingFunction=b||""
},f=function(m){
m.style.height="auto"
},p=function(m){
m.style.height=c()+"px"
},_=function(m){
Be(m);var g=bt({timeout:At,mode:"exit"}),v=g.duration,x=g.easing;m.style.transitionDuration=typeof v=="string"?v:v+"ms",m.style.height=Ot,m.style.transitionTimingFunction=x||""
};return h.createElement(Kt,{in:i,unmountOnExit:!0,onEnter:u,onEntered:f,onEntering:l,onExit:p,onExited:r,onExiting:_,nodeRef:s,timeout:At},function(d,m){
return h.createElement("div",Object.assign({ref:a,className:B(fe.root,d==="entered"&&fe.entered),style:E({pointerEvents:"all",overflow:"hidden",minHeight:Ot,transition:G("height")},d==="entered"&&{overflow:"visible"},{},d==="exited"&&!i&&{visibility:"hidden"})},m),h.createElement("div",{ref:o,className:q.CollapseWrapper,style:{display:"flex",width:"100%"}},n))
})
});We.displayName="Collapse";var de={right:"left",left:"right",bottom:"up",top:"down"},Vn=function(e){
return e.horizontal!=="center"?de[e.horizontal]:de[e.vertical]
},Wn=function(e){
return"anchorOrigin"+Yt(e)
},Gn=function(e){
e===void 0&&(e={});var n={containerRoot:!0,containerAnchorOriginTopCenter:!0,containerAnchorOriginBottomCenter:!0,containerAnchorOriginTopRight:!0,containerAnchorOriginBottomRight:!0,containerAnchorOriginTopLeft:!0,containerAnchorOriginBottomLeft:!0};return Object.keys(e).filter(function(i){
return!n[i]
}).reduce(function(i,r){
var o;return E({},i,(o={},o[r]=e[r],o))
},{})
},zn=function(){};function nt(t,e){
return t.reduce(function(n,i){
return i==null?n:function(){
for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];var c=[].concat(s);e&&c.indexOf(e)===-1&&c.push(e),n.apply(this,c),i.apply(this,c)
}
},zn)
}var qn=typeof window<"u"?h.useLayoutEffect:h.useEffect;function pe(t){
var e=h.useRef(t);return qn(function(){
e.current=t
}),h.useCallback(function(){
return e.current.apply(void 0,arguments)
},[])
}var Ge=h.forwardRef(function(t,e){
var n=t.children,i=t.className,r=t.autoHideDuration,o=t.disableWindowBlurListener,s=o===void 0?!1:o,a=t.onClose,c=t.id,u=t.open,l=t.SnackbarProps,f=l===void 0?{}:l,p=h.useRef(),_=pe(function(){
a&&a.apply(void 0,arguments)
}),d=pe(function(b){
!a||b==null||(p.current&&clearTimeout(p.current),p.current=setTimeout(function(){
_(null,"timeout",c)
},b))
});h.useEffect(function(){
return u&&d(r),function(){
p.current&&clearTimeout(p.current)
}
},[u,r,d]);var m=function(){
p.current&&clearTimeout(p.current)
},g=h.useCallback(function(){
r!=null&&d(r*.5)
},[r,d]),v=function(D){
f.onMouseEnter&&f.onMouseEnter(D),m()
},x=function(D){
f.onMouseLeave&&f.onMouseLeave(D),g()
};return h.useEffect(function(){
if(!s&&u)return window.addEventListener("focus",g),window.addEventListener("blur",m),function(){
window.removeEventListener("focus",g),window.removeEventListener("blur",m)
}
},[s,g,u]),h.createElement("div",Object.assign({ref:e},f,{className:B(q.Snackbar,i),onMouseEnter:v,onMouseLeave:x}),n)
});Ge.displayName="Snackbar";var Lt,Yn=st({root:(Lt={display:"flex",flexWrap:"wrap",flexGrow:1},Lt[j.upSm]={flexGrow:"initial",minWidth:"288px"},Lt)}),ze=h.forwardRef(function(t,e){
var n=t.className,i=ot(t,["className"]);return y.createElement("div",Object.assign({ref:e,className:B(Yn.root,n)},i))
});ze.displayName="SnackbarContent";var Q=st({root:{backgroundColor:"#313131",fontSize:"0.875rem",lineHeight:1.43,letterSpacing:"0.01071em",color:"#fff",alignItems:"center",padding:"6px 16px",borderRadius:"4px",boxShadow:"0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)"},lessPadding:{paddingLeft:8*2.5+"px"},default:{backgroundColor:"#313131"},success:{backgroundColor:"#43a047"},error:{backgroundColor:"#d32f2f"},warning:{backgroundColor:"#ff9800"},info:{backgroundColor:"#2196f3"},message:{display:"flex",alignItems:"center",padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:"16px",marginRight:"-8px"}}),he="notistack-snackbar",qe=h.forwardRef(function(t,e){
var n=t.id,i=t.message,r=t.action,o=t.iconVariant,s=t.variant,a=t.hideIconVariant,c=t.style,u=t.className,l=o[s],f=r;return typeof f=="function"&&(f=f(n)),y.createElement(ze,{ref:e,role:"alert","aria-describedby":he,style:c,className:B(q.MuiContent,q.MuiContentVariant(s),Q.root,Q[s],u,!a&&l&&Q.lessPadding)},y.createElement("div",{id:he,className:Q.message},a?null:l,i),f&&y.createElement("div",{className:Q.action},f))
});qe.displayName="MaterialDesignContent";var Kn=h.memo(qe),Xn=st({wrappedRoot:{width:"100%",position:"relative",transform:"translateX(0)",top:0,right:0,bottom:0,left:0,minWidth:"288px"}}),Jn=function(e){
var n=h.useRef(),i=h.useState(!0),r=i[0],o=i[1],s=nt([e.snack.onClose,e.onClose]),a=function(){
e.snack.requestClose&&s(null,"instructed",e.snack.id)
},c=h.useCallback(function(){
n.current=setTimeout(function(){
o(function(N){
return!N
})
},125)
},[]);h.useEffect(function(){
return function(){
n.current&&clearTimeout(n.current)
}
},[]);var u=e.snack,l=e.classes,f=e.Component,p=f===void 0?Kn:f,_=h.useMemo(function(){
return Gn(l)
},[l]),d=u.open,m=u.SnackbarProps,g=u.TransitionComponent,v=u.TransitionProps,x=u.transitionDuration,b=u.disableWindowBlurListener,D=u.content,C=ot(u,["open","SnackbarProps","TransitionComponent","TransitionProps","transitionDuration","disableWindowBlurListener","content","entered","requestClose","onEnter","onEntered","onExit","onExited"]),I=E({direction:Vn(C.anchorOrigin),timeout:x},v),S=D;typeof S=="function"&&(S=S(C.id,C.message));var w=["onEnter","onEntered","onExit","onExited"].reduce(function(N,Nt){
var Rt;return E({},N,(Rt={},Rt[Nt]=nt([e.snack[Nt],e[Nt]],C.id),Rt))
},{});return y.createElement(We,{in:r,onExited:w.onExited},y.createElement(Ge,{open:d,id:C.id,disableWindowBlurListener:b,autoHideDuration:C.autoHideDuration,className:B(Xn.wrappedRoot,_.root,_[Wn(C.anchorOrigin)]),SnackbarProps:m,onClose:s},y.createElement(g,Object.assign({},I,{appear:!0,in:d,onExit:w.onExit,onExited:c,onEnter:w.onEnter,onEntered:nt([w.onEntered,a],C.id)}),S||y.createElement(p,Object.assign({},C)))))
},tt,Pt,ht,gt,Mt,A={view:{default:20},snackbar:{default:6,dense:2}},ge="."+q.CollapseWrapper,$t=16,mt=st({root:(tt={boxSizing:"border-box",display:"flex",maxHeight:"100%",position:"fixed",zIndex:1400,height:"auto",width:"auto",transition:G(["top","right","bottom","left","max-width"],{duration:300,easing:"ease"}),pointerEvents:"none"},tt[ge]={padding:A.snackbar.default+"px 0px",transition:"padding 300ms ease 0ms"},tt.maxWidth="calc(100% - "+A.view.default*2+"px)",tt[j.downXs]={width:"100%",maxWidth:"calc(100% - "+$t*2+"px)"},tt),rootDense:(Pt={},Pt[ge]={padding:A.snackbar.dense+"px 0px"},Pt),top:{top:A.view.default-A.snackbar.default+"px",flexDirection:"column"},bottom:{bottom:A.view.default-A.snackbar.default+"px",flexDirection:"column-reverse"},left:(ht={left:A.view.default+"px"},ht[j.upSm]={alignItems:"flex-start"},ht[j.downXs]={left:$t+"px"},ht),right:(gt={right:A.view.default+"px"},gt[j.upSm]={alignItems:"flex-end"},gt[j.downXs]={right:$t+"px"},gt),center:(Mt={left:"50%",transform:"translateX(-50%)"},Mt[j.upSm]={alignItems:"center"},Mt)}),Zn=function(e){
var n=e.classes,i=n===void 0?{}:n,r=e.anchorOrigin,o=e.dense,s=e.children,a=B(q.SnackbarContainer,mt[r.vertical],mt[r.horizontal],mt.root,i.containerRoot,i["containerAnchorOrigin"+Yt(r)],o&&mt.rootDense);return y.createElement("div",{className:a},s)
},Qn=h.memo(Zn),me=function(e){
var n=typeof e=="string"||h.isValidElement(e);return!n
},Hi=function(t){
Fe(e,t);function e(i){
var r;return r=t.call(this,i)||this,r.enqueueSnackbar=function(o,s){
if(s===void 0&&(s={}),o==null)throw new Error("enqueueSnackbar called with invalid argument");var a=me(o)?o:s,c=me(o)?o.message:o,u=a.key,l=a.preventDuplicate,f=ot(a,["key","preventDuplicate"]),p=ft(u),_=p?u:new Date().getTime()+Math.random(),d=Hn(f,r.props),m=E({id:_},f,{message:c,open:!0,entered:!1,requestClose:!1,persist:d("persist"),action:d("action"),content:d("content"),variant:d("variant"),anchorOrigin:d("anchorOrigin"),disableWindowBlurListener:d("disableWindowBlurListener"),autoHideDuration:d("autoHideDuration"),hideIconVariant:d("hideIconVariant"),TransitionComponent:d("TransitionComponent"),transitionDuration:d("transitionDuration"),TransitionProps:d("TransitionProps",!0),iconVariant:d("iconVariant",!0),style:d("style",!0),SnackbarProps:d("SnackbarProps",!0),className:B(r.props.className,f.className)});return m.persist&&(m.autoHideDuration=void 0),r.setState(function(g){
if(l===void 0&&r.props.preventDuplicate||l){
var v=function(C){
return p?C.id===_:C.message===c
},x=g.queue.findIndex(v)>-1,b=g.snacks.findIndex(v)>-1;if(x||b)return g
}return r.handleDisplaySnack(E({},g,{queue:[].concat(g.queue,[m])}))
}),_
},r.handleDisplaySnack=function(o){
var s=o.snacks;return s.length>=r.maxSnack?r.handleDismissOldest(o):r.processQueue(o)
},r.processQueue=function(o){
var s=o.queue,a=o.snacks;return s.length>0?E({},o,{snacks:[].concat(a,[s[0]]),queue:s.slice(1,s.length)}):o
},r.handleDismissOldest=function(o){
if(o.snacks.some(function(l){
return!l.open||l.requestClose
}))return o;var s=!1,a=!1,c=o.snacks.reduce(function(l,f){
return l+(f.open&&f.persist?1:0)
},0);c===r.maxSnack&&(a=!0);var u=o.snacks.map(function(l){
return!s&&(!l.persist||a)?(s=!0,l.entered?(l.onClose&&l.onClose(null,"maxsnack",l.id),r.props.onClose&&r.props.onClose(null,"maxsnack",l.id),E({},l,{open:!1})):E({},l,{requestClose:!0})):E({},l)
});return E({},o,{snacks:u})
},r.handleEnteredSnack=function(o,s,a){
if(!ft(a))throw new Error("handleEnteredSnack Cannot be called with undefined key");r.setState(function(c){
var u=c.snacks;return{snacks:u.map(function(l){
return l.id===a?E({},l,{entered:!0}):E({},l)
})}
})
},r.handleCloseSnack=function(o,s,a){
r.props.onClose&&r.props.onClose(o,s,a);var c=a===void 0;r.setState(function(u){
var l=u.snacks,f=u.queue;return{snacks:l.map(function(p){
return!c&&p.id!==a?E({},p):p.entered?E({},p,{open:!1}):E({},p,{requestClose:!0})
}),queue:f.filter(function(p){
return p.id!==a
})}
})
},r.closeSnackbar=function(o){
var s=r.state.snacks.find(function(a){
return a.id===o
});ft(o)&&s&&s.onClose&&s.onClose(null,"instructed",o),r.handleCloseSnack(null,"instructed",o)
},r.handleExitedSnack=function(o,s){
if(!ft(s))throw new Error("handleExitedSnack Cannot be called with undefined key");r.setState(function(a){
var c=r.processQueue(E({},a,{snacks:a.snacks.filter(function(u){
return u.id!==s
})}));return c.queue.length===0?c:r.handleDismissOldest(c)
})
},r.enqueueSnackbar,r.closeSnackbar,r.state={snacks:[],queue:[],contextValue:{enqueueSnackbar:r.enqueueSnackbar.bind(oe(r)),closeSnackbar:r.closeSnackbar.bind(oe(r))}},r
}var n=e.prototype;return n.render=function(){
var r=this,o=this.state.contextValue,s=this.props,a=s.domRoot,c=s.children,u=s.dense,l=u===void 0?!1:u,f=s.Components,p=f===void 0?{}:f,_=s.classes,d=this.state.snacks.reduce(function(g,v){
var x,b=Yt(v.anchorOrigin),D=g[b]||[];return E({},g,(x={},x[b]=[].concat(D,[v]),x))
},{}),m=Object.keys(d).map(function(g){
var v=d[g],x=v[0];return y.createElement(Qn,{key:g,dense:l,anchorOrigin:x.anchorOrigin,classes:_},v.map(function(b){
return y.createElement(Jn,{key:b.id,snack:b,classes:_,Component:p[b.variant],onClose:r.handleCloseSnack,onEnter:r.props.onEnter,onExit:r.props.onExit,onExited:nt([r.handleExitedSnack,r.props.onExited],b.id),onEntered:nt([r.handleEnteredSnack,r.props.onEntered],b.id)})
}))
});return y.createElement(Ue.Provider,{value:o},c,a?Cn.createPortal(m,a):m)
},je(e,[{key:"maxSnack",get:function(){
return this.props.maxSnack||U.maxSnack
}}]),e
}(h.Component),Vi=function(){
return h.useContext(Ue)
};const at=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,rt="9.23.0",T=globalThis;function kt(){
return Xt(T),T
}function Xt(t){
const e=t.__SENTRY__=t.__SENTRY__||{};return e.version=e.version||rt,e[rt]=e[rt]||{}
}function Tt(t,e,n=T){
const i=n.__SENTRY__=n.__SENTRY__||{},r=i[rt]=i[rt]||{};return r[t]||(r[t]=e())
}const Ye=Object.prototype.toString;function Ke(t){
switch(Ye.call(t)){
case"[object Error]":case"[object Exception]":case"[object DOMException]":case"[object WebAssembly.Exception]":return!0;default:return ct(t,Error)
}
}function X(t,e){
return Ye.call(t)===`[object ${e}]`
}function Wi(t){
return X(t,"ErrorEvent")
}function Gi(t){
return X(t,"DOMError")
}function zi(t){
return X(t,"DOMException")
}function vt(t){
return X(t,"String")
}function tr(t){
return typeof t=="object"&&t!==null&&"__sentry_template_string__"in t&&"__sentry_template_values__"in t
}function qi(t){
return t===null||tr(t)||typeof t!="object"&&typeof t!="function"
}function Xe(t){
return X(t,"Object")
}function er(t){
return typeof Event<"u"&&ct(t,Event)
}function nr(t){
return typeof Element<"u"&&ct(t,Element)
}function rr(t){
return X(t,"RegExp")
}function Jt(t){
return!!(t!=null&&t.then&&typeof t.then=="function")
}function ir(t){
return Xe(t)&&"nativeEvent"in t&&"preventDefault"in t&&"stopPropagation"in t
}function ct(t,e){
try{
return t instanceof e
}catch{
return!1
}
}function Je(t){
return!!(typeof t=="object"&&t!==null&&(t.__isVue||t._isVue))
}function Yi(t){
return typeof Request<"u"&&ct(t,Request)
}const Zt=T,or=80;function sr(t,e={}){
if(!t)return"<unknown>";try{
let n=t;const i=5,r=[];let o=0,s=0;const a=" > ",c=a.length;let u;const l=Array.isArray(e)?e:e.keyAttrs,f=!Array.isArray(e)&&e.maxStringLength||or;for(;n&&o++<i&&(u=ar(n,l),!(u==="html"||o>1&&s+r.length*c+u.length>=f));)r.push(u),s+=u.length,n=n.parentNode;return r.reverse().join(a)
}catch{
return"<unknown>"
}
}function ar(t,e){
const n=t,i=[];if(!(n!=null&&n.tagName))return"";if(Zt.HTMLElement&&n instanceof HTMLElement&&n.dataset){
if(n.dataset.sentryComponent)return n.dataset.sentryComponent;if(n.dataset.sentryElement)return n.dataset.sentryElement
}i.push(n.tagName.toLowerCase());const r=e!=null&&e.length?e.filter(s=>n.getAttribute(s)).map(s=>[s,n.getAttribute(s)]):null;if(r!=null&&r.length)r.forEach(s=>{
i.push(`[${s[0]}="${s[1]}"]`)
});else{
n.id&&i.push(`#${n.id}`);const s=n.className;if(s&&vt(s)){
const a=s.split(/\s+/);for(const c of a)i.push(`.${c}`)
}
}const o=["aria-label","type","name","title","alt"];for(const s of o){
const a=n.getAttribute(s);a&&i.push(`[${s}="${a}"]`)
}return i.join("")
}function cr(){
try{
return Zt.document.location.href
}catch{
return""
}
}function Ki(t){
if(!Zt.HTMLElement)return null;let e=t;const n=5;for(let i=0;i<n;i++){
if(!e)return null;if(e instanceof HTMLElement){
if(e.dataset.sentryComponent)return e.dataset.sentryComponent;if(e.dataset.sentryElement)return e.dataset.sentryElement
}e=e.parentNode
}return null
}const ur="Sentry Logger ",_e=["debug","info","warn","error","log","assert","trace"],Ee={};function Qt(t){
if(!("console"in T))return t();const e=T.console,n={},i=Object.keys(Ee);i.forEach(r=>{
const o=Ee[r];n[r]=e[r],e[r]=o
});try{
return t()
}finally{
i.forEach(r=>{
e[r]=n[r]
})
}
}function lr(){
let t=!1;const e={enable:()=>{
t=!0
},disable:()=>{
t=!1
},isEnabled:()=>t};return at?_e.forEach(n=>{
e[n]=(...i)=>{
t&&Qt(()=>{
T.console[n](`${ur}[${n}]:`,...i)
})
}
}):_e.forEach(n=>{
e[n]=()=>{}
}),e
}const k=Tt("logger",lr);function xt(t,e=0){
return typeof t!="string"||e===0||t.length<=e?t:`${t.slice(0,e)}...`
}function Xi(t,e){
if(!Array.isArray(t))return"";const n=[];for(let i=0;i<t.length;i++){
const r=t[i];try{
Je(r)?n.push("[VueViewModel]"):n.push(String(r))
}catch{
n.push("[value cannot be serialized]")
}
}return n.join(e)
}function fr(t,e,n=!1){
return vt(t)?rr(e)?e.test(t):vt(e)?n?t===e:t.includes(e):!1:!1
}function Ji(t,e=[],n=!1){
return e.some(i=>fr(t,i,n))
}function Zi(t,e,n){
if(!(e in t))return;const i=t[e];if(typeof i!="function")return;const r=n(i);typeof r=="function"&&Ze(r,i);try{
t[e]=r
}catch{
at&&k.log(`Failed to replace method "${e}" in object`,t)
}
}function P(t,e,n){
try{
Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0})
}catch{
at&&k.log(`Failed to add non-enumerable property "${e}" to object`,t)
}
}function Ze(t,e){
try{
const n=e.prototype||{};t.prototype=e.prototype=n,P(t,"__sentry_original__",e)
}catch{}
}function dr(t){
return t.__sentry_original__
}function Qe(t){
if(Ke(t))return{message:t.message,name:t.name,stack:t.stack,...ye(t)};if(er(t)){
const e={type:t.type,target:Se(t.target),currentTarget:Se(t.currentTarget),...ye(t)};return typeof CustomEvent<"u"&&ct(t,CustomEvent)&&(e.detail=t.detail),e
}else return t
}function Se(t){
try{
return nr(t)?sr(t):Object.prototype.toString.call(t)
}catch{
return"<unknown>"
}
}function ye(t){
if(typeof t=="object"&&t!==null){
const e={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e
}else return{}
}function Qi(t,e=40){
const n=Object.keys(Qe(t));n.sort();const i=n[0];if(!i)return"[object has no keys]";if(i.length>=e)return xt(i,e);for(let r=n.length;r>0;r--){
const o=n.slice(0,r).join(", ");if(!(o.length>e))return r===n.length?o:xt(o,e)
}return""
}function pr(){
const t=T;return t.crypto||t.msCrypto
}function $(t=pr()){
let e=()=>Math.random()*16;try{
if(t!=null&&t.randomUUID)return t.randomUUID().replace(/-/g,"");t!=null&&t.getRandomValues&&(e=()=>{
const n=new Uint8Array(1);return t.getRandomValues(n),n[0]
})
}catch{}return("10000000100040008000"+1e11).replace(/[018]/g,n=>(n^(e()&15)>>n/4).toString(16))
}function tn(t){
var e,n;return(n=(e=t.exception)==null?void 0:e.values)==null?void 0:n[0]
}function to(t){
const{message:e,event_id:n}=t;if(e)return e;const i=tn(t);return i?i.type&&i.value?`${i.type}: ${i.value}`:i.type||i.value||n||"<unknown>":n||"<unknown>"
}function hr(t,e,n){
const i=t.exception=t.exception||{},r=i.values=i.values||[],o=r[0]=r[0]||{};o.value||(o.value=e||""),o.type||(o.type="Error")
}function en(t,e){
const n=tn(t);if(!n)return;const i={type:"generic",handled:!0},r=n.mechanism;if(n.mechanism={...i,...r,...e},e&&"data"in e){
const o={...r==null?void 0:r.data,...e.data};n.mechanism.data=o
}
}function eo(t){
if(gr(t))return!0;try{
P(t,"__sentry_captured__",!0)
}catch{}return!1
}function gr(t){
try{
return t.__sentry_captured__
}catch{}
}const nn=1e3;function te(){
return Date.now()/nn
}function mr(){
const{performance:t}=T;if(!(t!=null&&t.now))return te;const e=Date.now()-t.now(),n=t.timeOrigin==null?e:t.timeOrigin;return()=>(n+t.now())/nn
}const ee=mr();function _r(t){
const e=ee(),n={sid:$(),init:!0,timestamp:e,started:e,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>Sr(n)};return t&&It(n,t),n
}function It(t,e={}){
if(e.user&&(!t.ipAddress&&e.user.ip_address&&(t.ipAddress=e.user.ip_address),!t.did&&!e.did&&(t.did=e.user.id||e.user.email||e.user.username)),t.timestamp=e.timestamp||ee(),e.abnormal_mechanism&&(t.abnormal_mechanism=e.abnormal_mechanism),e.ignoreDuration&&(t.ignoreDuration=e.ignoreDuration),e.sid&&(t.sid=e.sid.length===32?e.sid:$()),e.init!==void 0&&(t.init=e.init),!t.did&&e.did&&(t.did=`${e.did}`),typeof e.started=="number"&&(t.started=e.started),t.ignoreDuration)t.duration=void 0;else if(typeof e.duration=="number")t.duration=e.duration;else{
const n=t.timestamp-t.started;t.duration=n>=0?n:0
}e.release&&(t.release=e.release),e.environment&&(t.environment=e.environment),!t.ipAddress&&e.ipAddress&&(t.ipAddress=e.ipAddress),!t.userAgent&&e.userAgent&&(t.userAgent=e.userAgent),typeof e.errors=="number"&&(t.errors=e.errors),e.status&&(t.status=e.status)
}function Er(t,e){
let n={};t.status==="ok"&&(n={status:"exited"}),It(t,n)
}function Sr(t){
return{sid:`${t.sid}`,init:t.init,started:new Date(t.started*1e3).toISOString(),timestamp:new Date(t.timestamp*1e3).toISOString(),status:t.status,errors:t.errors,did:typeof t.did=="number"||typeof t.did=="string"?`${t.did}`:void 0,duration:t.duration,abnormal_mechanism:t.abnormal_mechanism,attrs:{release:t.release,environment:t.environment,ip_address:t.ipAddress,user_agent:t.userAgent}}
}function Dt(t,e,n=2){
if(!e||typeof e!="object"||n<=0)return e;if(t&&Object.keys(e).length===0)return t;const i={...t};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=Dt(i[r],e[r],n-1));return i
}const Ht="_sentrySpan";function be(t,e){
e?P(t,Ht,e):delete t[Ht]
}function ve(t){
return t[Ht]
}function xe(){
return $()
}function rn(){
return $().substring(16)
}const yr=100;class R{
constructor(){
this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext={traceId:xe(),sampleRand:Math.random()}
}clone(){
const e=new R;return e._breadcrumbs=[...this._breadcrumbs],e._tags={...this._tags},e._extra={...this._extra},e._contexts={...this._contexts},this._contexts.flags&&(e._contexts.flags={values:[...this._contexts.flags.values]}),e._user=this._user,e._level=this._level,e._session=this._session,e._transactionName=this._transactionName,e._fingerprint=this._fingerprint,e._eventProcessors=[...this._eventProcessors],e._attachments=[...this._attachments],e._sdkProcessingMetadata={...this._sdkProcessingMetadata},e._propagationContext={...this._propagationContext},e._client=this._client,e._lastEventId=this._lastEventId,be(e,ve(this)),e
}setClient(e){
this._client=e
}setLastEventId(e){
this._lastEventId=e
}getClient(){
return this._client
}lastEventId(){
return this._lastEventId
}addScopeListener(e){
this._scopeListeners.push(e)
}addEventProcessor(e){
return this._eventProcessors.push(e),this
}setUser(e){
return this._user=e||{email:void 0,id:void 0,ip_address:void 0,username:void 0},this._session&&It(this._session,{user:e}),this._notifyScopeListeners(),this
}getUser(){
return this._user
}setTags(e){
return this._tags={...this._tags,...e},this._notifyScopeListeners(),this
}setTag(e,n){
return this._tags={...this._tags,[e]:n},this._notifyScopeListeners(),this
}setExtras(e){
return this._extra={...this._extra,...e},this._notifyScopeListeners(),this
}setExtra(e,n){
return this._extra={...this._extra,[e]:n},this._notifyScopeListeners(),this
}setFingerprint(e){
return this._fingerprint=e,this._notifyScopeListeners(),this
}setLevel(e){
return this._level=e,this._notifyScopeListeners(),this
}setTransactionName(e){
return this._transactionName=e,this._notifyScopeListeners(),this
}setContext(e,n){
return n===null?delete this._contexts[e]:this._contexts[e]=n,this._notifyScopeListeners(),this
}setSession(e){
return e?this._session=e:delete this._session,this._notifyScopeListeners(),this
}getSession(){
return this._session
}update(e){
if(!e)return this;const n=typeof e=="function"?e(this):e,i=n instanceof R?n.getScopeData():Xe(n)?e:void 0,{tags:r,extra:o,user:s,contexts:a,level:c,fingerprint:u=[],propagationContext:l}=i||{};return this._tags={...this._tags,...r},this._extra={...this._extra,...o},this._contexts={...this._contexts,...a},s&&Object.keys(s).length&&(this._user=s),c&&(this._level=c),u.length&&(this._fingerprint=u),l&&(this._propagationContext=l),this
}clear(){
return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._session=void 0,be(this,void 0),this._attachments=[],this.setPropagationContext({traceId:xe(),sampleRand:Math.random()}),this._notifyScopeListeners(),this
}addBreadcrumb(e,n){
var o;const i=typeof n=="number"?n:yr;if(i<=0)return this;const r={timestamp:te(),...e,message:e.message?xt(e.message,2048):e.message};return this._breadcrumbs.push(r),this._breadcrumbs.length>i&&(this._breadcrumbs=this._breadcrumbs.slice(-i),(o=this._client)==null||o.recordDroppedEvent("buffer_overflow","log_item")),this._notifyScopeListeners(),this
}getLastBreadcrumb(){
return this._breadcrumbs[this._breadcrumbs.length-1]
}clearBreadcrumbs(){
return this._breadcrumbs=[],this._notifyScopeListeners(),this
}addAttachment(e){
return this._attachments.push(e),this
}clearAttachments(){
return this._attachments=[],this
}getScopeData(){
return{breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:ve(this)}
}setSDKProcessingMetadata(e){
return this._sdkProcessingMetadata=Dt(this._sdkProcessingMetadata,e,2),this
}setPropagationContext(e){
return this._propagationContext=e,this
}getPropagationContext(){
return this._propagationContext
}captureException(e,n){
const i=(n==null?void 0:n.event_id)||$();if(!this._client)return k.warn("No client configured on scope - will not capture exception!"),i;const r=new Error("Sentry syntheticException");return this._client.captureException(e,{originalException:e,syntheticException:r,...n,event_id:i},this),i
}captureMessage(e,n,i){
const r=(i==null?void 0:i.event_id)||$();if(!this._client)return k.warn("No client configured on scope - will not capture message!"),r;const o=new Error(e);return this._client.captureMessage(e,n,{originalException:e,syntheticException:o,...i,event_id:r},this),r
}captureEvent(e,n){
const i=(n==null?void 0:n.event_id)||$();return this._client?(this._client.captureEvent(e,{...n,event_id:i},this),i):(k.warn("No client configured on scope - will not capture event!"),i)
}_notifyScopeListeners(){
this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(e=>{
e(this)
}),this._notifyingListeners=!1)
}
}function br(){
return Tt("defaultCurrentScope",()=>new R)
}function vr(){
return Tt("defaultIsolationScope",()=>new R)
}class xr{
constructor(e,n){
let i;e?i=e:i=new R;let r;n?r=n:r=new R,this._stack=[{scope:i}],this._isolationScope=r
}withScope(e){
const n=this._pushScope();let i;try{
i=e(n)
}catch(r){
throw this._popScope(),r
}return Jt(i)?i.then(r=>(this._popScope(),r),r=>{
throw this._popScope(),r
}):(this._popScope(),i)
}getClient(){
return this.getStackTop().client
}getScope(){
return this.getStackTop().scope
}getIsolationScope(){
return this._isolationScope
}getStackTop(){
return this._stack[this._stack.length-1]
}_pushScope(){
const e=this.getScope().clone();return this._stack.push({client:this.getClient(),scope:e}),e
}_popScope(){
return this._stack.length<=1?!1:!!this._stack.pop()
}
}function Y(){
const t=kt(),e=Xt(t);return e.stack=e.stack||new xr(br(),vr())
}function Cr(t){
return Y().withScope(t)
}function kr(t,e){
const n=Y();return n.withScope(()=>(n.getStackTop().scope=t,e(t)))
}function Ce(t){
return Y().withScope(()=>t(Y().getIsolationScope()))
}function Tr(){
return{withIsolationScope:Ce,withScope:Cr,withSetScope:kr,withSetIsolationScope:(t,e)=>Ce(e),getCurrentScope:()=>Y().getScope(),getIsolationScope:()=>Y().getIsolationScope()}
}function ne(t){
const e=Xt(t);return e.acs?e.acs:Tr()
}function J(){
const t=kt();return ne(t).getCurrentScope()
}function ut(){
const t=kt();return ne(t).getIsolationScope()
}function Ir(){
return Tt("globalScope",()=>new R)
}function re(...t){
const e=kt(),n=ne(e);if(t.length===2){
const[i,r]=t;return i?n.withSetScope(i,r):n.withScope(r)
}return n.withScope(t[0])
}function lt(){
return J().getClient()
}function no(t){
const e=t.getPropagationContext(),{traceId:n,parentSpanId:i,propagationSpanId:r}=e,o={trace_id:n,span_id:r||rn()};return i&&(o.parent_span_id=i),o
}const Dr="sentry.source",wr="sentry.sample_rate",Nr="sentry.previous_trace_sample_rate",Rr="sentry.op",Or="sentry.origin",ro="sentry.measurement_unit",io="sentry.measurement_value",oo="sentry.custom_span_name",so="sentry.profile_id",ao="sentry.exclusive_time",Ar=0,Lr=1,on="_sentryScope",sn="_sentryIsolationScope";function co(t,e,n){
t&&(P(t,sn,n),P(t,on,e))
}function an(t){
return{scope:t[on],isolationScope:t[sn]}
}const Pr="sentry-",Mr=/^sentry-/;function $r(t){
const e=jr(t);if(!e)return;const n=Object.entries(e).reduce((i,[r,o])=>{
if(r.match(Mr)){
const s=r.slice(Pr.length);i[s]=o
}return i
},{});if(Object.keys(n).length>0)return n
}function jr(t){
if(!(!t||!vt(t)&&!Array.isArray(t)))return Array.isArray(t)?t.reduce((e,n)=>{
const i=ke(n);return Object.entries(i).forEach(([r,o])=>{
e[r]=o
}),e
},{}):ke(t)
}function ke(t){
return t.split(",").map(e=>e.split("=").map(n=>{
try{
return decodeURIComponent(n.trim())
}catch{
return
}
})).reduce((e,[n,i])=>(n&&i&&(e[n]=i),e),{})
}const uo=0,cn=1;let Te=!1;function lo(t){
const{spanId:e,traceId:n}=t.spanContext(),{data:i,op:r,parent_span_id:o,status:s,origin:a,links:c}=wt(t);return{parent_span_id:o,span_id:e,trace_id:n,data:i,op:r,status:s,origin:a,links:c}
}function Fr(t){
const{spanId:e,traceId:n,isRemote:i}=t.spanContext(),r=i?e:wt(t).parent_span_id,o=an(t).scope,s=i?(o==null?void 0:o.getPropagationContext().propagationSpanId)||rn():e;return{parent_span_id:r,span_id:s,trace_id:n}
}function Ur(t){
if(t&&t.length>0)return t.map(({context:{spanId:e,traceId:n,traceFlags:i,...r},attributes:o})=>({span_id:e,trace_id:n,sampled:i===cn,attributes:o,...r}))
}function Ie(t){
return typeof t=="number"?De(t):Array.isArray(t)?t[0]+t[1]/1e9:t instanceof Date?De(t.getTime()):ee()
}function De(t){
return t>9999999999?t/1e3:t
}function wt(t){
var i;if(Hr(t))return t.getSpanJSON();const{spanId:e,traceId:n}=t.spanContext();if(Br(t)){
const{attributes:r,startTime:o,name:s,endTime:a,status:c,links:u}=t,l="parentSpanId"in t?t.parentSpanId:"parentSpanContext"in t?(i=t.parentSpanContext)==null?void 0:i.spanId:void 0;return{span_id:e,trace_id:n,data:r,description:s,parent_span_id:l,start_timestamp:Ie(o),timestamp:Ie(a)||void 0,status:Vr(c),op:r[Rr],origin:r[Or],links:Ur(u)}
}return{span_id:e,trace_id:n,start_timestamp:0,data:{}}
}function Br(t){
const e=t;return!!e.attributes&&!!e.startTime&&!!e.name&&!!e.endTime&&!!e.status
}function Hr(t){
return typeof t.getSpanJSON=="function"
}function un(t){
const{traceFlags:e}=t.spanContext();return e===cn
}function Vr(t){
if(!(!t||t.code===Ar))return t.code===Lr?"ok":t.message||"unknown_error"
}const it="_sentryChildSpans",Vt="_sentryRootSpan";function fo(t,e){
const n=t[Vt]||t;P(e,Vt,n),t[it]?t[it].add(e):P(t,it,new Set([e]))
}function po(t){
const e=new Set;function n(i){
if(!e.has(i)&&un(i)){
e.add(i);const r=i[it]?Array.from(i[it]):[];for(const o of r)n(o)
}
}return n(t),Array.from(e)
}function ln(t){
return t[Vt]||t
}function ho(){
Te||(Qt(()=>{
console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly.")
}),Te=!0)
}const fn=50,Wr="?",we=/\(error: (.*)\)/,Ne=/captureMessage|captureException/;function Gr(...t){
const e=t.sort((n,i)=>n[0]-i[0]).map(n=>n[1]);return(n,i=0,r=0)=>{
const o=[],s=n.split(`
`);for(let a=i;a<s.length;a++){
const c=s[a];if(c.length>1024)continue;const u=we.test(c)?c.replace(we,"$1"):c;if(!u.match(/\S*Error: /)){
for(const l of e){
const f=l(u);if(f){
o.push(f);break
}
}if(o.length>=fn+r)break
}
}return zr(o.slice(r))
}
}function go(t){
return Array.isArray(t)?Gr(...t):t
}function zr(t){
if(!t.length)return[];const e=Array.from(t);return/sentryWrapped/.test(_t(e).function||"")&&e.pop(),e.reverse(),Ne.test(_t(e).function||"")&&(e.pop(),Ne.test(_t(e).function||"")&&e.pop()),e.slice(0,fn).map(n=>({...n,filename:n.filename||_t(e).filename,function:n.function||Wr}))
}function _t(t){
return t[t.length-1]||{}
}const jt="<anonymous>";function qr(t){
try{
return!t||typeof t!="function"?jt:t.name||jt
}catch{
return jt
}
}function mo(t){
const e=t.exception;if(e){
const n=[];try{
return e.values.forEach(i=>{
i.stacktrace.frames&&n.push(...i.stacktrace.frames)
}),n
}catch{
return
}
}
}function Yr(t){
var n;if(typeof __SENTRY_TRACING__=="boolean"&&!__SENTRY_TRACING__)return!1;const e=t||((n=lt())==null?void 0:n.getOptions());return!!e&&(e.tracesSampleRate!=null||!!e.tracesSampler)
}const dn="production",Kr=/^o(\d+)\./,Xr=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;function Jr(t){
return t==="http"||t==="https"
}function Zr(t,e=!1){
const{host:n,path:i,pass:r,port:o,projectId:s,protocol:a,publicKey:c}=t;return`${a}://${c}${e&&r?`:${r}`:""}@${n}${o?`:${o}`:""}/${i&&`${i}/`}${s}`
}function Qr(t){
const e=Xr.exec(t);if(!e){
Qt(()=>{
console.error(`Invalid Sentry Dsn: ${t}`)
});return
}const[n,i,r="",o="",s="",a=""]=e.slice(1);let c="",u=a;const l=u.split("/");if(l.length>1&&(c=l.slice(0,-1).join("/"),u=l.pop()),u){
const f=u.match(/^\d+/);f&&(u=f[0])
}return pn({host:o,pass:r,path:c,projectId:u,port:s,protocol:n,publicKey:i})
}function pn(t){
return{protocol:t.protocol,publicKey:t.publicKey||"",pass:t.pass||"",host:t.host,port:t.port||"",path:t.path||"",projectId:t.projectId}
}function ti(t){
if(!at)return!0;const{port:e,projectId:n,protocol:i}=t;return["protocol","publicKey","host","projectId"].find(s=>t[s]?!1:(k.error(`Invalid Sentry Dsn: ${s} missing`),!0))?!1:n.match(/^\d+$/)?Jr(i)?e&&isNaN(parseInt(e,10))?(k.error(`Invalid Sentry Dsn: Invalid port ${e}`),!1):!0:(k.error(`Invalid Sentry Dsn: Invalid protocol ${i}`),!1):(k.error(`Invalid Sentry Dsn: Invalid projectId ${n}`),!1)
}function ei(t){
const e=t.match(Kr);return e==null?void 0:e[1]
}function ni(t){
const e=typeof t=="string"?Qr(t):pn(t);if(!(!e||!ti(e)))return e
}const hn="_frozenDsc";function _o(t,e){
P(t,hn,e)
}function gn(t,e){
const n=e.getOptions(),{publicKey:i,host:r}=e.getDsn()||{};let o;n.orgId?o=String(n.orgId):r&&(o=ei(r));const s={environment:n.environment||dn,release:n.release,public_key:i,trace_id:t,org_id:o};return e.emit("createDsc",s),s
}function Eo(t,e){
const n=e.getPropagationContext();return n.dsc||gn(n.traceId,t)
}function ri(t){
var d;const e=lt();if(!e)return{};const n=ln(t),i=wt(n),r=i.data,o=n.spanContext().traceState,s=(o==null?void 0:o.get("sentry.sample_rate"))??r[wr]??r[Nr];function a(m){
return(typeof s=="number"||typeof s=="string")&&(m.sample_rate=`${s}`),m
}const c=n[hn];if(c)return a(c);const u=o==null?void 0:o.get("sentry.dsc"),l=u&&$r(u);if(l)return a(l);const f=gn(t.spanContext().traceId,e),p=r[Dr],_=i.description;return p!=="url"&&_&&(f.transaction=_),Yr()&&(f.sampled=String(un(n)),f.sample_rand=(o==null?void 0:o.get("sentry.sample_rand"))??((d=an(n).scope)==null?void 0:d.getPropagationContext().sampleRand.toString())),a(f),e.emit("createDsc",f,n),f
}function M(t,e=100,n=1/0){
try{
return Wt("",t,e,n)
}catch(i){
return{ERROR:`**non-serializable** (${i})`}
}
}function ii(t,e=3,n=100*1024){
const i=M(t,e);return ci(i)>n?ii(t,e-1,n):i
}function Wt(t,e,n=1/0,i=1/0,r=ui()){
const[o,s]=r;if(e==null||["boolean","string"].includes(typeof e)||typeof e=="number"&&Number.isFinite(e))return e;const a=oi(t,e);if(!a.startsWith("[object "))return a;if(e.__sentry_skip_normalization__)return e;const c=typeof e.__sentry_override_normalization_depth__=="number"?e.__sentry_override_normalization_depth__:n;if(c===0)return a.replace("object ","");if(o(e))return"[Circular ~]";const u=e;if(u&&typeof u.toJSON=="function")try{
const _=u.toJSON();return Wt("",_,c-1,i,r)
}catch{}const l=Array.isArray(e)?[]:{};let f=0;const p=Qe(e);for(const _ in p){
if(!Object.prototype.hasOwnProperty.call(p,_))continue;if(f>=i){
l[_]="[MaxProperties ~]";break
}const d=p[_];l[_]=Wt(_,d,c-1,i,r),f++
}return s(e),l
}function oi(t,e){
try{
if(t==="domain"&&e&&typeof e=="object"&&e._events)return"[Domain]";if(t==="domainEmitter")return"[DomainEmitter]";if(typeof global<"u"&&e===global)return"[Global]";if(typeof window<"u"&&e===window)return"[Window]";if(typeof document<"u"&&e===document)return"[Document]";if(Je(e))return"[VueViewModel]";if(ir(e))return"[SyntheticEvent]";if(typeof e=="number"&&!Number.isFinite(e))return`[${e}]`;if(typeof e=="function")return`[Function: ${qr(e)}]`;if(typeof e=="symbol")return`[${String(e)}]`;if(typeof e=="bigint")return`[BigInt: ${String(e)}]`;const n=si(e);return/^HTML(\w*)Element$/.test(n)?`[HTMLElement: ${n}]`:`[object ${n}]`
}catch(n){
return`**non-serializable** (${n})`
}
}function si(t){
const e=Object.getPrototypeOf(t);return e!=null&&e.constructor?e.constructor.name:"null prototype"
}function ai(t){
return~-encodeURI(t).split(/%..|./).length
}function ci(t){
return ai(JSON.stringify(t))
}function ui(){
const t=new WeakSet;function e(i){
return t.has(i)?!0:(t.add(i),!1)
}function n(i){
t.delete(i)
}return[e,n]
}var L;(function(t){
t[t.PENDING=0]="PENDING";const n=1;t[t.RESOLVED=n]="RESOLVED";const i=2;t[t.REJECTED=i]="REJECTED"
})(L||(L={}));function So(t){
return new K(e=>{
e(t)
})
}function yo(t){
return new K((e,n)=>{
n(t)
})
}class K{
constructor(e){
this._state=L.PENDING,this._handlers=[],this._runExecutor(e)
}then(e,n){
return new K((i,r)=>{
this._handlers.push([!1,o=>{
if(!e)i(o);else try{
i(e(o))
}catch(s){
r(s)
}
},o=>{
if(!n)r(o);else try{
i(n(o))
}catch(s){
r(s)
}
}]),this._executeHandlers()
})
}catch(e){
return this.then(n=>n,e)
}finally(e){
return new K((n,i)=>{
let r,o;return this.then(s=>{
o=!1,r=s,e&&e()
},s=>{
o=!0,r=s,e&&e()
}).then(()=>{
if(o){
i(r);return
}n(r)
})
})
}_executeHandlers(){
if(this._state===L.PENDING)return;const e=this._handlers.slice();this._handlers=[],e.forEach(n=>{
n[0]||(this._state===L.RESOLVED&&n[1](this._value),this._state===L.REJECTED&&n[2](this._value),n[0]=!0)
})
}_runExecutor(e){
const n=(o,s)=>{
if(this._state===L.PENDING){
if(Jt(s)){
s.then(i,r);return
}this._state=o,this._value=s,this._executeHandlers()
}
},i=o=>{
n(L.RESOLVED,o)
},r=o=>{
n(L.REJECTED,o)
};try{
e(i,r)
}catch(o){
r(o)
}
}
}function Gt(t,e,n,i=0){
return new K((r,o)=>{
const s=t[i];if(e===null||typeof s!="function")r(e);else{
const a=s({...e},n);at&&s.id&&a===null&&k.log(`Event processor "${s.id}" dropped event`),Jt(a)?a.then(c=>Gt(t,c,n,i+1).then(r)).then(null,o):Gt(t,a,n,i+1).then(r).then(null,o)
}
})
}let Et,Re,St;function li(t){
const e=T._sentryDebugIds;if(!e)return{};const n=Object.keys(e);return St&&n.length===Re||(Re=n.length,St=n.reduce((i,r)=>{
Et||(Et={});const o=Et[r];if(o)i[o[0]]=o[1];else{
const s=t(r);for(let a=s.length-1;a>=0;a--){
const c=s[a],u=c==null?void 0:c.filename,l=e[r];if(u&&l){
i[u]=l,Et[r]=[u,l];break
}
}
}return i
},{})),St
}function fi(t,e){
const{fingerprint:n,span:i,breadcrumbs:r,sdkProcessingMetadata:o}=e;di(t,e),i&&gi(t,i),mi(t,n),pi(t,r),hi(t,o)
}function Oe(t,e){
const{extra:n,tags:i,user:r,contexts:o,level:s,sdkProcessingMetadata:a,breadcrumbs:c,fingerprint:u,eventProcessors:l,attachments:f,propagationContext:p,transactionName:_,span:d}=e;yt(t,"extra",n),yt(t,"tags",i),yt(t,"user",r),yt(t,"contexts",o),t.sdkProcessingMetadata=Dt(t.sdkProcessingMetadata,a,2),s&&(t.level=s),_&&(t.transactionName=_),d&&(t.span=d),c.length&&(t.breadcrumbs=[...t.breadcrumbs,...c]),u.length&&(t.fingerprint=[...t.fingerprint,...u]),l.length&&(t.eventProcessors=[...t.eventProcessors,...l]),f.length&&(t.attachments=[...t.attachments,...f]),t.propagationContext={...t.propagationContext,...p}
}function yt(t,e,n){
t[e]=Dt(t[e],n,1)
}function di(t,e){
const{extra:n,tags:i,user:r,contexts:o,level:s,transactionName:a}=e;Object.keys(n).length&&(t.extra={...n,...t.extra}),Object.keys(i).length&&(t.tags={...i,...t.tags}),Object.keys(r).length&&(t.user={...r,...t.user}),Object.keys(o).length&&(t.contexts={...o,...t.contexts}),s&&(t.level=s),a&&t.type!=="transaction"&&(t.transaction=a)
}function pi(t,e){
const n=[...t.breadcrumbs||[],...e];t.breadcrumbs=n.length?n:void 0
}function hi(t,e){
t.sdkProcessingMetadata={...t.sdkProcessingMetadata,...e}
}function gi(t,e){
t.contexts={trace:Fr(e),...t.contexts},t.sdkProcessingMetadata={dynamicSamplingContext:ri(e),...t.sdkProcessingMetadata};const n=ln(e),i=wt(n).description;i&&!t.transaction&&t.type==="transaction"&&(t.transaction=i)
}function mi(t,e){
t.fingerprint=t.fingerprint?Array.isArray(t.fingerprint)?t.fingerprint:[t.fingerprint]:[],e&&(t.fingerprint=t.fingerprint.concat(e)),t.fingerprint.length||delete t.fingerprint
}function bo(t,e,n,i,r,o){
const{normalizeDepth:s=3,normalizeMaxBreadth:a=1e3}=t,c={...e,event_id:e.event_id||n.event_id||$(),timestamp:e.timestamp||te()},u=n.integrations||t.integrations.map(g=>g.name);_i(c,t),yi(c,u),r&&r.emit("applyFrameMetadata",e),e.type===void 0&&Ei(c,t.stackParser);const l=vi(i,n.captureContext);n.mechanism&&en(c,n.mechanism);const f=r?r.getEventProcessors():[],p=Ir().getScopeData();if(o){
const g=o.getScopeData();Oe(p,g)
}if(l){
const g=l.getScopeData();Oe(p,g)
}const _=[...n.attachments||[],...p.attachments];_.length&&(n.attachments=_),fi(c,p);const d=[...f,...p.eventProcessors];return Gt(d,c,n).then(g=>(g&&Si(g),typeof s=="number"&&s>0?bi(g,s,a):g))
}function _i(t,e){
const{environment:n,release:i,dist:r,maxValueLength:o=250}=e;t.environment=t.environment||n||dn,!t.release&&i&&(t.release=i),!t.dist&&r&&(t.dist=r);const s=t.request;s!=null&&s.url&&(s.url=xt(s.url,o))
}function Ei(t,e){
var i,r;const n=li(e);(r=(i=t.exception)==null?void 0:i.values)==null||r.forEach(o=>{
var s,a;(a=(s=o.stacktrace)==null?void 0:s.frames)==null||a.forEach(c=>{
c.filename&&(c.debug_id=n[c.filename])
})
})
}function Si(t){
var i,r;const e={};if((r=(i=t.exception)==null?void 0:i.values)==null||r.forEach(o=>{
var s,a;(a=(s=o.stacktrace)==null?void 0:s.frames)==null||a.forEach(c=>{
c.debug_id&&(c.abs_path?e[c.abs_path]=c.debug_id:c.filename&&(e[c.filename]=c.debug_id),delete c.debug_id)
})
}),Object.keys(e).length===0)return;t.debug_meta=t.debug_meta||{},t.debug_meta.images=t.debug_meta.images||[];const n=t.debug_meta.images;Object.entries(e).forEach(([o,s])=>{
n.push({type:"sourcemap",code_file:o,debug_id:s})
})
}function yi(t,e){
e.length>0&&(t.sdk=t.sdk||{},t.sdk.integrations=[...t.sdk.integrations||[],...e])
}function bi(t,e,n){
var r,o;if(!t)return null;const i={...t,...t.breadcrumbs&&{breadcrumbs:t.breadcrumbs.map(s=>({...s,...s.data&&{data:M(s.data,e,n)}}))},...t.user&&{user:M(t.user,e,n)},...t.contexts&&{contexts:M(t.contexts,e,n)},...t.extra&&{extra:M(t.extra,e,n)}};return(r=t.contexts)!=null&&r.trace&&i.contexts&&(i.contexts.trace=t.contexts.trace,t.contexts.trace.data&&(i.contexts.trace.data=M(t.contexts.trace.data,e,n))),t.spans&&(i.spans=t.spans.map(s=>({...s,...s.data&&{data:M(s.data,e,n)}}))),(o=t.contexts)!=null&&o.flags&&i.contexts&&(i.contexts.flags=M(t.contexts.flags,3,n)),i
}function vi(t,e){
if(!e)return t;const n=t?t.clone():new R;return n.update(e),n
}function xi(t){
if(t)return Ci(t)?{captureContext:t}:Ti(t)?{captureContext:t}:t
}function Ci(t){
return t instanceof R||typeof t=="function"
}const ki=["user","level","extra","contexts","tags","fingerprint","propagationContext"];function Ti(t){
return Object.keys(t).some(e=>ki.includes(e))
}function mn(t,e){
return J().captureException(t,xi(e))
}function vo(t,e){
return J().captureEvent(t,e)
}function xo(t,e){
ut().setContext(t,e)
}function Ii(){
return ut().lastEventId()
}function Co(t){
const e=ut(),n=J(),{userAgent:i}=T.navigator||{},r=_r({user:n.getUser()||e.getUser(),...i&&{userAgent:i},...t}),o=e.getSession();return(o==null?void 0:o.status)==="ok"&&It(o,{status:"exited"}),_n(),e.setSession(r),r
}function _n(){
const t=ut(),n=J().getSession()||t.getSession();n&&Er(n),En(),t.setSession()
}function En(){
const t=ut(),e=lt(),n=t.getSession();n&&e&&e.captureSession(n)
}function ko(t=!1){
if(t){
_n();return
}En()
}const Di="7";function Sn(t){
const e=t.protocol?`${t.protocol}:`:"",n=t.port?`:${t.port}`:"";return`${e}//${t.host}${n}${t.path?`/${t.path}`:""}/api/`
}function wi(t){
return`${Sn(t)}${t.projectId}/envelope/`
}function Ni(t,e){
const n={sentry_version:Di};return t.publicKey&&(n.sentry_key=t.publicKey),e&&(n.sentry_client=`${e.name}/${e.version}`),new URLSearchParams(n).toString()
}function To(t,e,n){
return e||`${wi(t)}?${Ni(t,n)}`
}function Ri(t,e){
const n=ni(t);if(!n)return"";const i=`${Sn(n)}embed/error-page/`;let r=`dsn=${Zr(n)}`;for(const o in e)if(o!=="dsn"&&o!=="onClose")if(o==="user"){
const s=e.user;if(!s)continue;s.name&&(r+=`&name=${encodeURIComponent(s.name)}`),s.email&&(r+=`&email=${encodeURIComponent(s.email)}`)
}else r+=`&${encodeURIComponent(o)}=${encodeURIComponent(e[o])}`;return`${i}?${r}`
}const z=T;let zt=0;function Io(){
return zt>0
}function Oi(){
zt++,setTimeout(()=>{
zt--
})
}function Ai(t,e={}){
function n(r){
return typeof r=="function"
}if(!n(t))return t;try{
const r=t.__sentry_wrapped__;if(r)return typeof r=="function"?r:t;if(dr(t))return t
}catch{
return t
}const i=function(...r){
try{
const o=r.map(s=>Ai(s,e));return t.apply(this,o)
}catch(o){
throw Oi(),re(s=>{
s.addEventProcessor(a=>(e.mechanism&&(hr(a,void 0),en(a,e.mechanism)),a.extra={...a.extra,arguments:r},a)),mn(o)
}),o
}
};try{
for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])
}catch{}Ze(i,t),P(t,"__sentry_wrapped__",i);try{
Object.getOwnPropertyDescriptor(i,"name").configurable&&Object.defineProperty(i,"name",{get(){
return t.name
}})
}catch{}return i
}function Do(){
const t=cr(),{referrer:e}=z.document||{},{userAgent:n}=z.navigator||{},i={...e&&{Referer:e},...n&&{"User-Agent":n}};return{url:t,headers:i}
}const Ae=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__;function Le(t={}){
const e=z.document,n=(e==null?void 0:e.head)||(e==null?void 0:e.body);if(!n){
Ae&&k.error("[showReportDialog] Global document not defined");return
}const i=J(),r=lt(),o=r==null?void 0:r.getDsn();if(!o){
Ae&&k.error("[showReportDialog] DSN not configured");return
}const s={...t,user:{...i.getUser(),...t.user},eventId:t.eventId||Ii()},a=z.document.createElement("script");a.async=!0,a.crossOrigin="anonymous",a.src=Ri(o,s);const{onLoad:c,onClose:u}=s;if(c&&(a.onload=c),u){
const l=f=>{
if(f.data==="__sentry_reportdialog_closed__")try{
u()
}finally{
z.removeEventListener("message",l)
}
};z.addEventListener("message",l)
}n.appendChild(a)
}function Li(t){
const e=t.match(/^([^.]+)/);return e!==null&&parseInt(e[0])>=17
}function Pi(t,e){
const n=new WeakSet;function i(r,o){
if(!n.has(r)){
if(r.cause)return n.add(r),i(r.cause,o);r.cause=o
}
}i(t,e)
}function yn(t,{componentStack:e},n){
if(Li(h.version)&&Ke(t)&&e){
const i=new Error(t.message);i.name=`React ErrorBoundary ${t.name}`,i.stack=e,Pi(t,i)
}return re(i=>(i.setContext("react",{componentStack:e}),mn(t,n)))
}function wo(t){
return(e,n)=>{
const i=yn(e,n);t&&t(e,n,i)
}
}const Mi=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,Ft={componentStack:null,error:null,eventId:null};class No extends h.Component{
constructor(e){
super(e),this.state=Ft,this._openFallbackReportDialog=!0;const n=lt();n&&e.showDialog&&(this._openFallbackReportDialog=!1,this._cleanupHook=n.on("afterSendEvent",i=>{
!i.type&&this._lastEventId&&i.event_id===this._lastEventId&&Le({...e.dialogOptions,eventId:this._lastEventId})
}))
}componentDidCatch(e,n){
const{componentStack:i}=n,{beforeCapture:r,onError:o,showDialog:s,dialogOptions:a}=this.props;re(c=>{
r&&r(c,e,i);const u=this.props.handled!=null?this.props.handled:!!this.props.fallback,l=yn(e,n,{mechanism:{handled:u}});o&&o(e,i,l),s&&(this._lastEventId=l,this._openFallbackReportDialog&&Le({...a,eventId:l})),this.setState({error:e,componentStack:i,eventId:l})
})
}componentDidMount(){
const{onMount:e}=this.props;e&&e()
}componentWillUnmount(){
const{error:e,componentStack:n,eventId:i}=this.state,{onUnmount:r}=this.props;r&&(this.state===Ft?r(null,null,null):r(e,n,i)),this._cleanupHook&&(this._cleanupHook(),this._cleanupHook=void 0)
}resetErrorBoundary(){
const{onReset:e}=this.props,{error:n,componentStack:i,eventId:r}=this.state;e&&e(n,i,r),this.setState(Ft)
}render(){
const{fallback:e,children:n}=this.props,i=this.state;if(i.componentStack===null)return typeof n=="function"?n():n;const r=typeof e=="function"?h.createElement(e,{error:i.error,componentStack:i.componentStack,resetError:()=>this.resetErrorBoundary(),eventId:i.eventId}):e;return h.isValidElement(r)?r:(e&&Mi&&k.warn("fallback did not produce a valid ReactElement"),null)
}
}export{It as $,an as A,J as B,po as C,at as D,No as E,Bi as F,T as G,oo as H,lo as I,re as J,kt as K,ne as L,ve as M,_o as N,ut as O,fo as P,co as Q,wr as R,ro as S,uo as T,te as U,ni as V,To as W,$ as X,eo as Y,qi as Z,be as _,xe as a,So as a0,dn as a1,K as a2,bo as a3,no as a4,Eo as a5,yo as a6,tr as a7,Dt as a8,Jt as a9,Ae as aA,sr as aB,Ki as aC,Xi as aD,Ai as aE,Co as aF,ko as aG,Io as aH,vo as aI,cr as aJ,Do as aK,go as aL,xo as aM,Hi as aN,wo as aO,Pe as aP,Xe as aa,Qt as ab,rt as ac,dr as ad,to as ae,Ji as af,ct as ag,_e as ah,Zi as ai,Ee as aj,mo as ak,Ke as al,P as am,Yi as an,Wi as ao,Gi as ap,zi as aq,hr as ar,er as as,en as at,ii as au,Qi as av,z as aw,vt as ax,Gr as ay,Wr as az,rn as b,un as c,ln as d,Xt as e,Zr as f,qr as g,Yr as h,ri as i,ho as j,io as k,k as l,Rr as m,M as n,Or as o,cn as p,Ie as q,Dr as r,wt as s,ee as t,Vi as u,Ur as v,Vr as w,ao as x,so as y,lt as z};
