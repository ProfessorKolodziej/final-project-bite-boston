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

function makeMarker(map, position, icon) {
  return new MarkerWithLabel({
    position,
    draggable: false,
    clickable: true,
    map,
    labelContent: '',
    icon,
  });
}

// home page info-window.
function mapInfoWindow(restaurant) {
  return '<div class="info-card" id="homepage-info-card">'
    + '<div class="image-wrapper">'
      + `<img src=${restaurant.image} class="info-card-image" alt="restaurant-img"/>`
    + '</div>'
    + `<h3> ${restaurant.name} </h3>`
    + `<p style="font-weight: 500;"> ${restaurant.address} </p>`
    + `<p style="font-weight: 500;"> ${restaurant.phone} </p>`
    + ' <button type="button" class="map-card-details" style="background-color: #CC4B47; color: white; border-style: none; padding: 10px 40px; position: relative; display: block; margin-left: auto; margin-right: auto; border-radius: 3.125rem;">Details</button>'
  + '</div>';
}

// this loads the map
mapLoader.initMap(mapLoaderOptions)
  .then((map) => {
    restaurantList.forEach((restaurant) => {
      const marker = makeMarker(map, new google.maps.LatLng( // eslint-disable-line no-undef
        restaurant.location.lat, restaurant.location.lng,
      ), restaurant.icon);
      const placeInfo = mapInfoWindow(restaurant);

      const parsedMapHTML = new DOMParser().parseFromString(placeInfo, 'text/html');
      const mapButton = parsedMapHTML.querySelector('.map-card-details');
      mapButton.dataset.restaurant = JSON.stringify(restaurant);

      const info = new google.maps.InfoWindow({ // eslint-disable-line no-undef
        content: parsedMapHTML.documentElement.innerHTML, // this should be a string
      });

      marker.addListener('click', () => {
        info.open(map, marker);
      });
    });
  });

// Restaurant detail page scripts
// this is the html for the detail pages
function restaurantDetail(restaurant) {
  return '<section id= "restaurant-detail">'
    + '<button class="close-detail-button"><</button>'
    + '<div class="detail-container">'
    + '<div class="image-name-wrapper-detail">'
        + `<h2 class="restaurant-name"> ${restaurant.name} </h2>`
    + '<div class="image-wrapper-detail">'
      + `<img src=${restaurant.imageDetail} id="detail_image" class="restaurant-page-image" alt="restaurant-img"/>`
    + '</div>'
    + '</div>'
    + '</div>'
    + '<div class="detail-phone-box-intro-wrapper">'
    + '<div class="detail-phone-box-wrapper">'
    + '<div class="restaurant-detail-phone-container">'
    + '<img class="phone-icon" src= "./images/phone-icon.png">'
    + `<p id="detail-phone" class="restaurant-detail-phone"> ${restaurant.phone} </p>`
    + '</div>'
    + '<div class="restaurant-detail-box">'
    + '<h3>Location</h3>'
    + `<p> ${restaurant.address} </p>`
    + '<h3>Hours of Operation</h3>'
    + `<p> ${restaurant.hours} </p>`
    + '<h3>Price</h3>'
    + `<p> ${restaurant.price} </p>`
    + '<h3>Cuisines</h3>'
    + `<p> ${restaurant.cuisines} </p>`
    + '<h3>Dining Style</h3>'
    + `<p> ${restaurant.diningstyle} </p>`
    + '<h3>Dresscode</h3>'
    + `<p> ${restaurant.dresscode} </p>`
  + '</div>'
  + '</div>'
  + '<div class="restaurant-detail-intro">'
  + '<h3 class="intro-title">Introduction</h3>'
  + `<p id="shrinkMe" class="shrinkable"> ${restaurant.introduction} </p>`
  + '</div>'
  + '</div>'
  + '<div class="popular-dishes-container">'
  + '<h3 class="pictures-title">Popular Dishes</h3>'
  + '<div class="picture-container">'
  + `<img src=${restaurant.pictureOne} class="detail-page-pic" alt="pictures of popular dishes from various restaurants"/>`
  + `<img src=${restaurant.pictureTwo} class="detail-page-pic" alt="pictures of popular dishes from various restaurants"/>`
  + `<img src=${restaurant.pictureThree} class="detail-page-pic" alt="pictures of popular dishes from various restaurants"/>`
  + `<img src=${restaurant.pictureFour} class="detail-page-pic" alt="pictures of popular dishes from various restaurants"/>`
  + '</div>'
  + '</div>'
  + '</section>';
}

// adds the detail page to the detail button on home page
document.addEventListener('click', (event) => {
  if (event.target.className === 'map-card-details') {
    const restaurant = JSON.parse(event.target.dataset.restaurant);
    const p = document.createElement('restaurant-detail');
    p.innerHTML = restaurantDetail(restaurant);
    document.body.appendChild(p);
  }
});

// hides the map and browse restaurants button
document.addEventListener('click', (event) => {
  if (event.target.className === 'map-card-details') {
    const homepageMap = document.getElementById('google_map');
    if (homepageMap.style.display === 'none') {
      homepageMap.style.display = 'block';
    } else {
      homepageMap.style.display = 'none';
    }
  }
  if (event.target.className === 'map-card-details') {
    const homepageButton = document.getElementById('homepage-browse-restaurants');
    if (homepageButton.style.display === 'none') {
      homepageButton.style.display = 'block';
    } else {
      homepageButton.style.display = 'none';
    }
  }
});

