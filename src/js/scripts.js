import { GoogleMap } from '@googlemaps/map-loader';
import MarkerWithLabel from '@googlemaps/markerwithlabel';
import $ from "jquery";

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

//Restaurant database: add restaurant information here and use this to build the info-window, detail page and list page
const restaurants = [
  {
    name: 'Oishii Boston',
    location: {
      lat: 42.343349, lng: -71.066010
    },
    image: '../images/oishii.jpg',
    address: '1166 Washington St #110, Boston, MA 02118',
    phone: '(617)482-8868',
    icon: '../images/tuna.png',
    url: '../detail.html'
  },
  {
    name: 'Grill 23 & Bar',
    location: {
      lat: 42.349411, lng: -71.071892
    },
    image: '../images/grill23.jpg',
    address: '161 Berkeley St, Boston, MA 02116',
    phone: ' (617)542-2255',
    icon: '../images/meat.png',
    url: 'https://grill23.com/'
  },
  {
    name: 'Tatte Bakery & Cafe',
    location: {
      lat: 42.372589, lng: -71.116982
    },
    image: '../images/tatte.jpg',
    address: '1288 Massachusetts Ave, Cambridge, MA 02138',
    phone: ' (617)441-4011',
    icon: '../images/bread.png',
    url: 'https://tattebakery.com//'
  },
  {
    name: 'Neptune Oyster',
    location: {
      lat: 42.363220, lng: -71.055939
    },
    image: '../images/neptune.jpg',
    address: '63 Salem St # 1, Boston, MA 02113',
    phone: ' (617)742-3474',
    icon: '../images/fish.png',
    url: 'https://www.neptuneoyster.com/'
  },
]

//use these two functions to show data on the pages. I'm showing these information on a info-window here.
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
    restaurants.forEach(function(restaurant) {
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


  $.each(restaurants, function(index, restaurant) {
    $('#restaurant-name').html(restaurant.name)
    $('#restaurant-phone').html(restaurant.phone)
  })



