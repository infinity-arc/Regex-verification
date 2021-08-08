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