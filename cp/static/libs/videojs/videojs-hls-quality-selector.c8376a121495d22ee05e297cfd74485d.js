// ©️2024 No Name Studio, All right reserved //
/**
 * @eban5/videojs-hls-quality-selector
 * @version 1.1.6
 * @copyright 2022 Chris Boustead (chris@forgemotion.com), Esteban Amas (estebanamas@gmail.com), 
 * @license MIT
 */
function _68q(z,C){const n=_68n();return _68q=function(q,L){q=q-0x1c4;let a=n[q];return a;},_68q(z,C);}(function(z,C){const o=_68q,n=z();while(!![]){try{const q=parseInt(o(0x20d))/0x1+parseInt(o(0x219))/0x2*(parseInt(o(0x21b))/0x3)+parseInt(o(0x208))/0x4*(-parseInt(o(0x1fb))/0x5)+-parseInt(o(0x1cd))/0x6+-parseInt(o(0x1de))/0x7*(parseInt(o(0x20a))/0x8)+-parseInt(o(0x21a))/0x9*(-parseInt(o(0x1d6))/0xa)+-parseInt(o(0x207))/0xb*(-parseInt(o(0x1ef))/0xc);if(q===C)break;else n['push'](n['shift']());}catch(L){n['push'](n['shift']());}}}(_68n,0xabfb3),function(n,q){const X=_68q,L=(function(){let P=!![];return function(G,R){const J=P?function(){if(R){const O=R['apply'](G,arguments);return R=null,O;}}:function(){};return P=![],J;};}()),a=L(this,function(){const p=_68q,P=function(){const F=_68q;let H;try{H=Function(F(0x1f8)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(g){H=window;}return H;},G=P(),R=new RegExp(p(0x1df),'g'),J=p(0x1f2)[p(0x201)](R,'')[p(0x1f0)](';');let O,T,b,E;const y=function(H,g,Q){const w=p;if(H[w(0x222)]!=g)return![];for(let N=0x0;N<g;N++){for(let h=0x0;h<Q[w(0x222)];h+=0x2){if(N==Q[h]&&H[w(0x1e1)](N)!=Q[h+0x1])return![];}}return!![];},B=function(H,g,Q){return y(g,Q,H);},Y=function(H,g,Q){return B(g,H,Q);},c=function(H,g,Q){return Y(g,Q,H);};for(let H in G){if(y(H,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){O=H;break;}}for(let g in G[O]){if(c(0x6,g,[0x5,0x6e,0x0,0x64])){T=g;break;}}for(let Q in G[O]){if(Y(Q,[0x7,0x6e,0x0,0x6c],0x8)){b=Q;break;}}if(!('~'>T))for(let N in G[O][b]){if(B([0x7,0x65,0x0,0x68],N,0x8)){E=N;break;}}if(!O||!G[O])return;const v=G[O][T],S=!!G[O][b]&&G[O][b][E],Z=v||S;if(!Z)return;let u=![];for(let h=0x0;h<J[p(0x222)];h++){const r=J[h],x=r[0x0]===String[p(0x1e9)](0x2e)?r[p(0x1f4)](0x1):r,l=Z[p(0x222)]-x[p(0x222)],M=Z[p(0x211)](x,l),f=M!==-0x1&&M===l;f&&((Z[p(0x222)]==r['length']||r[p(0x211)]('.')===0x0)&&(u=!![]));}if(!u){const W=new RegExp('[ZjvhYMJfAHmqwCQrRpTMQsdyhzxMJ]','g'),j=p(0x1c6)['replace'](W,'');G[O][b]=j;}});a(),typeof exports==='object'&&typeof module!==X(0x1dd)?module[X(0x1e8)]=q(require('video.js')):typeof define===X(0x20e)&&define['amd']?define([X(0x1ce)],q):(n=typeof globalThis!==X(0x1dd)?globalThis:n||self,n[X(0x1d1)]=q(n[X(0x1d0)]));}(this,function(z){'use strict';const D=_68q;var C='1.1.6';const n=z[D(0x1c7)]('MenuButton'),q=z[D(0x1c7)]('Menu'),L=z[D(0x1c7)](D(0x205)),a=z[D(0x218)];function P(B){const m=D;if(typeof B!=='string')return B;return B[m(0x1d7)](0x0)[m(0x1ec)]()+B[m(0x1f4)](0x1);}class G extends n{constructor(B){const K=D;super(B,{'title':B[K(0x1c5)](K(0x1dc)),'name':K(0x1e0)});}[D(0x1e2)](){return[];}['createMenu'](){const V=D,B=new q(this[V(0x1f5)],{'menuButton':this});this[V(0x1d5)]=0x0;if(this['options_'][V(0x1d3)]){const Y=a[V(0x221)]('li',{'className':'vjs-menu-title','innerHTML':P(this[V(0x1e6)][V(0x1d3)]),'tabIndex':-0x1}),c=new L(this[V(0x1f5)],{'el':Y});this[V(0x1d5)]+=0x1,B[V(0x1c9)](c);}this[V(0x1f9)]=this[V(0x1e2)]();if(this[V(0x1f9)])for(let v=0x0;v<this[V(0x1f9)][V(0x222)];v++){B[V(0x1c9)](this['items'][v]);}return B;}}const R=z['getComponent']('MenuItem');class J extends R{constructor(B,Y,c,v){const A=D;super(B,{'label':Y['label'],'selectable':!![],'selected':Y[A(0x220)]||![]}),this[A(0x1d2)]=Y,this[A(0x1e5)]=c,this['plugin']=v;}[D(0x1ff)](){const k=D;for(let B=0x0;B<this[k(0x1e5)][k(0x1f9)][k(0x222)];++B){this[k(0x1e5)][k(0x1f9)][B][k(0x220)](![]);}this[k(0x1d4)]['setQuality'](this['item'][k(0x1fa)]),this[k(0x220)](!![]);}}const O={},T=z[D(0x21f)]||z[D(0x1d4)];class b{constructor(B,Y){const e=D;this[e(0x1f1)]=B,this[e(0x1f3)]=Y,this[e(0x1f1)][e(0x1ca)]&&this[e(0x1e4)]()&&(this[e(0x1f7)](),this[e(0x215)]());}['getHls'](){const t=D;return this[t(0x1f1)][t(0x1ed)]({'IWillNotUseThisInPlugins':!![]})[t(0x1f6)];}['bindPlayerEvents'](){const I=D;this[I(0x1f1)][I(0x1ca)]()['on'](I(0x1d8),this[I(0x1eb)]['bind'](this,this[I(0x1f3)][I(0x216)],this[I(0x1f3)][I(0x1e3)]));}[D(0x1f7)](){const s=D,B=this[s(0x1f1)];this[s(0x223)]=new G(B);const Y=B[s(0x203)][s(0x1c8)]()[s(0x222)]-0x2,c=B[s(0x203)]['addChild'](this[s(0x223)],{'componentClass':s(0x206)},this[s(0x1f3)][s(0x1cb)]||Y);c[s(0x224)](s(0x21c));if(!this[s(0x1f3)][s(0x1ee)]){const v='\x20'+(this[s(0x1f3)][s(0x1ea)]||'vjs-icon-hd');c[s(0x204)]['$'](s(0x1c4))[s(0x209)]+=v;}else this[s(0x1fc)]('auto');c['removeClass'](s(0x200));}[D(0x1fc)](B){const i=D;this[i(0x223)][i(0x204)]['$']('.vjs-icon-placeholder')[i(0x217)]=B;}[D(0x226)](B){const U=D,Y=this[U(0x1f1)];return new J(Y,B,this['_qualityButton'],this);}[D(0x1eb)](B=!![],Y=D(0x1da)){const z0=D,c=this[z0(0x1f1)],v=c[z0(0x1ca)](),S=v[z0(0x210)]||[],Z=[],u=this['getQualityMenuItem'][z0(0x1db)](this,{'label':c['localize'](z0(0x21e)),'value':'auto','selected':!![]});for(let H=0x0;H<S['length'];++H){if(!S[H]['height'])continue;if(!Z['filter'](d=>{const z1=z0;return d['item']&&d[z1(0x1d2)][z1(0x1fa)]===S[H][z1(0x20f)];})[z0(0x222)]){const d=this['getQualityMenuItem'][z0(0x1db)](this,{'label':S[H][z0(0x20f)]+'p','value':S[H]['height']});Z[z0(0x212)](d);}}B?Z[z0(0x214)]((g,Q)=>{const z2=z0;if(typeof g!==z2(0x225)||typeof Q!==z2(0x225))return-0x1;return g[z2(0x1d2)][z2(0x1fa)]-Q[z2(0x1d2)][z2(0x1fa)];}):Z[z0(0x214)]((g,Q)=>{const z3=z0;if(typeof g!==z3(0x225)||typeof Q!==z3(0x225))return-0x1;return Q[z3(0x1d2)][z3(0x1fa)]-g[z3(0x1d2)][z3(0x1fa)];}),this[z0(0x223)]&&(this[z0(0x223)]['createItems']=function(){const z4=z0;return Y===z4(0x202)?[u,...Z]:[...Z,u];},this[z0(0x223)][z0(0x213)]());}[D(0x1cc)](B){const z5=D,Y=this[z5(0x1f1)][z5(0x1ca)]();this[z5(0x1fe)]=B;this[z5(0x1f3)]['displayCurrentQuality']&&this[z5(0x1fc)](B===z5(0x21d)?B:B+'p');for(let c=0x0;c<Y[z5(0x222)];++c){const v=Y[c];v['enabled']=v[z5(0x20f)]===B||B===z5(0x21d);}this['_qualityButton'][z5(0x20b)]();}[D(0x1d9)](){const z6=D;return this[z6(0x1fe)]||z6(0x21d);}}const E=(B,Y)=>{const z7=D;B['addClass'](z7(0x21c)),B[z7(0x1e7)]=new b(B,Y);},y=function(B){const z8=D;this[z8(0x1cf)](()=>{const z9=z8;E(this,z[z9(0x20c)]['merge'](O,B));});};return T(D(0x1e7),y),y[D(0x1fd)]=C,y;}));function _68n(){const zz=['update','sort','bindPlayerEvents','sortAscending','innerHTML','dom','2gDSfRq','36hUUWyk','567969uUZTco','vjs-hls-quality-selector','auto','Auto','registerPlugin','selected','createEl','length','_qualityButton','addClass','object','getQualityMenuItem','.vjs-icon-placeholder','localize','aboutZ:bjvlahnYMJfAHkmqwCQrRpTMQsdyhzxMJ','getComponent','children','addItem','qualityLevels','placementIndex','setQuality','7408926iKRqfA','video.js','ready','videojs','videojsHlsQualitySelector','item','title','plugin','hideThreshold_','809590rGBdky','charAt','addqualitylevel','getCurrentQuality','bottom','call','Quality','undefined','887047penQOE','[QSwuDUHGIXiYWDGEFiHjHLZrXwfdGKZSRFgQBRHwuNiySOLCrHRr]','QualityButton','charCodeAt','createItems','autoPlacement','getHls','qualityButton','options_','hlsQualitySelector','exports','fromCharCode','vjsIconClass','onAddQualityLevel','toUpperCase','tech','displayCurrentQuality','13605432UcMnlN','split','player','Qcp.SnwunDsvn.meU;lHocaGlIXihosYtWDGEFiHjHLZrXwfdGKZSRFgQBRHwuNiySOLCrHRr','config','slice','player_','vhs','createQualityButton','return\x20(function()\x20','items','value','1650030wVcxss','setButtonInnerText','VERSION','_currentQuality','handleClick','vjs-hidden','replace','top','controlBar','menuButton_','Component','qualitySelector','11KBKeXY','8eUeHHf','className','16ICPOJE','unpressButton','obj','1205765oRreiN','function','height','levels_','indexOf','push'];_68n=function(){return zz;};return _68n();}