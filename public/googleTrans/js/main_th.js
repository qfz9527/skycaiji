(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var d=this||self;function e(a,v){a=a.split(".");var b=d;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===v?b[c]&&b[c]!==Object.prototype[c]?b=b[c]:b=b[c]={}:b[c]=v};var f={0:"\u0e41\u0e1b\u0e25",1:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01",2:"\u0e1b\u0e34\u0e14",3:function(a){return"Google \u0e44\u0e14\u0e49\u0e41\u0e1b\u0e25\u0e2b\u0e19\u0e49\u0e32\u0e40\u0e27\u0e47\u0e1a\u0e19\u0e35\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e20\u0e32\u0e29\u0e32: "+(a+" \u0e42\u0e14\u0e22\u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34")},4:function(a){return"\u0e41\u0e1b\u0e25\u0e40\u0e1b\u0e47\u0e19\u0e20\u0e32\u0e29\u0e32: "+a},5:"\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14: \u0e40\u0e0b\u0e34\u0e23\u0e4c\u0e1f\u0e40\u0e27\u0e2d\u0e23\u0e4c\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e15\u0e32\u0e21\u0e04\u0e33\u0e02\u0e2d\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13 \u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07\u0e43\u0e19\u0e20\u0e32\u0e22\u0e2b\u0e25\u0e31\u0e07",
6:"\u0e14\u0e39\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21",7:function(a){return"\u0e02\u0e31\u0e1a\u0e40\u0e04\u0e25\u0e37\u0e48\u0e2d\u0e19\u0e42\u0e14\u0e22 "+a},8:"\u0e41\u0e1b\u0e25\u0e20\u0e32\u0e29\u0e32",9:"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e41\u0e1b\u0e25",10:function(a){return"\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e41\u0e1b\u0e25\u0e2b\u0e19\u0e49\u0e32\u0e40\u0e27\u0e47\u0e1a\u0e19\u0e35\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e20\u0e32\u0e29\u0e32: "+
(a+" \u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49 Google \u0e41\u0e1b\u0e25\u0e20\u0e32\u0e29\u0e32\u0e43\u0e0a\u0e48\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48")},11:function(a){return"\u0e14\u0e39\u0e2b\u0e19\u0e49\u0e32\u0e40\u0e27\u0e47\u0e1a\u0e19\u0e35\u0e49\u0e43\u0e19\u0e20\u0e32\u0e29\u0e32: "+a},12:"\u0e41\u0e2a\u0e14\u0e07\u0e15\u0e49\u0e19\u0e09\u0e1a\u0e31\u0e1a",13:"\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32\u0e02\u0e2d\u0e07\u0e44\u0e1f\u0e25\u0e4c\u0e43\u0e19\u0e15\u0e31\u0e27\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e19\u0e35\u0e49\u0e08\u0e30\u0e16\u0e39\u0e01\u0e2a\u0e48\u0e07\u0e1c\u0e48\u0e32\u0e19\u0e01\u0e32\u0e23\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e15\u0e48\u0e2d\u0e17\u0e35\u0e48\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22\u0e44\u0e1b\u0e22\u0e31\u0e07 Google \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e41\u0e1b\u0e25\u0e20\u0e32\u0e29\u0e32",
14:"\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32\u0e02\u0e2d\u0e07\u0e2b\u0e19\u0e49\u0e32\u0e40\u0e27\u0e47\u0e1a\u0e17\u0e35\u0e48\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22\u0e19\u0e35\u0e49\u0e08\u0e30\u0e16\u0e39\u0e01\u0e2a\u0e48\u0e07\u0e1c\u0e48\u0e32\u0e19\u0e01\u0e32\u0e23\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e15\u0e48\u0e2d\u0e17\u0e35\u0e48\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22\u0e44\u0e1b\u0e22\u0e31\u0e07 Google \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e41\u0e1b\u0e25\u0e20\u0e32\u0e29\u0e32",
15:"\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32\u0e02\u0e2d\u0e07\u0e2b\u0e19\u0e49\u0e32\u0e40\u0e27\u0e47\u0e1a\u0e2d\u0e34\u0e19\u0e17\u0e23\u0e32\u0e40\u0e19\u0e47\u0e15\u0e19\u0e35\u0e49\u0e08\u0e30\u0e16\u0e39\u0e01\u0e2a\u0e48\u0e07\u0e1c\u0e48\u0e32\u0e19\u0e01\u0e32\u0e23\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e15\u0e48\u0e2d\u0e17\u0e35\u0e48\u0e1b\u0e25\u0e2d\u0e14\u0e20\u0e31\u0e22\u0e44\u0e1b\u0e22\u0e31\u0e07 Google \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e41\u0e1b\u0e25\u0e20\u0e32\u0e29\u0e32",
16:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e20\u0e32\u0e29\u0e32",17:function(a){return"\u0e1b\u0e34\u0e14\u0e01\u0e32\u0e23\u0e41\u0e1b\u0e25\u0e20\u0e32\u0e29\u0e32"+a},18:function(a){return"\u0e1b\u0e34\u0e14\u0e20\u0e32\u0e29\u0e32: "+a},19:"\u0e0b\u0e48\u0e2d\u0e19\u0e15\u0e25\u0e2d\u0e14\u0e40\u0e27\u0e25\u0e32",20:"\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e15\u0e49\u0e19\u0e09\u0e1a\u0e31\u0e1a:",21:"\u0e23\u0e48\u0e27\u0e21\u0e43\u0e2b\u0e49\u0e04\u0e33\u0e41\u0e1b\u0e25\u0e17\u0e35\u0e48\u0e14\u0e35\u0e01\u0e27\u0e48\u0e32",
22:"\u0e23\u0e48\u0e27\u0e21\u0e43\u0e2b\u0e49\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25",23:"\u0e41\u0e1b\u0e25\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",24:"\u0e04\u0e37\u0e19\u0e04\u0e48\u0e32\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",25:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",26:"\u0e41\u0e1b\u0e25\u0e2a\u0e48\u0e27\u0e19\u0e15\u0e48\u0e32\u0e07\u0e46 \u0e40\u0e1b\u0e47\u0e19\u0e20\u0e32\u0e29\u0e32\u0e02\u0e2d\u0e07\u0e09\u0e31\u0e19",27:function(a){return"\u0e41\u0e1b\u0e25\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14\u0e40\u0e1b\u0e47\u0e19\u0e20\u0e32\u0e29\u0e32"+
a},28:"\u0e41\u0e2a\u0e14\u0e07\u0e20\u0e32\u0e29\u0e32\u0e15\u0e49\u0e19\u0e09\u0e1a\u0e31\u0e1a",29:"\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01",30:"\u0e1b\u0e34\u0e14\u0e01\u0e32\u0e23\u0e41\u0e1b\u0e25\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e19\u0e35\u0e49",31:null,32:"\u0e41\u0e2a\u0e14\u0e07\u0e04\u0e33\u0e41\u0e1b\u0e25\u0e2d\u0e37\u0e48\u0e19",33:"\u0e04\u0e25\u0e34\u0e01\u0e17\u0e35\u0e48\u0e04\u0e33\u0e14\u0e49\u0e32\u0e19\u0e1a\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e31\u0e1a\u0e04\u0e33\u0e41\u0e1b\u0e25\u0e2d\u0e37\u0e48\u0e19",
34:"\u0e43\u0e0a\u0e49",35:"\u0e25\u0e32\u0e01\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e01\u0e14\u0e41\u0e1b\u0e49\u0e19 Shift \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e23\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48",36:"\u0e04\u0e25\u0e34\u0e01\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e14\u0e39\u0e04\u0e33\u0e41\u0e1b\u0e25\u0e2d\u0e37\u0e48\u0e19",37:"\u0e01\u0e14\u0e41\u0e1b\u0e49\u0e19 Shift \u0e04\u0e49\u0e32\u0e07\u0e44\u0e27\u0e49 \u0e04\u0e25\u0e34\u0e01\u0e41\u0e25\u0e30\u0e25\u0e32\u0e01\u0e04\u0e33\u0e02\u0e36\u0e49\u0e19\u0e02\u0e49\u0e32\u0e07\u0e1a\u0e19\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e23\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48",
38:"\u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13\u0e17\u0e35\u0e48\u0e0a\u0e48\u0e27\u0e22\u0e2a\u0e48\u0e07\u0e04\u0e33\u0e41\u0e19\u0e30\u0e19\u0e33\u0e43\u0e19\u0e01\u0e32\u0e23\u0e41\u0e1b\u0e25\u0e43\u0e2b\u0e49\u0e41\u0e01\u0e48 Google \u0e41\u0e1b\u0e25\u0e20\u0e32\u0e29\u0e32",39:"\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e04\u0e33\u0e41\u0e1b\u0e25\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e19\u0e35\u0e49",40:"\u0e04\u0e25\u0e34\u0e01\u0e17\u0e35\u0e48\u0e04\u0e33\u0e43\u0e14\u0e04\u0e33\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e14\u0e39\u0e04\u0e33\u0e41\u0e1b\u0e25\u0e2d\u0e37\u0e48\u0e19 \u0e2b\u0e23\u0e37\u0e2d\u0e14\u0e31\u0e1a\u0e40\u0e1a\u0e34\u0e25\u0e04\u0e25\u0e34\u0e01\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e41\u0e01\u0e49\u0e44\u0e02\u0e42\u0e14\u0e22\u0e15\u0e23\u0e07",
41:"\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e15\u0e49\u0e19\u0e09\u0e1a\u0e31\u0e1a",42:"\u0e41\u0e1b\u0e25\u0e20\u0e32\u0e29\u0e32",43:"\u0e41\u0e1b\u0e25",44:"\u0e2a\u0e34\u0e48\u0e07\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e41\u0e01\u0e49\u0e44\u0e02\u0e16\u0e39\u0e01\u0e2a\u0e48\u0e07\u0e44\u0e1b\u0e41\u0e25\u0e49\u0e27",45:"\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14: \u0e44\u0e21\u0e48\u0e2a\u0e19\u0e31\u0e1a\u0e2a\u0e19\u0e38\u0e19\u0e20\u0e32\u0e29\u0e32\u0e02\u0e2d\u0e07\u0e2b\u0e19\u0e49\u0e32\u0e40\u0e27\u0e47\u0e1a\u0e19\u0e35\u0e49",
46:"\u0e27\u0e34\u0e14\u0e40\u0e08\u0e47\u0e15\u0e41\u0e1b\u0e25\u0e20\u0e32\u0e29\u0e32"};var g=window.google&&google.translate&&google.translate._const;
if(g){var h;a:{for(var k=[],l=[""],m=0;m<l.length;++m){var n=l[m].split(","),p=n[0];if(p){var q=Number(n[1]);if(!(!q||.1<q||0>q)){var r=Number(n[2]),t=new Date,u=1E4*t.getFullYear()+100*(t.getMonth()+1)+t.getDate();!r||r<u||k.push({version:p,ratio:q,a:r})}}}var w=0,x=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),y=Number(x&&x[1])||Math.random();for(m=0;m<k.length;++m){var z=k[m];w+=z.ratio;if(1<=w)break;if(y<w){h=z.version;break a}}h="TE_20200210_00"}var A="/element/%s/e/js/element/element_main.js".replace("%s",
h);if("0"==h){var B=" element %s e js element element_main.js".split(" ");B[B.length-1]="main_th.js";A=B.join("/").replace("%s",h)}if(g._cjlc)g._cjlc(g._pas+g._pah+A);else{var C=g._pas+g._pah+A,D=document.createElement("script");D.type="text/javascript";D.charset="UTF-8";D.src=resourcesUrl+"/js/element_main.js";var E=document.getElementsByTagName("head")[0];E||(E=document.body.parentNode.appendChild(document.createElement("head")));E.appendChild(D)}e("google.translate.m",f);e("google.translate.v",h)};}).call(window)
