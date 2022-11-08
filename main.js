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

let multiplicacion = dolares * total * 1.25
resultado.innerHTML = `<h1> El resultado es ${total} </h1>
<h1> ${total} x ${dolares} x 1.25 = ${multiplicacion} </h1>`


}





