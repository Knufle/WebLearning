;(function() {
  const btn = document.querySelector("#btnMudaLayout");
  const mural = document.querySelector(".mural");
  btn.addEventListener("click", function(event) {
    mural.classList.toggle("mural--linha");
    if (this.innerText.trim() === "Linhas") {
      this.innerText = "Blocos";
    } else {
      this.innerText = "Linhas";
    }
  });

  btn.classList.remove("no-js");
})();
