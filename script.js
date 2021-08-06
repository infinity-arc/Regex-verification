/*
h1 -> heading/title
section -> form section
capForm -> form location
form -> labels and input
prodNameVal/venNumVal -> target
id -> target location
placeholder -> input required
value -> input
pattern -> validation test
oninvalid -> hint/required format 
result -> validation
submit -> finalize input
script -> javaScript source
*/

const prodNameVal = document.getElementById("prodName");
prodNameVal.addEventListener('change', function(event) {
    const value = event.target.value;
    const result = value.match(prodReg);
})

const venNumVal = document.getElementById("venNum");
venNumVal.addEventListener('change', function(event) {
    const value = event.target.value;
    const result = value.match(venReg);
})

const subBtn = document.getElementById('submit');
// subBtn.addEventListener('submit', function(event) {
//     event.preventDefault();
// })