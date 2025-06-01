import{g as bn}from"./_commonjsHelpers-D6-XlEtG.js";const je=Ue("end"),He=Ue("start");function Ue(t){
return e;function e(n){
const r=n&&n.position&&n.position[t]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}
}
}function wn(t){
const e=He(t),n=je(t);if(e&&n)return{start:e,end:n}
}function Ct(t){
return!t||typeof t!="object"?"":"position"in t||"type"in t?me(t.position):"start"in t||"end"in t?me(t):"line"in t||"column"in t?Jt(t):""
}function Jt(t){
return ge(t&&t.line)+":"+ge(t&&t.column)
}function me(t){
return Jt(t&&t.start)+"-"+Jt(t&&t.end)
}function ge(t){
return t&&typeof t=="number"?t:1
}class W extends Error{
constructor(e,n,r){
super(),typeof n=="string"&&(r=n,n=void 0);let i="",u={},l=!1;if(n&&("line"in n&&"column"in n?u={place:n}:"start"in n&&"end"in n?u={place:n}:"type"in n?u={ancestors:[n],place:n.position}:u={...n}),typeof e=="string"?i=e:!u.cause&&e&&(l=!0,i=e.message,u.cause=e),!u.ruleId&&!u.source&&typeof r=="string"){
const c=r.indexOf(":");c===-1?u.ruleId=r:(u.source=r.slice(0,c),u.ruleId=r.slice(c+1))
}if(!u.place&&u.ancestors&&u.ancestors){
const c=u.ancestors[u.ancestors.length-1];c&&(u.place=c.position)
}const a=u.place&&"start"in u.place?u.place.start:u.place;this.ancestors=u.ancestors||void 0,this.cause=u.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file,this.message=i,this.line=a?a.line:void 0,this.name=Ct(u.place)||"1:1",this.place=u.place||void 0,this.reason=this.message,this.ruleId=u.ruleId||void 0,this.source=u.source||void 0,this.stack=l&&u.cause&&typeof u.cause.stack=="string"?u.cause.stack:"",this.actual,this.expected,this.note,this.url
}
}W.prototype.file="";W.prototype.name="";W.prototype.reason="";W.prototype.message="";W.prototype.stack="";W.prototype.column=void 0;W.prototype.line=void 0;W.prototype.ancestors=void 0;W.prototype.cause=void 0;W.prototype.fatal=void 0;W.prototype.place=void 0;W.prototype.ruleId=void 0;W.prototype.source=void 0;const Sn={};function In(t,e){
const n=Sn,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Qe(t,r,i)
}function Qe(t,e,n){
if(Cn(t)){
if("value"in t)return t.type==="html"&&!n?"":t.value;if(e&&"alt"in t&&t.alt)return t.alt;if("children"in t)return de(t.children,e,n)
}return Array.isArray(t)?de(t,e,n):""
}function de(t,e,n){
const r=[];let i=-1;for(;++i<t.length;)r[i]=Qe(t[i],e,n);return r.join("")
}function Cn(t){
return!!(t&&typeof t=="object")
}const ye=document.createElement("i");function ee(t){
const e="&"+t+";";ye.innerHTML=e;const n=ye.textContent;return n.charCodeAt(n.length-1)===59&&t!=="semi"||n===e?!1:n
}function rt(t,e,n,r){
const i=t.length;let u=0,l;if(e<0?e=-e>i?0:i+e:e=e>i?i:e,n=n>0?n:0,r.length<1e4)l=Array.from(r),l.unshift(e,n),t.splice(...l);else for(n&&t.splice(e,n);u<r.length;)l=r.slice(u,u+1e4),l.unshift(e,0),t.splice(...l),u+=1e4,e+=1e4
}function G(t,e){
return t.length>0?(rt(t,t.length,0,e),t):e
}const xe={}.hasOwnProperty;function En(t){
const e={};let n=-1;for(;++n<t.length;)zn(e,t[n]);return e
}function zn(t,e){
let n;for(n in e){
const i=(xe.call(t,n)?t[n]:void 0)||(t[n]={}),u=e[n];let l;if(u)for(l in u){
xe.call(i,l)||(i[l]=[]);const a=u[l];An(i[l],Array.isArray(a)?a:a?[a]:[])
}
}
}function An(t,e){
let n=-1;const r=[];for(;++n<e.length;)(e[n].add==="after"?t:r).push(e[n]);rt(t,0,0,r)
}function $e(t,e){
const n=Number.parseInt(t,e);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)
}function yt(t){
return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()
}const nt=ct(/[A-Za-z]/),Z=ct(/[\dA-Za-z]/),Tn=ct(/[#-'*+\--9=?A-Z^-~]/);function Zt(t){
return t!==null&&(t<32||t===127)
}const Gt=ct(/\d/),Fn=ct(/[\dA-Fa-f]/),Pn=ct(/[!-/:-@[-`{-~]/);function E(t){
return t!==null&&t<-2
}function Y(t){
return t!==null&&(t<0||t===32)
}function N(t){
return t===-2||t===-1||t===32
}const Nn=ct(new RegExp("\\p{P}|\\p{S}","u")),_n=ct(/\s/);function ct(t){
return e;function e(n){
return n!==null&&n>-1&&t.test(String.fromCharCode(n))
}
}function xt(t){
const e=[];let n=-1,r=0,i=0;for(;++n<t.length;){
const u=t.charCodeAt(n);let l="";if(u===37&&Z(t.charCodeAt(n+1))&&Z(t.charCodeAt(n+2)))i=2;else if(u<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(u))||(l=String.fromCharCode(u));else if(u>55295&&u<57344){
const a=t.charCodeAt(n+1);u<56320&&a>56319&&a<57344?(l=String.fromCharCode(u,a),i=1):l="�"
}else l=String.fromCharCode(u);l&&(e.push(t.slice(r,n),encodeURIComponent(l)),r=n+i+1,l=""),i&&(n+=i,i=0)
}return e.join("")+t.slice(r)
}function D(t,e,n,r){
const i=r?r-1:Number.POSITIVE_INFINITY;let u=0;return l;function l(c){
return N(c)?(t.enter(n),a(c)):e(c)
}function a(c){
return N(c)&&u++<i?(t.consume(c),a):(t.exit(n),e(c))
}
}const Bn={tokenize:Ln};function Ln(t){
const e=t.attempt(this.parser.constructs.contentInitial,r,i);let n;return e;function r(a){
if(a===null){
t.consume(a);return
}return t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),D(t,e,"linePrefix")
}function i(a){
return t.enter("paragraph"),u(a)
}function u(a){
const c=t.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,l(a)
}function l(a){
if(a===null){
t.exit("chunkText"),t.exit("paragraph"),t.consume(a);return
}return E(a)?(t.consume(a),t.exit("chunkText"),u):(t.consume(a),l)
}
}const Dn={tokenize:On},ke={tokenize:Rn};function On(t){
const e=this,n=[];let r=0,i,u,l;return a;function a(S){
if(r<n.length){
const R=n[r];return e.containerState=R[1],t.attempt(R[0].continuation,c,s)(S)
}return s(S)
}function c(S){
if(r++,e.containerState._closeFlow){
e.containerState._closeFlow=void 0,i&&T();const R=e.events.length;let V=R,y;for(;V--;)if(e.events[V][0]==="exit"&&e.events[V][1].type==="chunkFlow"){
y=e.events[V][1].end;break
}x(r);let _=R;for(;_<e.events.length;)e.events[_][1].end={...y},_++;return rt(e.events,V+1,0,e.events.slice(R)),e.events.length=_,s(S)
}return a(S)
}function s(S){
if(r===n.length){
if(!i)return g(S);if(i.currentConstruct&&i.currentConstruct.concrete)return b(S);e.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)
}return e.containerState={},t.check(ke,o,f)(S)
}function o(S){
return i&&T(),x(r),g(S)
}function f(S){
return e.parser.lazy[e.now().line]=r!==n.length,l=e.now().offset,b(S)
}function g(S){
return e.containerState={},t.attempt(ke,h,b)(S)
}function h(S){
return r++,n.push([e.currentConstruct,e.containerState]),g(S)
}function b(S){
if(S===null){
i&&T(),x(0),t.consume(S);return
}return i=i||e.parser.flow(e.now()),t.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:u}),w(S)
}function w(S){
if(S===null){
A(t.exit("chunkFlow"),!0),x(0),t.consume(S);return
}return E(S)?(t.consume(S),A(t.exit("chunkFlow")),r=0,e.interrupt=void 0,a):(t.consume(S),w)
}function A(S,R){
const V=e.sliceStream(S);if(R&&V.push(null),S.previous=u,u&&(u.next=S),u=S,i.defineSkip(S.start),i.write(V),e.parser.lazy[S.start.line]){
let y=i.events.length;for(;y--;)if(i.events[y][1].start.offset<l&&(!i.events[y][1].end||i.events[y][1].end.offset>l))return;const _=e.events.length;let q=_,B,O;for(;q--;)if(e.events[q][0]==="exit"&&e.events[q][1].type==="chunkFlow"){
if(B){
O=e.events[q][1].end;break
}B=!0
}for(x(r),y=_;y<e.events.length;)e.events[y][1].end={...O},y++;rt(e.events,q+1,0,e.events.slice(_)),e.events.length=y
}
}function x(S){
let R=n.length;for(;R-- >S;){
const V=n[R];e.containerState=V[1],V[0].exit.call(e,t)
}n.length=S
}function T(){
i.write([null]),u=void 0,i=void 0,e.containerState._closeFlow=void 0
}
}function Rn(t,e,n){
return D(t,t.attempt(this.parser.constructs.document,e,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)
}function be(t){
if(t===null||Y(t)||_n(t))return 1;if(Nn(t))return 2
}function ne(t,e,n){
const r=[];let i=-1;for(;++i<t.length;){
const u=t[i].resolveAll;u&&!r.includes(u)&&(e=u(e,n),r.push(u))
}return e
}const Xt={name:"attention",resolveAll:Mn,tokenize:Vn};function Mn(t,e){
let n=-1,r,i,u,l,a,c,s,o;for(;++n<t.length;)if(t[n][0]==="enter"&&t[n][1].type==="attentionSequence"&&t[n][1]._close){
for(r=n;r--;)if(t[r][0]==="exit"&&t[r][1].type==="attentionSequence"&&t[r][1]._open&&e.sliceSerialize(t[r][1]).charCodeAt(0)===e.sliceSerialize(t[n][1]).charCodeAt(0)){
if((t[r][1]._close||t[n][1]._open)&&(t[n][1].end.offset-t[n][1].start.offset)%3&&!((t[r][1].end.offset-t[r][1].start.offset+t[n][1].end.offset-t[n][1].start.offset)%3))continue;c=t[r][1].end.offset-t[r][1].start.offset>1&&t[n][1].end.offset-t[n][1].start.offset>1?2:1;const f={...t[r][1].end},g={...t[n][1].start};we(f,-c),we(g,c),l={type:c>1?"strongSequence":"emphasisSequence",start:f,end:{...t[r][1].end}},a={type:c>1?"strongSequence":"emphasisSequence",start:{...t[n][1].start},end:g},u={type:c>1?"strongText":"emphasisText",start:{...t[r][1].end},end:{...t[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...l.start},end:{...a.end}},t[r][1].end={...l.start},t[n][1].start={...a.end},s=[],t[r][1].end.offset-t[r][1].start.offset&&(s=G(s,[["enter",t[r][1],e],["exit",t[r][1],e]])),s=G(s,[["enter",i,e],["enter",l,e],["exit",l,e],["enter",u,e]]),s=G(s,ne(e.parser.constructs.insideSpan.null,t.slice(r+1,n),e)),s=G(s,[["exit",u,e],["enter",a,e],["exit",a,e],["exit",i,e]]),t[n][1].end.offset-t[n][1].start.offset?(o=2,s=G(s,[["enter",t[n][1],e],["exit",t[n][1],e]])):o=0,rt(t,r-1,n-r+3,s),n=r+s.length-o-2;break
}
}for(n=-1;++n<t.length;)t[n][1].type==="attentionSequence"&&(t[n][1].type="data");return t
}function Vn(t,e){
const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=be(r);let u;return l;function l(c){
return u=c,t.enter("attentionSequence"),a(c)
}function a(c){
if(c===u)return t.consume(c),a;const s=t.exit("attentionSequence"),o=be(c),f=!o||o===2&&i||n.includes(c),g=!i||i===2&&o||n.includes(r);return s._open=!!(u===42?f:f&&(i||!g)),s._close=!!(u===42?g:g&&(o||!f)),e(c)
}
}function we(t,e){
t.column+=e,t.offset+=e,t._bufferIndex+=e
}const qn={name:"autolink",tokenize:jn};function jn(t,e,n){
let r=0;return i;function i(h){
return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),u
}function u(h){
return nt(h)?(t.consume(h),l):h===64?n(h):s(h)
}function l(h){
return h===43||h===45||h===46||Z(h)?(r=1,a(h)):s(h)
}function a(h){
return h===58?(t.consume(h),r=0,c):(h===43||h===45||h===46||Z(h))&&r++<32?(t.consume(h),a):(r=0,s(h))
}function c(h){
return h===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.exit("autolink"),e):h===null||h===32||h===60||Zt(h)?n(h):(t.consume(h),c)
}function s(h){
return h===64?(t.consume(h),o):Tn(h)?(t.consume(h),s):n(h)
}function o(h){
return Z(h)?f(h):n(h)
}function f(h){
return h===46?(t.consume(h),r=0,o):h===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(h),t.exit("autolinkMarker"),t.exit("autolink"),e):g(h)
}function g(h){
if((h===45||Z(h))&&r++<63){
const b=h===45?g:f;return t.consume(h),b
}return n(h)
}
}const Dt={partial:!0,tokenize:Hn};function Hn(t,e,n){
return r;function r(u){
return N(u)?D(t,i,"linePrefix")(u):i(u)
}function i(u){
return u===null||E(u)?e(u):n(u)
}
}const Ye={continuation:{tokenize:Qn},exit:$n,name:"blockQuote",tokenize:Un};function Un(t,e,n){
const r=this;return i;function i(l){
if(l===62){
const a=r.containerState;return a.open||(t.enter("blockQuote",{_container:!0}),a.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(l),t.exit("blockQuoteMarker"),u
}return n(l)
}function u(l){
return N(l)?(t.enter("blockQuotePrefixWhitespace"),t.consume(l),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),e):(t.exit("blockQuotePrefix"),e(l))
}
}function Qn(t,e,n){
const r=this;return i;function i(l){
return N(l)?D(t,u,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):u(l)
}function u(l){
return t.attempt(Ye,e,n)(l)
}
}function $n(t){
t.exit("blockQuote")
}const We={name:"characterEscape",tokenize:Yn};function Yn(t,e,n){
return r;function r(u){
return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(u),t.exit("escapeMarker"),i
}function i(u){
return Pn(u)?(t.enter("characterEscapeValue"),t.consume(u),t.exit("characterEscapeValue"),t.exit("characterEscape"),e):n(u)
}
}const Je={name:"characterReference",tokenize:Wn};function Wn(t,e,n){
const r=this;let i=0,u,l;return a;function a(f){
return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(f),t.exit("characterReferenceMarker"),c
}function c(f){
return f===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(f),t.exit("characterReferenceMarkerNumeric"),s):(t.enter("characterReferenceValue"),u=31,l=Z,o(f))
}function s(f){
return f===88||f===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(f),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),u=6,l=Fn,o):(t.enter("characterReferenceValue"),u=7,l=Gt,o(f))
}function o(f){
if(f===59&&i){
const g=t.exit("characterReferenceValue");return l===Z&&!ee(r.sliceSerialize(g))?n(f):(t.enter("characterReferenceMarker"),t.consume(f),t.exit("characterReferenceMarker"),t.exit("characterReference"),e)
}return l(f)&&i++<u?(t.consume(f),o):n(f)
}
}const Se={partial:!0,tokenize:Zn},Ie={concrete:!0,name:"codeFenced",tokenize:Jn};function Jn(t,e,n){
const r=this,i={partial:!0,tokenize:V};let u=0,l=0,a;return c;function c(y){
return s(y)
}function s(y){
const _=r.events[r.events.length-1];return u=_&&_[1].type==="linePrefix"?_[2].sliceSerialize(_[1],!0).length:0,a=y,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),o(y)
}function o(y){
return y===a?(l++,t.consume(y),o):l<3?n(y):(t.exit("codeFencedFenceSequence"),N(y)?D(t,f,"whitespace")(y):f(y))
}function f(y){
return y===null||E(y)?(t.exit("codeFencedFence"),r.interrupt?e(y):t.check(Se,w,R)(y)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),g(y))
}function g(y){
return y===null||E(y)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),f(y)):N(y)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),D(t,h,"whitespace")(y)):y===96&&y===a?n(y):(t.consume(y),g)
}function h(y){
return y===null||E(y)?f(y):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),b(y))
}function b(y){
return y===null||E(y)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),f(y)):y===96&&y===a?n(y):(t.consume(y),b)
}function w(y){
return t.attempt(i,R,A)(y)
}function A(y){
return t.enter("lineEnding"),t.consume(y),t.exit("lineEnding"),x
}function x(y){
return u>0&&N(y)?D(t,T,"linePrefix",u+1)(y):T(y)
}function T(y){
return y===null||E(y)?t.check(Se,w,R)(y):(t.enter("codeFlowValue"),S(y))
}function S(y){
return y===null||E(y)?(t.exit("codeFlowValue"),T(y)):(t.consume(y),S)
}function R(y){
return t.exit("codeFenced"),e(y)
}function V(y,_,q){
let B=0;return O;function O(P){
return y.enter("lineEnding"),y.consume(P),y.exit("lineEnding"),C
}function C(P){
return y.enter("codeFencedFence"),N(P)?D(y,I,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(P):I(P)
}function I(P){
return P===a?(y.enter("codeFencedFenceSequence"),M(P)):q(P)
}function M(P){
return P===a?(B++,y.consume(P),M):B>=l?(y.exit("codeFencedFenceSequence"),N(P)?D(y,j,"whitespace")(P):j(P)):q(P)
}function j(P){
return P===null||E(P)?(y.exit("codeFencedFence"),_(P)):q(P)
}
}
}function Zn(t,e,n){
const r=this;return i;function i(l){
return l===null?n(l):(t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),u)
}function u(l){
return r.parser.lazy[r.now().line]?n(l):e(l)
}
}const Mt={name:"codeIndented",tokenize:Xn},Gn={partial:!0,tokenize:Kn};function Xn(t,e,n){
const r=this;return i;function i(s){
return t.enter("codeIndented"),D(t,u,"linePrefix",5)(s)
}function u(s){
const o=r.events[r.events.length-1];return o&&o[1].type==="linePrefix"&&o[2].sliceSerialize(o[1],!0).length>=4?l(s):n(s)
}function l(s){
return s===null?c(s):E(s)?t.attempt(Gn,l,c)(s):(t.enter("codeFlowValue"),a(s))
}function a(s){
return s===null||E(s)?(t.exit("codeFlowValue"),l(s)):(t.consume(s),a)
}function c(s){
return t.exit("codeIndented"),e(s)
}
}function Kn(t,e,n){
const r=this;return i;function i(l){
return r.parser.lazy[r.now().line]?n(l):E(l)?(t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),i):D(t,u,"linePrefix",5)(l)
}function u(l){
const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(l):E(l)?i(l):n(l)
}
}const vn={name:"codeText",previous:er,resolve:tr,tokenize:nr};function tr(t){
let e=t.length-4,n=3,r,i;if((t[n][1].type==="lineEnding"||t[n][1].type==="space")&&(t[e][1].type==="lineEnding"||t[e][1].type==="space")){
for(r=n;++r<e;)if(t[r][1].type==="codeTextData"){
t[n][1].type="codeTextPadding",t[e][1].type="codeTextPadding",n+=2,e-=2;break
}
}for(r=n-1,e++;++r<=e;)i===void 0?r!==e&&t[r][1].type!=="lineEnding"&&(i=r):(r===e||t[r][1].type==="lineEnding")&&(t[i][1].type="codeTextData",r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),e-=r-i-2,r=i+2),i=void 0);return t
}function er(t){
return t!==96||this.events[this.events.length-1][1].type==="characterEscape"
}function nr(t,e,n){
let r=0,i,u;return l;function l(f){
return t.enter("codeText"),t.enter("codeTextSequence"),a(f)
}function a(f){
return f===96?(t.consume(f),r++,a):(t.exit("codeTextSequence"),c(f))
}function c(f){
return f===null?n(f):f===32?(t.enter("space"),t.consume(f),t.exit("space"),c):f===96?(u=t.enter("codeTextSequence"),i=0,o(f)):E(f)?(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),c):(t.enter("codeTextData"),s(f))
}function s(f){
return f===null||f===32||f===96||E(f)?(t.exit("codeTextData"),c(f)):(t.consume(f),s)
}function o(f){
return f===96?(t.consume(f),i++,o):i===r?(t.exit("codeTextSequence"),t.exit("codeText"),e(f)):(u.type="codeTextData",s(f))
}
}class rr{
constructor(e){
this.left=e?[...e]:[],this.right=[]
}get(e){
if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]
}get length(){
return this.left.length+this.right.length
}shift(){
return this.setCursor(0),this.right.pop()
}slice(e,n){
const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(e,r):e>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-r+this.left.length).reverse())
}splice(e,n,r){
const i=n||0;this.setCursor(Math.trunc(e));const u=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&St(this.left,r),u.reverse()
}pop(){
return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()
}push(e){
this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)
}pushMany(e){
this.setCursor(Number.POSITIVE_INFINITY),St(this.left,e)
}unshift(e){
this.setCursor(0),this.right.push(e)
}unshiftMany(e){
this.setCursor(0),St(this.right,e.reverse())
}setCursor(e){
if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){
const n=this.left.splice(e,Number.POSITIVE_INFINITY);St(this.right,n.reverse())
}else{
const n=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);St(this.left,n.reverse())
}
}
}function St(t,e){
let n=0;if(e.length<1e4)t.push(...e);else for(;n<e.length;)t.push(...e.slice(n,n+1e4)),n+=1e4
}function Ze(t){
const e={};let n=-1,r,i,u,l,a,c,s;const o=new rr(t);for(;++n<o.length;){
for(;n in e;)n=e[n];if(r=o.get(n),n&&r[1].type==="chunkFlow"&&o.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,u=0,u<c.length&&c[u][1].type==="lineEndingBlank"&&(u+=2),u<c.length&&c[u][1].type==="content"))for(;++u<c.length&&c[u][1].type!=="content";)c[u][1].type==="chunkText"&&(c[u][1]._isInFirstContentOfListItem=!0,u++);if(r[0]==="enter")r[1].contentType&&(Object.assign(e,ir(o,n)),n=e[n],s=!0);else if(r[1]._container){
for(u=n,i=void 0;u--;)if(l=o.get(u),l[1].type==="lineEnding"||l[1].type==="lineEndingBlank")l[0]==="enter"&&(i&&(o.get(i)[1].type="lineEndingBlank"),l[1].type="lineEnding",i=u);else if(!(l[1].type==="linePrefix"||l[1].type==="listItemIndent"))break;i&&(r[1].end={...o.get(i)[1].start},a=o.slice(i,n),a.unshift(r),o.splice(i,n-i+1,a))
}
}return rt(t,0,Number.POSITIVE_INFINITY,o.slice(0)),!s
}function ir(t,e){
const n=t.get(e)[1],r=t.get(e)[2];let i=e-1;const u=[];let l=n._tokenizer;l||(l=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(l._contentTypeTextTrailing=!0));const a=l.events,c=[],s={};let o,f,g=-1,h=n,b=0,w=0;const A=[w];for(;h;){
for(;t.get(++i)[1]!==h;);u.push(i),h._tokenizer||(o=r.sliceStream(h),h.next||o.push(null),f&&l.defineSkip(h.start),h._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(o),h._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),f=h,h=h.next
}for(h=n;++g<a.length;)a[g][0]==="exit"&&a[g-1][0]==="enter"&&a[g][1].type===a[g-1][1].type&&a[g][1].start.line!==a[g][1].end.line&&(w=g+1,A.push(w),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(l.events=[],h?(h._tokenizer=void 0,h.previous=void 0):A.pop(),g=A.length;g--;){
const x=a.slice(A[g],A[g+1]),T=u.pop();c.push([T,T+x.length-1]),t.splice(T,2,x)
}for(c.reverse(),g=-1;++g<c.length;)s[b+c[g][0]]=b+c[g][1],b+=c[g][1]-c[g][0]-1;return s
}const ur={resolve:ar,tokenize:sr},lr={partial:!0,tokenize:or};function ar(t){
return Ze(t),t
}function sr(t,e){
let n;return r;function r(a){
return t.enter("content"),n=t.enter("chunkContent",{contentType:"content"}),i(a)
}function i(a){
return a===null?u(a):E(a)?t.check(lr,l,u)(a):(t.consume(a),i)
}function u(a){
return t.exit("chunkContent"),t.exit("content"),e(a)
}function l(a){
return t.consume(a),t.exit("chunkContent"),n.next=t.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i
}
}function or(t,e,n){
const r=this;return i;function i(l){
return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),D(t,u,"linePrefix")
}function u(l){
if(l===null||E(l))return n(l);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(l):t.interrupt(r.parser.constructs.flow,n,e)(l)
}
}function Ge(t,e,n,r,i,u,l,a,c){
const s=c||Number.POSITIVE_INFINITY;let o=0;return f;function f(x){
return x===60?(t.enter(r),t.enter(i),t.enter(u),t.consume(x),t.exit(u),g):x===null||x===32||x===41||Zt(x)?n(x):(t.enter(r),t.enter(l),t.enter(a),t.enter("chunkString",{contentType:"string"}),w(x))
}function g(x){
return x===62?(t.enter(u),t.consume(x),t.exit(u),t.exit(i),t.exit(r),e):(t.enter(a),t.enter("chunkString",{contentType:"string"}),h(x))
}function h(x){
return x===62?(t.exit("chunkString"),t.exit(a),g(x)):x===null||x===60||E(x)?n(x):(t.consume(x),x===92?b:h)
}function b(x){
return x===60||x===62||x===92?(t.consume(x),h):h(x)
}function w(x){
return!o&&(x===null||x===41||Y(x))?(t.exit("chunkString"),t.exit(a),t.exit(l),t.exit(r),e(x)):o<s&&x===40?(t.consume(x),o++,w):x===41?(t.consume(x),o--,w):x===null||x===32||x===40||Zt(x)?n(x):(t.consume(x),x===92?A:w)
}function A(x){
return x===40||x===41||x===92?(t.consume(x),w):w(x)
}
}function Xe(t,e,n,r,i,u){
const l=this;let a=0,c;return s;function s(h){
return t.enter(r),t.enter(i),t.consume(h),t.exit(i),t.enter(u),o
}function o(h){
return a>999||h===null||h===91||h===93&&!c||h===94&&!a&&"_hiddenFootnoteSupport"in l.parser.constructs?n(h):h===93?(t.exit(u),t.enter(i),t.consume(h),t.exit(i),t.exit(r),e):E(h)?(t.enter("lineEnding"),t.consume(h),t.exit("lineEnding"),o):(t.enter("chunkString",{contentType:"string"}),f(h))
}function f(h){
return h===null||h===91||h===93||E(h)||a++>999?(t.exit("chunkString"),o(h)):(t.consume(h),c||(c=!N(h)),h===92?g:f)
}function g(h){
return h===91||h===92||h===93?(t.consume(h),a++,f):f(h)
}
}function Ke(t,e,n,r,i,u){
let l;return a;function a(g){
return g===34||g===39||g===40?(t.enter(r),t.enter(i),t.consume(g),t.exit(i),l=g===40?41:g,c):n(g)
}function c(g){
return g===l?(t.enter(i),t.consume(g),t.exit(i),t.exit(r),e):(t.enter(u),s(g))
}function s(g){
return g===l?(t.exit(u),c(l)):g===null?n(g):E(g)?(t.enter("lineEnding"),t.consume(g),t.exit("lineEnding"),D(t,s,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),o(g))
}function o(g){
return g===l||g===null||E(g)?(t.exit("chunkString"),s(g)):(t.consume(g),g===92?f:o)
}function f(g){
return g===l||g===92?(t.consume(g),o):o(g)
}
}function Et(t,e){
let n;return r;function r(i){
return E(i)?(t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),n=!0,r):N(i)?D(t,r,n?"linePrefix":"lineSuffix")(i):e(i)
}
}const cr={name:"definition",tokenize:fr},hr={partial:!0,tokenize:pr};function fr(t,e,n){
const r=this;let i;return u;function u(h){
return t.enter("definition"),l(h)
}function l(h){
return Xe.call(r,t,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)
}function a(h){
return i=yt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(t.enter("definitionMarker"),t.consume(h),t.exit("definitionMarker"),c):n(h)
}function c(h){
return Y(h)?Et(t,s)(h):s(h)
}function s(h){
return Ge(t,o,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)
}function o(h){
return t.attempt(hr,f,f)(h)
}function f(h){
return N(h)?D(t,g,"whitespace")(h):g(h)
}function g(h){
return h===null||E(h)?(t.exit("definition"),r.parser.defined.push(i),e(h)):n(h)
}
}function pr(t,e,n){
return r;function r(a){
return Y(a)?Et(t,i)(a):n(a)
}function i(a){
return Ke(t,u,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)
}function u(a){
return N(a)?D(t,l,"whitespace")(a):l(a)
}function l(a){
return a===null||E(a)?e(a):n(a)
}
}const mr={name:"hardBreakEscape",tokenize:gr};function gr(t,e,n){
return r;function r(u){
return t.enter("hardBreakEscape"),t.consume(u),i
}function i(u){
return E(u)?(t.exit("hardBreakEscape"),e(u)):n(u)
}
}const dr={name:"headingAtx",resolve:yr,tokenize:xr};function yr(t,e){
let n=t.length-2,r=3,i,u;return t[r][1].type==="whitespace"&&(r+=2),n-2>r&&t[n][1].type==="whitespace"&&(n-=2),t[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&t[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:t[r][1].start,end:t[n][1].end},u={type:"chunkText",start:t[r][1].start,end:t[n][1].end,contentType:"text"},rt(t,r,n-r+1,[["enter",i,e],["enter",u,e],["exit",u,e],["exit",i,e]])),t
}function xr(t,e,n){
let r=0;return i;function i(o){
return t.enter("atxHeading"),u(o)
}function u(o){
return t.enter("atxHeadingSequence"),l(o)
}function l(o){
return o===35&&r++<6?(t.consume(o),l):o===null||Y(o)?(t.exit("atxHeadingSequence"),a(o)):n(o)
}function a(o){
return o===35?(t.enter("atxHeadingSequence"),c(o)):o===null||E(o)?(t.exit("atxHeading"),e(o)):N(o)?D(t,a,"whitespace")(o):(t.enter("atxHeadingText"),s(o))
}function c(o){
return o===35?(t.consume(o),c):(t.exit("atxHeadingSequence"),a(o))
}function s(o){
return o===null||o===35||Y(o)?(t.exit("atxHeadingText"),a(o)):(t.consume(o),s)
}
}const kr=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Ce=["pre","script","style","textarea"],br={concrete:!0,name:"htmlFlow",resolveTo:Ir,tokenize:Cr},wr={partial:!0,tokenize:zr},Sr={partial:!0,tokenize:Er};function Ir(t){
let e=t.length;for(;e--&&!(t[e][0]==="enter"&&t[e][1].type==="htmlFlow"););return e>1&&t[e-2][1].type==="linePrefix"&&(t[e][1].start=t[e-2][1].start,t[e+1][1].start=t[e-2][1].start,t.splice(e-2,2)),t
}function Cr(t,e,n){
const r=this;let i,u,l,a,c;return s;function s(m){
return o(m)
}function o(m){
return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(m),f
}function f(m){
return m===33?(t.consume(m),g):m===47?(t.consume(m),u=!0,w):m===63?(t.consume(m),i=3,r.interrupt?e:p):nt(m)?(t.consume(m),l=String.fromCharCode(m),A):n(m)
}function g(m){
return m===45?(t.consume(m),i=2,h):m===91?(t.consume(m),i=5,a=0,b):nt(m)?(t.consume(m),i=4,r.interrupt?e:p):n(m)
}function h(m){
return m===45?(t.consume(m),r.interrupt?e:p):n(m)
}function b(m){
const v="CDATA[";return m===v.charCodeAt(a++)?(t.consume(m),a===v.length?r.interrupt?e:I:b):n(m)
}function w(m){
return nt(m)?(t.consume(m),l=String.fromCharCode(m),A):n(m)
}function A(m){
if(m===null||m===47||m===62||Y(m)){
const v=m===47,ht=l.toLowerCase();return!v&&!u&&Ce.includes(ht)?(i=1,r.interrupt?e(m):I(m)):kr.includes(l.toLowerCase())?(i=6,v?(t.consume(m),x):r.interrupt?e(m):I(m)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(m):u?T(m):S(m))
}return m===45||Z(m)?(t.consume(m),l+=String.fromCharCode(m),A):n(m)
}function x(m){
return m===62?(t.consume(m),r.interrupt?e:I):n(m)
}function T(m){
return N(m)?(t.consume(m),T):O(m)
}function S(m){
return m===47?(t.consume(m),O):m===58||m===95||nt(m)?(t.consume(m),R):N(m)?(t.consume(m),S):O(m)
}function R(m){
return m===45||m===46||m===58||m===95||Z(m)?(t.consume(m),R):V(m)
}function V(m){
return m===61?(t.consume(m),y):N(m)?(t.consume(m),V):S(m)
}function y(m){
return m===null||m===60||m===61||m===62||m===96?n(m):m===34||m===39?(t.consume(m),c=m,_):N(m)?(t.consume(m),y):q(m)
}function _(m){
return m===c?(t.consume(m),c=null,B):m===null||E(m)?n(m):(t.consume(m),_)
}function q(m){
return m===null||m===34||m===39||m===47||m===60||m===61||m===62||m===96||Y(m)?V(m):(t.consume(m),q)
}function B(m){
return m===47||m===62||N(m)?S(m):n(m)
}function O(m){
return m===62?(t.consume(m),C):n(m)
}function C(m){
return m===null||E(m)?I(m):N(m)?(t.consume(m),C):n(m)
}function I(m){
return m===45&&i===2?(t.consume(m),Q):m===60&&i===1?(t.consume(m),H):m===62&&i===4?(t.consume(m),K):m===63&&i===3?(t.consume(m),p):m===93&&i===5?(t.consume(m),it):E(m)&&(i===6||i===7)?(t.exit("htmlFlowData"),t.check(wr,ut,M)(m)):m===null||E(m)?(t.exit("htmlFlowData"),M(m)):(t.consume(m),I)
}function M(m){
return t.check(Sr,j,ut)(m)
}function j(m){
return t.enter("lineEnding"),t.consume(m),t.exit("lineEnding"),P
}function P(m){
return m===null||E(m)?M(m):(t.enter("htmlFlowData"),I(m))
}function Q(m){
return m===45?(t.consume(m),p):I(m)
}function H(m){
return m===47?(t.consume(m),l="",X):I(m)
}function X(m){
if(m===62){
const v=l.toLowerCase();return Ce.includes(v)?(t.consume(m),K):I(m)
}return nt(m)&&l.length<8?(t.consume(m),l+=String.fromCharCode(m),X):I(m)
}function it(m){
return m===93?(t.consume(m),p):I(m)
}function p(m){
return m===62?(t.consume(m),K):m===45&&i===2?(t.consume(m),p):I(m)
}function K(m){
return m===null||E(m)?(t.exit("htmlFlowData"),ut(m)):(t.consume(m),K)
}function ut(m){
return t.exit("htmlFlow"),e(m)
}
}function Er(t,e,n){
const r=this;return i;function i(l){
return E(l)?(t.enter("lineEnding"),t.consume(l),t.exit("lineEnding"),u):n(l)
}function u(l){
return r.parser.lazy[r.now().line]?n(l):e(l)
}
}function zr(t,e,n){
return r;function r(i){
return t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),t.attempt(Dt,e,n)
}
}const Ar={name:"htmlText",tokenize:Tr};function Tr(t,e,n){
const r=this;let i,u,l;return a;function a(p){
return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(p),c
}function c(p){
return p===33?(t.consume(p),s):p===47?(t.consume(p),V):p===63?(t.consume(p),S):nt(p)?(t.consume(p),q):n(p)
}function s(p){
return p===45?(t.consume(p),o):p===91?(t.consume(p),u=0,b):nt(p)?(t.consume(p),T):n(p)
}function o(p){
return p===45?(t.consume(p),h):n(p)
}function f(p){
return p===null?n(p):p===45?(t.consume(p),g):E(p)?(l=f,H(p)):(t.consume(p),f)
}function g(p){
return p===45?(t.consume(p),h):f(p)
}function h(p){
return p===62?Q(p):p===45?g(p):f(p)
}function b(p){
const K="CDATA[";return p===K.charCodeAt(u++)?(t.consume(p),u===K.length?w:b):n(p)
}function w(p){
return p===null?n(p):p===93?(t.consume(p),A):E(p)?(l=w,H(p)):(t.consume(p),w)
}function A(p){
return p===93?(t.consume(p),x):w(p)
}function x(p){
return p===62?Q(p):p===93?(t.consume(p),x):w(p)
}function T(p){
return p===null||p===62?Q(p):E(p)?(l=T,H(p)):(t.consume(p),T)
}function S(p){
return p===null?n(p):p===63?(t.consume(p),R):E(p)?(l=S,H(p)):(t.consume(p),S)
}function R(p){
return p===62?Q(p):S(p)
}function V(p){
return nt(p)?(t.consume(p),y):n(p)
}function y(p){
return p===45||Z(p)?(t.consume(p),y):_(p)
}function _(p){
return E(p)?(l=_,H(p)):N(p)?(t.consume(p),_):Q(p)
}function q(p){
return p===45||Z(p)?(t.consume(p),q):p===47||p===62||Y(p)?B(p):n(p)
}function B(p){
return p===47?(t.consume(p),Q):p===58||p===95||nt(p)?(t.consume(p),O):E(p)?(l=B,H(p)):N(p)?(t.consume(p),B):Q(p)
}function O(p){
return p===45||p===46||p===58||p===95||Z(p)?(t.consume(p),O):C(p)
}function C(p){
return p===61?(t.consume(p),I):E(p)?(l=C,H(p)):N(p)?(t.consume(p),C):B(p)
}function I(p){
return p===null||p===60||p===61||p===62||p===96?n(p):p===34||p===39?(t.consume(p),i=p,M):E(p)?(l=I,H(p)):N(p)?(t.consume(p),I):(t.consume(p),j)
}function M(p){
return p===i?(t.consume(p),i=void 0,P):p===null?n(p):E(p)?(l=M,H(p)):(t.consume(p),M)
}function j(p){
return p===null||p===34||p===39||p===60||p===61||p===96?n(p):p===47||p===62||Y(p)?B(p):(t.consume(p),j)
}function P(p){
return p===47||p===62||Y(p)?B(p):n(p)
}function Q(p){
return p===62?(t.consume(p),t.exit("htmlTextData"),t.exit("htmlText"),e):n(p)
}function H(p){
return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(p),t.exit("lineEnding"),X
}function X(p){
return N(p)?D(t,it,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(p):it(p)
}function it(p){
return t.enter("htmlTextData"),l(p)
}
}const re={name:"labelEnd",resolveAll:_r,resolveTo:Br,tokenize:Lr},Fr={tokenize:Dr},Pr={tokenize:Or},Nr={tokenize:Rr};function _r(t){
let e=-1;const n=[];for(;++e<t.length;){
const r=t[e][1];if(n.push(t[e]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){
const i=r.type==="labelImage"?4:2;r.type="data",e+=i
}
}return t.length!==n.length&&rt(t,0,t.length,n),t
}function Br(t,e){
let n=t.length,r=0,i,u,l,a;for(;n--;)if(i=t[n][1],u){
if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;t[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)
}else if(l){
if(t[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(u=n,i.type!=="labelLink")){
r=2;break
}
}else i.type==="labelEnd"&&(l=n);const c={type:t[u][1].type==="labelLink"?"link":"image",start:{...t[u][1].start},end:{...t[t.length-1][1].end}},s={type:"label",start:{...t[u][1].start},end:{...t[l][1].end}},o={type:"labelText",start:{...t[u+r+2][1].end},end:{...t[l-2][1].start}};return a=[["enter",c,e],["enter",s,e]],a=G(a,t.slice(u+1,u+r+3)),a=G(a,[["enter",o,e]]),a=G(a,ne(e.parser.constructs.insideSpan.null,t.slice(u+r+4,l-3),e)),a=G(a,[["exit",o,e],t[l-2],t[l-1],["exit",s,e]]),a=G(a,t.slice(l+1)),a=G(a,[["exit",c,e]]),rt(t,u,t.length,a),t
}function Lr(t,e,n){
const r=this;let i=r.events.length,u,l;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){
u=r.events[i][1];break
}return a;function a(g){
return u?u._inactive?f(g):(l=r.parser.defined.includes(yt(r.sliceSerialize({start:u.end,end:r.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(g),t.exit("labelMarker"),t.exit("labelEnd"),c):n(g)
}function c(g){
return g===40?t.attempt(Fr,o,l?o:f)(g):g===91?t.attempt(Pr,o,l?s:f)(g):l?o(g):f(g)
}function s(g){
return t.attempt(Nr,o,f)(g)
}function o(g){
return e(g)
}function f(g){
return u._balanced=!0,n(g)
}
}function Dr(t,e,n){
return r;function r(f){
return t.enter("resource"),t.enter("resourceMarker"),t.consume(f),t.exit("resourceMarker"),i
}function i(f){
return Y(f)?Et(t,u)(f):u(f)
}function u(f){
return f===41?o(f):Ge(t,l,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)
}function l(f){
return Y(f)?Et(t,c)(f):o(f)
}function a(f){
return n(f)
}function c(f){
return f===34||f===39||f===40?Ke(t,s,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):o(f)
}function s(f){
return Y(f)?Et(t,o)(f):o(f)
}function o(f){
return f===41?(t.enter("resourceMarker"),t.consume(f),t.exit("resourceMarker"),t.exit("resource"),e):n(f)
}
}function Or(t,e,n){
const r=this;return i;function i(a){
return Xe.call(r,t,u,l,"reference","referenceMarker","referenceString")(a)
}function u(a){
return r.parser.defined.includes(yt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?e(a):n(a)
}function l(a){
return n(a)
}
}function Rr(t,e,n){
return r;function r(u){
return t.enter("reference"),t.enter("referenceMarker"),t.consume(u),t.exit("referenceMarker"),i
}function i(u){
return u===93?(t.enter("referenceMarker"),t.consume(u),t.exit("referenceMarker"),t.exit("reference"),e):n(u)
}
}const Mr={name:"labelStartImage",resolveAll:re.resolveAll,tokenize:Vr};function Vr(t,e,n){
const r=this;return i;function i(a){
return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(a),t.exit("labelImageMarker"),u
}function u(a){
return a===91?(t.enter("labelMarker"),t.consume(a),t.exit("labelMarker"),t.exit("labelImage"),l):n(a)
}function l(a){
return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):e(a)
}
}const qr={name:"labelStartLink",resolveAll:re.resolveAll,tokenize:jr};function jr(t,e,n){
const r=this;return i;function i(l){
return t.enter("labelLink"),t.enter("labelMarker"),t.consume(l),t.exit("labelMarker"),t.exit("labelLink"),u
}function u(l){
return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):e(l)
}
}const Vt={name:"lineEnding",tokenize:Hr};function Hr(t,e){
return n;function n(r){
return t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),D(t,e,"linePrefix")
}
}const _t={name:"thematicBreak",tokenize:Ur};function Ur(t,e,n){
let r=0,i;return u;function u(s){
return t.enter("thematicBreak"),l(s)
}function l(s){
return i=s,a(s)
}function a(s){
return s===i?(t.enter("thematicBreakSequence"),c(s)):r>=3&&(s===null||E(s))?(t.exit("thematicBreak"),e(s)):n(s)
}function c(s){
return s===i?(t.consume(s),r++,c):(t.exit("thematicBreakSequence"),N(s)?D(t,a,"whitespace")(s):a(s))
}
}const $={continuation:{tokenize:Wr},exit:Zr,name:"list",tokenize:Yr},Qr={partial:!0,tokenize:Gr},$r={partial:!0,tokenize:Jr};function Yr(t,e,n){
const r=this,i=r.events[r.events.length-1];let u=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,l=0;return a;function a(h){
const b=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(b==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:Gt(h)){
if(r.containerState.type||(r.containerState.type=b,t.enter(b,{_container:!0})),b==="listUnordered")return t.enter("listItemPrefix"),h===42||h===45?t.check(_t,n,s)(h):s(h);if(!r.interrupt||h===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),c(h)
}return n(h)
}function c(h){
return Gt(h)&&++l<10?(t.consume(h),c):(!r.interrupt||l<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(t.exit("listItemValue"),s(h)):n(h)
}function s(h){
return t.enter("listItemMarker"),t.consume(h),t.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,t.check(Dt,r.interrupt?n:o,t.attempt(Qr,g,f))
}function o(h){
return r.containerState.initialBlankLine=!0,u++,g(h)
}function f(h){
return N(h)?(t.enter("listItemPrefixWhitespace"),t.consume(h),t.exit("listItemPrefixWhitespace"),g):n(h)
}function g(h){
return r.containerState.size=u+r.sliceSerialize(t.exit("listItemPrefix"),!0).length,e(h)
}
}function Wr(t,e,n){
const r=this;return r.containerState._closeFlow=void 0,t.check(Dt,i,u);function i(a){
return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,D(t,e,"listItemIndent",r.containerState.size+1)(a)
}function u(a){
return r.containerState.furtherBlankLines||!N(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,t.attempt($r,e,l)(a))
}function l(a){
return r.containerState._closeFlow=!0,r.interrupt=void 0,D(t,t.attempt($,e,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)
}
}function Jr(t,e,n){
const r=this;return D(t,i,"listItemIndent",r.containerState.size+1);function i(u){
const l=r.events[r.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?e(u):n(u)
}
}function Zr(t){
t.exit(this.containerState.type)
}function Gr(t,e,n){
const r=this;return D(t,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(u){
const l=r.events[r.events.length-1];return!N(u)&&l&&l[1].type==="listItemPrefixWhitespace"?e(u):n(u)
}
}const Ee={name:"setextUnderline",resolveTo:Xr,tokenize:Kr};function Xr(t,e){
let n=t.length,r,i,u;for(;n--;)if(t[n][0]==="enter"){
if(t[n][1].type==="content"){
r=n;break
}t[n][1].type==="paragraph"&&(i=n)
}else t[n][1].type==="content"&&t.splice(n,1),!u&&t[n][1].type==="definition"&&(u=n);const l={type:"setextHeading",start:{...t[r][1].start},end:{...t[t.length-1][1].end}};return t[i][1].type="setextHeadingText",u?(t.splice(i,0,["enter",l,e]),t.splice(u+1,0,["exit",t[r][1],e]),t[r][1].end={...t[u][1].end}):t[r][1]=l,t.push(["exit",l,e]),t
}function Kr(t,e,n){
const r=this;let i;return u;function u(s){
let o=r.events.length,f;for(;o--;)if(r.events[o][1].type!=="lineEnding"&&r.events[o][1].type!=="linePrefix"&&r.events[o][1].type!=="content"){
f=r.events[o][1].type==="paragraph";break
}return!r.parser.lazy[r.now().line]&&(r.interrupt||f)?(t.enter("setextHeadingLine"),i=s,l(s)):n(s)
}function l(s){
return t.enter("setextHeadingLineSequence"),a(s)
}function a(s){
return s===i?(t.consume(s),a):(t.exit("setextHeadingLineSequence"),N(s)?D(t,c,"lineSuffix")(s):c(s))
}function c(s){
return s===null||E(s)?(t.exit("setextHeadingLine"),e(s)):n(s)
}
}const vr={tokenize:ti};function ti(t){
const e=this,n=t.attempt(Dt,r,t.attempt(this.parser.constructs.flowInitial,i,D(t,t.attempt(this.parser.constructs.flow,i,t.attempt(ur,i)),"linePrefix")));return n;function r(u){
if(u===null){
t.consume(u);return
}return t.enter("lineEndingBlank"),t.consume(u),t.exit("lineEndingBlank"),e.currentConstruct=void 0,n
}function i(u){
if(u===null){
t.consume(u);return
}return t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),e.currentConstruct=void 0,n
}
}const ei={resolveAll:tn()},ni=ve("string"),ri=ve("text");function ve(t){
return{resolveAll:tn(t==="text"?ii:void 0),tokenize:e};function e(n){
const r=this,i=this.parser.constructs[t],u=n.attempt(i,l,a);return l;function l(o){
return s(o)?u(o):a(o)
}function a(o){
if(o===null){
n.consume(o);return
}return n.enter("data"),n.consume(o),c
}function c(o){
return s(o)?(n.exit("data"),u(o)):(n.consume(o),c)
}function s(o){
if(o===null)return!0;const f=i[o];let g=-1;if(f)for(;++g<f.length;){
const h=f[g];if(!h.previous||h.previous.call(r,r.previous))return!0
}return!1
}
}
}function tn(t){
return e;function e(n,r){
let i=-1,u;for(;++i<=n.length;)u===void 0?n[i]&&n[i][1].type==="data"&&(u=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==u+2&&(n[u][1].end=n[i-1][1].end,n.splice(u+2,i-u-2),i=u+2),u=void 0);return t?t(n,r):n
}
}function ii(t,e){
let n=0;for(;++n<=t.length;)if((n===t.length||t[n][1].type==="lineEnding")&&t[n-1][1].type==="data"){
const r=t[n-1][1],i=e.sliceStream(r);let u=i.length,l=-1,a=0,c;for(;u--;){
const s=i[u];if(typeof s=="string"){
for(l=s.length;s.charCodeAt(l-1)===32;)a++,l--;if(l)break;l=-1
}else if(s===-2)c=!0,a++;else if(s!==-1){
u++;break
}
}if(e._contentTypeTextTrailing&&n===t.length&&(a=0),a){
const s={type:n===t.length||c||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:u?l:r.start._bufferIndex+l,_index:r.start._index+u,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...s.start},r.start.offset===r.end.offset?Object.assign(r,s):(t.splice(n,0,["enter",s,e],["exit",s,e]),n+=2)
}n++
}return t
}const ui={42:$,43:$,45:$,48:$,49:$,50:$,51:$,52:$,53:$,54:$,55:$,56:$,57:$,62:Ye},li={91:cr},ai={[-2]:Mt,[-1]:Mt,32:Mt},si={35:dr,42:_t,45:[Ee,_t],60:br,61:Ee,95:_t,96:Ie,126:Ie},oi={38:Je,92:We},ci={[-5]:Vt,[-4]:Vt,[-3]:Vt,33:Mr,38:Je,42:Xt,60:[qn,Ar],91:qr,92:[mr,We],93:re,95:Xt,96:vn},hi={null:[Xt,ei]},fi={null:[42,95]},pi={null:[]},mi=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:fi,contentInitial:li,disable:pi,document:ui,flow:si,flowInitial:ai,insideSpan:hi,string:oi,text:ci},Symbol.toStringTag,{value:"Module"}));function gi(t,e,n){
let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},u=[];let l=[],a=[];const c={attempt:_(V),check:_(y),consume:T,enter:S,exit:R,interrupt:_(y,{interrupt:!0})},s={code:null,containerState:{},defineSkip:w,events:[],now:b,parser:t,previous:null,sliceSerialize:g,sliceStream:h,write:f};let o=e.tokenize.call(s,c);return e.resolveAll&&u.push(e),s;function f(C){
return l=G(l,C),A(),l[l.length-1]!==null?[]:(q(e,0),s.events=ne(u,s.events,s),s.events)
}function g(C,I){
return yi(h(C),I)
}function h(C){
return di(l,C)
}function b(){
const{_bufferIndex:C,_index:I,line:M,column:j,offset:P}=r;return{_bufferIndex:C,_index:I,line:M,column:j,offset:P}
}function w(C){
i[C.line]=C.column,O()
}function A(){
let C;for(;r._index<l.length;){
const I=l[r._index];if(typeof I=="string")for(C=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===C&&r._bufferIndex<I.length;)x(I.charCodeAt(r._bufferIndex));else x(I)
}
}function x(C){
o=o(C)
}function T(C){
E(C)?(r.line++,r.column=1,r.offset+=C===-3?2:1,O()):C!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),s.previous=C
}function S(C,I){
const M=I||{};return M.type=C,M.start=b(),s.events.push(["enter",M,s]),a.push(M),M
}function R(C){
const I=a.pop();return I.end=b(),s.events.push(["exit",I,s]),I
}function V(C,I){
q(C,I.from)
}function y(C,I){
I.restore()
}function _(C,I){
return M;function M(j,P,Q){
let H,X,it,p;return Array.isArray(j)?ut(j):"tokenize"in j?ut([j]):K(j);function K(U){
return kt;function kt(st){
const pt=st!==null&&U[st],mt=st!==null&&U.null,Tt=[...Array.isArray(pt)?pt:pt?[pt]:[],...Array.isArray(mt)?mt:mt?[mt]:[]];return ut(Tt)(st)
}
}function ut(U){
return H=U,X=0,U.length===0?Q:m(U[X])
}function m(U){
return kt;function kt(st){
return p=B(),it=U,U.partial||(s.currentConstruct=U),U.name&&s.parser.constructs.disable.null.includes(U.name)?ht():U.tokenize.call(I?Object.assign(Object.create(s),I):s,c,v,ht)(st)
}
}function v(U){
return C(it,p),P
}function ht(U){
return p.restore(),++X<H.length?m(H[X]):Q
}
}
}function q(C,I){
C.resolveAll&&!u.includes(C)&&u.push(C),C.resolve&&rt(s.events,I,s.events.length-I,C.resolve(s.events.slice(I),s)),C.resolveTo&&(s.events=C.resolveTo(s.events,s))
}function B(){
const C=b(),I=s.previous,M=s.currentConstruct,j=s.events.length,P=Array.from(a);return{from:j,restore:Q};function Q(){
r=C,s.previous=I,s.currentConstruct=M,s.events.length=j,a=P,O()
}
}function O(){
r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)
}
}function di(t,e){
const n=e.start._index,r=e.start._bufferIndex,i=e.end._index,u=e.end._bufferIndex;let l;if(n===i)l=[t[n].slice(r,u)];else{
if(l=t.slice(n,i),r>-1){
const a=l[0];typeof a=="string"?l[0]=a.slice(r):l.shift()
}u>0&&l.push(t[i].slice(0,u))
}return l
}function yi(t,e){
let n=-1;const r=[];let i;for(;++n<t.length;){
const u=t[n];let l;if(typeof u=="string")l=u;else switch(u){
case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=e?" ":"	";break}case-1:{if(!e&&i)continue;l=" ";break}default:l=String.fromCharCode(u)
}i=u===-2,r.push(l)
}return r.join("")
}function xi(t){
const r={constructs:En([mi,...(t||{}).extensions||[]]),content:i(Bn),defined:[],document:i(Dn),flow:i(vr),lazy:{},string:i(ni),text:i(ri)};return r;function i(u){
return l;function l(a){
return gi(r,u,a)
}
}
}function ki(t){
for(;!Ze(t););return t
}const ze=/[\0\t\n\r]/g;function bi(){
let t=1,e="",n=!0,r;return i;function i(u,l,a){
const c=[];let s,o,f,g,h;for(u=e+(typeof u=="string"?u.toString():new TextDecoder(l||void 0).decode(u)),f=0,e="",n&&(u.charCodeAt(0)===65279&&f++,n=void 0);f<u.length;){
if(ze.lastIndex=f,s=ze.exec(u),g=s&&s.index!==void 0?s.index:u.length,h=u.charCodeAt(g),!s){
e=u.slice(f);break
}if(h===10&&f===g&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),f<g&&(c.push(u.slice(f,g)),t+=g-f),h){
case 0:{c.push(65533),t++;break}case 9:{for(o=Math.ceil(t/4)*4,c.push(-2);t++<o;)c.push(-1);break}case 10:{c.push(-4),t=1;break}default:r=!0,t=1
}f=g+1
}return a&&(r&&c.push(-5),e&&c.push(e),c.push(null)),c
}
}const wi=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Si(t){
return t.replace(wi,Ii)
}function Ii(t,e,n){
if(e)return e;if(n.charCodeAt(0)===35){
const i=n.charCodeAt(1),u=i===120||i===88;return $e(n.slice(u?2:1),u?16:10)
}return ee(n)||t
}const en={}.hasOwnProperty;function Ci(t,e,n){
return typeof e!="string"&&(n=e,e=void 0),Ei(n)(ki(xi(n).document().write(bi()(t,e,!0))))
}function Ei(t){
const e={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:u(fe),autolinkProtocol:B,autolinkEmail:B,atxHeading:u(oe),blockQuote:u(mt),characterEscape:B,characterReference:B,codeFenced:u(Tt),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:u(Tt,l),codeText:u(hn,l),codeTextData:B,data:B,codeFlowValue:B,definition:u(fn),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:u(pn),hardBreakEscape:u(ce),hardBreakTrailing:u(ce),htmlFlow:u(he,l),htmlFlowData:B,htmlText:u(he,l),htmlTextData:B,image:u(mn),label:l,link:u(fe),listItem:u(gn),listItemValue:g,listOrdered:u(pe,f),listUnordered:u(pe),paragraph:u(dn),reference:m,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:u(oe),strong:u(yn),thematicBreak:u(kn)},exit:{atxHeading:c(),atxHeadingSequence:V,autolink:c(),autolinkEmail:pt,autolinkProtocol:st,blockQuote:c(),characterEscapeValue:O,characterReferenceMarkerHexadecimal:ht,characterReferenceMarkerNumeric:ht,characterReferenceValue:U,characterReference:kt,codeFenced:c(A),codeFencedFence:w,codeFencedFenceInfo:h,codeFencedFenceMeta:b,codeFlowValue:O,codeIndented:c(x),codeText:c(P),codeTextData:O,data:O,definition:c(),definitionDestinationString:R,definitionLabelString:T,definitionTitleString:S,emphasis:c(),hardBreakEscape:c(I),hardBreakTrailing:c(I),htmlFlow:c(M),htmlFlowData:O,htmlText:c(j),htmlTextData:O,image:c(H),label:it,labelText:X,lineEnding:C,link:c(Q),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:v,resourceDestinationString:p,resourceTitleString:K,resource:ut,setextHeading:c(q),setextHeadingLineSequence:_,setextHeadingText:y,strong:c(),thematicBreak:c()}};nn(e,(t||{}).mdastExtensions||[]);const n={};return r;function r(d){
let k={type:"root",children:[]};const z={stack:[k],tokenStack:[],config:e,enter:a,exit:s,buffer:l,resume:o,data:n},F=[];let L=-1;for(;++L<d.length;)if(d[L][1].type==="listOrdered"||d[L][1].type==="listUnordered")if(d[L][0]==="enter")F.push(L);else{
const tt=F.pop();L=i(d,tt,L)
}for(L=-1;++L<d.length;){
const tt=e[d[L][0]];en.call(tt,d[L][1].type)&&tt[d[L][1].type].call(Object.assign({sliceSerialize:d[L][2].sliceSerialize},z),d[L][1])
}if(z.tokenStack.length>0){
const tt=z.tokenStack[z.tokenStack.length-1];(tt[1]||Ae).call(z,void 0,tt[0])
}for(k.position={start:ot(d.length>0?d[0][1].start:{line:1,column:1,offset:0}),end:ot(d.length>0?d[d.length-2][1].end:{line:1,column:1,offset:0})},L=-1;++L<e.transforms.length;)k=e.transforms[L](k)||k;return k
}function i(d,k,z){
let F=k-1,L=-1,tt=!1,ft,lt,bt,wt;for(;++F<=z;){
const J=d[F];switch(J[1].type){
case"listUnordered":case"listOrdered":case"blockQuote":{J[0]==="enter"?L++:L--,wt=void 0;break}case"lineEndingBlank":{J[0]==="enter"&&(ft&&!wt&&!L&&!bt&&(bt=F),wt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:wt=void 0
}if(!L&&J[0]==="enter"&&J[1].type==="listItemPrefix"||L===-1&&J[0]==="exit"&&(J[1].type==="listUnordered"||J[1].type==="listOrdered")){
if(ft){
let gt=F;for(lt=void 0;gt--;){
const at=d[gt];if(at[1].type==="lineEnding"||at[1].type==="lineEndingBlank"){
if(at[0]==="exit")continue;lt&&(d[lt][1].type="lineEndingBlank",tt=!0),at[1].type="lineEnding",lt=gt
}else if(!(at[1].type==="linePrefix"||at[1].type==="blockQuotePrefix"||at[1].type==="blockQuotePrefixWhitespace"||at[1].type==="blockQuoteMarker"||at[1].type==="listItemIndent"))break
}bt&&(!lt||bt<lt)&&(ft._spread=!0),ft.end=Object.assign({},lt?d[lt][1].start:J[1].end),d.splice(lt||F,0,["exit",ft,J[2]]),F++,z++
}if(J[1].type==="listItemPrefix"){
const gt={type:"listItem",_spread:!1,start:Object.assign({},J[1].start),end:void 0};ft=gt,d.splice(F,0,["enter",gt,J[2]]),F++,z++,bt=void 0,wt=!0
}
}
}return d[k][1]._spread=tt,z
}function u(d,k){
return z;function z(F){
a.call(this,d(F),F),k&&k.call(this,F)
}
}function l(){
this.stack.push({type:"fragment",children:[]})
}function a(d,k,z){
this.stack[this.stack.length-1].children.push(d),this.stack.push(d),this.tokenStack.push([k,z||void 0]),d.position={start:ot(k.start),end:void 0}
}function c(d){
return k;function k(z){
d&&d.call(this,z),s.call(this,z)
}
}function s(d,k){
const z=this.stack.pop(),F=this.tokenStack.pop();if(F)F[0].type!==d.type&&(k?k.call(this,d,F[0]):(F[1]||Ae).call(this,d,F[0]));else throw new Error("Cannot close `"+d.type+"` ("+Ct({start:d.start,end:d.end})+"): it’s not open");z.position.end=ot(d.end)
}function o(){
return In(this.stack.pop())
}function f(){
this.data.expectingFirstListItemValue=!0
}function g(d){
if(this.data.expectingFirstListItemValue){
const k=this.stack[this.stack.length-2];k.start=Number.parseInt(this.sliceSerialize(d),10),this.data.expectingFirstListItemValue=void 0
}
}function h(){
const d=this.resume(),k=this.stack[this.stack.length-1];k.lang=d
}function b(){
const d=this.resume(),k=this.stack[this.stack.length-1];k.meta=d
}function w(){
this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)
}function A(){
const d=this.resume(),k=this.stack[this.stack.length-1];k.value=d.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0
}function x(){
const d=this.resume(),k=this.stack[this.stack.length-1];k.value=d.replace(/(\r?\n|\r)$/g,"")
}function T(d){
const k=this.resume(),z=this.stack[this.stack.length-1];z.label=k,z.identifier=yt(this.sliceSerialize(d)).toLowerCase()
}function S(){
const d=this.resume(),k=this.stack[this.stack.length-1];k.title=d
}function R(){
const d=this.resume(),k=this.stack[this.stack.length-1];k.url=d
}function V(d){
const k=this.stack[this.stack.length-1];if(!k.depth){
const z=this.sliceSerialize(d).length;k.depth=z
}
}function y(){
this.data.setextHeadingSlurpLineEnding=!0
}function _(d){
const k=this.stack[this.stack.length-1];k.depth=this.sliceSerialize(d).codePointAt(0)===61?1:2
}function q(){
this.data.setextHeadingSlurpLineEnding=void 0
}function B(d){
const z=this.stack[this.stack.length-1].children;let F=z[z.length-1];(!F||F.type!=="text")&&(F=xn(),F.position={start:ot(d.start),end:void 0},z.push(F)),this.stack.push(F)
}function O(d){
const k=this.stack.pop();k.value+=this.sliceSerialize(d),k.position.end=ot(d.end)
}function C(d){
const k=this.stack[this.stack.length-1];if(this.data.atHardBreak){
const z=k.children[k.children.length-1];z.position.end=ot(d.end),this.data.atHardBreak=void 0;return
}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(k.type)&&(B.call(this,d),O.call(this,d))
}function I(){
this.data.atHardBreak=!0
}function M(){
const d=this.resume(),k=this.stack[this.stack.length-1];k.value=d
}function j(){
const d=this.resume(),k=this.stack[this.stack.length-1];k.value=d
}function P(){
const d=this.resume(),k=this.stack[this.stack.length-1];k.value=d
}function Q(){
const d=this.stack[this.stack.length-1];if(this.data.inReference){
const k=this.data.referenceType||"shortcut";d.type+="Reference",d.referenceType=k,delete d.url,delete d.title
}else delete d.identifier,delete d.label;this.data.referenceType=void 0
}function H(){
const d=this.stack[this.stack.length-1];if(this.data.inReference){
const k=this.data.referenceType||"shortcut";d.type+="Reference",d.referenceType=k,delete d.url,delete d.title
}else delete d.identifier,delete d.label;this.data.referenceType=void 0
}function X(d){
const k=this.sliceSerialize(d),z=this.stack[this.stack.length-2];z.label=Si(k),z.identifier=yt(k).toLowerCase()
}function it(){
const d=this.stack[this.stack.length-1],k=this.resume(),z=this.stack[this.stack.length-1];if(this.data.inReference=!0,z.type==="link"){
const F=d.children;z.children=F
}else z.alt=k
}function p(){
const d=this.resume(),k=this.stack[this.stack.length-1];k.url=d
}function K(){
const d=this.resume(),k=this.stack[this.stack.length-1];k.title=d
}function ut(){
this.data.inReference=void 0
}function m(){
this.data.referenceType="collapsed"
}function v(d){
const k=this.resume(),z=this.stack[this.stack.length-1];z.label=k,z.identifier=yt(this.sliceSerialize(d)).toLowerCase(),this.data.referenceType="full"
}function ht(d){
this.data.characterReferenceType=d.type
}function U(d){
const k=this.sliceSerialize(d),z=this.data.characterReferenceType;let F;z?(F=$e(k,z==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):F=ee(k);const L=this.stack[this.stack.length-1];L.value+=F
}function kt(d){
const k=this.stack.pop();k.position.end=ot(d.end)
}function st(d){
O.call(this,d);const k=this.stack[this.stack.length-1];k.url=this.sliceSerialize(d)
}function pt(d){
O.call(this,d);const k=this.stack[this.stack.length-1];k.url="mailto:"+this.sliceSerialize(d)
}function mt(){
return{type:"blockquote",children:[]}
}function Tt(){
return{type:"code",lang:null,meta:null,value:""}
}function hn(){
return{type:"inlineCode",value:""}
}function fn(){
return{type:"definition",identifier:"",label:null,title:null,url:""}
}function pn(){
return{type:"emphasis",children:[]}
}function oe(){
return{type:"heading",depth:0,children:[]}
}function ce(){
return{type:"break"}
}function he(){
return{type:"html",value:""}
}function mn(){
return{type:"image",title:null,url:"",alt:null}
}function fe(){
return{type:"link",title:null,url:"",children:[]}
}function pe(d){
return{type:"list",ordered:d.type==="listOrdered",start:null,spread:d._spread,children:[]}
}function gn(d){
return{type:"listItem",spread:d._spread,checked:null,children:[]}
}function dn(){
return{type:"paragraph",children:[]}
}function yn(){
return{type:"strong",children:[]}
}function xn(){
return{type:"text",value:""}
}function kn(){
return{type:"thematicBreak"}
}
}function ot(t){
return{line:t.line,column:t.column,offset:t.offset}
}function nn(t,e){
let n=-1;for(;++n<e.length;){
const r=e[n];Array.isArray(r)?nn(t,r):zi(t,r)
}
}function zi(t,e){
let n;for(n in e)if(en.call(e,n))switch(n){
case"canContainEols":{const r=e[n];r&&t[n].push(...r);break}case"transforms":{const r=e[n];r&&t[n].push(...r);break}case"enter":case"exit":{const r=e[n];r&&Object.assign(t[n],r);break}
}
}function Ae(t,e){
throw t?new Error("Cannot close `"+t.type+"` ("+Ct({start:t.start,end:t.end})+"): a different token (`"+e.type+"`, "+Ct({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+Ct({start:e.start,end:e.end})+") is still open")
}function Qu(t){
const e=this;e.parser=n;function n(r){
return Ci(r,{...e.data("settings"),...t,extensions:e.data("micromarkExtensions")||[],mdastExtensions:e.data("fromMarkdownExtensions")||[]})
}
}function Ai(t,e){
const n={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(e),!0)};return t.patch(e,n),t.applyData(e,n)
}function Ti(t,e){
const n={type:"element",tagName:"br",properties:{},children:[]};return t.patch(e,n),[t.applyData(e,n),{type:"text",value:`
`}]
}function Fi(t,e){
const n=e.value?e.value+`
`:"",r={};e.lang&&(r.className=["language-"+e.lang]);let i={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return e.meta&&(i.data={meta:e.meta}),t.patch(e,i),i=t.applyData(e,i),i={type:"element",tagName:"pre",properties:{},children:[i]},t.patch(e,i),i
}function Pi(t,e){
const n={type:"element",tagName:"del",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)
}function Ni(t,e){
const n={type:"element",tagName:"em",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)
}function _i(t,e){
const n=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",r=String(e.identifier).toUpperCase(),i=xt(r.toLowerCase()),u=t.footnoteOrder.indexOf(r);let l,a=t.footnoteCounts.get(r);a===void 0?(a=0,t.footnoteOrder.push(r),l=t.footnoteOrder.length):l=u+1,a+=1,t.footnoteCounts.set(r,a);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};t.patch(e,c);const s={type:"element",tagName:"sup",properties:{},children:[c]};return t.patch(e,s),t.applyData(e,s)
}function Bi(t,e){
const n={type:"element",tagName:"h"+e.depth,properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)
}function Li(t,e){
if(t.options.allowDangerousHtml){
const n={type:"raw",value:e.value};return t.patch(e,n),t.applyData(e,n)
}
}function rn(t,e){
const n=e.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(e.label||e.identifier)+"]"),e.type==="imageReference")return[{type:"text",value:"!["+e.alt+r}];const i=t.all(e),u=i[0];u&&u.type==="text"?u.value="["+u.value:i.unshift({type:"text",value:"["});const l=i[i.length-1];return l&&l.type==="text"?l.value+=r:i.push({type:"text",value:r}),i
}function Di(t,e){
const n=String(e.identifier).toUpperCase(),r=t.definitionById.get(n);if(!r)return rn(t,e);const i={src:xt(r.url||""),alt:e.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const u={type:"element",tagName:"img",properties:i,children:[]};return t.patch(e,u),t.applyData(e,u)
}function Oi(t,e){
const n={src:xt(e.url)};e.alt!==null&&e.alt!==void 0&&(n.alt=e.alt),e.title!==null&&e.title!==void 0&&(n.title=e.title);const r={type:"element",tagName:"img",properties:n,children:[]};return t.patch(e,r),t.applyData(e,r)
}function Ri(t,e){
const n={type:"text",value:e.value.replace(/\r?\n|\r/g," ")};t.patch(e,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return t.patch(e,r),t.applyData(e,r)
}function Mi(t,e){
const n=String(e.identifier).toUpperCase(),r=t.definitionById.get(n);if(!r)return rn(t,e);const i={href:xt(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const u={type:"element",tagName:"a",properties:i,children:t.all(e)};return t.patch(e,u),t.applyData(e,u)
}function Vi(t,e){
const n={href:xt(e.url)};e.title!==null&&e.title!==void 0&&(n.title=e.title);const r={type:"element",tagName:"a",properties:n,children:t.all(e)};return t.patch(e,r),t.applyData(e,r)
}function qi(t,e,n){
const r=t.all(e),i=n?ji(n):un(e),u={},l=[];if(typeof e.checked=="boolean"){
const o=r[0];let f;o&&o.type==="element"&&o.tagName==="p"?f=o:(f={type:"element",tagName:"p",properties:{},children:[]},r.unshift(f)),f.children.length>0&&f.children.unshift({type:"text",value:" "}),f.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:e.checked,disabled:!0},children:[]}),u.className=["task-list-item"]
}let a=-1;for(;++a<r.length;){
const o=r[a];(i||a!==0||o.type!=="element"||o.tagName!=="p")&&l.push({type:"text",value:`
`}),o.type==="element"&&o.tagName==="p"&&!i?l.push(...o.children):l.push(o)
}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&l.push({type:"text",value:`
`});const s={type:"element",tagName:"li",properties:u,children:l};return t.patch(e,s),t.applyData(e,s)
}function ji(t){
let e=!1;if(t.type==="list"){
e=t.spread||!1;const n=t.children;let r=-1;for(;!e&&++r<n.length;)e=un(n[r])
}return e
}function un(t){
const e=t.spread;return e??t.children.length>1
}function Hi(t,e){
const n={},r=t.all(e);let i=-1;for(typeof e.start=="number"&&e.start!==1&&(n.start=e.start);++i<r.length;){
const l=r[i];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){
n.className=["contains-task-list"];break
}
}const u={type:"element",tagName:e.ordered?"ol":"ul",properties:n,children:t.wrap(r,!0)};return t.patch(e,u),t.applyData(e,u)
}function Ui(t,e){
const n={type:"element",tagName:"p",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)
}function Qi(t,e){
const n={type:"root",children:t.wrap(t.all(e))};return t.patch(e,n),t.applyData(e,n)
}function $i(t,e){
const n={type:"element",tagName:"strong",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)
}function Yi(t,e){
const n=t.all(e),r=n.shift(),i=[];if(r){
const l={type:"element",tagName:"thead",properties:{},children:t.wrap([r],!0)};t.patch(e.children[0],l),i.push(l)
}if(n.length>0){
const l={type:"element",tagName:"tbody",properties:{},children:t.wrap(n,!0)},a=He(e.children[1]),c=je(e.children[e.children.length-1]);a&&c&&(l.position={start:a,end:c}),i.push(l)
}const u={type:"element",tagName:"table",properties:{},children:t.wrap(i,!0)};return t.patch(e,u),t.applyData(e,u)
}function Wi(t,e,n){
const r=n?n.children:void 0,u=(r?r.indexOf(e):1)===0?"th":"td",l=n&&n.type==="table"?n.align:void 0,a=l?l.length:e.children.length;let c=-1;const s=[];for(;++c<a;){
const f=e.children[c],g={},h=l?l[c]:void 0;h&&(g.align=h);let b={type:"element",tagName:u,properties:g,children:[]};f&&(b.children=t.all(f),t.patch(f,b),b=t.applyData(f,b)),s.push(b)
}const o={type:"element",tagName:"tr",properties:{},children:t.wrap(s,!0)};return t.patch(e,o),t.applyData(e,o)
}function Ji(t,e){
const n={type:"element",tagName:"td",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)
}const Te=9,Fe=32;function Zi(t){
const e=String(t),n=/\r?\n|\r/g;let r=n.exec(e),i=0;const u=[];for(;r;)u.push(Pe(e.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(e);return u.push(Pe(e.slice(i),i>0,!1)),u.join("")
}function Pe(t,e,n){
let r=0,i=t.length;if(e){
let u=t.codePointAt(r);for(;u===Te||u===Fe;)r++,u=t.codePointAt(r)
}if(n){
let u=t.codePointAt(i-1);for(;u===Te||u===Fe;)i--,u=t.codePointAt(i-1)
}return i>r?t.slice(r,i):""
}function Gi(t,e){
const n={type:"text",value:Zi(String(e.value))};return t.patch(e,n),t.applyData(e,n)
}function Xi(t,e){
const n={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(e,n),t.applyData(e,n)
}const Ki={blockquote:Ai,break:Ti,code:Fi,delete:Pi,emphasis:Ni,footnoteReference:_i,heading:Bi,html:Li,imageReference:Di,image:Oi,inlineCode:Ri,linkReference:Mi,link:Vi,listItem:qi,list:Hi,paragraph:Ui,root:Qi,strong:$i,table:Yi,tableCell:Ji,tableRow:Wi,text:Gi,thematicBreak:Xi,toml:Ft,yaml:Ft,definition:Ft,footnoteDefinition:Ft};function Ft(){}const ln=-1,Ot=0,zt=1,Bt=2,ie=3,ue=4,le=5,ae=6,an=7,sn=8,Ne=typeof self=="object"?self:globalThis,vi=(t,e)=>{
const n=(i,u)=>(t.set(u,i),i),r=i=>{
if(t.has(i))return t.get(i);const[u,l]=e[i];switch(u){
case Ot:case ln:return n(l,i);case zt:{const a=n([],i);for(const c of l)a.push(r(c));return a}case Bt:{const a=n({},i);for(const[c,s]of l)a[r(c)]=r(s);return a}case ie:return n(new Date(l),i);case ue:{const{source:a,flags:c}=l;return n(new RegExp(a,c),i)}case le:{const a=n(new Map,i);for(const[c,s]of l)a.set(r(c),r(s));return a}case ae:{const a=n(new Set,i);for(const c of l)a.add(r(c));return a}case an:{const{name:a,message:c}=l;return n(new Ne[a](c),i)}case sn:return n(BigInt(l),i);case"BigInt":return n(Object(BigInt(l)),i);case"ArrayBuffer":return n(new Uint8Array(l).buffer,l);case"DataView":{const{buffer:a}=new Uint8Array(l);return n(new DataView(a),l)}
}return n(new Ne[u](l),i)
};return r
},_e=t=>vi(new Map,t)(0),dt="",{toString:tu}={},{keys:eu}=Object,It=t=>{
const e=typeof t;if(e!=="object"||!t)return[Ot,e];const n=tu.call(t).slice(8,-1);switch(n){
case"Array":return[zt,dt];case"Object":return[Bt,dt];case"Date":return[ie,dt];case"RegExp":return[ue,dt];case"Map":return[le,dt];case"Set":return[ae,dt];case"DataView":return[zt,n]
}return n.includes("Array")?[zt,n]:n.includes("Error")?[an,n]:[Bt,n]
},Pt=([t,e])=>t===Ot&&(e==="function"||e==="symbol"),nu=(t,e,n,r)=>{
const i=(l,a)=>{
const c=r.push(l)-1;return n.set(a,c),c
},u=l=>{
if(n.has(l))return n.get(l);let[a,c]=It(l);switch(a){
case Ot:{let o=l;switch(c){
case"bigint":a=sn,o=l.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+c);o=null;break;case"undefined":return i([ln],l)
}return i([a,o],l)}case zt:{if(c){
let g=l;return c==="DataView"?g=new Uint8Array(l.buffer):c==="ArrayBuffer"&&(g=new Uint8Array(l)),i([c,[...g]],l)
}const o=[],f=i([a,o],l);for(const g of l)o.push(u(g));return f}case Bt:{if(c)switch(c){
case"BigInt":return i([c,l.toString()],l);case"Boolean":case"Number":case"String":return i([c,l.valueOf()],l)
}if(e&&"toJSON"in l)return u(l.toJSON());const o=[],f=i([a,o],l);for(const g of eu(l))(t||!Pt(It(l[g])))&&o.push([u(g),u(l[g])]);return f}case ie:return i([a,l.toISOString()],l);case ue:{const{source:o,flags:f}=l;return i([a,{source:o,flags:f}],l)}case le:{const o=[],f=i([a,o],l);for(const[g,h]of l)(t||!(Pt(It(g))||Pt(It(h))))&&o.push([u(g),u(h)]);return f}case ae:{const o=[],f=i([a,o],l);for(const g of l)(t||!Pt(It(g)))&&o.push(u(g));return f}
}const{message:s}=l;return i([a,{name:c,message:s}],l)
};return u
},Be=(t,{json:e,lossy:n}={})=>{
const r=[];return nu(!(e||n),!!e,new Map,r)(t),r
},Lt=typeof structuredClone=="function"?(t,e)=>e&&("json"in e||"lossy"in e)?_e(Be(t,e)):structuredClone(t):(t,e)=>_e(Be(t,e));function ru(t,e){
const n=[{type:"text",value:"↩"}];return e>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(e)}]}),n
}function iu(t,e){
return"Back to reference "+(t+1)+(e>1?"-"+e:"")
}function uu(t){
const e=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",n=t.options.footnoteBackContent||ru,r=t.options.footnoteBackLabel||iu,i=t.options.footnoteLabel||"Footnotes",u=t.options.footnoteLabelTagName||"h2",l=t.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let c=-1;for(;++c<t.footnoteOrder.length;){
const s=t.footnoteById.get(t.footnoteOrder[c]);if(!s)continue;const o=t.all(s),f=String(s.identifier).toUpperCase(),g=xt(f.toLowerCase());let h=0;const b=[],w=t.footnoteCounts.get(f);for(;w!==void 0&&++h<=w;){
b.length>0&&b.push({type:"text",value:" "});let T=typeof n=="string"?n:n(c,h);typeof T=="string"&&(T={type:"text",value:T}),b.push({type:"element",tagName:"a",properties:{href:"#"+e+"fnref-"+g+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,h),className:["data-footnote-backref"]},children:Array.isArray(T)?T:[T]})
}const A=o[o.length-1];if(A&&A.type==="element"&&A.tagName==="p"){
const T=A.children[A.children.length-1];T&&T.type==="text"?T.value+=" ":A.children.push({type:"text",value:" "}),A.children.push(...b)
}else o.push(...b);const x={type:"element",tagName:"li",properties:{id:e+"fn-"+g},children:t.wrap(o,!0)};t.patch(s,x),a.push(x)
}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:u,properties:{...Lt(l),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(a,!0)},{type:"text",value:`
`}]}
}const on=function(t){
if(t==null)return ou;if(typeof t=="function")return Rt(t);if(typeof t=="object")return Array.isArray(t)?lu(t):au(t);if(typeof t=="string")return su(t);throw new Error("Expected function, string, or object as test")
};function lu(t){
const e=[];let n=-1;for(;++n<t.length;)e[n]=on(t[n]);return Rt(r);function r(...i){
let u=-1;for(;++u<e.length;)if(e[u].apply(this,i))return!0;return!1
}
}function au(t){
const e=t;return Rt(n);function n(r){
const i=r;let u;for(u in t)if(i[u]!==e[u])return!1;return!0
}
}function su(t){
return Rt(e);function e(n){
return n&&n.type===t
}
}function Rt(t){
return e;function e(n,r,i){
return!!(cu(n)&&t.call(this,n,typeof r=="number"?r:void 0,i||void 0))
}
}function ou(){
return!0
}function cu(t){
return t!==null&&typeof t=="object"&&"type"in t
}const cn=[],hu=!0,Le=!1,fu="skip";function pu(t,e,n,r){
let i;typeof e=="function"&&typeof n!="function"?(r=n,n=e):i=e;const u=on(i),l=r?-1:1;a(t,void 0,[])();function a(c,s,o){
const f=c&&typeof c=="object"?c:{};if(typeof f.type=="string"){
const h=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0;Object.defineProperty(g,"name",{value:"node ("+(c.type+(h?"<"+h+">":""))+")"})
}return g;function g(){
let h=cn,b,w,A;if((!e||u(c,s,o[o.length-1]||void 0))&&(h=mu(n(c,o)),h[0]===Le))return h;if("children"in c&&c.children){
const x=c;if(x.children&&h[0]!==fu)for(w=(r?x.children.length:-1)+l,A=o.concat(x);w>-1&&w<x.children.length;){
const T=x.children[w];if(b=a(T,w,A)(),b[0]===Le)return b;w=typeof b[1]=="number"?b[1]:w+l
}
}return h
}
}
}function mu(t){
return Array.isArray(t)?t:typeof t=="number"?[hu,t]:t==null?cn:[t]
}function gu(t,e,n,r){
let i,u,l;typeof e=="function"&&typeof n!="function"?(u=void 0,l=e,i=n):(u=e,l=n,i=r),pu(t,u,a,i);function a(c,s){
const o=s[s.length-1],f=o?o.children.indexOf(c):void 0;return l(c,f,o)
}
}const Kt={}.hasOwnProperty,du={};function yu(t,e){
const n=e||du,r=new Map,i=new Map,u=new Map,l={...Ki,...n.handlers},a={all:s,applyData:ku,definitionById:r,footnoteById:i,footnoteCounts:u,footnoteOrder:[],handlers:l,one:c,options:n,patch:xu,wrap:wu};return gu(t,function(o){
if(o.type==="definition"||o.type==="footnoteDefinition"){
const f=o.type==="definition"?r:i,g=String(o.identifier).toUpperCase();f.has(g)||f.set(g,o)
}
}),a;function c(o,f){
const g=o.type,h=a.handlers[g];if(Kt.call(a.handlers,g)&&h)return h(a,o,f);if(a.options.passThrough&&a.options.passThrough.includes(g)){
if("children"in o){
const{children:w,...A}=o,x=Lt(A);return x.children=a.all(o),x
}return Lt(o)
}return(a.options.unknownHandler||bu)(a,o,f)
}function s(o){
const f=[];if("children"in o){
const g=o.children;let h=-1;for(;++h<g.length;){
const b=a.one(g[h],o);if(b){
if(h&&g[h-1].type==="break"&&(!Array.isArray(b)&&b.type==="text"&&(b.value=De(b.value)),!Array.isArray(b)&&b.type==="element")){
const w=b.children[0];w&&w.type==="text"&&(w.value=De(w.value))
}Array.isArray(b)?f.push(...b):f.push(b)
}
}
}return f
}
}function xu(t,e){
t.position&&(e.position=wn(t))
}function ku(t,e){
let n=e;if(t&&t.data){
const r=t.data.hName,i=t.data.hChildren,u=t.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{
const l="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:l}
}n.type==="element"&&u&&Object.assign(n.properties,Lt(u)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)
}return n
}function bu(t,e){
const n=e.data||{},r="value"in e&&!(Kt.call(n,"hProperties")||Kt.call(n,"hChildren"))?{type:"text",value:e.value}:{type:"element",tagName:"div",properties:{},children:t.all(e)};return t.patch(e,r),t.applyData(e,r)
}function wu(t,e){
const n=[];let r=-1;for(e&&n.push({type:"text",value:`
`});++r<t.length;)r&&n.push({type:"text",value:`
`}),n.push(t[r]);return e&&t.length>0&&n.push({type:"text",value:`
`}),n
}function De(t){
let e=0,n=t.charCodeAt(e);for(;n===9||n===32;)e++,n=t.charCodeAt(e);return t.slice(e)
}function $u(t,e){
const n=yu(t,e),r=n.one(t,void 0),i=uu(n),u=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&u.children.push({type:"text",value:`
`},i),u
}function Oe(t){
if(t)throw t
}var qt,Re;function Su(){
if(Re)return qt;Re=1;var t=Object.prototype.hasOwnProperty,e=Object.prototype.toString,n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=function(s){
return typeof Array.isArray=="function"?Array.isArray(s):e.call(s)==="[object Array]"
},u=function(s){
if(!s||e.call(s)!=="[object Object]")return!1;var o=t.call(s,"constructor"),f=s.constructor&&s.constructor.prototype&&t.call(s.constructor.prototype,"isPrototypeOf");if(s.constructor&&!o&&!f)return!1;var g;for(g in s);return typeof g>"u"||t.call(s,g)
},l=function(s,o){
n&&o.name==="__proto__"?n(s,o.name,{enumerable:!0,configurable:!0,value:o.newValue,writable:!0}):s[o.name]=o.newValue
},a=function(s,o){
if(o==="__proto__")if(t.call(s,o)){
if(r)return r(s,o).value
}else return;return s[o]
};return qt=function c(){
var s,o,f,g,h,b,w=arguments[0],A=1,x=arguments.length,T=!1;for(typeof w=="boolean"&&(T=w,w=arguments[1]||{},A=2),(w==null||typeof w!="object"&&typeof w!="function")&&(w={});A<x;++A)if(s=arguments[A],s!=null)for(o in s)f=a(w,o),g=a(s,o),w!==g&&(T&&g&&(u(g)||(h=i(g)))?(h?(h=!1,b=f&&i(f)?f:[]):b=f&&u(f)?f:{},l(w,{name:o,newValue:c(T,b,g)})):typeof g<"u"&&l(w,{name:o,newValue:g}));return w
},qt
}var Iu=Su();const jt=bn(Iu);function vt(t){
if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)
}function Cu(){
const t=[],e={run:n,use:r};return e;function n(...i){
let u=-1;const l=i.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);a(null,...i);function a(c,...s){
const o=t[++u];let f=-1;if(c){
l(c);return
}for(;++f<i.length;)(s[f]===null||s[f]===void 0)&&(s[f]=i[f]);i=s,o?Eu(o,a)(...s):l(null,...s)
}
}function r(i){
if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return t.push(i),e
}
}function Eu(t,e){
let n;return r;function r(...l){
const a=t.length>l.length;let c;a&&l.push(i);try{
c=t.apply(this,l)
}catch(s){
const o=s;if(a&&n)throw o;return i(o)
}a||(c&&c.then&&typeof c.then=="function"?c.then(u,i):c instanceof Error?i(c):u(c))
}function i(l,...a){
n||(n=!0,e(l,...a))
}function u(l){
i(null,l)
}
}const et={basename:zu,dirname:Au,extname:Tu,join:Fu,sep:"/"};function zu(t,e){
if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');At(t);let n=0,r=-1,i=t.length,u;if(e===void 0||e.length===0||e.length>t.length){
for(;i--;)if(t.codePointAt(i)===47){
if(u){
n=i+1;break
}
}else r<0&&(u=!0,r=i+1);return r<0?"":t.slice(n,r)
}if(e===t)return"";let l=-1,a=e.length-1;for(;i--;)if(t.codePointAt(i)===47){
if(u){
n=i+1;break
}
}else l<0&&(u=!0,l=i+1),a>-1&&(t.codePointAt(i)===e.codePointAt(a--)?a<0&&(r=i):(a=-1,r=l));return n===r?r=l:r<0&&(r=t.length),t.slice(n,r)
}function Au(t){
if(At(t),t.length===0)return".";let e=-1,n=t.length,r;for(;--n;)if(t.codePointAt(n)===47){
if(r){
e=n;break
}
}else r||(r=!0);return e<0?t.codePointAt(0)===47?"/":".":e===1&&t.codePointAt(0)===47?"//":t.slice(0,e)
}function Tu(t){
At(t);let e=t.length,n=-1,r=0,i=-1,u=0,l;for(;e--;){
const a=t.codePointAt(e);if(a===47){
if(l){
r=e+1;break
}continue
}n<0&&(l=!0,n=e+1),a===46?i<0?i=e:u!==1&&(u=1):i>-1&&(u=-1)
}return i<0||n<0||u===0||u===1&&i===n-1&&i===r+1?"":t.slice(i,n)
}function Fu(...t){
let e=-1,n;for(;++e<t.length;)At(t[e]),t[e]&&(n=n===void 0?t[e]:n+"/"+t[e]);return n===void 0?".":Pu(n)
}function Pu(t){
At(t);const e=t.codePointAt(0)===47;let n=Nu(t,!e);return n.length===0&&!e&&(n="."),n.length>0&&t.codePointAt(t.length-1)===47&&(n+="/"),e?"/"+n:n
}function Nu(t,e){
let n="",r=0,i=-1,u=0,l=-1,a,c;for(;++l<=t.length;){
if(l<t.length)a=t.codePointAt(l);else{
if(a===47)break;a=47
}if(a===47){
if(!(i===l-1||u===1))if(i!==l-1&&u===2){
if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){
if(n.length>2){
if(c=n.lastIndexOf("/"),c!==n.length-1){
c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=l,u=0;continue
}
}else if(n.length>0){
n="",r=0,i=l,u=0;continue
}
}e&&(n=n.length>0?n+"/..":"..",r=2)
}else n.length>0?n+="/"+t.slice(i+1,l):n=t.slice(i+1,l),r=l-i-1;i=l,u=0
}else a===46&&u>-1?u++:u=-1
}return n
}function At(t){
if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))
}const _u={cwd:Bu};function Bu(){
return"/"
}function te(t){
return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)
}function Lu(t){
if(typeof t=="string")t=new URL(t);else if(!te(t)){
const e=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw e.code="ERR_INVALID_ARG_TYPE",e
}if(t.protocol!=="file:"){
const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e
}return Du(t)
}function Du(t){
if(t.hostname!==""){
const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r
}const e=t.pathname;let n=-1;for(;++n<e.length;)if(e.codePointAt(n)===37&&e.codePointAt(n+1)===50){
const r=e.codePointAt(n+2);if(r===70||r===102){
const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i
}
}return decodeURIComponent(e)
}const Ht=["history","path","basename","stem","extname","dirname"];class Ou{
constructor(e){
let n;e?te(e)?n={path:e}:typeof e=="string"||Ru(e)?n={value:e}:n=e:n={},this.cwd="cwd"in n?"":_u.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Ht.length;){
const u=Ht[r];u in n&&n[u]!==void 0&&n[u]!==null&&(this[u]=u==="history"?[...n[u]]:n[u])
}let i;for(i in n)Ht.includes(i)||(this[i]=n[i])
}get basename(){
return typeof this.path=="string"?et.basename(this.path):void 0
}set basename(e){
Qt(e,"basename"),Ut(e,"basename"),this.path=et.join(this.dirname||"",e)
}get dirname(){
return typeof this.path=="string"?et.dirname(this.path):void 0
}set dirname(e){
Me(this.basename,"dirname"),this.path=et.join(e||"",this.basename)
}get extname(){
return typeof this.path=="string"?et.extname(this.path):void 0
}set extname(e){
if(Ut(e,"extname"),Me(this.dirname,"extname"),e){
if(e.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")
}this.path=et.join(this.dirname,this.stem+(e||""))
}get path(){
return this.history[this.history.length-1]
}set path(e){
te(e)&&(e=Lu(e)),Qt(e,"path"),this.path!==e&&this.history.push(e)
}get stem(){
return typeof this.path=="string"?et.basename(this.path,this.extname):void 0
}set stem(e){
Qt(e,"stem"),Ut(e,"stem"),this.path=et.join(this.dirname||"",e+(this.extname||""))
}fail(e,n,r){
const i=this.message(e,n,r);throw i.fatal=!0,i
}info(e,n,r){
const i=this.message(e,n,r);return i.fatal=void 0,i
}message(e,n,r){
const i=new W(e,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i
}toString(e){
return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(e||void 0).decode(this.value)
}
}function Ut(t,e){
if(t&&t.includes(et.sep))throw new Error("`"+e+"` cannot be a path: did not expect `"+et.sep+"`")
}function Qt(t,e){
if(!t)throw new Error("`"+e+"` cannot be empty")
}function Me(t,e){
if(!t)throw new Error("Setting `"+e+"` requires `path` to be set too")
}function Ru(t){
return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)
}const Mu=function(t){
const r=this.constructor.prototype,i=r[t],u=function(){
return i.apply(u,arguments)
};return Object.setPrototypeOf(u,r),u
},Vu={}.hasOwnProperty;class se extends Mu{
constructor(){
super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Cu()
}copy(){
const e=new se;let n=-1;for(;++n<this.attachers.length;){
const r=this.attachers[n];e.use(...r)
}return e.data(jt(!0,{},this.namespace)),e
}data(e,n){
return typeof e=="string"?arguments.length===2?(Wt("data",this.frozen),this.namespace[e]=n,this):Vu.call(this.namespace,e)&&this.namespace[e]||void 0:e?(Wt("data",this.frozen),this.namespace=e,this):this.namespace
}freeze(){
if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){
const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(e,...r);typeof i=="function"&&this.transformers.use(i)
}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this
}parse(e){
this.freeze();const n=Nt(e),r=this.parser||this.Parser;return $t("parse",r),r(String(n),n)
}process(e,n){
const r=this;return this.freeze(),$t("process",this.parser||this.Parser),Yt("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(u,l){
const a=Nt(e),c=r.parse(a);r.run(c,a,function(o,f,g){
if(o||!f||!g)return s(o);const h=f,b=r.stringify(h,g);ju(b)?g.value=b:g.result=b,s(o,g)
});function s(o,f){
o||!f?l(o):u?u(f):n(void 0,f)
}
}
}processSync(e){
let n=!1,r;return this.freeze(),$t("processSync",this.parser||this.Parser),Yt("processSync",this.compiler||this.Compiler),this.process(e,i),qe("processSync","process",n),r;function i(u,l){
n=!0,Oe(u),r=l
}
}run(e,n,r){
Ve(e),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?u(void 0,r):new Promise(u);function u(l,a){
const c=Nt(n);i.run(e,c,s);function s(o,f,g){
const h=f||e;o?a(o):l?l(h):r(void 0,h,g)
}
}
}runSync(e,n){
let r=!1,i;return this.run(e,n,u),qe("runSync","run",r),i;function u(l,a){
Oe(l),i=a,r=!0
}
}stringify(e,n){
this.freeze();const r=Nt(n),i=this.compiler||this.Compiler;return Yt("stringify",i),Ve(e),i(e,r)
}use(e,...n){
const r=this.attachers,i=this.namespace;if(Wt("use",this.frozen),e!=null)if(typeof e=="function")c(e,n);else if(typeof e=="object")Array.isArray(e)?a(e):l(e);else throw new TypeError("Expected usable value, not `"+e+"`");return this;function u(s){
if(typeof s=="function")c(s,[]);else if(typeof s=="object")if(Array.isArray(s)){
const[o,...f]=s;c(o,f)
}else l(s);else throw new TypeError("Expected usable value, not `"+s+"`")
}function l(s){
if(!("plugins"in s)&&!("settings"in s))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(s.plugins),s.settings&&(i.settings=jt(!0,i.settings,s.settings))
}function a(s){
let o=-1;if(s!=null)if(Array.isArray(s))for(;++o<s.length;){
const f=s[o];u(f)
}else throw new TypeError("Expected a list of plugins, not `"+s+"`")
}function c(s,o){
let f=-1,g=-1;for(;++f<r.length;)if(r[f][0]===s){
g=f;break
}if(g===-1)r.push([s,...o]);else if(o.length>0){
let[h,...b]=o;const w=r[g][1];vt(w)&&vt(h)&&(h=jt(!0,w,h)),r[g]=[s,h,...b]
}
}
}
}const Yu=new se().freeze();function $t(t,e){
if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `parser`")
}function Yt(t,e){
if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")
}function Wt(t,e){
if(e)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
}function Ve(t){
if(!vt(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")
}function qe(t,e,n){
if(!n)throw new Error("`"+t+"` finished async. Use `"+e+"` instead")
}function Nt(t){
return qu(t)?t:new Ou(t)
}function qu(t){
return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)
}function ju(t){
return typeof t=="string"||Hu(t)
}function Hu(t){
return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)
}export{je as A,Le as E,W as V,He as a,Ou as b,on as c,pu as d,_n as e,Nn as f,be as g,In as h,Z as i,nt as j,Zt as k,Dt as l,Y as m,yt as n,D as o,wn as p,rt as q,Qu as r,Lt as s,$u as t,Yu as u,gu as v,ne as w,E as x,N as y,En as z};
