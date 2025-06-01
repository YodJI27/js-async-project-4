import{R as x}from"./index-f3ZQ7e7G.js";import{R as m}from"./index-OAUcaBCa.js";function R(e,s){
return e.classList?!!s&&e.classList.contains(s):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+s+" ")!==-1
}function M(e,s){
e.classList?e.classList.add(s):R(e,s)||(typeof e.className=="string"?e.className=e.className+" "+s:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+s))
}function O(e,s){
return e.replace(new RegExp("(^|\\s)"+s+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")
}function P(e,s){
e.classList?e.classList.remove(s):typeof e.className=="string"?e.className=O(e.className,s):e.setAttribute("class",O(e.className&&e.className.baseVal||"",s))
}function k(e,s){
if(e==null)return{};var o={};for(var a in e)if({}.hasOwnProperty.call(e,a)){
if(s.indexOf(a)!==-1)continue;o[a]=e[a]
}return o
}function b(e,s){
return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,a){
return o.__proto__=a,o
},b(e,s)
}function y(e,s){
e.prototype=Object.create(s.prototype),e.prototype.constructor=e,b(e,s)
}const S={disabled:!1},C=x.createContext(null);var D=function(s){
return s.scrollTop
},v="unmounted",l="exited",f="entering",h="entered",N="exiting",p=function(e){
y(s,e);function s(a,n){
var t;t=e.call(this,a,n)||this;var i=n,r=i&&!i.isMounting?a.enter:a.appear,u;return t.appearStatus=null,a.in?r?(u=l,t.appearStatus=f):u=h:a.unmountOnExit||a.mountOnEnter?u=v:u=l,t.state={status:u},t.nextCallback=null,t
}s.getDerivedStateFromProps=function(n,t){
var i=n.in;return i&&t.status===v?{status:l}:null
};var o=s.prototype;return o.componentDidMount=function(){
this.updateStatus(!0,this.appearStatus)
},o.componentDidUpdate=function(n){
var t=null;if(n!==this.props){
var i=this.state.status;this.props.in?i!==f&&i!==h&&(t=f):(i===f||i===h)&&(t=N)
}this.updateStatus(!1,t)
},o.componentWillUnmount=function(){
this.cancelNextCallback()
},o.getTimeouts=function(){
var n=this.props.timeout,t,i,r;return t=i=r=n,n!=null&&typeof n!="number"&&(t=n.exit,i=n.enter,r=n.appear!==void 0?n.appear:i),{exit:t,enter:i,appear:r}
},o.updateStatus=function(n,t){
if(n===void 0&&(n=!1),t!==null)if(this.cancelNextCallback(),t===f){
if(this.props.unmountOnExit||this.props.mountOnEnter){
var i=this.props.nodeRef?this.props.nodeRef.current:m.findDOMNode(this);i&&D(i)
}this.performEnter(n)
}else this.performExit();else this.props.unmountOnExit&&this.state.status===l&&this.setState({status:v})
},o.performEnter=function(n){
var t=this,i=this.props.enter,r=this.context?this.context.isMounting:n,u=this.props.nodeRef?[r]:[m.findDOMNode(this),r],c=u[0],E=u[1],T=this.getTimeouts(),g=r?T.appear:T.enter;if(!n&&!i||S.disabled){
this.safeSetState({status:h},function(){
t.props.onEntered(c)
});return
}this.props.onEnter(c,E),this.safeSetState({status:f},function(){
t.props.onEntering(c,E),t.onTransitionEnd(g,function(){
t.safeSetState({status:h},function(){
t.props.onEntered(c,E)
})
})
})
},o.performExit=function(){
var n=this,t=this.props.exit,i=this.getTimeouts(),r=this.props.nodeRef?void 0:m.findDOMNode(this);if(!t||S.disabled){
this.safeSetState({status:l},function(){
n.props.onExited(r)
});return
}this.props.onExit(r),this.safeSetState({status:N},function(){
n.props.onExiting(r),n.onTransitionEnd(i.exit,function(){
n.safeSetState({status:l},function(){
n.props.onExited(r)
})
})
})
},o.cancelNextCallback=function(){
this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)
},o.safeSetState=function(n,t){
t=this.setNextCallback(t),this.setState(n,t)
},o.setNextCallback=function(n){
var t=this,i=!0;return this.nextCallback=function(r){
i&&(i=!1,t.nextCallback=null,n(r))
},this.nextCallback.cancel=function(){
i=!1
},this.nextCallback
},o.onTransitionEnd=function(n,t){
this.setNextCallback(t);var i=this.props.nodeRef?this.props.nodeRef.current:m.findDOMNode(this),r=n==null&&!this.props.addEndListener;if(!i||r){
setTimeout(this.nextCallback,0);return
}if(this.props.addEndListener){
var u=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],c=u[0],E=u[1];this.props.addEndListener(c,E)
}n!=null&&setTimeout(this.nextCallback,n)
},o.render=function(){
var n=this.state.status;if(n===v)return null;var t=this.props,i=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var r=k(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return x.createElement(C.Provider,{value:null},typeof i=="function"?i(n,r):x.cloneElement(x.Children.only(i),r))
},s
}(x.Component);p.contextType=C;p.propTypes={};function d(){}p.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:d,onEntering:d,onEntered:d,onExit:d,onExiting:d,onExited:d};p.UNMOUNTED=v;p.EXITED=l;p.ENTERING=f;p.ENTERED=h;p.EXITING=N;export{h as E,p as T,k as _,f as a,N as b,l as c,M as d,y as e,D as f,P as r};
