var l=(t,r,e)=>new Promise((n,a)=>{var s=o=>{try{p(e.next(o))}catch(c){a(c)}},i=o=>{try{p(e.throw(o))}catch(c){a(c)}},p=o=>o.done?n(o.value):Promise.resolve(o.value).then(s,i);p((e=e.apply(t,r)).next())});import{u as f}from"./useScript-5e714bdf.js";import{d as m,f as g,o as u,x as d,u as w,Z as h,_,af as y}from"./vue-07f122e3.js";import{a as M}from"./index.js";import"./antd-5ec2f20c.js";const k="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQWrGwj4gAzKndcbwD5favT9K0wgty_0&signed_in=true",S=m({name:"GoogleMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const t=g(null),{toPromise:r}=f({src:k});function e(){return l(this,null,function*(){yield r(),yield d();const n=w(t);if(!n)return;const a=window.google,s={lat:116.404,lng:39.915},i=new a.maps.Map(n,{zoom:4,center:s});new a.maps.Marker({position:s,map:i,title:"Hello World!"})})}return u(()=>{e()}),{wrapRef:t}}});function x(t,r,e,n,a,s){return h(),_("div",{ref:"wrapRef",style:y({height:t.height,width:t.width})},null,4)}const G=M(S,[["render",x]]);export{G as default};
