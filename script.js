const modal = document.querySelector("dialog")
const btn_close_modal = document.querySelector("#close_modal")
const btn_calc = document.querySelector("#btn_calc")
const main = document.querySelector("main")

btn_close_modal.onclick = () => {
    modal.close()
}

btn_calc.onclick = () => {
    modal.showModal()
}