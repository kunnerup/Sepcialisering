//Herfra starter udregningen af drikkepenge
function udregn() {
    var kroner = document.getElementById("kroner").value;
    var land = document.getElementById("land").value;
    var kvalitet = document.getElementById("kvalitet").value;

    //Hvis alle oplysninger ikke tastes
    if (kroner === "" || land === 0 || kvalitet === 0) {
        alert("Udfyld venligst alle felter.");
        return;
    }

    //Selve udregningen
    var total = kroner * land * kvalitet;


     //round to two decimal places
  total = Math.round(total * 100) / 100;

    //Vis drikkepengene
    document.getElementById("tipbelob").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}


document.getElementById("regnformig").onclick = function () {
    udregn();
};

//Navn og forfatter OBJEKT
var course = new Object();

var course = {
    Tittel: "JavaScript - det grundlæggende",
    Forfatter: "Anders Kunnerup",
}
console.log(course.Tittel);
console.log("af " + course.Forfatter);



//ARRAYS MED FRUGTER, SORTERING OG INDSÆTTELSE
var fruits = ['Æble', 'Banan', 'Pære'];
console.log(fruits);

function frugt() {
    fruits.sort();
    console.log(fruits)
}

function frugt2() {
    fruits.sort();
      document.getElementById("tipsi").innerHTML = fruits;
}
