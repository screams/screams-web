$(function(){
	$('.tab-section').hide();	
	$('#tabs a').bind('click', function(e){
		var sel_url = this;
		//alert(sel_url);
		enableTabs(sel_url);
		e.preventDefault();	
	}).filter(':first').click();
});

function enableTabs(sel_url){
	$('#tabs a.current').removeClass('current');
	$('.tab-section:visible').hide();
	$(sel_url.hash).show();
	$(sel_url).addClass('current');
}