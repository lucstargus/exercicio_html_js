const form = document.getElementById('form');

function validaCampo(dadosIncorretos) {
    const dadoComoArray = dadosIncorretos.split (' ');
    return dadoComoArray.lenght >= 2;
}

form.addEventListener("submit", function(e) {
    let formEvalido = false;
    e.preventDefault();

const campoA = document.getElementById('campo-a')
const campoB = document.getElementById('campo-b')
const mensagemSucesso = 

formEvalido = validaCampo(campoA.value)
if (formEvalido) {
        document.querySelector('success-message').innerHTML = mensagemSucesso

        campoA.value = '';
        campoB.value = '';
    } else {
        alert("");
    }
})