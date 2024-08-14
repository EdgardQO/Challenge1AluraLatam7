const textarea = document.querySelector('.textarea1');
const textarea2 = document.querySelector('.textarea2');
/*
a -> ai
e -> enter
i -> imes
o -> ober
u -> ufat
*/
function encriptar(encriptado){
    let matriz = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    encriptado=encriptado.toLowerCase();
    for(let i=0;i<matriz.length;i++){
        if(encriptado.includes(matriz[i][0])){
            encriptado = encriptado.replaceAll(matriz[i][0],matriz[i][1]);
        }
    }
    return encriptado;
}
function botonencriptar(){
    const textoencriptado = encriptar(textarea.value);
    textarea2.value = textoencriptado;
    textarea2.style.backgroundImage = 'none';
}
function desencriptar(desencriptado){
    let matriz2 = [["enter","e"],["imes","i"],["ober","o"],["ai","a"],["ufat","u"]];
    desencriptado=desencriptado.toLowerCase();
    for(let f=0;f<matriz2.length;f++){
        if(desencriptado.includes(matriz2[f][0])){
            desencriptado = desencriptado.replaceAll(matriz2[f][0],matriz2[f][0]);
        }
    }
    return desencriptado;
}
function botondesencriptar(){
    const textodesencriptado = desencriptar(textarea.value);
    textarea2.value = textodesencriptado;
}
