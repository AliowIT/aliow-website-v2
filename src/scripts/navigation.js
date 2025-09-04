const toggleButton = document.getElementById("menu-toggle");
const closeButton = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = Array.from(
  document.querySelectorAll(".mobile-menu-link"),
);

function closeMobileMenu() {
  mobileMenu.classList.add("translate-x-full");
  mobileMenu.classList.remove("translate-x-0");
  mobileLinks.forEach(link => {
    link.setAttribute("tabindex", "-1");
  });
  closeButton.setAttribute("tabindex", "-1");
  toggleButton.focus(); // Return focus to hamburger button
}

toggleButton.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
  mobileMenu.classList.add("translate-x-0");
  mobileLinks.forEach(link => {
    link.removeAttribute("tabindex");
  });
  closeButton.removeAttribute("tabindex");
  closeButton.focus(); // Focus close button when menu opens
});

closeButton.addEventListener("click", closeMobileMenu);

// Close mobile menu when any menu link is clicked
mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});