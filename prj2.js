function show1(){
    var celcius = document.getElementById("c").value;

    var tofarenheit = (celcius * 9/5) + 32;

    document.getElementById("p1").innerHTML = tofarenheit;

}

function show2(){
    var farenheit = document.getElementById("f").value;

    var tocelcius = (farenheit - 32) * 5/9;

    document.getElementById("p4").innerHTML = tocelcius;
}