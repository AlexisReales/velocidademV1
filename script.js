let x = document.querySelector("#x");
let y = document.querySelector("#y");
let velocidadem = document.querySelector("#velocidadem");

let btncalcular = document.querySelector("#calcular");

btncalcular.addEventListener('click',calcular)

function calcular(){
    velocidadem.value = (x.value / y.value).toFixed(2)
}