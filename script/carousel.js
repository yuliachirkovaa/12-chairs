import createElement from './create-element.js';

export default class Carousel {
  constructor() {
  }

  render() {
    let carousel = createElement(`
      <ul class="carousel-cards list-reset">
        <li class="carousel-card">
          <div class="card card-1">
            <p class="card__text margin-reset">Строительство железнодорожной магистрали Москва-Васюки</p>
          </div>
          <div class="card card-2">
            <p class="card__text margin-reset">Открытие фешенебельной гостиницы &laquo;Проходная пешка&raquo; и&nbsp;других небоскрёбов</p>
          </div>
        </li>
        <li class="carousel-card">
          <div class="card card-3">
            <p class="card__text margin-reset">Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет</p>
          </div>
        </li>
        <li class="carousel-card">
          <div class="card card-4">
            <p class="card__text margin-reset">Строительство дворца для турнира</p>
          </div>
          <div class="card card-5">
            <p class="card__text margin-reset">Размещение гаражей для гостевого автотранспорта</p>
          </div>
        </li>
        <li class="carousel-card">
          <div class="card card-6">
            <p class="card__text margin-reset">Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов</p>
          </div>
        </li>
        <li class="carousel-card">
          <div class="card card-7">
            <p class="card__text margin-reset">Создание аэропорта &laquo;Большие Васюки&raquo; с&nbsp;регулярным отправлением почтовых самолётов и&nbsp;дирижаблей во&nbsp;все концы света, включая Лос-Анжелос и&nbsp;Мельбурн</p>
          </div>
        </li>
      </ul>
    `);

    document.querySelector('.stages__wrapper').append(carousel);

    let carouselBtns = createElement(`
      <div class="carousel-btns">
        <button class="carousel-btn carousel-btn--left btn-reset" aria-label="Прокрутить карусель этапов назад">
          <svg class="carousel-btn__arrow" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="22" r="22" transform="rotate(-180 22 22)"/>
            <path d="M24.5382 30.4614L16.0767 21.9999L24.5382 13.5384" stroke-width="2" stroke-linecap="square"/>
          </svg>
        </button>
        <div class="carousel-dots">
          <svg class="carousel-dot carousel-dot--active" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5"/>
          </svg>
          <svg class="carousel-dot" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5"/>
          </svg>
          <svg class="carousel-dot" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5"/>
          </svg>
          <svg class="carousel-dot" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5"/>
          </svg>
          <svg class="carousel-dot" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5"/>
          </svg>
        </div>
        <button class="carousel-btn carousel-btn--right btn-reset" aria-label="Прокрутить карусель этапов вперёд">
          <svg class="carousel-btn__arrow" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="22" r="22"/>
            <path d="M19.4618 13.5385L27.9233 22L19.4618 30.4615" stroke-width="2" stroke-linecap="square"/>
          </svg>
        </button>
      </div>
    `);

    document.querySelector('.stages__wrapper').append(carouselBtns);

    this.carousel = carousel;
    this.carouselBtns = carouselBtns;
  }

  initCarousel() {
    let carousel = this.carousel;
    let carouselBtns = this.carouselBtns;
    let carouselBtnRight = carouselBtns.querySelector('.carousel-btn--right');
    let carouselBtnLeft = carouselBtns.querySelector('.carousel-btn--left');
    let dots = carouselBtns.querySelectorAll('.carousel-dot');
    let carouselWidth;
    let counter = 0;

    changeSlide();

    carouselBtnRight.addEventListener('click', carouselRightClick);
    carouselBtnLeft.addEventListener('click', carouselLeftClick);

    function carouselRightClick() {
      carouselWidth = carousel.offsetWidth;
      counter++;
      changeSlide();
    }

    function carouselLeftClick() {
      carouselWidth = carousel.offsetWidth;
      counter--;
      changeSlide();
    }

    function changeSlide() {
      carousel.style.transform = `translateX(${-((carouselWidth + 40) * counter)}px)`;

      if (counter === 0) {
        carouselBtnLeft.disabled = true;
      } else {
        carouselBtnLeft.disabled = false;
      }

      if (counter === 4) {
        carouselBtnRight.disabled = true;
      } else {
        carouselBtnRight.disabled = false;
      }

      carouselBtns.querySelector('.carousel-dot--active').classList.remove('carousel-dot--active');
      dots[counter].classList.add('carousel-dot--active');
    }
  }

  removeCarousel() {
    this.carousel.remove();
    this.carouselBtns.remove();
  }
}
