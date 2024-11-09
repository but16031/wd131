// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Sugar", "Sweets", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };


// const foodsElement = document.querySelector('#favorite-foods');
// function createandAppendFoodItem(food) {
//   let favoriteFood = document.createElement('li');
//   favoriteFood.textContent = food;
//   foodsElement.appendChild(favoriteFood);
// }
// myInfo.favoriteFoods.forEach(createandAppendFoodItem);

// const hobbiesElement = document.querySelector('#hobbies')
// function createandAppendHobbyItems(hobby) {
//     let favhobbies = document.createElement('ul');
//     favhobbies.textContent = hobby;
//     hobbiesElement.appendChild(favhobbies) 
// }
// myInfo.hobbies.forEach(createandAppendHobbyItems)

// const placesLivedElement = document.querySelector('#places-lived')
// function createandAppendPlacesLived(place) {
//     let placesLived = document.createElement('dl')
//     placesLived.textContent = place;
//     placesLivedElement.appendChild(placesLived)
// }

// myInfo.placesLived.forEach(function(placeInfo) {
//     createandAppendPlacesLived(placeInfo.place);
//   });


const ids = [];
document.querySelectorAll('[id]').forEach(element => {
  ids.push(element.id);
});
console.log(ids);





// // with .map
//   const foodsElement = document.querySelector('#favorite-foods');
//   function mapFoodItem(food) {
//     let favoriteFood = document.createElement('li');
//     favoriteFood.textContent = food;
//     return favoriteFood;
//   }
//   // this function could also be written this way using a template literal:
//   function mapFoodItemSmall(food) {
//     return `<li>${food}</li>`;
//   }
//   const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
//   // we need to flatten the array of strings into one big string. .join does this.
//   foodsElement.innerHTML = foodListElements.join('');
document.querySelector.element.hobbies.cssstyle