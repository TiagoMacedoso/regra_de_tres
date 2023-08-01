const html = document.querySelector("html")
const modal = document.querySelector("dialog")
const btn_close_modal = document.querySelector("#close_modal")
const btn_calc = document.querySelector("#btn_calc")
const body_modal = document.querySelector(".body_modal")
const n1 = document.querySelector("#n1")
const n2 = document.querySelector("#n2")
const n3 = document.querySelector("#n3")

let valor1 = 0
let valor2 = 0
let valor3 = 0

document.addEventListener("keypress", function(e) {
    if(e.key === "Enter") btn_calc.click()
})

btn_close_modal.onclick = () => {
    modal.close()
}

btn_calc.onclick = () => {
    modal.showModal()

    validar()
}

function validar(){
    valor1 = n1.value
    valor2 = n2.value
    valor3 = n3.value

    if (valor1 == "" || valor1 == null || valor1 == undefined) error_input("1")
    else if(valor2 == "" || valor2 == null || valor2 == undefined) error_input("2")
    else if(valor3 == "" || valor3 == null || valor3 == undefined) error_input("3")
    else if(valor1 == 0 || valor2 == 0 || valor3 == 0) {
        body_modal.innerHTML = `
        <div class="error">
            <h1>A divisão por 0 é impossível!</h1>

            <p>Por tanto, não informe valores com 0.</p>
        </div>
        `
    }
    else calcular()
}

function calcular(){
    let multiplicacao = valor2 * valor3
    let resultado = multiplicacao / valor1

    body_modal.innerHTML = `
    <div class="process">
        <p>${valor1}.x = ${valor3}.${valor2}</p>
        <p>${valor1}.x = ${multiplicacao}</p>
        <p>x = ${multiplicacao}/${valor1}</p>
        <p>x = ${resultado}</p>
    </div>

    <div class="result">
        <h1>O valor final de X é: ${resultado}</h1>
    </div>
    `
}

function error_input(var_error){
    body_modal.innerHTML = `
    <div class="error">
        <h1>Ocorreu um erro no valor da variável ${var_error}.</h1>

        <p>Por gentileza informe todos os valor antes de tentar calcular!</p>
    </div>
    `
}