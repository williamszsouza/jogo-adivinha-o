let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let palpites = document.querySelector(".palpites");
let ultimoResultado = document.querySelector(".ultimo-resultado");
let baixoAlto = document.querySelector(".baixo-ou-alto");

let envioPalpite = document.querySelector("#button");
let campoPalpite = document.querySelector("#campo-palpite");

let contagemPalpites = 1;
let botaoReinicio;

function ConfigFimDeJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReinicio = document.createElement("button");
    botaoReinicio.classList.add('button')

    let conjuntoPalpites = document.querySelector(".conjuntoPalpites");
    conjuntoPalpites.appendChild(botaoReinicio);
    
    botaoReinicio.textContent = "Iniciar novo jogo";

    botaoReinicio.addEventListener("click", reiniciarJogo);
}

function reiniciarJogo() {
    contagemPalpites = 1;
    let reiniciarParas = document.querySelectorAll(".conjuntoPalpites span");
    for (let i = 0; i < reiniciarParas.length; i++) {
        reiniciarParas[i].textContent = '';
    }
    botaoReinicio.parentNode.removeChild(botaoReinicio);
    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = '';
    campoPalpite.focus();

    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}

function ConferirPalpite() {
    let palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
        palpites.textContent = 'Palpites anteriores: ';
    }
    palpites.textContent += palpiteUsuario + ' ';

    if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = 'Parabéns! Você acertou o número era ' + palpiteUsuario + '!';

        baixoAlto.textContent = '';
        ConfigFimDeJogo();
    } else if (contagemPalpites === 10) {
        ultimoResultado.textContent = 'FIM DE JOGO! O número era ' + numeroAleatorio;
        baixoAlto.textContent = '';
        ConfigFimDeJogo();
    } else {
        ultimoResultado.textContent = 'Errado!';
        if (palpiteUsuario < numeroAleatorio) {
            baixoAlto.textContent = "Seu palpite está muito baixo!";
        } else if (palpiteUsuario > numeroAleatorio) {
            baixoAlto.textContent = "Seu palpite está muito alto!";
        }
    }
    contagemPalpites++;
    campoPalpite.value = '';
    campoPalpite.focus();
}

// Adicionando o evento ao botão de envio de palpite
envioPalpite.addEventListener("click", ConferirPalpite);
