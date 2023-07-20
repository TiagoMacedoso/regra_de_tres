const modal = document.querySelector("dialog")
const btn_close_modal = document.querySelector("#close_modal")
const btn_calc = document.querySelector("#btn_calc")
const body_modal = document.querySelector(".body_modal")
const n1 = document.querySelector("#n1")
const n2 = document.querySelector("#n2")
const n3 = document.querySelector("#n3")

btn_close_modal.onclick = () => {
    modal.close()
}

btn_calc.onclick = () => {
    modal.showModal()

    let valor1 = n1.value
    let valor2 = n2.value
    let valor3 = n3.value

    if (valor1 == "" || valor1 == null || valor1 == undefined) {
        error_input("valor da variável 1.")
    } else if(valor2 == "" || valor2 == null || valor2 == undefined){
        error_input("valor da variável 2.")
    } else if(valor3 == "" || valor3 == null || valor3 == undefined){
        error_input("valor da variável 3.")
    } else{
        calcular(valor1, valor2, valor3)
    }
}

function calcular(valor1, valor2, valor3){
    let multiplicacao = valor2 * valor3
    let resultado = multiplicacao / valor1

    body_modal.innerHTML = `
    <div>
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
        <h1>Ocorreu um erro no ${var_error}</h1>

        <p>Por gentileza informe todos os valor antes de tentar calcular!</p>
    </div>
    `
}