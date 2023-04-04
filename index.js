document.addEventListener("DOMContentLoaded", function () {
  const version = document.getElementById("version");
  version.innerHTML = "1. 2. 5";

  const date = document.getElementById("date");
  date.innerHTML = "2023. 04. 04";

  const copy = document.getElementById("copy");
  var now = new Date();
  var year = now.getFullYear();
  copy.innerHTML = "&copy; Hi_wolfy " + year + " All Rights Reserved.";

  const btn = document.getElementById("modal_open");
  const modal = document.getElementById("modal");
  const modalBg = document.getElementById("modal_bg");
  const closeBtn = document.getElementById("close");

  btn.onclick = function () {
    modal.style.display = "block";
    modalBg.style.display = "block";
  };
  closeBtn.onclick = function () {
    modal.style.display = "none";
    modalBg.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      modalBg.style.display = "none";
    }
  };
});
