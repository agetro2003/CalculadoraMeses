function calcular(){
    var meses = document.getElementById("meses").value;
    var dolares = document.getElementById("dolares").value
    var resultado = document.getElementById("resultado");
let resta = meses * 1;
let total = 0



for (let i = 0; i <meses ; i++) {
total+= resta; 
console.log(resta);
console.log(total);
resta --;

}

let multiplicacion = dolares * total * 0.0125
resultado.innerHTML = `<h1> Los meses totales son ${total} </h1>
<h1> ${total} x ${dolares} x 0.0125 = ${multiplicacion} $ </h1>`


}





