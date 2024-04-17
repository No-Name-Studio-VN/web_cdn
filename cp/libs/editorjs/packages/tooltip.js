/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/editorjs-tooltip@1.2.1/dist/bundle.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.Tooltip=o():t.Tooltip=o()}(self,(()=>(()=>{var t={523:(t,o,e)=>{"use strict";e.d(o,{A:()=>l});var n=e(601),i=e.n(n),r=e(314),s=e.n(r)()(i());s.push([t.id,".tooltip-tool__input{\n  border: 0;\n  border-radius: 0 0 4px 4px;\n  border-top: 1px solid rgba(201,201,204,.48);\n}\n\n.tooltip-tool__span{\n  padding: 3px;\n  border-radius: 6px;\n}\n\n.tooltip-tool__underline{\n  text-decoration: underline;\n}\n\n.tooltip-color::before {\n  background-color: transparent;\n}\n\n.tooltip-color::after {\n  background-color: transparent;\n}\n\n.tooltip-text-color {\n  color: transparent;\n}\n\n.cdx-tooltip {\n  display: inline-block;\n}\n",""]);const l=s},314:t=>{"use strict";t.exports=function(t){var o=[];return o.toString=function(){return this.map((function(o){var e="",n=void 0!==o[5];return o[4]&&(e+="@supports (".concat(o[4],") {")),o[2]&&(e+="@media ".concat(o[2]," {")),n&&(e+="@layer".concat(o[5].length>0?" ".concat(o[5]):""," {")),e+=t(o),n&&(e+="}"),o[2]&&(e+="}"),o[4]&&(e+="}"),e})).join("")},o.i=function(t,e,n,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(n)for(var l=0;l<this.length;l++){var a=this[l][0];null!=a&&(s[a]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);n&&s[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),o.push(u))}},o}},601:t=>{"use strict";t.exports=function(t){return t[1]}},72:t=>{"use strict";var o=[];function e(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function n(t,n){for(var r={},s=[],l=0;l<t.length;l++){var a=t[l],c=n.base?a[0]+n.base:a[0],u=r[c]||0,p="".concat(c," ").concat(u);r[c]=u+1;var d=e(p),h={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==d)o[d].references++,o[d].updater(h);else{var f=i(h,n);n.byIndex=l,o.splice(l,0,{identifier:p,updater:f,references:1})}s.push(p)}return s}function i(t,o){var e=o.domAPI(o);return e.update(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap&&o.supports===t.supports&&o.layer===t.layer)return;e.update(t=o)}else e.remove()}}t.exports=function(t,i){var r=n(t=t||[],i=i||{});return function(t){t=t||[];for(var s=0;s<r.length;s++){var l=e(r[s]);o[l].references--}for(var a=n(t,i),c=0;c<r.length;c++){var u=e(r[c]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}r=a}}},659:t=>{"use strict";var o={};t.exports=function(t,e){var n=function(t){if(void 0===o[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}o[t]=e}return o[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}},540:t=>{"use strict";t.exports=function(t){var o=document.createElement("style");return t.setAttributes(o,t.attributes),t.insert(o,t.options),o}},868:t=>{"use strict";t.exports=function(t,o){Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])}))}},825:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var o=t.insertStyleElement(t);return{update:function(e){!function(t,o,e){var n="";e.supports&&(n+="@supports (".concat(e.supports,") {")),e.media&&(n+="@media ".concat(e.media," {"));var i=void 0!==e.layer;i&&(n+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),n+=e.css,i&&(n+="}"),e.media&&(n+="}"),e.supports&&(n+="}");var r=e.sourceMap;r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),o.styleTagTransform(n,t,o.options)}(o,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(o)}}}},113:t=>{"use strict";t.exports=function(t,o){if(o.styleSheet)o.styleSheet.cssText=t;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(t))}}},274:t=>{t.exports='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="14" viewBox="0 -5 21 30"><path fill="currentColor" stroke-width="0" d="M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2M4,4V16H8.83L12,19.17L15.17,16H20V4H4M6,7H18V9H6V7M6,11H16V13H6V11Z"></path></svg>'}},o={};function e(n){var i=o[n];if(void 0!==i)return i.exports;var r=o[n]={id:n,exports:{}};return t[n](r,r.exports,e),r.exports}e.n=t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},e.d=(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},e.o=(t,o)=>Object.prototype.hasOwnProperty.call(t,o);var n={};return(()=>{"use strict";e.d(n,{default:()=>T});var t=e(72),o=e.n(t),i=e(825),r=e.n(i),s=e(659),l=e.n(s),a=e(868),c=e.n(a),u=e(540),p=e.n(u),d=e(113),h=e.n(d),f=e(523),v={attributes:{id:"editorjs-tooltip"}};v.styleTagTransform=h(),v.setAttributes=c(),v.insert=l().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=p(),o()(f.A,v),f.A&&f.A.locals&&f.A.locals;var y=e(274),b=e.n(y);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function g(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,C(n.key),n)}}function C(t){var o=function(t,o){if("object"!=m(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==m(o)?o:o+""}var T=function(){return t=function t(o){var e,n,i,r=o.api,s=o.config,l=void 0===s?{}:s;!function(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=r,this.button=null,this._state=!1,this.spanTooltip=null;var a=l.location,c=void 0===a?"bottom":a;this.tooltipLocation=c,this.highlightColor=l.highlightColor,this.underline=null!==(e=l.underline)&&void 0!==e&&e,this.backgroundColor=l.backgroundColor,this.textColor=l.textColor,this.editorId=null!==(n=l.holder)&&void 0!==n?n:"editorjs",this.placeholder=null!==(i=l.placeholder)&&void 0!==i?i:"Add a tooltip",this.tag="SPAN",this.CSS={input:"tooltip-tool__input",tooltip:"cdx-tooltip",span:"tooltip-tool__span",underline:"tooltip-tool__underline"},this.tooltipsObserver()},o=[{key:"state",get:function(){return this._state},set:function(t){this._state=t;var o=this.button,e=this.api.styles.inlineToolButtonActive;o.classList.toggle(e,t)}},{key:"customTooltip",value:function(){var t=this,o=document.querySelector(".ct"),e=document.querySelector(".ct__content");new MutationObserver((function(n){n.forEach((function(n){if("childList"===n.type){var i=e.textContent;document.querySelector('[data-tooltip="'.concat(i,'"]'))?(t.backgroundColor&&t.setTooltipColor(),t.textColor&&t.setTooltipTextColor()):(o.classList.remove("tooltip-color"),e.classList.remove("tooltip-text-color"))}}))})).observe(e,{childList:!0})}},{key:"tooltipSheet",value:function(){var t=document.styleSheets;return Object.values(t).filter((function(t){return"editorjs-tooltip"===t.ownerNode.id}))}},{key:"tooltipCssRule",value:function(t){var o=this.tooltipSheet();return Object.values(o[0].cssRules).filter((function(o){return o.selectorText===t}))}},{key:"setTooltipColor",value:function(){var t=document.querySelector(".ct"),o=this.tooltipCssRule(".tooltip-color::before"),e=this.tooltipCssRule(".tooltip-color::after");o[0].style.setProperty("background-color",this.backgroundColor),e[0].style.setProperty("background-color",this.backgroundColor),t.classList.add("tooltip-color")}},{key:"setTooltipTextColor",value:function(){var t=this.tooltipCssRule(".tooltip-text-color"),o=document.querySelector(".ct__content");t[0].style.setProperty("color",this.textColor),o.classList.add("tooltip-text-color")}},{key:"tooltipsObserver",value:function(){var t=this,o=document.getElementById(this.editorId);new MutationObserver((function(o){o.forEach((function(o){"childList"===o.type&&o.target.classList.contains("codex-editor__redactor")&&document.querySelectorAll(".cdx-tooltip").forEach((function(o){return t.createTooltip(o.dataset.tooltip,o)}))}))})).observe(o,{childList:!0,subtree:!0})}},{key:"createTooltip",value:function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.spanTooltip;this.spanTooltip?(this.spanTooltip.dataset.tooltip=t,this.setBackgroundColor(this.spanTooltip),this.setUnderlineDecoration(this.spanTooltip)):(this.setBackgroundColor(o),this.setUnderlineDecoration(o));var e=this.tooltipLocation;this.api.tooltip.onHover(o,t,{placement:e})}},{key:"setBackgroundColor",value:function(t){var o=t;o.childElementCount>0?(o.firstChild.classList.add(this.CSS.span),o.firstChild.style.background=this.highlightColor):(o.classList.add(this.CSS.span),o.style.background=this.highlightColor)}},{key:"setUnderlineDecoration",value:function(t){var o=t;this.underline&&(o.childElementCount>0?o.firstChild.classList.add(this.CSS.underline):o.classList.add(this.CSS.underline))}},{key:"render",value:function(){(this.backgroundColor||this.textColor)&&this.customTooltip(),this.button=document.createElement("button"),this.button.type="button",this.button.innerHTML=b();var t=this.api.styles.inlineToolButton;return this.button.classList.add(t),this.button}},{key:"surround",value:function(t){this.state?this.unwrap(t):this.wrap(t)}},{key:"wrap",value:function(t){var o=t.extractContents();this.spanTooltip=document.createElement(this.tag),this.spanTooltip.classList.add(this.CSS.tooltip),this.spanTooltip.appendChild(o),t.insertNode(this.spanTooltip),this.api.selection.expandToTag(this.spanTooltip)}},{key:"unwrap",value:function(t){this.spanTooltip=this.api.selection.findParentTag(this.tag,this.CSS.tooltip);var o=t.extractContents();this.spanTooltip.remove(),t.insertNode(o)}},{key:"checkState",value:function(){this.spanTooltip=this.api.selection.findParentTag(this.tag),this.state=!!this.spanTooltip,this.state?this.showActions():this.hideActions()}},{key:"renderActions",value:function(){var t;if(this.spanTooltip=this.api.selection.findParentTag(this.tag),this.tooltipInput=document.createElement("input"),this.tooltipInput.placeholder=this.placeholder,this.tooltipInput.classList.add(this.api.styles.input),this.tooltipInput.classList.add(this.CSS.input),null!==(t=this.spanTooltip)&&void 0!==t&&null!==(t=t.dataset)&&void 0!==t&&t.tooltip){var o=this.spanTooltip.dataset.tooltip;this.tooltipInput.value=o}return this.tooltipInput.hidden=!0,this.tooltipInput}},{key:"showActions",value:function(){var t=this;this.tooltipInput.hidden=!1,this.api.listeners.on(this.tooltipInput,"keydown",(function(o){if("Enter"===o.key){var e=t.tooltipInput.value;t.createTooltip(e),t.closeToolbar()}}),!1)}},{key:"hideActions",value:function(){this.tooltipInput.hidden=!0}},{key:"closeToolbar",value:function(){document.querySelector(".ce-inline-toolbar--showed").classList.remove("ce-inline-toolbar--showed")}}],e=[{key:"isInline",get:function(){return!0}},{key:"sanitize",get:function(){return{span:function(t){return t.classList.remove("tooltip-tool__span","tooltip-tool__underline"),{class:!0,"data-tooltip":!0}}}}}],o&&g(t.prototype,o),e&&g(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,o,e}()})(),n.default})()));