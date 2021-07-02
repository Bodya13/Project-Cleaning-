const selections = document.querySelectorAll('.selection');
const selectTitles = document.querySelectorAll('.default');
const selectLabels = document.querySelectorAll('label');
const submitBtns = document.querySelectorAll('.submit-btn');
const popup = document.querySelector('.popup');
const signUpBtns = document.querySelectorAll('.sign-up');

selectTitles.forEach((item, index) => {
  item.addEventListener('click', () => {
    if ('active' === selections[index].getAttribute('data-state')) {
      selections[index].setAttribute('data-state', '');
    } else {
      selections[index].setAttribute('data-state', 'active');
    }
  })
});

for (let i = 0; i < selectLabels.length; i++) {
    selectLabels[i].addEventListener('click', (evt) => {
      let index = evt.target.getAttribute('data-index');
      if ('active' === selections[index].getAttribute('data-state')) {
        selectTitles[index].textContent = evt.target.textContent;
        selections[index].setAttribute('data-state', '');
        selectTitles[index].style.color = "#000";
      }
  });
}

signUpBtns.forEach(item => {
  item.addEventListener('click', () => {
    popup.style.display = 'flex';
  })
})


submitBtns.forEach(item => {
  item.addEventListener('click', function(){
    popup.style.display = 'flex';
    document.querySelector('form').style.display = 'none';
    const div = document.createElement('div');
    div.classList.add('success');
    const h2 = document.createElement('h2');
    h2.innerHTML = 'Вы успешно записаны!';
    const p = document.createElement('p');
    p.innerHTML = 'Сейчас вам перезвонят для уточнения деталей.';

    div.appendChild(h2);
    div.appendChild(p);
    popup.append(div);
  })
})

$(document).ready(function(){
  $(".phone").inputmask("+380 (99) 999-99-99");
});

$(document).ready(function(){
  $(".date").inputmask("99.99.9999");
});