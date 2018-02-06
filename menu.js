document.getElementById("openButton").addEventListener("click",function(){
    document.getElementById("menu").style.left="0px";
});
document.getElementById("closeButton").addEventListener("click",function(){
    document.getElementById("menu").style.left="-110px";
});
document.getElementById("BGbutton").addEventListener("click",function(){
    document.getElementById("bg").style.backgroundImage="url(imgs/i1.jpg)";
});
document.getElementById("resetbutton").addEventListener("click",function(){
    document.getElementById("bg").style.backgroundImage="none";
});
document.getElementById("showbutton").addEventListener("click",function(){
    document.getElementById("app1").style.display="block";
});
document.getElementById("hidebutton").addEventListener("click",function(){
    document.getElementById("app1").style.display="none";
});
var num1 = 0;
var num2 =0;
document.getElementById("zoom+").addEventListener("click",function(){
    num1 = num1 + 10;
    num2 = num2 +7;
    document.getElementById("zoom").style.width = num1+"%";
    document.getElementById("zoom").style.height =num2+"%";
});
document.getElementById("zoom-").addEventListener("click",function(){
    var num3 = num3 - 10;
    var num4 = num4 -7;
    document.getElementById("zoom").style.width = num3+"%";
    document.getElementById("zoom").style.height = num4+"%";
});