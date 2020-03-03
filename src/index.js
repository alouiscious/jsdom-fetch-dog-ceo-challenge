// import { directive } from "babel-types";

console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){
  fetchBreedImgs();
  // WHAT THE DIFFERENCE IN CALLING FUNCS HERE OR IN THE FETCH (E.G. SCOPE placeImg();)
  fetchAllBreeds();
  
})

// loads all breeds listed in api
function fetchAllBreeds() {
  let breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => {
    breeds = Object.keys(json.message)
    showBreeds(breeds);
    sortBreeds();
  });
}


function showBreeds(breeds) {
  let breedUl = document.querySelector("#dog-breeds");
  breeds.forEach(breed => {
    breedUl.insertAdjacentHTML("beforeend", `<li id="breedLi">${breed}</li>`);
  });
  
  document.addEventListener("click", function (event) {
    if (event.target.matches("#breedLi")) {
      event.target.style.color = "firebrick";
      event.target.style.text = "strong";
    }
  });

};

function sortBreeds(){
    let selectDropdown = document.querySelector("#breed-dropdown");
    selectDropdown.addEventListener("change", function (event) {
    let breedUl = document.querySelector("#dog-breeds");
    while(breedUl.querySelector("#breedLi")) {
      breedUl.removeChild(breedUl.querySelector("#breedLi"));
    }
    showBreeds(breeds.filter(breed => breed[0]===event.target.value));
  });

};




function fetchBreedImgs() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(resp => {
    resp.message.forEach(img => placeImg(img))
  });
};

function placeImg(breedImgUrl) {
  let allBreedImgs = document.querySelector("#dog-image-container");
  let breedImg = document.createElement('img');
  // for image url access
  breedImg.src = breedImgUrl;
  // NOT breedImg.innerHTML = `<img src="${img}" width="200"></img>`;
  allBreedImgs.appendChild(breedImg);
}; 
