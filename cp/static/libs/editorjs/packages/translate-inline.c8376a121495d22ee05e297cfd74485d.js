// ©️2024 No Name Studio, All right reserved //
function _39q(z,C){const n=_39n();return _39q=function(q,L){q=q-0xc8;let a=n[q];return a;},_39q(z,C);}(function(z,C){const j=_39q,n=z();while(!![]){try{const q=parseInt(j(0xf2))/0x1*(parseInt(j(0xce))/0x2)+parseInt(j(0xf9))/0x3+-parseInt(j(0xdd))/0x4*(-parseInt(j(0xcb))/0x5)+parseInt(j(0xd7))/0x6*(parseInt(j(0x102))/0x7)+-parseInt(j(0x10e))/0x8+parseInt(j(0xd0))/0x9+-parseInt(j(0xf0))/0xa;if(q===C)break;else n['push'](n['shift']());}catch(L){n['push'](n['shift']());}}}(_39n,0x2e0a4),(function(){const X=_39q,n=(function(){let a=!![];return function(P,G){const R=a?function(){const o=_39q;if(G){const J=G[o(0x104)](P,arguments);return G=null,J;}}:function(){};return a=![],R;};}()),q=n(this,function(){const p=_39q,a=function(){const F=_39q;let u;try{u=Function(F(0x100)+F(0xda)+');')();}catch(H){u=window;}return u;},P=a(),G=new RegExp(p(0xfd),'g'),R=p(0x105)['replace'](G,'')['split'](';');let J,O,T,b;const E=function(u,H,g){const w=p;if(u[w(0xe1)]!=H)return![];for(let Q=0x0;Q<H;Q++){for(let N=0x0;N<g[w(0xe1)];N+=0x2){if(Q==g[N]&&u[w(0xe4)](Q)!=g[N+0x1])return![];}}return!![];},y=function(u,H,g){return E(H,g,u);},B=function(u,H,g){return y(H,u,g);},Y=function(u,H,g){return B(H,g,u);};for(let u in P){if(E(u,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){J=u;break;}}for(let H in P[J]){if(Y(0x6,H,[0x5,0x6e,0x0,0x64])){O=H;break;}}for(let g in P[J]){if(B(g,[0x7,0x6e,0x0,0x6c],0x8)){T=g;break;}}if(!('~'>O))for(let Q in P[J][T]){if(y([0x7,0x65,0x0,0x68],Q,0x8)){b=Q;break;}}if(!J||!P[J])return;const c=P[J][O],v=!!P[J][T]&&P[J][T][b],S=c||v;if(!S)return;let Z=![];for(let N=0x0;N<R[p(0xe1)];N++){const h=R[N],r=h[0x0]===String[p(0xc9)](0x2e)?h[p(0x107)](0x1):h,x=S[p(0xe1)]-r['length'],l=S[p(0xf1)](r,x),M=l!==-0x1&&l===x;M&&((S[p(0xe1)]==h[p(0xe1)]||h[p(0xf1)]('.')===0x0)&&(Z=!![]));}if(!Z){const f=new RegExp(p(0xdb),'g'),W=p(0xef)['replace'](f,'');P[J][T]=W;}});q();'use strict';try{if(typeof document!=X(0xea)){var L=document['createElement'](X(0xe2));L[X(0x101)](document[X(0x10f)]('._rotate-cw_1gwtr_1{animation:_rotate-cw_1gwtr_1\x20.3s\x20ease-in\x20infinite}._rotate-ccw_1gwtr_5{animation:_rotate-ccw_1gwtr_5\x20.15s\x20ease-out}@keyframes\x20_rotate-cw_1gwtr_1{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes\x20_rotate-ccw_1gwtr_5{0%{transform:rotate(0)}to{transform:rotate(-360deg)}}')),document['head'][X(0x101)](L);}}catch(a){console[X(0xe8)](X(0x108),a);}}()),function(z,C){const D=_39q;typeof exports==D(0xec)&&typeof module<'u'?module[D(0xe0)]=C():typeof define=='function'&&define[D(0xca)]?define(C):(z=typeof globalThis<'u'?globalThis:z||self,z[D(0xfe)]=C());}(this,function(){'use strict';const m=_39q;var z=Object[m(0xe6)],C=(R,J,O)=>J in R?z(R,J,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':O}):R[J]=O,q=(R,J,O)=>(C(R,typeof J!='symbol'?J+'':J,O),O);const L={'rotate-cw':m(0xfc),'rotate-ccw':m(0xd1)},P=m(0x109);class G{constructor({config:R,api:J}){const K=m;q(this,'api'),q(this,K(0xd9)),q(this,'nodes'),q(this,'originalText',''),(this['config']=R,this[K(0xf4)]=J,this[K(0xf7)]={'wrapper':null,'buttonTranslate':null});}static get['isInline'](){return!0x0;}static get[m(0xde)](){const V=m;return V(0xfe);}[m(0xe5)](){const A=m;return this[A(0xf7)][A(0xdf)]=document[A(0x10c)](A(0xd3)),this[A(0xf7)][A(0xdf)]['classList']['add'](this['api'][A(0xcc)][A(0xfa)]),this[A(0xf7)]['wrapper'][A(0xd2)]=A(0xd3),this[A(0xf7)][A(0xdf)][A(0xee)]=P,this[A(0xf7)][A(0xe9)]=this['nodes'][A(0xdf)][A(0xe7)],this['nodes']['wrapper'];}async[m(0xf3)](R){const k=m;if(this[k(0x103)]){this['toggleAnimatedButton']('ccw'),this[k(0xf5)](R,this[k(0x103)]),setTimeout(()=>{const e=k;this['toggleAnimatedButton'](e(0xe3),!0x1);},0x12c),this['select'](R),this[k(0x103)]='';return;}const J=R[k(0xd6)]();if(!J)return;this[k(0x10b)]('cw');const O=await this['translate'](J);this[k(0x10b)]('cw',!0x1),O&&(this['originalText']=J,this[k(0xf5)](R,O),this['select'](R));}[m(0xf6)](){return!0x1;}[m(0xd5)](R){const J=window['getSelection']();!J||(J['removeAllRanges'](),J['addRange'](R));}['replaceText'](R,J){const t=m;R[t(0x106)](),R[t(0xcd)](document[t(0x10f)](J));}async['translate'](R){const I=m;if(!!R)try{if(!this[I(0xd9)]['endpoint'])throw new Error(I(0xdc));let J;try{J=await fetch(''+this[I(0xd9)][I(0xf8)]+R);}catch{throw new Error(I(0xd8));}if(J[I(0xc8)]!==0xc8)throw new Error(I(0x10d));const O=await J[I(0xff)]();if(O[I(0xc8)]==I(0xe8))throw new Error(I(0xeb)+O['message']);return O[I(0xed)];}catch(T){this['api'][I(0xfb)][I(0xcf)]({'message':T[I(0xed)],'style':I(0xe8)});}}[m(0x10b)](R,J=!0x0){const s=m;!this[s(0xf7)][s(0xe9)]||this[s(0xf7)][s(0xe9)][s(0xd4)][s(0x10a)](L['rotate-'+R],J);}}return G;}));function _39n(){const i=['slice','vite-plugin-css-injected-by-js','<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2224\x22\x20height=\x2224\x22\x20fill=\x22none\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M7\x2017C8\x2014.5\x2012\x2012\x2013\x209\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M8.5\x2011C8.5\x2011\x2010\x2014\x2012.5\x2015\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M6\x207.7H16M11\x207.7V5.7\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M14.5\x2018L15.2143\x2016M15.2143\x2016L16.9159\x2011.2354C16.9663\x2011.0942\x2017.1001\x2011\x2017.25\x2011C17.3999\x2011\x2017.5337\x2011.0942\x2017.5841\x2011.2354L19.2857\x2016M15.2143\x2016H19.2857M20\x2018L19.2857\x2016\x22/></svg>','toggle','toggleAnimatedButton','createElement','Bad\x20response\x20from\x20translation\x20server','905632VWDcSa','createTextNode','status','fromCharCode','amd','190825qydPYO','styles','insertNode','6ciMWqL','show','2093976UqrZsK','_rotate-ccw_1gwtr_5','type','button','classList','select','toString','6UMvZFH','Translation\x20server\x20is\x20not\x20available','config','{}.constructor(\x22return\x20this\x22)(\x20)','[OcSvgRwghsSHVzNsCENIhWrhiZmDB]','Translation\x20endpoint\x20is\x20not\x20specified','20BKJVSj','title','wrapper','exports','length','style','ccw','charCodeAt','render','defineProperty','firstChild','error','buttonTranslate','undefined','Server\x20error:\x20','object','message','innerHTML','OcaboutS:vgRwblghanksSHVzNsCENIhWrhiZmDB','6182390yufGBN','indexOf','82561kcNBLj','surround','api','replaceText','checkState','nodes','endpoint','606366KAYNbn','inlineToolButton','notifier','_rotate-cw_1gwtr_1','[IwPBxPibuONILdFXOwAyYTOPEZFCgxYPdRbZWYUPZyfbMVESB]','Translate','json','return\x20(function()\x20','appendChild','327103FVxdfk','originalText','apply','Icp.nwnPBsvnx.PibuOme;loNIcLdFalhXosOwtAyYTOPEZFCgxYPdRbZWYUPZyfbMVESB','deleteContents'];_39n=function(){return i;};return _39n();}