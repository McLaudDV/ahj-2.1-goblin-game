/* eslint-disable no-return-assign */
for (let i = 0; i < 16; i += 1) {
  const field = document.querySelector('.field');
  const newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'square');
  field.append(newDiv);
}

(() => {
  let activeSquare = 1;
  const square = document.querySelectorAll('.square');
  const getSquare = (index) => square[index];
  const deactivateSquare = (index) => getSquare(index).className = 'square';
  const activateSquare = (index) => getSquare(index).className = 'square square_active';
  const next = () => setTimeout(() => {
    deactivateSquare(activeSquare);
    activeSquare = Math.floor(1 + Math.random() * 15);
    activateSquare(activeSquare);
    next();
  }, 700);
  next();
})();
