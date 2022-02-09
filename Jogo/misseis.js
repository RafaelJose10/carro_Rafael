var largura_tela, py_missil, y, missil_local_surgimento, quantidade_missil, tipo_missil, intervalo, animação, animação2;
var todos_misseis = new Array();
var missil_caindo = new Array();
var missil_caindo2 = new Array();
var missil_X = new Array();
var missil_src = new Array();
let quant;

var score = 0;


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

    // missil_src


    if (missil_caindo.length <= quant) {
        let i = missil_caindo.length;
        missil_caindo.push(window.document.createElement('img'));
        missil_caindo[i].src = 'imagens/missil_' + tipo_missil + '.png';
        missil_caindo[i].id = 'img_misseis'
        missil_caindo[i].style.left = missil_local_surgimento + 'px';
        window.document.body.appendChild(missil_caindo[i]);
        missil_caindo2[i] = py_missil;
        missil_X[i] = missil_local_surgimento;
        missil_src[i] = 'imagens/missil_' + tipo_missil + '.png';


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
        if (missil_caindo2[c] >= 300 - 30) {
            // impacto();
            // alert(missil_caindo[c].src);
            if (missil_src[c] == "imagens/missil_0.png") {
                if (missil_caindo2[c] >= 335 - 30) {
                    impacto();
                }
                if (missil_caindo2[c] >= 335) {
                    // alert("missil 0")
                    renova();
                }
            }
            if (missil_src[c] == 'imagens/missil_1.png') {
                if (missil_caindo2[c] >= 370 - 30) {
                    impacto();
                }
                if (missil_caindo2[c] >= 370) {
                    renova();
                    // alert('missil 1');
                }
            };
            if (missil_src[c] == 'imagens/missil_2.png') {
                if (missil_caindo2[c] >= 385 - 30) {
                    impacto();
                }
                if (missil_caindo2[c] >= 385) {
                    renova();
                    // alert('missil 2');
                }
            };
            if (missil_src[c] == 'imagens/missil_3.png') {
                if (missil_caindo2[c] >= 370 - 30) {
                    impacto();
                }
                if (missil_caindo2[c] >= 370) {
                    renova()
                        // alert('missil 3');
                }
            };

            function impacto() {
                let m_x = missil_X[c];
                if (missil_caindo2[c] >= 300 - 30 && missil_caindo2[c] <= 400) {
                    if ((m_x - 40) <= px && (m_x + 20) >= px) {
                        // alert("Perdeu")
                        renova();
                        scores(score = 0)
                    }
                }
            }


            function renova() {
                missil_caindo[c].remove();
                missil_caindo.splice(c, 1);
                missil_caindo2.splice(c, 1);
                missil_X.splice(c, 1)
                missil_src.splice(c, 1);
                // score++;
                scores(++score)
            }
            // alert(m_x + "==" + (m_x + 100));
        }
    }
}


window.addEventListener('load', inicia_misseis);
