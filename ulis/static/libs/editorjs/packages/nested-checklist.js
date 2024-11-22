/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/@calumk/editorjs-nested-checklist@1.1.0/dist/editorjs-nested-checklist.bundle.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.editorjsNestedChecklist=t():e.editorjsNestedChecklist=t()}(self,(function(){return(()=>{var e={321:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var i=n(645),s=n.n(i)()((function(e){return e[1]}));s.push([e.id,'.cdx-nested-list {\n  margin: 0;\n  padding: 0;\n  outline: none;\n  counter-reset: item;\n  list-style: none;\n}\n\n  .cdx-nested-list__item {\n    line-height: 1.6em;\n    display: flex;\n    margin: 2px 0;\n  }\n\n  .cdx-nested-list__item [contenteditable]{\n      outline: none;\n    }\n\n  .cdx-nested-list__item-body {\n      flex-grow: 2;\n      /* display:flex; */\n    }\n\n  .cdx-nested-list__item-content,\n    .cdx-nested-list__item-children {\n      flex-basis: 100%;\n    }\n\n  .cdx-nested-list__item-content {\n      display : inline-block;\n      word-break: break-word;\n      white-space: pre-wrap;\n      margin-left:5px;\n    }\n\n  .cdx-nested-list__item-checked {\n      display : inline-block;\n      margin-top: 3px;\n      width:20px;\n      height:20px;\n      background-color:#eee;\n      border-radius: 50%;\n      border: 1px solid #d0d0d0;\n      \n    }\n\n  /* .cdx-checklist__item-checkbox {\n      display: inline-block;\n      flex-shrink: 0;\n      position: relative;\n      width: 20px;\n      height: 20px;\n      margin: 5px;\n      margin-left: 0;\n      margin-right: 7px;\n      border-radius: 50%;\n      border: 1px solid #d0d0d0;\n      background: #fff;\n      cursor: pointer;\n      user-select: none;\n  } */\n\n  .cdx-nested-list__item-children {}\n\n  .cdx-nested-list__item::before {\n      counter-increment: item;\n      margin-right: 5px;\n      white-space: nowrap;\n    }\n\n  .cdx-nested-list--ordered > .cdx-nested-list__item::before {\n    content: counters(item, ".") ". ";\n  }\n\n  .cdx-nested-list--unordered > .cdx-nested-list__item::before {\n    content: "●";\n  }\n\n  .cdx-nested-list--none > .cdx-nested-list__item::before {\n    content: "\\00a0\\00a0\\00a0";\n  }\n\n  .cdx-nested-list__settings {\n    display: flex;\n  }\n\n  .cdx-nested-list__settings .cdx-settings-button {\n      width: 50%;\n    }\n\n\n.removebullet::before{\n  content: \'\' !important;\n}\n\n.cdx-nested-list__item-checkedContentWrapper{\n  display:flex;\n}\n\n\n.itemChecked_true{\n  background:#388ae5;\n  border: 1px solid #388ae5;\n  cursor : pointer;\n \n}\n.itemChecked_true::before {\n  content: \'\';\n  width: 20px;\n  height: 20px;\n  background-color:#fff;\n  display: block;\n  position: absolute;\n  clip-path: polygon(31% 50%, 43% 62%, 71% 34%, 77% 40%, 43% 74%, 25% 56%);\n}\n\n.itemChecked_false{\n  background-color:#fff;\n  border: 1px solid #d0d0d0;\n  cursor : pointer;\n}\n.itemChecked_null{\n  border: 1px solid #fff;\n  /* background-color:#DDDFE6; */\n  /* border:2px solid #DDDFE6; */\n  background:#fff;\n  /* opacity:0; */\n  /* height:4px; */\n  /* margin-top:10px; */\n  width:4px;\n  /* margin-left:-20px; */\n  transition: width 0.25s ease-in-out, opacity 0.25s ease-in-out;\n  opacity:0;\n  /* transition: opacity 0.25s ease-in-out; */\n  /* position:absolute; */\n  cursor : pointer;\n}\n.itemChecked_null_hover{\n  /* position:relative; */\n  width:20px;\n  opacity:1;\n  background-color:#DDDFE6;\n  border: 1px solid #DDDFE6;\n}\n',""]);const r=s},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var s={};if(i)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(s[o]=!0)}for(var a=0;a<e.length;a++){var d=[].concat(e[a]);i&&s[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},379:(e,t,n)=>{"use strict";var i,s=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function o(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},i=[],s=0;s<e.length;s++){var a=e[s],d=t.base?a[0]+t.base:a[0],c=n[d]||0,l="".concat(d," ").concat(c);n[d]=c+1;var h=o(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==h?(r[h].references++,r[h].updater(p)):r.push({identifier:l,updater:f(p,t),references:1}),i.push(l)}return i}function d(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var o=s(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var c,l=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function h(e,t,n,i){var s=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=l(t,s);else{var r=document.createTextNode(s),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(r,o[t]):e.appendChild(r)}}function p(e,t,n){var i=n.css,s=n.media,r=n.sourceMap;if(s?e.setAttribute("media",s):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var u=null,m=0;function f(e,t){var n,i,s;if(t.singleton){var r=m++;n=u||(u=d(t)),i=h.bind(null,n,r,!1),s=h.bind(null,n,r,!0)}else n=d(t),i=p.bind(null,n,t),s=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else s()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var s=o(n[i]);r[s].references--}for(var d=a(e,t),c=0;c<n.length;c++){var l=o(n[c]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}n=d}}}},499:e=>{e.exports='<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"><path d="M5.625 4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0-4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0 9.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm-4.5-5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0-4.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0 9.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z"></path></svg>'}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};return(()=>{"use strict";function e(e,t=null,n={}){const i=document.createElement(e);Array.isArray(t)?i.classList.add(...t):t&&i.classList.add(t);for(const e in n)i[e]=n[e];return i}function t(t){const n=e("div");return n.appendChild(t),n.innerHTML}function s(e){let t;return e.nodeType!==Node.ELEMENT_NODE?t=e.textContent:(t=e.innerHTML,t=t.replaceAll("<br>","")),0===t.trim().length}n.d(i,{default:()=>h});class r{constructor(){this.savedFakeCaret=void 0}save(){const t=r.range,n=e("span");n.hidden=!0,t.insertNode(n),this.savedFakeCaret=n}restore(){if(!this.savedFakeCaret)return;const e=window.getSelection(),t=new Range;t.setStartAfter(this.savedFakeCaret),t.setEndAfter(this.savedFakeCaret),e.removeAllRanges(),e.addRange(t),setTimeout((()=>{this.savedFakeCaret.remove()}),150)}static get range(){const e=window.getSelection();return e&&e.rangeCount?e.getRangeAt(0):null}static extractFragmentFromCaretPositionTillTheEnd(){const e=window.getSelection();if(!e.rangeCount)return;const t=e.getRangeAt(0);let n=t.startContainer;n.nodeType!==Node.ELEMENT_NODE&&(n=n.parentNode);const i=n.closest("[contenteditable]");t.deleteContents();const s=t.cloneRange();return s.selectNodeContents(i),s.setStart(t.endContainer,t.endOffset),s.extractContents()}static focus(e,t=!0){const n=document.createRange(),i=window.getSelection();n.selectNodeContents(e),n.collapse(t),i.removeAllRanges(),i.addRange(n)}static isAtStart(){const e=window.getSelection();if(e.focusOffset>0)return!1;const t=e.focusNode;return r.getHigherLevelSiblings(t,"left").every((e=>s(e)))}static getHigherLevelSiblings(e,t="left"){let n=e;const i=[];for(;n.parentNode&&"true"!==n.parentNode.contentEditable;)n=n.parentNode;const s="left"===t?"previousSibling":"nextSibling";for(;n[s];)n=n[s],i.push(n);return i}}var o=n(379),a=n.n(o),d=n(321);a()(d.Z,{insert:"head",singleton:!1}),d.Z.locals;var c=n(499),l=n.n(c);class h{static get isReadOnlySupported(){return!0}static get enableLineBreaks(){return!0}constructor({data:e,config:t,api:n,readOnly:i}){this.nodes={wrapper:null},this.api=n,this.readOnly=i,this.config=t,this.settings=[{name:"none",title:this.api.i18n.t("None"),icon:'<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"><path d="M 5.819 4.607 L 15.181 4.607 C 16.004 4.607 16.518 5.498 16.107 6.211 C 15.916 6.541 15.563 6.745 15.181 6.745 L 5.82 6.745 C 4.997 6.745 4.483 5.854 4.894 5.142 C 5.085 4.811 5.438 4.607 5.82 4.607 L 5.819 4.607 Z M 5.819 0 L 15.181 0 C 16.004 0 16.518 0.891 16.107 1.604 C 15.916 1.934 15.563 2.138 15.181 2.138 L 5.82 2.138 C 4.997 2.138 4.483 1.247 4.894 0.535 C 5.085 0.204 5.438 0 5.82 0 L 5.819 0 Z M 5.819 9.357 L 15.181 9.357 C 16.004 9.357 16.518 10.248 16.107 10.96 C 15.916 11.291 15.563 11.495 15.181 11.495 L 5.82 11.495 C 4.997 11.47 4.511 10.564 4.944 9.864 C 5.132 9.559 5.462 9.369 5.82 9.358 L 5.819 9.357 Z"></path></svg>',default:!1},{name:"unordered",title:this.api.i18n.t("Unordered"),icon:'<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"> <path d="M5.625 4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0-4.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm0 9.85h9.25a1.125 1.125 0 0 1 0 2.25h-9.25a1.125 1.125 0 0 1 0-2.25zm-4.5-5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0-4.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25zm0 9.85a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z"/></svg>',default:!1},{name:"ordered",title:this.api.i18n.t("Ordered"),icon:'<svg width="17" height="13" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg"><path d="M5.819 4.607h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 1 1 0-2.138zm0-4.607h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 1 1 0-2.138zm0 9.357h9.362a1.069 1.069 0 0 1 0 2.138H5.82a1.069 1.069 0 0 1 0-2.137zM1.468 4.155V1.33c-.554.404-.926.606-1.118.606a.338.338 0 0 1-.244-.104A.327.327 0 0 1 0 1.59c0-.107.035-.184.105-.234.07-.05.192-.114.369-.192.264-.118.475-.243.633-.373.158-.13.298-.276.42-.438a3.94 3.94 0 0 1 .238-.298C1.802.019 1.872 0 1.975 0c.115 0 .208.042.277.127.07.085.105.202.105.351v3.556c0 .416-.15.624-.448.624a.421.421 0 0 1-.32-.127c-.08-.085-.121-.21-.121-.376zm-.283 6.664h1.572c.156 0 .275.03.358.091a.294.294 0 0 1 .123.25.323.323 0 0 1-.098.238c-.065.065-.164.097-.296.097H.629a.494.494 0 0 1-.353-.119.372.372 0 0 1-.126-.28c0-.068.027-.16.081-.273a.977.977 0 0 1 .178-.268c.267-.264.507-.49.722-.678.215-.188.368-.312.46-.371.165-.11.302-.222.412-.334.109-.112.192-.226.25-.344a.786.786 0 0 0 .085-.345.6.6 0 0 0-.341-.553.75.75 0 0 0-.345-.08c-.263 0-.47.11-.62.329-.02.029-.054.107-.101.235a.966.966 0 0 1-.16.295c-.059.069-.145.103-.26.103a.348.348 0 0 1-.25-.094.34.34 0 0 1-.099-.258c0-.132.031-.27.093-.413.063-.143.155-.273.279-.39.123-.116.28-.21.47-.282.189-.072.411-.107.666-.107.307 0 .569.045.786.137a1.182 1.182 0 0 1 .618.623 1.18 1.18 0 0 1-.096 1.083 2.03 2.03 0 0 1-.378.457c-.128.11-.344.282-.646.517-.302.235-.509.417-.621.547a1.637 1.637 0 0 0-.148.187z"/></svg>',default:!0}],this.defaultListStyle="ordered";const s={style:this.defaultListStyle,items:[]};this.data=e&&Object.keys(e).length?e:s,this.caret=new r}render(){return this.nodes.wrapper=this.makeListWrapper(this.data.style,[this.CSS.baseBlock]),this.data.items.length?this.appendItems(this.data.items,this.nodes.wrapper):this.appendItems([{content:"",items:[],checked:null}],this.nodes.wrapper),this.readOnly||this.nodes.wrapper.addEventListener("keydown",(e=>{switch(e.key){case"Enter":this.enterPressed(e);break;case"Backspace":this.backspace(e);break;case"Tab":e.shiftKey?this.shiftTab(e):this.addTab(e)}}),!1),this.nodes.wrapper}renderSettings(){const t=e("div",[this.CSS.settingsWrapper],{});return this.settings.forEach((n=>{const i=e("div",this.CSS.settingsButton,{innerHTML:n.icon});i.addEventListener("click",(()=>{this.listStyle=n.name;const e=i.parentNode.querySelectorAll("."+this.CSS.settingsButton);Array.from(e).forEach((e=>e.classList.remove(this.CSS.settingsButtonActive))),i.classList.toggle(this.CSS.settingsButtonActive)})),this.api.tooltip.onHover(i,n.title,{placement:"top",hidingDelay:500}),this.data.style===n.name&&i.classList.add(this.CSS.settingsButtonActive),t.appendChild(i)})),t}appendItems(e,t){e.forEach((e=>{const n=this.createItem(e.content,e.items,e.checked);t.appendChild(n)}))}createItem(t,n=[],i){const s=e("li",this.CSS.item),r=e("div",this.CSS.itemBody),o=e("div",this.CSS.itemCheckedContentWrapper),a=e("div",this.CSS.itemChecked);!0===i&&a.classList.add("itemChecked_true"),!1===i&&a.classList.add("itemChecked_false"),null==i&&a.classList.add("itemChecked_null"),a.addEventListener("click",(e=>{if(!this.readOnly){if(a.classList.contains("itemChecked_true"))return a.classList.remove("itemChecked_true"),void a.classList.add("itemChecked_false");if(a.classList.contains("itemChecked_false"))return a.classList.remove("itemChecked_false"),void a.classList.add("itemChecked_null");if(a.classList.contains("itemChecked_null"))return a.classList.remove("itemChecked_null"),a.classList.remove("itemChecked_null_hover"),void a.classList.add("itemChecked_true")}})),a.addEventListener("mouseenter",(e=>{this.readOnly||a.classList.contains("itemChecked_null")&&a.classList.add("itemChecked_null_hover")})),a.addEventListener("mouseleave",(e=>{this.readOnly||a.classList.remove("itemChecked_null_hover")}));const d=e("div",this.CSS.itemContent,{innerHTML:t,contentEditable:!this.readOnly});return o.appendChild(a),o.appendChild(d),r.appendChild(o),s.appendChild(r),n&&n.length>0&&this.addChildrenList(s,n),s}save(){const e=t=>Array.from(t.querySelectorAll(`:scope > .${this.CSS.item}`)).map((t=>{const n=t.querySelector(`.${this.CSS.itemChildren}`),i=this.getItemContent(t),s=t.querySelector(`.${this.CSS.itemChecked}`);let r;return s.classList.contains("itemChecked_true")&&(r=!0),s.classList.contains("itemChecked_false")&&(r=!1),s.classList.contains("itemChecked_null")&&(r=null),{content:i,checked:r,items:n?e(n):[]}}));return{style:this.data.style,items:e(this.nodes.wrapper)}}addChildrenList(e,t){const n=e.querySelector(`.${this.CSS.itemBody}`),i=this.makeListWrapper(void 0,[this.CSS.itemChildren]);this.appendItems(t,i),n.appendChild(i)}makeListWrapper(t=this.listStyle,n=[]){return"unordered"==t&&n.push(this.CSS.wrapperUnordered),"ordered"==t&&n.push(this.CSS.wrapperOrdered),"none"==t&&n.push(this.CSS.wrapperNone),e("ul",[this.CSS.wrapper,...n])}get CSS(){return{baseBlock:this.api.styles.block,wrapper:"cdx-nested-list",wrapperOrdered:"cdx-nested-list--ordered",wrapperUnordered:"cdx-nested-list--unordered",wrapperNone:"cdx-nested-list--none",item:"cdx-nested-list__item",itemBody:"cdx-nested-list__item-body",itemCheckedContentWrapper:"cdx-nested-list__item-checkedContentWrapper",itemContent:"cdx-nested-list__item-content",itemChecked:"cdx-nested-list__item-checked",itemCheckedIndicator:"cdx-nested-list__item-checkedIndicator",itemChildren:"cdx-nested-list__item-children",settingsWrapper:"cdx-nested-list__settings",settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive}}get listStyle(){return this.data.style||this.defaultListStyle}set listStyle(e){const t=Array.from(this.nodes.wrapper.querySelectorAll(`.${this.CSS.wrapper}`));t.push(this.nodes.wrapper),t.forEach((t=>{t.classList.remove(this.CSS.wrapperUnordered,this.CSS.wrapperOrdered,this.CSS.wrapperNone),"unordered"==e&&t.classList.add(this.CSS.wrapperUnordered),"ordered"==e&&t.classList.add(this.CSS.wrapperOrdered),"none"==e&&t.classList.add(this.CSS.wrapperNone)})),this.data.style=e}get currentItem(){let e=window.getSelection().anchorNode;return e.nodeType!==Node.ELEMENT_NODE&&(e=e.parentNode),e.closest(`.${this.CSS.item}`)}enterPressed(e){const n=this.currentItem;e.stopPropagation(),e.preventDefault();const i=0===this.getItemContent(n).trim().length,s=n.parentNode===this.nodes.wrapper,o=null===n.nextElementSibling;if(s&&o&&i)return void this.getOutOfList();if(o&&i)return void this.unshiftItem();const a=t(r.extractFragmentFromCaretPositionTillTheEnd()),d=n.querySelector(`.${this.CSS.itemChildren}`),c=this.createItem(a,void 0);d&&Array.from(d.querySelectorAll(`.${this.CSS.item}`)).length>0?d.prepend(c):n.after(c),this.focusItem(c)}unshiftItem(){const e=this.currentItem,t=e.parentNode.closest(`.${this.CSS.item}`);if(!t)return;this.caret.save(),t.after(e),this.caret.restore();const n=t.querySelector(`.${this.CSS.itemChildren}`);0===n.children.length&&n.remove()}getItemContent(e){const t=e.querySelector(`.${this.CSS.itemContent}`);return s(t)?"":t.innerHTML}focusItem(e,t=!0){const n=e.querySelector(`.${this.CSS.itemContent}`);r.focus(n,t)}getOutOfList(){this.currentItem.remove(),this.api.blocks.insert(),this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex())}backspace(e){if(!r.isAtStart())return;e.preventDefault();const n=this.currentItem,i=n.previousSibling,s=n.parentNode.closest(`.${this.CSS.item}`);if(!i&&!s)return;let o;if(e.stopPropagation(),i){const e=i.querySelectorAll(`.${this.CSS.item}`);o=Array.from(e).pop()||i}else o=s;const a=t(r.extractFragmentFromCaretPositionTillTheEnd()),d=o.querySelector(`.${this.CSS.itemContent}`);r.focus(d,!1),this.caret.save(),d.insertAdjacentHTML("beforeend",a);let c=n.querySelectorAll(`.${this.CSS.itemChildren} > .${this.CSS.item}`);c=Array.from(c),c=c.filter((e=>e.parentNode.closest(`.${this.CSS.item}`)===n)),c.reverse().forEach((e=>{i?o.after(e):n.after(e)})),n.remove(),this.caret.restore()}addTab(e){e.stopPropagation(),e.preventDefault();const t=this.currentItem,n=t.previousSibling;if(!n)return;const i=n.querySelector(`.${this.CSS.itemChildren}`);if(this.caret.save(),i)i.appendChild(t);else{const e=this.makeListWrapper(void 0,[this.CSS.itemChildren]),i=n.querySelector(`.${this.CSS.itemBody}`);e.appendChild(t),i.appendChild(e)}this.caret.restore()}shiftTab(e){e.stopPropagation(),e.preventDefault(),this.unshiftItem()}static joinRecursive(e){return e.items.map((e=>`${e.content} ${h.joinRecursive(e)}`)).join("")}static get conversionConfig(){return{export:e=>h.joinRecursive(e),import:e=>({items:[{content:e,items:[]}],style:"unordered"})}}static get toolbox(){return{icon:l(),title:"Nested Checklist"}}}})(),i.default})()}));