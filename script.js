const html = document.querySelector("html")
const modal = document.querySelector("dialog")
const btn_close_modal = document.querySelector("#close_modal")
const btn_calc = document.querySelector("#btn_calc")
const body_modal = document.querySelector(".body_modal")
const n1 = document.querySelector("#n1")
const n2 = document.querySelector("#n2")
const n3 = document.querySelector("#n3")

let value1 = 0
let value2 = 0
let value3 = 0

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
    value1 = n1.value
    value2 = n2.value
    value3 = n3.value

    if (value1 == "" || value1 == null || value1 == undefined) error_input("1")
    else if(value2 == "" || value2 == null || value2 == undefined) error_input("2")
    else if(value3 == "" || value3 == null || value3 == undefined) error_input("3")
    else if(value1 == 0 || value2 == 0 || value3 == 0) {
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
    let mult = value2 * value3
    let result = mult / value1

    body_modal.innerHTML = `
    <div class="process">
        <p>${value1}.x = ${value3}.${value2}</p>
        <p>${value1}.x = ${mult}</p>
        <p>x = ${mult}/${value1}</p>
        <p>x = ${result}</p>
    </div>

    <div class="result">
        <h1>O valor final de X é: ${result}</h1>
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