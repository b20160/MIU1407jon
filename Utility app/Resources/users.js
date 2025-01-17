
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
 
var username = Ti.UI.createTextField({
    color:'#336699',
    top:10,
    left:10,
    width:300,
    height:40,
    hintText:'Username',
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
 
var password1 = Ti.UI.createTextField({
    color:'#336699',
    top:60,
    left:10,
    width:300,
    height:40,
    hintText:'Password',
    passwordMask:true,
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
 
var password2 = Ti.UI.createTextField({
    color:'#336699',
    top:110,
    left:10,
    width:300,
    height:40,
    hintText:'Password Again',
    passwordMask:true,
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
 
var names = Ti.UI.createTextField({
    color:'#336699',
    top:160,
    left:10,
    width:300,
    height:40,
    hintText:'Name',
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
 
var email = Ti.UI.createTextField({
    color:'#336699',
    top:210,
    left:10,
    width:300,
    height:40,
    hintText:'email',
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
 
var createBtn = Ti.UI.createButton({
    title:'Create Account',
    color: "white",
    top:260,
    width:130,
    height:35,
    borderRadius:1,
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});

createBtn.addEventListener("click", function(){
alert("Your account as been created an email validation as been sent");
});
scrollView.add(createBtn,email,names,password1,password2,username);
currentWindow.add(scrollView);