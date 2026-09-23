const form = document.querySelector('.form');
const status = document.querySelector('.form__status');

const invalidFieldNames = new Set();
let announceTimer;

function fieldName(field) {
  if (field.type === 'radio') {
    return field.closest('fieldset').querySelector('legend').textContent;
  }
  return field.labels[0].textContent;
}

function announce(message) {
  status.textContent = '';
  window.setTimeout(() => {
    status.textContent = message;
  }, 100);
}

form.addEventListener('invalid', (event) => {
  invalidFieldNames.add(fieldName(event.target));

  window.clearTimeout(announceTimer);
  announceTimer = window.setTimeout(() => {
    announce(`Bitte prüfe diese Felder: ${[...invalidFieldNames].join(', ')}.`);
    invalidFieldNames.clear();
  }, 0);
}, true);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  announce('Eingaben vollständig. Speichern kommt irgendwann bestimmt');
});
