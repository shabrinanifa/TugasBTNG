const menuToggle = document.getElementById("menu-toggle");
const menuNav = document.getElementById("menu-nav");

if (menuToggle && menuNav) {
  menuToggle.addEventListener("click", function () {
    menuNav.classList.toggle("hidden");
  });
}

const detailButtons = document.querySelectorAll("#portfolio .grid a"); // Semua link "Lihat Detail"
const modalOverlay = document.getElementById("modal-overlay");
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");

const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");

function openModal() {
  modalOverlay.classList.remove("hidden");
  modalContent.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.add("hidden");
  modalContent.classList.add("hidden");
  // Mengembalikan kemampuan scroll body
  document.body.style.overflow = "auto";
}

detailButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    const card = this.closest(".bg-slate-800"); // Cari 'card' terdekat
    const projectImage = card.querySelector("img");
    const projectTitle = card.querySelector("h3");
    const projectDescription = card.querySelector("p");

    if (projectImage && projectTitle && projectDescription) {
      modalImage.src = projectImage.src;
      modalImage.alt = projectImage.alt;
      modalTitle.textContent = projectTitle.textContent.trim(); // .trim() untuk hapus spasi
      modalDescription.textContent = projectDescription.textContent.trim();
    } else {
      modalTitle.textContent = "Error";
      modalDescription.textContent = "Tidak dapat memuat konten project.";
    }

    // Tampilkan modalnya!
    openModal();
  });
});

if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}

if (modalOverlay) {
  modalOverlay.addEventListener("click", closeModal);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modalOverlay.classList.contains("hidden")) {
    closeModal();
  }
});
