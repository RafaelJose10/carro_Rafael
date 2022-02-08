window.addEventListener('load', iniciar);

function iniciar() {
    var div_chao, largura_tela, chao_necessarios;
    var todos_chao = new Array();

    largura_tela = window.innerWidth;

    chao_necessarios = Math.floor(largura_tela / 200);
    // alert(chao_necessarios)

    // alert((largura_tela / 200))
    for (let c = 0; c <= chao_necessarios; c++) {
        todos_chao.push(window.document.createElement('img'))
        todos_chao[c].id = "fotoChão1";
        todos_chao[c].src = "imagens/chao.png";
        window.document.body.appendChild(todos_chao[c]);
        todos_chao[c].style.left = (200 * c) + 'px';
    }
    todos_chao[chao_necessarios].style.left = (largura_tela - 200) + 'px';

    div_chao = window.document.querySelector('div#divChão');
    div_chao.style.width = largura_tela + 'px';
}











// setInterval(() => {
//     var chão, largura_chão;
//     var todos_Chão = new Array(-700, 0, 700);
//     var novos_Chão = new Array();

//     largura_chão = window.screen.width
//         // alert(largura_chão);

//     chão = window.document.querySelector('div#divChão');
//     chão.style.width = largura_chão + 'px';

//     for (let c in todos_Chão) {
//         novos_Chão[c] = window.document.createElement('img');
//         novos_Chão[c].style.width = "700px";
//         novos_Chão[c].style.position = 'absolute';
//         novos_Chão[c].style.top = "420px";
//         novos_Chão[c].style.left = todos_Chão[c] + 'px';
//         novos_Chão[c].src = 'chão2.png'
//         window.document.body.appendChild(novos_Chão[c]);
//     };

//     // chão.style.width = "700px";
//     // alert(largura_chão)
//     // var largura = window.innerWidth
// }, 1000)