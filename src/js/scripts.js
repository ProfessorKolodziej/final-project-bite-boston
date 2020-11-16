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
    + `<h3> ${restaurant.name} </h3>`
    + `<p> ${restaurant.address} </p>`
    + `<p> ${restaurant.phone} </p>`
    + `<a type="button" class="indo-card-details" href=${restaurant.url} target="_blank">Details</a>`
  + '</div>';
}

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

// restaurant list page
function mapInfoRestaurantList(restaurant) {
  return '<div class="info-card">'
  + `<h3> ${restaurant.name} </h3>`
  + `<p> ${restaurant.phone} </p>`
    + '<div class="image-wrapper">'
      + `<img src=${restaurant.image} class="info-card-image" alt="restaurant-img"/>`
    + '</div>'
    + `<p> ${restaurant.address} </p>`
    + `<p> ${restaurant.introduction} </p>`
    + `<button class="info-card-details-button">  Details </button>`
    + '</div>';
}

function render() {
  restaurantList.forEach((restaurant) => {
    const ul = document.getElementById('restaurant-list');
    const li = document.createElement('li');
    const restaurantHTML = mapInfoRestaurantList(restaurant);
    const parsedHTML = new DOMParser().parseFromString(restaurantHTML, "text/html");
    const button = parsedHTML.querySelector('.info-card-details-button');
    console.log(restaurant);
    button.dataset.restaurant = JSON.stringify(restaurant);

    console.log(parsedHTML);

    // This is where it goes on the page
    li.appendChild(parsedHTML.childNodes[0].querySelector('.info-card'));
    ul.appendChild(li);
  });
}
document.addEventListener('DOMContentLoaded', render);


// This controls the button click for showing the restaurant detail
document.addEventListener('click', event => {
  if (event.target.className === 'info-card-details-button') {
    const restaurant = JSON.parse(event.target.dataset.restaurant);
    console.log(restaurant);
    const p = document.createElement('restaurant-detail');
    p.innerHTML = restaurantDetail(restaurant);
   //p.innerHTML = restaurantDetailBox(restaurant);

    document.body.appendChild(p);
  }
});


// Restaurant detail page scripts

// this is the html for the detail pages 
function restaurantDetail(restaurant) {
  return '<div class="restaurant-detail-name">'
    + `<h2> ${restaurant.name} </h2>`
    + '<div class="image-wrapper">'
      + `<img src=${restaurant.image} class="restaurant-page-image" alt="restaurant-img"/>`
    + '</div>'
    + `<p> ${restaurant.phone} </p>`
    + '</div>'
    +'<div class="restaurant-detail-box">'
    + `<p> ${restaurant.address} </p>`
    + `<p> ${restaurant.hours} </p>`
    + `<p> ${restaurant.price} </p>`
    + `<p> ${restaurant.cuisines} </p>`
    + `<p> ${restaurant.diningstyle} </p>`
    + `<p> ${restaurant.dresscode} </p>`
  + '</div>'
  +'<div class="restaurant-detail-intro">'
  + `<p> ${restaurant.introduction} </p>`
  + '</div>';
  }



