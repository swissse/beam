const nameInput = document.querySelector('input[placeholder="Имя"]');
const phoneInput = document.querySelector('input[placeholder="Телефон"]');
const emailInput = document.querySelector('input[type="email"]');
const areaInput = document.querySelector('input[placeholder="Общая площадь, м3"]');
const weightInput = document.querySelector('input[placeholder="Вес, кг"]');
const fromSelect = document.querySelectorAll('.custom-select')[0];
const toSelect = document.querySelectorAll('.custom-select')[1];
const checkbox = document.querySelector('input[type="checkbox"]');

function calculation() {
  if (!nameInput.value.trim()) {
      alert('Пожалуйста, введите ваше имя');
      nameInput.focus();
      return;
    }
    
  if (!phoneInput.value.trim()) {
    alert('Пожалуйста, введите ваш телефон');
    phoneInput.focus();
    return;
  }
  
  if (!emailInput.value.trim()) {
    alert('Пожалуйста, введите вашу почту');
    emailInput.focus();
    return;
  }
  
  if (!areaInput.value.trim()) {
    alert('Пожалуйста, укажите общую площадь');
    areaInput.focus();
    return;
  }
  
  if (!weightInput.value.trim()) {
    alert('Пожалуйста, укажите вес');
    weightInput.focus();
    return;
  }
  
  if (fromSelect.value === null || fromSelect.value === "") {
    alert('Пожалуйста, выберите город отправки');
    fromSelect.focus();
    return;
  }
  
  if (toSelect.value === null || toSelect.value === "") {
    alert('Пожалуйста, выберите город назначения');
    toSelect.focus();
    return;
  }
  
  if (!checkbox.checked) {
    alert('Необходимо согласие на обработку персональных данных');
    checkbox.focus();
    return;
  }

  alert('Заявка отправлена');


document.querySelectorAll('input[type="text"], input[type="email"]').forEach(input => {
  input.value = '';
});

document.querySelectorAll('.custom-select').forEach(select => {
  select.selectedIndex = 0;
});

document.querySelector('input[type="checkbox"]').checked = false;
}