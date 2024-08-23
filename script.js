const textArea = document.querySelector(".areaTexto");
const mensagem = document.querySelector("#msg__texto");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


function btnEncriptar()
{
    limparImagem();
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    mudarMensagem("p","Mensagem encontrada!");
}


function encriptar(stringEncriptada)
{
    let matrizCodigo = [["e", "enter"] , ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++)
    {
        if(stringEncriptada.includes(matrizCodigo[i][0]))
        {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar()
{
    limparImagem();
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
    mudarMensagem("p","Mensagem encontrada!");

}

function desencriptar(stringDesencriptada)
{
    let matrizCodigo = [["e", "enter"] , ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++)
    {
        if(stringDesencriptada.includes(matrizCodigo[i][1]))
        {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function limparImagem()
{
    mensagem.style.backgroundImage = "none";
    
}

function copiarMensagem(){
    const textoCopiado = mensagem.value;
    mensagem.value = '';
    textArea.value = textoCopiado;
    mudarMensagem("p","Nenhuma mensagem encontrada");
    mensagem.style.backgroundImage = "url(/img/figura-procurando-texto.svg)";
}

function mudarMensagem(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}