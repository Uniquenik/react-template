import{r as h,e as S,j as i,L as p,T as x,d as b,S as w,B as E,f as I}from"./vendor-42410979.js";import{s as L,a as k}from"./firebase-config-cefd9939.js";import{u as A,D as C}from"./DefaultLayout-4cbc9b45.js";import"./index-7eb3d425.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function W(o,c,n,s){function r(t){return t instanceof n?t:new n(function(u){u(t)})}return new(n||(n=Promise))(function(t,u){function l(a){try{e(s.next(a))}catch(d){u(d)}}function f(a){try{e(s.throw(a))}catch(d){u(d)}}function e(a){a.done?t(a.value):r(a.value).then(l,f)}e((s=s.apply(o,c||[])).next())})}function _(o,c){var n={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},s,r,t,u;return u={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function l(e){return function(a){return f([e,a])}}function f(e){if(s)throw new TypeError("Generator is already executing.");for(;n;)try{if(s=1,r&&(t=e[0]&2?r.return:e[0]?r.throw||((t=r.return)&&t.call(r),0):r.next)&&!(t=t.call(r,e[1])).done)return t;switch(r=0,t&&(e=[e[0]&2,t.value]),e[0]){case 0:case 1:t=e;break;case 4:return n.label++,{value:e[1],done:!1};case 5:n.label++,r=e[1],e=[0];continue;case 7:e=n.ops.pop(),n.trys.pop();continue;default:if(t=n.trys,!(t=t.length>0&&t[t.length-1])&&(e[0]===6||e[0]===2)){n=0;continue}if(e[0]===3&&(!t||e[1]>t[0]&&e[1]<t[3])){n.label=e[1];break}if(e[0]===6&&n.label<t[1]){n.label=t[1],t=e;break}if(t&&n.label<t[2]){n.label=t[2],n.ops.push(e);break}t[2]&&n.ops.pop(),n.trys.pop();continue}e=c.call(o,n)}catch(a){e=[6,a],r=0}finally{s=t=0}if(e[0]&5)throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}}var z=function(o){var c=h.useState(),n=c[0],s=c[1],r=h.useState(),t=r[0],u=r[1],l=h.useState(!1),f=l[0],e=l[1],a=function(y,j){return W(void 0,void 0,void 0,function(){var m,v;return _(this,function(g){switch(g.label){case 0:e(!0),s(void 0),g.label=1;case 1:return g.trys.push([1,3,4,5]),[4,L(o,y,j)];case 2:return m=g.sent(),u(m),[3,5];case 3:return v=g.sent(),s(v),[3,5];case 4:return e(!1),[7];case 5:return[2]}})})},d=[a,t,f,n];return h.useMemo(function(){return d},d)};const P=()=>{A();const[o,c,n,s]=z(k),[r,t]=h.useState(""),[u,l]=h.useState("");S();const f=()=>{o(r,u).then(e=>{})};return i.jsxs(i.Fragment,{children:[n&&i.jsx(p,{visible:!0}),i.jsx(x,{variant:"filled",size:"lg",icon:i.jsx(b.Mail,{}),placeholder:"Электронная почта",onChange:e=>{t(e.target.value)}}),i.jsx(w,{h:"sm"}),i.jsx(x,{variant:"filled",size:"lg",icon:i.jsx(b.Lock,{}),placeholder:"Пароль",onChange:e=>{l(e.target.value)}}),i.jsx(w,{h:"xl"}),i.jsx(E,{size:"lg",fullWidth:!0,onClick:f,children:"Вход"}),s==null?void 0:s.message]})},R=()=>i.jsx(C,{children:i.jsx(I,{size:"md",children:i.jsx(P,{})})});export{R as default};
