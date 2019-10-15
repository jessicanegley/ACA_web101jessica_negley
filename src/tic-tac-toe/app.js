function addGamePiece(selectedElement) {
  //create new element
  let newElement = document.createElement('h1')
  // add text to element
  newElement.innerHTML = 'x'
  // add element with text to selectedElement on page
  selectedElement.appendChild(newElement)
  console.log('show clicked div', selectedElement)
}
// if statement
// example below
if (player1 = 'x') {
  newElement.innerHTML = 'o'
} else {
  newElement.innerHTML = 'x'
}