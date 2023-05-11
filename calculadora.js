


function inserir(num) {
    document.querySelector(".tela").innerHTML += num;
}

function clean() {
    let tela = document.querySelector(".tela")
    document.querySelector(".tela").innerHTML = "";
}

function back() {
    let visor = document.querySelector(".tela").innerHTML;
    document.querySelector(".tela").innerHTML = visor.substring(0, visor.length - 1)
}

function somar() {
    let tela = document.querySelector(".tela").innerHTML;
    document.querySelector(".tela").innerHTML = eval(tela)

    if (tela) {
        document.querySelector(".tela").innerHTML = eval(tela)
    } else {
        document.querySelector(".tela").innerHTML = "Digite os Números";
        document.querySelector(".tela").style.color = " red"
    }
}


