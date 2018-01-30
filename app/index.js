function celsius(degree) {
    var x;
    x = document.getElementById("c").value;
    if (isNaN(x)) {
        document.getElementById("error").innerHTML = "Warning! '" + x + "' Is not a number!";
    } else
        x = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(x);   
}

function fahrenheit(degree) {
    var x;
    x = document.getElementById("f").value;
    if (isNaN(x)) {
        document.getElementById("error").innerHTML = "Warning! '" + x + "' Is not a number!";
    } else
    x = (document.getElementById("f").value -32) * 5 / 9;
    document.getElementById("c").value = Math.round(x);
}