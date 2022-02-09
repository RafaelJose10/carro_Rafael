window.addEventListener('load', scores);

function scores(sco) {
    window.document.querySelectorAll('div#pontuação_score')[0].innerHTML = sco > 0 ? sco : 0;
}