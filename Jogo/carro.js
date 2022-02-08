var largura_tela, carro, anima, anima_carro, tecla, vel, px, x, n;
vel = 0, px = 100, x = 0;
n = 1;

var btn_esquerdo, btn_direito, animationFrame;

window.addEventListener("load", Inicia)

function Inicia() {
    btn_esquerdo = window.document.querySelector('div#btn_esquerdo');
    btn_direito = window.document.querySelector('div#btn_direito');

    btn_esquerdo.addEventListener('touchstart', mover_esquerda);
    btn_esquerdo.addEventListener('touchend', () => {
        cancelAnimationFrame(animationFrame);
        x = 0, vel = 0;
    });
    btn_direito.addEventListener('touchstart', mover_direita);
    btn_direito.addEventListener("touchend", () => {
        cancelAnimationFrame(animationFrame);
        x = 0, vel = 0;
    });

    ///////////////////////
    // btn_esquerdo.addEventListener('mousedown', mover_esquerda);
    // btn_esquerdo.addEventListener('mouseup', () => {
    //     cancelAnimationFrame(animationFrame);
    //     x = 0, vel = 0;
    // });
    // btn_direito.addEventListener('mousedown', mover_direita);
    // btn_direito.addEventListener("mouseup", () => {
    //     cancelAnimationFrame(animationFrame);
    //     x = 0, vel = 0;
    // });
    ///////////////////////

    carro = window.document.querySelector("img#fotoCarro");
    carro.style.left = px + 'px';

    window.onkeydown = precionado;
    window.onkeyup = solto;
    anima = setInterval(coração, 10);
    anima_carro = setInterval(animação, 100);
}

function mover_esquerda() {
    vel < 2 ? vel += 0.02 : '';
    x = -vel;
    px <= 0 ? vel = 0 : '';
    carro.style.transform = "scaleX(-1)";
    animationFrame = requestAnimationFrame(mover_esquerda);
};

function mover_direita() {
    vel < 2 ? vel += 0.02 : '';
    x = vel;
    px >= window.innerWidth - 40 ? vel = 0 : '';
    carro.style.transform = 'scaleX(1)';
    animationFrame = requestAnimationFrame(mover_direita);
}



const precionado = (event) => {
    vel < 2 ? vel += 0.1 : '';
    tecla = event.keyCode;
    switch (tecla) {
        case 37:
            // vel > -2 ? vel += -0.1 : '';
            px <= 0 ? vel = 0 : '';
            x = -vel;
            carro.style.transform = "scaleX(-1)";
            break;
        case 39:
            px >= window.innerWidth - 40 ? vel = 0 : '';
            x = vel;
            carro.style.transform = "scaleX(1)";
            break;
    }
    // alert(tecla);
};

const solto = (event) => {
    // vel > 0 ? vel-- : '';
    vel = 0;
    tecla = event.keyCode;
    switch (tecla) {
        case 37:
            x = 0;
            break;
        case 39:
            x = 0;
            break;
    }
};

function coração() {
    // x += vel
    px += x;
    carro.style.left = px + 'px';

}

function animação() {
    n == 1 ? n = 2 : n = 1;
    carro.src = "imagens/carro" + n + ".png";
}





// setInterval((event) => {

//     tecla = event.keyCode
// }, 1000);