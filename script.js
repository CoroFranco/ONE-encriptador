let texto = document.querySelector('#textNormal');
let textoDes = document.querySelector('#textEnc')
let btnGuardar1 = document.querySelector('#btnGuardar1')
let btnGuardar2 = document.querySelector('#btnGuardar2')
let encrip = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];


function encriptar() {
    let textoEncriptado = texto.value;
    console.log(textoEncriptado !== textoEncriptado.toLowerCase());
    if (textoEncriptado !== textoEncriptado.toLowerCase() || /[^a-záéíóúüñ\s]/i.test(textoEncriptado)) {
        alert('No puedes incluir mayusculas o caracteres especiales')
        return;
    } else if (textoEncriptado == "") {
        alert('Debes ingresar un texto para encriptar');
        return;
    } else {
        for (let i = 0; i < encrip.length; i++) {
            if (textoEncriptado.includes(encrip[i][0])) {
                textoEncriptado = textoEncriptado.replaceAll(encrip[i][0], encrip[i][1]);
            }
        }

    }
    btnGuardar2.removeAttribute('hidden');
    btnGuardar1.setAttribute('hidden', '');
    textoDes.value = textoEncriptado;
    texto.value = "";
}

function desencriptar() {
    let textoDesencriptado = textoDes.value;
    if (textoDesencriptado !== textoDesencriptado.toLowerCase() || /[^a-záéíóúüñ\s]/i.test(textoDesencriptado)) {
        alert('No puedes incluir mayusculas o caracteres especiales')
        return;
    } else if (textoDesencriptado == "") {
        alert('Debes ingresar un texto para encriptar');
        return;
    } else {
        for (let i = 0; i < encrip.length; i++) {
            if (textoDesencriptado.includes(encrip[i][1])) {
                textoDesencriptado = textoDesencriptado.replaceAll(encrip[i][1], encrip[i][0]);
            }
        }
    }
    btnGuardar1.removeAttribute('hidden');
    btnGuardar2.setAttribute('hidden', '');
    texto.value = textoDesencriptado;
    textoDes.value = "";
}

function copiar(){
    textoDes.select();
    document.execCommand('copy');
}

function copiar2(){
    texto.select();
    document.execCommand('copy');
}


