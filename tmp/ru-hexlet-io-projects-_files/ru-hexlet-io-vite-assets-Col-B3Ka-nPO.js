import{c as $,u as d,b as B,d as h}from"./ThemeProvider-BCC4u8C0.js";import{r as C,j}from"./index-f3ZQ7e7G.js";function x({as:l,bsPrefix:s,className:c,...o}){
s=d(s,"col");const p=B(),u=h(),e=[],f=[];return p.forEach(a=>{
const n=o[a];delete o[a];let t,i,m;typeof n=="object"&&n!=null?{span:t,offset:i,order:m}=n:t=n;const r=a!==u?`-${a}`:"";t&&e.push(t===!0?`${s}${r}`:`${s}${r}-${t}`),m!=null&&f.push(`order${r}-${m}`),i!=null&&f.push(`offset${r}-${i}`)
}),[{...o,className:$(c,...e,...f)},{as:l,bsPrefix:s,spans:e}]
}const N=C.forwardRef((l,s)=>{
const[{className:c,...o},{as:p="div",bsPrefix:u,spans:e}]=x(l);return j.jsx(p,{...o,ref:s,className:$(c,!e.length&&u)})
});N.displayName="Col";export{N as C};
