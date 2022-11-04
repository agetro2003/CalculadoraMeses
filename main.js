function calcular(){
    var meses = document.getElementById("meses").value;
    var resultado = document.getElementById("resultado");
let resta = meses * 1;
let total = 0



for (let i = 0; i <meses ; i++) {
total+= resta; 
console.log(resta);
console.log(total);
resta --;

}
resultado.innerHTML = `<h1> El resultado es ${total} </h1>`

}





