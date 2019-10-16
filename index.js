
const check = document.querySelector('#f');

const getNumberChild = (elem) => {
  const elemTagName = elem.tagName.toLowerCase();
  let i = 1;
  let prevElem = elem.previousElementSibling;
  while (prevElem){
    i++;
    prevElem = prevElem.previousElementSibling;
  }
  return( (i>1)?`:nth-child(${i})`:elemTagName);
};

const getPath = ( element ) => {
  let currElem = element;
  let pathToElement = [];
  while( currElem.tagName !== 'BODY' ){
    pathToElement.unshift( getNumberChild( currElem ) );
    currElem = currElem.parentNode;
  }
  pathToElement.unshift('body');
  pathToElement = pathToElement.join(' ');
  console.log(pathToElement);
  console.log(document.querySelectorAll(pathToElement));
  return pathToElement;
};
  

getPath(check);
