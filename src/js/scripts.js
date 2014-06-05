$(document).ready(function(){	
	screemsHeight();
	
	$(window).resize(function(){
		screemsHeight();
	});
	
	
	
	$("[id^='screem_']").click(function (event) {		//My experiment link expand/collapse 	
		$('#tabs a.current').removeClass('current');	//Remove Class for active tab.
		$('.tab-section:visible').hide();				//Hide body content of active tab
		var id = "#"+this.id;
		var selectedScreemId= id.slice(8);	
		
		var bgColor = $(id).css("background");
		
		var liId = "selected_text_"+selectedScreemId;
		var spanId = "close_tab_"+selectedScreemId;
		var hrefId = "#feed_"+selectedScreemId;
		var selectedLiId = "feed_"+selectedScreemId;
		var feedData = "feedContainer_"+selectedScreemId;
		var screemTitle = "Sports";
		var screemData = "<h1>Selected Screem</h1>";		
		
		//var lielement = "<li id='newTab_"+selectedScreemId+"' onmouseover='showCloseTab(id);' onmouseout='hideCloseTab(id);'><a href='"+hrefId+"' class='current' id='"+selectedLiId+"'><span  id='"+liId+"' onmouseover='showCloseTab(id);'  onclick='setExperimentTabSelection(id,event);'>"+screemTitle+"</span>&nbsp;&nbsp;<span id='"+spanId+"' onclick='closeTab(id,event);' class='display:none;'><img src='images/close_tab.png' alt='' style='vertical-align:middle;'></span></a></li>";
		var lielement = "<li id='newTab_"+selectedScreemId+"'><a href='"+hrefId+"' class='current' id='"+selectedLiId+"'><span  id='"+liId+"' onmouseover='showCloseTab(id);'  onclick='setExperimentTabSelection(id,event);'>"+screemTitle+"</span>&nbsp;&nbsp;<span id='"+spanId+"' onclick='closeTab(id,event);' class='display:none;'><img src='images/close_tab.png' alt='' style='vertical-align:middle;'></span></a></li>";
		$("#tabs").append(lielement);
		
		$("#"+selectedLiId).css("background", bgColor);
		$("#"+selectedLiId).css("color", "#FFF");
		$("#topHeader").css("background", bgColor);
		$("#topHeader").css("color", "#FFF");
		
		var tab_container = '<div id="feed_'+selectedScreemId+'" class="tab-section" style="display:block;"><div id="'+feedData+'"></div><div class="clear"></div></div>';
		$("#tabControl").append(tab_container);
		
		var feedDataId = "#"+feedData;		
		
		$(feedDataId).append(screemData);	
		
		event.preventDefault();
	});
	
	
	/*$('#Img1').mouseover(function () {
		$(this).animate({ width: "500px", height: "300" }, 100);
	}).mouseout(function(){
		$(this).animate({ width: "300px", height: "110px" }, 100);
	});*/
	
	$("#screem_1").mouseover(function()
	{
		$("#showControls").css("display","block");
		$("#showControls").animate({ left: '0' },350);
		$("#screemsBarRight1").css("width","79%");
	}).mouseout(function()
	{
		$("#showControls").css("display","none");
		$("#showControls").animate({ left: '-11px' },350);
		$("#screemsBarRight1").css("width","99%");
	});	
	
	$("#screemsBarRight1").mouseover(function(){
		$("#screemsControls1").css("display","block");
	}).mouseout(function(){
		$("#screemsControls1").css("display","none");
	});		
});

$(window).load(function(){
	screemsHeight();
});

function showCloseTab(id){
	var tabId = id.slice(7);
	$("#close_tab_"+tabId).css("display","block");	
}

function hideCloseTab(id){
	var tabId = id.slice(7);
	$("#close_tab_"+tabId).css("display","none");
}

function screemsHeight(){

	var imgHeight = $("#screemsBarRight31").height()+"px";
	
	$("#screem_3").css("height",imgHeight);

	var screemsHeight= $("#screemsBarRight1, #screemsBarRight1, #screemsBarRight4").height();	
	if(navigator.userAgent.search("Chrome") >= 0){
		var selHeight = parseInt(screemsHeight)+2+"px";
	}else{
		var selHeight = screemsHeight+"px";
	}	
	$(".screemsBarLeft1, .screemsBarLeft2, .screemsBarLeft4").css("height",selHeight);
}

function setExperimentTabSelection(id, event){	
	var selected_tab = "#"+id;
	$("#tabs li a").removeClass("current");
	$(selected_tab).parent().addClass("current");
	$('.tab-section:visible').show();
	var section_element_no = id.slice(14);
	var section_element_id = "#feed_"+section_element_no;
	$(section_element_id).css("display",'block');
	$(section_element_id).show();
	event.preventDefault();
}

function closeTab(id, event){	//Close selected tab.
	var tabid="#"+id;
	var tab_container_no = tabid.slice(11);	
	var tab_container_id = "#feed_"+tab_container_no;
	var current_tab = $(tabid).parent().hasClass('current');
	if(!current_tab)	// The tab is not active
	{
		$(tabid).parent().parent().remove();
		$(tab_container_id).remove();
		event.preventDefault();
	}
	var prev_li_id = "#"+$(tabid).parent().parent().prev().children().children()[0].id;
	$(tabid).parent().parent().remove();
	var prevTab_id = "#"+$(tab_container_id).prev()[0].id;
	$(tab_container_id).remove();
	$(prev_li_id).parent().addClass("current");
	$(prevTab_id).show();  //tab_section show
	event.preventDefault();
}
