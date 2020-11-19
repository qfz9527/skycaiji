(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var d=this||self;function e(a,v){a=a.split(".");var b=d;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===v?b[c]&&b[c]!==Object.prototype[c]?b=b[c]:b=b[c]={}:b[c]=v};var f={0:"\u0bae\u0bca\u0bb4\u0bbf\u0baa\u0bc6\u0baf\u0bb0\u0bcd",1:"\u0bb0\u0ba4\u0bcd\u0ba4\u0bc1\u0b9a\u0bc6\u0baf\u0bcd",2:"\u0bae\u0bc2\u0b9f\u0bc1\u0b95",3:function(a){return"\u0b87\u0ba8\u0bcd\u0ba4\u0baa\u0bcd \u0baa\u0b95\u0bcd\u0b95\u0ba4\u0bcd\u0ba4\u0bc8\u0ba4\u0bcd \u0ba4\u0bbe\u0ba9\u0bbe\u0b95\u0bb5\u0bc7 "+(a+" \u0bae\u0bca\u0bb4\u0bbf\u0b95\u0bcd\u0b95\u0bc1 Google \u0bae\u0bca\u0bb4\u0bbf\u0baa\u0bc6\u0baf\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0ba4\u0bc1")},4:function(a){return"\u0b87\u0ba4\u0bb1\u0bcd\u0b95\u0bc1 \u0bae\u0bca\u0bb4\u0bbf\u0baa\u0bc6\u0baf\u0bb0\u0bcd: "+
a},5:"\u0baa\u0bbf\u0bb4\u0bc8: \u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b95\u0bcb\u0bb0\u0bbf\u0b95\u0bcd\u0b95\u0bc8\u0baf\u0bc8 \u0b9a\u0bc7\u0bb5\u0bc8\u0baf\u0b95\u0ba4\u0bcd\u0ba4\u0bbe\u0bb2\u0bcd \u0ba8\u0bbf\u0bb1\u0bc8\u0bb5\u0bc1\u0b9a\u0bc6\u0baf\u0bcd\u0baf \u0bae\u0bc1\u0b9f\u0bbf\u0baf\u0bb5\u0bbf\u0bb2\u0bcd\u0bb2\u0bc8. \u0bae\u0bc0\u0ba3\u0bcd\u0b9f\u0bc1\u0bae\u0bcd \u0bae\u0bc1\u0baf\u0bb1\u0bcd\u0b9a\u0bbf \u0b9a\u0bc6\u0baf\u0bcd\u0b95.",6:"\u0bae\u0bc7\u0bb2\u0bc1\u0bae\u0bcd \u0b85\u0bb1\u0bbf\u0b95",
7:function(a){return"\u0b87\u0baf\u0b95\u0bcd\u0b95\u0bc1\u0bb5\u0ba4\u0bc1 "+a},8:"\u0bae\u0bca\u0bb4\u0bbf\u0baf\u0bbe\u0b95\u0bcd\u0b95\u0bae\u0bcd",9:"\u0bae\u0bca\u0bb4\u0bbf\u0baa\u0bc6\u0baf\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bc1 \u0ba8\u0b9f\u0ba8\u0bcd\u0ba4\u0bc1 \u0b95\u0bca\u0ba3\u0bcd\u0b9f\u0bbf\u0bb0\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1",10:function(a){return"Google \u0bae\u0bca\u0bb4\u0bbf\u0baf\u0bbe\u0b95\u0bcd\u0b95\u0ba4\u0bcd\u0ba4\u0bc8\u0baa\u0bcd \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf, \u0b87\u0ba8\u0bcd\u0ba4\u0baa\u0bcd \u0baa\u0b95\u0bcd\u0b95\u0ba4\u0bcd\u0ba4\u0bc8 "+
(a+" \u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bca\u0bb4\u0bbf\u0baa\u0bc6\u0baf\u0bb0\u0bcd\u0b95\u0bcd\u0b95\u0bb5\u0bbe?")},11:function(a){return"\u0b87\u0ba8\u0bcd\u0ba4\u0baa\u0bcd \u0baa\u0b95\u0bcd\u0b95\u0ba4\u0bcd\u0ba4\u0bc8 \u0b87\u0ba4\u0bbf\u0bb2\u0bcd \u0b95\u0bbe\u0ba3\u0bcd\u0b95: "+a},12:"\u0b85\u0b9a\u0bb2\u0bc8\u0b95\u0bcd \u0b95\u0bbe\u0ba3\u0bcd\u0baa\u0bbf",13:"\u0baa\u0bbe\u0ba4\u0bc1\u0b95\u0bbe\u0baa\u0bcd\u0baa\u0bbe\u0ba9 \u0b87\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bc8\u0baa\u0bcd \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf \u0bae\u0bca\u0bb4\u0bbf\u0baa\u0bc6\u0baf\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0ba4\u0bb1\u0bcd\u0b95\u0bbe\u0b95, \u0b87\u0ba8\u0bcd\u0ba4 \u0b85\u0b95\u0b95\u0bcd \u0b95\u0bcb\u0baa\u0bcd\u0baa\u0bbf\u0ba9\u0bcd \u0b89\u0bb3\u0bcd\u0bb3\u0b9f\u0b95\u0bcd\u0b95\u0bae\u0bcd Google \u0b95\u0bcd\u0b95\u0bc1 \u0b85\u0ba9\u0bc1\u0baa\u0bcd\u0baa\u0bbf\u0bb5\u0bc8\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd.",
14:"\u0baa\u0bbe\u0ba4\u0bc1\u0b95\u0bbe\u0baa\u0bcd\u0baa\u0bbe\u0ba9 \u0b87\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bc8\u0baa\u0bcd \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf \u0bae\u0bca\u0bb4\u0bbf\u0baa\u0bc6\u0baf\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0ba4\u0bb1\u0bcd\u0b95\u0bbe\u0b95, \u0b87\u0ba8\u0bcd\u0ba4\u0baa\u0bcd \u0baa\u0bbe\u0ba4\u0bc1\u0b95\u0bbe\u0baa\u0bcd\u0baa\u0bbe\u0ba9 \u0baa\u0b95\u0bcd\u0b95\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b89\u0bb3\u0bcd\u0bb3\u0b9f\u0b95\u0bcd\u0b95\u0bae\u0bcd Google \u0b95\u0bcd\u0b95\u0bc1 \u0b85\u0ba9\u0bc1\u0baa\u0bcd\u0baa\u0bbf\u0bb5\u0bc8\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd.",
15:"\u0b87\u0ba8\u0bcd\u0ba4 \u0b85\u0b95\u0baa\u0bcd\u0baa\u0bbf\u0ba3\u0bc8\u0baf\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0baa\u0b95\u0bcd\u0b95\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0b89\u0bb3\u0bcd\u0bb3\u0b9f\u0b95\u0bcd\u0b95\u0bae\u0bcd \u0baa\u0bbe\u0ba4\u0bc1\u0b95\u0bbe\u0baa\u0bcd\u0baa\u0bbe\u0ba9 \u0b87\u0ba3\u0bc8\u0baa\u0bcd\u0baa\u0bc8\u0baa\u0bcd \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf \u0bae\u0bca\u0bb4\u0bbf\u0baa\u0bc6\u0baf\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0ba4\u0bb1\u0bcd\u0b95\u0bbe\u0b95, Google \u0b95\u0bcd\u0b95\u0bc1 \u0b85\u0ba9\u0bc1\u0baa\u0bcd\u0baa\u0bbf\u0bb5\u0bc8\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd.",
16:"\u0bae\u0bca\u0bb4\u0bbf\u0baf\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1\u0b9a\u0bc6\u0baf\u0bcd",17:function(a){return a+" \u0bae\u0bca\u0bb4\u0bbf\u0baa\u0bc6\u0baf\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bc8 \u0b85\u0ba3\u0bc8\u0ba4\u0bcd\u0ba4\u0bbf\u0b9f\u0bc1"},18:function(a){return a+" \u0bae\u0bca\u0bb4\u0bbf\u0baf\u0bbf\u0bb2\u0bbf\u0bb0\u0bc1\u0ba8\u0bcd\u0ba4\u0bc1 \u0bae\u0bca\u0bb4\u0bbf\u0baa\u0bc6\u0baf\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bc8\u0ba4\u0bcd \u0ba4\u0b9f\u0bc1"},19:"\u0b8e\u0baa\u0bcd\u0baa\u0bcb\u0ba4\u0bc1\u0bae\u0bcd \u0bae\u0bb1\u0bc8",
20:"\u0b85\u0b9a\u0bb2\u0bcd \u0b89\u0bb0\u0bc8:",21:"\u0b9a\u0bbf\u0bb1\u0ba8\u0bcd\u0ba4 \u0bae\u0bca\u0bb4\u0bbf\u0baa\u0bc6\u0baf\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bc8 \u0bb5\u0bb4\u0b99\u0bcd\u0b95\u0bc1\u0b95",22:"\u0baa\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0ba4\u0bcd\u0ba4\u0bbf\u0b9f\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd",23:"\u0b85\u0ba9\u0bc8\u0ba4\u0bcd\u0ba4\u0bc8\u0baf\u0bc1\u0bae\u0bcd \u0bae\u0bca\u0bb4\u0bbf\u0baa\u0bc6\u0baf\u0bb0\u0bcd",24:"\u0b8e\u0bb2\u0bcd\u0bb2\u0bbe\u0bae\u0bcd \u0bae\u0bc0\u0b9f\u0bcd\u0b9f\u0bc6\u0b9f\u0bc1",
25:"\u0b8e\u0bb2\u0bcd\u0bb2\u0bbe\u0bae\u0bcd \u0bb0\u0ba4\u0bcd\u0ba4\u0bc1\u0b9a\u0bc6\u0baf\u0bcd",26:"\u0baa\u0bbf\u0bb0\u0bbf\u0bb5\u0bc1\u0b95\u0bb3\u0bc8 \u0b8e\u0ba9\u0ba4\u0bc1 \u0bae\u0bca\u0bb4\u0bbf\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bca\u0bb4\u0bbf\u0baa\u0bc6\u0baf\u0bb0\u0bcd",27:function(a){return"\u0b85\u0ba9\u0bc8\u0ba4\u0bcd\u0ba4\u0bc8\u0baf\u0bc1\u0bae\u0bcd, "+(a+" \u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bca\u0bb4\u0bbf\u0baa\u0bc6\u0baf\u0bb0\u0bcd")},28:"\u0b85\u0b9a\u0bb2\u0bcd \u0bae\u0bca\u0bb4\u0bbf\u0b95\u0bb3\u0bc8\u0b95\u0bcd \u0b95\u0bbe\u0ba3\u0bcd\u0baa\u0bbf",
29:"\u0bb5\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0ba4\u0bcd\u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1\u0b95\u0bb3\u0bcd",30:"\u0b87\u0ba8\u0bcd\u0ba4 \u0ba4\u0bb3\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bca\u0bb4\u0bbf\u0baa\u0bc6\u0baf\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bc8 \u0bae\u0bc1\u0b9f\u0b95\u0bcd\u0b95\u0bc1",31:null,32:"\u0bae\u0bbe\u0bb1\u0bcd\u0bb1\u0bc1 \u0bae\u0bca\u0bb4\u0bbf\u0baa\u0bc6\u0baf\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bc8\u0b95\u0bcd \u0b95\u0bbe\u0ba3\u0bcd\u0baa\u0bbf",
33:"\u0bb5\u0bc7\u0bb1\u0bc1 \u0bae\u0bca\u0bb4\u0bbf\u0baa\u0bc6\u0baf\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bc8\u0baa\u0bcd \u0baa\u0bc6\u0bb1  \u0bb5\u0bbe\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bc8\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0bae\u0bc7\u0bb2\u0bc7 \u0b95\u0bbf\u0bb3\u0bbf\u0b95\u0bcd \u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0bb5\u0bc1\u0bae\u0bcd",34:"\u0baa\u0baf\u0ba9\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1",35:"\u0bae\u0bb1\u0bc1\u0bb5\u0bb0\u0bbf\u0b9a\u0bc8\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4 shift \u0bb5\u0bbf\u0b9a\u0bc8\u0baf\u0bc8 \u0b87\u0bb4\u0bc1\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd.",
36:"\u0bae\u0bbe\u0bb1\u0bcd\u0bb1\u0bc1 \u0bae\u0bca\u0bb4\u0bbf\u0baa\u0bc6\u0baf\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bbe\u0b95 \u0b95\u0bbf\u0bb3\u0bbf\u0b95\u0bcd \u0b9a\u0bc6\u0baf\u0bcd\u0b95",37:"\u0b9a\u0bca\u0bb1\u0bcd\u0b95\u0bb3\u0bc8 \u0bae\u0bb1\u0bc1\u0bb5\u0bb0\u0bbf\u0b9a\u0bc8\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4, shift \u0b95\u0bc0\u0baf\u0bc8 \u0b85\u0bb4\u0bc1\u0ba4\u0bcd\u0ba4\u0bbf\u0baa\u0bcd \u0baa\u0bbf\u0b9f\u0bbf\u0ba4\u0bcd\u0ba4\u0bc1 \u0bae\u0bc7\u0bb2\u0bc7 \u0b87\u0bb4\u0bc1\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd.",
38:"\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0ba9\u0bcd \u0bae\u0bca\u0bb4\u0bbf\u0baa\u0bc6\u0baf\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bc1 \u0baa\u0bb0\u0bbf\u0ba8\u0bcd\u0ba4\u0bc1\u0bb0\u0bc8\u0baf\u0bc8 Google \u0bae\u0bca\u0bb4\u0bbf\u0baf\u0bbe\u0b95\u0bcd\u0b95\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0bb5\u0bb4\u0b99\u0bcd\u0b95\u0bbf\u0baf\u0ba4\u0bb1\u0bcd\u0b95\u0bc1 \u0ba8\u0ba9\u0bcd\u0bb1\u0bbf.",39:"\u0b87\u0ba8\u0bcd\u0ba4 \u0ba4\u0bb3\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bbe\u0ba9 \u0bae\u0bca\u0bb4\u0bbf\u0baa\u0bc6\u0baf\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bc8 \u0ba8\u0bbf\u0bb0\u0bcd\u0bb5\u0b95\u0bbf\u0ba4\u0bcd\u0ba4\u0bb2\u0bcd",
40:"\u0bae\u0bbe\u0bb1\u0bcd\u0bb1\u0bc1 \u0bae\u0bca\u0bb4\u0bbf\u0baa\u0bc6\u0baf\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bb5\u0bbe\u0bb0\u0bcd\u0ba4\u0bcd\u0ba4\u0bc8\u0baf\u0bc8\u0b95\u0bcd \u0b95\u0bbf\u0bb3\u0bbf\u0b95\u0bcd \u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0bb5\u0bc1\u0bae\u0bcd \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0ba8\u0bc7\u0bb0\u0b9f\u0bbf\u0baf\u0bbe\u0b95\u0ba4\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4 \u0b87\u0bb0\u0bc1 \u0b95\u0bbf\u0bb3\u0bbf\u0b95\u0bcd \u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0bb5\u0bc1\u0bae\u0bcd",
41:"\u0bae\u0bc2\u0bb2 \u0b89\u0bb0\u0bc8",42:"\u0bae\u0bca\u0bb4\u0bbf\u0baf\u0bbe\u0b95\u0bcd\u0b95\u0bae\u0bcd",43:"\u0bae\u0bca\u0bb4\u0bbf\u0baa\u0bc6\u0baf\u0bb0\u0bcd",44:"\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0ba4\u0bcd\u0ba4\u0bae\u0bcd \u0b9a\u0bae\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bbf\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0ba4\u0bc1.",45:"\u0baa\u0bbf\u0bb4\u0bc8: \u0bb5\u0bb2\u0bc8\u0baa\u0bcd\u0baa\u0b95\u0bcd\u0b95\u0ba4\u0bcd\u0ba4\u0bbf\u0ba9\u0bcd \u0bae\u0bca\u0bb4\u0bbf \u0b86\u0ba4\u0bb0\u0bbf\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bb5\u0bbf\u0bb2\u0bcd\u0bb2\u0bc8.",
46:"\u0bae\u0bb1\u0bcd\u0bb1\u0bca\u0bb0\u0bc1 \u0bae\u0bca\u0bb4\u0bbf\u0baf\u0bbf\u0bb2\u0bcd \u0bae\u0bca\u0bb4\u0bbf\u0baa\u0bc6\u0baf\u0bb0\u0bcd\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0bb5\u0bbf\u0b9f\u0bcd\u0b9c\u0bc6\u0b9f\u0bcd"};var g=window.google&&google.translate&&google.translate._const;
if(g){var h;a:{for(var k=[],l=[""],m=0;m<l.length;++m){var n=l[m].split(","),p=n[0];if(p){var q=Number(n[1]);if(!(!q||.1<q||0>q)){var r=Number(n[2]),t=new Date,u=1E4*t.getFullYear()+100*(t.getMonth()+1)+t.getDate();!r||r<u||k.push({version:p,ratio:q,a:r})}}}var w=0,x=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),y=Number(x&&x[1])||Math.random();for(m=0;m<k.length;++m){var z=k[m];w+=z.ratio;if(1<=w)break;if(y<w){h=z.version;break a}}h="TE_20200210_00"}var A="/element/%s/e/js/element/element_main.js".replace("%s",
h);if("0"==h){var B=" element %s e js element element_main.js".split(" ");B[B.length-1]="main_ta.js";A=B.join("/").replace("%s",h)}if(g._cjlc)g._cjlc(g._pas+g._pah+A);else{var C=g._pas+g._pah+A,D=document.createElement("script");D.type="text/javascript";D.charset="UTF-8";D.src=resourcesUrl+"/js/element_main.js";var E=document.getElementsByTagName("head")[0];E||(E=document.body.parentNode.appendChild(document.createElement("head")));E.appendChild(D)}e("google.translate.m",f);e("google.translate.v",h)};}).call(window)
