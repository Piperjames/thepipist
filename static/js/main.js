$(function(){
	$(document).ajaxStart(function(){
		$('.title img').show();
	});
	$(document).ajaxStop(function(){
		$('.title img').hide();
	});
	
});
