
updateView()
function updateView(){
document.getElementById("app").innerHTML = /*html*/`
    
<h1>Pioner foodservice</h1>


<input type="text" onchange="inPut(this.value)">
    <button onclick="addItem()">add to cart</button>
<ul>${outPut()}</ul>




`;
}

function outPut(){
   // Her har jeg laget en ny lokal variabel som skal kun brukes innenfor
   // denne funskjonen, denne løkken.
   let viewBasket = "";
    for(let i = 0; i < food.length; i++){
    viewBasket += `<li>${food[i]}</li>`;
 console.log(i);   
}
// vi returnerer viewBasket tilbake til start med en ny verdi.
return viewBasket
}
 