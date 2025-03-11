
    let entrada="";
    let codigo=0;
    let binario="";

function ejecutar(){


    entrada=document.getElementById("entrada").value;
    codigo=entrada.charCodeAt(0);
    document.getElementById("salida").innerText="El caracter "+entrada+" en codigo ASCCI es:"+codigo;
    document.getElementById("car-bin").value=codigo;
    
}//DOM


function abinario(){
    let cod = codigo;
    for (let i = 7; i>=0 ;i--){
        if (2 ** i<= cod){
            binario=binario+"1";
            cod=cod-2**i;            
        }else{
            binario = binario + "0";
        }
    }
    document.getElementById("sal").innerText="El caracter "+entrada+" en binario es:" +binario;
    document.getElementById("decima").value=binario;

}

function borrartodo (){
    entrada = document.getElementById("entrada").value=""; // borrar todo lo que se puso en la entrada
}

function ejecutartton (){
    let caracter = "";
    let suma =0;
    for (let vc = 7 ; vc >=0;vc--){
        if (entrada[7-vc]=="1");
        suma=suma+2**vc;
    }
    document.getElementById("").value=binario;
}