// brings the map and browse restaurant button back up
document.addEventListener('click', (event) => {
  if (event.target.className === 'close-detail-button') {
    const filter = document.getElementById('google_map');
    if (filter.style.display === 'none') {
      filter.style.display = 'block';
    } else {
      filter.style.display = 'none';
    }
  }
  if (event.target.className === 'close-detail-button') {
    const filter = document.getElementById('homepage-browse-restaurants');
    if (filter.style.display === 'none') {
      filter.style.display = 'block';
    } else {
      filter.style.display = 'none';
    }
  }
});

// restaurant list page HTML
function mapInfoRestaurantList(restaurant) {
  return '<div class="list-page-info-card">'
  + `<h3 class="list-page-name"> ${restaurant.name} </h3>`
  + `<img src=${restaurant.icon} class="list-page-icon" alt="restaurant-icon-img"/>`
  + `<p class="list-page-phone"> ${restaurant.phone} </p>`
    + '<div class="list-page-image-wrapper">'
      + `<img src=${restaurant.image} class="list-page-info-card-image" alt="restaurant-img"/>`
    + '</div>'
    + `<p class="list-page-address"> ${restaurant.address} </p>`
    + `<p class="list-page-introduction"> ${restaurant.introduction} </p>`
    + '<button class="list-page-details-button" id="hidebox">  Details </button>'
    + '</div>';
}

// this creates the cards on the list page
function renderList() {
  restaurantList.forEach((restaurant) => {
    const ul = document.getElementById('restaurant-list');
    const li = document.createElement('li');
    restaurant.filterTag.forEach((tag) => {
      li.classList.add(tag);
    });
    li.classList.add('filterElement');
    const restaurantHTML = mapInfoRestaurantList(restaurant);
    const parsedHTML = new DOMParser().parseFromString(restaurantHTML, 'text/html');
    const button = parsedHTML.querySelector('.list-page-details-button');
    button.dataset.restaurant = JSON.stringify(restaurant);
    // This is where it goes on the page
    li.appendChild(parsedHTML.childNodes[0].querySelector('.list-page-info-card'));
    ul.appendChild(li);
  });
}
document.addEventListener('DOMContentLoaded', renderList);

// This controls the button click for showing the restaurant detail
document.addEventListener('click', (event) => {
  if (event.target.className === 'list-page-details-button') {
    const restaurant = JSON.parse(event.target.dataset.restaurant);
    const p = document.createElement('restaurant-detail');
    p.innerHTML = restaurantDetail(restaurant);
    document.body.appendChild(p);
  }
});

// this hides the list
document.addEventListener('click', (event) => {
  if (event.target.className === 'list-page-details-button') {
    const info = document.getElementById('restaurant-list');
    if (info.style.display === 'none') {
      info.style.display = 'block';
    } else {
      info.style.display = 'none';
    }
  }
  if (event.target.className === 'list-page-details-button') {
    const filter = document.getElementById('filterButton');
    if (filter.style.display === 'none') {
      filter.style.display = 'block';
    } else {
      filter.style.display = 'none';
    }
  }
  if (event.target.className === 'list-page-details-button') {
    const mapButton = document.getElementById('back-to-map');
    if (mapButton.style.display === 'none') {
      mapButton.style.display = 'block';
    } else {
      mapButton.style.display = 'none';
    }
  }
});

// this closes the detail page with the x button
document.addEventListener('click', (event) => {
  if (event.target.className === 'close-detail-button') {
    const detailPage = document.getElementById('restaurant-detail');
    detailPage.remove();
  }
});

// this brings up the list page again
document.addEventListener('click', (event) => {
  if (event.target.className === 'close-detail-button') {
    const info = document.getElementById('restaurant-list');
    if (info.style.display === 'none') {
      info.style.display = 'block';
    } else {
      info.style.display = 'none';
    }
  }
  if (event.target.className === 'close-detail-button') {
    const filter = document.getElementById('filterButton');
    if (filter.style.display === 'none') {
      filter.style.display = 'block';
    } else {
      filter.style.display = 'none';
    }
  }
  if (event.target.className === 'close-detail-button') {
    const mapButton = document.getElementById('back-to-map');
    if (mapButton.style.display === 'none') {
      mapButton.style.display = 'block';
    } else {
      mapButton.style.display = 'none';
    }
  }
});

// filter
const selectedTag = new Set();

function filterSelection() {
  let i;
  const x = document.getElementsByClassName('filterElement');
  if (this.checked) {
    selectedTag.add(`.${this.value}`);
  } else {
    selectedTag.delete(`.${this.value}`);
  }

  const allclass = Array.from(selectedTag).join('');
  // Add the "show" class (display:block) to the filtered elements,
  // and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i += 1) {
    if (allclass.length === 0 || x[i].matches(allclass)) {
      x[i].classList.remove('filter');
    } else {
      x[i].classList.add('filter');
    }
  }
}

const checkboxes = document.getElementsByClassName('filterSelection');

for (const checkbox of checkboxes) { // eslint-disable-line no-restricted-syntax
  checkbox.addEventListener('change', filterSelection);
}

// filter button
let dropdownBtn = document.querySelector('.menu-btn');
let menuContent = document.querySelector('.menu-content');
dropdownBtn.addEventListener('click', () => {
    if (menuContent.style.display === "") {
        menuContent.style.display = "block";
    } else {
        menuContent.style.display = "";
    }
});