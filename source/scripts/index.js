/* в этот файл добавляет скрипты*/

//меню + отработка наличия js

const nav = document.querySelector('.navigation');
const toggleBtn = document.querySelector('.navigation__toggle');
const toggleText = toggleBtn.querySelector('span');

nav.classList.remove('navigation--no-js');

nav.addEventListener('click', () => {
  if (toggleBtn.classList.contains('navigation--closed')) {
    toggleText.content = 'Открыть меню';
  } else {
    toggleText.content = 'Закрыть меню';
  }
  nav.classList.toggle('navigation--closed');
});


//слайдер
document.addEventListener('DOMContentLoaded', () => {
  const beforeImg = document.querySelector('.compare-slider__image--before');

  document.getElementById('slider-range').addEventListener('input', (e) => {
    const position = e.target.value;
    beforeImg.style.width = `${position }%`;
  });
});
