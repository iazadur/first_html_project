$(window).scroll(function(){
	if($(this).scrollTop()>300) {
		$("#gotoup").fadeIn();
	} else{
		$("gotoup").fadeIn();
	}
});
$("#gotoup").click(function(){
	$("html, body").animate({scrollTop:0}, 3000);
});