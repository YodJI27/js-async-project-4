import{g as x}from"./_commonjsHelpers-D6-XlEtG.js";import{r as o}from"./index-f3ZQ7e7G.js";var u={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var p;function m(){
return p||(p=1,function(n){
(function(){
var a={}.hasOwnProperty;function s(){
for(var t="",r=0;r<arguments.length;r++){
var e=arguments[r];e&&(t=c(t,f(e)))
}return t
}function f(t){
if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return s.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var r="";for(var e in t)a.call(t,e)&&t[e]&&(r=c(r,e));return r
}function c(t,r){
return r?t?t+" "+r:t+r:t
}n.exports?(s.default=s,n.exports=s):window.classNames=s
})()
}(u)),u.exports
}var l=m();const E=x(l),B=["xxl","xl","lg","md","sm","xs"],C="xs",i=o.createContext({prefixes:{},breakpoints:B,minBreakpoint:C}),{Consumer:b,Provider:y}=i;function A(n,a){
const{prefixes:s}=o.useContext(i);return n||s[a]||a
}function S(){
const{breakpoints:n}=o.useContext(i);return n
}function T(){
const{minBreakpoint:n}=o.useContext(i);return n
}function h(){
const{dir:n}=o.useContext(i);return n==="rtl"
}export{h as a,S as b,E as c,T as d,m as r,A as u};
