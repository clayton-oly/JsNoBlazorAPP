//função exemploFuncaoSemRetorno
window.exemploFuncaoSemRetorno = function () {
    alert("Hello World");
    console.log("Hello World");
}


//função exemploFuncaoComRetorno
window.exemploFuncaoComRetorno = function (nome) {
    saudacao = "Hello " + nome;
    console.log(saudacao);
    return saudacao;
}
