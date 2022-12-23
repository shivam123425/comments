'use strict';

var react = require('@stitches/react');
var u = require('react');

var p=Object.defineProperty;var n=Object.getOwnPropertySymbols;var a=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var e=(r,t,o)=>t in r?p(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,m=(r,t)=>{for(var o in t||(t={}))a.call(t,o)&&e(r,o,t[o]);if(n)for(var o of n(t))b.call(t,o)&&e(r,o,t[o]);return r};var {styled:i,theme:c,css:h}=react.createStitches({media:{bp1:"(min-width: 640px)",bp2:"(min-width: 768px)",bp3:"(min-width: 1024px)"},utils:{m:r=>({margin:r}),mt:r=>({marginTop:r}),mr:r=>({marginRight:r}),mb:r=>({marginBottom:r}),ml:r=>({marginLeft:r}),mx:r=>({marginLeft:r,marginRight:r}),my:r=>({marginTop:r,marginBottom:r}),size:r=>({width:r,height:r}),linearGradient:r=>({backgroundImage:`linear-gradient(${r})`}),br:r=>({borderRadius:r})}});var f=i("button",{backgroundColor:"gainsboro",borderRadius:"9999px",fontSize:"13px",border:"0","&::before":{content:"''",display:"block",backgroundImage:"linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)",position:"absolute",top:"-3px",left:"-3px",width:"calc(100% + 6px)",height:"calc(100% + 6px)",borderRadius:"inherit",zIndex:-1}}),R=r=>u.createElement(f,{"data-variant":r.variant},r.children);var L=r=>u.createElement("input",m({},r));

exports.Button = R;
exports.Input = L;
exports.css = h;
exports.styled = i;
exports.theme = c;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map