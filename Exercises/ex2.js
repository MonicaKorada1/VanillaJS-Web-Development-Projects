var sel = document.querySelector("button");
var bod = document.querySelector("body");
var isRed = true;

sel.addEventListener("click",function(){
	if(isRed)
		bod.style.background="red";
	else
		bod.style.background="white";
	isRed=!isRed;
});