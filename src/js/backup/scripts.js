$(document).ready(function(){
	$("#slideShow > .thumbDiv:gt(0)").hide();
			
	setInterval(function(){
		$("#slideShow > .thumbDiv:first")
			.fadeOut(1000)
			.next()
			.fadeIn(1000)
			.end()
			.appendTo("#slideShow");
	}, 3000);
	
	
	$('#slider1') .cycle({
		fx: 'fade', //'scrollLeft,scrollDown,scrollRight,scrollUp',blindX, blindY, blindZ, cover, curtainX, curtainY, fade, fadeZoom, growX, growY, none, scrollUp,scrollDown,scrollLeft,scrollRight,scrollHorz,scrollVert,shuffle,slideX,slideY,toss,turnUp,turnDown,turnLeft,turnRight,uncover,ipe ,zoom
		speed:  'slow', 
   		timeout: 2000 
	});
});