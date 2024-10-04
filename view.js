
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
   
   let viewBasket = "";
    for(let i = 0; i < food.length; i++){
    viewBasket += `<li>${food[i]}</li>`;
 console.log(i);   
}

return viewBasket
}
 