// ©️2024 No Name Studio, All right reserved //
(function(U,i){const Q=_39P,X=U();while(!![]){try{const P=parseInt(Q(0x18a))/0x1+parseInt(Q(0x189))/0x2*(-parseInt(Q(0x16c))/0x3)+-parseInt(Q(0x14f))/0x4*(parseInt(Q(0x172))/0x5)+-parseInt(Q(0x16d))/0x6*(-parseInt(Q(0x18e))/0x7)+-parseInt(Q(0x178))/0x8+parseInt(Q(0x17b))/0x9*(parseInt(Q(0x15c))/0xa)+parseInt(Q(0x162))/0xb;if(P===i)break;else X['push'](X['shift']());}catch(p){X['push'](X['shift']());}}}(_39X,0x26784),(function(){'use strict';const K=_39P;try{if(typeof document!=K(0x163)){var U=document['createElement']('style');U[K(0x16a)](document['createTextNode'](K(0x164))),document[K(0x15f)][K(0x16a)](U);}}catch(i){console['error'](K(0x14e),i);}}()),function(X,P){const y=_39P,p=(function(){let h=!![];return function(j,H){const S=h?function(){const N=_39P;if(H){const V=H[N(0x191)](j,arguments);return H=null,V;}}:function(){};return h=![],S;};}()),D=p(this,function(){const a=_39P,h=function(){const F=_39P;let m;try{m=Function(F(0x182)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(E){m=window;}return m;},j=h(),H=new RegExp(a(0x161),'g'),S=a(0x175)[a(0x18d)](H,'')[a(0x185)](';');let V,g,G,T;const x=function(m,E,n){const O=a;if(m[O(0x167)]!=E)return![];for(let B=0x0;B<E;B++){for(let b=0x0;b<n[O(0x167)];b+=0x2){if(B==n[b]&&m[O(0x17c)](B)!=n[b+0x1])return![];}}return!![];},Y=function(m,E,n){return x(E,n,m);},J=function(m,E,n){return Y(E,m,n);},o=function(m,E,n){return J(E,n,m);};for(let m in j){if(x(m,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){V=m;break;}}for(let E in j[V]){if(o(0x6,E,[0x5,0x6e,0x0,0x64])){g=E;break;}}for(let n in j[V]){if(J(n,[0x7,0x6e,0x0,0x6c],0x8)){G=n;break;}}if(!('~'>g))for(let B in j[V][G]){if(Y([0x7,0x65,0x0,0x68],B,0x8)){T=B;break;}}if(!V||!j[V])return;const M=j[V][g],z=!!j[V][G]&&j[V][G][T],I=M||z;if(!I)return;let k=![];for(let b=0x0;b<S[a(0x167)];b++){const Z=S[b],c=Z[0x0]===String['fromCharCode'](0x2e)?Z[a(0x155)](0x1):Z,q=I[a(0x167)]-c[a(0x167)],v=I[a(0x15e)](c,q),t=v!==-0x1&&v===q;t&&((I[a(0x167)]==Z[a(0x167)]||Z[a(0x15e)]('.')===0x0)&&(k=!![]));}if(!k){const f=new RegExp(a(0x18b),'g'),R=a(0x17e)[a(0x18d)](f,'');j[V][G]=R;}});D(),typeof exports==y(0x184)&&typeof module<'u'?module[y(0x154)]=P():typeof define==y(0x153)&&define[y(0x17a)]?define(P):(X=typeof globalThis<'u'?globalThis:X||self,X[y(0x17d)]=P());}(this,function(){'use strict';const u=_39P;var U=Object['defineProperty'],X=(j,H,S)=>H in j?U(j,H,{'enumerable':!0x0,'configurable':!0x0,'writable':!0x0,'value':S}):j[H]=S,P=(j,H,S)=>(X(j,typeof H!=u(0x152)?H+'':H,S),S);const p={'rotate-cw':'_rotate-cw_1gwtr_1','rotate-ccw':'_rotate-ccw_1gwtr_5'},D=u(0x166);class h{constructor({config:j,api:H}){const C=u;P(this,C(0x14b)),P(this,C(0x15b)),P(this,C(0x160)),P(this,C(0x158),''),(this[C(0x15b)]=j,this[C(0x14b)]=H,this[C(0x160)]={'wrapper':null,'buttonTranslate':null});}static get[u(0x170)](){return!0x0;}static get['title'](){return'Translate';}[u(0x187)](){const L=u;return this['nodes'][L(0x173)]=document[L(0x179)](L(0x169)),this[L(0x160)][L(0x173)][L(0x16f)][L(0x186)](this[L(0x14b)][L(0x181)][L(0x190)]),this[L(0x160)]['wrapper'][L(0x193)]=L(0x169),this[L(0x160)][L(0x173)]['innerHTML']=D,this[L(0x160)][L(0x180)]=this[L(0x160)][L(0x173)][L(0x174)],this[L(0x160)][L(0x173)];}async[u(0x14c)](j){const r=u;if(this[r(0x158)]){this[r(0x177)](r(0x15a)),this[r(0x188)](j,this[r(0x158)]),setTimeout(()=>{const l=r;this[l(0x177)](l(0x15a),!0x1);},0x12c),this[r(0x18f)](j),this[r(0x158)]='';return;}const H=j[r(0x183)]();if(!H)return;this[r(0x177)]('cw');const S=await this[r(0x16b)](H);this[r(0x177)]('cw',!0x1),S&&(this[r(0x158)]=H,this['replaceText'](j,S),this[r(0x18f)](j));}['checkState'](){return!0x1;}[u(0x18f)](j){const e=u,H=window[e(0x18c)]();!H||(H[e(0x176)](),H[e(0x156)](j));}[u(0x188)](j,H){const w=u;j[w(0x168)](),j['insertNode'](document[w(0x15d)](H));}async['translate'](j){const A=u;if(!!j)try{if(!this['config'][A(0x171)])throw new Error(A(0x165));let H;try{H=await fetch(''+this['config'][A(0x171)]+j);}catch{throw new Error(A(0x150));}if(H[A(0x14d)]!==0xc8)throw new Error(A(0x157));const S=await H['json']();if(S['status']==A(0x151))throw new Error(A(0x16e)+S['message']);return S[A(0x159)];}catch(V){this[A(0x14b)]['notifier'][A(0x17f)]({'message':V[A(0x159)],'style':A(0x151)});}}[u(0x177)](j,H=!0x0){const W=u;!this[W(0x160)][W(0x180)]||this[W(0x160)][W(0x180)][W(0x16f)][W(0x192)](p['rotate-'+j],H);}}return h;}));function _39P(U,i){const X=_39X();return _39P=function(P,p){P=P-0x14b;let D=X[P];return D;},_39P(U,i);}function _39X(){const U0=['isInline','endpoint','245cQbooq','wrapper','firstChild','cVCpHbPk.nnsvn.meQ;loLcFRfalhostFCKGSNRUdPABfMUxDHXzEwwZUTuxOwddkHCPHrjQ','removeAllRanges','toggleAnimatedButton','761656tEyGkT','createElement','amd','63hBlvjL','charCodeAt','Translate','CabVVEDout:bpqlankywDEWUNwzfOSESzCDYCj','show','buttonTranslate','styles','return\x20(function()\x20','toString','object','split','add','render','replaceText','10vebirf','472kADtnk','[CVVEDpqywDEWUNwzfOSESzCDYCj]','getSelection','replace','17696LApEDm','select','inlineToolButton','apply','toggle','type','api','surround','status','vite-plugin-css-injected-by-js','17852gNWFPH','Translation\x20server\x20is\x20not\x20available','error','symbol','function','exports','slice','addRange','Bad\x20response\x20from\x20translation\x20server','originalText','message','ccw','config','435970mQYwRx','createTextNode','indexOf','head','nodes','[VCHbPkQLFRfFCKGSNRUdPABfMUxDHXzEwwZUTuxOwddkHCPHrjQ]','2883210DtnnSn','undefined','._rotate-cw_1gwtr_1{animation:_rotate-cw_1gwtr_1\x20.3s\x20ease-in\x20infinite}._rotate-ccw_1gwtr_5{animation:_rotate-ccw_1gwtr_5\x20.15s\x20ease-out}@keyframes\x20_rotate-cw_1gwtr_1{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes\x20_rotate-ccw_1gwtr_5{0%{transform:rotate(0)}to{transform:rotate(-360deg)}}','Translation\x20endpoint\x20is\x20not\x20specified','<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2224\x22\x20height=\x2224\x22\x20fill=\x22none\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M7\x2017C8\x2014.5\x2012\x2012\x2013\x209\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M8.5\x2011C8.5\x2011\x2010\x2014\x2012.5\x2015\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M6\x207.7H16M11\x207.7V5.7\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M14.5\x2018L15.2143\x2016M15.2143\x2016L16.9159\x2011.2354C16.9663\x2011.0942\x2017.1001\x2011\x2017.25\x2011C17.3999\x2011\x2017.5337\x2011.0942\x2017.5841\x2011.2354L19.2857\x2016M15.2143\x2016H19.2857M20\x2018L19.2857\x2016\x22/></svg>','length','deleteContents','button','appendChild','translate','65361JnVVld','30RoroXu','Server\x20error:\x20','classList'];_39X=function(){return U0;};return _39X();}