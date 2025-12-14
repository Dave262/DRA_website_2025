import{jsx as t}from"react/jsx-runtime";import{memo as e,useRef as n,useState as r,useMemo as o,useEffect as c}from"react";import s from"wavesurfer.js";
/*! *****************************************************************************
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
***************************************************************************** */function i(t,e){const[n,i]=r(null),a=o((()=>Object.entries(e).flat()),[e]);return c((()=>{if(!(null==t?void 0:t.current))return;const n=s.create(Object.assign(Object.assign({},e),{container:t.current}));return i(n),()=>{n.destroy()}}),[t,...a]),n}const a=/^on([A-Z])/,u=t=>a.test(t);function f(t,e){const n=o((()=>Object.entries(e).flat()),[e]);c((()=>{if(!t)return;const n=Object.entries(e);if(!n.length)return;const r=n.map((([e,n])=>{const r=e.replace(a,((t,e)=>e.toLowerCase()));return t.on(r,((...e)=>n(t,...e)))}));return()=>{r.forEach((t=>t()))}}),[t,...n])}const l=e((e=>{const r=n(null),[c,s]=function(t){return o((()=>{const e=Object.assign({},t),n=Object.assign({},t);for(const t in e)u(t)?delete e[t]:delete n[t];return[e,n]}),[t])}(e);return f(i(r,c),s),t("div",{ref:r})}));function p(t){var{container:e}=t;const n=i(e,function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}(t,["container"])),s=function(t){const[e,n]=r(!1),[s,i]=r(!1),[a,u]=r(!1),[f,l]=r(0);return c((()=>{if(!t)return;const e=[t.on("load",(()=>{n(!1),i(!1),l(0)})),t.on("ready",(()=>{n(!0),i(!1),u(!1),l(0)})),t.on("finish",(()=>{u(!0)})),t.on("play",(()=>{i(!0)})),t.on("pause",(()=>{i(!1)})),t.on("timeupdate",(()=>{l(t.getCurrentTime())})),t.on("destroy",(()=>{n(!1),i(!1)}))];return()=>{e.forEach((t=>t()))}}),[t]),o((()=>({isReady:e,isPlaying:s,hasFinished:a,currentTime:f})),[s,a,f,e])}(n);return o((()=>Object.assign(Object.assign({},s),{wavesurfer:n})),[s,n])}export{l as default,p as useWavesurfer};
