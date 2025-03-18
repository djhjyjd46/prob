document.addEventListener("DOMContentLoaded", function () {
    const applyPhoneMask = (input, maskColor = "gray") => {
      if (input) {
        const mask = IMask(input, {
          mask: "+375 (00) 000-00-00",
          lazy: false, // Всегда показывать маску
          placeholderChar: "_", // Символ маски
        });
  
        // Применяем цвет к placeholder-символам
        input.style.color = maskColor;
  
        input.addEventListener("input", function () {
          // Если пользователь ввёл хотя бы 1 символ, меняем цвет на черный
          input.style.color = input.value.replace(/\D/g, "").length > 0 ? "black" : maskColor;
        });
  
        return mask;
      }
    };
  
    // Инициализация маски для всех существующих полей
    const phoneInputs = document.querySelectorAll("input[type='tel']");
    phoneInputs.forEach((input) => applyPhoneMask(input));
  
    // Повторная инициализация маски при открытии модального окна
    const modal = document.getElementById("modalCalForm");
    if (modal) {
      modal.addEventListener("show", function () {
        const modalPhoneInput = modal.querySelector("input[type='tel']");
        applyPhoneMask(modalPhoneInput, "red"); // Меняем цвет маски для модалки
      });
    }
  });
  