import { GoogleMap } from '@googlemaps/map-loader';
import MarkerWithLabel from '@googlemaps/markerwithlabel';
import restaurantList from './restaurant-data';

const googleMapsAPIKey = process.env.MAP_KEY;
const mapOptions = {
  center: {
    lat: 42.343349, lng: -71.066010,
  },
  zoom: 13,
};

/*
 * Options for loading the Maps JS API.
 */
const apiOptions = {
  version: 'weekly',
  libraries: ['places'],
};

/*
 * Set ID of the div where the map will be loaded,
 * and whether to append to that div.
 */
const mapLoaderOptions = {
  apiKey: googleMapsAPIKey,
  divId: 'google_map',
  append: false, // Appends to divId. Set to false to init in divId.
  mapOptions,
  apiOptions,
};

// Instantiate map loader
const mapLoader = new GoogleMap();

const makeMarker = function (map, position, icon) {
  return new MarkerWithLabel({
    position,
    draggable: false,
    clickable: true,
    map,
    labelContent: '',
    icon,
  });
};

// home page info-window.
function mapInfoWindow(restaurant) {
  return '<div class="info-card">'
    + '<div class="image-wrapper">'
      + `<img src=${restaurant.image} class="info-card-image" alt="restaurant-img"/>`
    + '</div>'
    + `<h3 style="line-height: 50%;"> ${restaurant.name} </h3>`
    + `<p style="line-height: 50%; font-weight: 500;"> ${restaurant.address} </p>`
    + `<p style="line-height: 50%; font-weight: 500;"> ${restaurant.phone} </p>`
    +' <button type="button" id="map-detail-button" class="map-card-details" style="background-color: #CC4B47; color: white; border-style: none; padding: 10px 40px; position: relative; display: block; margin-left: auto; margin-right: auto; border-radius: 3.125rem;">Details</button>'
  + '</div>';
}

// function findRestaurant(){
//   return name 

// }
// restaurantList.find((restaurant) => {
//   var x = event.target.tagName;


// adds the detail page to the detail button on home page
document.addEventListener('click', (event) => {
  if (event.target.className === 'map-card-details') {
    //alert ("yay");
    //console.log(document.getElementById("map-detail-button"))
    // const mapDetailButton = document.getElementById("map-detail-button")
    // mapDetailButton.dataset.restaurant = JSON.stringify(restaurant); 
    // console.log (typeof mapDetailButton)
    // console.log (typeof restaurant)
    let restaurantData = restaurantList;
    console.log (restaurantData)
    console.log (typeof restaurantData)
    let restaurantPage = JSON.stringify(restaurantData)
    let restaurant = JSON.parse(event.target.dataset.restaurantPage);
    // console.log(typeof restaurant);
    let p = document.createElement('restaurant-detail');
    p.innerHTML = restaurantDetail(restaurant);
    document.body.appendChild(p);
  }
  });

mapLoader.initMap(mapLoaderOptions)
  .then((map) => {
    restaurantList.forEach((restaurant) => {
      const marker = makeMarker(map, new google.maps.LatLng(restaurant.location.lat, restaurant.location.lng), restaurant.icon);
      const placeInfo = mapInfoWindow(restaurant);

      const info = new google.maps.InfoWindow({
        content: placeInfo, // this should be a string
      });

      marker.addListener('click', (e) => {
        info.open(map, marker);
      });
    });
  });


// restaurant list page HTML
function mapInfoRestaurantList(restaurant) {
  return '<div class="info-card">'
  + `<h3> ${restaurant.name} </h3>`
  + `<p> ${restaurant.phone} </p>`
    + '<div class="image-wrapper">'
      + `<img src=${restaurant.image} class="info-card-image" alt="restaurant-img"/>`
    + '</div>'
    + `<p> ${restaurant.address} </p>`
    + `<p> ${restaurant.introduction} </p>`
    + '<button class="info-card-details-button">  Details </button>'
    + '</div>';
}
//i dont think we need this here if it's on the filter page too -grace
// function render(){
//   restaurantList.forEach(function(restaurant){
//     var ul= document.getElementById("restaurant-list");
//     var li = document.createElement("li");
//     restaurant.filterTag.forEach(function(tag){
//       li.classList.add(tag);
//     });
//     li.innerHTML=mapInfoRestaurantList(restaurant);
//     ul.appendChild(li);
//   });
// }
// document.addEventListener('DOMContentLoaded', render);

//this creates the cards on the list page
function renderList() {
  restaurantList.forEach((restaurant) => {
    const ul = document.getElementById('restaurant-list');
    const li = document.createElement('li');
    restaurant.filterTag.forEach(function(tag){
      li.classList.add(tag);
    });
    li.classList.add("filterElement");
    const restaurantHTML = mapInfoRestaurantList(restaurant);
    const parsedHTML = new DOMParser().parseFromString(restaurantHTML, 'text/html');
    const button = parsedHTML.querySelector('.info-card-details-button');
    //console.log(restaurant);
    button.dataset.restaurant = JSON.stringify(restaurant);

    //console.log(parsedHTML);
    // This is where it goes on the page
    li.appendChild(parsedHTML.childNodes[0].querySelector('.info-card'));
    ul.appendChild(li);
  });
}
document.addEventListener('DOMContentLoaded', renderList);

