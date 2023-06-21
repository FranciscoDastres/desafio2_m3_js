function verificarPassword(){
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var password3 = document.getElementById("password3").value;

    if (password1 === "9" && password2 === "1" && password3 === "1") {
      document.getElementById("resultado").textContent = "Password 1 es correcto.";
    } else if (password1 === "7" && password2 === "1" && password3 === "4") {
      document.getElementById("resultado").textContent = "Password 2 es correcto.";
    } else {
      document.getElementById("resultado").textContent = "Password incorrecto.";
    }
}