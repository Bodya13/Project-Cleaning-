const selection = document.querySelector('.selection');
const selectTitle = selection.querySelector('.default');
const selectLabels = selection.querySelectorAll('label');

selectTitle.addEventListener('click', () => {
  if ('active' === selection.getAttribute('data-state')) {
    selection.setAttribute('data-state', '');
  } else {
    selection.setAttribute('data-state', 'active');
  }
});

for (let i = 0; i < selectLabels.length; i++) {
    selectLabels[i].addEventListener('click', (evt) => {
        selectTitle.textContent = evt.target.textContent;
        selection.setAttribute('data-state', '');
  });
}