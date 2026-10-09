// Año del footer
document.getElementById("year").textContent = new Date().getFullYear();

// Menú móvil
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  })
);

// Carrito (demo)
const toast = document.getElementById("toast");
const sizeSelect = document.getElementById("size");
const colorSelect = document.getElementById("color");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

document.querySelectorAll(".add-to-cart").forEach((button) =>
  button.addEventListener("click", () => {
    const size = sizeSelect.options[sizeSelect.selectedIndex].text;
    const color = colorSelect.options[colorSelect.selectedIndex].text;
    const price = Number(button.dataset.price).toLocaleString("es-ES", {
      style: "currency",
      currency: "EUR",
    });
    showToast(`✓ ${button.dataset.pack} (${size}, ${color}) añadido · ${price}`);
  })
);
