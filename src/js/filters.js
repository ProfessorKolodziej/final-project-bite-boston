import restaurantList from './restaurant-data';
var selectedTag = new Set();

function filterSelection(callback, classname){
  var x, i;
  if(callback.checked){
    selectedTag.add('.' + classname);
  }
  else{
    selectedTag.delete('.' + classname);
  }

  allclass = Array.from(selectedTag).join('');

  x = document.getElementsByClassName('filterElement');
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i<x.length; i++){
    if (allclass.length == 0 || x[i].matches(allclass)) {
      x[i].classList.remove('filter');
    }
    else { 
      x[i].classList.add('filter');
    }
  }
}


//restaurant list page
function mapInfoRestaurantList(restaurant) {
  return '<div class="info-card">' +
  `<h3> ${restaurant.name} </h3>` +
  `<p> ${restaurant.phone} </p>`+
    '<div class="image-wrapper">' +
      `<img src=${restaurant.image} class="info-card-image" alt="restaurant-img"/>` +
    '</div>' +
    `<p> ${restaurant.address} </p>` +
    `<p> ${restaurant.introduction} </p>` +
    `<a type="button" class="indo-card-details" href=${restaurant.url} target="_blank">Details</a>` +
  '</div>'
}


function render(){
  restaurantList.forEach(function(restaurant){
    var ul= document.getElementById("restaurant-list");
    var li = document.createElement("li");
    li.classList.add('filterElement');
    restaurant.filterTag.forEach(function(tag){
      li.classList.add(tag);
    });
    li.innerHTML=mapInfoRestaurantList(restaurant);
    ul.appendChild(li);
  });
}
document.addEventListener("DOMContentLoaded", render);

