import { GoogleMap } from '@googlemaps/map-loader';
import MarkerWithLabel from '@googlemaps/markerwithlabel';
import restaurantList from './restaurant-data';

const googleMapsAPIKey = process.env.MAP_KEY;
const mapOptions = {
  center: {
    lat: 42.343349, lng: -71.066010
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

const makeMarker = function(map, position, icon) {
  return new MarkerWithLabel({
    position: position,
    draggable: false,
    clickable: true,
    map: map,
    labelContent: '',
    icon: icon
  });
}

//home page info-window.
function mapInfoWindow(restaurant) {
  return '<div class="info-card">' +
    '<div class="image-wrapper">' +
      `<img src=${restaurant.image} class="info-card-image" alt="restaurant-img"/>` +
    '</div>' +
    `<h3> ${restaurant.name} </h3>` +
    `<p> ${restaurant.address} </p>` +
    `<p> ${restaurant.phone} </p>`+
    `<a type="button" class="indo-card-details" href=${restaurant.url} target="_blank">Details</a>` +
  '</div>'
}


mapLoader.initMap(mapLoaderOptions)
  .then((map) => {
    restaurantList.forEach(function(restaurant) {
      let marker = makeMarker(map, new google.maps.LatLng(restaurant.location.lat, restaurant.location.lng), restaurant.icon);
      const placeInfo = mapInfoWindow(restaurant)

      const info = new google.maps.InfoWindow({
        content: placeInfo //this should be a string
      });

      marker.addListener("click", function (e) {
        info.open(map, marker);
      });
    })
  });

//restaurant list page
function mapInfoRestaurantList(restaurant) {
  return '<div class="info-card">' +
    '<div class="image-wrapper">' +
      `<img src=${restaurant.image} class="info-card-image" alt="restaurant-img"/>` +
    '</div>' +
    `<h3> ${restaurant.name} </h3>` +
    `<p> ${restaurant.address} </p>` +
    `<p> ${restaurant.phone} </p>`+
    `<a type="button" class="indo-card-details" href=${restaurant.url} target="_blank">Details</a>` +
  '</div>'
}

function render(){
  restaurantList.forEach(function(restaurant){
    var ul= document.getElementById("restaurant-list");
    var li = document.createElement("li");
    li.innerHTML=mapInfoRestaurantList(restaurant);
    ul.appendChild(li);
  });
}
document.addEventListener("DOMContentLoaded", render);

