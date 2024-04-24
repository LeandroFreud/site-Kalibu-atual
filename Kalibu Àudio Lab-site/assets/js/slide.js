
var radio = document.querySelector('.manual-btn') //variavel da navegação manual //
var cont = 1 //variavel do contador //

document.getElementById('radio1').checked = true // verifica se o primeiro input esta marcado//

setInterval(() => {  // tempo de amostra de cada slide//
    proximaImg() // "chama" a proxima imagem do carrossel //
}, 5000) // 5 seg //

function  proximaImg(){ // //
    cont++ // verificador de img //

    if(cont > 3){  // se cont for > 3, cont volta a ser 1. //
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true // muda o fundo dos marcadores automaticamente //
}