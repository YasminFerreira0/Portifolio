function redirecionamentoSite(event) {
    const url = event.target.getAttribute("data-url");
    if(url){
        window.open(url, "_blank");
    }
}

const botoes = document.querySelectorAll("#redirecionar");
botoes.forEach(function(botao) {
    botao.addEventListener("click", redirecionamentoSite);
});