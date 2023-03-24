import{g as G,r as b,I as J,j as K,G as N,x as Q,l as I,H as X,w as Y,p as y,c as f,b as g,s as l,S as H,n as Z,z as p,m as ee,J as te,K as ne,L as O,M as se,N as re,O as ae,P as k,Q as z,R as D,U as j,V as ie,W as oe,t as le,X as ue,v as ce,Y as de,u as ve}from"./index.74934dca.js";function B(e){const n=G("useRender");n.render=e}function Be(e){const n=b(),s=b();if(J){const t=new ResizeObserver(r=>{e==null||e(r,t),r.length&&(s.value=r[0].contentRect)});K(()=>{t.disconnect()}),N(n,(r,a)=>{a&&(t.unobserve(a),s.value=void 0),r&&t.observe(r)},{flush:"post"})}return{resizeRef:n,contentRect:Q(s)}}const we=I(!1)({name:"VDefaultsProvider",props:{defaults:Object,disabled:Boolean,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,n){let{slots:s}=n;const{defaults:t,disabled:r,reset:a,root:o,scoped:v}=X(e);return Y(t,{reset:a,root:o,scoped:v,disabled:r}),()=>{var m;return(m=s.default)==null?void 0:m.call(s)}}});const ge=y({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function me(e){return{dimensionStyles:f(()=>({height:g(e.height),maxHeight:g(e.maxHeight),maxWidth:g(e.maxWidth),minHeight:g(e.minHeight),minWidth:g(e.minWidth),width:g(e.width)}))}}function fe(e){return{aspectStyles:f(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const he=I()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...ge()},setup(e,n){let{slots:s}=n;const{aspectStyles:t}=fe(e),{dimensionStyles:r}=me(e);return B(()=>{var a;return l("div",{class:"v-responsive",style:r.value},[l("div",{class:"v-responsive__sizer",style:t.value},null),(a=s.additional)==null?void 0:a.call(s),s.default&&l("div",{class:["v-responsive__content",e.contentClass]},[s.default()])])}),{}}});function Se(e,n){if(!H)return;const s=n.modifiers||{},t=n.value,{handler:r,options:a}=typeof t=="object"?t:{handler:t,options:{}},o=new IntersectionObserver(function(){var h;let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],m=arguments.length>1?arguments[1]:void 0;const u=(h=e._observe)==null?void 0:h[n.instance.$.uid];if(!u)return;const c=v.some(_=>_.isIntersecting);r&&(!s.quiet||u.init)&&(!s.once||c||u.init)&&r(c,v,m),c&&s.once?E(e,n):u.init=!0},a);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:o},o.observe(e)}function E(e,n){var t;const s=(t=e._observe)==null?void 0:t[n.instance.$.uid];!s||(s.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const be={mounted:Se,unmounted:E},ye=be,_e=y({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),x=(e,n)=>{let{slots:s}=n;const{transition:t,...r}=e,{component:a=ee,...o}=typeof t=="object"?t:{};return Z(a,p(typeof t=="string"?{name:t}:o,r),s)},$e=I()({name:"VImg",directives:{intersect:ye},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],..._e()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:s,slots:t}=n;const r=b(""),a=b(),o=b(e.eager?"loading":"idle"),v=b(),m=b(),u=f(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),c=f(()=>u.value.aspect||v.value/m.value||0);N(()=>e.src,()=>{h(o.value!=="idle")}),N(c,(i,d)=>{!i&&d&&a.value&&R(a.value)}),te(()=>h());function h(i){if(!(e.eager&&i)&&!(H&&!i&&!e.eager)){if(o.value="loading",u.value.lazySrc){const d=new Image;d.src=u.value.lazySrc,R(d,null)}!u.value.src||ne(()=>{var d,S;if(s("loadstart",((d=a.value)==null?void 0:d.currentSrc)||u.value.src),(S=a.value)!=null&&S.complete){if(a.value.naturalWidth||C(),o.value==="error")return;c.value||R(a.value,null),_()}else c.value||R(a.value),w()})}}function _(){var i;w(),o.value="loaded",s("load",((i=a.value)==null?void 0:i.currentSrc)||u.value.src)}function C(){var i;o.value="error",s("error",((i=a.value)==null?void 0:i.currentSrc)||u.value.src)}function w(){const i=a.value;i&&(r.value=i.currentSrc||i.src)}let $=-1;function R(i){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const S=()=>{clearTimeout($);const{naturalHeight:V,naturalWidth:W}=i;V||W?(v.value=W,m.value=V):!i.complete&&o.value==="loading"&&d!=null?$=window.setTimeout(S,d):(i.currentSrc.endsWith(".svg")||i.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,m.value=1)};S()}const P=f(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),q=()=>{var S;if(!u.value.src||o.value==="idle")return null;const i=l("img",{class:["v-img__img",P.value],src:u.value.src,srcset:u.value.srcset,alt:e.alt,sizes:e.sizes,ref:a,onLoad:_,onError:C},null),d=(S=t.sources)==null?void 0:S.call(t);return l(x,{transition:e.transition,appear:!0},{default:()=>[O(d?l("picture",{class:"v-img__picture"},[d,i]):i,[[ae,o.value==="loaded"]])]})},M=()=>l(x,{transition:e.transition},{default:()=>[u.value.lazySrc&&o.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",P.value],src:u.value.lazySrc,alt:e.alt},null)]}),U=()=>t.placeholder?l(x,{transition:e.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!t.error)&&l("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,A=()=>t.error?l(x,{transition:e.transition,appear:!0},{default:()=>[o.value==="error"&&l("div",{class:"v-img__error"},[t.error()])]}):null,L=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,T=b(!1);{const i=N(c,d=>{d&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{T.value=!0})}),i())})}return B(()=>O(l(he,{class:["v-img",{"v-img--booting":!T.value}],style:{width:g(e.width==="auto"?v.value:e.width)},aspectRatio:c.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>l(re,null,[l(q,null,null),l(M,null,null),l(L,null,null),l(U,null,null),l(A,null,null)]),default:t.default}),[[se("intersect"),{handler:h,options:e.options},null,{once:!0}]])),{currentSrc:r,image:a,state:o,naturalWidth:v,naturalHeight:m}}}),Ce=y({tag:{type:String,default:"div"}},"tag"),Pe=y({border:[Boolean,Number,String]},"border");function Te(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:k();return{borderClasses:f(()=>{const t=z(e)?e.value:e.border,r=[];if(t===!0||t==="")r.push(`${n}--border`);else if(typeof t=="string"||t===0)for(const a of String(t).split(" "))r.push(`border-${a}`);return r})}}const Ve=y({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function We(e){return{elevationClasses:f(()=>{const s=z(e)?e.value:e.elevation,t=[];return s==null||t.push(`elevation-${s}`),t})}}const Oe=y({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function je(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:k();return{roundedClasses:f(()=>{const t=z(e)?e.value:e.rounded,r=[];if(t===!0||t==="")r.push(`${n}--rounded`);else if(typeof t=="string"||t===0)for(const a of String(t).split(" "))r.push(`rounded-${a}`);return r})}}function F(e){return D(()=>{const n=[],s={};return e.value.background&&(j(e.value.background)?s.backgroundColor=e.value.background:n.push(`bg-${e.value.background}`)),e.value.text&&(j(e.value.text)?(s.color=e.value.text,s.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:s}})}function ze(e,n){const s=f(()=>({text:z(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:r}=F(s);return{textColorClasses:t,textColorStyles:r}}function He(e,n){const s=f(()=>({background:z(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:r}=F(s);return{backgroundColorClasses:t,backgroundColorStyles:r}}const Re=["x-small","small","default","large","x-large"],xe=y({size:{type:[String,Number],default:"default"}},"size");function Ne(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:k();return D(()=>{let s,t;return ie(Re,e.size)?s=`${n}--size-${e.size}`:e.size&&(t={width:g(e.size),height:g(e.size)}),{sizeClasses:s,sizeStyles:t}})}const Ie=y({color:String,start:Boolean,end:Boolean,icon:oe,...xe(),...Ce({tag:"i"}),...le()},"v-icon"),De=I()({name:"VIcon",props:Ie(),setup(e,n){let{attrs:s,slots:t}=n,r;t.default&&(r=f(()=>{var h,_;const c=(h=t.default)==null?void 0:h.call(t);if(!!c)return(_=c.filter(C=>C.type===ue&&C.children&&typeof C.children=="string")[0])==null?void 0:_.children}));const{themeClasses:a}=ce(e),{iconData:o}=de(r||e),{sizeClasses:v}=Ne(e),{textColorClasses:m,textColorStyles:u}=ze(ve(e,"color"));return B(()=>l(o.value.component,{tag:e.tag,icon:o.value.icon,class:["v-icon","notranslate",a.value,v.value,m.value,{"v-icon--clickable":!!s.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[v.value?void 0:{fontSize:g(e.size),height:g(e.size),width:g(e.size)},u.value],role:s.onClick?"button":void 0,"aria-hidden":!s.onClick},{default:()=>{var c;return[(c=t.default)==null?void 0:c.call(t)]}})),{}}});export{$e as V,B as a,Pe as b,Ve as c,Oe as d,He as e,Te as f,We as g,je as h,we as i,De as j,F as k,xe as l,Ce as m,Ne as n,ze as o,ge as p,me as q,he as r,Be as u};
