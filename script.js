let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hili1");
let hill4 = document.getElementById("hili4");
let hill5 = document.getElementById("hili5");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + "px";
  leaf.style.top = value * -1.5 + "px";
  leaf.style.left = value * 1.5 + "px";
  hill5.style.left = value * 1.5 + "px";
  hill4.style.left = value * -1.5 + "px";
  hill1.style.top = value * 1 + "px";
});

const spinners = [
  { spinner: document.getElementById("spinner"), modal: document.getElementById("modalCardspin") },
  { spinner: document.getElementById("spinner1"), modal: document.getElementById("modalCardspin1") },
  { spinner: document.getElementById("spinner2"), modal: document.getElementById("modalCardspin2") },
  { spinner: document.getElementById("spinner3"), modal: document.getElementById("modalCardspin3") },
  { spinner: document.getElementById("spinner4"), modal: document.getElementById("modalCardspin4") },
];

function showModal(modal) {
  modal.style.display = "block";
}

function hideModal(modal) {
  modal.style.display = "none";
}

spinners.forEach(({ spinner, modal }) => {
  spinner.addEventListener("mouseenter", () => showModal(modal));
  modal.addEventListener("mouseenter", () => showModal(modal));

  spinner.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!modal.matches(":hover") && !spinner.matches(":hover")) {
        hideModal(modal);
      }
    }, 100);
  });

  modal.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!modal.matches(":hover") && !spinner.matches(":hover")) {
        hideModal(modal);
      }
    }, 100);
  });
});

const openModalBtn = document.getElementById("openModal");
const modalOverlay = document.getElementById("modalOverlay");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn.addEventListener("click", () => {
  modalOverlay.classList.add("active");
});

closeModalBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("active");
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("active");
  }
});
