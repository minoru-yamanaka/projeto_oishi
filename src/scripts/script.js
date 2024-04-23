const bodyElement = window.document.body // Captura o Body
abrirMenuMobile.addEventListener ('click', abrirMenu)  // Adiciona evento ao Botão Abrir Mobile
fecharMenuMobile.addEventListener('click', fecharMenu) // Adiciona evento ao Botão Fechar Mobile

// Função para abrir o menu
function abrirMenu(){
    bodyElement.classList.add('body-responsive') // Trava o Body
    menu.classList.add ('menu-responsive') // Adiciona Classe ao Menu
    abrirMenuMobile.classList.add('abrir-menu-responsive') // Esconde o Botão Abrir Mobile
    fecharMenuMobile.classList.add('fechar-menu-responsive') // Aparece o Botão Fechar Mobile
}

// Função para fechar o menu
function fecharMenu(){
    bodyElement.classList.remove('body-responsive') 
    menu.classList.remove ('menu-responsive')
    abrirMenuMobile.classList.remove('abrir-menu-responsive') 
    fecharMenuMobile.classList.remove('fechar-menu-responsive')
}