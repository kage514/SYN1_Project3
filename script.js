// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");

if (navToggle && mobileNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    mobileNav.hidden = expanded;
  });

  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      mobileNav.hidden = true;
    });
  });
}

// Footer year
document.getElementById("year").textContent = String(new Date().getFullYear());

// Lightbox (masonry gallery)
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(src, caption, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || "Gallery image";
  lightboxCaption.textContent = caption || "";
  lightbox.classList.add("show");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("show");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  lightboxImg.alt = "";
  lightboxCaption.textContent = "";
}

document.querySelectorAll(".masonry-item").forEach(btn => {
  btn.addEventListener("click", () => {
    const src = btn.dataset.full;
    const caption = btn.dataset.caption || "";
    const alt = btn.querySelector("img")?.alt || "Gallery image";
    openLightbox(src, caption, alt);
  });
});

lightboxClose?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("show")) closeLightbox();
});

