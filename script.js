const textarea = document.querySelector(".text_area"); //La variable toma el valor ingresado en textarea
const mensaje = document.querySelector(".mensaje"); //Variable toma el valor del mensaje

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function encriptar (stringEncriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o","ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase(); //usamos metodo para convertir el texto a minuscula

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function botonEncriptar (){
    const textoEncriptado = encriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = ""; //limpiamos el campo
    mensaje.style.backgroundImage = "none";
}

function desencriptar (stringDesencriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
        
    }
    return stringDesencriptado;
}

function botonDesencriptar (){
    const textoEncriptado = desencriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
}

function botonCopiar(){
    const mensaje = document.getElementById("mensajeCopiar");
    const btonCopiar = document.getElementById("btnCopiar");

    //navigator.clipboard.writeText(mensaje.textContent);
    navigator.clipboard.writeText(mensaje.value);
    //btonCopiar.textContent = "Copiado";
    mensaje.value = "";
    
}