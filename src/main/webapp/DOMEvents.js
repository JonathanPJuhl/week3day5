var domNodes =document.getElementsByTagName("div");
window.onload = function(){
    var i;
    for(i=0; i<domNodes.length; i++){
        domNodes[i].style.backgroundColor="red";
    }
}

document.getElementById("btn").onclick = function (){
    document.getElementById("1").style.backgroundColor="blue";
    document.getElementById("2").style.backgroundColor="green";
    document.getElementById("3").style.backgroundColor="black";

}