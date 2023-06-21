function borde() {
    let image = document.querySelector("img");
    if (image.style.border === "2px solid red") {
      image.style.border = "none";
    } else {
      image.style.border = "2px solid red";
    }
  }
  
