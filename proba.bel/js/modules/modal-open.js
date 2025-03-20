const modalCalForm = document.getElementById("modalCalForm");
const modalPolicy = document.getElementById("modalPolicy");
const modalThnx = document.getElementById("modalThnx");

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

// Обработчик отправки формы
const form = document.querySelector("#modalCalForm form");
form.onsubmit = function (event) {
  event.preventDefault(); // Предотвращаем отправку формы
  modalCalForm.style.display = "none"; // Закрываем форму
  modalThnx.style.display = "block"; // Открываем modalThnx
};

// Обработчик отправки формы в секции contact-form
const contactForm = document.querySelector("#contact-form form");
contactForm.onsubmit = function (event) {
  event.preventDefault(); // Предотвращаем отправку формы
  modalThnx.style.display = "block"; // Открываем modalThnx
};

// Закрытие modalThnx при нажатии кнопки "Хорошо"
const closeThnxButton = modalThnx.querySelector("button.close-thnx");
closeThnxButton.onclick = function () {
  modalThnx.style.display = "none";
};