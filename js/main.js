const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;
const LEFT_ARROW_BUTTON_ID = `leftArrowButton`;
const RIGHT_ARROW_BUTTON_ID = `rightArrowButton`;

const mainElement = document.querySelector(`section.main`);
const screens = document.querySelectorAll(`template`);
let currentScreenNumber = 0;

const setScreen = (screen) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(screen.cloneNode(true));
};

const select = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  currentScreenNumber = index;

  setScreen(screens[index].content);
};

document.addEventListener(`keydown`, (event) => {
  switch (event.keyCode) {
    case RIGHT_ARROW:
      select(currentScreenNumber + 1);
      break;
    case LEFT_ARROW:
      select(currentScreenNumber - 1);
      break;
  }
});

// Add arrow buttons

const arrowsParentElement = document.querySelector(`.app`);
const arrowsElement = document.createElement(`div`);

arrowsElement.className = `arrows__wrap`;
arrowsElement.innerHTML = `
  <style>
    .arrows__wrap {
      position: absolute;
      top: 135px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
      color: #FFF;
    }
  </style>
  <button id="${LEFT_ARROW_BUTTON_ID}" class="arrows__btn"><-</button>
  <button id="${RIGHT_ARROW_BUTTON_ID}" class="arrows__btn">-></button>`;

arrowsParentElement.appendChild(arrowsElement);

arrowsElement.addEventListener(`click`, (event) => {
  switch (event.target.id) {
    case RIGHT_ARROW_BUTTON_ID:
      select(currentScreenNumber + 1);
      break;
    case LEFT_ARROW_BUTTON_ID:
      select(currentScreenNumber - 1);
      break;
  }
});

// Select initial screen
select(currentScreenNumber);
