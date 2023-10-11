//REDIRECIONAR SITE
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


//MUDAR IDIOMA
    let currentLanguage = 'pt';
    function toggleLanguageMenu() {
        const menu = document.getElementById('language-menu');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }

    function changeLanguage(language) {
        currentLanguage = language;
        updatePageTexts();
        toggleLanguageMenu();
    }

    function updatePageTexts() {
        const elementos = document.querySelectorAll('[data-en], [data-pt]');
        elementos.forEach(elemento => {
            const texto = elemento.getAttribute(`data-${currentLanguage}`);
            elemento.textContent = texto;
        });
    }