/*! For license information please see bundle.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Alert=t():e.Alert=t()}(self,(()=>(()=>{var e={800:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(81),o=r.n(n),a=r(645),i=r.n(a)()(o());i.push([e.id,".cdx-alert{position:relative;padding:10px;border-radius:5px;margin-bottom:10px}.cdx-alert-primary{background-color:#ebf8ff;border:1px solid #4299e1;color:#2b6cb0}.cdx-alert-secondary{background-color:#f7fafc;border:1px solid #cbd5e0;color:#222731}.cdx-alert-info{background-color:#e6fdff;border:1px solid #4cd4ce;color:#00727c}.cdx-alert-success{background-color:#f0fff4;border:1px solid #68d391;color:#2f855a}.cdx-alert-warning{background-color:#fffaf0;border:1px solid #ed8936;color:#c05621}.cdx-alert-danger{background-color:#fff5f5;border:1px solid #fc8181;color:#c53030}.cdx-alert-light{background-color:#fff;border:1px solid #edf2f7;color:#1a202c}.cdx-alert-dark{background-color:#2d3748;border:1px solid #1a202c;color:#d3d3d3}.cdx-alert-align-left{text-align:left}.cdx-alert-align-center{text-align:center}.cdx-alert-align-right{text-align:right}.cdx-alert__message{outline:none}.cdx-alert [contentEditable=true][data-placeholder]::before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:normal;opacity:0}.cdx-alert [contentEditable=true][data-placeholder]:empty::before{opacity:1}.cdx-alert [contentEditable=true][data-placeholder]:empty:focus::before{opacity:0}.ce-popover__item[data-item-name=alert-primary] .ce-popover__item-icon svg #background{fill:#ebf8ff;stroke:#4299e1}.ce-popover__item[data-item-name=alert-primary] .ce-popover__item-icon svg #content{fill:#2b6cb0}.ce-popover__item[data-item-name=alert-secondary] .ce-popover__item-icon svg #background{fill:#f7fafc;stroke:#cbd5e0}.ce-popover__item[data-item-name=alert-secondary] .ce-popover__item-icon svg #content{fill:#222731}.ce-popover__item[data-item-name=alert-info] .ce-popover__item-icon svg #background{fill:#e6fdff;stroke:#4cd4ce}.ce-popover__item[data-item-name=alert-info] .ce-popover__item-icon svg #content{fill:#00727c}.ce-popover__item[data-item-name=alert-success] .ce-popover__item-icon svg #background{fill:#f0fff4;stroke:#68d391}.ce-popover__item[data-item-name=alert-success] .ce-popover__item-icon svg #content{fill:#2f855a}.ce-popover__item[data-item-name=alert-warning] .ce-popover__item-icon svg #background{fill:#fffaf0;stroke:#ed8936}.ce-popover__item[data-item-name=alert-warning] .ce-popover__item-icon svg #content{fill:#c05621}.ce-popover__item[data-item-name=alert-danger] .ce-popover__item-icon svg #background{fill:#fff5f5;stroke:#fc8181}.ce-popover__item[data-item-name=alert-danger] .ce-popover__item-icon svg #content{fill:#c53030}.ce-popover__item[data-item-name=alert-light] .ce-popover__item-icon svg #background{fill:#fff;stroke:#edf2f7}.ce-popover__item[data-item-name=alert-light] .ce-popover__item-icon svg #content{fill:#1a202c}.ce-popover__item[data-item-name=alert-dark] .ce-popover__item-icon svg #background{fill:#2d3748;stroke:#1a202c}.ce-popover__item[data-item-name=alert-dark] .ce-popover__item-icon svg #content{fill:#d3d3d3}",""]);const c=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var p=[].concat(e[s]);n&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},620:(e,t,r)=>{"use strict";var n=r(379),o=r.n(n),a=r(795),i=r.n(a),c=r(569),l=r.n(c),s=r(565),p=r.n(s),d=r(216),u=r.n(d),f=r(589),g=r.n(f),m=r(800),v={};v.styleTagTransform=g(),v.setAttributes=p(),v.insert=l().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),o()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals},379:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],s=n.base?l[0]+n.base:l[0],p=a[s]||0,d="".concat(s," ").concat(p);a[s]=p+1;var u=r(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var g=o(f,n);n.byIndex=c,t.splice(c,0,{identifier:d,updater:g,references:1})}i.push(d)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);t[c].references--}for(var l=n(e,o),s=0;s<a.length;s++){var p=r(a[s]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}a=l}}},569:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},749:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7L6 7"></path><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 17H6"></path><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 12L8 12"></path></svg>'},454:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 7L5 7"></path><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 17H5"></path><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13 12L5 12"></path></svg>'},431:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 7L7 7"></path><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17H7"></path><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 12L11 12"></path></svg>'},654:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 12a7 7 90 0 1 14 0 7 7 90 0 1-14 0zM12 9.02v-.01M12 12v3"></path></svg>'},338:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect id="background" width="18" height="18" x="3" y="3" fill="none" stroke="currentColor" stroke-width="1" rx="4"></rect><path id="content" fill="currentColor" stroke-width="0" d="m15.579 16.9-1.042-2.25H10.15L9.11 16.9H7.113L11.697 7h1.266l4.612 9.9h-1.998Zm-4.613-4.05h2.755l-1.377-2.953-1.379 2.953Z"></path></svg>'}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0;var n={};return(()=>{"use strict";r.d(n,{default:()=>_});var e=r(654),t=r.n(e),o=r(338),a=r.n(o),i=r(454),c=r.n(i),l=r(749),s=r.n(l),p=r(431),d=r.n(p);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return(t=b(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,b(n.key),n)}}function b(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===u(t)?t:String(t)}r(620).toString();var _=function(){function e(t){var r=t.data,n=t.config,o=t.api,a=t.readOnly;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=o,this.defaultType=n.defaultType||e.DEFAULT_TYPE,this.defaultAlign=n.defaultAlign||e.DEFAULT_ALIGN_TYPE,this.messagePlaceholder=n.messagePlaceholder||e.DEFAULT_MESSAGE_PLACEHOLDER,this.data={type:e.ALERT_TYPES.includes(r.type)?r.type:this.defaultType,align:e.ALIGN_TYPES.includes(r.align)?r.align:this.defaultAlign,message:r.message||""},this.container=void 0,this.readOnly=a}var r,n,o;return r=e,n=[{key:"CSS",get:function(){return{wrapper:"cdx-alert",wrapperForType:function(e){return"cdx-alert-".concat(e)},wrapperForAlignType:function(e){return"cdx-alert-align-".concat(e)},message:"cdx-alert__message"}}},{key:"render",value:function(){var e=[this.CSS.wrapper,this.CSS.wrapperForType(this.data.type),this.CSS.wrapperForAlignType(this.data.align)];this.container=this._make("div",e);var t=this._make("div",[this.CSS.message],{contentEditable:!this.readOnly,innerHTML:this.data.message});return t.dataset.placeholder=this.messagePlaceholder,this.container.appendChild(t),this.container}},{key:"renderSettings",value:function(){var t=this,r=e.ALERT_TYPES.map((function(e){return{icon:a(),name:"alert-".concat(e),label:t._getFormattedName(e),toggle:"alert",isActive:t.data.type===e,onActivate:function(){t._changeAlertType(e)}}})),n=e.ALIGN_TYPES.map((function(e){return{icon:"left"==e?c():"center"==e?s():"right"==e?d():IconAlign_left,name:"align-".concat(e),label:t._getFormattedName(e),toggle:"align",isActive:t.data.align===e,onActivate:function(){t._changeAlignType(e)}}}));return[].concat(v(r),v(n))}},{key:"_getFormattedName",value:function(e){return this.api.i18n.t(e.charAt(0).toUpperCase()+e.slice(1))}},{key:"_changeAlertType",value:function(t){var r=this;this.data.type=t,e.ALERT_TYPES.forEach((function(e){var n=r.CSS.wrapperForType(e);r.container.classList.remove(n),t===e&&r.container.classList.add(n)}))}},{key:"_changeAlignType",value:function(t){var r=this;this.data.align=t,e.ALIGN_TYPES.forEach((function(e){var n=r.CSS.wrapperForAlignType(e);r.container.classList.remove(n),t===e&&r.container.classList.add(n)}))}},{key:"save",value:function(e){var t=e.querySelector(".".concat(this.CSS.message));return g(g({},this.data),{},{message:t.innerHTML})}},{key:"_make",value:function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=document.createElement(e);for(var a in Array.isArray(r)?(t=o.classList).add.apply(t,v(r)):r&&o.classList.add(r),n)o[a]=n[a];return o}},{key:"onPaste",value:function(e){var t=e.detail.data;this.data={type:this.defaultType,message:t.innerHTML||""}}}],o=[{key:"toolbox",get:function(){return{icon:t(),title:"Alert"}}},{key:"enableLineBreaks",get:function(){return!0}},{key:"DEFAULT_TYPE",get:function(){return"info"}},{key:"DEFAULT_ALIGN_TYPE",get:function(){return"left"}},{key:"DEFAULT_MESSAGE_PLACEHOLDER",get:function(){return"Type here..."}},{key:"ALERT_TYPES",get:function(){return["primary","secondary","info","success","warning","danger","light","dark"]}},{key:"ALIGN_TYPES",get:function(){return["left","center","right"]}},{key:"isReadOnlySupported",get:function(){return!0}},{key:"conversionConfig",get:function(){var e=this;return{export:function(e){return e.message},import:function(t){return{message:t,type:e.DEFAULT_TYPE,alignType:e.DEFAULT_ALIGN_TYPE}}}}},{key:"sanitize",get:function(){return{message:!0,type:!1,alignType:!1}}}],n&&y(r.prototype,n),o&&y(r,o),Object.defineProperty(r,"prototype",{writable:!1}),e}()})(),n.default})()));