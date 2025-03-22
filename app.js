var redLight = document.getElementById("red");
var yellowLight = document.getElementById("yellow");
var greenLight = document.getElementById("green");

function reset() {
    redLight.classList.remove("red");
    yellowLight.classList.remove("yellow");
    greenLight.classList.remove("green");
}

function red_lig() {
    reset();
    redLight.classList.add("red");

}

function yellow_lig() {
    reset();
    yellowLight.classList.add("yellow");
}

function green_lig() {
    reset();
    greenLight.classList.add("green");
}
