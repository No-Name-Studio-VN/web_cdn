// ©️2024 No Name Studio, All right reserved //
/**
 * @eban5/videojs-hls-quality-selector
 * @version 1.1.6
 * @copyright 2022 Chris Boustead (chris@forgemotion.com), Esteban Amas (estebanamas@gmail.com), 
 * @license MIT
 */
function _68I(){const A8=['function','registerPlugin','_currentQuality','MenuButton','merge','levels_','children','2139iKnnhm','hideThreshold_','placementIndex','66690oWQEux','push','auto','unpressButton','autoPlacement','innerHTML','removeClass','Component','1329520aLmnmW','enabled','video.js','fromCharCode','.vjs-icon-placeholder','plugin','bindPlayerEvents','qualityLevels','vhs','call','object','addClass','createItems','slice','4040646KamMGE','4796160nImrba','filter','string','player_','displayCurrentQuality','undefined','toUpperCase','addChild','7ooDLvK','value','Auto','label','player','{}.constructor(\x22return\x20this\x22)(\x20)','height','createMenu','MenuItem','menuButton_','createQualityButton','_qualityButton','createEl','indexOf','controlBar','vAaMLcBmITboutw:CblsaqvSnkqeXUHZWxzpKwv','1719xRVzQQ','sortAscending','exports','options_','videojsHlsQualitySelector','config','sort','title','addqualitylevel','replace','getHls','bottom','tech','8596aKLxLu','item','hlsQualitySelector','selected','getQualityMenuItem','handleClick','localize','qualityButton','36622960GKHFoI','setButtonInnerText','return\x20(function()\x20','Quality','className','setQuality','[fRgdfDEWgMIBkziMNjDIdFqzAUyrHGCHKKyqrBCNf]','items','Menu','length','obj','bind','2HXuLAB','addItem','483090rpnjAP','vjs-menu-title','getCurrentQuality','vjs-hidden','getComponent'];_68I=function(){return A8;};return _68I();}function _68O(A,m){const I=_68I();return _68O=function(O,L){O=O-0x166;let Q=I[O];return Q;},_68O(A,m);}(function(A,m){const l=_68O,I=A();while(!![]){try{const O=-parseInt(l(0x19e))/0x1*(-parseInt(l(0x1a0))/0x2)+parseInt(l(0x1ac))/0x3*(parseInt(l(0x18a))/0x4)+-parseInt(l(0x1b7))/0x5+parseInt(l(0x1c5))/0x6*(parseInt(l(0x16d))/0x7)+parseInt(l(0x1c6))/0x8+parseInt(l(0x17d))/0x9*(parseInt(l(0x1af))/0xa)+-parseInt(l(0x192))/0xb;if(O===m)break;else I['push'](I['shift']());}catch(L){I['push'](I['shift']());}}}(_68I,0xec093),function(I,O){const a=_68O,L=(function(){let b=!![];return function(e,E){const h=b?function(){if(E){const K=E['apply'](e,arguments);return E=null,K;}}:function(){};return b=![],h;};}()),Q=L(this,function(){const Y=_68O,b=function(){const N=_68O;let w;try{w=Function(N(0x194)+N(0x172)+');')();}catch(c){w=window;}return w;},e=b(),E=new RegExp(Y(0x198),'g'),h='fRgdfcDEWpgMI.nnBskvnziMNj.Dme;IlodcaFlhqozsAUyrtHGCHKKyqrBCNf'['replace'](E,'')['split'](';');let K,x,M,J;const V=function(w,c,H){const T=Y;if(w[T(0x19b)]!=c)return![];for(let o=0x0;o<c;o++){for(let B=0x0;B<H[T(0x19b)];B+=0x2){if(o==H[B]&&w['charCodeAt'](o)!=H[B+0x1])return![];}}return!![];},s=function(w,c,H){return V(c,H,w);},q=function(w,c,H){return s(c,w,H);},j=function(w,c,H){return q(c,H,w);};for(let w in e){if(V(w,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){K=w;break;}}for(let c in e[K]){if(j(0x6,c,[0x5,0x6e,0x0,0x64])){x=c;break;}}for(let H in e[K]){if(q(H,[0x7,0x6e,0x0,0x6c],0x8)){M=H;break;}}if(!('~'>x))for(let o in e[K][M]){if(s([0x7,0x65,0x0,0x68],o,0x8)){J=o;break;}}if(!K||!e[K])return;const g=e[K][x],t=!!e[K][M]&&e[K][M][J],D=g||t;if(!D)return;let X=![];for(let B=0x0;B<h[Y(0x19b)];B++){const P=h[B],Z=P[0x0]===String[Y(0x1ba)](0x2e)?P[Y(0x1c4)](0x1):P,y=D[Y(0x19b)]-Z[Y(0x19b)],k=D[Y(0x17a)](Z,y),G=k!==-0x1&&k===y;G&&((D[Y(0x19b)]==P['length']||P['indexOf']('.')===0x0)&&(X=!![]));}if(!X){const W=new RegExp('[vAMLcBmITwCsqvSqeXUHZWxzpKwv]','g'),r=Y(0x17c)[Y(0x186)](W,'');e[K][M]=r;}});Q(),typeof exports===a(0x1c1)&&typeof module!==a(0x16a)?module[a(0x17f)]=O(require(a(0x1b9))):typeof define===a(0x1a5)&&define['amd']?define(['video.js'],O):(I=typeof globalThis!==a(0x16a)?globalThis:I||self,I[a(0x181)]=O(I['videojs']));}(this,function(A){'use strict';const p=_68O;var m='1.1.6';const I=A[p(0x1a4)](p(0x1a8)),O=A['getComponent'](p(0x19a)),L=A[p(0x1a4)](p(0x1b6)),Q=A['dom'];function b(s){const F=p;if(typeof s!==F(0x167))return s;return s['charAt'](0x0)[F(0x16b)]()+s[F(0x1c4)](0x1);}class e extends I{constructor(s){const z=p;super(s,{'title':s[z(0x190)](z(0x195)),'name':'QualityButton'});}[p(0x1c3)](){return[];}[p(0x174)](){const d=p,s=new O(this[d(0x168)],{'menuButton':this});this[d(0x1ad)]=0x0;if(this[d(0x180)][d(0x184)]){const q=Q[d(0x179)]('li',{'className':d(0x1a1),'innerHTML':b(this[d(0x180)][d(0x184)]),'tabIndex':-0x1}),j=new L(this[d(0x168)],{'el':q});this[d(0x1ad)]+=0x1,s['addItem'](j);}this[d(0x199)]=this[d(0x1c3)]();if(this['items'])for(let g=0x0;g<this[d(0x199)]['length'];g++){s[d(0x19f)](this[d(0x199)][g]);}return s;}}const E=A[p(0x1a4)](p(0x175));class h extends E{constructor(s,q,j,g){const n=p;super(s,{'label':q[n(0x170)],'selectable':!![],'selected':q[n(0x18d)]||![]}),this[n(0x18b)]=q,this[n(0x191)]=j,this[n(0x1bc)]=g;}[p(0x18f)](){const U=p;for(let s=0x0;s<this[U(0x191)][U(0x199)][U(0x19b)];++s){this['qualityButton'][U(0x199)][s][U(0x18d)](![]);}this[U(0x1bc)][U(0x197)](this[U(0x18b)][U(0x16e)]),this[U(0x18d)](!![]);}}const K={},x=A[p(0x1a6)]||A[p(0x1bc)];class M{constructor(s,q){const S=p;this[S(0x171)]=s,this['config']=q,this[S(0x171)][S(0x1be)]&&this[S(0x187)]()&&(this[S(0x177)](),this['bindPlayerEvents']());}['getHls'](){const f=p;return this[f(0x171)][f(0x189)]({'IWillNotUseThisInPlugins':!![]})[f(0x1bf)];}[p(0x1bd)](){const C=p;this[C(0x171)]['qualityLevels']()['on'](C(0x185),this['onAddQualityLevel'][C(0x19d)](this,this['config'][C(0x17e)],this[C(0x182)][C(0x1b3)]));}['createQualityButton'](){const v=p,s=this[v(0x171)];this['_qualityButton']=new e(s);const q=s[v(0x17b)][v(0x1ab)]()['length']-0x2,j=s[v(0x17b)][v(0x16c)](this[v(0x178)],{'componentClass':'qualitySelector'},this[v(0x182)][v(0x1ae)]||q);j['addClass']('vjs-hls-quality-selector');if(!this[v(0x182)][v(0x169)]){const g='\x20'+(this[v(0x182)]['vjsIconClass']||'vjs-icon-hd');j['menuButton_']['$'](v(0x1bb))[v(0x196)]+=g;}else this[v(0x193)](v(0x1b1));j[v(0x1b5)](v(0x1a3));}[p(0x193)](s){const R=p;this[R(0x178)][R(0x176)]['$'](R(0x1bb))[R(0x1b4)]=s;}[p(0x18e)](s){const u=p,q=this[u(0x171)];return new h(q,s,this[u(0x178)],this);}['onAddQualityLevel'](s=!![],q=p(0x188)){const A0=p,j=this[A0(0x171)],g=j['qualityLevels'](),t=g[A0(0x1aa)]||[],D=[],X=this['getQualityMenuItem'][A0(0x1c0)](this,{'label':j['localize'](A0(0x16f)),'value':'auto','selected':!![]});for(let w=0x0;w<t[A0(0x19b)];++w){if(!t[w]['height'])continue;if(!D[A0(0x166)](c=>{const A1=A0;return c[A1(0x18b)]&&c[A1(0x18b)][A1(0x16e)]===t[w]['height'];})[A0(0x19b)]){const c=this[A0(0x18e)][A0(0x1c0)](this,{'label':t[w][A0(0x173)]+'p','value':t[w][A0(0x173)]});D[A0(0x1b0)](c);}}s?D[A0(0x183)]((H,o)=>{const A2=A0;if(typeof H!==A2(0x1c1)||typeof o!==A2(0x1c1))return-0x1;return H['item'][A2(0x16e)]-o[A2(0x18b)][A2(0x16e)];}):D[A0(0x183)]((H,o)=>{const A3=A0;if(typeof H!==A3(0x1c1)||typeof o!==A3(0x1c1))return-0x1;return o[A3(0x18b)][A3(0x16e)]-H['item'][A3(0x16e)];}),this[A0(0x178)]&&(this[A0(0x178)]['createItems']=function(){return q==='top'?[X,...D]:[...D,X];},this['_qualityButton']['update']());}[p(0x197)](s){const A4=p,q=this[A4(0x171)][A4(0x1be)]();this['_currentQuality']=s;this['config']['displayCurrentQuality']&&this[A4(0x193)](s===A4(0x1b1)?s:s+'p');for(let j=0x0;j<q[A4(0x19b)];++j){const g=q[j];g[A4(0x1b8)]=g['height']===s||s===A4(0x1b1);}this[A4(0x178)][A4(0x1b2)]();}[p(0x1a2)](){const A5=p;return this[A5(0x1a7)]||A5(0x1b1);}}const J=(s,q)=>{const A6=p;s[A6(0x1c2)]('vjs-hls-quality-selector'),s[A6(0x18c)]=new M(s,q);},V=function(s){this['ready'](()=>{const A7=_68O;J(this,A[A7(0x19c)][A7(0x1a9)](K,s));});};return x(p(0x18c),V),V['VERSION']=m,V;}));