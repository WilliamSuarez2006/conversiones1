let entrada = "";
let codigo = 0;
let binario = "";


function ejecutar() {
    entrada = document.getElementById("entrada").value;
    codigo = entrada.charCodeAt(0);
    document.getElementById("salida").innerText = "El caracter " + entrada + " en código ASCII es: " + codigo;
    document.getElementById("car-bin").value = codigo;
}


function abinario() {
    
    let cod = document.getElementById("car-bin").value;
    binario = ""; 
    for (let i = 7; i >= 0; i--) {
        if (2 ** i <= cod) {
            binario = binario + "1";
            cod = cod - 2 ** i;
        } else {
            binario = binario + "0";
        }
    }
    document.getElementById("sal").innerText = "El caracter " + entrada + " en binario es: " + binario;
    document.getElementById("decima").value = binario;
}


function ejecutartton() {
    let tbin = document.getElementById("decima").value;
    let caracter = "";
    let suma = 0;
    for (let vc = 7; vc >= 0; vc--) {
        if (tbin[7 - vc] == "1") {
            suma = suma + 2 ** vc;
        }
    }
    caracter = String.fromCharCode(suma);
    document.getElementById("resultado-caracter").value="";
    document.getElementById("resultado-caracter").innerText = "El binario " + tbin + " en caracter es: " + caracter;
}

// Función para borrar el contenido de los campos
function borrartodo() {
    document.getElementById("entrada").value = "";
    document.getElementById("car-bin").value = "";
    document.getElementById("decima").value = "";
    document.getElementById("salida").innerText = "";
    document.getElementById("sal").innerText = "";
    document.getElementById("resultado-caracter").innerText = "";
}

// Función para borrar el campo de entrada de binario
function quitartodo() {
    document.getElementById("car-bin").value = "";
    document.getElementById("sal").innerText = "";
}
