Ti.include("JSON.js");

var currentWindow = Ti.UI.currentWindow;

//Views
var View = Ti.UI.createView({
	backgroundImage:"Images/Menu/Black.jpg",
	height: "121%"
});

var textView = Ti.UI.createView({
	backgroundColor: "#white",
	height: 65,
	top: 0	
});

var Border = Ti.UI.createView({
	backgroundColor: "black",
	height: 0,
	top: textView.height + textView.top	
});

var image = Ti.UI.createImageView({
image:"Images/Lakers/Lakers.gif",
zIndex: 1,
bottom:"0%"
});

var buttonImage = Ti.UI.createImageView({
image: "Images/Button/Background.png",
top: 10,
left: "62%",
width: "60%",
height: "50%"
});

//Labels
var Text = Ti.UI.createLabel({
	text: Lakers[0],
	font: {fontSize: 15, fontFamily: "Arial"},
	color: "white",
	top: textView.height + Border.top - 50,
	left: 15,
	right: 15,
	zIndex: 2
});

//Button
var button = Titanium.UI.createButton({
   title: 'Next',
   top: 17,
   left: 57,
  // width: 100,
   //height: 50,
   color: " red",
   
});

var buttonImage2 = Ti.UI.createImageView({
	image: "Images/Button/Background.png",
	top: 10,
	right: "50%",
	width: "60%",
	height: "50%"
});

var button2 = Titanium.UI.createButton({
   title: 'Home',
   top: 17,
   right: "51%",
   color: " red",
   
});

var loadHome = function(){
	var loadfile = Ti.UI.createWindow({
		title:"Teams",
		url:"app.js",
		nav: currentWindow.nav
	});
	currentWindow.nav.openWindow(loadfile);
};

button2.addEventListener("click",loadHome);
buttonImage2.add(button2);

//Functions//
var loadNext = function(){
	var loadfile = Ti.UI.createWindow({
		title:"Wilt arrives",
		url:"Laker2.js",
		nav: currentWindow.nav
	});
	currentWindow.nav.openWindow(loadfile);
};

//EventListener//
button.addEventListener("click",loadNext);

buttonImage.add(button);
currentWindow.add(View,Text,buttonImage,image,buttonImage2);
