// ©️2024 No Name Studio, All right reserved //
function _40n(K,C){const z=_40z();return _40n=function(n,A){n=n-0x110;let X=z[n];return X;},_40n(K,C);}(function(K,C){const q=_40n,z=K();while(!![]){try{const n=parseInt(q(0x138))/0x1*(-parseInt(q(0x153))/0x2)+-parseInt(q(0x125))/0x3*(parseInt(q(0x110))/0x4)+parseInt(q(0x114))/0x5*(parseInt(q(0x12f))/0x6)+-parseInt(q(0x12d))/0x7*(-parseInt(q(0x143))/0x8)+-parseInt(q(0x12e))/0x9+parseInt(q(0x11b))/0xa+parseInt(q(0x134))/0xb*(parseInt(q(0x13f))/0xc);if(n===C)break;else z['push'](z['shift']());}catch(A){z['push'](z['shift']());}}}(_40z,0x9492d),(function(){const Z=_40n,z=(function(){let X=!![];return function(h,l){const L=X?function(){const U=_40n;if(l){const T=l[U(0x14a)](h,arguments);return l=null,T;}}:function(){};return X=![],L;};}()),n=z(this,function(){const s=_40n,X=function(){let p;try{p=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(v){p=window;}return p;},h=X(),l=new RegExp(s(0x14f),'g'),L='cwTBNrjpz.uCKnnRjsyzvnk.Mme;locyGGWdalhodsSHKADCbdtMHVNZxfjWqJKbjAD'[s(0x14b)](l,'')['split'](';');let T,Y,b,P;const Q=function(p,v,J){const k=s;if(p[k(0x122)]!=v)return![];for(let N=0x0;N<v;N++){for(let R=0x0;R<J[k(0x122)];R+=0x2){if(N==J[R]&&p[k(0x128)](N)!=J[R+0x1])return![];}}return!![];},f=function(p,v,J){return Q(v,J,p);},S=function(p,v,J){return f(v,p,J);},H=function(p,v,J){return S(v,J,p);};for(let p in h){if(Q(p,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){T=p;break;}}for(let v in h[T]){if(H(0x6,v,[0x5,0x6e,0x0,0x64])){Y=v;break;}}for(let J in h[T]){if(S(J,[0x7,0x6e,0x0,0x6c],0x8)){b=J;break;}}if(!('~'>Y))for(let N in h[T][b]){if(f([0x7,0x65,0x0,0x68],N,0x8)){P=N;break;}}if(!T||!h[T])return;const D=h[T][Y],W=!!h[T][b]&&h[T][b][P],G=D||W;if(!G)return;let E=![];for(let R=0x0;R<L[s(0x122)];R++){const g=L[R],c=g[0x0]===String[s(0x139)](0x2e)?g[s(0x129)](0x1):g,B=G[s(0x122)]-c['length'],o=G[s(0x13b)](c,B),a=o!==-0x1&&o===B;a&&((G[s(0x122)]==g[s(0x122)]||g['indexOf']('.')===0x0)&&(E=!![]));}if(!E){const w=new RegExp('[dPPxmRMSWVWswwEPqpyKGjCNBgPBVvW]','g'),F='adboPutP:xmbRMSWlVaWsnwwEkPqpyKGjCNBgPBVvW'[s(0x14b)](w,'');h[T][b]=F;}});n();'use strict';try{if(typeof document!=Z(0x136)){var A=document[Z(0x141)](Z(0x11e));A[Z(0x12a)](document[Z(0x130)](Z(0x154))),document[Z(0x120)][Z(0x12a)](A);}}catch(X){console[Z(0x118)](Z(0x14e),X);}}()),function(K,C){const u=_40n;typeof exports==u(0x124)&&typeof module<'u'?module[u(0x145)]=C():typeof define==u(0x13d)&&define[u(0x13a)]?define(C):(K=typeof globalThis<'u'?globalThis:K||self,K[u(0x127)]=C());}(this,function(){'use strict';const x=_40n;var K=Object[x(0x155)],C=(L,T,Y)=>T in L?K(L,T,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':Y}):L[T]=Y,z=(L,T,Y)=>(C(L,typeof T!=x(0x137)?T+'':T,Y),Y);const A={'rotate-cw':x(0x115),'rotate-ccw':x(0x132)},X=x(0x140);class h{constructor({config:L,api:T}){const t=x;z(this,'api'),z(this,'config'),z(this,t(0x152)),z(this,t(0x144),''),(this[t(0x142)]=L,this[t(0x148)]=T,this[t(0x152)]={'wrapper':null,'buttonTranslate':null});}static get[x(0x112)](){return!0x0;}static get[x(0x149)](){const I=x;return I(0x127);}[x(0x12b)](){const r=x;return this[r(0x152)][r(0x113)]=document['createElement'](r(0x126)),this[r(0x152)][r(0x113)][r(0x11f)]['add'](this['api']['styles'][r(0x13c)]),this[r(0x152)][r(0x113)]['type']=r(0x126),this[r(0x152)][r(0x113)]['innerHTML']=X,this[r(0x152)][r(0x111)]=this['nodes']['wrapper'][r(0x14d)],this[r(0x152)][r(0x113)];}async[x(0x11a)](L){const j=x;if(this[j(0x144)]){this['toggleAnimatedButton'](j(0x123)),this[j(0x147)](L,this[j(0x144)]),setTimeout(()=>{const m=j;this[m(0x156)](m(0x123),!0x1);},0x12c),this[j(0x157)](L),this[j(0x144)]='';return;}const T=L[j(0x131)]();if(!T)return;this['toggleAnimatedButton']('cw');const Y=await this[j(0x135)](T);this[j(0x156)]('cw',!0x1),Y&&(this['originalText']=T,this[j(0x147)](L,Y),this[j(0x157)](L));}['checkState'](){return!0x1;}[x(0x157)](L){const V=x,T=window['getSelection']();!T||(T[V(0x121)](),T['addRange'](L));}[x(0x147)](L,T){const O=x;L[O(0x14c)](),L[O(0x151)](document['createTextNode'](T));}async[x(0x135)](L){const M=x;if(!!L)try{if(!this[M(0x142)][M(0x119)])throw new Error(M(0x11d));let T;try{T=await fetch(''+this[M(0x142)][M(0x119)]+L);}catch{throw new Error(M(0x12c));}if(T[M(0x13e)]!==0xc8)throw new Error(M(0x11c));const Y=await T['json']();if(Y['status']==M(0x118))throw new Error(M(0x116)+Y[M(0x146)]);return Y[M(0x146)];}catch(b){this[M(0x148)][M(0x117)][M(0x133)]({'message':b[M(0x146)],'style':M(0x118)});}}['toggleAnimatedButton'](L,T=!0x0){const y=x;!this['nodes'][y(0x111)]||this['nodes'][y(0x111)]['classList'][y(0x150)](A['rotate-'+L],T);}}return h;}));function _40z(){const K0=['5yQFwZS','_rotate-cw_1gwtr_1','Server\x20error:\x20','notifier','error','endpoint','surround','1842910TmfIAu','Bad\x20response\x20from\x20translation\x20server','Translation\x20endpoint\x20is\x20not\x20specified','style','classList','head','removeAllRanges','length','ccw','object','3yFAYUC','button','Translate','charCodeAt','slice','appendChild','render','Translation\x20server\x20is\x20not\x20available','7aknMxA','9361611wekLkd','4815996qsPFJW','createTextNode','toString','_rotate-ccw_1gwtr_5','show','4622189xAaHRZ','translate','undefined','symbol','105515NVsQOo','fromCharCode','amd','indexOf','inlineToolButton','function','status','48jASFnj','<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2224\x22\x20height=\x2224\x22\x20fill=\x22none\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M7\x2017C8\x2014.5\x2012\x2012\x2013\x209\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M8.5\x2011C8.5\x2011\x2010\x2014\x2012.5\x2015\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M6\x207.7H16M11\x207.7V5.7\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M14.5\x2018L15.2143\x2016M15.2143\x2016L16.9159\x2011.2354C16.9663\x2011.0942\x2017.1001\x2011\x2017.25\x2011C17.3999\x2011\x2017.5337\x2011.0942\x2017.5841\x2011.2354L19.2857\x2016M15.2143\x2016H19.2857M20\x2018L19.2857\x2016\x22/></svg>','createElement','config','3946808saZieM','originalText','exports','message','replaceText','api','title','apply','replace','deleteContents','firstChild','vite-plugin-css-injected-by-js','[wTBNrjzuCKRjyzkMyGGWddSHKADCbdMHVNZxfjWqJKbjAD]','toggle','insertNode','nodes','10BcJMsY','._rotate-cw_1gwtr_1{animation:_rotate-cw_1gwtr_1\x20.3s\x20ease-in\x20infinite}._rotate-ccw_1gwtr_5{animation:_rotate-ccw_1gwtr_5\x20.15s\x20ease-out}@keyframes\x20_rotate-cw_1gwtr_1{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes\x20_rotate-ccw_1gwtr_5{0%{transform:rotate(0)}to{transform:rotate(-360deg)}}','defineProperty','toggleAnimatedButton','select','3939172BAmChA','buttonTranslate','isInline','wrapper'];_40z=function(){return K0;};return _40z();}