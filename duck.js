'use strict';

console.log('wassam world!');



let voteCount = 25;
let productArray = [];
// **** grabbing elements from html and assigning them variables ****//
let imgContainer = document.getElementById('imgContainer');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

let resultsBtn = document.getElementById('show-results-btn');
let containerOne = document.getElementById('results-container');


// ********* Constructor Function *********
//** all products in the factory name, images views and clicks */
function Product(name, fileExtension = 'jpg'){
  this.name = name;
  this.img = `${name}.${fileExtension}`;
  this.views = 0;
  this.clicks = 0;

  productArray.push(this);
}

//***** helper functions/ UTILITES  *//
function randomIndex(){
  return Math.floor(Math.random() * productArray.length);
}

function renderImgs(){
  let imgOneIndex = randomIndex();
  let imgTwoIndex = randomIndex();
  let imgThreeIndex = randomIndex();

  //** this will run and make sure its unique *//
  while (imgOneIndex === imgTwoIndex || imgTwoIndex === imgThreeIndex || imgOneIndex === imgThreeIndex) {
    imgTwoIndex = randomIndex();
    imgThreeIndex = randomIndex();
  }

  imgOne.src = productArray[imgOneIndex].img;
  imgTwo.src = productArray[imgTwoIndex].img;
  imgThree.src = productArray[imgThreeIndex].img;

  productArray[imgOneIndex].views++;
  productArray[imgTwoIndex].views++;
  productArray[imgThreeIndex].views++;

  imgOne.alt = productArray[imgOneIndex].name;
  imgTwo.alt = productArray[imgTwoIndex].name;
  imgThree.alt = productArray[imgThreeIndex].name;
}

function handleClick(event){
  console.dir(event.target);
  let imgClicked = event.target.alt;
  // TOdo; call the render img to reload new images
  // TODO: add clicks to the image that was clicked
  // TODO: derement the vote count
  for(let i = 0; i < productArray.length; i++){
    if(productArray[i].name === imgClicked){
      productArray[i].clicks++;
    }
  }
  voteCount--;
  console.log(voteCount);
  renderImgs();
  if(voteCount === 0){
    imgContainer.removeEventListener('click', handleClick);
  }
}
function handleShowResults(){
  //TODO: display results
  if(voteCount === 0){
    for(let i = 0; i < productArray.length; i++){
      let liElem = document.createElement('li');
      liElem.innerHTML = `<span class = 'nameOfImg'>${productArray[i].name}</span> was viewed: ${productArray[i].views} and clicked:${productArray[i].clicks}`;
      containerOne.appendChild(liElem);
    }
  }
}

// ******** Object creation ********* //

new Product('bag', 'jpg');
new Product('banana', 'jpg');
new Product('bathroom', 'jpg');
new Product('boots', 'jpg');
new Product('breakfast', 'jpg');
new Product('bubblegum', 'jpg');
new Product('chair', 'jpg');
new Product('cthulhu', 'jpg');
new Product('dog-duck', 'jpg');
new Product('dragon', 'jpg');
new Product('pen', 'jpg');
new Product('pet-sweep', 'jpg');
new Product('scissors', 'jpg');
new Product('shark', 'jpg');
new Product('sweep', 'png');
new Product('tauntaun', 'jpg');
new Product('unicorn', 'jpg');
new Product('water-can', 'jpg');
new Product('wine-glass', 'jpg');


renderImgs();


imgContainer.addEventListener('click', handleClick);
resultsBtn.addEventListener('click', handleShowResults);
