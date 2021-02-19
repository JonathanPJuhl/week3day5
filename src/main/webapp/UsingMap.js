//Question a and b
let data = document.getElementById("data")

const names = [];
document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();

    let b = document.getElementById("text").value;



    names.push(b);
    function makeUl(names) {

        const list = names.map(function (names) {
            return `<li> ${names} </li>`
        })
        console.log(list);
        const joinedResult = list.join("");
        data.innerHTML = joinedResult;
    }
    makeUl(names);

})
//Question c
document.getElementById("first").addEventListener("click", function (){
    names.shift();
    function makeUl1(names) {

        const list = names.map(function (names) {
            return `<li> ${names} </li>`
        })
        console.log(list);
        const joinedResult = list.join("");
        data.innerHTML = joinedResult;
    }
    makeUl1(names);
})
document.getElementById("last").addEventListener("click", function (){
    names.pop();
    function makeUl3(names) {

        const list = names.map(function (names) {
            return `<li> ${names} </li>`
        })
        console.log(list);
        const joinedResult = list.join("");
        data.innerHTML = joinedResult;
    }
    makeUl3(names);
})

//Map and Filter section
var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
updateTableHTML(cars);
function updateTableHTML(myArray) {
    var tableBody = document.getElementById("table");

    // Reset the table
    tableBody.innerHTML = "";

    // Build the new table
    myArray.forEach(function(row) {
        var newRow = document.createElement("tr");
        tableBody.appendChild(newRow);

        if (row instanceof Array) {
            row.forEach(function(cell) {
                var newCell = document.createElement("td");
                newCell.textContent = cell;
                newRow.appendChild(newCell);
            });
        } else {
            newCell = document.createElement("td");
            newCell.textContent = row;
            newRow.appendChild(newCell);
        }
    });
}
