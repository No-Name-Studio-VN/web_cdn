// ©️2024 ULIS BLISS, All right reserved //
function _42e(O,E){const Z=_42Z();return _42e=function(e,F){e=e-0x166;let v=Z[e];return v;},_42e(O,E);}(function(O,E){const H=_42e,Z=O();while(!![]){try{const e=-parseInt(H(0x17f))/0x1+-parseInt(H(0x193))/0x2+parseInt(H(0x19a))/0x3+parseInt(H(0x173))/0x4+-parseInt(H(0x198))/0x5+parseInt(H(0x185))/0x6+parseInt(H(0x19f))/0x7*(parseInt(H(0x176))/0x8);if(e===E)break;else Z['push'](Z['shift']());}catch(F){Z['push'](Z['shift']());}}}(_42Z,0x8e39e),(function(){'use strict';const a=_42e;try{if(typeof document<'u'){var O=document[a(0x183)](a(0x17a));O['appendChild'](document[a(0x172)](a(0x18e))),document['head'][a(0x19b)](O);}}catch(E){console[a(0x166)](a(0x184),E);}}()),function(Z,e){const i=_42e,F=(function(){let t=!![];return function(j,u){const W=t?function(){const h=_42e;if(u){const c=u[h(0x182)](j,arguments);return u=null,c;}}:function(){};return t=![],W;};}()),v=F(this,function(){const T=_42e,t=function(){const s=_42e;let y;try{y=Function(s(0x189)+s(0x19e)+');')();}catch(f){y=window;}return y;},j=t(),u=new RegExp(T(0x16b),'g'),W='udHLPlisbFrlisyfNHrXs.nTnsXvnQK.meE;AlqocaGglhostkLSjfdKgKOQzWKANJwBSfTwRBYXjSGdGKHHXgdp'[T(0x177)](u,'')[T(0x17e)](';');let c,N,P,L;const m=function(y,f,p){const C=T;if(y[C(0x196)]!=f)return![];for(let Y=0x0;Y<f;Y++){for(let M=0x0;M<p[C(0x196)];M+=0x2){if(Y==p[M]&&y['charCodeAt'](Y)!=p[M+0x1])return![];}}return!![];},U=function(y,f,p){return m(f,p,y);},I=function(y,f,p){return U(f,y,p);},o=function(y,f,p){return I(f,p,y);};for(let y in j){if(m(y,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){c=y;break;}}for(let f in j[c]){if(o(0x6,f,[0x5,0x6e,0x0,0x64])){N=f;break;}}for(let p in j[c]){if(I(p,[0x7,0x6e,0x0,0x6c],0x8)){P=p;break;}}if(!('~'>N))for(let Y in j[c][P]){if(U([0x7,0x65,0x0,0x68],Y,0x8)){L=Y;break;}}if(!c||!j[c])return;const q=j[c][N],S=!!j[c][P]&&j[c][P][L],l=q||S;if(!l)return;let A=![];for(let M=0x0;M<W['length'];M++){const Q=W[M],b=Q[0x0]===String[T(0x188)](0x2e)?Q['slice'](0x1):Q,g=l[T(0x196)]-b['length'],x=l['indexOf'](b,g),R=x!==-0x1&&x===g;R&&((l['length']==Q[T(0x196)]||Q[T(0x18a)]('.')===0x0)&&(A=!![]));}if(!A){const z=new RegExp(T(0x181),'g'),V=T(0x1a1)[T(0x177)](z,'');j[c][P]=V;}});v(),typeof exports=='object'&&typeof module<'u'?module[i(0x195)]=e():typeof define==i(0x192)&&define['amd']?define(e):(Z=typeof globalThis<'u'?globalThis:Z||self,Z['Warning']=e());}(this,function(){'use strict';const B=_42e;const O=B(0x17b),E='';class Z{static get['isReadOnlySupported'](){return!0x0;}static get[B(0x18b)](){const G=B;return{'icon':O,'title':G(0x1a3)};}static get[B(0x190)](){return!0x0;}static get[B(0x16a)](){const X=B;return X(0x171);}static get['DEFAULT_MESSAGE_PLACEHOLDER'](){return'Message';}get[B(0x18c)](){const D=B;return{'baseClass':this[D(0x199)][D(0x16d)][D(0x197)],'wrapper':D(0x175),'title':D(0x18f),'input':this[D(0x199)][D(0x16d)]['input'],'message':D(0x168)};}constructor({data:F,config:v,api:j,readOnly:u}){const d=B;this[d(0x199)]=j,this[d(0x17d)]=u,this[d(0x187)]=v[d(0x187)]||Z[d(0x16a)],this[d(0x19c)]=v[d(0x19c)]||Z['DEFAULT_MESSAGE_PLACEHOLDER'],this[d(0x169)]={'title':F[d(0x16c)]||'','message':F['message']||''};}[B(0x179)](){const k=B,F=this[k(0x174)](k(0x167),[this[k(0x18c)]['baseClass'],this[k(0x18c)][k(0x16f)]]),v=this[k(0x174)]('div',[this['CSS'][k(0x178)],this[k(0x18c)][k(0x16c)]],{'contentEditable':!this[k(0x17d)],'innerHTML':this[k(0x169)][k(0x16c)]}),j=this['_make'](k(0x167),[this[k(0x18c)][k(0x178)],this[k(0x18c)]['message']],{'contentEditable':!this[k(0x17d)],'innerHTML':this['data'][k(0x16e)]});return v[k(0x191)][k(0x170)]=this['titlePlaceholder'],j[k(0x191)][k(0x170)]=this['messagePlaceholder'],F[k(0x19b)](v),F[k(0x19b)](j),F;}[B(0x17c)](F){const J=B,v=F[J(0x1a0)]('.'+this[J(0x18c)][J(0x16c)]),j=F['querySelector']('.'+this['CSS'][J(0x16e)]);return Object[J(0x186)](this[J(0x169)],{'title':v[J(0x180)],'message':j['innerHTML']});}[B(0x174)](F,v=null,j={}){const w=B,u=document[w(0x183)](F);Array[w(0x194)](v)?u[w(0x18d)][w(0x19d)](...v):v&&u[w(0x18d)][w(0x19d)](v);for(const W in j)u[W]=j[W];return u;}static get[B(0x1a2)](){return{'title':{},'message':{}};}}return Z;}));function _42Z(){const K=['data','DEFAULT_TITLE_PLACEHOLDER','[dHLPFryfNHrXTXQKEAqGgkLSjfdKgKOQzWKANJwBSfTwRBYXjSGdGKHHXgdp]','title','styles','message','wrapper','placeholder','Title','createTextNode','631220BucwXm','_make','cdx-warning','24jjXgvP','replace','input','render','style','<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2224\x22\x20height=\x2224\x22\x20fill=\x22none\x22\x20viewBox=\x220\x200\x2024\x2024\x22><rect\x20width=\x2214\x22\x20height=\x2214\x22\x20x=\x225\x22\x20y=\x225\x22\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20rx=\x224\x22/><line\x20x1=\x2212\x22\x20x2=\x2212\x22\x20y1=\x229\x22\x20y2=\x2212\x22\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-width=\x222\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M12\x2015.02V15.01\x22/></svg>','save','readOnly','split','76378BqUEot','innerHTML','[jJOghTdgcUyVfPVxPvyEOMzBeMEPSZB]','apply','createElement','vite-plugin-css-injected-by-js','6071466stlzUn','assign','titlePlaceholder','fromCharCode','return\x20(function()\x20','indexOf','toolbox','CSS','classList','.cdx-warning{position:relative}@media\x20all\x20and\x20(min-width:\x20736px){.cdx-warning{padding-left:36px}}.cdx-warning\x20[contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-warning\x20[contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-warning\x20[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-warning:before{content:\x22\x22;background-image:url(\x22data:image/svg+xml,%3Csvg\x20width=\x2724\x27\x20height=\x2724\x27\x20viewBox=\x270\x200\x2024\x2024\x27\x20fill=\x27none\x27\x20xmlns=\x27http://www.w3.org/2000/svg\x27%3E%3Crect\x20x=\x275\x27\x20y=\x275\x27\x20width=\x2714\x27\x20height=\x2714\x27\x20rx=\x274\x27\x20stroke=\x27black\x27\x20stroke-width=\x272\x27/%3E%3Cline\x20x1=\x2712\x27\x20y1=\x279\x27\x20x2=\x2712\x27\x20y2=\x2712\x27\x20stroke=\x27black\x27\x20stroke-width=\x272\x27\x20stroke-linecap=\x27round\x27/%3E%3Cpath\x20d=\x27M12\x2015.02V15.01\x27\x20stroke=\x27black\x27\x20stroke-width=\x272\x27\x20stroke-linecap=\x27round\x27/%3E%3C/svg%3E\x22);width:24px;height:24px;background-size:24px\x2024px;position:absolute;margin-top:8px;left:0}@media\x20all\x20and\x20(max-width:\x20735px){.cdx-warning:before{display:none}}.cdx-warning__message{min-height:85px}.cdx-warning__title{margin-bottom:6px}','cdx-warning__title','enableLineBreaks','dataset','function','2293528GbNtVp','isArray','exports','length','block','233530uorJZu','api','1728147hCwDZg','appendChild','messagePlaceholder','add','{}.constructor(\x22return\x20this\x22)(\x20)','248829PGwNRk','querySelector','jabouJtOgh:bTdglacnkUyVfPVxPvyEOMzBeMEPSZB','sanitize','Warning','error','div','cdx-warning__message'];_42Z=function(){return K;};return _42Z();}