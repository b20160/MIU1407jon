//Window
var mainWindow = Ti.UI.createWindow({
});

//Navigation//
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow,	
});

//Views
var imageView = Ti.UI.createView({
	backgroundImage:"Images/Menu/Black.jpg",
	height: "121%",	
	zIndex: 1
});

var splashView = Ti.UI.createView({
	backgroundImage:"Images/Splash/background.jpg",
	zIndex: 2
});
var splash = Ti.UI.createImageView({
	image: "Images/Splash/Players.png",
	zIndex: 1,
	width: "100%",
	top: "18.7%",
	
});

var splash2 = Ti.UI.createImageView({
	image: "Images/Splash/nba_logo_110421.jpg",
	zIndex: 2,
	top: "67%",
	width:"100%",
	
});

//Images
var Miami = Ti.UI.createImageView({
	Image:"Images/Miami/MiamiTitle.png",
	top:"2%",
	width: "200%",
	height: "100%",
	left: "-95"
});

var Lakers = Ti.UI.createImageView({
	Image:"Images/Lakers/LakersTitle.png",
	top:"19%",
	width: "200%",
	height: "100%",
	left: "-95"
});

var Celtics = Ti.UI.createImageView({
	Image:"Images/Boston/Boston.png",
	top:"37%",
	width: "200%",
	height: "100%",
	left: "-95"
});

var Knicks = Ti.UI.createImageView({
	Image:"Images/Knicks/KnicksTitle.png",
	top:"55%",
	width: "200%",
	height: "100%",
	left: "-95"
});

var Bulls = Ti.UI.createImageView({
	Image:"Images/Bulls/Bulls.png",
	top:"73%",
	width: "200%",
	height: "100%",
	left: "-95"
});

//Functions//
var loadWin1 = function(){
	var loadfile = Ti.UI.createWindow({
		title: "Franchise History",
		url:"MainWindow.js",
		nav: navWindow
	});
	navWindow.openWindow(loadfile);
};

var loadWin2 = function(){
	var loadfile = Ti.UI.createWindow({
		title: "Franchise History",
		url:"MainWindow2.js",
		nav: navWindow
	});
	navWindow.openWindow(loadfile);
};

var loadWin3 = function(){
	var loadfile = Ti.UI.createWindow({
		title: "Franchise History",
		url:"MainWindow3.js",
		nav: navWindow
	});
	navWindow.openWindow(loadfile);
};

var loadWin4 = function(){
	var loadfile = Ti.UI.createWindow({
		title: "Franchise History",
		url:"MainWindow4.js",
		nav: navWindow
	});
	navWindow.openWindow(loadfile);
};

var loadWin5 = function(){
	var loadfile = Ti.UI.createWindow({
		title: "Franchise History",
		url:"MainWindow5.js",
		nav: navWindow
	});
	navWindow.openWindow(loadfile);
};

//EventListeners
Miami.addEventListener("click",loadWin1);
Lakers.addEventListener("click",loadWin2);
Celtics.addEventListener("click",loadWin3);
Knicks.addEventListener("click",loadWin4);
Bulls.addEventListener("click",loadWin5);

//Splash//
var startupAnimation = Titanium.UI.createAnimation({
    curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT,
    opacity: 1,
    duration: 3000,
    delay: 1500
});

//EventListeners
startupAnimation.addEventListener('complete', function() {
    Ti.API.log('Completed');
    splashView.animate({ 
        curve: Ti.UI.ANIMATION_CURVE_EASE_IN_OUT, 
        opacity: 0, 
        duration: 4000
    });
});

//startupAnimation.addEventListener("complete",loadWin);
splashView.animate(startupAnimation);

splashView.add(splash,splash2);
imageView.add(Miami,Lakers,Celtics,Knicks,Bulls);
mainWindow.add(imageView,splashView);
navWindow.open();