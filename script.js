function _load() {
  console.log("Az oldal betoltodott.");
  document.getElementById("root").classList.add("loaded");

  function rootClicked() {
    console.log("A root ID div-re kattintottunk.");
  }

  document.getElementById("root").addEventListener("click", rootClicked);
}

window.addEventListener("load", _load);
