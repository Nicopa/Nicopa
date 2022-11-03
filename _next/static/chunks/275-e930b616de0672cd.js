(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[275],{9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageLoaderProps",{enumerable:!0,get:function(){return u.ImageLoaderProps}}),t.default=function(e){let t,r;var i,{src:o,sizes:h,unoptimized:w=!1,priority:b=!1,loading:y,className:E,quality:C,width:S,height:j,fill:O,style:x,onLoad:_,onLoadingComplete:z,placeholder:P="empty",blurDataURL:k,layout:N,objectFit:I,objectPosition:R,lazyBoundary:L,lazyRoot:A}=e,M=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let B=l.useContext(d.ImageConfigContext),D=l.useMemo(()=>{let e=g||B||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[B]),W=M,F=W.loader||f.default;if(delete W.loader,"__next_img_default"in F){if("custom"===D.loader)throw Error('Image with src "'.concat(o,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let T=F;F=e=>{let{config:t}=e,r=a(e,["config"]);return T(r)}}if(N){"fill"===N&&(O=!0);let q={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[N];q&&(x=n({},x,q));let G={responsive:"100vw",fill:"100vw"}[N];G&&!h&&(h=G)}let Z="",U=p(S),V=p(j);if("object"==typeof(i=o)&&(m(i)||void 0!==i.src)){let J=m(o)?o.default:o;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(t=J.blurWidth,r=J.blurHeight,k=k||J.blurDataURL,Z=J.src,!O){if(U||V){if(U&&!V){let H=U/J.width;V=Math.round(J.height*H)}else if(!U&&V){let $=V/J.height;U=Math.round(J.width*$)}}else U=J.width,V=J.height}}let K=!b&&("lazy"===y||void 0===y);((o="string"==typeof o?o:Z).startsWith("data:")||o.startsWith("blob:"))&&(w=!0,K=!1),D.unoptimized&&(w=!0);let[Q,X]=l.useState(!1),[Y,ee]=l.useState(!1),et=p(C),er=Object.assign(O?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:R}:{},Y?{}:{color:"transparent"},x),en="blur"===P&&k&&!Q?{backgroundSize:er.objectFit||"cover",backgroundPosition:er.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:U,heightInt:V,blurWidth:t,blurHeight:r,blurDataURL:k}),'")')}:{},ei=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let o=/(^|\s)(1?\d?\d)vw/g,a=[];for(let l;l=o.exec(r);l)a.push(parseInt(l[2]));if(a.length){let s=.01*Math.min(...a);return{widths:i.filter(e=>e>=n[0]*s),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let c=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:c,kind:"x"}}(t,i,a),u=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,n)=>"".concat(l({config:t,src:r,quality:o,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:l({config:t,src:r,quality:o,width:s[u]})}}({config:D,src:o,unoptimized:w,width:U,quality:et,sizes:h,loader:F}),eo=o,ea={imageSrcSet:ei.srcSet,imageSizes:ei.sizes,crossOrigin:W.crossOrigin},el=l.useRef(_);l.useEffect(()=>{el.current=_},[_]);let es=l.useRef(z);l.useEffect(()=>{es.current=z},[z]);let ec=n({isLazy:K,imgAttributes:ei,heightInt:V,widthInt:U,qualityInt:et,className:E,imgStyle:er,blurStyle:en,loading:y,config:D,fill:O,unoptimized:w,placeholder:P,loader:F,srcString:eo,onLoadRef:el,onLoadingCompleteRef:es,setBlurComplete:X,setShowAltText:ee},W);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},ec)),b?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ei.src+ei.srcSet+ei.sizes,rel:"preload",as:"image",href:ei.srcSet?void 0:ei.src},ea))):null)};var n=r(6495).Z,i=r(2648).Z,o=r(1598).Z,a=r(7273).Z,l=o(r(7294)),s=i(r(3121)),c=r(2675),u=r(139),d=r(8730);r(7238);var f=i(r(9824));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/Nicopa/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,r,i,o,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&a(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let l=!1,s=!1;i.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>s,persist(){},preventDefault(){l=!0,t.preventDefault()},stopPropagation(){s=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}let v=e=>{var{imgAttributes:t,heightInt:r,widthInt:i,qualityInt:o,className:s,imgStyle:c,blurStyle:u,isLazy:d,fill:f,placeholder:g,loading:m,srcString:p,config:v,unoptimized:w,loader:b,onLoadRef:y,onLoadingCompleteRef:E,setBlurComplete:C,setShowAltText:S,onLoad:j,onError:O}=e,x=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=d?"lazy":m,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},x,t,{width:i,height:r,decoding:"async","data-nimg":f?"fill":"1",className:s,loading:m,style:n({},c,u),ref:l.useCallback(e=>{e&&(O&&(e.src=e.src),e.complete&&h(e,p,g,y,E,C,w))},[p,g,y,E,C,O,w]),onLoad(e){let t=e.currentTarget;h(t,p,g,y,E,C,w)},onError(e){S(!0),"blur"===g&&C(!0),O&&O(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o}=e,a=n||t,l=i||r,s=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&i?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return r.endsWith(".svg")&&!t.dangerouslyAllowSVG?r:"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},9008:function(e,t,r){e.exports=r(3121)},5675:function(e,t,r){e.exports=r(9749)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(i),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r};function s(e){return function(t){return n.createElement(c,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,a({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,i=e.attr,o=e.size,s=e.title,c=l(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,c,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==o?n.createElement(o.Consumer,null,function(e){return t(e)}):t(i)}}}]);