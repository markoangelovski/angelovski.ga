"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[160],{9426:function(e,t,i){i.r(t);var n=i(5893),l=i(5675),a=i.n(l),r=i(2719),s=i(1664),c=i.n(s);t.default=function(e){var t=e.image,i=e.imageAltText,l=e.imageTitle,s=e.imageUrl;return(0,n.jsx)("div",{className:"m-2 h-12 w-12 rounded-full hover:bg-slate-200 dark:overflow-hidden dark:bg-white hover:dark:overflow-visible dark:hover:bg-slate-200",children:(0,n.jsx)(c(),{href:s,children:(0,n.jsx)("a",{className:"flex cursor-pointer items-center justify-center",target:"_blank",children:(0,n.jsx)(a(),{src:t.src,alt:i,title:l,width:50,height:50,loader:r.B})})})})}},9083:function(e,t,i){i.r(t);var n=i(5893),l=i(1664),a=i.n(l);t.default=function(e){return"Link"===e.type?(0,n.jsx)(a(),{href:e.destination,children:(0,n.jsx)("a",{className:"".concat(e.eventClass," text-blue-400"),target:"".concat(e.externalLink?"_blank":"_self"),title:e.altText,"data-action-detail":e.eventLabel,children:e.label})}):"Button"===e.type?(0,n.jsx)(a(),{href:e.destination,children:(0,n.jsx)("a",{className:"".concat(e.eventClass," inline-block rounded-sm bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-800 active:bg-red-900"),target:"".concat(e.externalLink?"_blank":"_self"),title:e.altText,"data-action-detail":e.eventLabel,children:e.label})}):null}},3189:function(e,t,i){i.r(t),i.d(t,{CursorIcon:function(){return o}});var n=i(5893),l=i(5675),a=i.n(l),r=i(1664),s=i.n(r),c=i(2701),d=i(2719),o=function(){return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"inline h-5 w-5",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 116.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 8a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 8zm11 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0114 8zm-6.828 2.828a.75.75 0 010 1.061L6.11 12.95a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm3.594-3.317a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z",clipRule:"evenodd"})})};t.default=function(e){var t=e.diagram,i=(0,c.Z)(),l=t.title,r=t.description,u=t.height,m=t.diagramIframeSource,x=t.mobileImage,h=null===m||void 0===m?void 0:m.content[0].content[0].value;return(null===i||void 0===i?void 0:i.isMobile)?(0,n.jsx)("div",{className:"my-5",children:(0,n.jsx)(s(),{href:h,children:(0,n.jsxs)("a",{className:"event_external_link","data-action-detail":"View diagram in new tab - mobile - "+x.imageTitle,target:"_blank",children:[(0,n.jsx)(a(),{src:x.image.src,alt:x.imageAltText,title:x.imageTitle,width:x.image.width,height:x.image.height,loader:d.B}),(0,n.jsx)("p",{className:"mt-2 text-sm",children:r})]})})}):(0,n.jsxs)("div",{className:"group my-5 flex w-full flex-col md:max-w-5xl",children:[(0,n.jsx)("iframe",{title:l,className:"w-full",frameBorder:"0",style:{height:u+"px"},src:h}),(0,n.jsxs)("span",{className:"invisible mt-1 self-end text-xs text-gray-500 group-hover:visible dark:text-gray-400",children:[(0,n.jsx)(o,{})," Ctrl + scroll to zoom in. Click"," ",(0,n.jsx)(s(),{href:h,children:(0,n.jsx)("a",{className:"event_external_link text-blue-400","data-action-detail":"View diagram in new tab - desktop - "+x.imageTitle,target:"_blank",children:"here"})})," ","to view in new tab."]}),(0,n.jsx)("p",{className:"text-sm",children:r})]})}},9942:function(e,t,i){i.r(t);var n=i(5893),l=i(7294),a=i(5675),r=i.n(a),s=i(1664),c=i.n(s),d=i(2719),o=i(2701),u=i(3189);t.default=function(e){var t=e.image,i=e.width,a=(0,l.useState)(!1),s=a[0],m=a[1],x=function(e){document.body.style.overflow=e?"hidden":"visible",m(e)},h=(0,o.Z)(),f=(0,d.u)(t);return i=i||600,i=(null===h||void 0===h?void 0:h.isMobile)?h.width:i,(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"group flex flex-col",children:[(0,n.jsx)(r(),{onClick:function(){return x(!s)},className:"cursor-pointer",src:t.image.src,alt:t.imageAltText,title:t.imageTitle,width:i,height:i/f,loader:d.B}),(0,n.jsxs)("span",{className:"invisible mt-1 self-end text-xs text-gray-500 group-hover:visible dark:text-gray-400",children:[(0,n.jsx)(u.CursorIcon,{})," Click on the image to view in full size."]})]}),s&&(0,n.jsx)("div",{onClick:function(){return x(!1)},className:"fixed inset-0 z-10 flex h-screen w-full cursor-default items-center justify-center bg-neutral-500/75",children:(0,n.jsxs)("div",{className:"flex max-w-[1600px] flex-col",onClick:function(e){return e.stopPropagation()},children:[(0,n.jsx)("span",{onClick:function(){return x(!1)},title:"Close",className:"z-20 h-6 w-6 translate-y-6 cursor-pointer self-end bg-neutral-300",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"black",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})}),(0,n.jsx)("div",{className:"bg-neutral-500",children:(0,n.jsx)(c(),{href:"https:"+t.image.src,children:(0,n.jsx)("a",{className:"event_external_link cursor-pointer","data-action-detail":"View image in new tab - "+t.imageTitle,target:"_blank",children:(0,n.jsx)(r(),{className:"z-10",src:t.image.src,alt:t.imageAltText,title:t.imageTitle+" - Click to view in new tab",width:t.image.width,height:t.image.height,loader:d.B})})})}),(0,n.jsx)("p",{className:"bg-neutral-300 p-2 text-sm text-black",children:t.image.description})]})})]})}},8269:function(e,t,i){i.r(t);var n=i(4924),l=i(6042),a=i(5893),r=i(4129),s=i(6437),c=i(9942),d=i(3189),o=i(9083),u=function(e){var t=e.title,i=e.titleType;if(!t)return null;switch(i){case"H1":return(0,a.jsx)("h1",{className:"py-10 text-3xl font-medium text-cyan-700 dark:text-cyan-300",children:t});case"H2":return(0,a.jsx)("h2",{className:"py-5 text-2xl font-medium text-cyan-700 dark:text-cyan-300",children:t});case"H3":return(0,a.jsx)("h3",{className:"pt-5 text-xl font-medium text-cyan-700 dark:text-cyan-300",children:t});default:return null}};t.default=function(e){var t,i,m=e.title,x=e.titleType,h=e.description,f=e.imagesSectionCollection,v=e.diagramsSectionCollection,g=null===f||void 0===f?void 0:f.items,j=null===v||void 0===v?void 0:v.items,p={renderMark:(t={},(0,n.Z)(t,s.MARKS.BOLD,(function(e){return(0,a.jsx)("strong",{children:e})})),(0,n.Z)(t,s.MARKS.ITALIC,(function(e){return(0,a.jsx)("em",{children:e})})),t),renderNode:(i={},(0,n.Z)(i,s.INLINES.EMBEDDED_ENTRY,(function(e,t){if("button"===e.data.target.sys.contentType.sys.id)return(0,a.jsx)(o.default,(0,l.Z)({},e.data.target.fields))})),(0,n.Z)(i,s.BLOCKS.HEADING_3,(function(e,t){return(0,a.jsx)("h3",{className:"pt-5 text-xl font-medium text-cyan-700 dark:text-cyan-300",children:t})})),(0,n.Z)(i,s.BLOCKS.PARAGRAPH,(function(e,t){return Array.isArray(t)&&!!t[0]&&(0,a.jsx)("p",{className:"mt-2",children:t})})),(0,n.Z)(i,s.BLOCKS.UL_LIST,(function(e,t){return(0,a.jsx)("ul",{className:"mt-2 list-disc pl-5",children:t})})),(0,n.Z)(i,s.BLOCKS.OL_LIST,(function(e,t){return(0,a.jsx)("ol",{className:"mt-2 list-decimal pl-5",children:t})})),(0,n.Z)(i,s.BLOCKS.LIST_ITEM,(function(e,t){var i,l=(0,r.h)(e,{renderNode:(i={},(0,n.Z)(i,s.BLOCKS.PARAGRAPH,(function(e,t){return t})),(0,n.Z)(i,s.BLOCKS.LIST_ITEM,(function(e,t){return(0,a.jsx)("li",{children:t})})),i)});return l})),i)};return(0,a.jsxs)("section",{className:"md:px-5",children:[(0,a.jsx)(u,{title:m,titleType:x}),(0,r.h)(h,p),(0,a.jsxs)("div",{className:"mb-5 flex flex-col items-center",children:[null===g||void 0===g?void 0:g.map((function(e,t){return(0,a.jsxs)("div",{className:"my-5 max-w-5xl",children:[(0,a.jsx)(c.default,{image:e,width:1024}),(0,a.jsx)("p",{className:"text-sm",children:e.image.description})]},t)})),null===j||void 0===j?void 0:j.map((function(e,t){return(0,a.jsx)(d.default,{diagram:e},t)}))]}),(0,a.jsx)("hr",{className:"mt-2 dark:border-neutral-500"})]})}},5596:function(e,t,i){i.r(t);var n=i(6042),l=i(5893),a=i(9083),r=i(9426),s=i(9942);t.default=function(e){var t=e.screenshotsCollection,i=e.title,c=e.shortDescription,d=e.productUrlLink,o=e.builtWithTitle,u=e.builtWithCollection,m=e.viewMoreDetailsButton,x=t.items[0],h=u.items;return(0,l.jsxs)("section",{className:"border-b-[1px] border-gray-300 pt-5 dark:border-gray-700 md:flex",children:[(0,l.jsx)("div",{className:"",children:(0,l.jsx)(s.default,{image:x})}),(0,l.jsxs)("div",{className:"mb-5 xl:ml-5",children:[(0,l.jsx)("h2",{className:"mt-2 text-xl font-medium xl:mt-0",children:i}),(0,l.jsx)("p",{className:"mt-2 font-light",children:c}),(0,l.jsx)("ul",{className:"mt-2 list-disc pl-5",children:(0,l.jsx)("li",{children:(0,l.jsx)(a.default,(0,n.Z)({},d))})}),(0,l.jsx)("p",{className:"mt-2 font-light",children:o}),(0,l.jsx)("div",{className:"flex flex-wrap",children:h.map((function(e,t){return(0,l.jsx)(r.default,(0,n.Z)({},e),t)}))}),(0,l.jsx)("div",{className:"my-4",children:(0,l.jsx)(a.default,(0,n.Z)({},m))})]})]})}},2701:function(e,t,i){var n=i(7294);t.Z=function(){var e=(0,n.useState)(null),t=e[0],i=e[1];return(0,n.useEffect)((function(){i(window.innerWidth);var e=function(){return i(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),t?{width:t,isMobile:t<768,isTablet:t>=768&&t<992,isHandheld:t<992,isDesktop:t>=992}:null}}}]);