document.addEventListener("DOMContentLoaded", function () {
  const applyPhoneMask = (input) => {
    if (input) {
      IMask(input, {
        mask: "+375 (00) 000-00-00",
        lazy: false, // Всегда показывать маску
      });
    }
  };

  // Инициализация маски для всех существующих полей
  const phoneInputs = document.querySelectorAll("input[type='tel']");
  phoneInputs.forEach(applyPhoneMask);

  // Повторная инициализация маски при открытии модального окна
  const modal = document.getElementById("modalCalForm");
  if (modal) {
    modal.addEventListener("show", function () {
      const modalPhoneInput = modal.querySelector("input[type='tel']");
      applyPhoneMask(modalPhoneInput);
    });
  }
});