function verificar(){
    let sticker1 = document.querySelector("#sticker1").value;
    let sticker2 = document.querySelector("#sticker2").value;
    let sticker3 = document.querySelector("#sticker3").value;

    let resultado = Number(sticker1) + Number(sticker2) + Number(sticker3);
    if (sticker1 === "" || sticker2 === "" || sticker3 === "") {
      document.querySelector("#textoResultado").innerHTML =
        "Debe rellenar todos los campos";
      document.querySelector("#textoResultado").style.color = "red";
    } else if (isNaN(sticker1) || isNaN(sticker2) || isNaN(sticker3)) {
      document.querySelector("#textoResultado").innerHTML =
        "Debe ingresar numeros validos";
      document.querySelector("#textoResultado").style.color = "red";
    } else if (sticker1 < 0 || sticker2 < 0 || sticker3 < 0) {
      document.querySelector("#textoResultado").innerHTML =
        "Debe ingresar numeros validos ";
      document.querySelector("#textoResultado").style.color = "red";
    } else if (resultado <= 10) {
      document.querySelector("#textoResultado").innerHTML =
        "Llevas " + resultado + " stickers seleccionados";
      document.querySelector("#textoResultado").style.color = "black";
    } else {
      document.querySelector("#textoResultado").innerHTML =
        "Sobrepasaste el limite de 10 stickers (" + resultado + ")";
      document.querySelector("#textoResultado").style.color = "red";
    }
}