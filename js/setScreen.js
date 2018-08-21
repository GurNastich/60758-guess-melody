const mainElement = document.querySelector(`section.main`);

const setScreen = (screen) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(screen);
};

export default setScreen;
