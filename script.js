const botoes = document.querySelectorAll("li")
const btnEnviar = document.getElementById("enviar")

let opt = 0
function selecionar(item){
    opt = +item.currentTarget.innerText

}

function enviar(){
       if(opt > 0 && opt <= 5){
        document.querySelector(".teste-qualidade").classList.remove("ativo")
        document.querySelector(".agradecimentos").classList.add("ativo")
        document.querySelector(".agradecimentos div span").innerText = `You selected ${opt} out of 5`
    } else{
        window.alert("Please select an option")
    }
}


botoes.forEach((item) => {
    item.addEventListener("click", selecionar)
})

btnEnviar.addEventListener("click", enviar)

console.log(botoes)