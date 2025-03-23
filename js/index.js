let papelUsuario = document.getElementById("papel_usuario");
let pedraUsuario = document.getElementById("pedra_usuario");
let tesouraUsuario = document.getElementById("tesoura_usuario");
let papelPC = document.getElementById("papel_pc");
let pedraPC = document.getElementById("pedra_pc");
let tesouraPC = document.getElementById("tesoura_pc");
let info = document.getElementById("info");
let pontuacaoJogador = document.getElementById("pontJogador");
let pontuacaoPC = document.getElementById("pontPc");
let pontosJogador = 0;
let pontosPc = 0;
mostrarPontos();

function jogada(var1) {
    papelUsuario.style.pointerEvents = "none";
    pedraUsuario.style.pointerEvents = "none";
    tesouraUsuario.style.pointerEvents = "none";

    if (var1 === 1) {
        pedraUsuario.classList.add('jogadaUsuario');
    } else if (var1 === 2) {
        papelUsuario.classList.add('jogadaUsuario');
    } else if ((var1 === 3)) {
        tesouraUsuario.classList.add('jogadaUsuario');
    }

    verificar(var1);
}

function verificar(escolhaUsuario) {
    // 1 pedra / 2 papel / 3 tesoura

    let escolhaPC = Math.floor(Math.random() * (4 - 1) + 1);


    if (escolhaPC === 1) {
        pedraPC.classList.add('jogadaPC');

    } else if (escolhaPC === 2) {
        papelPC.classList.add('jogadaPC');

    } else if ((escolhaPC === 3)) {
        tesouraPC.classList.add('jogadaPC');
    }

    if (escolhaUsuario === escolhaPC) {
        info.style.color = "blue";
        info.innerHTML = "Empate!";
    } else if (escolhaUsuario === 1 && escolhaPC === 2) {
        info.style.color = "red";
        info.innerHTML = "Papel ganha da Pedra!";
        pontosPc++;
    } else if (escolhaUsuario === 1 && escolhaPC === 3) {
        info.style.color = "green";
        info.innerHTML = "Pedra ganha da Tesoura!";
        pontosJogador++;
    } else if (escolhaUsuario === 2 && escolhaPC === 1) {
        info.style.color = "green";
        info.innerHTML = "Papel ganha da Pedra!";
        pontosJogador++;
    } else if (escolhaUsuario === 2 && escolhaPC === 3) {
        info.style.color = "red";
        info.innerHTML = "Tesoura ganha do Papel!";
        pontosPc++;
    } else if (escolhaUsuario === 3 && escolhaPC === 1) {
        info.style.color = "red";
        info.innerHTML = "Pedra ganha da Tesoura!";
        pontosPc++;
    } else if (escolhaUsuario === 3 && escolhaPC === 2) {
        info.style.color = "green";
        info.innerHTML = "Tesoura ganha da Pedra!";
        pontosJogador++;
    }

    mostrarPontos();
    console.log(escolhaPC);
    setTimeout(function () {
        restaurar();
    }, 3000);
}


function restaurar() {

    pedraUsuario.classList.remove('jogadaUsuario');
    papelUsuario.classList.remove('jogadaUsuario');
    tesouraUsuario.classList.remove('jogadaUsuario');
    pedraUsuario.classList.add('defaultUS');
    papelUsuario.classList.add('defaultUS');
    tesouraUsuario.classList.add('defaultUS');

    pedraPC.classList.remove('jogadaPC');
    papelPC.classList.remove('jogadaPC');
    tesouraPC.classList.remove('jogadaPC');
    pedraPC.classList.add('defaultPC');
    papelPC.classList.add('defaultPC');
    tesouraPC.classList.add('defaultPC');

    papelUsuario.style.pointerEvents = "all";
    pedraUsuario.style.pointerEvents = "all";
    tesouraUsuario.style.pointerEvents = "all";

    info.style.color = "black";
    info.innerHTML = "Vamos começar!";
    mostrarPontos();
}

function reiniciar() {
    pontosJogador = 0;
    pontosPc = 0;
    restaurar();
    mostrarPontos();
}

function mostrarPontos() {
    pontuacaoJogador.innerHTML = "Você<br>" + pontosJogador;
    pontuacaoPC.innerHTML = "PC<br>" + pontosPc;
}