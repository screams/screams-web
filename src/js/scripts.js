var safeColors = ['00','33','66','99','cc','ff'];
var rand = function() {
    return Math.floor(Math.random()*6);
};
var randomColor = function() {
    var r = safeColors[rand()];
    var g = safeColors[rand()];
    var b = safeColors[rand()];
    return "#"+r+g+b;
};

$(document).ready(function(){
	$("#food, #wildlife, #science, #narendramodi").css("display","none");
	$("[id^='statusCount_']").click(function(){
		var id = $(this).attr("id");
		var statusId = id.slice(12);
		var poorCount = parseInt($("#poor_"+statusId).text());
		var countIncrement =poorCount+1;
		$("#poor_"+statusId).text(countIncrement);
		var parentId = $("#poor_"+statusId).parent().attr("id");
		
		if((poorCount>=110) && (poorCount<=120)){
			$("#poor_"+statusId).parent().css( "background", "#0D7DA8" );
			$("#poor_"+statusId).parent().css( "border", "1px solid #0D7DA8" );
			$("#statusText_"+statusId).text("Good");
		}else if((poorCount>=121) && (poorCount<=125)){
			$("#poor_"+statusId).parent().css( "background", "#00AA36" );
			$("#poor_"+statusId).parent().css( "border", "1px solid #00AA36" );
			$("#statusText_"+statusId).text("V. Good");
		}		
	});
		
	$("[id^='screamContent_']").mouseover(function (event) {	
		var contentId = $(this).attr("id");
		var actualId = contentId.slice(14);				
		//$("#screamActions").fadeOut(1000);
		//$("#screamActions").slideDown(1000);
		$("#screamActions_"+actualId).css("display","block");
		event.preventDefault();
	}).mouseout(function() {
		var contentId = $(this).attr("id");
		var actualId = contentId.slice(14);
		//$("#screamActions").slideUp(1000);
		//$("#screamActions").fadeIn(1000);
		$("#screamActions_"+actualId).css("display","none");			
	});
	
	$("[id^='screamContent_']").click(function (event) {        
		var actualId = $(this).attr("id");
		var screamId = actualId.slice(14);
		
		var screamHead = $("#"+actualId).find("h4").text();
		displayScreams(screamHead);
		var bgColor = $("#"+actualId).css("border-left-color");		
		$(".topHeader").css("background",bgColor);
		
		event.preventDefault();
    });
	
	$("[id^='myScreams_']").click(function (event) {        
		var actualId = $(this).attr("id");
		var screamHead = $("#"+actualId).text();
		
		var screamHead = $("#"+actualId).text();
		displayScreams(screamHead);		
		event.preventDefault();
    });
	
});

function displayScreams(screamHead){
	$(".topMenu ul li").css("border","0px");
	if(screamHead == "#food"){
		$("#myScreams, #wildlife, #science, #narendramodi").css("display","none");
		$("#food").css("display","block");
		$(".topHeader").css("background","#948F08");
		$("#myScreams_2").css("border-bottom","6px solid #FFF");
		$("#myScreams_2").css("padding-bottom","0.5%");
	}else if(screamHead == "#wildlife"){
		$("#myScreams, #food, #science, #narendramodi").css("display","none");
		$("#wildlife").css("display","block");
		$(".topHeader").css("background","#CA322D");
		$("#myScreams_3").css("border-bottom","6px solid #FFF");
		$("#myScreams_3").css("padding-bottom","0.5%");
	}else if(screamHead == "#science"){
		$("#myScreams, #food, #wildlife, #narendramodi").css("display","none");
		$("#science").css("display","block");
		$(".topHeader").css("background","#0A5264");
		$("#myScreams_4").css("border-bottom","6px solid #FFF");
		$("#myScreams_4").css("padding-bottom","0.5%");		
	}else if(screamHead == "#narendramodi"){
		$("#myScreams, #food, #wildlife, #science").css("display","none");
		$("#narendramodi").css("display","block");
		$(".topHeader").css("background","#FF64A8");
		$("#myScreams_5").css("border-bottom","6px solid #FFF");
		$("#myScreams_5").css("padding-bottom","0.5%");
	}else{
		$("#food, #wildlife, #science, #narendramodi").css("display","none");
		$("#myScreams").css("display","block");
		$(".topHeader").css("background","#CA322D");
		$("#myScreams_1").css("border-bottom","6px solid #FFF");
		$("#myScreams_1").css("padding-bottom","0.5%");
	}		
}