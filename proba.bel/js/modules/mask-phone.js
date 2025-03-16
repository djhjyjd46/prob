document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.querySelector("input[type='tel']");
  
  if (phoneInput) { // Проверяем, что элемент найден
      IMask(phoneInput, {
          mask: "+375 (00) 000-00-00",
          lazy: false, // Всегда показывать маску
      });
  } else {
      console.error("Ошибка: поле ввода телефона не найдено!");
  }
});