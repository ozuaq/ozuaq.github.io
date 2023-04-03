import{ab as W,p as M,h as k,A as q,s as x,g as C,r as _,b as y,M as z,W as H,V as D,J as V,N as L,t as i,O as U,f as J,K}from"./index.5055e876.js";import{a as G,A as Q}from"./VBtn.561aa41b.js";function X(e,u){if(!W)return;const o=u.modifiers||{},r=u.value,{handler:g,options:l}=typeof r=="object"?r:{handler:r,options:{}},n=new IntersectionObserver(function(){var f;let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],m=arguments.length>1?arguments[1]:void 0;const a=(f=e._observe)==null?void 0:f[u.instance.$.uid];if(!a)return;const c=v.some(S=>S.isIntersecting);g&&(!o.quiet||a.init)&&(!o.once||c||a.init)&&g(c,v,m),c&&o.once?$(e,u):a.init=!0},l);e._observe=Object(e._observe),e._observe[u.instance.$.uid]={init:!1,observer:n},n.observe(e)}function $(e,u){var r;const o=(r=e._observe)==null?void 0:r[u.instance.$.uid];!o||(o.observer.unobserve(e),delete e._observe[u.instance.$.uid])}const Y={mounted:X,unmounted:$},Z=Y,p=M({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),b=(e,u)=>{let{slots:o}=u;const{transition:r,...g}=e,{component:l=x,...n}=typeof r=="object"?r:{};return k(l,q(typeof r=="string"?{name:r}:n,g),o)},re=C()({name:"VImg",directives:{intersect:Z},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...p()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,u){let{emit:o,slots:r}=u;const g=_(""),l=_(),n=_(e.eager?"loading":"idle"),v=_(),m=_(),a=y(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),c=y(()=>a.value.aspect||v.value/m.value||0);z(()=>e.src,()=>{f(n.value!=="idle")}),z(c,(t,s)=>{!t&&s&&l.value&&h(l.value)}),H(()=>f());function f(t){if(!(e.eager&&t)&&!(W&&!t&&!e.eager)){if(n.value="loading",a.value.lazySrc){const s=new Image;s.src=a.value.lazySrc,h(s,null)}!a.value.src||D(()=>{var s,d;if(o("loadstart",((s=l.value)==null?void 0:s.currentSrc)||a.value.src),(d=l.value)!=null&&d.complete){if(l.value.naturalWidth||I(),n.value==="error")return;c.value||h(l.value,null),S()}else c.value||h(l.value),w()})}}function S(){var t;w(),n.value="loaded",o("load",((t=l.value)==null?void 0:t.currentSrc)||a.value.src)}function I(){var t;n.value="error",o("error",((t=l.value)==null?void 0:t.currentSrc)||a.value.src)}function w(){const t=l.value;t&&(g.value=t.currentSrc||t.src)}let T=-1;function h(t){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const d=()=>{clearTimeout(T);const{naturalHeight:O,naturalWidth:j}=t;O||j?(v.value=j,m.value=O):!t.complete&&n.value==="loading"&&s!=null?T=window.setTimeout(d,s):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,m.value=1)};d()}const R=y(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),B=()=>{var d;if(!a.value.src||n.value==="idle")return null;const t=i("img",{class:["v-img__img",R.value],src:a.value.src,srcset:a.value.srcset,alt:e.alt,sizes:e.sizes,ref:l,onLoad:S,onError:I},null),s=(d=r.sources)==null?void 0:d.call(r);return i(b,{transition:e.transition,appear:!0},{default:()=>[V(s?i("picture",{class:"v-img__picture"},[s,t]):t,[[K,n.value==="loaded"]])]})},F=()=>i(b,{transition:e.transition},{default:()=>[a.value.lazySrc&&n.value!=="loaded"&&i("img",{class:["v-img__img","v-img__img--preload",R.value],src:a.value.lazySrc,alt:e.alt},null)]}),P=()=>r.placeholder?i(b,{transition:e.transition,appear:!0},{default:()=>[(n.value==="loading"||n.value==="error"&&!r.error)&&i("div",{class:"v-img__placeholder"},[r.placeholder()])]}):null,A=()=>r.error?i(b,{transition:e.transition,appear:!0},{default:()=>[n.value==="error"&&i("div",{class:"v-img__error"},[r.error()])]}):null,E=()=>e.gradient?i("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,N=_(!1);{const t=z(c,s=>{s&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{N.value=!0})}),t())})}return G(()=>V(i(Q,{class:["v-img",{"v-img--booting":!N.value}],style:{width:J(e.width==="auto"?v.value:e.width)},aspectRatio:c.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>i(U,null,[i(B,null,null),i(F,null,null),i(E,null,null),i(P,null,null),i(A,null,null)]),default:r.default}),[[L("intersect"),{handler:f,options:e.options},null,{once:!0}]])),{currentSrc:g,image:l,state:n,naturalWidth:v,naturalHeight:m}}});export{re as V};
