/*
 |--------------------------------------------------------------------------
 | SkyCaiji (蓝天采集器)
 |--------------------------------------------------------------------------
 | Copyright (c) 2018 https://www.skycaiji.com All rights reserved.
 |--------------------------------------------------------------------------
 | 使用协议  https://www.skycaiji.com/licenses
 |--------------------------------------------------------------------------
 */
'use strict';function AppClass(){}
AppClass.prototype={constructor:AppClass,init_list:function(){var $_o=this;$(document).ready(function(){$('#app_list').on('click','.install',function(){var obj=$(this);var parent=obj.parents('tr[data-app]');var app=parent.attr('data-app');if(parent.attr('data-agreement')){windowModal('协议',ulink('Admin/App/agreement?app=_app_',{'_app_':app}))}else{confirmRight('是否安装？',function(){windowModal('正在安装...',ulink('Admin/App/install?app=_app_',{'_app_':app}))})}});$('#app_list').on('click','.uninstall',function(){var obj=$(this);confirmRight('卸载会清理相关数据，确定卸载？',function(){var app=obj.parents('tr[data-app]').attr('data-app');windowModal('正在卸载...',ulink('Admin/App/uninstall?app=_app_',{'_app_':app}))})});$('#app_list').on('click','.upgrade',function(){var obj=$(this);confirmRight('确定升级至新版本？',function(){var app=obj.parents('tr[data-app]').attr('data-app');windowModal('正在升级...',ulink('Admin/App/upgrade?app=_app_',{'_app_':app}))})});$('#app_list').on('click','.enable',function(){var app=$(this).parents('tr[data-app]').attr('data-app');var enable=$(this).attr('data-enable');enable=parseInt(enable);enable=enable>0?0:1;windowModal((enable?'开启':'关闭')+'应用',ulink('Admin/App/enable?app=_app_&enable=_enable_',{'_app_':app,'_enable_':enable}))});$("[data-toggle='popover']").popover();if($('#auto_check').is(':checked')){$_o.check_update()}
$('#auto_check').bind('click',function(){var auto=$(this).is(':checked')?1:0;$.ajax({type:"GET",url:ulink('Mystore/appOp?op=auto_check&auto='+auto),dataType:"json",success:function(data){data.code==1?toastr.success(data.msg):toastr.error(data.msg)}})});$('#btn_check').bind('click',function(){$_o.check_update()})})},init_manage:function(){$('#app_manage .nav-tabs a').bind('click',function(){if($(this).attr('target')=='_blank'){window.open($(this).attr('data-url'),'_blank');return!1}});$('#newest_version').bind('click',function(){var obj=$(this);confirmRight('确定升级至新版本？',function(){var app=obj.attr('data-app');windowModal('正在升级...',ulink('Admin/App/upgrade?app=_app_',{'_app_':app}))})});$('#enable').bind('click',function(){var app=$(this).attr('data-app');var enable=$(this).attr('data-enable');enable=parseInt(enable);enable=enable>0?0:1;windowModal((enable?'开启':'关闭')+'应用',ulink('Admin/App/enable?app=_app_&enable=_enable_',{'_app_':app,'_enable_':enable}))});if(document.getElementById('iframe_main')){var boxHeight=$(window).height()-$('.main-header').height();$('.content').height(boxHeight+'px');boxHeight=boxHeight-$('.content .manage-nav').height();$('.content .manage-wrap').height(boxHeight);$('#iframe_main').on('load',function(){$('.iframe-loading').remove();$(this).show()})}},check_update:function(){var apps=new Array();$('#app_list').find('tr[data-app]').each(function(){apps.push($(this).attr('data-app'))});if(apps.length>0){$('#btn_check').html('检测更新 <img src="'+window.site_config.pub+'/static/images/load1.gif" style="width:12px;vertical-align:middle;">');$('.app-store-info').find('.has-update').remove();$.ajax({type:"get",url:ulink('Mystore/appOp?op=check_store_update'),dataType:"json",async:!0,data:{apps:apps},success:function(data){if(data.code==1&&data.data){for(var i in data.data){var app=data.data[i];var storeInfo=$('tr[data-app="'+app.app+'"]').find('.app-store-info');var html='<div class="has-update"><span class="glyphicon glyphicon-exclamation-sign"></span>有更新</div>';storeInfo.append(html)}}else{ajaxDataMsg(data)}},complete:function(){$('#btn_check').html('检测更新')}})}},};var appClass=new AppClass();$(document).ready(function(){if(window.storeClass){window.storeClass.init_my()}})