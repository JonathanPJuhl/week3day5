document.getElementById("1").addEventListener("click", function (){
    console.log("Hi from"+document.getElementById("1").id);
})
document.getElementById("2").addEventListener("click", function (){
    console.log("Hi from"+document.getElementById("2").id);
})
document.getElementById("outer").addEventListener("mouseover", function (e){
    let f= e.target;
    document.getElementById("p").innerText=f.id;
})