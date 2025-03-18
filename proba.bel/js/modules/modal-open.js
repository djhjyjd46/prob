const modalCalForm = document.getElementById("modalCalForm");
const modalPolicy = document.getElementById("modalPolicy");

// Кнопки открытия модальных окон
const openModalPhoneButtons = document.querySelectorAll("#openModalPhone");
const policyLinks = document.querySelectorAll(".policy");

// Кнопки закрытия модальных окон
const closeButtons = document.querySelectorAll(".modal .close");

// Открытие модального окна "Заказать звонок"
openModalPhoneButtons.forEach((btn) => {
  btn.onclick = function () {
    modalCalForm.style.display = "block";
  };
});

// Открытие модального окна политики конфиденциальности
policyLinks.forEach((link) => {
  link.onclick = function () {
    modalPolicy.style.display = "block";
  };
});

// Закрытие модальных окон при нажатии на кнопку "Закрыть"
closeButtons.forEach((closeButton) => {
  closeButton.onclick = function () {
    const modal = closeButton.closest(".modal");
    if (modal) {
      modal.style.display = "none";
    }
  };
});

// Закрытие модальных окон при клике вне их содержимого
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};