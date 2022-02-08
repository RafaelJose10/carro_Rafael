window.addEventListener('load', btn_inicicia)

function btn_inicicia() {
    var largura_tela = window.innerWidth // Para ver a Largura da tela;
    var btn_esquerdo = window.document.querySelector('div#btn_esquerdo');
    var btn_direito = window.document.querySelector('div#btn_direito');

    btn_esquerdo.style.width = (largura_tela / 2 - 25) + "px";
    btn_direito.style.width = (largura_tela / 2 - 25) + 'px';
    btn_direito.style.left = (largura_tela / 2) + 'px';
};