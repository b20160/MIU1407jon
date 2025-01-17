Ti.include("Json.js");
var currentWindow = Titanium.UI.currentWindow;

var scrollView = Ti.UI.createScrollView({
    contentWidth:'auto',
    contentHeight:'auto',
    top:0,
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:false,
    zIndex: 1,
    backgroundImage: "Images/smoke.jpg"
});
 
var username = Titanium.UI.createTextField({
    color:"#336699",
    top:10,
    left:10,
    width:300,
    height:40,
    hintText:"Username",
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
});

 
var password = Titanium.UI.createTextField({
    color:"#336699",
    top:60,
    left:10,
    width:300,
    height:40,
    hintText:"Password",
    passwordMask:true,
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
});

 
var loginBtn = Titanium.UI.createButton({
    title:"Login",
    color: "white",
    top:110,
    width:90,
    height:35,
    borderRadius:1,
    font:{fontFamily:"Arial",fontWeight:"bold",fontSize:14}
});

loginBtn.addEventListener("click",function(){
for(i=0, j=Login.length; i<j; i++){
if(username.value !== Login[i].user || password.value !== Login[i].pass){
alert("Either the username or password is incorrect");
break;
}
else{
alert("Welcome " + username.value);
break;
}
}
});
scrollView.add(loginBtn,username,password);
currentWindow.add(scrollView);