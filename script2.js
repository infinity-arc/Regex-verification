const prodNamePattern = "/^([A-Z]{3})[-]([0-9]{5})$/";
const venNumPattern = "/^\(([0-9]{3})\)[ ]([0-9]{3})[ ]([0-9]{4})$/ | /^[+]([0-9]{1,3})[ ]([0-9]{2})[ ]([0-9]{2})[ ]([0-9]{3})$/";

function ProdNameEvent(input, prodNamePattern) {
    if (input.match(prodNamePattern)) {
        return alert("Nice!")
    } else {
        alert("Please try this format: AAA-00000")
    }
}

const prodNameValid = document.getElementById('prodName');
prodNameValid.addEventListener('change', function(event) {
    const value = event.target.value;
});
ProdNameEvent();




// const venNoValid = document.getElementById('venNum');
// venNoValid.addEventListener('change', function(event) {

// })