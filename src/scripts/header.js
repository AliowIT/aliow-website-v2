const header = document.querySelector("header");
window.addEventListener("scroll", function (event) {
  if (header != null) {
    if (window.scrollY > 0) {
      header.classList.add("bg-primary");
    } else {
      header.classList.remove("bg-primary");
    }
  }
});