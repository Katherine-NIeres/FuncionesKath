const uno = document.getElementById("color1");
const dos = document.getElementById("color2");
const tres = document.getElementById("color3");
const cuatro= document.getElementById("color4");

const caja = document.getElementById("key");

const cambiar = (caja) => (caja.style.backgroundColor = "black");
uno.addEventListener("click", () => cambiar(uno));
dos.addEventListener("click", () => cambiar(dos));
tres.addEventListener("click", () => cambiar(tres));
cuatro.addEventListener("click", () => cambiar(cuatro));

function bloque (caja){
    const reaccion =document.createElement("div");
    reaccion.style.width = "200px";
    reaccion.style.height = "200px";
    reaccion.style.margin = "4px";
    reaccion.style.backgroundColor = caja;
    document.body.appendChild(reaccion);
}

document.addEventListener("keydown", function (nuevo){
    if (nuevo.key === "a") {
        caja.style.backgroundColor = "pink";}
    else if (nuevo.key === "s") {
        caja.style.backgroundColor = "orange";}
    else if (nuevo.key === "d") {
        caja.style.backgroundColor = "skyblue";}
    else if (nuevo.key === "q") {
    bloque ("purple");}  
    else if (nuevo.key === "w") {
    bloque ("grey");}  
    else if (nuevo.key === "e") {
    bloque ("brown");}
});