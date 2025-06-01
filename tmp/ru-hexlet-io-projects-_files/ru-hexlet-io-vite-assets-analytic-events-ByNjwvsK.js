function tt(e,t,n,r,a){
for(t=t.split?t.split("."):t,r=0;r<t.length;r++)e=e?e[t[r]]:a;return e===a?n:e
}var _e="undefined",nt="object",Et="any",xt="*",ne="__",Me=typeof process<"u"?process:{};Me.env&&Me.env.NODE_ENV;var X=typeof document<"u";Me.versions!=null&&Me.versions.node!=null;typeof Deno<"u"&&Deno.core;X&&window.name==="nodejs"||typeof navigator<"u"&&navigator.userAgent!==void 0&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));function Ot(e,t){
return t.charAt(0)[e]()+t.slice(1)
}var Ft=Ot.bind(null,"toUpperCase"),Wt=Ot.bind(null,"toLowerCase");function Xt(e){
return _t(e)?Ft("null"):typeof e=="object"?Qt(e):Object.prototype.toString.call(e).slice(8,-1)
}function ze(e,t){
t===void 0&&(t=!0);var n=Xt(e);return t?Wt(n):n
}function xe(e,t){
return typeof t===e
}var H=xe.bind(null,"function"),ue=xe.bind(null,"string"),ae=xe.bind(null,"undefined"),Yt=xe.bind(null,"boolean");xe.bind(null,"symbol");function _t(e){
return e===null
}function Ht(e){
return ze(e)==="number"&&!isNaN(e)
}function Gt(e){
return ze(e)==="array"
}function J(e){
if(!Kt(e))return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t
}function Kt(e){
return e&&(typeof e=="object"||e!==null)
}function Qt(e){
return H(e.constructor)?e.constructor.name:null
}function Zt(e){
return e instanceof Error||ue(e.message)&&e.constructor&&Ht(e.constructor.stackTraceLimit)
}function kt(e,t){
if(typeof t!="object"||_t(t))return!1;if(t instanceof e)return!0;var n=ze(new e(""));if(Zt(t))for(;t;){
if(ze(t)===n)return!0;t=Object.getPrototypeOf(t)
}return!1
}kt.bind(null,TypeError);kt.bind(null,SyntaxError);function Ue(e,t){
var n=e instanceof Element||e instanceof HTMLDocument;return n&&t?en(e,t):n
}function en(e,t){
return t===void 0&&(t=""),e&&e.nodeName===t.toUpperCase()
}function De(e){
var t=[].slice.call(arguments,1);return function(){
return e.apply(void 0,[].slice.call(arguments).concat(t))
}
}De(Ue,"form");De(Ue,"button");De(Ue,"input");De(Ue,"select");function rt(e){
try{
return decodeURIComponent(e.replace(/\+/g," "))
}catch{
return null
}
}function tn(){
if(X){
var e=navigator,t=e.languages;return e.userLanguage||(t&&t.length?t[0]:e.language)
}
}function nn(){
try{
return Intl.DateTimeFormat().resolvedOptions().timeZone
}catch{}
}function rn(e){
return function(t){
for(var n,r=Object.create(null),a=/([^&=]+)=?([^&]*)/g;n=a.exec(t);){
var o=rt(n[1]),c=rt(n[2]);if(o)if(o.substring(o.length-2)==="[]"){
var s=r[o=o.substring(0,o.length-2)]||(r[o]=[]);r[o]=Array.isArray(s)?s:[],r[o].push(c)
}else r[o]=c===""||c
}for(var b in r){
var d=b.split("[");d.length>1&&(an(r,d.map(function(T){
return T.replace(/[?[\]\\ ]/g,"")
}),r[b]),delete r[b])
}return r
}(function(t){
return X&&window.location.search.substring(1)
}())
}function an(e,t,n){
for(var r=t.length-1,a=0;a<r;++a){
var o=t[a];if(o==="__proto__"||o==="constructor")break;o in e||(e[o]={}),e=e[o]
}e[t[r]]=n
}function Le(){
for(var e="",t=0,n=4294967295*Math.random()|0;t++<36;){
var r="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"[t-1],a=15&n;e+=r=="-"||r=="4"?r:(r=="x"?a:3&a|8).toString(16),n=t%8==0?4294967295*Math.random()|0:n>>4
}return e
}var we="global",fe=ne+"global"+ne,de=typeof self===nt&&self.self===self&&self||typeof global===nt&&global.global===global&&global||void 0;function re(e){
return de[fe][e]
}function ie(e,t){
return de[fe][e]=t
}function me(e){
delete de[fe][e]
}function ge(e,t,n){
var r;try{
if(Ye(e)){
var a=window[e];r=a[t].bind(a)
}
}catch{}return r||n
}de[fe]||(de[fe]={});var ke={};function Ye(e){
if(typeof ke[e]!==_e)return ke[e];try{
var t=window[e];t.setItem(_e,_e),t.removeItem(_e)
}catch{
return ke[e]=!1
}return ke[e]=!0
}function y(){
return y=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){
var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])
}return e
},y.apply(this,arguments)
}var Q="function",G="undefined",on="@@redux/"+Math.random().toString(36),it=function(){
return typeof Symbol===Q&&Symbol.observable||"@@observable"
}(),je=" != "+Q;function jt(e,t,n){
var r;if(typeof t===Q&&typeof n===G&&(n=t,t=void 0),typeof n!==G){
if(typeof n!==Q)throw new Error("enhancer"+je);return n(jt)(e,t)
}if(typeof e!==Q)throw new Error("reducer"+je);var a=e,o=t,c=[],s=c,b=!1;function d(){
s===c&&(s=c.slice())
}function T(){
return o
}function p(g){
if(typeof g!==Q)throw new Error("Listener"+je);var $=!0;return d(),s.push(g),function(){
if($){
$=!1,d();var S=s.indexOf(g);s.splice(S,1)
}
}
}function E(g){
if(!J(g))throw new Error("Act != obj");if(typeof g.type===G)throw new Error("ActType "+G);if(b)throw new Error("Dispatch in reducer");try{
b=!0,o=a(o,g)
}finally{
b=!1
}for(var $=c=s,S=0;S<$.length;S++)(0,$[S])();return g
}return E({type:"@@redux/INIT"}),(r={dispatch:E,subscribe:p,getState:T,replaceReducer:function(g){
if(typeof g!==Q)throw new Error("next reducer"+je);a=g,E({type:"@@redux/INIT"})
}})[it]=function(){
var g,$=p;return(g={subscribe:function(S){
if(typeof S!="object")throw new TypeError("Observer != obj");function w(){
S.next&&S.next(T())
}return w(),{unsubscribe:$(w)}
}})[it]=function(){
return this
},g
},r
}function un(e,t){
var n=t&&t.type;return"action "+(n&&n.toString()||"?")+"reducer "+e+" returns "+G
}function pe(){
var e=[].slice.call(arguments);return e.length===0?function(t){
return t
}:e.length===1?e[0]:e.reduce(function(t,n){
return function(){
return t(n.apply(void 0,[].slice.call(arguments)))
}
})
}function cn(){
var e=arguments;return function(t){
return function(n,r,a){
var o,c=t(n,r,a),s=c.dispatch,b={getState:c.getState,dispatch:function(d){
return s(d)
}};return o=[].slice.call(e).map(function(d){
return d(b)
}),y({},c,{dispatch:s=pe.apply(void 0,o)(c.dispatch)})
}
}
}var Z=ne+"anon_id",te=ne+"user_id",ce=ne+"user_traits",K="userId",oe="anonymousId",$e=["bootstrap","params","campaign","initializeStart","initialize","initializeEnd","ready","resetStart","reset","resetEnd","pageStart","page","pageEnd","pageAborted","trackStart","track","trackEnd","trackAborted","identifyStart","identify","identifyEnd","identifyAborted","userIdChanged","registerPlugins","enablePlugin","disablePlugin","online","offline","setItemStart","setItem","setItemEnd","setItemAborted","removeItemStart","removeItem","removeItemEnd","removeItemAborted"],We=["name","EVENTS","config","loaded"],v=$e.reduce(function(e,t){
return e[t]=t,e
},{registerPluginType:function(e){
return"registerPlugin:"+e
},pluginReadyType:function(e){
return"ready:"+e
}}),at=/^utm_/,ot=/^an_prop_/,ut=/^an_trait_/;function sn(e){
var t=e.storage.setItem;return function(n){
return function(r){
return function(a){
if(a.type===v.bootstrap){
var o=a.params,c=a.user,s=a.persistedUser,b=a.initialUser,d=s.userId===c.userId;s.anonymousId!==c.anonymousId&&t(Z,c.anonymousId),d||t(te,c.userId),b.traits&&t(ce,y({},d&&s.traits?s.traits:{},b.traits));var T=Object.keys(a.params);if(T.length){
var p=o.an_uid,E=o.an_event,g=T.reduce(function($,S){
if(S.match(at)||S.match(/^(d|g)clid/)){
var w=S.replace(at,"");$.campaign[w==="campaign"?"name":w]=o[S]
}return S.match(ot)&&($.props[S.replace(ot,"")]=o[S]),S.match(ut)&&($.traits[S.replace(ut,"")]=o[S]),$
},{campaign:{},props:{},traits:{}});n.dispatch(y({type:v.params,raw:o},g,p?{userId:p}:{})),p&&setTimeout(function(){
return e.identify(p,g.traits)
},0),E&&setTimeout(function(){
return e.track(E,g.props)
},0),Object.keys(g.campaign).length&&n.dispatch({type:v.campaign,campaign:g.campaign})
}
}return r(a)
}
}
}
}function ln(e){
return function(t,n){
if(t===void 0&&(t={}),n===void 0&&(n={}),n.type===v.setItemEnd){
if(n.key===Z)return y({},t,{anonymousId:n.value});if(n.key===te)return y({},t,{userId:n.value})
}switch(n.type){
case v.identify:return Object.assign({},t,{userId:n.userId,traits:y({},t.traits,n.traits)});case v.reset:return[te,Z,ce].forEach(function(r){
e.removeItem(r)
}),Object.assign({},t,{userId:null,anonymousId:null,traits:{}});default:return t
}
}
}function ct(e){
return{userId:e.getItem(te),anonymousId:e.getItem(Z),traits:e.getItem(ce)}
}var Xe=function(e){
return ne+"TEMP"+ne+e
};function fn(e){
var t=e.storage,n=t.setItem,r=t.removeItem,a=t.getItem;return function(o){
return function(c){
return function(s){
var b=s.userId,d=s.traits,T=s.options;if(s.type===v.reset&&([te,ce,Z].forEach(function(g){
r(g)
}),[K,oe,"traits"].forEach(function(g){
me(Xe(g))
})),s.type===v.identify){
a(Z)||n(Z,Le());var p=a(te),E=a(ce)||{};p&&p!==b&&o.dispatch({type:v.userIdChanged,old:{userId:p,traits:E},new:{userId:b,traits:d},options:T}),b&&n(te,b),d&&n(ce,y({},E,d))
}return c(s)
}
}
}
}var be={};function st(e,t){
be[e]&&H(be[e])&&(be[e](t),delete be[e])
}function Nt(e,t,n){
return new Promise(function(r,a){
return t()?r(e):n<1?a(y({},e,{queue:!0})):new Promise(function(o){
return setTimeout(o,10)
}).then(function(o){
return Nt(e,t,n-10).then(r,a)
})
})
}function dn(e){
return{abort:e}
}function At(e,t,n){
var r={},a=t(),o=e.getState(),c=o.plugins,s=o.queue,b=o.user;if(!o.context.offline&&s&&s.actions&&s.actions.length){
var d=s.actions.reduce(function(p,E,g){
return c[E.plugin].loaded?(p.process.push(E),p.processIndex.push(g)):(p.requeue.push(E),p.requeueIndex.push(g)),p
},{processIndex:[],process:[],requeue:[],requeueIndex:[]});if(d.processIndex&&d.processIndex.length){
d.processIndex.forEach(function(p){
var E=s.actions[p],g=E.plugin,$=E.payload.type,S=a[g][$];if(S&&H(S)){
var w,k=function(m,l){
return m===void 0&&(m={}),l===void 0&&(l={}),[K,oe].reduce(function(z,x){
return m.hasOwnProperty(x)&&l[x]&&l[x]!==m[x]&&(z[x]=l[x]),z
},m)
}(E.payload,b),M=r[k.meta.rid];if(!M&&(w=S({payload:k,config:c[g].config,instance:n,abort:dn}))&&J(w)&&w.abort)return void(r[k.meta.rid]=!0);if(!M){
var A=$+":"+g;e.dispatch(y({},k,{type:A,_:{called:A,from:"queueDrain"}}))
}
}
});var T=s.actions.filter(function(p,E){
return!~d.processIndex.indexOf(E)
});s.actions=T
}
}
}var Re=function(e){
var t=e.data,n=e.action,r=e.instance,a=e.state,o=e.allPlugins,c=e.allMatches,s=e.store,b=e.EVENTS;try{
var d=a.plugins,T=a.context,p=n.type,E=p.match(se),g=t.exact.map(function(w){
return w.pluginName
});E&&(g=c.during.map(function(w){
return w.pluginName
}));var $=function(w,k){
return function(M,A,m){
var l=A.config,z=A.name,x=z+"."+M.type;m&&(x=m.event);var j=M.type.match(se)?function(D,U,F,L,W){
return function(q,h){
var R=L?L.name:D,B=h&&Ee(h)?h:F;if(L&&(!(B=h&&Ee(h)?h:[D]).includes(D)||B.length!==1))throw new Error("Method "+U+" can only abort "+D+" plugin. "+JSON.stringify(B)+" input valid");return y({},W,{abort:{reason:q,plugins:B,caller:U,_:R}})
}
}(z,x,k,m,M):function(D,U){
return function(){
throw new Error(D.type+" action not cancellable. Remove abort in "+U)
}
}(M,x);return{payload:pn(M),instance:w,config:l||{},abort:j}
}
}(r,g),S=t.exact.reduce(function(w,k){
var M=k.pluginName,A=k.methodName,m=!1;return A.match(/^initialize/)||A.match(/^reset/)||(m=!d[M].loaded),T.offline&&A.match(/^(page|track|identify)/)&&(m=!0),w[""+M]=m,w
},{});return Promise.resolve(t.exact.reduce(function(w,k,M){
try{
var A=k.pluginName;return Promise.resolve(w).then(function(m){
function l(){
return Promise.resolve(m)
}var z=function(){
if(t.namespaced&&t.namespaced[A])return Promise.resolve(t.namespaced[A].reduce(function(x,j,D){
try{
return Promise.resolve(x).then(function(U){
return j.method&&H(j.method)?(function(q,h){
var R=vt(q);if(R&&R.name===h){
var B=vt(R.method);throw new Error([h+" plugin is calling method "+q,"Plugins cant call self","Use "+R.method+" "+(B?"or "+B.method:"")+" in "+h+" plugin insteadof "+q].join(`
`))
}
}(j.methodName,j.pluginName),Promise.resolve(j.method({payload:U,instance:r,abort:(F=U,L=A,W=j.pluginName,function(q,h){
return y({},F,{abort:{reason:q,plugins:h||[L],caller:p,from:W||L}})
}),config:dt(j.pluginName,d,o),plugins:d})).then(function(q){
var h=J(q)?q:{};return Promise.resolve(y({},U,h))
})):U;var F,L,W
})
}catch(U){
return Promise.reject(U)
}
},Promise.resolve(n))).then(function(x){
m[A]=x
});m[A]=n
}();return z&&z.then?z.then(l):l()
})
}catch(m){
return Promise.reject(m)
}
},Promise.resolve({}))).then(function(w){
return Promise.resolve(t.exact.reduce(function(k,M,A){
try{
var m=t.exact.length===A+1,l=M.pluginName,z=o[l];return Promise.resolve(k).then(function(x){
var j=w[l]?w[l]:{};if(E&&(j=x),Je(j,l))return Be({data:j,method:p,instance:r,pluginName:l,store:s}),Promise.resolve(x);if(Je(x,l))return m&&Be({data:x,method:p,instance:r,store:s}),Promise.resolve(x);if(S.hasOwnProperty(l)&&S[l]===!0)return s.dispatch({type:"queue",plugin:l,payload:j,_:{called:"queue",from:"queueMechanism"}}),Promise.resolve(x);var D=$(w[l],o[l]);return Promise.resolve(z[p]({abort:D.abort,payload:j,instance:r,config:dt(l,d,o),plugins:d})).then(function(U){
var F=J(U)?U:{},L=y({},x,F),W=w[l];if(Je(W,l))Be({data:W,method:p,instance:r,pluginName:l,store:s});else{
var q=p+":"+l;(q.match(/:/g)||[]).length<2&&!p.match(lt)&&!p.match(ft)&&r.dispatch(y({},E?L:j,{type:q,_:{called:q,from:"submethod"}}))
}return Promise.resolve(L)
})
})
}catch(x){
return Promise.reject(x)
}
},Promise.resolve(n))).then(function(k){
if(!(p.match(se)||p.match(/^registerPlugin/)||p.match(ft)||p.match(lt)||p.match(/^params/)||p.match(/^userIdChanged/))){
if(b.plugins.includes(p),k._&&k._.originalAction===p)return k;var M=y({},k,{_:{originalAction:k.type,called:k.type,from:"engineEnd"}});Tt(k,t.exact.length)&&!p.match(/End$/)&&(M=y({},M,{type:k.type+"Aborted"})),s.dispatch(M)
}return k
})
})
}catch(w){
return Promise.reject(w)
}
},se=/Start$/,lt=/^bootstrap/,ft=/^ready/;function Be(e){
var t=e.pluginName,n=e.method+"Aborted"+(t?":"+t:"");e.store.dispatch(y({},e.data,{type:n,_:{called:n,from:"abort"}}))
}function dt(e,t,n){
var r=t[e]||n[e];return r&&r.config?r.config:{}
}function pt(e,t){
return t.reduce(function(n,r){
return r[e]?n.concat({methodName:e,pluginName:r.name,method:r[e]}):n
},[])
}function mt(e,t){
var n=e.replace(se,""),r=t?":"+t:"";return[""+e+r,""+n+r,n+"End"+r]
}function Je(e,t){
var n=e.abort;return!!n&&(n===!0||gt(n,t)||n&&gt(n.plugins,t))
}function Tt(e,t){
var n=e.abort;if(!n)return!1;if(n===!0||ue(n))return!0;var r=n.plugins;return Ee(n)&&n.length===t||Ee(r)&&r.length===t
}function Ee(e){
return Array.isArray(e)
}function gt(e,t){
return!(!e||!Ee(e))&&e.includes(t)
}function vt(e){
var t=e.match(/(.*):(.*)/);return!!t&&{method:t[1],name:t[2]}
}function pn(e){
return Object.keys(e).reduce(function(t,n){
return n==="type"||(t[n]=J(e[n])?Object.assign({},e[n]):e[n]),t
},{})
}function mn(e,t,n){
var r={};return function(a){
return function(o){
return function(c){
try{
var s,b=function(m){
return s?m:o(p)
},d=c.type,T=c.plugins,p=c;if(c.abort)return Promise.resolve(o(c));if(d===v.enablePlugin&&a.dispatch({type:v.initializeStart,plugins:T,disabled:[],fromEnable:!0,meta:c.meta}),d===v.disablePlugin&&setTimeout(function(){
return st(c.meta.rid,{payload:c})
},0),d===v.initializeEnd){
var E=t(),g=Object.keys(E),$=g.filter(function(m){
return T.includes(m)
}).map(function(m){
return E[m]
}),S=[],w=[],k=c.disabled,M=$.map(function(m){
var l=m.loaded,z=m.name,x=m.config;return Nt(m,function(){
return l({config:x})
},1e4).then(function(j){
return r[z]||(a.dispatch({type:v.pluginReadyType(z),name:z,events:Object.keys(m).filter(function(D){
return!We.includes(D)
})}),r[z]=!0),S=S.concat(z),m
}).catch(function(j){
if(j instanceof Error)throw new Error(j);return w=w.concat(j.name),j
})
});Promise.all(M).then(function(m){
var l={plugins:S,failed:w,disabled:k};setTimeout(function(){
g.length===M.length+k.length&&a.dispatch(y({},{type:v.ready},l))
},0)
})
}var A=function(){
if(d!==v.bootstrap)return/^ready:([^:]*)$/.test(d)&&setTimeout(function(){
return At(a,t,e)
},0),Promise.resolve(function(m,l,z,x,j){
try{
var D=H(l)?l():l,U=m.type,F=U.replace(se,"");if(m._&&m._.called)return Promise.resolve(m);var L=z.getState(),W=(R=D,(B=L.plugins)===void 0&&(B={}),(ve=m.options)===void 0&&(ve={}),Object.keys(R).filter(function(i){
var u=ve.plugins||{};return Yt(u[i])?u[i]:u.all!==!1&&(!B[i]||B[i].enabled!==!1)
}).map(function(i){
return R[i]
}));U===v.initializeStart&&m.fromEnable&&(W=Object.keys(L.plugins).filter(function(i){
var u=L.plugins[i];return m.plugins.includes(i)&&!u.initialized
}).map(function(i){
return D[i]
}));var q=W.map(function(i){
return i.name
}),h=function(i,u,f){
var I=mt(i).map(function(P){
return pt(P,u)
});return u.reduce(function(P,O){
var V=O.name,N=mt(i,V).map(function(ye){
return pt(ye,u)
}),C=N[0],_=N[1],Y=N[2];return C.length&&(P.beforeNS[V]=C),_.length&&(P.duringNS[V]=_),Y.length&&(P.afterNS[V]=Y),P
},{before:I[0],beforeNS:{},during:I[1],duringNS:{},after:I[2],afterNS:{}})
}(U,W);return Promise.resolve(Re({action:m,data:{exact:h.before,namespaced:h.beforeNS},state:L,allPlugins:D,allMatches:h,instance:z,store:x,EVENTS:j})).then(function(i){
function u(){
var P=function(){
if(U.match(se))return Promise.resolve(Re({action:y({},f,{type:F+"End"}),data:{exact:h.after,namespaced:h.afterNS},state:L,allPlugins:D,allMatches:h,instance:z,store:x,EVENTS:j})).then(function(O){
O.meta&&O.meta.hasCallback&&st(O.meta.rid,{payload:O})
})
}();return P&&P.then?P.then(function(){
return i
}):i
}if(Tt(i,q.length))return i;var f,I=function(){
if(U!==F)return Promise.resolve(Re({action:y({},i,{type:F}),data:{exact:h.during,namespaced:h.duringNS},state:L,allPlugins:D,allMatches:h,instance:z,store:x,EVENTS:j})).then(function(P){
f=P
});f=i
}();return I&&I.then?I.then(u):u()
})
}catch(i){
return Promise.reject(i)
}var R,B,ve
}(c,t,e,a,n)).then(function(m){
return s=1,o(m)
})
}();return Promise.resolve(A&&A.then?A.then(b):b(A))
}catch(m){
return Promise.reject(m)
}
}
}
}
}function gn(e){
return function(t){
return function(n){
return function(r){
var a=r.type,o=r.key,c=r.value,s=r.options;if(a===v.setItem||a===v.removeItem){
if(r.abort)return n(r);a===v.setItem?e.setItem(o,c,s):e.removeItem(o,s)
}return n(r)
}
}
}
}var vn=function(){
var e=this;this.before=[],this.after=[],this.addMiddleware=function(t,n){
e[n]=e[n].concat(t)
},this.removeMiddleware=function(t,n){
var r=e[n].findIndex(function(a){
return a===t
});r!==-1&&(e[n]=[].concat(e[n].slice(0,r),e[n].slice(r+1)))
},this.dynamicMiddlewares=function(t){
return function(n){
return function(r){
return function(a){
var o={getState:n.getState,dispatch:function(s){
return n.dispatch(s)
}},c=e[t].map(function(s){
return s(o)
});return pe.apply(void 0,c)(r)(a)
}
}
}
}
};function yn(e){
return function(t,n){
t===void 0&&(t={});var r={};if(n.type==="initialize:aborted")return t;if(/^registerPlugin:([^:]*)$/.test(n.type)){
var a=yt(n.type,"registerPlugin"),o=e()[a];if(!o||!a)return t;var c=n.enabled,s=o.config;return r[a]={enabled:c,initialized:!!c&&!o.initialize,loaded:!!c&&!!o.loaded({config:s}),config:s},y({},t,r)
}if(/^initialize:([^:]*)$/.test(n.type)){
var b=yt(n.type,v.initialize),d=e()[b];return d&&b?(r[b]=y({},t[b],{initialized:!0,loaded:!!d.loaded({config:d.config})}),y({},t,r)):t
}if(/^ready:([^:]*)$/.test(n.type))return r[n.name]=y({},t[n.name],{loaded:!0}),y({},t,r);switch(n.type){
case v.disablePlugin:return y({},t,ht(n.plugins,!1,t));case v.enablePlugin:return y({},t,ht(n.plugins,!0,t));default:return t
}
}
}function yt(e,t){
return e.substring(t.length+1,e.length)
}function ht(e,t,n){
return e.reduce(function(r,a){
return r[a]=y({},n[a],{enabled:t}),r
},n)
}function $t(e){
try{
return JSON.parse(JSON.stringify(e))
}catch{}return e
}var hn={last:{},history:[]};function bn(e,t){
e===void 0&&(e=hn);var n=t.options,r=t.meta;if(t.type===v.track){
var a=$t(y({event:t.event,properties:t.properties},Object.keys(n).length&&{options:n},{meta:r}));return y({},e,{last:a,history:e.history.concat(a)})
}return e
}var wn={actions:[]};function In(e,t){
e===void 0&&(e=wn);var n=t.payload;switch(t.type){
case"queue":var r;return r=n&&n.type&&n.type===v.identify?[t].concat(e.actions):e.actions.concat(t),y({},e,{actions:r});case"dequeue":return[];default:return e
}
}var Mt=/#.*$/;function Pn(e){
var t=/(http[s]?:\/\/)?([^\/\s]+\/)(.*)/g.exec(e);return"/"+(t&&t[3]?t[3].split("?")[0].replace(Mt,""):"")
}var zt,Ut,Dt,Lt,Sn=function(e){
if(e===void 0&&(e={}),!X)return e;var t=document,n=t.title,r=t.referrer,a=window,o=a.location,c=a.innerWidth,s=a.innerHeight,b=o.hash,d=o.search,T=function(E){
var g=function(){
if(X){
for(var $,S=document.getElementsByTagName("link"),w=0;$=S[w];w++)if($.getAttribute("rel")==="canonical")return $.getAttribute("href")
}
}();return g?g.match(/\?/)?g:g+E:window.location.href.replace(Mt,"")
}(d),p={title:n,url:T,path:Pn(T),hash:b,search:d,width:c,height:s};return r&&r!==""&&(p.referrer=r),y({},p,e)
},En={last:{},history:[]};function xn(e,t){
e===void 0&&(e=En);var n=t.options;if(t.type===v.page){
var r=$t(y({properties:t.properties,meta:t.meta},Object.keys(n).length&&{options:n}));return y({},e,{last:r,history:e.history.concat(r)})
}return e
}zt=function(){
if(!X)return!1;var e=navigator.appVersion;return~e.indexOf("Win")?"Windows":~e.indexOf("Mac")?"MacOS":~e.indexOf("X11")?"UNIX":~e.indexOf("Linux")?"Linux":"Unknown OS"
}(),Ut=X?document.referrer:null,Dt=tn(),Lt=nn();var bt={initialized:!1,sessionId:Le(),app:null,version:null,debug:!1,offline:!!X&&!navigator.onLine,os:{name:zt},userAgent:X?navigator.userAgent:"node",library:{name:"analytics",version:"0.12.16"},timezone:Lt,locale:Dt,campaign:{},referrer:Ut};function On(e,t){
e===void 0&&(e=bt);var n=e.initialized,r=t.campaign;switch(t.type){
case v.campaign:return y({},e,{campaign:r});case v.offline:return y({},e,{offline:!0});case v.online:return y({},e,{offline:!1});default:return n?e:y({},bt,e,{initialized:!0})
}
}var _n=["plugins","reducers","storage"];function kn(e,t,n){
if(X){
var r=window[(n?"add":"remove")+"EventListener"];e.split(" ").forEach(function(a){
r(a,t)
})
}
}function jn(e){
var t=kn.bind(null,"online offline",function(n){
return Promise.resolve(!navigator.onLine).then(e)
});return t(!0),function(n){
return t(!1)
}
}function Ct(){
return ie("analytics",[]),function(e){
return function(t,n,r){
var a=e(t,n,r),o=a.dispatch;return Object.assign(a,{dispatch:function(c){
return de[fe].analytics.push(c.action||c),o(c)
}})
}
}
}function wt(e){
return function(){
return pe(pe.apply(null,arguments),Ct())
}
}function Fe(e){
return e?Gt(e)?e:[e]:[]
}function It(e,t,n){
e===void 0&&(e={});var r,a,o=Le();return t&&(be[o]=(r=t,a=function(c){
for(var s,b=c||Array.prototype.slice.call(arguments),d=0;d<b.length;d++)if(H(b[d])){
s=b[d];break
}return s
}(n),function(c){
a&&a(c),r(c)
})),y({},e,{rid:o,ts:new Date().getTime()},t?{hasCallback:!0}:{})
}function Nn(e){
e===void 0&&(e={});var t=e.reducers||{},n=e.initialUser||{},r=(e.plugins||[]).reduce(function(i,u){
if(H(u))return i.middlewares=i.middlewares.concat(u),i;if(u.NAMESPACE&&(u.name=u.NAMESPACE),!u.name)throw new Error("https://lytics.dev/errors/1");u.config||(u.config={});var f=u.EVENTS?Object.keys(u.EVENTS).map(function(O){
return u.EVENTS[O]
}):[];i.pluginEnabled[u.name]=!(u.enabled===!1||u.config.enabled===!1),delete u.enabled,u.methods&&(i.methods[u.name]=Object.keys(u.methods).reduce(function(O,V){
var N;return O[V]=(N=u.methods[V],function(){
for(var C=Array.prototype.slice.call(arguments),_=new Array(N.length),Y=0;Y<C.length;Y++)_[Y]=C[Y];return _[_.length]=l,N.apply({instance:l},_)
}),O
},{}),delete u.methods);var I=Object.keys(u).concat(f),P=new Set(i.events.concat(I));if(i.events=Array.from(P),i.pluginsArray=i.pluginsArray.concat(u),i.plugins[u.name])throw new Error(u.name+"AlreadyLoaded");return i.plugins[u.name]=u,i.plugins[u.name].loaded||(i.plugins[u.name].loaded=function(){
return!0
}),i
},{plugins:{},pluginEnabled:{},methods:{},pluginsArray:[],middlewares:[],events:[]}),a=e.storage?e.storage:{getItem:re,setItem:ie,removeItem:me},o=function(i){
return function(u,f,I){
return f.getState("user")[u]||(I&&J(I)&&I[u]?I[u]:ct(i)[u]||re(Xe(u))||null)
}
}(a),c=r.plugins,s=r.events.filter(function(i){
return!We.includes(i)
}).sort(),b=new Set(s.concat($e).filter(function(i){
return!We.includes(i)
})),d=Array.from(b).sort(),T=function(){
return c
},p=new vn,E=p.addMiddleware,g=p.removeMiddleware,$=p.dynamicMiddlewares,S=function(){
throw new Error("Abort disabled inListener")
},w=rn(),k=ct(a),M=y({},k,n,w.an_uid?{userId:w.an_uid}:{},w.an_aid?{anonymousId:w.an_aid}:{});M.anonymousId||(M.anonymousId=Le());var A=y({enable:function(i,u){
return new Promise(function(f){
h.dispatch({type:v.enablePlugin,plugins:Fe(i),_:{originalAction:v.enablePlugin}},f,[u])
})
},disable:function(i,u){
return new Promise(function(f){
h.dispatch({type:v.disablePlugin,plugins:Fe(i),_:{originalAction:v.disablePlugin}},f,[u])
})
}},r.methods),m=!1,l={identify:function(i,u,f,I){
try{
var P=ue(i)?i:null,O=J(i)?i:u,V=f||{},N=l.user();ie(Xe(K),P);var C=P||O.userId||o(K,l,O);return Promise.resolve(new Promise(function(_){
h.dispatch(y({type:v.identifyStart,userId:C,traits:O||{},options:V,anonymousId:N.anonymousId},N.id&&N.id!==P&&{previousId:N.id}),_,[u,f,I])
}))
}catch(_){
return Promise.reject(_)
}
},track:function(i,u,f,I){
try{
var P=J(i)?i.event:i;if(!P||!ue(P))throw new Error("EventMissing");var O=J(i)?i:u||{},V=J(f)?f:{};return Promise.resolve(new Promise(function(N){
h.dispatch({type:v.trackStart,event:P,properties:O,options:V,userId:o(K,l,u),anonymousId:o(oe,l,u)},N,[u,f,I])
}))
}catch(N){
return Promise.reject(N)
}
},page:function(i,u,f){
try{
var I=J(i)?i:{},P=J(u)?u:{};return Promise.resolve(new Promise(function(O){
h.dispatch({type:v.pageStart,properties:Sn(I),options:P,userId:o(K,l,I),anonymousId:o(oe,l,I)},O,[i,u,f])
}))
}catch(O){
return Promise.reject(O)
}
},user:function(i){
if(i===K||i==="id")return o(K,l);if(i===oe||i==="anonId")return o(oe,l);var u=l.getState("user");return i?tt(u,i):u
},reset:function(i){
return new Promise(function(u){
h.dispatch({type:v.resetStart},u,i)
})
},ready:function(i){
return m&&i({plugins:A,instance:l}),l.on(v.ready,function(u){
i(u),m=!0
})
},on:function(i,u){
if(!i||!H(u))return!1;if(i===v.bootstrap)throw new Error(".on disabled for "+i);var f=/Start$|Start:/;if(i==="*"){
var I=function(N){
return function(C){
return function(_){
return _.type.match(f)&&u({payload:_,instance:l,plugins:c}),C(_)
}
}
},P=function(N){
return function(C){
return function(_){
return _.type.match(f)||u({payload:_,instance:l,plugins:c}),C(_)
}
}
};return E(I,Ne),E(P,Ae),function(){
g(I,Ne),g(P,Ae)
}
}var O=i.match(f)?Ne:Ae,V=function(N){
return function(C){
return function(_){
return _.type===i&&u({payload:_,instance:l,plugins:c,abort:S}),C(_)
}
}
};return E(V,O),function(){
return g(V,O)
}
},once:function(i,u){
if(!i||!H(u))return!1;if(i===v.bootstrap)throw new Error(".once disabled for "+i);var f=l.on(i,function(I){
u({payload:I.payload,instance:l,plugins:c,abort:S}),f()
});return f
},getState:function(i){
var u=h.getState();return i?tt(u,i):Object.assign({},u)
},dispatch:function(i){
var u=ue(i)?{type:i}:i;if($e.includes(u.type))throw new Error("reserved action "+u.type);var f=y({},u,{_:y({originalAction:u.type},i._||{})});h.dispatch(f)
},enablePlugin:A.enable,disablePlugin:A.disable,plugins:A,storage:{getItem:a.getItem,setItem:function(i,u,f){
h.dispatch({type:v.setItemStart,key:i,value:u,options:f})
},removeItem:function(i,u){
h.dispatch({type:v.removeItemStart,key:i,options:u})
}},setAnonymousId:function(i,u){
l.storage.setItem(Z,i,u)
},events:{core:$e,plugins:s}},z=r.middlewares.concat([function(i){
return function(u){
return function(f){
return f.meta||(f.meta=It()),u(f)
}
}
},$(Ne),mn(l,T,{all:d,plugins:s}),gn(a),sn(l),fn(l),$(Ae)]),x={context:On,user:ln(a),page:xn,track:bn,plugins:yn(T),queue:In},j=pe,D=pe;if(X&&e.debug){
var U=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;U&&(j=U({trace:!0,traceLimit:25})),D=function(){
return arguments.length===0?Ct():J(typeof arguments[0])?wt():wt().apply(null,arguments)
}
}var F,L=function(i){
return Object.keys(i).reduce(function(u,f){
return _n.includes(f)||(u[f]=i[f]),u
},{})
}(e),W=r.pluginsArray.reduce(function(i,u){
var f=u.name,I=u.config,P=u.loaded,O=r.pluginEnabled[f];return i[f]={enabled:O,initialized:!!O&&!u.initialize,loaded:!!P({config:I}),config:I},i
},{}),q={context:L,user:M,plugins:W},h=jt(function(i){
for(var u=Object.keys(i),f={},I=0;I<u.length;I++){
var P=u[I];typeof i[P]===Q&&(f[P]=i[P])
}var O,V=Object.keys(f);try{
(function(N){
Object.keys(N).forEach(function(C){
var _=N[C];if(typeof _(void 0,{type:"@@redux/INIT"})===G||typeof _(void 0,{type:on})===G)throw new Error("reducer "+C+" "+G)
})
})(f)
}catch(N){
O=N
}return function(N,C){
if(N===void 0&&(N={}),O)throw O;for(var _=!1,Y={},ye=0;ye<V.length;ye++){
var Oe=V[ye],et=N[Oe],Ve=(0,f[Oe])(et,C);if(typeof Ve===G){
var Jt=un(Oe,C);throw new Error(Jt)
}Y[Oe]=Ve,_=_||Ve!==et
}return _?Y:N
}
}(y({},x,t)),q,D(j(cn.apply(void 0,z))));h.dispatch=(F=h.dispatch,function(i,u,f){
var I=y({},i,{meta:It(i.meta,u,Fe(f))});return F.apply(null,[I])
});var R=Object.keys(c);h.dispatch({type:v.bootstrap,plugins:R,config:L,params:w,user:M,initialUser:n,persistedUser:k});var B=R.filter(function(i){
return r.pluginEnabled[i]
}),ve=R.filter(function(i){
return!r.pluginEnabled[i]
});return h.dispatch({type:v.registerPlugins,plugins:R,enabled:r.pluginEnabled}),r.pluginsArray.map(function(i,u){
var f=i.bootstrap,I=i.config,P=i.name;f&&H(f)&&f({instance:l,config:I,payload:i}),h.dispatch({type:v.registerPluginType(P),name:P,enabled:r.pluginEnabled[P],plugin:i}),r.pluginsArray.length===u+1&&h.dispatch({type:v.initializeStart,plugins:B,disabled:ve})
}),jn(function(i){
h.dispatch({type:i?v.offline:v.online})
}),function(i,u,f){
setInterval(function(){
return At(i,u,f)
},3e3)
}(h,T,l),l
}var Ne="before",Ae="after",Ie="cookie",ee=Rt(),qt=Ce,An=Ce;function Vt(e){
return ee?Ce(e,"",-1):me(e)
}function Rt(){
if(ee!==void 0)return ee;var e="cookiecookie";try{
Ce(e,e),ee=document.cookie.indexOf(e)!==-1,Vt(e)
}catch{
ee=!1
}return ee
}function Ce(e,t,n,r,a,o){
if(typeof window<"u"){
var c=arguments.length>1;return ee===!1&&(c?ie(e,t):re(e)),c?document.cookie=e+"="+encodeURIComponent(t)+(n?"; expires="+new Date(+new Date+1e3*n).toUTCString()+(r?"; path="+r:"")+(a?"; domain="+a:"")+(o?"; secure":""):""):decodeURIComponent((("; "+document.cookie).split("; "+e+"=")[1]||"").split(";")[0])
}
}var Pe="localStorage",Tn=Ye.bind(null,"localStorage");ge("localStorage","getItem",re);ge("localStorage","setItem",ie);ge("localStorage","removeItem",me);var Se="sessionStorage",$n=Ye.bind(null,"sessionStorage");ge("sessionStorage","getItem",re);ge("sessionStorage","setItem",ie);ge("sessionStorage","removeItem",me);function le(e){
var t=e;try{
if((t=JSON.parse(e))==="true")return!0;if(t==="false")return!1;if(J(t))return t;parseFloat(t)===t&&(t=parseFloat(t))
}catch{}if(t!==null&&t!=="")return t
}var Mn=Tn(),zn=$n(),Un=Rt();function Bt(e,t){
if(e){
var n=He(t),r=!Ze(n),a=Ge(n)?le(localStorage.getItem(e)):void 0;if(r&&!ae(a))return a;var o=Ke(n)?le(qt(e)):void 0;if(r&&o)return o;var c=Qe(n)?le(sessionStorage.getItem(e)):void 0;if(r&&c)return c;var s=re(e);return r?s:{localStorage:a,sessionStorage:c,cookie:o,global:s}
}
}function Dn(e,t,n){
if(e&&!ae(t)){
var r={},a=He(n),o=JSON.stringify(t),c=!Ze(a);return Ge(a)&&(r[Pe]=Te(Pe,t,le(localStorage.getItem(e))),localStorage.setItem(e,o),c)?r[Pe]:Ke(a)&&(r[Ie]=Te(Ie,t,le(qt(e))),An(e,o),c)?r[Ie]:Qe(a)&&(r[Se]=Te(Se,t,le(sessionStorage.getItem(e))),sessionStorage.setItem(e,o),c)?r[Se]:(r[we]=Te(we,t,re(e)),ie(e,t),c?r[we]:r)
}
}function Ln(e,t){
if(e){
var n=He(t),r=Bt(e,xt),a={};return!ae(r.localStorage)&&Ge(n)&&(localStorage.removeItem(e),a[Pe]=r.localStorage),!ae(r.cookie)&&Ke(n)&&(Vt(e),a[Ie]=r.cookie),!ae(r.sessionStorage)&&Qe(n)&&(sessionStorage.removeItem(e),a[Se]=r.sessionStorage),!ae(r.global)&&qe(n,we)&&(me(e),a[we]=r.global),a
}
}function He(e){
return e?ue(e)?e:e.storage:Et
}function Ge(e){
return Mn&&qe(e,Pe)
}function Ke(e){
return Un&&qe(e,Ie)
}function Qe(e){
return zn&&qe(e,Se)
}function Ze(e){
return e===xt||e==="all"
}function qe(e,t){
return e===Et||e===t||Ze(e)
}function Te(e,t,n){
return{location:e,current:t,previous:n}
}var Cn={setItem:Dn,getItem:Bt,removeItem:Ln};function qn(e,t,n){
return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e
}function Pt(e,t){
var n=Object.keys(e);if(Object.getOwnPropertySymbols){
var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){
return Object.getOwnPropertyDescriptor(e,a).enumerable
})),n.push.apply(n,r)
}return n
}function St(e){
for(var t=1;t<arguments.length;t++){
var n=arguments[t]!=null?arguments[t]:{};t%2?Pt(Object(n),!0).forEach(function(r){
qn(e,r,n[r])
}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pt(Object(n)).forEach(function(r){
Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))
})
}return e
}function Vn(){
var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t={storage:Cn};return Nn(St(St({},t),e))
}function Rn(e){
const t={enabled:!0};function n(r){
return!!r.enabled&&typeof window.ym=="function"
}return{name:"yandexMetrika",config:{...t,...e},initialize({config:r}){
if(!r.counterId)throw new Error("YandexMetrikaPlugin: counterId is required.");((a,o,c,s,b)=>{
var p;a[b]??(a[b]=function(...E){
var g;a.ym&&((g=a.ym).a??(g.a=[]),a.ym.a.push(E))
}),a[b].l=new Date().getTime();const d=o.createElement(c),T=o.getElementsByTagName(c)[0];d.async=!0,d.src=s,(p=T.parentNode)==null||p.insertBefore(d,T)
})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym"),window.ym??(window.ym=(...a)=>{
var o;((o=window.ym).a??(o.a=[])).push(a)
}),window.ym(r.counterId,"init",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0})
},loaded({config:r}){
return n(r)
},track:({payload:r,config:a})=>{
if(!n(a))return;const o=a.mapEvents||{},c=o[r.event]||r.event;a.dev&&!o[r.event]&&console.warn(`[YandexMetrika] No mapped goal for event "${r.event}", sending as-is`),window.ym(a.counterId,"reachGoal",c,r.properties)
},page:({payload:r,config:a})=>{
if(!n(a))return;const{properties:o={}}=r,c=o.url??window.location.href;window.ym(a.counterId,"hit",c,o)
},identify:({payload:r,config:a})=>{
if(!n(a))return;const o=r.traits;if(window.ym(a.counterId,"setUserID",r.userId),o&&Object.keys(o).length>0){
window.ym(a.counterId,"userParams",{...o,UserID:r.userId});const c={};o.email&&(c.email=o.email),o.phone_number&&(c.phone_number=o.phone_number),o.first_name&&(c.first_name=o.first_name),o.last_name&&(c.last_name=o.last_name),o.yandex_cid&&(c.yandex_cid=o.yandex_cid),window.ym(a.counterId,"firstPartyParams",c)
}
}}
}const Bn=!0,Jn=[Rn({counterId:"25559621",enabled:Bn,mapEvents:{signed_up:"ym-register",signed_in:"ym-login"}})],he=Vn({debug:!1,app:"hexlet",version:100,plugins:Jn}),Fn=window.gon.fired_events,Wn=Object.entries(Fn).map(([e,t])=>({type:e,data:t}));for(const e of Wn)switch(e.type){
case"signed_up":he.track("signed_up",e.data),he.identify(e.data.id.toString(),e.data);break;case"signed_in":he.track("signed_in",e.data),he.identify(e.data.id.toString(),e.data);break;case"sign_up_failed":he.track("sign_up_failed",e.data);break
}
