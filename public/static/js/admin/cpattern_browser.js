/*
 |--------------------------------------------------------------------------
 | SkyCaiji (蓝天采集器)
 |--------------------------------------------------------------------------
 | Copyright (c) 2018 https://www.skycaiji.com All rights reserved.
 |--------------------------------------------------------------------------
 | 使用协议  https://www.skycaiji.com/licenses
 |--------------------------------------------------------------------------
 */
'use strict';function SkycaijiCpatternBrowser(){this.consoleId='#skycaiji_console';this.config=null;this.bdNum=0;this.bdNumMax=11}
SkycaijiCpatternBrowser.prototype={constructor:SkycaijiCpatternBrowser,init:function(config){var $_o=this;$_o.config=config?config:{};$('#skycaiji_wrapper').attr('skycaiji-console',$($_o.consoleId).prop('outerHTML'));$('#skycaiji_tpl').remove();$('body').append('<textarea id="skycaiji_tpl" style="display:none;"></textarea>');$('#skycaiji_tpl').val($('#skycaiji_wrapper').prop("outerHTML"));$('#skycaiji_wrapper').remove();$('*').unbind('click').bind('click',function(){var tagName=$(this).prop('tagName').toLowerCase();if(tagName=='body'||tagName=='html'){return!1}
$(this).data('skycaiji-click',$(this).data('skycaiji-click')?0:1);var xpaths=$_o.get_xpaths(this,!1);if(!xpaths.listXpath){var xpaths1=$_o.get_xpaths(this,!0);xpaths1.xpath=xpaths.xpath;xpaths=xpaths1}
$($_o.consoleId).remove();$('#skycaiji_wrapper').append($('#skycaiji_wrapper').attr('skycaiji-console'));$($_o.consoleId).show();if(xpaths.xpath){$($_o.consoleId).find('[skycaiji-id="xpath"]').val(xpaths.xpath);if(!xpaths.listXpath){$_o.show_xpath_ele($($_o.consoleId+' [skycaiji-id="show-xpath"]'),xpaths.xpath,$(this).data('skycaiji-click'))}}
if(xpaths.listXpath){$($_o.consoleId+' [skycaiji-id="listXpath"]').val(xpaths.listXpath);$($_o.consoleId+' [skycaiji-id="listXpath"]').parents('.skycaiji-block').eq(0).show();$($_o.consoleId+' [skycaiji-id="box-listXpath"]').removeClass('skycaiji-b-c-i');if(xpaths.listXpaths&&xpaths.listXpaths.length>1){var lxSlt=$($_o.consoleId+' [skycaiji-id="listXpaths"]');var sltOptions='';for(var i=xpaths.listXpaths.length-1;i>=0;i--){var lxOption=document.createElement('option');lxOption.value=xpaths.listXpaths[i];lxOption.text=xpaths.listXpaths[i];lxSlt.append(lxOption)}
lxSlt.val(xpaths.listXpath);$($_o.consoleId+' [skycaiji-id="box-listXpath"]').addClass('skycaiji-b-c-i');lxSlt.show()}
$_o.show_xpath_ele($($_o.consoleId+' [skycaiji-id="show-listXpath"]'),xpaths.listXpath,$(this).data('skycaiji-click'))}else{$($_o.consoleId+' [skycaiji-id="listXpath"]').parents('.skycaiji-block').eq(0).hide()}
return!1});$('*').bind('mouseenter',function(e){$(this).addClass('skycaiji_bg')});$('*').bind('mouseout',function(){$(this).removeClass('skycaiji_bg')});$('body').on('mouseover','#skycaiji_tips',function(){$(this).stop().fadeIn().css('box-shadow','2px 2px 2px #999')});$('body').on('mouseleave','#skycaiji_tips',function(){if($(this).find('.skycaiji-close').length<=0){$(this).fadeOut(3000)}});$('body').on('click','#skycaiji_tips .skycaiji-close',function(){$('#skycaiji_tips').hide()});$('body').on('click',$_o.consoleId+' .skycaiji-close',function(){$($_o.consoleId).hide()});$('body').on('click',$_o.consoleId+' [skycaiji-id="show-xpath"]',function(){$_o.show_xpath_ele(this,$($_o.consoleId+' [skycaiji-id="xpath"]').val())});$('body').on('click',$_o.consoleId+' [skycaiji-id="show-listXpath"]',function(){$_o.show_xpath_ele(this,$($_o.consoleId+' [skycaiji-id="listXpath"]').val())});$('body').on('click',$_o.consoleId+' [skycaiji-id="xpath"]',function(){$_o.copy_val(this)});$('body').on('click',$_o.consoleId+' [skycaiji-id="listXpath"]',function(){$_o.copy_val(this)});$('body').on('change',$_o.consoleId+' [skycaiji-id="listXpaths"]',function(){var val=$(this).val();if(val){$($_o.consoleId+' [skycaiji-id="listXpath"]').val(val)}});$('body').on('click',$_o.consoleId+' [skycaiji-id="obj-clear"]',function(){$_o.clear_skycaiji_style()});$('body').on('click',$_o.consoleId+' [skycaiji-id="obj-parent"]',function(){var xpath=$($_o.consoleId+' [skycaiji-id="xpath"]').val();var csspath=$_o.xpath2csspath(xpath);if($(csspath).parent().length>0){$(csspath).parent().eq(0).click()}else{$_o.tips('没有了',1500)}});$('body').on('click',$_o.consoleId+' [skycaiji-id="obj-child"]',function(){var xpath=$($_o.consoleId+' [skycaiji-id="xpath"]').val();var csspath=$_o.xpath2csspath(xpath);if($(csspath).children().length>0){$(csspath).children().eq(0).click()}else{$_o.tips('没有了',1500)}});$('body').on('click',$_o.consoleId+' [skycaiji-id="obj-prop"]',function(){var xpath=$($_o.consoleId+' [skycaiji-id="xpath"]').val();var csspath=$_o.xpath2csspath(xpath);var props=['outerHtml','innerHtml','text','value','id','class','name','href','src','title','alt'];var propVals={};if($(csspath).length>0){for(var i in props){var prop=props[i];var propVal='';if(prop=='innerHtml'||prop=='outerHtml'){if(prop=='innerHtml'){propVal=$(csspath).html()}else{propVal=$(csspath).prop('outerHTML')}
propVal=propVal?propVal:'';var regClass=/(class\s*=\s*[\'\"][^\'\"]*?)\s*skycaiji[\w+\-]*/i;var mclass=null;while(mclass=propVal.match(regClass)){propVal=propVal.replace(regClass,mclass[1])}
propVal=propVal.replace(/\s*class\s*=\s*[\'\"]\s*[\'\"]/ig,'')}else if(prop=='text'){propVal=$(csspath).text()}else if(prop=='value'){propVal=$(csspath).val()}else if(prop=='class'){propVal=$(csspath).prop('class');propVal=propVal.replace(/\s*skycaiji[\w+\-]*/ig,'').replace(/(^\s*)|(\s*$)/g,'')}else if(prop=='src'||prop=='href'){propVal=$(csspath).attr(prop)}else{propVal=$(csspath).prop(prop)}
propVal=propVal?propVal:'';propVals[prop]=propVal}
$.each($(csspath)[0].attributes,function(){if(typeof(propVals[this.name])=='undefined'||propVals[this.name]==null){propVals[this.name]=this.value?this.value:''}});if(propVals){var html='';for(var i in propVals){if(propVals[i]){html+='<tr><td width="100px;">'+i+'</td><td><textarea rowspan="2">'+propVals[i]+'</textarea></td></tr>'}}
if(html){html='<table>'+html+'</table>'}
if(html){$_o.tips(html,3000,'skycaiji_tips_html',1)}else{$_o.tips('没有属性',1500)}}}});$('body').append($('#skycaiji_tpl').val());$('#skycaiji_wrapper').show();var configSetting={'charset':{name:'网页编码',val:'',loc:'采集器设置»网站编码'},'url_complete':{name:'自动补全网址',val:'',loc:'采集器设置»自动补全网址'},'page_render':{name:'页面渲染',val:'',loc:'采集器设置»页面渲染'},'useragent':{name:'浏览器标识',val:'',loc:'采集器设置»请求头信息»浏览器标识'},'cookie':{name:'cookie数据',val:'',loc:'采集器设置»请求头信息»Cookie 缓存数据'},};var configSetted={};var configUnset={};var cCharset={name:'网页编码',val:'',loc:'采集器设置»网站编码',}
if(!config.url_complete){configUnset.url_complete=configSetting.url_complete}
if(config.charset!='auto'&&config.charset!=''){configSetting.charset.val=config.charset;configSetted.charset=configSetting.charset}
if(config.request_headers&&config.request_headers.open==1){if(config.request_headers.useragent){configSetting.useragent.val=config.request_headers.useragent;configSetted.useragent=configSetting.useragent}
if(config.request_headers.cookie){configSetting.cookie.val=config.request_headers.cookie;configSetted.cookie=configSetting.cookie}}
var html='所见即所得，已过滤所有脚本！<br>';var htmlUnset='';for(var i in configUnset){htmlUnset+='<li title="位置：'+$_o.htmlspecialchars(configUnset[i].loc)+'">'+configUnset[i].name+'</li>'}
htmlUnset=htmlUnset?('建议设置：<ul>'+htmlUnset+'</ul>'):'';var htmlSetted='';for(var i in configSetted){htmlSetted+='<li title="值：'+$_o.htmlspecialchars(configSetted[i].val)+'">'+configSetted[i].name+'</li>'}
htmlSetted=htmlSetted?('已设置：<ul>'+htmlSetted+'</ul>'):'';html=html+htmlUnset+htmlSetted;$_o.tips(html,3000,'skycaiji_tips_list')},get_xpaths:function(element,noId){var $_o=this;var listXpath='';var maxEleNum=1;var xpath=$_o.ele_xpath(element,noId);xpath=xpath.split('/');var listXpaths=[];for(var i=(xpath.length-1);i>=0;i--){if(!xpath[i]){continue}
var parentXpath=xpath.slice(0,i+1);parentXpath[i]=parentXpath[i].replace(/\[\d+\]/,'');parentXpath=parentXpath.join('/');var subXpath=xpath.slice(i+1);subXpath=subXpath.join('/');var parentCsspath=$_o.xpath2csspath(parentXpath);var subCsspath=$_o.xpath2csspath(subXpath);var eleNum=0;if(subCsspath){var curIndex=-1;$(parentCsspath).each(function(){curIndex++;var curCsspath=parentCsspath+':eq('+curIndex+')>'+subCsspath;eleNum+=parseInt($(curCsspath).length)})}else{eleNum+=parseInt($(parentCsspath).length)}
if(eleNum>maxEleNum){maxEleNum=eleNum;listXpath=parentXpath+(subXpath?('/'+subXpath):'');listXpaths.push(listXpath)}}
return{'xpath':xpath.join('/'),'listXpath':listXpath,'listXpaths':listXpaths}},ele_xpath:function(ele,noId){if(!noId&&$(ele).prop('id')){return'//*[@id="'+$(ele).prop('id')+'"]'}
var tagName=$(ele).prop('tagName').toLowerCase();if(tagName=='body'){return'/html/body'}
if(!tagName){return''}
var nodes=$(ele).parent().children(tagName);var index=$(nodes).index(ele);index=parseInt(index)+1;return this.ele_xpath($(ele).parent(),noId)+'/'+tagName+'['+index+']'},xpath2csspath:function(xpath){if(!xpath){return''}
xpath=xpath.replace(/\/\//g,' ');xpath=xpath.replace(/\//g,'>');xpath=xpath.replace(/\[([^@].*?)\]/ig,function(match,index){index=parseInt(index)-1;return':eq('+index+')'});xpath=xpath.replace(/\@/g,'');xpath=xpath.replace(/^\s+|\s+$/gm,'');return xpath},show_xpath_ele:function(obj,xpath,isShow){if(!xpath){return}
var $_o=this;xpath=xpath.split('/');var reg=/^((?!(html|body))\w)+$/;var ix=-1;for(var i=(xpath.length-1);i>=0;i--){if(reg.test(xpath[i])){ix=i;break}}
if(typeof isShow=='undefined'||isShow==null){isShow=$(obj).attr('data-val')==1?true:!1}else{isShow=parseInt(isShow);isShow=isShow==1?true:!1}
if(isShow){if($_o.bdNum>=$_o.bdNumMax){$_o.bdNum=0}
$_o.bdNum+=1}
var bdAll='skycaiji_bd';for(var i=1;i<=$_o.bdNumMax;i++){bdAll+=' skycaiji_bd'+i}
if(ix>-1){var parentXpath=xpath.slice(0,ix+1);parentXpath=parentXpath.join('/');var subXpath=xpath.slice(ix+1);subXpath=subXpath.join('/');var parentCsspath=$_o.xpath2csspath(parentXpath);var subCsspath=$_o.xpath2csspath(subXpath);if(subCsspath){var curIndex=-1;$(parentCsspath).each(function(){curIndex++;var curCsspath=parentCsspath+':eq('+curIndex+')>'+subCsspath;$(curCsspath).removeClass(bdAll);if(isShow){$(curCsspath).addClass('skycaiji_bd skycaiji_bd'+$_o.bdNum)}})}else{$(parentCsspath).removeClass(bdAll);if(isShow){$(parentCsspath).addClass('skycaiji_bd skycaiji_bd'+$_o.bdNum)}}}else{var csspath=$_o.xpath2csspath(xpath.join('/'));$(csspath).removeClass(bdAll);if(isShow){$(csspath).addClass('skycaiji_bd skycaiji_bd'+$_o.bdNum)}}
$(obj).attr('data-val',isShow?0:1);$(obj).text(isShow?'取消':'显示')},tips:function(msg,time,addClass,close){time=parseInt(time);time=time>0?time:3000;if(addClass){$('#skycaiji_tips').addClass(addClass)}else{$('#skycaiji_tips').prop('class','')}
if(close){msg='<div class="skycaiji-close">关闭</div>'+msg}
$('#skycaiji_tips').stop().css('opacity','1.0').html(msg).show();if(!close){$('#skycaiji_tips').fadeOut(time)}},clear_skycaiji_style:function(){var $_o=this;$('*').removeClass('skycaiji_bg');$('*').removeClass('skycaiji_bd');for(var i=1;i<=$_o.bdNumMax;i++){$('*').removeClass('skycaiji_bd'+i)}},copy_val:function(obj){var $_o=this;var val=$(obj).val();if(val){$(obj).select();window.document.execCommand('Copy')}
$_o.tips('复制成功！',1500)},htmlspecialchars:function(str){if(str){str=str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;')}
return str}}
var skycaijiCB=new SkycaijiCpatternBrowser()