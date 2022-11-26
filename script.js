function changeImage() {
    if (
      document.getElementById("myImage").src ===
      "https://static.wixstatic.com/media/2cd43b_2373b379948d4e0cb910c593f7edb96e~mv2.png/v1/fill/w_637,h_800,al_c,q_90,enc_auto/2cd43b_2373b379948d4e0cb910c593f7edb96e~mv2.png"
    ) {
      document.getElementById("myImage").src =
        "https://www.pngpix.com/wp-content/uploads/2021/05/PNGPIX-COM-cat-PNG-Transparent-Image.png";
      document.getElementById("switch").innerHTML = "Pet Me";
      document.getElementById("main").classList.remove("lightoff");
      document.getElementById("main").classList.add("lighton");
    } else if (
      document.getElementById("myImage").src ===
      "https://www.pngpix.com/wp-content/uploads/2021/05/PNGPIX-COM-cat-PNG-Transparent-Image.png"
    ) {
      document.getElementById("myImage").src =
        "https://static.wixstatic.com/media/2cd43b_2373b379948d4e0cb910c593f7edb96e~mv2.png/v1/fill/w_637,h_800,al_c,q_90,enc_auto/2cd43b_2373b379948d4e0cb910c593f7edb96e~mv2.png";
      document.getElementById("switch").innerHTML = "Grraaau";
      document.getElementById("main").classList.add("lightoff");
      document.getElementById("main").classList.remove("lighton");
    }
  }
  
  document.getElementById("switch").addEventListener("click", changeImage);