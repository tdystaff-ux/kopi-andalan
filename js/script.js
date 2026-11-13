document.addEventListener("DOMContentLoaded", () => {
  // Tahun footer mengikuti tahun saat website dibuka.
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Tutup navigasi mobile setelah tautan dipilih.
  document.querySelectorAll(".navbar .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const nav = document.getElementById("navbarContent");
      if (nav && nav.classList.contains("show") && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });
});

