const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const toast = document.getElementById("toast");
let toastTimer = null;

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.querySelectorAll("[data-toast]").forEach((btn) => {
  btn.addEventListener("click", () => showToast(btn.dataset.toast));
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  showToast("Form submitted (demo). Tell me where you want messages sent and I’ll wire it up.");
  e.target.reset();
});
