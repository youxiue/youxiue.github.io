import{i as p,f as v,k as c,_ as f}from"./app-5c009b19.js";import{c as m,r as g,F as n,h as y,o as w,j as a}from"./framework-389969f1.js";const R=e=>JSON.parse(decodeURIComponent(e));var V=m({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(e){const i=p(),s=g(!0),t=n(),o=n(),l=y(()=>v({},i,R(e.settings))),r=async()=>{const{ReplStore:u,Repl:d}=await f(()=>import("./vue-repl-880f8120.js"),["assets/vue-repl-880f8120.js","assets/app-5c009b19.js","assets/framework-389969f1.js"]);t.value=d,o.value=new u({serializedState:decodeURIComponent(e.files)}),l.value.vueVersion&&await o.value.setVueVersion(l.value.vueVersion)};return w(async()=>{await r(),s.value=!1}),()=>[a("div",{class:"vue-playground-wrapper"},[e.title?a("div",{class:"header"},decodeURIComponent(e.title)):null,a("div",{class:"repl-container"},[s.value?a(c,{class:"preview-loading",height:192}):null,t.value?a(t.value,{store:o.value,autoResize:!0,...l.value,layout:"horizontal"}):null])])]}});export{V as default};
