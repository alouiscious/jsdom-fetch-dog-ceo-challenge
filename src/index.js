// import { directive } from "babel-types";

console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){
  fetchBreedImgs();
  fetchAllBreeds();
})

function fetchAllBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => Object.keys(json.message));
}
// let breeds = Object.keys(json.message);

function listBreed(breeds) {
  const breedUl = document.querySelector("ul#dog-breeds")
  const breedLi = document.createElement("li")
  breedLi.innerHTML = `<li>Hello ${breeds}</li>`
  breedUl.appendChild("breedLi")
}

function fetchBreedImgs() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => json.message.forEach(img => placeImg(img)));
}


function placeImg(img) {
  const allImgs = document.querySelector("#dog-image-container");
  const breedImgs = document.createElement('img');
  breedImgs.innerHTML = `<img src="${img}"><br>`
  allImgs.appendChild(breedImgs);

}

