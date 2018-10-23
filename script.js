function preloader() {
	if (document.images) {
		var img1 = new Image();
		var img2 = new Image();
		var img3 = new Image();
		img1.src = "setting_game.jpg";
		img2.src = "setting_yard.jpg";
		img3.src = "setting_gym.jpg";
	}
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
addLoadEvent(preloader);

document.getElementById("apps").onscroll = function() {devBG()};
function devBG() {
	var appsWidth = document.getElementById("apps").scrollWidth;
    if (document.getElementById("apps").scrollLeft < 0.135 * appsWidth) {
        document.getElementById("developer").style.background = 'url("setting_game.jpg") no-repeat center center';
    } else if (document.getElementById("apps").scrollLeft < 0.405 * appsWidth) {
        document.getElementById("developer").style.background = 'url("setting_yard.jpg") no-repeat center center';
    } else {
    	document.getElementById("developer").style.background = 'url("setting_gym.jpg") no-repeat center center';
    }
    document.getElementById("developer").style.backgroundSize = "cover";
}