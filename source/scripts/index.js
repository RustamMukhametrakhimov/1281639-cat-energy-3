/* в этот файл добавляет скрипты*/

//меню + отработка наличия js
const nav = document.querySelector('.navigation');
const map = document.querySelector('.map--no-js');
const toggleBtn = document.querySelector('.navigation__toggle');
const toggleText = toggleBtn.querySelector('span');

nav.classList.remove('navigation--no-js');
nav.classList.remove('navigation--opened');
map.classList.remove('map--no-js');

nav.addEventListener('click', () => {
  if (toggleBtn.classList.contains('navigation--opened')) {
    toggleText.content = 'Закрыть меню';
  } else {
    toggleText.content = 'Открыть меню';
  }
  nav.classList.toggle('navigation--opened');
});


//слайдер
const beforeImg = document.querySelector('.compare-slider__image--before');
const afterImg = document.querySelector('.compare-slider__image--after');
const divider = document.querySelector('.compare-slider__divider');

if (divider) {

  const clipImage = (value) => {
    beforeImg.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
    afterImg.style.clipPath = `inset(0 0 0 ${value}%)`;
  };

  const setDividerPosition = (value) => {
    divider.style.left = `${value}%`;
  };

  document.getElementById('slider-range').addEventListener('input', (e) => {
    const position = e.target.value;
    clipImage(position);
    setDividerPosition(position);
  });
}

