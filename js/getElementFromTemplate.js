const getElementFromTemplate = (templateString) => {
  const element = document.createElement(`div`);
  element.innerHTML = templateString;

  return element.cloneNode(true);
};

export default getElementFromTemplate;
