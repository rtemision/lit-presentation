import{d as _,i as d,a as p,u as h,b as u,c as m,e as f,f as n,g as t,t as a,h as s,F as g,r as v,n as x,j as y,o as l,k as b,l as N,m as k,p as w,q as P,_ as S}from"./index-4dcba6d8.js";import{N as V}from"./NoteDisplay-fb093558.js";const j={class:"m-4"},D={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},C={class:"font-bold flex gap-2"},H={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=_({__name:"PresenterPrint",setup(q){d(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const r=f(()=>y.slice(0,-1).map(o=>{var i;return(i=o.meta)==null?void 0:i.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,i)=>(l(),n("div",{id:"page-root",style:x(s(P))},[t("div",j,[t("div",D,[t("h1",L,a(s(m).title),1),t("div",T,a(new Date().toLocaleString()),1)]),(l(!0),n(g,null,v(s(r),(e,c)=>(l(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",C,[t("div",H,a(e==null?void 0:e.no)+"/"+a(s(b)),1),N(" "+a(e==null?void 0:e.title)+" ",1),z])]),k(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(r).length-1?(l(),n("hr",F)):w("v-if",!0)]))),128))])],4))}}),R=S(M,[["__file","/home/rtem/Dev/atwinta/lit-presentation-clean/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{R as default};
