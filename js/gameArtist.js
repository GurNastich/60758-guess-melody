import getElementFromTemplate from './getElementFromTemplate';
import setScreen from './setScreen';
import resultSuccessElement from './resultSuccess';
import failTriesElement from './failTries';
import failTimeElement from './failTime';
import {welcomeElement} from './welcome';

const templateString = `
  <section class="game game--artist">
    <header class="game__header">
      <a class="game__back" href="#">
        <span class="visually-hidden">Сыграть ещё раз</span>
        <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
      </a>

      <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle class="timer__line" cx="390" cy="390" r="370" style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center" />
      </svg>

      <div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer__mins">05</span>
        <span class="timer__dots">:</span>
        <span class="timer__secs">00</span>
      </div>

      <div class="game__mistakes">
        <div class="wrong"></div>
        <div class="wrong"></div>
        <div class="wrong"></div>
      </div>
    </header>

    <section class="game__screen">
      <h2 class="game__title">Кто исполняет эту песню?</h2>
      <div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio></audio>
      </div>

      <form class="game__artist">
        <div class="artist">
          <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-1" id="answer-1">
          <label class="artist__name" for="answer-1">
            <img class="artist__picture" src="http://placehold.it/134x134" alt="Пелагея">
            Пелагея
          </label>
        </div>

        <div class="artist">
          <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-2" id="answer-2">
          <label class="artist__name" for="answer-2">
            <img class="artist__picture" src="http://placehold.it/134x134" alt="Пелагея">
            Краснознаменная дивизия имени моей бабушки
          </label>
        </div>

        <div class="artist">
          <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-3" id="answer-3">
          <label class="artist__name" for="answer-3">
            <img class="artist__picture" src="http://placehold.it/134x134" alt="Пелагея">
            Lorde
          </label>
        </div>
      </form>
    </section>
  </section>`;

const addReturnToWelcomeScreenClick = () => {
  const returnToWelcomeScreenElement = document.querySelector(`.game__logo`);
  returnToWelcomeScreenElement.addEventListener(`click`, () => {
    setScreen(welcomeElement);
  });
};

const addReplayButtonClick = () => {
  const replayButton = document.querySelector(`.result__replay`);
  replayButton.addEventListener(`click`, () => {
    setScreen(welcomeElement);
  });
};

const setResultScreen = () => {
  const answerArray = Array.from(document.querySelectorAll(`.artist`));
  answerArray.forEach((answerElement) => {
    answerElement.addEventListener(`click`, () => {
      let resultScreen;
      switch (Math.floor(Math.random() * 3) + 1) {
        case 1:
          resultScreen = resultSuccessElement;
          break;
        case 2:
          resultScreen = failTimeElement;
          break;
        case 3:
          resultScreen = failTriesElement;
          break;
      }
      setScreen(resultScreen);
      addReplayButtonClick();
    });
  });
};

const gameArtistElement = getElementFromTemplate(templateString);

const addArtistSelect = () => {
  setResultScreen();
  addReturnToWelcomeScreenClick();
};

export {gameArtistElement, addArtistSelect};
