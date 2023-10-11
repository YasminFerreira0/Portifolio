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



let currentLanguage = 'english';

        // Função para mostrar/ocultar o menu de idioma
        function toggleLanguageMenu() {
            const menu = document.getElementById('language-menu');
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        }

        // Função para alterar o idioma
        function changeLanguage(language) {
            currentLanguage = language;
            updatePageTexts();
            toggleLanguageMenu();
        }

        // Função para atualizar os textos da página com base no idioma selecionado
        function updatePageTexts() {
            const titulo = document.getElementById('titulo');
            const paragrafo = document.getElementById('paragrafo');
            
            if (currentLanguage === 'english') {
                titulo.textContent = 'Title';
                paragrafo.textContent = 'This is an example page.';
            } else if (currentLanguage === 'portuguese') {
                titulo.textContent = 'Título';
                paragrafo.textContent = 'Este é um exemplo de página.';
            }
        }

        const content = document.getElementById("content").children;

        languageSelect.addEventListener("change", () => {
            const selectedLanguage = languageSelect.value;

            for (let i = 0; i < content.length; i++) {
                content[i].textContent = content[i].getAttribute("data-" + selectedLanguage);
            }

            languageOptions.style.display = "none";
        });