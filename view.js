updateView()
function updateView(){
document.getElementById("app").innerHTML = /*html*/`
    
<h1>Pioner foodservice</h1>


<input type="text" onchange="inPut(this.value)">
    <button onclick="outPut()">add to cart</button>
<ul>${viewBasket}</ul>




`;
}

 