$(document).ready(function(){	
	/*$('#slider1') .cycle({
		fx: 'fade', //'scrollLeft,scrollDown,scrollRight,scrollUp',blindX, blindY, blindZ, cover, curtainX, curtainY, fade, fadeZoom, growX, growY, none, scrollUp,scrollDown,scrollLeft,scrollRight,scrollHorz,scrollVert,shuffle,slideX,slideY,toss,turnUp,turnDown,turnLeft,turnRight,uncover,ipe ,zoom
		speed:  'slow', 
   		timeout: 2000 
	});*/
	
	var screemsRed= $("#screemsBarRight1, #screemsBarRight1, #screemsBarRight3, #screemsBarRight4").height()+"px";
	$(".screemsBarLeft1, .screemsBarLeft2, .screemsBarLeft3, .screemsBarLeft4").css("height",screemsRed);
});