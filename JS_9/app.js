let count = 0;

function updateCounter() {
  const valueElement = document.getElementById('value');
  valueElement.textContent = count;

  if (count > 0) {
    valueElement.style.color = 'green';
  } else if (count < 0) {
    valueElement.style.color = 'red';
  } else {
    valueElement.style.color = '#222';
  }
}

function decrease() {
  count--;
  updateCounter();
}

function increase() {
  count++;
  updateCounter();
}

function reset() {
  count = 0;
  updateCounter();
}