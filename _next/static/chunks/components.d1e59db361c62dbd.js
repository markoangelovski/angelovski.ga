"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[160],{4129:function(e,t,n){var r,i=n(7294),l=(r=i)&&"object"===typeof r&&"default"in r?r.default:r,a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},a.apply(this,arguments)},E="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{};function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function u(e,t){return e(t={exports:{}},t.exports),t.exports}var L=u((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))}));o(L);L.BLOCKS;var c=u((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(t.INLINES||(t.INLINES={}))}));o(c);c.INLINES;var d=u((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code"}(n||(n={})),t.default=n}));o(d);var s=u((function(e,t){var n,r=E&&E.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,i=0,l=t.length;i<l;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0,t.TOP_LEVEL_BLOCKS=[L.BLOCKS.PARAGRAPH,L.BLOCKS.HEADING_1,L.BLOCKS.HEADING_2,L.BLOCKS.HEADING_3,L.BLOCKS.HEADING_4,L.BLOCKS.HEADING_5,L.BLOCKS.HEADING_6,L.BLOCKS.OL_LIST,L.BLOCKS.UL_LIST,L.BLOCKS.HR,L.BLOCKS.QUOTE,L.BLOCKS.EMBEDDED_ENTRY,L.BLOCKS.EMBEDDED_ASSET,L.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[L.BLOCKS.PARAGRAPH,L.BLOCKS.HEADING_1,L.BLOCKS.HEADING_2,L.BLOCKS.HEADING_3,L.BLOCKS.HEADING_4,L.BLOCKS.HEADING_5,L.BLOCKS.HEADING_6,L.BLOCKS.OL_LIST,L.BLOCKS.UL_LIST,L.BLOCKS.HR,L.BLOCKS.QUOTE,L.BLOCKS.EMBEDDED_ENTRY,L.BLOCKS.EMBEDDED_ASSET],t.TABLE_BLOCKS=[L.BLOCKS.TABLE,L.BLOCKS.TABLE_ROW,L.BLOCKS.TABLE_CELL,L.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[L.BLOCKS.HR,L.BLOCKS.EMBEDDED_ENTRY,L.BLOCKS.EMBEDDED_ASSET],t.CONTAINERS=((n={})[L.BLOCKS.OL_LIST]=[L.BLOCKS.LIST_ITEM],n[L.BLOCKS.UL_LIST]=[L.BLOCKS.LIST_ITEM],n[L.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[L.BLOCKS.QUOTE]=[L.BLOCKS.PARAGRAPH],n[L.BLOCKS.TABLE]=[L.BLOCKS.TABLE_ROW],n[L.BLOCKS.TABLE_ROW]=[L.BLOCKS.TABLE_CELL,L.BLOCKS.TABLE_HEADER_CELL],n[L.BLOCKS.TABLE_CELL]=[L.BLOCKS.PARAGRAPH],n[L.BLOCKS.TABLE_HEADER_CELL]=[L.BLOCKS.PARAGRAPH],n),t.HEADINGS=[L.BLOCKS.HEADING_1,L.BLOCKS.HEADING_2,L.BLOCKS.HEADING_3,L.BLOCKS.HEADING_4,L.BLOCKS.HEADING_5,L.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=r([L.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[L.BLOCKS.DOCUMENT,L.BLOCKS.PARAGRAPH,L.BLOCKS.HEADING_1,L.BLOCKS.HEADING_2,L.BLOCKS.HEADING_3,L.BLOCKS.HEADING_4,L.BLOCKS.HEADING_5,L.BLOCKS.HEADING_6,L.BLOCKS.OL_LIST,L.BLOCKS.UL_LIST,L.BLOCKS.LIST_ITEM,L.BLOCKS.HR,L.BLOCKS.QUOTE,L.BLOCKS.EMBEDDED_ENTRY,L.BLOCKS.EMBEDDED_ASSET,c.INLINES.HYPERLINK,c.INLINES.ENTRY_HYPERLINK,c.INLINES.ASSET_HYPERLINK,c.INLINES.EMBEDDED_ENTRY,"text"]}));o(s);s.V1_NODE_TYPES,s.TEXT_CONTAINERS,s.HEADINGS,s.CONTAINERS,s.VOID_BLOCKS,s.TABLE_BLOCKS,s.LIST_ITEM_BLOCKS,s.TOP_LEVEL_BLOCKS;var S=u((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));o(S);var O=u((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));o(O);var _=u((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:L.BLOCKS.DOCUMENT,data:{},content:[{nodeType:L.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n}));o(_);var B=u((function(e,t){function n(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){if(t===e[r[n]])return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return n(c.INLINES,e.nodeType)},t.isBlock=function(e){return n(L.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}}));o(B);B.isText,B.isBlock,B.isInline;var f=u((function(e,t){var n=E&&E.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=E&&E.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=E&&E.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},l=E&&E.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&n(t,e,i);return r(t,e),t},a=E&&E.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return L.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return c.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return a(d).default}}),i(s,t),i(S,t),i(O,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return a(_).default}});var o=l(B);t.helpers=o}));o(f);var C,T,N=f.helpers,A=(f.EMPTY_DOCUMENT,f.MARKS),I=f.INLINES,K=f.BLOCKS;function D(e,t){return e.map((function(e,n){return r=h(e,t),l=n,i.isValidElement(r)&&null===r.key?i.cloneElement(r,{key:l}):r;var r,l}))}function h(e,t){var n=t.renderNode,r=t.renderMark,i=t.renderText;if(N.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),i?i(e.value):e.value);var a=D(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,a):l.createElement(l.Fragment,null,a)}var p=((C={})[K.DOCUMENT]=function(e,t){return t},C[K.PARAGRAPH]=function(e,t){return l.createElement("p",null,t)},C[K.HEADING_1]=function(e,t){return l.createElement("h1",null,t)},C[K.HEADING_2]=function(e,t){return l.createElement("h2",null,t)},C[K.HEADING_3]=function(e,t){return l.createElement("h3",null,t)},C[K.HEADING_4]=function(e,t){return l.createElement("h4",null,t)},C[K.HEADING_5]=function(e,t){return l.createElement("h5",null,t)},C[K.HEADING_6]=function(e,t){return l.createElement("h6",null,t)},C[K.EMBEDDED_ENTRY]=function(e,t){return l.createElement("div",null,t)},C[K.UL_LIST]=function(e,t){return l.createElement("ul",null,t)},C[K.OL_LIST]=function(e,t){return l.createElement("ol",null,t)},C[K.LIST_ITEM]=function(e,t){return l.createElement("li",null,t)},C[K.QUOTE]=function(e,t){return l.createElement("blockquote",null,t)},C[K.HR]=function(){return l.createElement("hr",null)},C[K.TABLE]=function(e,t){return l.createElement("table",null,l.createElement("tbody",null,t))},C[K.TABLE_ROW]=function(e,t){return l.createElement("tr",null,t)},C[K.TABLE_HEADER_CELL]=function(e,t){return l.createElement("th",null,t)},C[K.TABLE_CELL]=function(e,t){return l.createElement("td",null,t)},C[I.ASSET_HYPERLINK]=function(e){return v(I.ASSET_HYPERLINK,e)},C[I.ENTRY_HYPERLINK]=function(e){return v(I.ENTRY_HYPERLINK,e)},C[I.EMBEDDED_ENTRY]=function(e){return v(I.EMBEDDED_ENTRY,e)},C[I.HYPERLINK]=function(e,t){return l.createElement("a",{href:e.data.uri},t)},C),m=((T={})[A.BOLD]=function(e){return l.createElement("b",null,e)},T[A.ITALIC]=function(e){return l.createElement("i",null,e)},T[A.UNDERLINE]=function(e){return l.createElement("u",null,e)},T[A.CODE]=function(e){return l.createElement("code",null,e)},T);function v(e,t){return l.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.h=function(e,t){return void 0===t&&(t={}),e?h(e,{renderNode:a(a({},p),t.renderNode),renderMark:a(a({},m),t.renderMark),renderText:t.renderText}):null}},549:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))},1928:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(549),i={nodeType:r.BLOCKS.DOCUMENT,data:{},content:[{nodeType:r.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=i},6061:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0;var r=n(549),i=n(7845);function l(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){if(t===e[r[n]])return!0}return!1}t.isInline=function(e){return l(i.INLINES,e.nodeType)},t.isBlock=function(e){return l(r.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}},6437:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)},a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},E=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0;var o=n(549);Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return o.BLOCKS}});var u=n(7845);Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return u.INLINES}});var L=n(1376);Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return E(L).default}}),l(n(7951),t),l(n(167),t),l(n(1911),t);var c=n(1928);Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return E(c).default}});var d=a(n(6061));t.helpers=d},7845:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(t.INLINES||(t.INLINES={}))},1376:function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code"}(n||(n={})),t.default=n},1911:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},7951:function(e,t,n){var r,i=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,i=0,l=t.length;i<l;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var l=n(549),a=n(7845);t.TOP_LEVEL_BLOCKS=[l.BLOCKS.PARAGRAPH,l.BLOCKS.HEADING_1,l.BLOCKS.HEADING_2,l.BLOCKS.HEADING_3,l.BLOCKS.HEADING_4,l.BLOCKS.HEADING_5,l.BLOCKS.HEADING_6,l.BLOCKS.OL_LIST,l.BLOCKS.UL_LIST,l.BLOCKS.HR,l.BLOCKS.QUOTE,l.BLOCKS.EMBEDDED_ENTRY,l.BLOCKS.EMBEDDED_ASSET,l.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[l.BLOCKS.PARAGRAPH,l.BLOCKS.HEADING_1,l.BLOCKS.HEADING_2,l.BLOCKS.HEADING_3,l.BLOCKS.HEADING_4,l.BLOCKS.HEADING_5,l.BLOCKS.HEADING_6,l.BLOCKS.OL_LIST,l.BLOCKS.UL_LIST,l.BLOCKS.HR,l.BLOCKS.QUOTE,l.BLOCKS.EMBEDDED_ENTRY,l.BLOCKS.EMBEDDED_ASSET],t.TABLE_BLOCKS=[l.BLOCKS.TABLE,l.BLOCKS.TABLE_ROW,l.BLOCKS.TABLE_CELL,l.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[l.BLOCKS.HR,l.BLOCKS.EMBEDDED_ENTRY,l.BLOCKS.EMBEDDED_ASSET],t.CONTAINERS=((r={})[l.BLOCKS.OL_LIST]=[l.BLOCKS.LIST_ITEM],r[l.BLOCKS.UL_LIST]=[l.BLOCKS.LIST_ITEM],r[l.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,r[l.BLOCKS.QUOTE]=[l.BLOCKS.PARAGRAPH],r[l.BLOCKS.TABLE]=[l.BLOCKS.TABLE_ROW],r[l.BLOCKS.TABLE_ROW]=[l.BLOCKS.TABLE_CELL,l.BLOCKS.TABLE_HEADER_CELL],r[l.BLOCKS.TABLE_CELL]=[l.BLOCKS.PARAGRAPH],r[l.BLOCKS.TABLE_HEADER_CELL]=[l.BLOCKS.PARAGRAPH],r),t.HEADINGS=[l.BLOCKS.HEADING_1,l.BLOCKS.HEADING_2,l.BLOCKS.HEADING_3,l.BLOCKS.HEADING_4,l.BLOCKS.HEADING_5,l.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=i([l.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[l.BLOCKS.DOCUMENT,l.BLOCKS.PARAGRAPH,l.BLOCKS.HEADING_1,l.BLOCKS.HEADING_2,l.BLOCKS.HEADING_3,l.BLOCKS.HEADING_4,l.BLOCKS.HEADING_5,l.BLOCKS.HEADING_6,l.BLOCKS.OL_LIST,l.BLOCKS.UL_LIST,l.BLOCKS.LIST_ITEM,l.BLOCKS.HR,l.BLOCKS.QUOTE,l.BLOCKS.EMBEDDED_ENTRY,l.BLOCKS.EMBEDDED_ASSET,a.INLINES.HYPERLINK,a.INLINES.ENTRY_HYPERLINK,a.INLINES.ASSET_HYPERLINK,a.INLINES.EMBEDDED_ENTRY,"text"]},167:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},9426:function(e,t,n){n.r(t);var r=n(5893),i=n(5675),l=n.n(i),a=n(2719),E=n(1664),o=n.n(E);t.default=function(e){var t=e.image,n=e.imageAltText,i=e.imageTitle,E=e.imageUrl;return(0,r.jsx)("div",{className:"m-2 h-12 w-12 rounded-full hover:bg-slate-200 dark:overflow-hidden dark:bg-white hover:dark:overflow-visible dark:hover:bg-slate-200",children:(0,r.jsx)(o(),{href:E,children:(0,r.jsx)("a",{className:"flex cursor-pointer items-center justify-center",target:"_blank",children:(0,r.jsx)(l(),{src:t.src,alt:n,title:i,width:50,height:50,loader:a.B})})})})}},4327:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),i=n(7294),l=n(5675),a=n.n(l),E=n(2719),o=function(){var e=(0,i.useState)(null),t=e[0],n=e[1];return(0,i.useEffect)((function(){n(window.innerWidth);var e=function(){return n(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),t?{width:t,isMobile:t<768,isTablet:t>=768&&t<992,isHandheld:t<992,isDesktop:t>=992}:null},u=function(e){var t=e.image,n=e.width,l=(0,i.useState)(!1),u=l[0],L=l[1],c=function(e){document.body.style.overflow=e?"hidden":"visible",L(e)},d=o(),s=(0,E.u)(t);return n=n||600,n=(null===d||void 0===d?void 0:d.isMobile)?d.width:n,(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"group flex flex-col",children:[(0,r.jsx)(a(),{onClick:function(){return c(!u)},className:"cursor-pointer",src:t.image.src,alt:t.imageAltText,title:t.imageTitle,width:n,height:n/s,loader:E.B}),(0,r.jsx)("span",{className:"invisible mt-1 self-end text-xs text-gray-500 group-hover:visible dark:text-gray-400",children:"Click on the image to view in full size."})]}),u&&(0,r.jsx)("div",{onClick:function(){return c(!1)},className:"fixed inset-0 z-10 flex h-screen w-full cursor-default items-center justify-center bg-neutral-500/75 outline-none",children:(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("span",{title:"Close",className:"z-20 h-6 w-6 translate-y-6 cursor-pointer self-end bg-neutral-300",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"black",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})}),(0,r.jsx)("div",{className:"bg-neutral-500",children:(0,r.jsx)(a(),{onClick:function(){return L(!u)},className:"z-10 cursor-pointer",src:t.image.src,alt:t.imageAltText,title:t.imageTitle,width:t.image.width,height:t.image.height,loader:E.B})}),(0,r.jsx)("p",{className:"bg-neutral-300 p-2 text-sm text-black",children:t.image.description})]})})]})}},3200:function(e,t,n){n.r(t);var r=n(5893),i=n(1664),l=n.n(i);t.default=function(e){return"Link"===e.type?(0,r.jsx)(l(),{href:e.destination,children:(0,r.jsx)("a",{className:"".concat(e.eventClass," text-blue-400"),target:"".concat(e.externalLink?"_blank":"_self"),title:e.altText,"data-action-detail":e.eventLabel,children:e.label})}):"Button"===e.type?(0,r.jsx)(l(),{href:e.destination,children:(0,r.jsx)("a",{className:"".concat(e.eventClass," inline-block rounded-sm bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-800 active:bg-red-900"),target:"".concat(e.externalLink?"_blank":"_self"),title:e.altText,"data-action-detail":e.eventLabel,children:e.label})}):null}},8269:function(e,t,n){n.r(t);var r=n(4924),i=n(5893),l=n(4129),a=n(6437),E=n(4327),o=function(e){var t=e.title,n=e.titleType;if(!t)return null;switch(n){case"H1":return(0,i.jsx)("h1",{className:"py-10 text-3xl font-medium text-cyan-700 dark:text-cyan-300",children:t});case"H2":return(0,i.jsx)("h2",{className:"py-5 text-2xl font-medium text-cyan-700 dark:text-cyan-300",children:t});case"H3":return(0,i.jsx)("h3",{className:"py-5 text-xl font-medium text-cyan-700 dark:text-cyan-300",children:t});default:return null}};t.default=function(e){var t,n,u=e.title,L=e.titleType,c=e.description,d=e.imagesSectionCollection,s=e.secondaryTitle,S=e.secondaryTitleType,O=e.secondaryDescription,_=null===d||void 0===d?void 0:d.items,B={renderMark:(t={},(0,r.Z)(t,a.MARKS.BOLD,(function(e){return(0,i.jsx)("strong",{children:e})})),(0,r.Z)(t,a.MARKS.ITALIC,(function(e){return(0,i.jsx)("em",{children:e})})),t),renderNode:(n={},(0,r.Z)(n,a.BLOCKS.PARAGRAPH,(function(e,t){return Array.isArray(t)&&!!t[0]&&(0,i.jsx)("p",{className:"mt-2",children:t})})),(0,r.Z)(n,a.BLOCKS.UL_LIST,(function(e,t){return(0,i.jsx)("ul",{className:"mt-2 list-disc pl-5",children:t})})),(0,r.Z)(n,a.BLOCKS.OL_LIST,(function(e,t){return(0,i.jsx)("ol",{className:"mt-2 list-decimal pl-5",children:t})})),(0,r.Z)(n,a.BLOCKS.LIST_ITEM,(function(e,t){var n,E=(0,l.h)(e,{renderNode:(n={},(0,r.Z)(n,a.BLOCKS.PARAGRAPH,(function(e,t){return t})),(0,r.Z)(n,a.BLOCKS.LIST_ITEM,(function(e,t){return(0,i.jsx)("li",{children:t})})),n)});return E})),n)};return(0,i.jsxs)("section",{children:[(0,i.jsx)(o,{title:u,titleType:L}),(0,l.h)(c,B),(0,i.jsx)("div",{className:"mb-5 flex flex-col items-center",children:null===_||void 0===_?void 0:_.map((function(e,t){return(0,i.jsxs)("div",{className:"my-5 max-w-5xl",children:[(0,i.jsx)(E.default,{image:e,width:1024}),(0,i.jsx)("p",{className:"text-sm",children:e.image.description})]},t)}))}),(0,i.jsx)(o,{title:s,titleType:S}),(0,l.h)(O,B),(0,i.jsx)("hr",{className:"mt-2 dark:border-neutral-500"})]})}},5596:function(e,t,n){n.r(t);var r=n(6042),i=n(5893),l=n(3200),a=n(9426),E=n(4327);t.default=function(e){var t=e.screenshotsCollection,n=e.title,o=e.shortDescription,u=e.productUrlLink,L=e.builtWithTitle,c=e.builtWithCollection,d=e.viewMoreDetailsButton,s=t.items[0],S=c.items;return(0,i.jsxs)("section",{className:"border-b-[1px] border-gray-300 pt-5 dark:border-gray-700 md:flex",children:[(0,i.jsx)("div",{className:"",children:(0,i.jsx)(E.default,{image:s})}),(0,i.jsxs)("div",{className:"mb-5 xl:ml-5",children:[(0,i.jsx)("h2",{className:"mt-2 text-xl font-medium xl:mt-0",children:n}),(0,i.jsx)("p",{className:"mt-2 font-light",children:o}),(0,i.jsx)("ul",{className:"mt-2 list-disc pl-5",children:(0,i.jsx)("li",{children:(0,i.jsx)(l.default,(0,r.Z)({},u))})}),(0,i.jsx)("p",{className:"mt-2 font-light",children:L}),(0,i.jsx)("div",{className:"flex flex-wrap",children:S.map((function(e,t){return(0,i.jsx)(a.default,(0,r.Z)({},e),t)}))}),(0,i.jsx)("div",{className:"my-4",children:(0,i.jsx)(l.default,(0,r.Z)({},d))})]})]})}}}]);