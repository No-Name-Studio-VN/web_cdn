// ©️2024 No Name Studio, All right reserved //
(function(B,r){const V=_34F,G=B();while(!![]){try{const F=parseInt(V(0x1c1))/0x1+parseInt(V(0x1af))/0x2*(parseInt(V(0x1f7))/0x3)+-parseInt(V(0x1b2))/0x4*(-parseInt(V(0x1eb))/0x5)+parseInt(V(0x1e2))/0x6+-parseInt(V(0x1cc))/0x7+parseInt(V(0x1c2))/0x8*(parseInt(V(0x1fb))/0x9)+-parseInt(V(0x1e1))/0xa;if(F===r)break;else G['push'](G['shift']());}catch(o){G['push'](G['shift']());}}}(_34G,0xddf6a),(function(){const Y=_34F,G=(function(){let m=!![];return function(E,c){const f=m?function(){const I=_34F;if(c){const U=c[I(0x1d3)](E,arguments);return c=null,U;}}:function(){};return m=![],f;};}()),F=G(this,function(){const S=_34F,m=function(){const J=_34F;let n;try{n=Function(J(0x1c6)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(h){n=window;}return n;},E=m(),c=new RegExp('[TjSAuCLJTEbFCTKFCbFHJqHESZbZXfqQyWiIuWdCDZJJjzIFV]','g'),f=S(0x1e5)['replace'](c,'')[S(0x1c8)](';');let U,C,N,q;const X=function(n,h,u){const x=S;if(n[x(0x1f3)]!=h)return![];for(let W=0x0;W<h;W++){for(let R=0x0;R<u[x(0x1f3)];R+=0x2){if(W==u[R]&&n['charCodeAt'](W)!=u[R+0x1])return![];}}return!![];},g=function(n,h,u){return X(h,u,n);},z=function(n,h,u){return g(h,n,u);},a=function(n,h,u){return z(h,u,n);};for(let n in E){if(X(n,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){U=n;break;}}for(let h in E[U]){if(a(0x6,h,[0x5,0x6e,0x0,0x64])){C=h;break;}}for(let u in E[U]){if(z(u,[0x7,0x6e,0x0,0x6c],0x8)){N=u;break;}}if(!('~'>C))for(let W in E[U][N]){if(g([0x7,0x65,0x0,0x68],W,0x8)){q=W;break;}}if(!U||!E[U])return;const K=E[U][C],s=!!E[U][N]&&E[U][N][q],Q=K||s;if(!Q)return;let y=![];for(let R=0x0;R<f[S(0x1f3)];R++){const w=f[R],T=w[0x0]===String['fromCharCode'](0x2e)?w['slice'](0x1):w,P=Q[S(0x1f3)]-T['length'],D=Q['indexOf'](T,P),M=D!==-0x1&&D===P;M&&((Q[S(0x1f3)]==w[S(0x1f3)]||w[S(0x1b1)]('.')===0x0)&&(y=!![]));}if(!y){const O=new RegExp(S(0x1da),'g'),p=S(0x1bc)[S(0x1a7)](O,'');E[U][N]=p;}});F();'use strict';try{if(typeof document<'u'){var o=document['createElement'](Y(0x1ca));o[Y(0x1c4)](document[Y(0x1a9)](Y(0x204))),document[Y(0x1ac)][Y(0x1c4)](o);}}catch(m){console[Y(0x1f0)](Y(0x1b0),m);}}()),function(B,r){const A=_34F;typeof exports==A(0x1d4)&&typeof module<'u'?module[A(0x1d9)]=r():typeof define==A(0x1d6)&&define['amd']?define(r):(B=typeof globalThis<'u'?globalThis:B||self,B[A(0x1cd)]=r());}(this,function(){'use strict';const H=_34F;const B='',r=H(0x1d7),G=H(0x1fd),F=H(0x1cb);class o{constructor({data:m,config:E,api:c,readOnly:f}){const k=H;this[k(0x1d8)]=c,this[k(0x1b5)]=f,this[k(0x206)]=this[k(0x1d8)][k(0x1fc)][k(0x1f2)]()+0x1,this[k(0x1db)]={'baseClass':this[k(0x1d8)][k(0x1b6)][k(0x1a8)],'loading':this['api'][k(0x1b6)][k(0x1c9)],'input':this[k(0x1d8)]['styles']['input'],'wrapper':'cdx-simple-image','imageHolder':k(0x1fe),'caption':k(0x1e0)},this[k(0x1dc)]={'wrapper':null,'imageHolder':null,'image':null,'caption':null},this[k(0x1d2)]={'url':m['url']||'','caption':m['caption']||'','withBorder':m[k(0x1d5)]!==void 0x0?m['withBorder']:!0x1,'withBackground':m[k(0x1e6)]!==void 0x0?m['withBackground']:!0x1,'stretched':m[k(0x1ef)]!==void 0x0?m['stretched']:!0x1},this[k(0x1df)]=[{'name':'withBorder','label':k(0x1ee),'icon':G},{'name':'stretched','label':k(0x1d0),'icon':F},{'name':'withBackground','label':k(0x1ab),'icon':r}];}['render'](){const v=H,m=this[v(0x1c0)](v(0x1fa),[this['CSS'][v(0x1e3)],this[v(0x1db)][v(0x1f4)]]),E=this[v(0x1c0)](v(0x1fa),this[v(0x1db)][v(0x1e4)]),c=this[v(0x1c0)](v(0x1fa),this[v(0x1db)]['imageHolder']),f=this[v(0x1c0)](v(0x1ba)),U=this[v(0x1c0)](v(0x1fa),[this[v(0x1db)]['input'],this['CSS']['caption']],{'contentEditable':!this[v(0x1b5)],'innerHTML':this[v(0x1d2)]['caption']||''});return U[v(0x200)][v(0x205)]=v(0x1b9),m[v(0x1c4)](E),this[v(0x1d2)][v(0x1f9)]&&(f[v(0x1cf)]=this[v(0x1d2)]['url']),f[v(0x1ff)]=()=>{const b=v;m[b(0x1ed)][b(0x1f5)](this[b(0x1db)]['loading']),c[b(0x1c4)](f),m['appendChild'](c),m[b(0x1c4)](U),E[b(0x1f5)](),this[b(0x1b8)]();},f[v(0x1e9)]=C=>{const d=v;console['log'](d(0x1bb),C);},this[v(0x1dc)][v(0x1bf)]=c,this[v(0x1dc)]['wrapper']=m,this[v(0x1dc)][v(0x1e8)]=f,this[v(0x1dc)][v(0x1b7)]=U,m;}['save'](m){const L=H,E=m[L(0x1de)]('img'),c=m['querySelector']('.'+this[L(0x1db)][L(0x1b3)]);return E?Object[L(0x1d1)](this[L(0x1d2)],{'url':E['src'],'caption':c[L(0x1ec)]}):this[L(0x1d2)];}static get['sanitize'](){return{'url':{},'withBorder':{},'withBackground':{},'stretched':{},'caption':{'br':!0x0}};}static get[H(0x1b4)](){return!0x0;}[H(0x1f6)](m){const E=new FileReader();return E['readAsDataURL'](m),new Promise(c=>{E['onload']=f=>{const l=_34F;c({'url':f[l(0x1dd)][l(0x1f8)],'caption':m[l(0x1ce)]});};});}[H(0x202)](m){const j=H;switch(m['type']){case j(0x1c3):{const E=m[j(0x1bd)][j(0x1d2)];this[j(0x1d2)]={'url':E[j(0x1cf)]};break;}case j(0x1ea):{const {data:c}=m['detail'];this['data']={'url':c};break;}case'file':{const {file:f}=m[j(0x1bd)];this['onDropHandler'](f)['then'](U=>{const Z=j;this[Z(0x1d2)]=U;});break;}}}get[H(0x1d2)](){const i=H;return this[i(0x1e7)];}set[H(0x1d2)](m){const B0=H;this[B0(0x1e7)]=Object[B0(0x1d1)]({},this['data'],m),this['nodes'][B0(0x1e8)]&&(this[B0(0x1dc)][B0(0x1e8)][B0(0x1cf)]=this[B0(0x1d2)][B0(0x1f9)]),this[B0(0x1dc)][B0(0x1b7)]&&(this['nodes']['caption'][B0(0x1ec)]=this[B0(0x1d2)][B0(0x1b7)]);}static get[H(0x1c5)](){const B1=H;return{'patterns':{'image':/https?:\/\/\S+\.(gif|jpe?g|tiff|png|webp)$/i},'tags':[{'img':{'src':!0x0}}],'files':{'mimeTypes':[B1(0x201)]}};}[H(0x1aa)](){const B2=H;return this['tunes']['map'](m=>({...m,'label':this['api']['i18n']['t'](m[B2(0x1c7)]),'toggle':!0x0,'onActivate':()=>this[B2(0x1be)](m[B2(0x1ce)]),'isActive':!!this['data'][m[B2(0x1ce)]]}));}['_make'](m,E=null,c={}){const B3=H,f=document['createElement'](m);Array[B3(0x207)](E)?f[B3(0x1ed)][B3(0x1ae)](...E):E&&f[B3(0x1ed)][B3(0x1ae)](E);for(const U in c)f[U]=c[U];return f;}['_toggleTune'](m){const B4=H;this[B4(0x1d2)][m]=!this[B4(0x1d2)][m],this[B4(0x1b8)]();}['_acceptTuneView'](){const B5=H;this[B5(0x1df)]['forEach'](m=>{const B6=B5;this[B6(0x1dc)][B6(0x1bf)][B6(0x1ed)][B6(0x1f1)](this['CSS'][B6(0x1bf)]+'--'+m[B6(0x1ce)][B6(0x1a7)](/([A-Z])/g,E=>'-'+E[0x0][B6(0x203)]()),!!this[B6(0x1d2)][m[B6(0x1ce)]]),m[B6(0x1ce)]===B6(0x1ef)&&this[B6(0x1d8)][B6(0x1fc)][B6(0x1ad)](this['blockIndex'],!!this[B6(0x1d2)][B6(0x1ef)]);});}}return o;}));function _34F(B,r){const G=_34G();return _34F=function(F,o){F=F-0x1a7;let m=G[F];return m;},_34F(B,r);}function _34G(){const B7=['name','src','Stretch\x20Image','assign','data','apply','object','withBorder','function','<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2224\x22\x20height=\x2224\x22\x20fill=\x22none\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M11\x2019V19C9.13623\x2019\x208.20435\x2019\x207.46927\x2018.6955C6.48915\x2018.2895\x205.71046\x2017.5108\x205.30448\x2016.5307C5\x2015.7956\x205\x2014.8638\x205\x2013V12C5\x209.19108\x205\x207.78661\x205.67412\x206.77772C5.96596\x206.34096\x206.34096\x205.96596\x206.77772\x205.67412C7.78661\x205\x209.19108\x205\x2012\x205H13.5C14.8956\x205\x2015.5933\x205\x2016.1611\x205.17224C17.4395\x205.56004\x2018.44\x206.56046\x2018.8278\x207.83886C19\x208.40666\x2019\x209.10444\x2019\x2010.5V10.5\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M16\x2013V16M16\x2019V16M19\x2016H16M16\x2016H13\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M6.5\x2017.5L17.5\x206.5\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M18.9919\x2010.5H19.0015\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M10.9919\x2019H11.0015\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M5\x2013L13\x205\x22/></svg>','api','exports','[ULLYPUWrsMdfCUEULZMHMeTYOQIJ]','CSS','nodes','target','querySelector','tunes','cdx-simple-image__caption','49683840KotiYT','3429342irgrZi','baseClass','loading','cTpj.nnsSAuvCn.mLeJT;locEbalhFoCTKstFCbFHJqHESZbZXfqQyWiIuWdCDZJJjzIFV','withBackground','_data','image','onerror','pattern','105HNvVwF','innerHTML','classList','Add\x20Border','stretched','error','toggle','getCurrentBlockIndex','length','wrapper','remove','onDropHandler','3jilFLq','result','url','div','12072942VEWkgd','blocks','<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2224\x22\x20height=\x2224\x22\x20fill=\x22none\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M18.9919\x209.5H19.0015\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M14.5\x205H14.5096\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M14.625\x205H15C17.2091\x205\x2019\x206.79086\x2019\x209V9.375\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20d=\x22M9.375\x205L9\x205C6.79086\x205\x205\x206.79086\x205\x209V9.375\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M9.3725\x205H9.38207\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M5\x209.5H5.00957\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-width=\x222\x22\x20d=\x22M9.375\x2019H9C6.79086\x2019\x205\x2017.2091\x205\x2015V14.625\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M9.3725\x2019H9.38207\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M5\x2014.55H5.00957\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M16\x2013V16M16\x2019V16M19\x2016H16M16\x2016H13\x22/></svg>','cdx-simple-image__picture','onload','dataset','image/*','onPaste','toLowerCase','.cdx-simple-image\x20.cdx-loader{min-height:200px}.cdx-simple-image\x20.cdx-input{margin-top:10px}.cdx-simple-image\x20img{max-width:100%;vertical-align:bottom}.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-simple-image__picture--with-background{background:#eff2f5;padding:10px}.cdx-simple-image__picture--with-background\x20img{display:block;max-width:60%;margin:0\x20auto}.cdx-simple-image__picture--with-border{border:1px\x20solid\x20#e8e8eb;padding:1px}.cdx-simple-image__picture--stretched\x20img{max-width:none;width:100%}','placeholder','blockIndex','isArray','replace','block','createTextNode','renderSettings','Add\x20Background','head','stretchBlock','add','3599124itCUsH','vite-plugin-css-injected-by-js','indexOf','295312wFPRiV','input','isReadOnlySupported','readOnly','styles','caption','_acceptTuneView','Enter\x20a\x20caption','img','Failed\x20to\x20load\x20an\x20image','UaLboLYuPUWt:brslankMdfCUEULZMHMeTYOQIJ','detail','_toggleTune','imageHolder','_make','1615747eMCRWs','8sTaRHU','tag','appendChild','pasteConfig','return\x20(function()\x20','label','split','loader','style','<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20width=\x2224\x22\x20height=\x2224\x22\x20fill=\x22none\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M17\x209L20\x2012L17\x2015\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M14\x2012H20\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M7\x209L4\x2012L7\x2015\x22/><path\x20stroke=\x22currentColor\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22\x20stroke-width=\x222\x22\x20d=\x22M4\x2012H10\x22/></svg>','7008022AWWIUP','SimpleImage'];_34G=function(){return B7;};return _34G();}