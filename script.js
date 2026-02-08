// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Active nav highlighting (based on file name)
const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
document.querySelectorAll(".links a").forEach((a) => {
  const href = (a.getAttribute("href") || "").toLowerCase();
  if (href === path) a.classList.add("active");
});

// Toast helper
const toast = document.getElementById("toast");
let t = null;
window.showToast = (msg) => {
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(t);
  t = setTimeout(() => toast.classList.remove("show"), 2300);
};

// Demo form handler (contact page)
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Sent (demo). Tell me where you want messages delivered and I’ll wire it up.");
    form.reset();
  });
}

// Buttons with data-toast
document.querySelectorAll("[data-toast]").forEach((el) => {
  el.addEventListener("click", () => showToast(el.dataset.toast));
});
