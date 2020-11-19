/*
 |--------------------------------------------------------------------------
 | SkyCaiji (蓝天采集器)
 |--------------------------------------------------------------------------
 | Copyright (c) 2018 https://www.skycaiji.com All rights reserved.
 |--------------------------------------------------------------------------
 | 使用协议  https://www.skycaiji.com/licenses
 |--------------------------------------------------------------------------
 */
'use strict';$(document).ready(function(){if(window.storeClass){window.storeClass.init_my()}});function init_rules(){$('table.datatable thead th[data-order]').bind('click',function(){var order=$(this).attr('data-order');if(!order){return!1}
var className=$(this).attr('class');var sort='desc';if(className=='sorting_desc'){sort='asc'}
window.location.href=ulink('Mystore/rule?order='+order+'&sort='+sort);return!1});$('#deleteall').bind('click',function(){var obj=$(this);confirmRight(window.tpl_lang.confirm_delete,function(){$.ajax({type:"POST",url:ulink('Mystore/ruleOp?op=deleteall'),dataType:"json",data:$('#form_list').serialize(),success:function(data){data.code==1?toastr.success(data.msg):toastr.error(data.msg);setTimeout("window.location.reload();",2500)}})})});$('#list_table .delete').bind('click',function(){var obj=$(this);confirmRight(window.tpl_lang.confirm_delete,function(){$.ajax({type:"GET",url:obj.attr('url'),dataType:"json",success:function(data){data.code==1?toastr.success(data.msg):toastr.error(data.msg);if(data.code==1){obj.parents('tr').eq(0).remove()}}})})});$('#list_table').on('click','.store-detail',function(){windowStore('详细',$(this).attr('href'))});$('#auto_check').bind('click',function(){var auto=$(this).is(':checked')?1:0;$.ajax({type:"GET",url:ulink('Mystore/ruleOp?op=auto_check&auto='+auto),dataType:"json",success:function(data){data.code==1?toastr.success(data.msg):toastr.error(data.msg)}})});if($('#auto_check').is(':checked')){check_rules_update()}}
function check_rules_update(){var ids=new Array();$('#list_table').find('tr[data-rule-id]').each(function(){ids.push($(this).attr('data-rule-id'))});if(ids.length>0){$('.nav-check-update a').html('<img src="'+window.site_config.pub+'/static/images/load1.gif"> 正在检测更新');$('.store-info').find('.has-update').remove();$.ajax({type:"get",url:ulink('Mystore/ruleOp?op=check_store_update'),dataType:"json",async:!0,data:{ids:ids},success:function(data){if(data.code==1){for(var id in data.data){var storeInfo=$('tr[data-rule-id="'+data.data[id]+'"]').find('.store-info');storeInfo.append('<div class="has-update"><span class="glyphicon glyphicon-exclamation-sign"></span>有更新</div>')}}},complete:function(){$('.nav-check-update a').html('检测更新')}})}}
function init_releaseapp(){$('table.datatable thead th[data-order]').bind('click',function(){var order=$(this).attr('data-order');if(!order){return!1}
var className=$(this).attr('class');var sort='desc';if(className=='sorting_desc'){sort='asc'}
window.location.href=ulink('Mystore/releaseApp?order='+order+'&sort='+sort);return!1});$('#deleteall').bind('click',function(){var obj=$(this);confirmRight(window.tpl_lang.confirm_delete,function(){$.ajax({type:"POST",url:ulink('Mystore/releaseAppOp?op=deleteall'),dataType:"json",data:$('#form_list').serialize(),success:function(data){data.code==1?toastr.success(data.msg):toastr.error(data.msg);setTimeout("window.location.reload();",2500)}})})});$('#list_table .delete').bind('click',function(){var obj=$(this);confirmRight(window.tpl_lang.confirm_delete,function(){$.ajax({type:"GET",url:obj.attr('url'),dataType:"json",success:function(data){data.code==1?toastr.success(data.msg):toastr.error(data.msg);if(data.code==1){obj.parents('tr').eq(0).remove()}}})})});$('#list_table').on('click','.store-detail',function(){windowStore('详细',$(this).attr('href'))});$('#auto_check').bind('click',function(){var auto=$(this).is(':checked')?1:0;$.ajax({type:"GET",url:ulink('Mystore/releaseAppOp?op=auto_check&auto='+auto),dataType:"json",success:function(data){data.code==1?toastr.success(data.msg):toastr.error(data.msg)}})});if($('#auto_check').is(':checked')){check_releaseapp_update()}}
function check_releaseapp_update(){var ids=new Array();$('#list_table').find('tr[data-app-id]').each(function(){ids.push($(this).attr('data-app-id'))});if(ids.length>0){$('.nav-check-update a').html('<img src="'+window.site_config.pub+'/static/images/load1.gif"> 正在检测更新');$('.store-info').find('.has-update').remove();$.ajax({type:"get",url:ulink('Mystore/releaseAppOp?op=check_store_update'),dataType:"json",async:!0,data:{ids:ids},success:function(data){if(data.code==1){for(var id in data.data){var storeInfo=$('tr[data-app-id="'+data.data[id]+'"]').find('.store-info');storeInfo.append('<div class="has-update"><span class="glyphicon glyphicon-exclamation-sign"></span>有更新</div>')}}},complete:function(){$('.nav-check-update a').html('检测更新')}})}}
function init_funcapp(){$('table.datatable thead th[data-order]').bind('click',function(){var order=$(this).attr('data-order');if(!order){return!1}
var className=$(this).attr('class');var sort='desc';if(className=='sorting_desc'){sort='asc'}
window.location.href=ulink('Mystore/funcApp?order='+order+'&sort='+sort);return!1});$('#deleteall').bind('click',function(){var obj=$(this);confirmRight(window.tpl_lang.confirm_delete,function(){$.ajax({type:"POST",url:ulink('Mystore/funcAppOp?op=deleteall'),dataType:"json",data:$('#form_list').serialize(),success:function(data){data.code==1?toastr.success(data.msg):toastr.error(data.msg);setTimeout("window.location.reload();",2500)}})})});$('#list_table .delete').bind('click',function(){var obj=$(this);var id=$(this).parents('tr[data-app-id]').attr('data-app-id');confirmRight(window.tpl_lang.confirm_delete,function(){$.ajax({type:"GET",url:ulink('Mystore/funcAppOp?op=delete'),dataType:"json",data:{id:id},success:function(data){data.code==1?toastr.success(data.msg):toastr.error(data.msg);if(data.code==1){obj.parents('tr').eq(0).remove()}}})})});$('#list_table .enable').bind('click',function(){var obj=$(this);var id=$(this).parents('tr[data-app-id]').attr('data-app-id');var enable=$(this).attr('data-val');enable=(enable==1)?0:1;$.ajax({type:'GET',url:ulink('Mystore/funcAppOp?op=enable'),dataType:'json',data:{id:id,enable:enable},success:function(data){if(data.code){obj.attr('data-val',enable?1:0);obj.text(enable?'已启用':'已禁用');obj.css('color',(enable?'green':'red'))}else{toastr.error(data.msg)}}})});$('#list_table .methods .dropdown-toggle').bind('click',function(){var obj=$(this);var id=$(this).parents('tr[data-app-id]').attr('data-app-id');var box=obj.parents('.methods');box.find('.dropdown-menu').html('<li style="padding-left:15px;"><img src="'+window.site_config.pub+'/static/images/load1.gif" style="width:12px;vertical-align:middle;"></li>');$.ajax({type:'GET',url:ulink('Mystore/funcAppOp?op=detail'),dataType:'json',data:{id:id},success:function(data){if(data.code&&data.data){var methods=data.data.methods;var html='';for(var i in methods){html+='<li><a href="javascript:;">'+i+'：'+methods[i].comment+'</a></li>'}
if(!html){html='<li><a href="javascript:;">无方法</a></li>'}
box.find('.dropdown-menu').html(html)}}})});$('#auto_check').bind('click',function(){var auto=$(this).is(':checked')?1:0;$.ajax({type:"GET",url:ulink('Mystore/funcAppOp?op=auto_check&auto='+auto),dataType:"json",success:function(data){data.code==1?toastr.success(data.msg):toastr.error(data.msg)}})});if($('#auto_check').is(':checked')){check_funcapp_update()}}
function check_funcapp_update(){var ids=new Array();$('#list_table').find('tr[data-app-id]').each(function(){ids.push($(this).attr('data-app-id'))});if(ids.length>0){$('.nav-check-update a').html('<img src="'+window.site_config.pub+'/static/images/load1.gif"> 正在检测更新');$('.store-info').find('.has-update').remove();$.ajax({type:"get",url:ulink('Mystore/funcAppOp?op=check_store_update'),dataType:"json",async:!0,data:{ids:ids},success:function(data){if(data.code==1){for(var id in data.data){var storeInfo=$('tr[data-app-id="'+data.data[id]+'"]').find('.store-info');storeInfo.append('<div class="has-update"><span class="glyphicon glyphicon-exclamation-sign"></span>有更新</div>')}}},complete:function(){$('.nav-check-update a').html('检测更新')}})}}