"use strict";(self.webpackChunklzm0_github_io=self.webpackChunklzm0_github_io||[]).push([[691],{3723:function(e,t,a){a.d(t,{L:function(){return m},M:function(){return x},P:function(){return v},S:function(){return R},_:function(){return o},a:function(){return s},b:function(){return l},g:function(){return d},h:function(){return c}});var n=a(7294),i=(a(2369),a(5697)),r=a.n(i);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t.indexOf(a=r[n])>=0||(i[a]=e[a]);return i}var c=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function l(e,t,a,n,i){return void 0===i&&(i={}),s({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:s({},i,{opacity:t?1:0})})}function d(e,t,a,n,i,r,o,c){var l={};r&&(l.backgroundColor=r,"fixed"===a?(l.width=n,l.height=i,l.backgroundColor=r,l.position="relative"):("constrained"===a||"fullWidth"===a)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),o&&(l.objectFit=o),c&&(l.objectPosition=c);var d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return d}var u,p=["children"],f=function(e){var t=e.layout,a=e.width,i=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){var t=e.children,a=o(e,p);return n.createElement(n.Fragment,null,n.createElement(f,s({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],b=function(e){var t=e.src,a=e.srcSet,i=e.loading,r=e.alt,c=void 0===r?"":r,l=e.shouldLoad,d=o(e,g);return n.createElement("img",s({},d,{decoding:"async",loading:i,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:c}))},w=function(e){var t=e.fallback,a=e.sources,i=void 0===a?[]:a,r=e.shouldLoad,c=void 0===r||r,l=o(e,h),d=l.sizes||(null==t?void 0:t.sizes),u=n.createElement(b,s({},l,t,{sizes:d,shouldLoad:c}));return i.length?n.createElement("picture",null,i.map((function(e){var t=e.media,a=e.srcSet,i=e.type;return n.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,sizes:d})})),u):u};b.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},w.displayName="Picture",w.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};var y=["fallback"],v=function(e){var t=e.fallback,a=o(e,y);return t?n.createElement(w,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},a))};v.displayName="Placeholder",v.propTypes={fallback:i.string,sources:null==(u=w.propTypes)?void 0:u.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var x=function(e){return n.createElement(n.Fragment,null,n.createElement(w,s({},e)),n.createElement("noscript",null,n.createElement(w,s({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=w.propTypes;var E,k,S=function(e,t,a){for(var n=arguments.length,i=new Array(n>3?n-3:0),s=3;s<n;s++)i[s-3]=arguments[s];return e.alt||""===e.alt?r().string.apply(r(),[e,t,a].concat(i)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:r().object.isRequired,alt:S},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],z=new Set,_=function(e){var t=e.as,i=void 0===t?"div":t,r=e.image,l=e.style,d=e.backgroundColor,u=e.className,p=e.class,f=e.onStartLoad,m=e.onLoad,g=e.onError,h=o(e,C),b=r.width,w=r.height,y=r.layout,v=function(e,t,a){var n={},i="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:n}}(b,w,y),x=v.style,S=v.className,L=o(v,N),_=(0,n.useRef)(),I=(0,n.useMemo)((function(){return JSON.stringify(r.images)}),[r.images]);p&&(u=p);var T=function(e,t,a){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(y,b,w);return(0,n.useEffect)((function(){E||(E=Promise.all([a.e(774),a.e(217)]).then(a.bind(a,9217)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return k=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,n=_.current.querySelector("[data-gatsby-image-ssr]");return n&&c()?(n.complete?(null==f||f({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):(null==f||f({wasCached:!0}),n.addEventListener("load",(function e(){n.removeEventListener("load",e),null==m||m({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)}))),void z.add(I)):k&&z.has(I)?void 0:(E.then((function(a){var n=a.renderImageToString,i=a.swapPlaceholderImage;_.current&&(_.current.innerHTML=n(s({isLoading:!0,isLoaded:z.has(I),image:r},h)),z.has(I)||(e=requestAnimationFrame((function(){_.current&&(t=i(_.current,I,z,l,f,m,g))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[r]),(0,n.useLayoutEffect)((function(){z.has(I)&&k&&(_.current.innerHTML=k(s({isLoading:z.has(I),isLoaded:z.has(I),image:r},h)),null==f||f({wasCached:!0}),null==m||m({wasCached:!0}))}),[r]),(0,n.createElement)(i,s({},L,{style:s({},x,l,{backgroundColor:d}),className:S+(u?" "+u:""),ref:_,dangerouslySetInnerHTML:{__html:T},suppressHydrationWarning:!0}))},I=(0,n.memo)((function(e){return e.image?(0,n.createElement)(_,e):null}));I.propTypes=L,I.displayName="GatsbyImage";var T,O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],q=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),i=2;i<a;i++)n[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?r().number.apply(r(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),j={src:r().string.isRequired,alt:S,width:q,height:q,sizes:r().string,layout:function(e){if(void 0!==e.layout&&!A.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(T=I,function(e){var t=e.src,a=e.__imageData,i=e.__error,r=o(e,O);return i&&console.warn(i),a?n.createElement(T,s({image:a},r)):(console.warn("Image not loaded",t),null)});R.displayName="StaticImage",R.propTypes=j},2369:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,n=!1,i=0;i<e.length;i++){var r=e[i];t&&/[a-zA-Z]/.test(r)&&r.toUpperCase()===r?(e=e.slice(0,i)+"-"+e.slice(i),t=!1,n=a,a=!0,i++):a&&n&&/[a-zA-Z]/.test(r)&&r.toLowerCase()===r?(e=e.slice(0,i-1)+"-"+e.slice(i-1),n=a,a=!1,t=!0):(t=r.toLowerCase()===r&&r.toUpperCase()!==r,n=a,a=r.toUpperCase()===r&&r.toLowerCase()!==r)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},7200:function(e,t,a){a.r(t),a.d(t,{Head:function(){return r}});var n=a(3723),i=a(7294);t.default=function(){return i.createElement("main",{className:"flex flex-col items-center justify-center h-screen"},i.createElement("div",{className:"mt-4 mb-12 transition text-transparent bg-clip-text bg-gradient-to-br from-rose-500 to-yellow-500 font-sans font-extrabold text-8xl sm:text-9xl tracking-tight whitespace-nowrap subpixel-antialiased"},"Zimo Li"),i.createElement("div",{className:"flex flex-col justify-center items-center space-y-6"},i.createElement("a",{href:"https://github.com/lzm0"},i.createElement("div",{className:"flex flex-row items-center h-16 w-64 rounded-2xl transition shadow-lg hover:shadow-xl shadow-slate-500/25 bg-gradient-to-b from-slate-600 to-slate-700 border-b-4 border-slate-800 hover:scale-105"},i.createElement(n.S,{src:"../images/github.png",placeholder:"none",className:"ml-5 w-8 h-8",alt:"GitHub Icon",__imageData:a(1927)}),i.createElement("div",{className:"font-sans font-semibold text-2xl text-white align-middle mx-auto"},"GitHub"))),i.createElement("a",{href:"https://www.linkedin.com/in/zimo-li-728bab15b/"},i.createElement("div",{className:"flex flex-row items-center h-16 w-64 rounded-2xl transition shadow-lg hover:shadow-xl shadow-blue-500/25 bg-gradient-to-b from-blue-500 to-blue-600 border-b-4 border-blue-700 hover:scale-105"},i.createElement(n.S,{src:"../images/linkedin.png",placeholder:"none",className:"ml-5 w-8 h-8",alt:"LinkedIn Icon",__imageData:a(4816)}),i.createElement("div",{className:"font-sans font-semibold text-2xl text-white align-middle mx-auto"},"LinkedIn"))),i.createElement("a",{href:"https://blog.zimo.li/"},i.createElement("div",{className:"flex flex-row items-center h-16 w-64 rounded-2xl transition shadow-lg hover:shadow-xl shadow-indigo-500/25 bg-gradient-to-b from-indigo-500 to-indigo-600 border-b-4 border-indigo-700 hover:scale-105"},i.createElement(n.S,{src:"../images/hashnode.png",placeholder:"none",className:"ml-5 w-8 h-8",alt:"Hashnode Icon",__imageData:a(871)}),i.createElement("div",{className:"font-sans font-semibold text-2xl text-white align-middle mx-auto"},"Blog"))),i.createElement("a",{href:"https://cronify.zimo.li/"},i.createElement("div",{className:"flex flex-row items-center h-16 w-64 rounded-2xl transition shadow-lg hover:shadow-xl shadow-pink-500/25 bg-gradient-to-b from-pink-500 to-red-500 border-b-4 border-pink-600 hover:scale-105"},i.createElement(n.S,{src:"../images/cronify.png",placeholder:"none",className:"ml-5 w-8 h-8",alt:"Cronify Icon",__imageData:a(7857)}),i.createElement("div",{className:"font-sans font-semibold text-2xl text-white align-middle mx-auto"},"Cronify")))))};var r=function(){return i.createElement("title",null,"Zimo Li")}},4816:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/f719d41cef49866c5046db7129406c6f/1c9ce/linkedin.png","srcSet":"/static/f719d41cef49866c5046db7129406c6f/fbc98/linkedin.png 16w,\\n/static/f719d41cef49866c5046db7129406c6f/914ee/linkedin.png 32w,\\n/static/f719d41cef49866c5046db7129406c6f/1c9ce/linkedin.png 64w","sizes":"(min-width: 64px) 64px, 100vw"},"sources":[{"srcSet":"/static/f719d41cef49866c5046db7129406c6f/e789a/linkedin.webp 16w,\\n/static/f719d41cef49866c5046db7129406c6f/ef6ff/linkedin.webp 32w,\\n/static/f719d41cef49866c5046db7129406c6f/8257c/linkedin.webp 64w","type":"image/webp","sizes":"(min-width: 64px) 64px, 100vw"}]},"width":64,"height":64}')},7857:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/173d10ace0bc6f84d84bc80faac6425e/13677/cronify.png","srcSet":"/static/173d10ace0bc6f84d84bc80faac6425e/de391/cronify.png 250w,\\n/static/173d10ace0bc6f84d84bc80faac6425e/82c11/cronify.png 500w,\\n/static/173d10ace0bc6f84d84bc80faac6425e/13677/cronify.png 1000w","sizes":"(min-width: 1000px) 1000px, 100vw"},"sources":[{"srcSet":"/static/173d10ace0bc6f84d84bc80faac6425e/e7160/cronify.webp 250w,\\n/static/173d10ace0bc6f84d84bc80faac6425e/5f169/cronify.webp 500w,\\n/static/173d10ace0bc6f84d84bc80faac6425e/3cd29/cronify.webp 1000w","type":"image/webp","sizes":"(min-width: 1000px) 1000px, 100vw"}]},"width":1000,"height":1000}')},1927:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/eb94bb97c3410733ce017b184d314723/1c9ce/github.png","srcSet":"/static/eb94bb97c3410733ce017b184d314723/fbc98/github.png 16w,\\n/static/eb94bb97c3410733ce017b184d314723/914ee/github.png 32w,\\n/static/eb94bb97c3410733ce017b184d314723/1c9ce/github.png 64w","sizes":"(min-width: 64px) 64px, 100vw"},"sources":[{"srcSet":"/static/eb94bb97c3410733ce017b184d314723/e789a/github.webp 16w,\\n/static/eb94bb97c3410733ce017b184d314723/ef6ff/github.webp 32w,\\n/static/eb94bb97c3410733ce017b184d314723/8257c/github.webp 64w","type":"image/webp","sizes":"(min-width: 64px) 64px, 100vw"}]},"width":64,"height":64}')},871:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/dfdf8b80add72aea510d78bb1b6a2352/d9cc3/hashnode.png","srcSet":"/static/dfdf8b80add72aea510d78bb1b6a2352/8557a/hashnode.png 337w,\\n/static/dfdf8b80add72aea510d78bb1b6a2352/68ba2/hashnode.png 674w,\\n/static/dfdf8b80add72aea510d78bb1b6a2352/d9cc3/hashnode.png 1348w","sizes":"(min-width: 1348px) 1348px, 100vw"},"sources":[{"srcSet":"/static/dfdf8b80add72aea510d78bb1b6a2352/b10dc/hashnode.webp 337w,\\n/static/dfdf8b80add72aea510d78bb1b6a2352/038f3/hashnode.webp 674w,\\n/static/dfdf8b80add72aea510d78bb1b6a2352/14fcd/hashnode.webp 1348w","type":"image/webp","sizes":"(min-width: 1348px) 1348px, 100vw"}]},"width":1348,"height":1348}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-4bbaff4754c0e9a7a990.js.map