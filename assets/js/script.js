const CURRENT_NUMBER_WRAPPER = document.getElementById("currentNumber");

let contador = 0;

let adicionar = document.getElementById("adicionar");

let subtrair = document.getElementById("subtrair");

function increment() {
        contador++
        CURRENT_NUMBER_WRAPPER.innerHTML = contador;
        if ((contador >= 0)) {        
            CURRENT_NUMBER_WRAPPER.style.color = "#fff"
        } if (contador === 10) {
            alert("Você clicou muito")
            contador = 0
        }
}

function decrement() {
    contador--;
    CURRENT_NUMBER_WRAPPER.innerHTML = contador;
    if (contador < 0) {
        CURRENT_NUMBER_WRAPPER.style.color = "#f00"
    }
}


adicionar.addEventListener("click",increment)
subtrair.addEventListener("click",decrement)
