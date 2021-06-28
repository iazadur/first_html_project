var imageCount = 1;
var total = 4;


 
var time = window.setInterval(function photoA() {    // just addign the sunction to the variable so you can target it.
	var image = document.getElementById('image');
	imageCount = imageCount + 1;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "img/img"+ imageCount +".jpg";
	},4000);

