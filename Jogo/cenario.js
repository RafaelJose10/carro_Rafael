window.addEventListener('load', btn_inicicia)

function btn_inicicia() {
    var largura_tela = window.innerWidth // Para ver a Largura da tela;
    var btn_esquerdo = window.document.querySelector('div#btn_esquerdo');
    var btn_direito = window.document.querySelector('div#btn_direito');


    if (!(navigator.userAgent.match(/Android/i))) {
        // alert("mobile")
    } else {
        let lado = (largura_tela / 16)
        btn_esquerdo.style.width = (largura_tela / 4 - 25) + "px";
        btn_esquerdo.style.height = (largura_tela / 4 - 25) + "px";
        btn_esquerdo.style.left = lado + 'px'
            // btn_esquerdo.style.top = 'calc(50% - 10px)';

        btn_direito.style.width = (largura_tela / 4 - 25) + 'px';
        btn_direito.style.height = (largura_tela / 4 - 25) + 'px';
        btn_direito.style.left = ((window.innerWidth) - (largura_tela / 4)) + 'px'
            // btn_direito.style.top = 'calc(50% - 10px)';

        // btn_direito.style.left = (largura_tela / 2) + 'px';
        // alert('nao mobile');
    }
};