// This controls the button click for showing the restaurant detail
document.addEventListener('click', (event) => {
  if (event.target.className === 'info-card-details-button') {
    let restaurant = JSON.parse(event.target.dataset.restaurant);
    console.log(restaurant);
    let p = document.createElement('restaurant-detail');
    p.innerHTML = restaurantDetail(restaurant);
    document.body.appendChild(p);
  }
});

//this hides the list
document.addEventListener('click', event => {
  if (event.target.className === 'info-card-details-button') {
      const info = document.getElementById('restaurant-list');
      if (info.style.display === 'none') {
        info.style.display = 'block';
      } else {
        info.style.display = 'none';
      }}
    });

// this hides the filter button
document.addEventListener('click', (event) => {
  if (event.target.className === 'info-card-details-button') {
    const filter = document.getElementById("filterButton");
    if (filter.style.display === 'none') {
      filter.style.display = 'block';
    } else {
      filter.style.display = 'none';
    }
  }
});

//hides the back button
document.addEventListener('click', (event) => {
  if (event.target.className === 'info-card-details-button') {
    const mapButton = document.getElementById("back-to-map");
    if (mapButton.style.display === 'none') {
      mapButton.style.display = 'block';
    } else {
      mapButton.style.display = 'none';
    }
  }
});

// Restaurant detail page scripts
// this is the html for the detail pages
function restaurantDetail(restaurant) {
  return '<section id= "restaurant-detail">'
    + `<button class="close-detail-button"><</button>`
    +'<div class="detail-container">'
    + `<h2 class="restaurant-name"> ${restaurant.name} </h2>`
    + '<div class="image-wrapper-detail">'
      + `<img src=${restaurant.image} id="detail_image" class="restaurant-page-image" alt="restaurant-img"/>`
    + '</div>'
    +'</div>'
    + `<div class="restaurant-detail-phone-container">`
    +`<img class="phone-icon" src= "./images/phone-icon.png">`
    + `<p class="restaurant-detail-phone"> ${restaurant.phone} </p>`
    + '</div>'
    + '<div class="restaurant-detail-box">'
    + `<h3>Location</h3>`
    + `<p> ${restaurant.address} </p>`
    + `<h3>Hours of Operation</h3>`
    + `<p> ${restaurant.hours} </p>`
    + `<h3>Price</h3>`
    + `<p> ${restaurant.price} </p>`
    + `<h3>Cuisines</h3>`
    + `<p> ${restaurant.cuisines} </p>`
    + `<h3>Dining Style</h3>`
    + `<p> ${restaurant.diningstyle} </p>`
    + `<h3>Dresscode</h3>`
    + `<p> ${restaurant.dresscode} </p>`
  + '</div>'
  + '<div class="restaurant-detail-intro">'
  + `<h3>Introduction</h3>`
  + `<p> ${restaurant.introduction} </p>`
  + '</div>'
  + '</section>';
  }

  //this closes the detail page with the x button
  document.addEventListener('click', (event) => {
    if (event.target.className === 'close-detail-button') {
    const detailPage = document.getElementById("restaurant-detail");
    detailPage.remove();
    }
  });
  
  //this brings up the list page again
  document.addEventListener('click', event => {
    if (event.target.className === 'close-detail-button') {
        const info = document.getElementById('restaurant-list');
        if (info.style.display === 'none') {
          info.style.display = 'block';
        } else {
          info.style.display = 'none';
        }}
      });

//this brings up the filter again
      document.addEventListener('click', (event) => {
        if (event.target.className === 'close-detail-button') {
          const filter = document.getElementById("filterButton");
          if (filter.style.display === 'none') {
            filter.style.display = 'block';
          } else {
            filter.style.display = 'none';
          }
        }
      });

      //brings up the back button
      document.addEventListener('click', (event) => {
        if (event.target.className === 'close-detail-button') {
          const mapButton = document.getElementById("back-to-map");
          if (mapButton.style.display === 'none') {
            mapButton.style.display = 'block';
          } else {
            mapButton.style.display = 'none';
          }
        }
      });
  // document.getElementById('close-detail-button').addEventListener(alert("hello"))

//this closes the detail page with the x button
// document.addEventListener('click', (event) => {
//   if (event.target.className === 'close-detail-button') {
//     const detailHTML = document.getElementById('restaurant-detail');
//     if (detailHTML.style.display === 'none') {
//       detailHTML.style.display = 'block';
//     } else {
//       detailHTML.style.display = 'none';
//     }
//   }
// });

  // document.getElementById('close-detail-button').addEventListener('click', () => {
  //   history.back();
  // });

  // function hideDetail() {
  //   const detail = document.getElementById('restaurant-detail');
  //   if (detail.style.display === 'none') {
  //     detail.style.display = 'block';
  //   } else {
  //     detail.style.display = 'none';
  //   }
  // }

  // document.getElementById('close-detail-button').document.addEventListener('click', hideDetail);


//filter 
var selectedTag = new Set();
const checkboxes = document.getElementsByClassName("filterSelection");

for ( const checkbox of checkboxes ) {
  checkbox.addEventListener("change", filterSelection);
}

function filterSelection(){
  var x, i;
  if(this.checked){
    selectedTag.add('.' + this.value);
  }
  else{
    selectedTag.delete('.' + this.value);
  }

  var allclass = Array.from(selectedTag).join('');

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
