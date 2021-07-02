const selection = document.querySelector('.selection');
const selectTitle = selection.querySelector('.default');
const selectLabels = selection.querySelectorAll('label');
const submitBtn = document.querySelector('.submit-btn');
const popup = document.querySelector('.popup');
const signUp = document.querySelector('.sign-up');

selectTitle.addEventListener('click', () => {
  if ('active' === selection.getAttribute('data-state')) {
    selection.setAttribute('data-state', '');
  } else {
    selection.setAttribute('data-state', 'active');
  }
});

for (let i = 0; i < selectLabels.length; i++) {
    selectLabels[i].addEventListener('click', (evt) => {
      if ('active' === selection.getAttribute('data-state')) {
        selectTitle.textContent = evt.target.textContent;
        selection.setAttribute('data-state', '');
        selectTitle.style.color = "#000";
      }
  });
}

signUp.addEventListener('click', () => {
  popup.style.display = 'flex';
})




console.log(submitBtn);
submitBtn.addEventListener('click', function(){
  console.log('test');
})

// submitBtn.addEventListener('click', () => {
//   console.log('test');
//   document.querySelector('form').style.display = 'none';
//   const div = document.createElement('div');
//   div.classList.add('success');
//   const h2 = document.createElement('h2');
//   h2.innerHTML = 'Вы успешно записаны!';
//   const p = document.createElement('p');
//   p.innerHTML = 'Сейчас вам перезвонят для уточнения деталей.';

//   div.appendChild(h2);
//   div.appendChild(p);
//   popup.append(div);
// });

$(document).ready(function(){
  $(".phone").inputmask("+380 (99) 999-99-99");
});

$(document).ready(function(){
  $(".date").inputmask("99.99.9999");
});