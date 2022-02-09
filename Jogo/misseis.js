var largura_tela, py_missil, y, missil_local_surgimento, quantidade_missil, tipo_missil, intervalo, animação, animação2;
var todos_misseis = new Array();
var missil_caindo = new Array();
var missil_caindo2 = new Array();
let quant;


function inicia_misseis() {
    largura_tela = window.innerWidth;
    py_missil = -40, y = 0;
    // window.alert(missil_local_surgimento)

    for (let c = 0; c <= 3; c++) {
        todos_misseis.push(window.document.createElement('img'));
        todos_misseis[c].src = 'imagens/missil_' + c + '.png';
        todos_misseis[c].id = 'img_misseis'
    };
    quant = 1;
    animação = setInterval(cria_missil, 1000);
    animação2 = setInterval(cai_missil, 100);
};

function cria_missil() {
    quant += 0.05;

    missil_local_surgimento = Math.round(Math.random(0) * largura_tela);

    tipo_missil = Math.round(Math.random(0) * 3);

    quantidade_missil = Math.round(Math.random(0) * 4);


    if (missil_caindo.length <= quant) {
        let i = missil_caindo.length;
        missil_caindo.push(window.document.createElement('img'));
        missil_caindo[i].src = 'imagens/missil_' + tipo_missil + '.png';
        missil_caindo[i].id = 'img_misseis'
        missil_caindo[i].style.left = missil_local_surgimento + 'px';
        window.document.body.appendChild(missil_caindo[i]);
        missil_caindo2[i] = py_missil;


        // missil_caindo.push(todos_misseis[tipo_missil]);
        // missil_caindo[i].style.left = missil_local_surgimento + 'px'
        // window.document.body.appendChild(missil_caindo[i]);
        // missil_caindo2[i] = py_missil;
    }
}



function cai_missil() {
    for (let c = 0; c <= missil_caindo.length; c++) {
        missil_caindo2[c] += 7;
        missil_caindo[c].style.top = missil_caindo2[c] + 'px';
        if (missil_caindo2[c] >= 390) {
            missil_caindo[c].remove();
            missil_caindo.splice(c, 1);
            missil_caindo2.splice(c, 1)
            missil_caindo2[c] = -40;
            // shift(missil_caindo[c])
        }
        if (missil_caindo2[c] >= 380 && missil_caindo2[c] <= 400) {
            if ((missil_local_surgimento - 40) <= px && (missil_local_surgimento + 40) >= px) {
                alert("Perdeu")
            }
        }
    }
}


window.addEventListener('load', inicia_misseis);