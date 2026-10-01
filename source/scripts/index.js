/* в этот файл добавляет скрипты*/
document.addEventListener('DOMContentLoaded', () => {
  const beforeImg = document.querySelector('.compare-slider__image--before');

  document.getElementById('slider-range').addEventListener('input', (e) => {
    const position = e.target.value;
    beforeImg.style.width = `${position }%`;
  });
});
