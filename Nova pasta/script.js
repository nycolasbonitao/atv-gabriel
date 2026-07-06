function revelarmensagem() {
    document.getElementById("mensagem").innerText = "Olá mundo! aprendendo JS";
}

function mostrarNome() {
    let nome = document.getElementById("nomeUsuario").value;

    document.getElementById("resultadoNome").innerText = "bem vindo, " + nome + "!";
}