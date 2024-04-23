import createElement from './create-element.js';

export default class SliderMedium {
  constructor() {
  }

  render() {
    let slider = createElement(`
      <div class="itcss slider-medium">
        <div class="itcss__wrapper">
          <div class="itcss__items">
            <div class="itcss__item">
              <div class="participant">
                <img class="participant__avatar" src="img/participant-avatar.png" alt="Участник турнира">
                <h3 class="participant__name margin-reset">Хозе-Рауль Капабланка</h3>
                <p class="participant__descr margin-reset">Чемпион мира по шахматам</p>
                <a class="btn btn--small btn-reset" href="https://ru.wikipedia.org/wiki/Капабланка,_Хосе_Рауль" target="_blank">Подробнее</a>
              </div>
              <div class="participant participant-gap">
                <img class="participant__avatar" src="img/participant-avatar.png" alt="Участник турнира">
                <h3 class="participant__name margin-reset">Эммануил Ласкер</h3>
                <p class="participant__descr margin-reset">Чемпион мира по шахматам</p>
                <a class="btn btn--small btn-reset" href="https://ru.wikipedia.org/wiki/Ласкер,_Эмануил" target="_blank">Подробнее</a>
              </div>
            </div>
            <div class="itcss__item">
              <div class="participant">
                <img class="participant__avatar" src="img/participant-avatar.png" alt="Участник турнира">
                <h3 class="participant__name margin-reset">Александр Алехин</h3>
                <p class="participant__descr margin-reset">Чемпион мира по шахматам</p>
                <a class="btn btn--small btn-reset" href="https://ru.wikipedia.org/wiki/Алехин,_Александр_Александрович" target="_blank">Подробнее</a>
              </div>
              <div class="participant participant-gap">
                <img class="participant__avatar" src="img/participant-avatar.png" alt="Участник турнира">
                <h3 class="participant__name margin-reset">Арон Нимцович</h3>
                <p class="participant__descr margin-reset">Чемпион мира по шахматам</p>
                <a class="btn btn--small btn-reset" href="https://ru.wikipedia.org/wiki/Нимцович,_Арон_Исаевич" target="_blank">Подробнее</a>
              </div>
            </div>
            <div class="itcss__item">
              <div class="participant">
                <img class="participant__avatar" src="img/participant-avatar.png" alt="Участник турнира">
                <h3 class="participant__name margin-reset">Рихард Рети</h3>
                <p class="participant__descr margin-reset">Чемпион мира по шахматам</p>
                <a class="btn btn--small btn-reset" href="https://ru.wikipedia.org/wiki/Рети,_Рихард" target="_blank">Подробнее</a>
              </div>
              <div class="participant participant-gap">
                <img class="participant__avatar" src="img/participant-avatar.png" alt="Участник турнира">
                <h3 class="participant__name margin-reset">Остап Бендер</h3>
                <p class="participant__descr margin-reset">Гроссмейстер</p>
                <a class="btn btn--small btn-reset" href="https://ru.wikipedia.org/wiki/Остап_Бендер" target="_blank">Подробнее</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);

    this.slider = slider;

    document.querySelector('.participants__wrapper').append(slider);
  }

  removeSlider() {
    this.slider.remove();
  }
}
