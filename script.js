const botoes = document.querySelectorAll(".botoes label");

let btn = 0;
function selecionar(item) {
  btn = +item.target.innerText;
  console.log(item);
}

botoes.forEach((itens) => {
  itens.addEventListener("click", selecionar);
});

function enviar() {
  if (btn >= 1 && btn <= 5) {
    const hide = document.querySelector(".teste-qualidade");
    hide.classList.remove("ativo");
    const show = document.querySelector(".agradecimentos");
    show.classList.add("ativo");
    dc.innerText = `You selected ${btn} out of 5`;
  } else {
    alert("Select an Option, Please");
  }
}


