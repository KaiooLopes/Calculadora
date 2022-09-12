const $display = document.querySelector(".input")

let numeros = document.querySelectorAll(".numeros")
let arrNumeros = Array.from(numeros)
let n1
let n2
let clicado = false
let simbolo
arrNumeros.forEach(numero => {
    numero.addEventListener("click", function(){
        if(!simbolo){
            if(!clicado){
                $display.innerHTML = numero.innerHTML
                clicado = true
            }else{
                $display.innerHTML += numero.innerHTML
            }
            n1 = $display.innerHTML
        } else{
            if(!clicado){
                $display.innerHTML = numero.innerHTML
                clicado = true
            }else{
                $display.innerHTML += numero.innerHTML
            }
            n2 = $display.innerHTML
        }
    })
})
const symbol = document.querySelectorAll(".symbol")
let arrSymbol = Array.from(symbol)
arrSymbol.forEach(symbol => {
    symbol.addEventListener("click", function(){
        if(!n1 && n1 !== 0) return;
        simbolo = symbol.getAttribute("symbol")
        console.log(simbolo)
        if((n1 || n1 === 0) && n2 && simbolo){
            somar()
        }
        clicado = !clicado
    })
})

const igual = document.querySelector(".igual")
igual.addEventListener("click", function(){
    if(!n1 || !n2){
        return;
    }else{
        somar();
    }
})

const limpar = document.querySelector(".limpar")
limpar.addEventListener("click", function(){
    n1 = ""
    n2 = ""
    clicado = false
    simbolo = ""
    $display.innerHTML = "0"
})

function somar(){
    switch(simbolo){
        case "+":
            n1 = parseFloat(n1) + parseFloat(n2)
            break
        case "-":
            n1 = parseFloat(n1) - parseFloat(n2)
            break
        case "*":
            n1 = parseFloat(n1) * parseFloat(n2)
            break
        case "/":
            n1 = parseFloat(n1) / parseFloat(n2)
        }
    $display.innerHTML = n1
    n2 = ""
    console.log(n1)
}