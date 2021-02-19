//Question 1
const name = ["Lars", "Jan", "Bo", "Peter", "Mogens"];
function makeUl(name){
    const list = name.map(function (name){
        return `<li> ${name} </li>`
    })
    const joinedResult = list.join("");

    return joinedResult;
}
const result = makeUl(name);
console.log(result)

/*document.getElementById("btn").onclick = function(){
    fetch("/api/movie/all")
        .then(res=>res.json())
        .then(data=> {
            const list = makeUl(data)
            document.getElementById("data").innerHTML=list;
        })

}*/
/*document.querySelector(".btn").addEventListener("toggle", function(){
    fetch("/api/movie/all")
        .then(res=>res.json())
        .then(data=> {
            const list = makeUl(data)
            document.getElementById("data").innerHTML=list;
        })})*/
/*var buttonNode = document.getElementById("btn");
buttonNode.addEventListener("toggle", function(){
    fetch("/api/movie/all")
        .then(res=>res.json())
        .then(data=> {
            const list = makeUl(data)
            document.getElementById("data").innerHTML=list;
})})*/
/*document.getElementById("btn").addEventListener("toggle",   function(){
    fetch("/api/movie/all")
        .then(res=>res.json())
        .then(data=> {
            const list = makeUl(data)
            document.getElementById("data").innerHTML=list;
        })

})*/
