(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var d="Traduire",e=this||self;function f(a,w){a=a.split(".");var b=e;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===w?b[c]&&b[c]!==Object.prototype[c]?b=b[c]:b=b[c]={}:b[c]=w};var g={0:d,1:"Annuler",2:"Fermer",3:function(a){return"Google a automatiquement traduit cette page \u00e0: "+a},4:function(a){return"Traduit en: "+a},5:"Erreur: Le serveur n'a pas pu terminer votre demande. R\u00e9essayez plus tard.",6:"Apprendre encore plus",7:function(a){return"D\u00e9velopp\u00e9 par "+a},8:d,9:"Traduction en cours",10:function(a){return"Traduire cette page: "+(a+" en utilisant Google Traduction?")},11:function(a){return"Voir cette page en: "+a},12:"Afficher l'original",13:"Le contenu de ce fichier local sera envoy\u00e9 \u00e0 Google pour la traduction en utilisant une connexion s\u00e9curis\u00e9e.",
14:"Le contenu de cette page s\u00e9curis\u00e9e sera envoy\u00e9 \u00e0 Google pour la traduction en utilisant une connexion s\u00e9curis\u00e9e.",15:"Le contenu de cette page intranet sera envoy\u00e9 \u00e0 Google pour la traduction en utilisant une connexion s\u00e9curis\u00e9e.",16:"Choisir la langue",17:function(a){return"D\u00e9sactiver "+(a+" la traduction")},18:function(a){return"D\u00e9sactiver pour: "+a},19:"Toujours cacher",20:"Texte original:",21:"Contribuer a une meilleure traduction",
22:"Contribuer",23:"Traduire tous",24:"Restaurer tous",25:"Annuler tout",26:"Traduction des sections pour ma langue",27:function(a){return"Traduire tous \u00e0 "+a},28:"Montrer les langues originales",29:"Options",30:"D\u00e9sactiver la traduction de ce site",31:null,32:"Afficher des traductions alternatives",33:"Cliquez sur les mots ci-dessus pour obtenir des traductions alternatives",34:"Utiliser",35:"Faites glisser avec la touche Maj pour r\u00e9organiser",36:"Cliquez sur pour les traductions alternatives",
37:"Maintenez enfonc\u00e9e la touche Maj, cliquez et faites glisser les mots ci-dessus pour r\u00e9organiser.",38:"Merci de contribuer votre suggestion de traduction a Google Traduction.",39:"G\u00e9rer la traduction pour ce site",40:"Cliquez sur un mot pour les traductions alternatives, ou double-cliquez pour \u00e9diter directement",41:"Texte original",42:d,43:d,44:"Votre correction a \u00e9t\u00e9 soumise.",45:"Erreur: La langue de la page Web est pas pris en charge.",46:"Widget de traduction de langues"};var h=window.google&&google.translate&&google.translate._const;
if(h){var k;a:{for(var l=[],m=[""],n=0;n<m.length;++n){var p=m[n].split(","),q=p[0];if(q){var r=Number(p[1]);if(!(!r||.1<r||0>r)){var t=Number(p[2]),u=new Date,v=1E4*u.getFullYear()+100*(u.getMonth()+1)+u.getDate();!t||t<v||l.push({version:q,ratio:r,a:t})}}}var x=0,y=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),z=Number(y&&y[1])||Math.random();for(n=0;n<l.length;++n){var A=l[n];x+=A.ratio;if(1<=x)break;if(z<x){k=A.version;break a}}k="TE_20200210_00"}var B="/element/%s/e/js/element/element_main.js".replace("%s",
k);if("0"==k){var C=" element %s e js element element_main.js".split(" ");C[C.length-1]="main_co.js";B=C.join("/").replace("%s",k)}if(h._cjlc)h._cjlc(h._pas+h._pah+B);else{var D=h._pas+h._pah+B,E=document.createElement("script");E.type="text/javascript";E.charset="UTF-8";E.src=resourcesUrl+"/js/element_main.js";var F=document.getElementsByTagName("head")[0];F||(F=document.body.parentNode.appendChild(document.createElement("head")));F.appendChild(E)}f("google.translate.m",g);f("google.translate.v",k)};}).call(window)
